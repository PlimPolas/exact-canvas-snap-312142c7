import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const btnBase =
  "inline-flex items-center justify-center gap-2.5 rounded-lg font-heading font-bold uppercase tracking-[0.04em] transition-all duration-300 whitespace-nowrap";

export const btnPrimary = cn(
  btnBase,
  "gradient-primary px-7 py-4 text-sm text-primary-foreground shadow-glow-sm hover:-translate-y-0.5 hover:shadow-glow",
);

export const btnGhost = cn(
  btnBase,
  "border border-border bg-background px-6 py-3.5 text-sm text-foreground hover:-translate-y-0.5 hover:border-primary hover:text-primary",
);

export const btnGhostHero = cn(
  btnBase,
  "border-[1.5px] border-white/20 bg-white/[0.06] px-7 py-4 text-sm text-white backdrop-blur-sm hover:border-white/35 hover:bg-white/12",
);

export function Badge({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 font-heading text-[0.6875rem] font-bold uppercase tracking-[0.1em]",
        tone === "light"
          ? "border border-primary/20 bg-primary/8 text-primary"
          : "border border-primary/30 bg-primary/18 text-primary-light backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SectionHeader({
  badge,
  title,
  desc,
  align = "center",
}: {
  badge: ReactNode;
  title: string;
  desc?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-3xl flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
      )}
    >
      <Badge>{badge}</Badge>
      <h2 className="font-serif text-[clamp(2rem,4.2vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.01em] text-foreground">
        {title}
      </h2>
      {desc ? (
        <p className="text-[0.9375rem] leading-relaxed text-text-secondary md:text-base">{desc}</p>
      ) : null}
    </div>
  );
}

export function PulseDot({ className }: { className?: string }) {
  return <span className={cn("pulse-dot", className)} aria-hidden="true" />;
}
