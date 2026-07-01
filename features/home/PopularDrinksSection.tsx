"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/ui/ProductGrid";
import { getPopularProducts } from "@/lib/site-config";
import { viewportOnce } from "@/features/theme/motion";

export function PopularDrinksSection() {
  const popular = getPopularProducts();

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          badge="Хиты"
          title="Популярные продукты"
          subtitle="То, что выбирают чаще всего"
        />

        <ProductGrid products={popular} />
      </Container>
    </section>
  );
}
