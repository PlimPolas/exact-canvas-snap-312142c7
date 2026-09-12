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
import { clinic, contactPreferences, specialtiesOptions } from "@/config/clinic";
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
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState(specialty);
  const [preference, setPreference] = useState(contactPreferences[0] ?? "");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setSelected(specialty);
  }, [specialty]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = [
      `I would like to book a smile consultation at ${clinic.name}.`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service of interest: ${selected}`,
      `Preferred contact: ${preference}`,
      notes ? `Notes: ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `${clinic.emailHref}?subject=${encodeURIComponent(
      "Smile consultation request",
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email so you can send the request.");
    closeBooking();
  };

  return (
    <Dialog open={open} onOpenChange={(value) => (value ? undefined : closeBooking())}>
      <DialogContent className="max-h-[92svh] overflow-y-auto sm:max-w-[520px]">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl font-extrabold text-foreground">
            Book your smile consultation
          </DialogTitle>
          <DialogDescription className="text-[0.9375rem] text-text-secondary">
            Share a few details and our team will follow up to confirm a time. Prefer to talk now? Call{" "}
            <a href={clinic.phoneHref} className="font-semibold text-primary">
              {clinic.phoneLabel}
            </a>
            .
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className={labelClass} htmlFor="booking-name">
              Full name
            </label>
            <input
              id="booking-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className={labelClass} htmlFor="booking-phone">
              Phone
            </label>
            <input
              id="booking-phone"
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(949) 000-0000"
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className={labelClass} htmlFor="booking-email">
              Email
            </label>
            <input
              id="booking-email"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className={labelClass} htmlFor="booking-specialty">
              Service of interest
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
            <label className={labelClass} htmlFor="booking-preference">
              Preferred contact
            </label>
            <select
              id="booking-preference"
              value={preference}
              onChange={(e) => setPreference(e.target.value)}
              className={fieldClass}
            >
              {contactPreferences.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className={labelClass} htmlFor="booking-notes">
              Notes (optional)
            </label>
            <textarea
              id="booking-notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Tell us about your smile goals or the best time to reach you"
              className={cn(fieldClass, "resize-none")}
            />
          </div>

          <button type="submit" className={cn(btnPrimary, "w-full")}>
            <CalendarCheck className="size-[1.125rem]" />
            Send Request
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
