"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { t: any };

export default function Footer({ t }: Props) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  return (
    <footer className="mt-16 sm:mt-24 border-t border-border">
      <div className="container py-8 flex flex-col-reverse items-center gap-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ParkAlarm. {t.footer.copyright}
        </p>
        <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <Link href={isEnglish ? "/en/privacy" : "/privacy"} className="transition-colors hover:text-foreground">{t.footer.privacy}</Link>
          <Link href={isEnglish ? "/en/terms" : "/terms"} className="transition-colors hover:text-foreground">{t.footer.terms}</Link>
          <Link href={isEnglish ? "/en/cookies" : "/cookies"} className="transition-colors hover:text-foreground">{t.footer.cookies}</Link>
          <Link href={isEnglish ? "/en/press" : "/press"} className="transition-colors hover:text-foreground">{t.footer.press}</Link>
          <Link href={isEnglish ? "/" : "/en"} className="transition-colors hover:text-foreground">{isEnglish ? t.footer.dutch : t.footer.english}</Link>
        </nav>
      </div>
    </footer>
  );
}
