import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { beforeAfter } from "@/config/clinic";
import { SectionHeader } from "./ui-kit";

export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <section id="antes-depois" className="scroll-mt-24 bg-background px-4 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1100px]">
        <SectionHeader
          badge="Resultados Reais"
          title="Antes e depois de um sorriso planejado"
          desc="Arraste a alça para comparar. Resultados obtidos com planejamento digital, facetas de cerâmica e alinhamento prévio."
        />

        <div
          ref={containerRef}
          className="relative mt-10 aspect-4/3 w-full touch-none select-none overflow-hidden rounded-2xl border border-border shadow-strong sm:aspect-16/9"
          onPointerDown={(e) => {
            dragging.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            updateFromClientX(e.clientX);
          }}
          onPointerMove={(e) => {
            if (dragging.current) updateFromClientX(e.clientX);
          }}
          onPointerUp={() => {
            dragging.current = false;
          }}
        >
          <img
            src={beforeAfter.after}
            alt="Sorriso depois do tratamento odontológico"
            className="absolute inset-0 size-full object-cover"
          />
          <img
            src={beforeAfter.before}
            alt="Sorriso antes do tratamento odontológico"
            className="absolute inset-0 size-full object-cover"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          />

          <span className="absolute left-4 top-4 rounded-full bg-deep/70 px-3 py-1.5 font-heading text-[0.625rem] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm">
            Antes
          </span>
          <span className="absolute right-4 top-4 rounded-full gradient-primary px-3 py-1.5 font-heading text-[0.625rem] font-bold uppercase tracking-[0.1em] text-primary-foreground">
            Depois
          </span>

          <div className="absolute inset-y-0 w-0.5 bg-white/90" style={{ left: `${position}%` }}>
            <div className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-primary shadow-strong">
              <MoveHorizontal className="size-5" />
            </div>
          </div>

          <label className="sr-only" htmlFor="ba-range">
            Comparar antes e depois
          </label>
          <input
            id="ba-range"
            type="range"
            min={0}
            max={100}
            value={Math.round(position)}
            onChange={(e) => setPosition(Number(e.target.value))}
            className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>
  );
}
