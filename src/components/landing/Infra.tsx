import { Check } from "lucide-react";
import { infraGallery, infraHighlights } from "@/config/clinic";
import { SectionHeader } from "./ui-kit";
import { cn } from "@/lib/utils";

export function Infra() {
  return (
    <section id="studio" className="scroll-mt-24 bg-background px-4 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeader
          badge="The Studio"
          title="A calm, private setting on Avocado Ave"
          desc="Advanced imaging and digital planning in a quiet, unhurried environment designed for one patient at a time."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {infraGallery.map((image, index) => (
            <div
              key={image.alt}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border shadow-soft",
                index === 0 && "md:col-span-2 lg:col-span-2 lg:row-span-2",
              )}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={cn(
                  "size-full object-cover transition-transform duration-500 group-hover:scale-105",
                  index === 0 ? "aspect-4/3 lg:aspect-auto lg:h-full lg:min-h-[420px]" : "aspect-4/3",
                )}
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(12,12,14,0.82),transparent)] p-4 pt-10">
                <span className="font-heading text-[0.8125rem] font-bold text-white">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <ul className="mt-8 grid gap-3 md:grid-cols-3">
          {infraHighlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-3 rounded-xl border border-border bg-surface-alt p-4 text-[0.875rem] font-medium text-text-secondary"
            >
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full gradient-primary text-primary-foreground">
                <Check className="size-3" />
              </span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
