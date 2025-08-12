"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

type Step = {
  title: string;
  text: string;
  image: string;
  alt: string;
};

export default function HowItWorks({ t }: { t: any }) {
  const steps: Step[] = t?.how?.steps || [];
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
          el.classList.add("animate-fade-up");
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.15 });

    elems.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [steps.length]);

  return (
    <section id="how-it-works" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hoe het werkt
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t?.how?.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step: Step, index: number) => (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el; }}
              data-delay={`${index * 120}ms`}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col items-center text-center opacity-0 will-change-transform"
            >
              <div className="mb-6 w-full h-80 relative">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                />
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
