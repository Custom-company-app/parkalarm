import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: "600",
});

const siteName = "ParkAlarm";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.parkalarm.example";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "ParkAlarm – Slim gewaarschuwd bij parkeren",
  description:
    "ParkAlarm waarschuwt je precies wanneer het telt. Zet zones en activiteiten aan, koppel je auto/BT-device en ontvang slimme meldingen.",
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon.ico" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      { rel: "icon", url: "/favicons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/favicons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/favicons/site.webmanifest",
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName,
    title: "ParkAlarm – Slim gewaarschuwd bij parkeren",
    description:
      "ParkAlarm waarschuwt je precies wanneer het telt. Zet zones en activiteiten aan, koppel je auto/BT-device en ontvang slimme meldingen.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "ParkAlarm – Slim gewaarschuwd bij parkeren",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ParkAlarm – Slim gewaarschuwd bij parkeren",
    description:
      "ParkAlarm waarschuwt je precies wanneer het telt. Zet zones en activiteiten aan, koppel je auto/BT-device en ontvang slimme meldingen.",
    images: ["/og.jpg"],
  },
  alternates: { canonical: "/", languages: { en: "/en" } },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;

  return (
    <html lang="nl" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#1140ff" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#1140ff" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only">Direct naar inhoud</a>

        {children}

        {GA_ID ? (
          <>
            <Script id="ga-consent-default" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied',
});
`}
            </Script>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true, transport_type: 'beacon' });`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
