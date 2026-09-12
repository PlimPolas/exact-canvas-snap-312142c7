import { useEffect, useState } from "react";
import { CalendarCheck, Menu, Phone, X } from "lucide-react";
import { brand, clinic, navLinks } from "@/config/clinic";
import { useBooking } from "./booking-context";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-80 flex h-20 items-center px-4 transition-all duration-300 sm:px-8 lg:px-16",
          scrolled
            ? "border-b border-border/70 bg-background/92 shadow-soft backdrop-blur-2xl"
            : "bg-transparent",
        )}
        aria-label="Main navigation"
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6">
          <a href="#top" className="z-10 flex items-center" aria-label={clinic.name}>
            <img
              src={scrolled ? brand.logoDark : brand.logoWhite}
              alt={brand.logoAlt}
              width={531}
              height={300}
              className="h-11 w-auto sm:h-12"
            />
          </a>

          <div
            className={cn(
              "hidden items-center gap-1 rounded-full border p-1 backdrop-blur-md transition-colors lg:flex",
              scrolled ? "border-border bg-surface-alt" : "border-white/12 bg-white/[0.07]",
            )}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-[7px] text-[0.8125rem] font-semibold transition-colors",
                  scrolled
                    ? "text-text-secondary hover:bg-primary/6 hover:text-foreground"
                    : "text-white/85 hover:bg-white/12 hover:text-white",
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="z-10 flex items-center gap-3">
            <button
              type="button"
              onClick={() => openBooking()}
              className={cn(
                "hidden items-center gap-2 rounded-full px-5 py-2.5 font-heading text-[0.8125rem] font-bold tracking-wide transition-all hover:-translate-y-0.5 sm:inline-flex",
                scrolled
                  ? "gradient-primary text-primary-foreground shadow-glow-sm"
                  : "bg-white text-foreground shadow-soft",
              )}
            >
              <CalendarCheck className="size-4" />
              <span>Book Consultation</span>
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className={cn(
                "flex size-11 items-center justify-center rounded-lg border transition-colors lg:hidden",
                scrolled
                  ? "border-border bg-surface-alt text-foreground"
                  : "border-white/15 bg-white/10 text-white",
              )}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={cn(
          "fixed inset-0 z-95 flex flex-col bg-background/98 px-8 pb-10 pt-24 backdrop-blur-2xl transition-transform duration-300 lg:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full border border-border bg-surface-alt text-foreground"
        >
          <X className="size-5" />
        </button>

        <div className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-border/70 py-4 font-heading text-xl font-bold text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-8">
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              openBooking();
            }}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg gradient-primary px-7 py-4 font-heading text-sm font-bold uppercase tracking-[0.04em] text-primary-foreground"
          >
            <CalendarCheck className="size-5" />
            Book Your Smile Consultation
          </button>
          <a
            href={clinic.phoneHref}
            className="inline-flex items-center justify-center gap-2 py-2 text-sm font-semibold text-text-secondary"
          >
            <Phone className="size-4" />
            {clinic.phoneLabel}
          </a>
        </div>
      </div>
    </>
  );
}
