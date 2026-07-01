"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AboutImageShowcase } from "@/features/about/AboutImageShowcase";
import { AboutStoryPanel } from "@/features/about/AboutStoryPanel";
import { AboutValueCards } from "@/features/about/AboutValueCards";

export function AboutPageContent() {
  const t = useTranslations("about");

  const values = [
    {
      title: t("values.quality.title"),
      text: t("values.quality.text"),
    },
    {
      title: t("values.convenience.title"),
      text: t("values.convenience.text"),
    },
    {
      title: t("values.brand.title"),
      text: t("values.brand.text"),
    },
  ];

  return (
    <div className="page-top pb-16">
      <Container>
        <SectionHeading
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <AboutImageShowcase
            badge={t("badge31")}
            sticky
            locationLabel={{
              city: t("location.city"),
              country: t("location.country"),
            }}
          />

          <AboutStoryPanel>
            <p className="text-[1.0625rem] leading-[1.8] text-brand-800/80 dark:text-brand-200/85">
              {t("paragraph1")}
            </p>
            <p className="text-[1.0625rem] leading-[1.8] text-brand-800/70 dark:text-brand-200/75">
              {t("paragraph2")}
            </p>
            <p className="text-[1.0625rem] leading-[1.8] text-brand-800/70 dark:text-brand-200/75">
              {t("paragraph3")}
            </p>

            <AboutValueCards items={values} />
          </AboutStoryPanel>
        </div>
      </Container>
    </div>
  );
}
