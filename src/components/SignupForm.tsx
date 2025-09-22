"use client";

import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

export default function ContactForm({ t }: Props) {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};

    if (!name.trim()) errs.name = t?.contact?.form?.validation?.nameRequired || "Naam is verplicht.";
    if (!isValidEmail(email)) errs.email = t?.contact?.form?.validation?.emailInvalid || "Voer een geldig e-mailadres in.";
    if (!subject.trim()) errs.subject = t?.contact?.form?.validation?.subjectRequired || "Onderwerp is verplicht.";
    if (!message.trim()) errs.message = t?.contact?.form?.validation?.messageRequired || "Bericht is verplicht.";

    // Extra validatie
    if (message.length < 10) errs.message = t?.contact?.form?.validation?.messageTooShort || "Bericht moet minimaal 10 karakters lang zijn.";
    if (message.length > 2000) errs.message = t?.contact?.form?.validation?.messageTooLong || "Bericht mag maximaal 2000 karakters lang zijn.";

    setErrors(errs);
    track("contact_attempt", { emailValid: !errs.email, hasSubject: !!subject, hasMessage: !!message });

    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    try {
      // Verstuur via Mailgun API route
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || t?.contact?.form?.errors?.general || "Er ging iets mis");

      toast({ 
        title: t?.contact?.form?.toast?.title || "Bericht verzonden!", 
        description: t?.contact?.form?.toast?.description || "We nemen zo spoedig mogelijk contact met je op." 
      });
      track("contact_success", { source: "contact_form" });

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err: any) {
      console.error('Contact form submission error:', err);

      let errorMessage = err?.message || t?.contact?.form?.error || t?.contact?.form?.errors?.general || "Er is iets misgegaan.";

      // Specifieke error messages voor verschillende scenario's
      if (err?.message?.includes('Failed to fetch')) {
        errorMessage = t?.contact?.form?.errors?.noConnection || "Geen internetverbinding. Controleer je verbinding en probeer opnieuw.";
      } else if (err?.message?.includes('429')) {
        errorMessage = t?.contact?.form?.errors?.tooManyRequests || "Te veel verzoeken. Probeer het over een uur opnieuw.";
      }

      toast({ 
        variant: "destructive", 
        title: t?.contact?.form?.errors?.title || "Fout", 
        description: errorMessage
      });
      track("contact_error", { 
        message: err?.message,
        type: err?.name || 'unknown'
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t?.contact?.title || "Neem contact met ons op"}
              </h2>
              <p className="text-xl text-gray-600">
                {t?.contact?.subtitle || "Heb je vragen of wil je meer weten over ParkAlarm? We horen graag van je!"}
              </p>
            </div>

            <form onSubmit={onSubmit} noValidate className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    {t?.contact?.form?.name || "Naam"} *
                  </Label>
                  <Input 
                    id="name" 
                    type="text" 
                    required
                    autoComplete="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder={t?.contact?.form?.placeholders?.name || "Je volledige naam"}
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    {t?.contact?.form?.email || "E-mailadres"} *
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    autoComplete="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder={t?.contact?.form?.placeholders?.email || "je@email.com"}
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="subject" className="text-gray-700 font-medium">
                  {t?.contact?.form?.subject || "Onderwerp"} *
                </Label>
                <Input 
                  id="subject" 
                  type="text" 
                  required
                  value={subject} 
                  onChange={(e) => setSubject(e.target.value)}
                  className="mt-2 h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder={t?.contact?.form?.placeholders?.subject || "Waar gaat je bericht over?"}
                />
                {errors.subject && <p className="mt-2 text-sm text-red-600">{errors.subject}</p>}
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-700 font-medium">
                  {t?.contact?.form?.message || "Bericht"} *
                </Label>
                <textarea 
                  id="message" 
                  required
                  rows={5}
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 resize-vertical"
                  placeholder={t?.contact?.form?.placeholders?.message || "Vertel ons wat je wilt weten of delen..."}
                />
                {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
              </div>

              <Button 
                type="submit" 
                className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition-colors"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {t?.contact?.form?.sending || "Bericht wordt verstuurd..."}
                  </span>
                ) : (
                  t?.contact?.form?.send || "Verstuur bericht"
                )}
              </Button>

              <p className="text-center text-sm text-gray-500">
                {t?.contact?.form?.privacy || "Door dit formulier te gebruiken ga je akkoord met onze"}{" "}
                <a href="/privacy" className="text-blue-600 hover:underline">{t?.contact?.form?.privacyLink || "privacybeleid"}</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
