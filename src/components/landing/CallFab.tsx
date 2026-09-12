import { Phone } from "lucide-react";
import { clinic } from "@/config/clinic";

export function CallFab() {
  return (
    <a
      href={clinic.phoneHref}
      aria-label={`Call ${clinic.name} at ${clinic.phoneLabel}`}
      className="fixed bottom-5 right-4 z-70 flex size-14 items-center justify-center rounded-full bg-foreground text-background shadow-strong transition-transform hover:scale-105 sm:right-6 lg:size-16"
    >
      <Phone className="relative size-6 lg:size-7" />
    </a>
  );
}
