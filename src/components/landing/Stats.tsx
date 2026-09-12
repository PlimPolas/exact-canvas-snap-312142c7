import { stats } from "@/config/clinic";

export function Stats() {
  return (
    <section className="bg-background px-4 py-14 sm:px-8 lg:px-16 lg:py-20" aria-label="Números da clínica">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-x-6 gap-y-9 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
            <span className="font-heading text-[clamp(1.75rem,4.5vw,2.75rem)] font-extrabold leading-none text-gradient">
              {stat.value}
            </span>
            <span className="max-w-[190px] font-heading text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-text-muted sm:text-xs">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
