import { Quote, Star } from "lucide-react";
import { useI18n } from "@/i18n";
import { SectionHeader } from "./ui-kit";

export function Reviews() {
  const { t } = useI18n();

  return (
    <section id="reviews" className="scroll-mt-24 bg-surface-alt px-4 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeader badge={t.reviews.badge} title={t.reviews.title} desc={t.reviews.desc} />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.reviews.items.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-strong"
            >
              <Quote className="size-7 text-primary/25" />
              <blockquote className="text-[0.9375rem] leading-relaxed text-text-secondary">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full gradient-primary font-heading text-sm font-extrabold text-primary-foreground">
                  {review.initials}
                </span>
                <span className="flex flex-col">
                  <span className="font-heading text-[0.875rem] font-bold text-foreground">{review.name}</span>
                  <span className="flex items-center gap-0.5 text-warning">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
