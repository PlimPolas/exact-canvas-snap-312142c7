import { MessageCircle } from "lucide-react";
import { clinic } from "@/config/clinic";

export function WhatsAppFab() {
  return (
    <a
      href={clinic.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a clínica no WhatsApp"
      className="fixed bottom-5 right-4 z-70 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-strong transition-transform hover:scale-105 sm:right-6 lg:size-16"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/40" aria-hidden="true" />
      <MessageCircle className="relative size-7 lg:size-8" />
    </a>
  );
}
