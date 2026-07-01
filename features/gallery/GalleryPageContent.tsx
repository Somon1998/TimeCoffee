"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryCard } from "@/components/ui/GalleryCard";
import { GALLERY_IMAGES } from "@/lib/site-config";

export function GalleryPageContent() {
  const t = useTranslations("gallery");

  return (
    <div className="page-top pb-12 section-warm-accent relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-subtle-mesh-light dark:bg-subtle-mesh-dark"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-brand-400/10 blur-3xl dark:bg-brand-500/8"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 h-56 w-56 rounded-full bg-brand-300/10 blur-3xl dark:bg-brand-400/8"
        aria-hidden
      />

      <Container className="relative">
        <SectionHeading
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.map((img) => (
            <GalleryCard
              key={img.id}
              src={img.src}
              alt={t(`items.${img.id}.alt`)}
              caption={t(`items.${img.id}.caption`)}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
