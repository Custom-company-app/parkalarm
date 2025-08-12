"use client";

import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

type Props = { t: any };

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function genToken() {
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    const arr = new Uint8Array(16);
    crypto.getRandomValues(arr);
    return Array.from(arr, (b) => b.toString(16).padStart(2, "0")).join("");
  }
  return Math.random().toString(36).slice(2);
}

export default function SignupForm({ t }: Props) {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [useCase, setUseCase] = useState("stadsparkeren");
  const [optIn, setOptIn] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [csrf, setCsrf] = useState("");

  useEffect(() => {
    const fromCookie = document.cookie.split('; ').find(c => c.startsWith('pa_csrf='))?.split('=')[1];
    if (fromCookie) setCsrf(fromCookie);
    else {
      const tkn = genToken();
      document.cookie = `pa_csrf=${tkn}; path=/; SameSite=Lax`;
      setCsrf(tkn);
    }
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!isValidEmail(email)) errs.email = "Voer een geldig e-mailadres in.";
    if (!optIn) errs.optIn = "Bevestig de opt-in voor updates.";
    setErrors(errs);
    track("subscribe_attempt", { emailValid: !errs.email, optIn });

    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-csrf": csrf },
        body: JSON.stringify({ email, firstName, useCase, optIn }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Er ging iets mis");

      toast({ title: "Bedankt!", description: "Je staat op de lijst voor early access." });
      track("subscribe_success", { source: "landing" });

      setEmail("");
      setFirstName("");
      setUseCase("stadsparkeren");
      setOptIn(true);
    } catch (err: any) {
      toast({ variant: "destructive", title: "Fout", description: err?.message || "Er is iets misgegaan." });
      track("subscribe_error", { message: err?.message });
    } finally {
      setLoading(false);
    }
  };

  return (
      <section id="signup" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t?.signup?.title || "Klaar om te beginnen?"}
              </h2>
              <p className="text-xl text-gray-600">
                {t?.signup?.subtitle || "Meld je aan voor early access en krijg als eerste toegang tot ParkAlarm"}
              </p>
            </div>

            <form onSubmit={onSubmit} noValidate className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-gray-700 font-medium">
                    Voornaam
                  </Label>
                  <Input 
                    id="firstName" 
                    type="text" 
                    autoComplete="given-name" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-2 h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Je voornaam"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    E-mailadres *
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    autoComplete="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="je@email.com"
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="useCase" className="text-gray-700 font-medium">
                  Waarvoor ga je ParkAlarm gebruiken?
                </Label>
                <Select onValueChange={setUseCase} value={useCase}>
                  <SelectTrigger id="useCase" className="mt-2 h-12 rounded-lg border-gray-200">
                    <SelectValue placeholder="Kies je situatie..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="stadsparkeren">Stadsparkeren</SelectItem>
                    <SelectItem value="ev-laden">Elektrisch rijden & laden</SelectItem>
                    <SelectItem value="werk-zaak">Werk & zakelijk</SelectItem>
                    <SelectItem value="anders">Anders</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  checked={optIn} 
                  onChange={(e) => setOptIn(e.target.checked)}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                />
                <label className="text-gray-600 text-sm leading-relaxed">
                  Ik wil op de hoogte blijven van updates en nieuws over ParkAlarm. 
                  Je kunt je altijd uitschrijven.
                </label>
              </div>
              {errors.optIn && <p className="text-sm text-red-600">{errors.optIn}</p>}

              <Button 
                type="submit" 
                className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition-colors"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Bezig met aanmelden...
                  </span>
                ) : (
                  t?.cta?.primary || "Ja, ik wil early access!"
                )}
              </Button>

              <p className="text-center text-sm text-gray-500">
                Door aan te melden ga je akkoord met onze{" "}
                <a href="/terms" className="text-blue-600 hover:underline">voorwaarden</a>
                {" "}en{" "}
                <a href="/privacy" className="text-blue-600 hover:underline">privacybeleid</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
