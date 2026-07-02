"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  fadeInUp,
  premiumEase,
  staggerContainer,
  viewportOnce,
} from "@/features/theme/motion";

const DIRECTION_KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;

const coffeeCupIcon = <Coffee className="h-5 w-5" />;

const iconMap: Record<(typeof DIRECTION_KEYS)[number], ReactNode> = {
  "1": coffeeCupIcon,
  "2": coffeeCupIcon,
  "3": coffeeCupIcon,
  "4": coffeeCupIcon,
  "5": coffeeCupIcon,
  "6": coffeeCupIcon,
  "7": coffeeCupIcon,
  "8": coffeeCupIcon,
  "9": coffeeCupIcon,
};

export function AboutProductDirections() {
  const t = useTranslations("about.productDirections");

  return (
    <section className="mt-12 border-t border-brand-100/60 bg-brand-50/30 pt-12 pb-4 dark:border-brand-700/40 dark:bg-brand-900/20 sm:mt-14 sm:pt-14">
      <Container>
        <SectionHeading title={t("title")} align="center" className="mb-10 md:mb-12" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
        >
          {DIRECTION_KEYS.map((key) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              whileHover={{
                y: -4,
                transition: { duration: 0.35, ease: premiumEase },
              }}
              className="group about-value-card flex items-center gap-4 rounded-2xl px-5 py-4"
            >
              <div className="relative shrink-0">
                <div
                  className="absolute inset-0 rounded-xl bg-brand-400/30 opacity-50 blur-lg transition-opacity duration-500 group-hover:opacity-90"
                  aria-hidden
                />
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-brand-100/80 bg-brand-50 text-brand-600 transition-all duration-500 group-hover:border-brand-400/35 group-hover:bg-brand-600 group-hover:text-white dark:border-brand-600/40 dark:bg-brand-700/70 dark:text-brand-200 dark:group-hover:bg-brand-500">
                  {iconMap[key]}
                </div>
              </div>
              <h3 className="font-display text-base font-semibold leading-snug text-brand-900 dark:text-brand-50 sm:text-[1.0625rem]">
                {t(`items.${key}`)}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
