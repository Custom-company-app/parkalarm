"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { track } from "@/lib/analytics";
import Link from "next/link";
import { useInView } from "@/lib/useInView";
import { useRef, useEffect } from "react";

export default function Hero({ t }: { t: any }) {
  const { ref: leftRef, inView: leftInView } = useInView<HTMLDivElement>({ rootMargin: "-10% 0px" });
  const { ref: mockRef, inView: mockInView } = useInView<HTMLDivElement>({ rootMargin: "-10% 0px" });

  // Ensure floating backgrounds always animate (they use CSS animate-float)
  // We'll trigger content animations when in view and use inline delays for staggering.
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

      <div className="container mx-auto px-4 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left content */}
          <div ref={leftRef} className="space-y-8">
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium ${leftInView ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: "0ms" }}
            >
              {t?.hero?.badge || "🚗 Beta beschikbaar"}
            </div>

            <div className="space-y-6">
              <h1
                className={`${leftInView ? "animate-fade-up" : "opacity-0"} text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight`}
                style={{ animationDelay: "80ms" }}
              >
                {t?.hero?.headline || "Nooit meer stress bij het parkeren"}
              </h1>

              <p
                className={`${leftInView ? "animate-fade-up" : "opacity-0"} text-xl text-gray-600 leading-relaxed max-w-lg`}
                style={{ animationDelay: "160ms" }}
              >
                {t?.hero?.sub || "ParkAlarm waarschuwt je precies wanneer het telt. Automatisch en betrouwbaar."}
              </p>
            </div>

            <div
              className={`${leftInView ? "animate-fade-up" : "opacity-0"} flex flex-col sm:flex-row gap-4`}
              style={{ animationDelay: "240ms" }}
            >
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" onClick={() => track("cta_click", { cta: "primary_hero" })}>
                <Link href="#contact">{t?.hero?.cta?.primary || "Neem contact op"}</Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg" onClick={() => track("cta_click", { cta: "secondary_hero" })}>
                <Link href="#how-it-works">{t?.hero?.cta?.secondary || "Hoe het werkt"}</Link>
              </Button>
            </div>

            <div
              className={`${leftInView ? "animate-fade-up" : "opacity-0"} flex items-center gap-8 text-sm text-gray-500`}
              style={{ animationDelay: "320ms" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                {t?.hero?.features?.creditcard || "Geen creditcard vereist"}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                {t?.hero?.features?.trial || "14 dagen gratis"}
              </div>
            </div>
          </div>

          {/* Right content - App mockup */}
          <div ref={mockRef} className={`relative ${mockInView ? "animate-zoom-in" : "opacity-0"}`} style={{ transition: "opacity .2s ease" }}>
            <div className="relative z-10 mx-auto w-80">
              {/* Phone mockup frame */}
              <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19]">
                  <Image 
                    src="/screenshots/alerts-overview.png" 
                    alt="ParkAlarm App Screenshot"
                    fill
                    style={{ objectFit: "cover" }}
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Floating notification */}
              <div
                className={`${mockInView ? "animate-pop-in" : "opacity-0"} absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-gray-200`}
                style={{ animationDelay: "420ms" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-900">{t?.contact?.form?.notification || "Zone actief"}</span>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-20 -left-10 sm:-left-20 w-32 h-32 sm:w-40 sm:h-40 bg-blue-200 rounded-full opacity-20 animate-float"></div>
            <div className="absolute bottom-20 -right-10 sm:-right-20 w-24 h-24 sm:w-32 sm:h-32 bg-purple-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '600ms' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
