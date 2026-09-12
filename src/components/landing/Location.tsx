import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { clinic, officeHours } from "@/config/clinic";
import { SectionHeader, btnGhost, btnPrimary } from "./ui-kit";
import { cn } from "@/lib/utils";

export function Location() {
  return (
    <section id="contact" className="scroll-mt-24 bg-surface-alt px-4 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeader
          badge="Visit Us"
          title="Newport Beach · 1401 Avocado Ave"
          desc="A private suite minutes from Fashion Island, with easy parking and unhurried appointments."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1.15fr]">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 shadow-soft lg:p-8">
            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
                <MapPin className="size-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-extrabold text-foreground">Address</h3>
                <p className="mt-1 text-[0.9375rem] leading-relaxed text-text-secondary">{clinic.address}</p>
              </div>
            </div>

            <div className="flex gap-4 border-t border-border pt-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
                <Clock className="size-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-extrabold text-foreground">Office Hours</h3>
                <ul className="mt-1.5 flex flex-col gap-1">
                  {officeHours.map((item) => (
                    <li
                      key={item.day}
                      className="flex items-center justify-between gap-6 text-[0.9375rem] text-text-secondary"
                    >
                      <span>{item.day}</span>
                      <span className="font-medium text-foreground">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4 border-t border-border pt-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
                <Phone className="size-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-extrabold text-foreground">Phone</h3>
                <a href={clinic.phoneHref} className="mt-1 block text-[0.9375rem] font-semibold text-primary">
                  {clinic.phoneLabel}
                </a>
              </div>
            </div>

            <div className="flex gap-4 border-t border-border pt-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
                <Mail className="size-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-extrabold text-foreground">Email</h3>
                <a href={clinic.emailHref} className="mt-1 block break-all text-[0.9375rem] font-semibold text-primary">
                  {clinic.email}
                </a>
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(btnPrimary, "w-full sm:flex-1")}
              >
                <Navigation className="size-[1.125rem]" />
                Get Directions
              </a>
              <a href={clinic.phoneHref} className={cn(btnGhost, "w-full sm:flex-1")}>
                Call the Office
              </a>
            </div>
          </div>

          <div className="min-h-[320px] overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              title={`Map — ${clinic.name}`}
              src={clinic.mapsEmbedUrl}
              className="size-full min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
