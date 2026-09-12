import { useCallback, useState } from "react";
import {
  ArrowRight,
  Microscope,
  RefreshCw,
  Smile,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { treatmentFilters, treatments } from "@/config/clinic";
import type { TreatmentCategory } from "@/config/clinic";
import { useBooking } from "./booking-context";
import { Badge, SectionHeader } from "./ui-kit";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CoverflowCarousel } from "./CoverflowCarousel";

const icons = {
  tooth: Stethoscope,
  sparkles: Sparkles,
  refresh: RefreshCw,
  face: Smile,
  microscope: Microscope,
} as const;

const treatmentCardWidth = (width: number) =>
  Math.min(Math.max(width * (width < 640 ? 0.78 : width < 1024 ? 0.48 : 0.31), 250), 430);

export function Treatments() {
  const [filter, setFilter] = useState<TreatmentCategory | "all">("all");
  const { openBooking } = useBooking();

  const visible = treatments.filter((t) => filter === "all" || t.category === filter);
  const selectFilter = useCallback((value: TreatmentCategory | "all") => setFilter(value), []);

  return (
    <section id="tratamentos" className="scroll-mt-24 bg-surface-alt px-4 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeader
          badge="Especialidades"
          title="Tratamentos completos em um só lugar"
          desc="Da urgência noturna ao planejamento estético digital: cada especialidade conduzida por um profissional dedicado, com tecnologia de ponta e protocolos sem dor."
        />

        <div className="mt-8 flex snap-x gap-2.5 overflow-x-auto pb-2 lg:flex-wrap lg:justify-center lg:overflow-visible">
          {treatmentFilters.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => selectFilter(item.value)}
              className={cn(
                "shrink-0 snap-start rounded-full border px-4 py-2.5 font-heading text-[0.8125rem] font-bold transition-all",
                filter === item.value
                  ? "border-transparent gradient-primary text-primary-foreground shadow-glow-sm"
                  : "border-border bg-background text-text-secondary hover:border-primary hover:text-primary",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <CoverflowCarousel
            items={visible}
            getKey={(treatment) => treatment.title}
            getLabel={(treatment) => `${treatment.title} — ${treatment.tag}`}
            ariaLabel="Tratamentos disponíveis"
            previousLabel="Tratamento anterior"
            nextLabel="Próximo tratamento"
            viewLabel={(treatment) => `Ver ${treatment.title}`}
            trackClassName="h-[540px] sm:h-[500px] lg:h-[480px]"
            cardWidth={treatmentCardWidth}
            slideRole="group"
            disableBlur
            renderItem={(treatment, active) => {
              const Icon = icons[treatment.icon as keyof typeof icons] ?? Stethoscope;
              return (
                <article
                  className={cn(
                    "group flex h-full flex-col gap-4 overflow-hidden rounded-2xl border bg-background p-6 shadow-soft transition-shadow duration-500 lg:p-8",
                    active ? "border-primary/30 shadow-strong" : "border-border",
                  )}
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-glow-sm">
                    <Icon className="size-6" />
                  </div>
                  <div className="flex min-h-0 flex-1 flex-col gap-3">
                    <Badge>{treatment.tag}</Badge>
                    <h3 className="font-heading text-xl font-extrabold leading-snug text-foreground lg:text-[1.375rem]">
                      {treatment.title}
                    </h3>
                    <p className="text-[0.9375rem] leading-relaxed text-text-secondary">{treatment.text}</p>
                    <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-border pt-4">
                      <span className="font-heading text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-text-muted">
                        {treatment.footnote}
                      </span>
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={(event) => {
                          event.stopPropagation();
                          openBooking(treatment.title);
                        }}
                        className="ml-auto h-auto p-0 font-heading text-[0.8125rem] font-bold text-primary hover:translate-x-0.5 hover:bg-transparent hover:text-primary"
                      >
                        {treatment.cta}
                        <ArrowRight className="size-4" />
                      </Button>
                    </div>
                  </div>
                </article>
              );
            }}
          />
        </div>

      </div>
    </section>
  );
}
