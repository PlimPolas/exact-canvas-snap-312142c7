import { ArrowRight, CalendarCheck, Star } from "lucide-react";
import { heroContent } from "@/config/clinic";
import { useBooking } from "./booking-context";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { openBooking } = useBooking();

  return (
    <header
      id="top"
      className="relative flex min-h-[92svh] w-full flex-col overflow-hidden bg-deep"
      aria-label="Coastal Smiles Newport Beach introduction"
    >
      <div className="absolute inset-0 z-1">
        <img
          src={heroContent.poster}
          alt="Coastal Smiles Newport Beach treatment suite overlooking the coast"
          className="hero-zoom size-full object-cover object-[54%_center] md:object-center"
        />
        <div className="hero-overlay absolute inset-0 z-2" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 items-center px-5 pb-20 pt-28 sm:px-8 md:pb-16 lg:px-16 lg:pt-32">
        <div className="flex max-w-[780px] flex-col items-start">
          <div className="animate-hero-in delay-1 mb-9 inline-flex items-center rounded-full border border-primary-light/25 bg-deep/25 px-4 py-2 font-body text-[0.625rem] font-medium uppercase tracking-[0.13em] text-primary-light/85 backdrop-blur-sm sm:text-[0.6875rem] sm:tracking-[0.16em]">
            {heroContent.badge}
          </div>

          <h1 className="hero-title animate-hero-in delay-2 max-w-[16ch] text-[clamp(2.35rem,5.4vw,4.6rem)] font-extralight leading-[1.08] sm:max-w-[18ch]">
            {heroContent.title}{" "}
            <span className="hero-accent font-light">{heroContent.titleAccent}</span>
          </h1>

          <p className="animate-hero-in delay-3 mt-8 max-w-[54ch] text-base font-light leading-[1.8] text-primary-foreground/70 md:text-[1.0625rem]">
            {heroContent.subtitle}
          </p>

          <div className="animate-hero-in delay-4 mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Button
              type="button"
              onClick={() => openBooking("Porcelain Veneers")}
              className="h-12 w-full rounded-full px-7 text-sm font-medium tracking-[0.01em] shadow-soft sm:w-auto"
            >
              <CalendarCheck className="size-[1.0625rem]" />
              <span>{heroContent.primaryCta}</span>
            </Button>
            <Button
              asChild
              variant="outline"
              className="group h-12 w-full rounded-full border-primary-foreground/20 bg-transparent px-7 text-sm font-light text-primary-foreground/90 shadow-none hover:border-primary-foreground/40 hover:bg-primary-foreground/8 hover:text-primary-foreground sm:w-auto"
            >
              <a href="#transformations">
                <span>{heroContent.secondaryCta}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <div className="animate-hero-in delay-4 mt-10 flex items-center gap-2 text-[0.8125rem] font-light tracking-[0.01em] text-primary-foreground/55">
            <Star className="size-3.5 fill-warning text-warning" />
            <span>{heroContent.trustLine}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
