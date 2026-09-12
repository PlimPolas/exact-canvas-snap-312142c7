import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  caseNumber: string;
  beforeImage: string;
  afterImage: string;
  priority?: boolean;
  onSwipe?: (direction: 1 | -1) => void;
};

const HANDLE_ZONE = 44;

export function BeforeAfterSlider({ caseNumber, beforeImage, afterImage, priority, onSwipe }: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const mode = useRef<"idle" | "compare" | "swipe">("idle");
  const startX = useRef(0);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPosition(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const handleX = rect.left + (rect.width * position) / 100;
    startX.current = event.clientX;

    if (Math.abs(event.clientX - handleX) <= HANDLE_ZONE || !onSwipe) {
      mode.current = "compare";
      el.setPointerCapture?.(event.pointerId);
      updateFromClientX(event.clientX);
    } else {
      mode.current = "swipe";
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (mode.current === "compare") updateFromClientX(event.clientX);
  };

  const endInteraction = (event: React.PointerEvent<HTMLDivElement>) => {
    if (mode.current === "swipe" && onSwipe) {
      const delta = event.clientX - startX.current;
      if (Math.abs(delta) > 48) onSwipe(delta < 0 ? 1 : -1);
    }
    mode.current = "idle";
  };

  const labelClass =
    "pointer-events-none absolute top-3 z-10 rounded-full border border-white/25 bg-black/45 px-3 py-1 font-heading text-[0.5625rem] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:top-4";

  return (
    <figure className="m-0">
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endInteraction}
        onPointerCancel={endInteraction}
        className="relative aspect-2/1 w-full touch-pan-y select-none overflow-hidden rounded-2xl border border-border bg-surface-alt shadow-strong"
      >
        <img
          src={afterImage}
          alt={`After dental result — Case ${caseNumber}`}
          loading={priority ? "eager" : "lazy"}
          draggable={false}
          className="absolute inset-0 size-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={`Before dental result — Case ${caseNumber}`}
            loading={priority ? "eager" : "lazy"}
            draggable={false}
            className="absolute inset-0 size-full object-cover"
          />
        </div>

        <span className={cn(labelClass, "left-3 sm:left-4")}>Before</span>
        <span className={cn(labelClass, "right-3 sm:right-4")}>After</span>

        <div className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white/85" style={{ left: `${position}%` }} aria-hidden="true">
          <span className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/95 text-foreground shadow-strong">
            <MoveHorizontal className="size-4" />
          </span>
        </div>
      </div>

      <label className="sr-only" htmlFor={`compare-${caseNumber}`}>
        Compare before and after — Case {caseNumber}
      </label>
      <input
        id={`compare-${caseNumber}`}
        type="range"
        min={0}
        max={100}
        value={Math.round(position)}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="mt-4 w-full accent-primary"
      />
    </figure>
  );
}
