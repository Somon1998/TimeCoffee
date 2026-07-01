"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  variant?: "default" | "compact";
};

const compactButtonStyles = cn(
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
  "border border-brand-200/60 bg-white/60 backdrop-blur-xl",
  "transition-all duration-300 hover:shadow-premium",
  "dark:border-brand-600/40 dark:bg-brand-900/60"
);

export function ThemeToggle({
  className,
  variant = "default",
}: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    if (variant === "compact") {
      return (
        <button
          className={cn(compactButtonStyles, className)}
          aria-label="Переключить тему"
        />
      );
    }

    return (
      <button
        className={cn(
          "relative h-9 w-[4rem] rounded-full border border-brand-200/40 bg-white/50 backdrop-blur-md",
          className
        )}
        aria-label="Переключить тему"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  if (variant === "compact") {
    return (
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={cn(compactButtonStyles, className)}
        aria-label={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
      >
        {isDark ? (
          <Sun className="h-5 w-5 text-brand-700 dark:text-brand-100" />
        ) : (
          <Moon className="h-5 w-5 text-brand-700 dark:text-brand-100" />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "group relative flex h-9 w-[4rem] items-center rounded-full",
        "border border-brand-200/40 bg-white/50 backdrop-blur-md",
        "transition-colors duration-300",
        "hover:border-brand-300/50 hover:bg-white/65",
        "dark:border-brand-600/25 dark:bg-brand-900/45",
        "dark:hover:border-brand-500/30 dark:hover:bg-brand-900/55",
        className
      )}
      aria-label={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
    >
      <span
        className={cn(
          "absolute inset-y-1 left-1 w-7 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "bg-gradient-to-br from-brand-400/90 to-brand-600/90",
          "dark:from-brand-500/80 dark:to-brand-700/80",
          isDark ? "translate-x-[calc(100%+2px)]" : "translate-x-0"
        )}
        aria-hidden
      />
      <span className="relative z-10 flex w-full items-center justify-between px-2">
        <Sun
          className={cn(
            "h-3.5 w-3.5 transition-all duration-300",
            isDark
              ? "scale-90 text-brand-400/35"
              : "scale-100 text-white/95"
          )}
        />
        <Moon
          className={cn(
            "h-3.5 w-3.5 transition-all duration-300",
            isDark
              ? "scale-100 text-white/90"
              : "scale-90 text-brand-400/35"
          )}
        />
      </span>
    </button>
  );
}
