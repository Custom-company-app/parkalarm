import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Toaster } from "@/components/ui/toaster";
import { getContent } from "@/lib/i18n";
import Script from "next/script";

export default async function Home() {
  const t = await getContent("nl");

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faq.items.map((q: any) => ({
      "@type": "Question",
      "name": q.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.a,
      },
    })),
  };
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ParkAlarm",
    "description": t.hero.sub,
    "brand": { "@type": "Brand", "name": "ParkAlarm" },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": t.pricing?.price || "0",
      "availability": "https://schema.org/PreOrder",
    },
  };

  return (
    <>
      <Header t={t} />
      <main id="main">
        <Hero t={t} />
        <HowItWorks t={t} />
        <Features t={t} />
        <Benefits t={t} />
        <SocialProof t={t} />
        <FAQ t={t} />
        <SignupForm t={t} />
      </main>
      <Footer t={t} />
      <CookieBanner />
      <Toaster />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
