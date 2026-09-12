import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const COPIES = 3;
const AUTOPLAY_MS = 4500;
const RESUME_MS = 6000;

type CoverflowCarouselProps<T> = {
  items: T[];
  getKey: (item: T) => string;
  getLabel: (item: T) => string;
  renderItem: (item: T, active: boolean) => ReactNode;
  ariaLabel: string;
  previousLabel: string;
  nextLabel: string;
  viewLabel: (item: T) => string;
  trackClassName: string;
  cardWidth?: (viewportWidth: number) => number;
  slideRole?: "button" | "group";
  disableBlur?: boolean;
};

export function CoverflowCarousel<T>({
  items,
  getKey,
  getLabel,
  renderItem,
  ariaLabel,
  previousLabel,
  nextLabel,
  viewLabel,
  trackClassName,
  cardWidth,
  slideRole = "button",
  disableBlur = false,
}: CoverflowCarouselProps<T>) {
  const total = items.length;
  const looped = total > 1;
  const copies = looped ? COPIES : 1;
  const slides = useMemo(
    () => Array.from({ length: copies }, (_, copyIndex) =>
      items.map((item, itemIndex) => ({ item, copyKey: copyIndex * total + itemIndex })),
    ).flat(),
    [copies, items, total],
  );
  const itemsKey = items.map(getKey).join("|");
  const base = looped ? total : 0;
  const [index, setIndex] = useState(base);
  const [drag, setDrag] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [step, setStep] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [paused, setPaused] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pointer = useRef({ id: -1, x: 0, active: false });
  const dragged = useRef(false);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => {
      const width = el.clientWidth;
      const measuredCardWidth = cardWidth
        ? cardWidth(width)
        : Math.min(Math.max(width * (width < 640 ? 0.62 : width < 1024 ? 0.34 : 0.235), 190), 340);
      setStep(measuredCardWidth + (width < 640 ? 14 : 24));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [cardWidth]);

  useLayoutEffect(() => {
    setAnimate(false);
    setIndex(base);
    setDrag(0);
    pointer.current.active = false;
  }, [base, itemsKey]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const interact = useCallback(() => {
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_MS);
  }, []);

  const go = useCallback((delta: number) => {
    if (!looped) return;
    setAnimate(true);
    setIndex((current) => current + delta);
  }, [looped]);

  const goTo = useCallback((target: number) => {
    if (!looped) return;
    setAnimate(true);
    setIndex((currentIndex) => {
      const current = ((currentIndex % total) + total) % total;
      let difference = target - current;
      if (difference > total / 2) difference -= total;
      if (difference < -total / 2) difference += total;
      return currentIndex + difference;
    });
  }, [looped, total]);

  useEffect(() => {
    if (!looped || (index >= base && index < base + total)) return;
    const timer = setTimeout(() => {
      setAnimate(false);
      setIndex((current) => base + (((current % total) + total) % total));
    }, 560);
    return () => clearTimeout(timer);
  }, [base, index, looped, total]);

  useEffect(() => {
    if (animate) return;
    const frame = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(frame);
  }, [animate]);

  useEffect(() => {
    if (!looped || paused || reduced || pointer.current.active) return;
    const timer = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [go, looped, paused, reduced]);

  useEffect(() => () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!looped || !step) return;
    pointer.current = { id: event.pointerId, x: event.clientX, active: true };
    dragged.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
    setAnimate(false);
    interact();
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!pointer.current.active || event.pointerId !== pointer.current.id) return;
    const distance = event.clientX - pointer.current.x;
    if (Math.abs(distance) > 6) dragged.current = true;
    setDrag(distance);
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!pointer.current.active || event.pointerId !== pointer.current.id) return;
    pointer.current.active = false;
    const moved = drag;
    setDrag(0);
    setAnimate(true);
    if (step && Math.abs(moved) > step * 0.18) {
      setIndex((current) => current - Math.sign(moved) * Math.max(1, Math.round(Math.abs(moved) / step)));
    }
    interact();
  };

  if (!total) return null;

  const activeReal = ((index % total) + total) % total;
  const offset = index * step - drag;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={viewportRef}
        role="group"
        aria-roledescription="carrossel"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") { interact(); go(1); }
          if (event.key === "ArrowLeft") { interact(); go(-1); }
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={cn(
          "relative w-full touch-pan-y overflow-hidden py-6 outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
          looped && "cursor-grab active:cursor-grabbing",
        )}
      >
        <div className={cn("relative mx-auto", trackClassName)}>
          {slides.map(({ item, copyKey }, slideIndex) => {
            const distance = step ? (slideIndex * step - offset) / step : slideIndex - index;
            const absoluteDistance = Math.abs(distance);
            if (absoluteDistance > 3.2) return null;
            const clamped = Math.min(absoluteDistance, 2);
            const scale = 1 - 0.11 * Math.min(absoluteDistance, 1.6);
            const blur = Math.min(absoluteDistance, 1.4) * 3.4;
            const opacity = 1 - 0.58 * Math.min(absoluteDistance, 1);
            const active = absoluteDistance < 0.5;

            return (
              <div
                key={`${getKey(item)}-${copyKey}`}
                role={slideRole}
                tabIndex={active ? 0 : -1}
                aria-label={getLabel(item)}
                aria-current={active}
                onClick={() => {
                  if (dragged.current || !looped) return;
                  interact();
                  setAnimate(true);
                  setIndex(slideIndex);
                }}
                onKeyDown={(event) => {
                  if ((event.key === "Enter" || event.key === " ") && looped) {
                    event.preventDefault();
                    interact();
                    setIndex(slideIndex);
                  }
                }}
                className={cn(
                  "absolute left-1/2 top-0 h-full text-left will-change-transform",
                  animate && "transition-[transform,filter,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  reduced && "transition-none",
                )}
                style={{
                  width: step ? step - (step > 240 ? 24 : 14) : 240,
                  transform: `translate3d(calc(-50% + ${distance * step}px), 0, 0) scale(${scale})`,
                  filter: disableBlur ? "none" : `blur(${blur}px)`,
                  opacity,
                  zIndex: 10 - Math.round(clamped * 3),
                  pointerEvents: absoluteDistance > 2.2 ? "none" : "auto",
                }}
              >
                {renderItem(item, active)}
              </div>
            );
          })}
        </div>
      </div>

      {looped && (
        <>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={previousLabel}
            onClick={() => { interact(); go(-1); }}
            className="absolute left-0 top-1/2 z-20 hidden size-11 -translate-y-1/2 rounded-full border-border bg-background/90 text-foreground shadow-soft backdrop-blur-sm hover:border-primary hover:bg-background hover:text-primary md:inline-flex"
          >
            <ChevronLeft className="size-5" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={nextLabel}
            onClick={() => { interact(); go(1); }}
            className="absolute right-0 top-1/2 z-20 hidden size-11 -translate-y-1/2 rounded-full border-border bg-background/90 text-foreground shadow-soft backdrop-blur-sm hover:border-primary hover:bg-background hover:text-primary md:inline-flex"
          >
            <ChevronRight className="size-5" />
          </Button>

          <div className="mt-6 flex items-center justify-center gap-2">
            {items.map((item, itemIndex) => (
              <Button
                key={getKey(item)}
                type="button"
                variant="ghost"
                size="icon"
                aria-label={viewLabel(item)}
                aria-current={itemIndex === activeReal}
                onClick={() => { interact(); goTo(itemIndex); }}
                className={cn(
                  "h-2 min-h-2 rounded-full p-0 transition-all duration-300 hover:bg-primary/40",
                  itemIndex === activeReal ? "w-7 min-w-7 bg-primary" : "w-2 min-w-2 bg-border",
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}