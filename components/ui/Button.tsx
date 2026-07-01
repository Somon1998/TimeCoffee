import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "whatsapp"
  | "telegram";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  asChild?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary: cn(
    "btn-shine bg-btn-primary text-white",
    "shadow-premium hover:shadow-premium-lg hover:bg-btn-primary-hover",
    "ring-1 ring-inset ring-white/20",
    "hover:ring-brand-300/40",
    "dark:shadow-blue-glow-sm dark:hover:shadow-blue-glow"
  ),
  secondary: cn(
    "glass-refined text-brand-700",
    "hover:shadow-premium dark:text-brand-100",
    "border-brand-200/80 dark:border-brand-600/50"
  ),
  outline: cn(
    "border-2 border-brand-500/80 text-brand-600 bg-white/60 backdrop-blur-sm",
    "hover:bg-brand-50 hover:border-brand-400 hover:shadow-blue-glow-sm",
    "dark:border-brand-400/60 dark:text-brand-200 dark:bg-brand-900/30",
    "dark:hover:bg-brand-800/50 dark:hover:border-brand-300/50"
  ),
  ghost:
    "text-brand-700 hover:bg-brand-50/80 dark:text-brand-100 dark:hover:bg-brand-800/50",
  whatsapp: cn(
    "glass-refined text-brand-800 border-brand-200/80",
    "hover:bg-[#f0fdf4] hover:border-[#25D366]/40 hover:shadow-premium",
    "[&>svg]:shrink-0 [&>svg]:text-[#25D366]",
    "dark:text-brand-50 dark:border-brand-600/50 dark:hover:bg-brand-700/60"
  ),
  telegram: cn(
    "bg-[#0088cc] text-white hover:bg-[#0077b5]",
    "shadow-premium hover:shadow-premium-lg",
    "ring-1 ring-inset ring-white/15"
  ),
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-6 py-3 text-base rounded-2xl",
  lg: "px-8 py-4 text-lg rounded-2xl font-semibold tracking-wide",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
