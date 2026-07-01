import { Link } from "@/i18n/navigation";
import { SITE_NAME } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  asLink?: boolean;
  variant?: "default" | "light";
};

const monogramSizes = {
  sm: "h-9 w-9 text-[10px] rounded-xl",
  md: "h-11 w-11 text-xs rounded-xl",
  lg: "h-14 w-14 text-sm rounded-2xl",
};

const textSizes = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
};

export function BrandLogo({
  className,
  size = "md",
  showText = true,
  asLink = true,
  variant = "default",
}: BrandLogoProps) {
  const isLight = variant === "light";

  const content = (
    <span className={cn("group inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "relative flex items-center justify-center font-display font-bold tracking-wider",
          "bg-logo-monogram text-white",
          "shadow-premium ring-1 ring-inset ring-white/25",
          "transition-all duration-500 group-hover:scale-105 group-hover:shadow-blue-glow-sm",
          monogramSizes[size]
        )}
        aria-hidden
      >
        <span
          className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-brand-300/20 via-transparent to-transparent opacity-60"
          aria-hidden
        />
        <span className="relative leading-none drop-shadow-sm">TC</span>
        <span
          className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-coffee-accent shadow-blue-glow-sm ring-2 ring-white/80 dark:ring-brand-900/80"
          aria-hidden
        />
      </span>
      {showText && (
        <span
          className={cn(
            "font-display font-bold tracking-tight",
            isLight ? "text-white" : "text-brand-900 dark:text-brand-50",
            textSizes[size]
          )}
        >
          Time
          <span className="text-gradient-brand">Coffee</span>
        </span>
      )}
    </span>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        className="inline-flex"
        aria-label={`${SITE_NAME} — на главную`}
      >
        {content}
      </Link>
    );
  }

  return content;
}
