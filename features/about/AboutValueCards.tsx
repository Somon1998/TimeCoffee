"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Package, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  fadeInUp,
  premiumEase,
  staggerContainer,
  viewportOnce,
} from "@/features/theme/motion";

export type AboutValueItem = {
  title: string;
  text: string;
};

const iconMap: Record<string, ReactNode> = {
  Качество: <ShieldCheck className="h-5 w-5" />,
  Удобство: <Package className="h-5 w-5" />,
  Бренд: <Sparkles className="h-5 w-5" />,
};

type AboutValueCardsProps = {
  items: AboutValueItem[];
  className?: string;
};

export function AboutValueCards({ items, className }: AboutValueCardsProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "grid auto-rows-fr gap-3 pt-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-1 xl:grid-cols-3",
        className,
      )}
    >
      {items.map((item) => (
        <motion.div
          key={item.title}
          variants={fadeInUp}
          whileHover={{
            y: -6,
            transition: { duration: 0.35, ease: premiumEase },
          }}
          className="group about-value-card flex h-full flex-col rounded-2xl p-5"
        >
          <div className="relative mb-4 w-fit">
            <div
              className="absolute inset-0 rounded-xl bg-brand-400/30 opacity-50 blur-lg transition-opacity duration-500 group-hover:opacity-90"
              aria-hidden
            />
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-brand-100/80 bg-brand-50 text-brand-600 transition-all duration-500 group-hover:border-brand-400/35 group-hover:bg-brand-600 group-hover:text-white dark:border-brand-600/40 dark:bg-brand-700/70 dark:text-brand-200 dark:group-hover:bg-brand-500">
              {iconMap[item.title]}
            </div>
          </div>
          <h3 className="font-display text-lg font-semibold text-brand-900 dark:text-brand-50">
            {item.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-800/65 dark:text-brand-200/70">
            {item.text}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
