"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Coffee,
  ShieldCheck,
  Package,
  Zap,
  MapPin,
  Box,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_US_KEYS } from "@/lib/site-config";
import { fadeInUp, staggerContainer, viewportOnce } from "@/features/theme/motion";

const iconMap: Record<string, ReactNode> = {
  quality: <ShieldCheck className="h-7 w-7" />,
  format: <Package className="h-7 w-7" />,
  prep: <Zap className="h-7 w-7" />,
  taste: <Coffee className="h-7 w-7" />,
  portable: <MapPin className="h-7 w-7" />,
  packaging: <Box className="h-7 w-7" />,
};

export function WhyChooseUsSection() {
  const t = useTranslations("whyChooseUs");

  return (
    <section className="section-padding bg-brand-50/50 dark:bg-brand-900/30">
      <Container>
        <SectionHeading
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {WHY_CHOOSE_US_KEYS.map((key) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              className="group rounded-2xl border border-brand-100 bg-white p-6 text-center shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-premium-lg dark:border-brand-700 dark:bg-brand-800/40"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-700 dark:text-brand-200 dark:group-hover:bg-brand-500">
                {iconMap[key]}
              </div>
              <h3 className="font-display text-lg font-semibold">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm text-brand-800/60 dark:text-brand-200/70">
                {t(`items.${key}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
