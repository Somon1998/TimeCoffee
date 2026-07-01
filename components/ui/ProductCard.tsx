"use client";

import { useState } from "react";
import { SiteImage } from "@/components/ui/SiteImage";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/format-price";
import { OrderChannelDialog } from "@/features/orders/OrderChannelDialog";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";
import { productCardReveal, premiumEase } from "@/features/theme/motion";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  const t = useTranslations("products");
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);

  return (
    <>
      <motion.article
        variants={productCardReveal}
        whileHover={{
          y: -10,
          transition: { duration: 0.45, ease: premiumEase },
        }}
        className={cn(
          "product-card-premium group flex h-full flex-col",
          className
        )}
      >
        <div className="relative p-3 pb-0">
          <div className="relative aspect-[5/4] overflow-hidden rounded-xl bg-gradient-to-br from-brand-50/80 to-brand-100/60 dark:from-brand-800/40 dark:to-brand-900/60">
            {product.imageUrl ? (
              <SiteImage
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <span className="font-display text-4xl text-brand-300">☕</span>
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/25 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/20 dark:ring-white/10" />
          </div>

          {product.price != null ? (
            <span className="price-badge-premium absolute right-6 top-6 z-10">
              {formatPrice(product.price)}
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col p-5 pt-4">
          <h3 className="font-display text-lg font-semibold leading-snug text-brand-900 dark:text-brand-50">
            {product.name}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-800/60 line-clamp-2 dark:text-brand-200/70">
            {product.description}
          </p>
          <div className="mt-5">
            <Button
              variant="primary"
              size="sm"
              className="product-order-btn w-full rounded-xl md:min-w-[170px] md:px-8"
              onClick={() => setIsOrderDialogOpen(true)}
            >
              {t("order")}
            </Button>
          </div>
        </div>
      </motion.article>

      <OrderChannelDialog
        productName={product.name}
        isOpen={isOrderDialogOpen}
        onClose={() => setIsOrderDialogOpen(false)}
      />
    </>
  );
}
