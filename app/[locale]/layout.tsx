import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { NavbarHeightSync } from "@/components/layout/NavbarHeightSync";
import { Footer } from "@/components/layout/Footer";
import { OrderProvider } from "@/features/orders/OrderContext";
import { routing, type Locale } from "@/i18n/routing";
import { SITE_NAME } from "@/lib/site-config";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";
import "../globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(SITE_URL),
    ...buildPageMetadata({
      locale: locale as Locale,
      pathname: "/",
      title: t("homeTitle"),
      description: t("homeDescription"),
    }),
    title: {
      default: t("homeTitle"),
      template: `%s | ${SITE_NAME}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <OrderProvider>
              <Navbar />
              <NavbarHeightSync />
              <main>{children}</main>
              <Footer />
            </OrderProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
