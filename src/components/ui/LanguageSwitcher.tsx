"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NlFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 5 3" className="rounded-sm flex-shrink-0">
    <rect width="5" height="3" fill="#21468B"/>
    <rect width="5" height="2" fill="#FFFFFF"/>
    <rect width="5" height="1" fill="#AE1C28"/>
  </svg>
);

const EnFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 60 30" className="rounded-sm flex-shrink-0">
    <clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath>
    <path d="M0 0v30h60V0z" fill="#012169"/>
    <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" clipPath="url(#a)"/>
    <path d="M0 0l60 30m0-30L0 30" stroke="#C8102E" strokeWidth="4" clipPath="url(#a)"/>
    <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
    <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
  </svg>
);


export default function LanguageSwitcher() {
  const pathname = usePathname();

  const getSwitchUrl = (lang: "nl" | "en") => {
    if (lang === "nl") {
      const newPath = pathname.replace(/^\/en/, "");
      return newPath || "/";
    }
    if (lang === "en") {
      if (pathname.startsWith("/en")) return pathname;
      return `/en${pathname}`;
    }
    return pathname;
  };

  const isEnglish = pathname.startsWith("/en");

  return (
    <div className="flex items-center gap-2">
      <Button asChild variant={!isEnglish ? "secondary" : "ghost"} size="sm" className="px-2">
        <Link href={getSwitchUrl("nl")} className="flex items-center gap-2">
          <NlFlag />
          <span className="hidden sm:inline">NL</span>
        </Link>
      </Button>
      <Button asChild variant={isEnglish ? "secondary" : "ghost"} size="sm" className="px-2">
        <Link href={getSwitchUrl("en")} className="flex items-center gap-2">
          <EnFlag />
          <span className="hidden sm:inline">EN</span>
        </Link>
      </Button>
    </div>
  );
}
