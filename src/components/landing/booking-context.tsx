import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type BookingContextValue = {
  open: boolean;
  /** Service key from the i18n dictionary (booking.specialties). */
  specialtyKey: string;
  openBooking: (specialtyKey?: string) => void;
  closeBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [specialtyKey, setSpecialtyKey] = useState("general");

  const openBooking = useCallback((next?: string) => {
    if (next) setSpecialtyKey(next);
    setOpen(true);
  }, []);
  const closeBooking = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, specialtyKey, openBooking, closeBooking }),
    [open, specialtyKey, openBooking, closeBooking],
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside BookingProvider");
  return ctx;
}
