import type { Locale } from "@/i18n/routing";
import { CONTACT_SETTINGS, SITE_NAME } from "@/lib/site-config";
import { localePath, SITE_URL } from "@/lib/seo";

type BrandJsonLdProps = {
  locale: Locale;
  description: string;
};

export function BrandJsonLd({ locale, description }: BrandJsonLdProps) {
  const countryName = locale === "tg" ? "Тоҷикистон" : "Таджикистан";

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Brand",
        name: SITE_NAME,
        description,
        url: localePath(locale, "/"),
        logo: `${SITE_URL}/icon`,
      },
      {
        "@type": "Organization",
        name: SITE_NAME,
        description,
        url: localePath(locale, "/"),
        logo: `${SITE_URL}/icon`,
        email: CONTACT_SETTINGS.email,
        telephone: CONTACT_SETTINGS.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: CONTACT_SETTINGS.city,
          addressCountry: countryName,
          streetAddress: CONTACT_SETTINGS.address,
        },
        areaServed: {
          "@type": "Country",
          name: countryName,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
