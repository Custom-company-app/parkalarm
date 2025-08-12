"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { track } from "@/lib/analytics";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

type Props = {
  t: any;
};

export default function Header({ t }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: "#features", label: "Functies" },
    { href: "#how-it-works", label: "Hoe het werkt" },
    { href: "#faq", label: "FAQ" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-lg shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-28">
          {/* Left side: Logo and Nav */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="group">
              <Image 
                src="/logo/logo.svg" 
                alt="ParkAlarm Logo" 
                width={80} 
                height={80}
                className="w-20 h-20 transition-transform duration-300 group-hover:scale-110"
              />
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                  onClick={() => track("nav_click", { target: item.href.slice(1) })}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right side: Switcher and Button */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button asChild
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg"
              onClick={() => track("cta_click", { cta: "header_contact" })}
            >
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
