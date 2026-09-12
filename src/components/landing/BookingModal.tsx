import { useEffect, useState, type FormEvent } from "react";
import { CalendarCheck } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { clinic, insuranceOptions, specialtiesOptions } from "@/config/clinic";
import { useBooking } from "./booking-context";
import { btnPrimary } from "./ui-kit";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-[0.9375rem] text-foreground outline-none transition-colors placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20";

const labelClass =
  "font-heading text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-text-muted";

export function BookingModal() {
  const { open, closeBooking, specialty } = useBooking();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selected, setSelected] = useState(specialty);
  const [insurance, setInsurance] = useState(insuranceOptions[0] ?? "");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setSelected(specialty);
  }, [specialty]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      `Olá! Gostaria de agendar uma avaliação na ${clinic.name}.`,
      `Nome: ${name}`,
      `Telefone: ${phone}`,
      `Especialidade: ${selected}`,
      `Convênio: ${insurance}`,
      notes ? `Observações: ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    toast.success("Pedido enviado! Continue a conversa no WhatsApp.");
    closeBooking();
  };

  return (
    <Dialog open={open} onOpenChange={(value) => (value ? undefined : closeBooking())}>
      <DialogContent className="max-h-[92svh] overflow-y-auto sm:max-w-[520px]">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl font-extrabold text-foreground">
            Agendar avaliação
          </DialogTitle>
          <DialogDescription className="text-[0.9375rem] text-text-secondary">
            Preencha os dados e confirmamos o horário pelo WhatsApp em poucos minutos.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className={labelClass} htmlFor="booking-name">
              Nome completo
            </label>
            <input
              id="booking-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className={labelClass} htmlFor="booking-phone">
              Telefone / WhatsApp
            </label>
            <input
              id="booking-phone"
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(31) 9 0000-0000"
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className={labelClass} htmlFor="booking-specialty">
              Especialidade desejada
            </label>
            <select
              id="booking-specialty"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className={fieldClass}
            >
              {[...new Set([specialty, ...specialtiesOptions])].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className={labelClass} htmlFor="booking-insurance">
              Convênio
            </label>
            <select
              id="booking-insurance"
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
              className={fieldClass}
            >
              {insuranceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className={labelClass} htmlFor="booking-notes">
              Observações (opcional)
            </label>
            <textarea
              id="booking-notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Conte o que está sentindo ou o melhor horário para você"
              className={cn(fieldClass, "resize-none")}
            />
          </div>

          <button type="submit" className={cn(btnPrimary, "w-full")}>
            <CalendarCheck className="size-[1.125rem]" />
            Enviar Solicitação
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
