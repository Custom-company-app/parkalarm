"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import * as content from "@/content";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "nl";
  const t = content[lang].cookies;

  useEffect(() => {
    const consent = localStorage.getItem("pa_consent");
    if (!consent) setVisible(true);
  }, []);

  const updateConsent = (granted: boolean) => {
    localStorage.setItem("pa_consent", granted ? "granted" : "denied");
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: granted ? "granted" : "denied",
        ad_user_data: granted ? "granted" : "denied",
        ad_personalization: granted ? "granted" : "denied",
        analytics_storage: granted ? "granted" : "denied",
      });
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 w-full max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>{t.title}</CardTitle>
          <CardDescription>
            {t.description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-3">
           <Button variant="outline" className="w-full" onClick={() => updateConsent(false)}>
            {t.reject}
          </Button>
          <Button className="w-full" onClick={() => updateConsent(true)}>
            {t.accept}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
