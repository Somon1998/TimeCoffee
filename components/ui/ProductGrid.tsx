"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/ProductCard";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";
import { productGridStagger, viewportOnce } from "@/features/theme/motion";

type ProductGridProps = {
  products: Product[];
  className?: string;
  /** Remount and reveal cards when the active category filter changes */
  filterKey?: string;
};

const gridClassName =
  "grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8";

export function ProductGrid({ products, className, filterKey }: ProductGridProps) {
  const isFilterable = filterKey !== undefined;
  const classNames = cn(gridClassName, className);

  if (isFilterable) {
    return (
      <div key={filterKey} className={classNames}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      variants={productGridStagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={classNames}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  );
}
