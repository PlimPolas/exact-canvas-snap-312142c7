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
    <section id="transformations" className="scroll-mt-24 bg-background px-4 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1100px]">
        <SectionHeader
          badge="Smile Transformations"
          title="Before and after a facially driven design"
          desc="Drag the handle to compare. Results are planned digitally and refined with porcelain, alignment and proportion in mind."
        />

        <div
          ref={containerRef}
          className="relative mt-10 aspect-4/3 w-full touch-none select-none overflow-hidden rounded-2xl border border-border shadow-strong sm:aspect-16/9"
          onPointerDown={(e) => {
            dragging.current = true;
            (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
            updateFromClientX(e.clientX);
          }}
          onPointerMove={(e) => {
            if (!dragging.current) return;
            updateFromClientX(e.clientX);
          }}
          onPointerUp={() => {
            dragging.current = false;
          }}
          onPointerCancel={() => {
            dragging.current = false;
          }}
        >
          <img
            src={beforeAfter.after}
            alt="Smile after treatment"
            loading="lazy"
            draggable={false}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
            <img
              src={beforeAfter.before}
              alt="Smile before treatment"
              loading="lazy"
              draggable={false}
              className="absolute inset-0 h-full w-[100vw] max-w-none object-cover"
              style={{ width: containerRef.current?.clientWidth ?? "100%" }}
            />
          </div>

          <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1.5 font-heading text-[0.625rem] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm">
            Before
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-black/55 px-3 py-1.5 font-heading text-[0.625rem] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm">
            After
          </span>

          <div
            className="absolute inset-y-0 z-10 w-0.5 bg-white/90"
            style={{ left: `${position}%` }}
            aria-hidden="true"
          >
            <span className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-foreground shadow-strong">
              <MoveHorizontal className="size-5" />
            </span>
          </div>
        </div>

        <label className="sr-only" htmlFor="before-after-range">
          Compare before and after
        </label>
        <input
          id="before-after-range"
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="mt-5 w-full accent-primary"
        />
      </div>
    </section>
  );
}
