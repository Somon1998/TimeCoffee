"use client";

import { useState } from "react";
import { SiteImage } from "@/components/ui/SiteImage";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/format-price";
import { OrderChannelDialog } from "@/features/orders/OrderChannelDialog";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  variant?: "default" | "popular";
  className?: string;
};

export function ProductCard({
  product,
  variant = "default",
  className,
}: ProductCardProps) {
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);

  return (
    <>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "group overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-premium transition-shadow duration-300 hover:border-brand-200 hover:shadow-premium-lg dark:border-brand-700 dark:bg-brand-800/40",
          variant === "popular" && "ring-1 ring-brand-200",
          className
        )}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          {product.imageUrl ? (
            <SiteImage
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-brand-50 to-beige dark:from-brand-800 dark:to-brand-900">
              <span className="text-4xl">☕</span>
            </div>
          )}
          {product.isPopular && (
            <span className="absolute left-3 top-3 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
              Хит
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="p-5">
          <h3 className="font-display text-xl font-semibold text-brand-900 dark:text-brand-50">
            {product.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-brand-800/60 dark:text-brand-200/70">
            {product.description}
          </p>
          <div
            className={cn(
              "mt-5 flex flex-col gap-3",
              product.price != null
                ? "md:flex-row md:items-center md:justify-between"
                : ""
            )}
          >
            {product.price != null ? (
              <span className="font-display text-xl font-bold text-brand-600 dark:text-brand-300">
                {formatPrice(product.price)}
              </span>
            ) : null}
            <Button
              size="sm"
              variant="primary"
              className="w-full md:w-auto md:min-w-[170px] md:px-8 md:shrink-0"
              onClick={() => setIsOrderDialogOpen(true)}
            >
              <ShoppingBag className="h-4 w-4" />
              Заказать
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
