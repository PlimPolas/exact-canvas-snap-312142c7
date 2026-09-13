import { useI18n, type LanguageCode } from "@/i18n";
import { cn } from "@/lib/utils";

type Props = {
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Compact segmented language selector (EN · ES · PT).
 * `tone="dark"` = dark UI over the transparent hero bar.
 */
export function LanguageSwitcher({ tone = "light", className }: Props) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.languageSwitcher.label}
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border p-1 backdrop-blur-md transition-colors",
        tone === "light" ? "border-border bg-surface-alt" : "border-white/12 bg-white/[0.07]",
        className,
      )}
    >
      {t.languageSwitcher.options.map((option) => {
        const active = option.code === lang;
        return (
          <button
            key={option.code}
            type="button"
            lang={option.code}
            aria-pressed={active}
            aria-label={option.full}
            title={option.full}
            onClick={() => setLang(option.code as LanguageCode)}
            className={cn(
              "rounded-full px-2.5 py-[6px] font-heading text-[0.6875rem] font-bold uppercase tracking-[0.08em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
              active
                ? tone === "light"
                  ? "bg-primary/10 text-primary"
                  : "bg-white/18 text-white"
                : tone === "light"
                  ? "text-text-muted hover:text-foreground"
                  : "text-white/60 hover:text-white",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
