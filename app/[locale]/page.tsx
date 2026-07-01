import { HeroSection } from "@/features/home/HeroSection";
import { BrandStorySection } from "@/features/home/BrandStorySection";
import { MenuPreviewSection } from "@/features/home/MenuPreviewSection";
import { WhyChooseUsSection } from "@/features/home/WhyChooseUsSection";
import { GallerySection } from "@/features/home/GallerySection";
import { ContactSection } from "@/features/home/ContactSection";
import { BrandJsonLd } from "@/components/seo/BrandJsonLd";
import type { Locale } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });

  return (
    <>
      <BrandJsonLd
        locale={locale as Locale}
        description={t("homeDescription")}
      />
      <HeroSection />
      <BrandStorySection />
      <MenuPreviewSection />
      <WhyChooseUsSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
