"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

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
          <CardTitle>Cookie-instellingen</CardTitle>
          <CardDescription>
            Wij gebruiken cookies voor analyse om de app te verbeteren.
            Zie de <a href="/cookies" className="underline">cookieverklaring</a>.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-3">
           <Button variant="outline" className="w-full" onClick={() => updateConsent(false)}>
            Weigeren
          </Button>
          <Button className="w-full" onClick={() => updateConsent(true)}>
            Accepteren
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
