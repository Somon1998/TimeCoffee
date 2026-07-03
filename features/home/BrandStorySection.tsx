"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AboutImageShowcase } from "@/features/about/AboutImageShowcase";
import { AboutStoryPanel } from "@/features/about/AboutStoryPanel";
import { Link } from "@/i18n/navigation";
import { fadeInUp, viewportOnce } from "@/features/theme/motion";

export function BrandStorySection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeading
          badge={t("badge")}
          title={t("homeTitle")}
          subtitle={t("homeSubtitle")}
        />

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <AboutImageShowcase
            badge={t("badge31")}
            locationLabel={{
              city: t("location.city"),
              country: t("location.country"),
            }}
          />

          <AboutStoryPanel>
            <p className="text-[1.0625rem] leading-[1.8] text-brand-800/80 dark:text-brand-200/85">
              {t("homeParagraph1")}
            </p>
            <p className="text-[1.0625rem] leading-[1.8] text-brand-800/70 dark:text-brand-200/75">
              {t("homeParagraph2")}
            </p>
            <p className="text-[1.0625rem] leading-[1.8] text-brand-800/70 dark:text-brand-200/75">
              {t("homeParagraph3")}
            </p>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <Link href="/about">
                <Button
                  variant="outline"
                  size="md"
                  className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow-blue-glow-sm"
                >
                  {t("learnMore")}
                </Button>
              </Link>
            </motion.div>
          </AboutStoryPanel>
        </div>
      </Container>
    </section>
  );
}
