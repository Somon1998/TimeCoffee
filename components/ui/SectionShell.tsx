import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "gradient";
  noPadding?: boolean;
  as?: "section" | "div";
};

const variantClasses = {
  default: "",
  muted: "bg-brand-50/40 dark:bg-brand-900/30",
  gradient: "premium-gradient",
};

export function SectionShell({
  children,
  className,
  id,
  variant = "default",
  noPadding = false,
  as: Tag = "section",
}: SectionShellProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative",
        !noPadding && "section-padding",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Tag>
  );
}
