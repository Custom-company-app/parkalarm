"use client";

import React, { useEffect, useRef } from "react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

// Inline SVG icon components
const MapPinIcon = () => (
  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const BluetoothIcon = () => (
  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
);

const BellIcon = () => (
  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.73 21a2 2 0 01-3.46 0" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CarIcon = () => (
  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6 0a1 1 0 001 1h2a1 1 0 001-1m0 0h1a2 2 0 002-2v-1" />
  </svg>
);

export default function Features({ t }: { t: any }) {
  const iconMap: { [key: string]: React.ReactNode } = {
    "🗺️": <MapPinIcon />,
    "🔗": <BluetoothIcon />,
    "⚡": <BellIcon />,
    "🔒": <LockIcon />,
    "✅": <CheckCircleIcon />,
    "🕘": <ClockIcon />,
    "🚗": <CarIcon />,
  };

  const translatedFeatures = t?.features?.items || [];
  const features: Feature[] = translatedFeatures.map((item: any) => ({
    icon: iconMap[item.icon] || item.icon,
    title: item.title,
    text: item.text,
  }));
  
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const elems = itemRefs.current.filter(Boolean) as HTMLElement[];
    if (!elems.length) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          const delay = el.getAttribute("data-delay") || "0ms";
          el.style.animationDelay = delay;
          el.classList.remove("opacity-0");
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.15 });

    elems.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [features.length]);

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t?.features?.title || "Waarom ParkAlarm?"}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t?.features?.subtitle || "De slimste manier om parkeeroverlast te voorkomen"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature: Feature, index: number) => (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el; }}
              data-delay={`${index * 80}ms`}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 opacity-0 will-change-transform"
            >
              <div className="flex items-center justify-center w-20 h-20 mb-4 bg-blue-50 rounded-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
