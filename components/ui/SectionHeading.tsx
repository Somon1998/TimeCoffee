import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  badge?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  badge,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-brand-600 backdrop-blur-sm dark:border-brand-600/40 dark:bg-brand-800/50 dark:text-brand-200">
          <span className="h-1 w-1 rounded-full bg-coffee-accent" aria-hidden />
          {badge}
        </span>
      )}
      <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div
        className={cn(
          "mt-4 h-px w-16 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600",
          align === "center" && "mx-auto"
        )}
        aria-hidden
      />
      {subtitle && (
        <p
          className={cn(
            "text-body-premium mt-5 max-w-2xl text-lg sm:text-xl",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
