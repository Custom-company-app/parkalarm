import Link from "next/link";

type Props = { t: any };

export default function Footer({ t }: Props) {
  return (
    <footer className="mt-16 sm:mt-24 border-t border-border">
      <div className="container py-8 flex flex-col-reverse items-center gap-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ParkAlarm. Alle rechten voorbehouden.
        </p>
        <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <Link href="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
          <Link href="/terms" className="transition-colors hover:text-foreground">Voorwaarden</Link>
          <Link href="/cookies" className="transition-colors hover:text-foreground">Cookies</Link>
          <Link href="/press" className="transition-colors hover:text-foreground">Pers</Link>
          <Link href="/en" className="transition-colors hover:text-foreground">English</Link>
        </nav>
      </div>
    </footer>
  );
}
