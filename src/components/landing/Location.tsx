import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { SectionHeader, btnGhost, btnPrimary } from "./ui-kit";
import { cn } from "@/lib/utils";

export function Location() {
  return (
    <section id="localizacao" className="scroll-mt-24 bg-surface-alt px-4 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeader
          badge="Onde Estamos"
          title="No coração da Savassi, aberto 24 horas"
          desc="Estacionamento privativo gratuito e acesso fácil para todas as regiões de Belo Horizonte."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1.15fr]">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 shadow-soft lg:p-8">
            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
                <MapPin className="size-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-extrabold text-foreground">Endereço</h3>
                <p className="mt-1 text-[0.9375rem] leading-relaxed text-text-secondary">{clinic.address}</p>
              </div>
            </div>

            <div className="flex gap-4 border-t border-border pt-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
                <Clock className="size-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-extrabold text-foreground">Horário</h3>
                <p className="mt-1 text-[0.9375rem] leading-relaxed text-text-secondary">{clinic.hours}</p>
              </div>
            </div>

            <div className="flex gap-4 border-t border-border pt-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
                <Phone className="size-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-extrabold text-foreground">Telefone & WhatsApp</h3>
                <a
                  href={clinic.phoneHref}
                  className="mt-1 block text-[0.9375rem] font-semibold text-primary"
                >
                  {clinic.phoneLabel}
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
                Traçar Rota
              </a>
              <a
                href={clinic.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(btnGhost, "w-full sm:flex-1")}
              >
                Abrir no Waze
              </a>
            </div>
          </div>

          <div className="min-h-[320px] overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              title={`Mapa da localização — ${clinic.name}`}
              src="https://www.google.com/maps?q=Av.+Get%C3%BAlio+Vargas,+1649,+Savassi,+Belo+Horizonte+-+MG&output=embed"
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
