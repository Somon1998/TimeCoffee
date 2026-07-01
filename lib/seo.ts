import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { SITE_NAME } from "@/lib/site-config";

export const SITE_URL = "https://timecoffee.shop";

/** Путь страницы без префикса локали, например `/products`. */
export function localePath(locale: Locale, pathname = "/"): string {
  const path = pathname === "/" ? "" : pathname;
  if (locale === "tg") {
    return `${SITE_URL}/tg${path}`;
  }
  return `${SITE_URL}${path}`;
}

export function buildLanguageAlternates(pathname = "/") {
  return {
    ru: localePath("ru", pathname),
    tg: localePath("tg", pathname),
    "x-default": localePath("ru", pathname),
  };
}

type PageMetadataOptions = {
  locale: Locale;
  pathname?: string;
  title: string;
  description: string;
};

export function buildPageMetadata({
  locale,
  pathname = "/",
  title,
  description,
}: PageMetadataOptions): Metadata {
  const canonical = localePath(locale, pathname);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: buildLanguageAlternates(pathname),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: locale === "tg" ? "tg_TJ" : "ru_RU",
      siteName: SITE_NAME,
    },
  };
}
