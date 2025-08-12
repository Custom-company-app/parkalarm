"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { track } from "@/lib/analytics";

export default function Hero({ t }: { t: any }) {
  return (
    <section className="relative pt-32 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
              🚗 Beta beschikbaar
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t?.hero?.headline || "Nooit meer stress bij het parkeren"}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                {t?.hero?.sub || "ParkAlarm waarschuwt je precies wanneer het telt. Automatisch en betrouwbaar."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                onClick={() => track("cta_click", { cta: "primary_hero" })}
              >
                {t?.cta?.primary || "Meld me aan"}
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg"
                onClick={() => track("cta_click", { cta: "secondary_hero" })}
              >
                {t?.cta?.secondary || "Meer weten"}
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Geen creditcard vereist
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                14 dagen gratis
              </div>
            </div>
          </div>

          {/* Right content - App mockup */}
          <div className="relative">
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
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-gray-200 animate-bounce">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-900">Zone actief</span>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-20 -left-20 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 -right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
