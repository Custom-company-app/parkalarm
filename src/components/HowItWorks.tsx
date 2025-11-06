"use client";

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
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.15 });

    elems.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [steps.length]);

  return (
    <section id="how-it-works" className="py-20 bg-gray-50/50 overflow-visible">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t?.how?.title || "Hoe het werkt"}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t?.how?.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch py-4">
          {steps.map((step: Step, index: number) => (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el; }}
              data-delay={`${index * 120}ms`}
              className="bg-white rounded-2xl p-6 pb-8 shadow-lg border border-gray-100 flex flex-col items-center text-center opacity-0 will-change-transform h-full"
            >
              <div className="mb-6 w-20 h-20 mx-auto flex items-center justify-center bg-blue-50 rounded-2xl">
                {index === 0 && (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
                {index === 1 && (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                )}
                {index === 2 && (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                )}
                {index === 3 && (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.73 21a2 2 0 01-3.46 0" />
                  </svg>
                )}
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
