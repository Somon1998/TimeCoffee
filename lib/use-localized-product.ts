"use client";

import { useTranslations } from "next-intl";
import type { Product } from "@/types";

export function useLocalizedProduct(product: Product) {
  const t = useTranslations("products.items");

  return {
    ...product,
    name: t(`${product.id}.name`),
    description: t(`${product.id}.description`),
  };
}

export function useLocalizedProducts(products: Product[]) {
  const t = useTranslations("products.items");

  return products.map((product) => ({
    ...product,
    name: t(`${product.id}.name`),
    description: t(`${product.id}.description`),
  }));
}
