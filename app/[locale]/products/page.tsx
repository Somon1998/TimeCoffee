import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { MenuPageContent } from "@/features/menu/MenuPageContent";
import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return buildPageMetadata({
    locale: locale as Locale,
    pathname: "/products",
    title: t("productsTitle"),
    description: t("productsDescription"),
  });
}

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <MenuPageContent />;
}
