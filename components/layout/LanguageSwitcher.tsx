"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LOCALE_LABELS: Record<Locale, string> = {
  ru: "RU",
  tg: "TJ",
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("language");
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div
      role="group"
      aria-label={t("switchTo")}
      className={cn(
        "lang-switcher flex items-center rounded-xl border border-brand-300/35 bg-white/50 p-0.5 backdrop-blur-xl dark:border-brand-500/30 dark:bg-brand-900/50",
        className
      )}
    >
      {routing.locales.map((loc) => {
        const isActive = locale === loc;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => switchLocale(loc)}
            aria-pressed={isActive}
            className={cn(
              "relative min-w-[2.5rem] rounded-[0.65rem] px-2.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300",
              isActive
                ? "bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-[0_0_16px_rgba(47,111,219,0.45)] ring-1 ring-coffee-accent/40"
                : "text-brand-700/70 hover:text-brand-600 dark:text-brand-200/65 dark:hover:text-brand-100"
            )}
          >
            {LOCALE_LABELS[loc]}
          </button>
        );
      })}
    </div>
  );
}
