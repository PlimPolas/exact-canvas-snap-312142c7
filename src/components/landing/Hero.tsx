import { ArrowRight, CalendarCheck, Star } from "lucide-react";
import { heroPoster } from "@/config/clinic";
import { useI18n } from "@/i18n";
import { useBooking } from "./booking-context";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { openBooking } = useBooking();
  const { t } = useI18n();

  return (
    <header
      id="top"
      className="relative flex min-h-[92svh] w-full flex-col overflow-hidden bg-deep"
      aria-label={t.hero.sectionLabel}
    >
      <div className="absolute inset-0 z-1">
        <img
          src={heroPoster}
          alt={t.hero.imageAlt}
          fetchPriority="high"
          className="hero-zoom size-full object-cover object-[62%_top] md:object-[78%_top] lg:object-[72%_15%]"
        />
        <div className="hero-overlay absolute inset-0 z-2" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 items-center px-5 pb-20 pt-28 sm:px-8 md:pb-16 lg:px-16 lg:pt-32">
        <div className="flex max-w-[780px] flex-col items-start">
          <h1 className="hero-title animate-hero-in delay-2 max-w-[16ch] text-[clamp(2.35rem,5.4vw,4.6rem)] font-extralight leading-[1.08] sm:max-w-[18ch]">
            {t.hero.title}{" "}
            <span className="hero-accent font-light">{t.hero.titleAccent}</span>
          </h1>

          <p className="animate-hero-in delay-3 mt-8 max-w-[54ch] text-base font-light leading-[1.8] text-primary-foreground/70 md:text-[1.0625rem]">
            {t.hero.subtitle}
          </p>

          <div className="animate-hero-in delay-4 mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Button
              type="button"
              onClick={() => openBooking("veneers")}
              className="h-12 w-full rounded-full px-7 text-sm font-medium tracking-[0.01em] shadow-soft sm:w-auto"
            >
              <CalendarCheck className="size-[1.0625rem]" />
              <span>{t.hero.primaryCta}</span>
            </Button>
            <Button
              asChild
              variant="outline"
              className="group h-12 w-full rounded-full border-primary-foreground/20 bg-transparent px-7 text-sm font-light text-primary-foreground/90 shadow-none hover:border-primary-foreground/40 hover:bg-primary-foreground/8 hover:text-primary-foreground sm:w-auto"
            >
              <a href="#transformations">
                <span>{t.hero.secondaryCta}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <div className="animate-hero-in delay-4 mt-10 flex items-center gap-2 text-[0.8125rem] font-light tracking-[0.01em] text-primary-foreground/55">
            <Star className="size-3.5 fill-warning text-warning" />
            <span>{t.hero.trustLine}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
