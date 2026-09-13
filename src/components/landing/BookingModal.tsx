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
import { clinic } from "@/config/clinic";
import { format, useI18n } from "@/i18n";
import { useBooking } from "./booking-context";
import { btnPrimary } from "./ui-kit";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-[0.9375rem] text-foreground outline-none transition-colors placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20";

const labelClass =
  "font-heading text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-text-muted";

export function BookingModal() {
  const { open, closeBooking, specialtyKey } = useBooking();
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedKey, setSelectedKey] = useState(specialtyKey);
  const [preferenceIndex, setPreferenceIndex] = useState(0);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setSelectedKey(specialtyKey);
  }, [specialtyKey]);

  const specialtyLabel =
    t.booking.specialties.find((item) => item.key === selectedKey)?.label ??
    t.booking.specialties[t.booking.specialties.length - 1]!.label;
  const preferenceLabel = t.booking.preferences[preferenceIndex] ?? t.booking.preferences[0]!;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = [
      format(t.booking.emailIntro, { clinic: clinic.name }),
      `${t.booking.emailName}: ${name}`,
      `${t.booking.emailPhone}: ${phone}`,
      `${t.booking.emailEmail}: ${email}`,
      `${t.booking.emailService}: ${specialtyLabel}`,
      `${t.booking.emailPreference}: ${preferenceLabel}`,
      notes ? `${t.booking.emailNotes}: ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `${clinic.emailHref}?subject=${encodeURIComponent(
      t.booking.emailSubject,
    )}&body=${encodeURIComponent(body)}`;
    toast.success(t.booking.toast);
    closeBooking();
  };

  return (
    <Dialog open={open} onOpenChange={(value) => (value ? undefined : closeBooking())}>
      <DialogContent className="max-h-[92svh] overflow-y-auto sm:max-w-[520px]">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl font-extrabold text-foreground">
            {t.booking.title}
          </DialogTitle>
          <DialogDescription className="text-[0.9375rem] text-text-secondary">
            {t.booking.descBefore}{" "}
            <a href={clinic.phoneHref} className="font-semibold text-primary">
              {clinic.phoneLabel}
            </a>
            .
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className={labelClass} htmlFor="booking-name">
              {t.booking.name}
            </label>
            <input
              id="booking-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.booking.namePlaceholder}
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className={labelClass} htmlFor="booking-phone">
              {t.booking.phone}
            </label>
            <input
              id="booking-phone"
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t.booking.phonePlaceholder}
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className={labelClass} htmlFor="booking-email">
              {t.booking.email}
            </label>
            <input
              id="booking-email"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.booking.emailPlaceholder}
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className={labelClass} htmlFor="booking-specialty">
              {t.booking.service}
            </label>
            <select
              id="booking-specialty"
              value={selectedKey}
              onChange={(e) => setSelectedKey(e.target.value)}
              className={fieldClass}
            >
              {t.booking.specialties.map((option) => (
                <option key={option.key} value={option.key}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className={labelClass} htmlFor="booking-preference">
              {t.booking.preference}
            </label>
            <select
              id="booking-preference"
              value={preferenceIndex}
              onChange={(e) => setPreferenceIndex(Number(e.target.value))}
              className={fieldClass}
            >
              {t.booking.preferences.map((option, index) => (
                <option key={option} value={index}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className={labelClass} htmlFor="booking-notes">
              {t.booking.notes}
            </label>
            <textarea
              id="booking-notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t.booking.notesPlaceholder}
              className={cn(fieldClass, "resize-none")}
            />
          </div>

          <button type="submit" className={cn(btnPrimary, "w-full")}>
            <CalendarCheck className="size-[1.125rem]" />
            {t.booking.submit}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
