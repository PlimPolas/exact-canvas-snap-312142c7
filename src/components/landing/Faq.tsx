import { faq } from "@/config/clinic";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "./ui-kit";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-background px-4 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto w-full max-w-[900px]">
        <SectionHeader badge="Dúvidas Frequentes" title="Perguntas que recebemos todos os dias" />

        <Accordion type="single" collapsible className="mt-9 flex flex-col gap-3">
          {faq.map((item, index) => (
            <AccordionItem
              key={item.q}
              value={`item-${index}`}
              className="rounded-xl border border-border bg-surface-alt px-5 last:border-b"
            >
              <AccordionTrigger className="text-left font-heading text-[0.9375rem] font-bold text-foreground hover:no-underline sm:text-base">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[0.9375rem] leading-relaxed text-text-secondary">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
