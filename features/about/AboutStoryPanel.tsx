"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { slideInRight, viewportOnce } from "@/features/theme/motion";

type AboutStoryPanelProps = {
  children: ReactNode;
  className?: string;
};

export function AboutStoryPanel({ children, className }: AboutStoryPanelProps) {
  return (
    <motion.div
      variants={slideInRight}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "glass-refined rounded-3xl border border-brand-100/80 p-6 sm:p-7 lg:p-8 dark:border-brand-700/50",
        className,
      )}
    >
      <div className="max-w-prose space-y-5">{children}</div>
    </motion.div>
  );
}
