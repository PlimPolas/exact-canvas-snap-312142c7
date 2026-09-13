import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { smileCases } from "@/config/clinic";
import { useI18n } from "@/i18n";
import { SectionHeader } from "./ui-kit";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { Button } from "@/components/ui/button";

export function BeforeAfter() {
  const [index, setIndex] = useState(0);
  const { t } = useI18n();
  const total = smileCases.length;

  const go = (direction: 1 | -1) => setIndex((current) => (current + direction + total) % total);

  const active = smileCases[index]!;

  return (
    <section id="transformations" className="scroll-mt-24 bg-background px-4 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1100px]">
        <SectionHeader
          badge={t.beforeAfter.badge}
          title={t.beforeAfter.title}
          desc={t.beforeAfter.desc}
        />

        <div
          className="relative mt-10"
          role="group"
          aria-roledescription="carousel"
          aria-label={t.beforeAfter.carouselLabel}
        >
          <div key={active.caseNumber} className="animate-in fade-in duration-500">
            <BeforeAfterSlider
              caseNumber={active.caseNumber}
              beforeImage={active.beforeImage}
              afterImage={active.afterImage}
              priority={index === 0}
              onSwipe={go}
            />
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <span className="font-heading text-[0.75rem] font-bold uppercase tracking-[0.16em] text-text-muted">
              {active.caseNumber} <span className="text-border">/</span> {String(total).padStart(2, "0")}
            </span>

            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label={t.beforeAfter.previous}
                onClick={() => go(-1)}
                className="size-11 rounded-full border-border transition-transform hover:-translate-x-0.5 hover:border-primary hover:text-primary"
              >
                <ChevronLeft className="size-5" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label={t.beforeAfter.next}
                onClick={() => go(1)}
                className="size-11 rounded-full border-border transition-transform hover:translate-x-0.5 hover:border-primary hover:text-primary"
              >
                <ChevronRight className="size-5" />
              </Button>
            </div>
          </div>

          <div className="mt-4 h-px w-full overflow-hidden bg-border">
            <span
              className="block h-full gradient-primary transition-all duration-500"
              style={{ width: `${((index + 1) / total) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
