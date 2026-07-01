"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/ui/ProductGrid";
import { Button } from "@/components/ui/Button";
import { Link as I18nLink } from "@/i18n/navigation";
import {
  getHomePreviewCategories,
  getHomePreviewProducts,
} from "@/lib/site-config";
import { useLocalizedProducts } from "@/lib/use-localized-product";
import { fadeInUp, staggerContainer, viewportOnce } from "@/features/theme/motion";
import { cn } from "@/lib/utils";

export function MenuPreviewSection() {
  const t = useTranslations("products");
  const homeProducts = getHomePreviewProducts();
  const localizedProducts = useLocalizedProducts(homeProducts);
  const categories = getHomePreviewCategories();
  const [activeFilter, setActiveFilter] = useState<string | "all">("all");

  const filteredProducts =
    activeFilter === "all"
      ? localizedProducts
      : localizedProducts.filter((product) =>
          product.categories?.includes(activeFilter)
        );

  return (
    <section id="menu" className="section-padding bg-brand-50/50 dark:bg-brand-900/30">
      <Container>
        <SectionHeading
          badge={t("badge")}
          title={t("previewTitle")}
          subtitle={t("previewSubtitle")}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          <motion.button
            variants={fadeInUp}
            onClick={() => setActiveFilter("all")}
            className={cn(
              "rounded-2xl px-5 py-2.5 text-sm font-medium transition-all duration-300",
              activeFilter === "all"
                ? "bg-brand-600 text-white shadow-premium dark:bg-brand-500"
                : "border border-brand-100 bg-white text-brand-700 hover:border-brand-200 hover:shadow-premium dark:border-brand-700 dark:bg-brand-800/60 dark:text-brand-100"
            )}
          >
            {t("all")}
          </motion.button>
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              variants={fadeInUp}
              onClick={() => setActiveFilter(cat.id)}
              className={cn(
                "rounded-2xl px-5 py-2.5 text-sm font-medium transition-all duration-300",
                activeFilter === cat.id
                  ? "bg-brand-600 text-white shadow-premium dark:bg-brand-500"
                  : "border border-brand-100 bg-white text-brand-700 hover:border-brand-200 hover:shadow-premium dark:border-brand-700 dark:bg-brand-800/60 dark:text-brand-100"
              )}
            >
              {t(`categories.${cat.id}`)}
            </motion.button>
          ))}
        </motion.div>

        <ProductGrid
          products={filteredProducts}
          filterKey={activeFilter}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="mt-12 text-center"
        >
          <I18nLink href="/products">
            <Button variant="primary" size="lg">
              {t("viewAll")}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </I18nLink>
        </motion.div>
      </Container>
    </section>
  );
}
