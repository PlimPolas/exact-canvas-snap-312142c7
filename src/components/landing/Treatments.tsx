import {
  ArrowRight,
  Microscope,
  RefreshCw,
  Smile,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { format, useI18n } from "@/i18n";
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
  const { openBooking } = useBooking();
  const { t } = useI18n();

  return (
    <section id="services" className="scroll-mt-24 bg-surface-alt px-4 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeader badge={t.treatments.badge} title={t.treatments.title} desc={t.treatments.desc} />

        <div className="mt-8">
          <CoverflowCarousel
            items={t.treatments.items}
            getKey={(treatment) => treatment.key}
            getLabel={(treatment) => `${treatment.title} — ${treatment.tag}`}
            ariaLabel={t.treatments.ariaLabel}
            previousLabel={t.treatments.previousLabel}
            nextLabel={t.treatments.nextLabel}
            viewLabel={(treatment) => format(t.treatments.viewLabel, { title: treatment.title })}
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
                          openBooking(treatment.key);
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
