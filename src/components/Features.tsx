"use client";

import React, { useEffect, useRef } from "react";

type Feature = {
  icon: string;
  title: string;
  text: string;
};

export default function Features({ t }: { t: any }) {
  const features: Feature[] = t?.features?.items || [];
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
          el.classList.add("animate-tilt-in");
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
            Waarom ParkAlarm?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            De slimste manier om parkeeroverlast te voorkomen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature: Feature, index: number) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-delay={`${index * 80}ms`}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 opacity-0 will-change-transform"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
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
