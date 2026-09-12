import { CalendarCheck, Phone } from "lucide-react";
import { clinic, ctaImage } from "@/config/clinic";
import { useBooking } from "./booking-context";
import { PulseDot, btnGhostHero } from "./ui-kit";
import { cn } from "@/lib/utils";

export function CtaBanner() {
  const { openBooking } = useBooking();

  return (
    <section className="bg-background px-4 py-16 sm:px-8 lg:px-16 lg:py-20">
      <div className="relative isolate mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 overflow-hidden rounded-3xl gradient-hero-dark px-6 py-12 text-center shadow-strong lg:px-16 lg:py-16">
        <img
          src={ctaImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 -z-10 size-full object-cover object-[70%_20%] opacity-25"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(10,10,12,0.92),rgba(10,10,12,0.72))]" />
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 font-heading text-[0.625rem] font-bold uppercase tracking-[0.1em] text-white sm:text-[0.6875rem]">
          <PulseDot className="text-success" />
          Now accepting new patients
        </div>
        <h2 className="max-w-[760px] font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.08] text-white">
          Ready to Design Your New Smile?
        </h2>
        <p className="max-w-[620px] text-[0.9375rem] leading-relaxed text-white/60 lg:text-base">
          Schedule a personalized consultation with Dr. Daniele Green and discover what’s possible with a treatment
          plan designed around your face, goals, and lifestyle.
        </p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <button
            type="button"
            onClick={() => openBooking()}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-white px-7 py-4 font-heading text-sm font-bold uppercase tracking-[0.04em] text-foreground transition-all hover:-translate-y-0.5 sm:w-auto"
          >
            <CalendarCheck className="size-[1.125rem]" />
            Book Your Smile Consultation
          </button>
          <a href={clinic.phoneHref} className={cn(btnGhostHero, "w-full sm:w-auto")}>
            <Phone className="size-[1.125rem]" />
            {clinic.phoneLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
