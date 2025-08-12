"use client";

import { track } from "@/lib/analytics";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function FAQ({ t }: { t: any }) {
  const handleToggle = (q: string) => {
      track("faq_open", { question: q });
  };

  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="container max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Veelgestelde vragen</h2>
        </div>
        <Accordion type="single" collapsible className="w-full mt-8">
          {t.faq.items.map((item: any, i: number) => (
             <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger onClick={() => handleToggle(item.q)}>
                {item.q}
              </AccordionTrigger>
              <AccordionContent>
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
