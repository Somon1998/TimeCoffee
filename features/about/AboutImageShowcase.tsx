"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { SiteImage } from "@/components/ui/SiteImage";
import { DEMO_IMAGES } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { premiumEase, slideInLeft, viewportOnce } from "@/features/theme/motion";

type LocationLabel = {
  city: string;
  country: string;
};

type AboutImageShowcaseProps = {
  badge?: string;
  locationLabel?: LocationLabel;
  sticky?: boolean;
  className?: string;
};

export function AboutImageShowcase({
  badge,
  locationLabel,
  sticky = false,
  className,
}: AboutImageShowcaseProps) {
  const t = useTranslations("about");
  const displayBadge = badge ?? t("badge31");

  return (
    <motion.div
      variants={slideInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "relative",
        sticky && "lg:sticky sticky-below-navbar",
        className,
      )}
    >
      <div
        className="product-glow -left-10 top-6 h-44 w-44 bg-brand-400/20 dark:bg-brand-500/12"
        aria-hidden
      />
      <div
        className="product-glow -right-8 bottom-20 h-36 w-36 bg-brand-400/18 dark:bg-brand-500/12"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-md lg:max-w-none">
        <div
          className="product-glow-ring absolute -inset-3 rounded-[2rem] sm:-inset-4"
          aria-hidden
        />
        <div
          className="absolute -inset-8 rounded-full bg-gradient-radial from-brand-400/18 via-brand-300/8 to-transparent blur-3xl dark:from-brand-500/12 dark:via-brand-400/6"
          aria-hidden
        />

        <div className="relative aspect-[5/6] overflow-hidden rounded-[1.75rem] border border-brand-200/70 bg-gradient-to-b from-brand-50/90 via-white to-brand-100/40 shadow-product-glow ring-1 ring-brand-300/25 dark:border-brand-600/30 dark:from-brand-800/70 dark:via-brand-900/50 dark:to-brand-900/80 dark:ring-brand-500/15">
          <SiteImage
            src={DEMO_IMAGES.about}
            alt={t("imageAlt")}
            fill
            className="object-contain object-center p-3 transition-transform duration-700 ease-out hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/30 via-brand-900/5 to-transparent" />
          <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-b from-white/25 to-transparent opacity-70 dark:from-brand-300/6" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55, delay: 0.25, ease: premiumEase }}
          className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-brand-300/40 bg-white/90 px-3.5 py-2 text-xs font-semibold tracking-wide text-brand-700 shadow-blue-glow-sm backdrop-blur-md dark:border-brand-500/30 dark:bg-brand-800/90 dark:text-brand-100"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(47,111,219,0.8)]" />
          {displayBadge}
        </motion.div>

        {locationLabel ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, delay: 0.35, ease: premiumEase }}
            className="absolute -bottom-3 -right-3 hidden rounded-2xl border border-brand-300/30 glass-refined p-4 shadow-premium-lg sm:block dark:border-brand-500/25"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-700/80 dark:text-brand-200">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="font-display text-base font-semibold text-brand-700 dark:text-brand-100">
                  {locationLabel.city}
                </p>
                <p className="text-xs text-brand-800/55 dark:text-brand-200/65">
                  {locationLabel.country}
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}

        <div
          className="absolute -bottom-1 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-brand-900/10 blur-2xl dark:bg-black/45"
          aria-hidden
        />
      </div>
    </motion.div>
  );
}
