import { ShieldCheck } from "lucide-react";
import { useI18n } from "@/i18n";

export function Marquee() {
  const { t } = useI18n();
  const items = [...t.marquee.items, ...t.marquee.items];

  return (
    <section
      className="relative overflow-hidden border-y border-border bg-surface-alt py-6"
      aria-label={t.marquee.ariaLabel}
    >
      <div className="marquee-track items-center gap-10 sm:gap-14">
        {items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-2 whitespace-nowrap font-heading text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-text-muted sm:text-sm"
          >
            <ShieldCheck className="size-4 text-primary/60" />
            {item}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-[linear-gradient(to_right,var(--surface-alt),transparent)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-[linear-gradient(to_left,var(--surface-alt),transparent)]" />
    </section>
  );
}
