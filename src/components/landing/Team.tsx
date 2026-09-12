import { doctors } from "@/config/clinic";
import { SectionHeader } from "./ui-kit";
import { cn } from "@/lib/utils";
import { CoverflowCarousel } from "./CoverflowCarousel";

export function Team() {
  return (
    <section id="equipe" className="scroll-mt-24 overflow-hidden bg-surface-alt px-4 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeader
          badge="Corpo Clínico"
          title="Especialistas dedicados a cada etapa do seu tratamento"
          desc="Cada procedimento é conduzido por um profissional com especialização na área — nunca por um generalista."
        />

        <div className="mt-10">
          <CoverflowCarousel
            items={doctors}
            getKey={(doctor) => doctor.name}
            getLabel={(doctor) => `${doctor.name} — ${doctor.specialty}`}
            ariaLabel="Corpo clínico"
            previousLabel="Médico anterior"
            nextLabel="Próximo médico"
            viewLabel={(doctor) => `Ver ${doctor.name}`}
            trackClassName="h-[420px] sm:h-[460px] lg:h-[500px]"
            renderItem={(doctor, active) => (
              <article
                className={cn(
                  "flex h-full flex-col overflow-hidden rounded-2xl border bg-background transition-shadow duration-500",
                  active ? "border-primary/30 shadow-strong" : "border-border shadow-soft",
                )}
              >
                <div className="relative flex-1 overflow-hidden bg-surface-alt">
                  <img
                    src={doctor.photo}
                    alt={`${doctor.name} — ${doctor.specialty}`}
                    loading="eager"
                    draggable={false}
                    className="size-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(to_top,rgba(9,14,23,0.7),transparent)]" />
                </div>
                <div className="flex flex-col gap-1 p-4">
                  <span className="font-heading text-[0.625rem] font-bold uppercase tracking-[0.08em] text-primary">
                    {doctor.specialty}
                  </span>
                  <h3 className="font-heading text-[0.9375rem] font-extrabold text-foreground sm:text-base">
                    {doctor.name}
                  </h3>
                  <span className="text-xs font-medium text-text-muted">{doctor.cro}</span>
                </div>
              </article>
            )}
          />
        </div>
      </div>
    </section>
  );
}
