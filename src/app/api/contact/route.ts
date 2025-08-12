import { NextRequest, NextResponse } from "next/server";

// Rate limiting per IP (eenvoudig in-memory)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 3; // Max 3 berichten per uur per IP
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 uur

function getRealIpAddr(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const realIp = req.headers.get('x-real-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIp) {
    return realIp.trim();
  }
  return 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT_MAX) {
    return false;
  }

  userLimit.count++;
  return true;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function containsSpam(text: string): boolean {
  const spamWords = ['viagra', 'casino', 'lottery', 'winner', 'free money'];
  const lowercaseText = text.toLowerCase();
  return spamWords.some(word => lowercaseText.includes(word));
}

async function testMailgunDomain(domain: string, apiKey: string) {
  const servers = [
    'https://api.eu.mailgun.net/v3',
    'https://api.mailgun.net/v3'
  ];

  for (const server of servers) {
    try {
      console.log(`🔍 Testing domain on ${server}...`);

      const response = await fetch(`${server}/${domain}`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${Buffer.from(`api:${apiKey}`).toString('base64')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Domain verification successful on ${server}:`, {
          name: data.domain?.name,
          state: data.domain?.state,
          type: data.domain?.type
        });
        return;
      } else {
        console.log(`❌ Domain test failed on ${server}:`, response.status);
      }
    } catch (error: any) {
      console.log(`❌ Domain test error on ${server}:`, error.message);
    }
  }
}

async function sendEmail(name: string, email: string, subject: string, message: string, ip: string) {
  const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
  const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;

  // Altijd eerst naar console loggen
  console.log('📧 NIEUW CONTACTBERICHT');
  console.log('Van:', name, `<${email}>`);
  console.log('Onderwerp:', subject);
  console.log('Bericht:', message);
  console.log('IP:', ip);
  console.log('Tijd:', new Date().toLocaleString('nl-NL'));
  console.log('─'.repeat(50));

  if (!MAILGUN_DOMAIN || !MAILGUN_API_KEY) {
    console.log('ℹ️  Mailgun niet geconfigureerd, alleen console logging');
    return { success: true, method: 'console' };
  }

  // Test Mailgun domein status
  await testMailgunDomain(MAILGUN_DOMAIN, MAILGUN_API_KEY);

  try {
    // Debug Mailgun configuratie
    console.log('🔍 Mailgun Debug Info:');
    console.log('Domain:', MAILGUN_DOMAIN);
    console.log('API Key prefix:', MAILGUN_API_KEY?.substring(0, 8) + '...');
    console.log('Domain type:', MAILGUN_DOMAIN?.includes('sandbox') ? 'sandbox' : 'verified');

    const formData = new FormData();

    // Voor sandbox domains moet de 'from' email een specifiek format hebben
    const fromEmail = MAILGUN_DOMAIN?.includes('sandbox') 
      ? `postmaster@${MAILGUN_DOMAIN}`
      : `noreply@${MAILGUN_DOMAIN}`;

    console.log('From email:', fromEmail);

    formData.append('from', `ParkAlarm <${fromEmail}>`);
    formData.append('to', 'info@parkalarm.nl');
    formData.append('subject', `[ParkAlarm Contact] ${subject}`);
    formData.append('h:Reply-To', email);

    const emailBody = `
Nieuw contactbericht via ParkAlarm website:

Van: ${name}
E-mail: ${email}
Onderwerp: ${subject}

Bericht:
${message}

---
Verzonden: ${new Date().toLocaleString('nl-NL')}
IP-adres: ${ip}
    `.trim();

    formData.append('text', emailBody);

    const authHeader = `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64')}`;
    console.log('Auth header length:', authHeader.length);

    // Probeer eerst EU server, dan US server
    const servers = [
      'https://api.eu.mailgun.net/v3',
      'https://api.mailgun.net/v3'
    ];

    let response;
    let lastError;

    for (const server of servers) {
      try {
        console.log(`🌍 Trying server: ${server}`);

        response = await fetch(`${server}/${MAILGUN_DOMAIN}/messages`, {
          method: 'POST',
          headers: {
            'Authorization': authHeader,
          },
          body: formData,
        });

        console.log(`📊 ${server} response:`, response.status);

        if (response.ok) {
          console.log(`✅ Success with server: ${server}`);
          break; // Success! Stop trying other servers
        } else if (response.status === 401) {
          const errorText = await response.text();
          console.log(`🚫 401 error from ${server}:`, errorText);
          lastError = { server, status: response.status, error: errorText };
          continue; // Try next server
        } else {
          // Other error, break and handle below
          break;
        }
      } catch (fetchError: any) {
        console.log(`❌ Network error with ${server}:`, fetchError.message);
        lastError = { server, error: fetchError.message };
        continue;
      }
    }

    if (!response || !response.ok) {
      console.error('⚠️  All Mailgun servers failed:');
      if (lastError) {
        console.error('Last error:', lastError);
      }

      if (response) {
        const errorText = await response.text();
        console.error('Final response:', {
          status: response.status,
          statusText: response.statusText,
          body: errorText
        });
      }

      return { success: true, method: 'console-fallback' };
    }

    console.log('Mailgun response status:', response.status);
    console.log('Mailgun response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('⚠️  Mailgun detailed error:');
      console.error('Status:', response.status, response.statusText);
      console.error('Body:', errorText);

      // Probeer te parsen als JSON voor meer details
      try {
        const errorJson = JSON.parse(errorText);
        console.error('Parsed error:', errorJson);
      } catch (e) {
        console.error('Error body is not JSON');
      }

      return { success: true, method: 'console-fallback' };
    }

    const result = await response.json();
    console.log('✅ E-mail verzonden via Mailgun:', result.id);
    return { success: true, method: 'mailgun', id: result.id };

  } catch (error: any) {
    console.warn('⚠️  Mailgun error:', error.message);
    return { success: true, method: 'console-fallback' };
  }
}

export async function POST(req: NextRequest) {
  const ip = getRealIpAddr(req);

  try {
    // Rate limiting
    if (!checkRateLimit(ip)) {
      console.warn('🚫 Rate limit exceeded for IP:', ip);
      return NextResponse.json(
        { message: "Te veel berichten verzonden. Probeer het over een uur opnieuw." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validatie
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { message: "Alle velden zijn verplicht" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "Voer een geldig e-mailadres in" },
        { status: 400 }
      );
    }

    if (name.length > 100 || subject.length > 200 || message.length > 2000) {
      return NextResponse.json(
        { message: "Een van de velden is te lang" },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { message: "Bericht moet minimaal 10 karakters bevatten" },
        { status: 400 }
      );
    }

    // Spam controle
    if (containsSpam(name + ' ' + subject + ' ' + message)) {
      console.warn('🚫 Spam gedetecteerd van IP:', ip);
      return NextResponse.json(
        { message: "Bericht bevat niet toegestane inhoud" },
        { status: 400 }
      );
    }

    // E-mail verzenden
    const result = await sendEmail(
      name.trim(),
      email.trim().toLowerCase(),
      subject.trim(),
      message.trim(),
      ip
    );

    return NextResponse.json({
      success: true,
      message: "Bericht succesvol ontvangen! We nemen binnen 24 uur contact op."
    });

  } catch (error: any) {
    console.error('❌ Contact API error:', error.message);

    return NextResponse.json(
      { message: "Er is een fout opgetreden. Probeer het opnieuw." },
      { status: 500 }
    );
  }
}
