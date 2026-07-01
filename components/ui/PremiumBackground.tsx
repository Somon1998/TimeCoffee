import { cn } from "@/lib/utils";

type PremiumBackgroundProps = {
  className?: string;
  variant?: "hero" | "subtle";
};

export function PremiumBackground({
  className,
  variant = "hero",
}: PremiumBackgroundProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {variant === "hero" ? (
        <>
          <div className="absolute inset-0 bg-hero-mesh-light dark:bg-hero-mesh-dark" />
          <div className="absolute inset-0 premium-gradient opacity-35 dark:opacity-25" />
          <div className="absolute inset-0 bg-noise opacity-[0.14] mix-blend-overlay" />
          <div className="absolute inset-0 bg-radial-blue opacity-80 dark:opacity-60" />
          <div className="absolute inset-0 bg-radial-gold opacity-40 dark:opacity-25" />
          <div className="absolute inset-0 bg-radial-brand pointer-events-none opacity-70 dark:opacity-50" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-subtle-mesh-light dark:bg-subtle-mesh-dark" />
          <div className="absolute inset-0 bg-noise opacity-[0.08]" />
        </>
      )}
    </div>
  );
}
