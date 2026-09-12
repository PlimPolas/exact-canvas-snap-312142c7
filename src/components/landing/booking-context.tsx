import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type BookingContextValue = {
  open: boolean;
  specialty: string;
  openBooking: (specialty?: string) => void;
  closeBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [specialty, setSpecialty] = useState("Avaliação Geral e Limpeza");

  const openBooking = useCallback((next?: string) => {
    if (next) setSpecialty(next);
    setOpen(true);
  }, []);
  const closeBooking = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, specialty, openBooking, closeBooking }),
    [open, specialty, openBooking, closeBooking],
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking precisa estar dentro de BookingProvider");
  return ctx;
}
