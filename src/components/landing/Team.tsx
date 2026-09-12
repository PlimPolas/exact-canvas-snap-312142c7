import { Award, Check, Microscope, Smile, Sparkles } from "lucide-react";
import { about, clinic, differentiators } from "@/config/clinic";
import { useBooking } from "./booking-context";
import { Badge } from "./ui-kit";
import { Button } from "@/components/ui/button";

const icons = {
  face: Smile,
  microscope: Microscope,
  sparkles: Sparkles,
  award: Award,
} as const;

export function Team() {
  const { openBooking } = useBooking();

  return (
    <section id="about" className="scroll-mt-24 overflow-hidden bg-surface-alt px-4 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-strong">
            <img
              src={about.portrait}
              alt={`${clinic.dentist} — ${clinic.dentistRole}`}
              loading="lazy"
              width={612}
              height={808}
              className="aspect-4/5 size-full object-cover object-top"
            />
          </div>

          <div className="flex flex-col items-start gap-5">
            <Badge>{about.badge}</Badge>
            <h2 className="font-serif text-[clamp(2rem,4.2vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.01em] text-foreground">
              {about.title}
            </h2>
            <span className="font-heading text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-primary">
              {clinic.dentistRole}
            </span>

            <div className="flex flex-col gap-4">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[0.9375rem] leading-relaxed text-text-secondary md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="mt-1 grid w-full gap-2.5 sm:grid-cols-2">
              {about.credentials.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.875rem] font-medium text-text-secondary">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full gradient-primary text-primary-foreground">
                    <Check className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Button
              type="button"
              onClick={() => openBooking()}
              className="mt-3 h-12 rounded-full px-7 text-sm font-medium"
            >
              Book Your Smile Consultation
            </Button>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons] ?? Sparkles;
            return (
              <article
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-strong"
              >
                <span className="flex size-12 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-glow-sm">
                  <Icon className="size-6" />
                </span>
                <h3 className="font-heading text-lg font-extrabold leading-snug text-foreground">{item.title}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-text-secondary">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
