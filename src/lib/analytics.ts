"use client";

type EventName =
  | "cta_click"
  | "nav_click"
  | "subscribe_attempt"
  | "subscribe_success"
  | "subscribe_error"
  | "faq_open";

export function track(name: EventName, params: Record<string, any> = {}) {
  try {
    if (typeof window !== "undefined") {
      // gtag
      // @ts-ignore
      window.gtag?.("event", name, params);
      // dataLayer fallback
      // @ts-ignore
      window.dataLayer?.push({ event: name, ...params });
    }
  } catch {
    // no-op
  }
}
