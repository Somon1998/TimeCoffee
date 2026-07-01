"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/ui/ProductGrid";
import { PremiumBackground } from "@/components/ui/PremiumBackground";
import { PRODUCTS, getCategoriesWithProducts } from "@/lib/site-config";
import { useLocalizedProducts } from "@/lib/use-localized-product";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, viewportOnce } from "@/features/theme/motion";

export function MenuPageContent() {
  const t = useTranslations("products");
  const [activeFilter, setActiveFilter] = useState<string | "all">("all");
  const categories = getCategoriesWithProducts();

  const products = useMemo(
    () => PRODUCTS.filter((p) => p.isAvailable),
    []
  );

  const localizedProducts = useLocalizedProducts(products);

  const filteredProducts = useMemo(
    () =>
      activeFilter === "all"
        ? localizedProducts
        : localizedProducts.filter((product) =>
            product.categories?.includes(activeFilter)
          ),
    [activeFilter, localizedProducts]
  );

  return (
    <div className="page-top-premium relative overflow-hidden pb-24 md:pb-28">
      <PremiumBackground variant="subtle" />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/35 to-transparent"
        aria-hidden
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            badge={t("badge")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12 flex flex-wrap justify-center gap-3"
          role="tablist"
          aria-label={t("filterAria")}
        >
          <motion.button
            variants={fadeInUp}
            role="tab"
            aria-selected={activeFilter === "all"}
            onClick={() => setActiveFilter("all")}
            className={cn(
              "glass-pill text-brand-700 dark:text-brand-100",
              activeFilter === "all" && "glass-pill-active"
            )}
          >
            {t("all")}
          </motion.button>
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              variants={fadeInUp}
              role="tab"
              aria-selected={activeFilter === cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={cn(
                "glass-pill text-brand-700 dark:text-brand-100",
                activeFilter === cat.id && "glass-pill-active"
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
      </Container>
    </div>
  );
}
