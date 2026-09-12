import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { clinic, navLinks, specialtiesOptions } from "@/config/clinic";

export function Footer() {
  return (
    <footer className="bg-deep px-4 pb-8 pt-14 sm:px-8 lg:px-16 lg:pt-20">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="font-heading text-xl font-extrabold text-white">{clinic.name}</span>
            <p className="max-w-[300px] text-sm leading-relaxed text-white/50">
              {clinic.tagline} in Newport Beach, California, led by {clinic.dentist}.
            </p>
            <div className="flex gap-3">
              <a
                href={clinic.instagramClinicUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${clinic.instagramClinic}`}
                className="flex size-10 items-center justify-center rounded-lg border border-white/12 bg-white/6 text-white/70 transition-colors hover:border-primary hover:text-white"
              >
                <Instagram className="size-4.5" />
              </a>
              <a
                href={clinic.instagramDoctorUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${clinic.instagramDoctor}`}
                className="flex items-center justify-center rounded-lg border border-white/12 bg-white/6 px-3 text-xs font-semibold text-white/70 transition-colors hover:border-primary hover:text-white"
              >
                {clinic.instagramDoctor}
              </a>
            </div>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer navigation">
            <h3 className="font-heading text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-white/35">
              Navigation
            </h3>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-white/35">
              Services
            </h3>
            {specialtiesOptions.slice(0, 6).map((item) => (
              <span key={item} className="text-sm text-white/60">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-white/35">
              Contact
            </h3>
            <a href={clinic.phoneHref} className="flex items-start gap-2.5 text-sm text-white/60 hover:text-white">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary-light" />
              {clinic.phoneLabel}
            </a>
            <a href={clinic.emailHref} className="flex items-start gap-2.5 break-all text-sm text-white/60 hover:text-white">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary-light" />
              {clinic.email}
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
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </span>
          <span>
            {clinic.dentist} · {clinic.dentistRole}
          </span>
        </div>
      </div>
    </footer>
  );
}
