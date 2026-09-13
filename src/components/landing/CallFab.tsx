import { Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { format, useI18n } from "@/i18n";

export function CallFab() {
  const { t } = useI18n();

  return (
    <a
      href={clinic.phoneHref}
      aria-label={format(t.callFab.label, { clinic: clinic.name, phone: clinic.phoneLabel })}
      className="fixed bottom-5 right-4 z-70 flex size-14 items-center justify-center rounded-full bg-foreground text-background shadow-strong transition-transform hover:scale-105 sm:right-6 lg:size-16"
    >
      <Phone className="relative size-6 lg:size-7" />
    </a>
  );
}
