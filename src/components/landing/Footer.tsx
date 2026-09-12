import { Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { clinic, navLinks, specialtiesOptions } from "@/config/clinic";

export function Footer() {
  return (
    <footer className="bg-deep px-4 pb-8 pt-14 sm:px-8 lg:px-16 lg:pt-20">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="font-heading text-xl font-extrabold text-white">{clinic.name}</span>
            <p className="max-w-[300px] text-sm leading-relaxed text-white/50">{clinic.tagline}. Plantão odontológico 24 horas na Savassi, Belo Horizonte.</p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da clínica"
                className="flex size-10 items-center justify-center rounded-lg border border-white/12 bg-white/6 text-white/70 transition-colors hover:border-primary hover:text-white"
              >
                <Instagram className="size-4.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da clínica"
                className="flex size-10 items-center justify-center rounded-lg border border-white/12 bg-white/6 text-white/70 transition-colors hover:border-primary hover:text-white"
              >
                <Facebook className="size-4.5" />
              </a>
            </div>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Navegação do rodapé">
            <h3 className="font-heading text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-white/35">
              Navegação
            </h3>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-white/35">
              Especialidades
            </h3>
            {specialtiesOptions.slice(0, 6).map((item) => (
              <span key={item} className="text-sm text-white/60">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-white/35">
              Contato
            </h3>
            <a href={clinic.phoneHref} className="flex items-start gap-2.5 text-sm text-white/60 hover:text-white">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary-light" />
              {clinic.phoneLabel}
            </a>
            <a
              href={clinic.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 text-sm text-white/60 hover:text-white"
            >
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary-light" />
              {clinic.address}
            </a>
            <span className="text-sm text-white/60">{clinic.hours}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-center text-xs text-white/35 lg:flex-row lg:justify-between lg:text-left">
          <span>
            © {new Date().getFullYear()} {clinic.name}. Todos os direitos reservados.
          </span>
          <span>
            Responsável Técnico: {clinic.technicalManager} · {clinic.cro} · {clinic.epao}
          </span>
        </div>
      </div>
    </footer>
  );
}
