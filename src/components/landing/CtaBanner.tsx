import { CalendarCheck, MessageCircle } from "lucide-react";
import { clinic } from "@/config/clinic";
import { useBooking } from "./booking-context";
import { PulseDot, btnWhatsapp } from "./ui-kit";
import { cn } from "@/lib/utils";

export function CtaBanner() {
  const { openBooking } = useBooking();

  return (
    <section className="bg-background px-4 py-16 sm:px-8 lg:px-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 rounded-3xl gradient-hero-dark px-6 py-12 text-center shadow-strong lg:px-16 lg:py-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 font-heading text-[0.625rem] font-bold uppercase tracking-[0.1em] text-white sm:text-[0.6875rem]">
          <PulseDot className="text-success" />
          Agenda aberta para esta semana
        </div>
        <h2 className="max-w-[760px] font-heading text-[clamp(1.75rem,4.5vw,3rem)] font-extrabold leading-[1.1] text-white">
          Seu novo sorriso começa com uma avaliação
        </h2>
        <p className="max-w-[560px] text-[0.9375rem] leading-relaxed text-white/60 lg:text-base">
          Diagnóstico completo, plano de tratamento digital e condições de parcelamento apresentadas na mesma
          consulta.
        </p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <button
            type="button"
            onClick={() => openBooking()}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-white px-7 py-4 font-heading text-sm font-bold uppercase tracking-[0.04em] text-foreground transition-all hover:-translate-y-0.5 sm:w-auto"
          >
            <CalendarCheck className="size-[1.125rem]" />
            Agendar Avaliação
          </button>
          <a
            href={clinic.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(btnWhatsapp, "w-full sm:w-auto")}
          >
            <MessageCircle className="size-[1.125rem]" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
