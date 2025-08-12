import { NextRequest, NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function subscribeMailchimp(email: string, firstName?: string) {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;
  const dc = apiKey?.split("-")[1];
  if (!apiKey || !listId || !dc) {
    return { ok: true, mocked: true };
  }
  const res = await fetch(`https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`any:${apiKey}`).toString("base64")}`,
    },
    body: JSON.stringify({
      email_address: email,
      status: "pending", // double opt-in
      merge_fields: { FNAME: firstName || "" }
    }),
  });
  if (res.status === 400) {
    const b = await res.json();
    // Already subscribed?
    if (b.title === "Member Exists") {
      return { ok: true, deduped: true };
    }
    return { ok: false, error: b?.detail || "Mailchimp fout" };
  }
  if (!res.ok) {
    const txt = await res.text();
    return { ok: false, error: txt };
  }
  return { ok: true };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, firstName, useCase, optIn } = body || {};
    const honeypot = ""; // not provided intentionally
    const csrfHeader = req.headers.get("x-csrf") || "";
    const csrfCookie = req.cookies.get("pa_csrf")?.value || "";

    if (honeypot && String(honeypot).trim() !== "") {
      return NextResponse.json({ message: "Bot detected" }, { status: 400 });
    }
    if (!csrfHeader || !csrfCookie || csrfHeader !== csrfCookie) {
      return NextResponse.json({ message: "CSRF ongeldig" }, { status: 400 });
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ message: "E-mail ongeldig" }, { status: 400 });
    }
    if (!optIn) {
      return NextResponse.json({ message: "Opt-in vereist" }, { status: 400 });
    }

    // TODO: opslaan in database (Postgres/MySQL) indien beschikbaar
    // Eventueel deduplicatie op e-mail hash.

    const mc = await subscribeMailchimp(email, firstName);
    if (!mc.ok) {
      return NextResponse.json({ message: mc.error || "Inschrijving mislukt" }, { status: 500 });
    }

    return NextResponse.json({ ok: true, source: mc?.mocked ? "mock" : "mailchimp" });
  } catch (e: any) {
    return NextResponse.json({ message: e?.message || "Serverfout" }, { status: 500 });
  }
}
