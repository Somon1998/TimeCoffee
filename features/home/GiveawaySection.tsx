"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Coffee, Gift, MessageCircle, Package, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CONTACT_SETTINGS } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { buildTelegramUrl } from "@/lib/telegram";
import { fadeInUp, staggerContainer, viewportOnce } from "@/features/theme/motion";

const STEP_KEYS = ["1", "2", "3", "4"] as const;

const stepIcons: Record<(typeof STEP_KEYS)[number], ReactNode> = {
  "1": <Coffee className="h-5 w-5" />,
  "2": <Package className="h-5 w-5" />,
  "3": <MessageCircle className="h-5 w-5" />,
  "4": <Gift className="h-5 w-5" />,
};

export function GiveawaySection() {
  const t = useTranslations("giveaway");
  const whatsappUrl = buildWhatsAppUrl(
    CONTACT_SETTINGS.whatsapp,
    t("participateMessage")
  );
  const telegramUrl = buildTelegramUrl(
    CONTACT_SETTINGS.telegram,
    t("participateMessage")
  );

  return (
    <section
      id="giveaway"
      className="bg-brand-50/50 py-14 dark:bg-brand-900/30 sm:py-16 md:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
          className="mb-8 md:mb-10 lg:mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="giveaway-card-premium mx-auto w-full max-w-5xl rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10"
        >
          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid list-none grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-4"
          >
            {STEP_KEYS.map((key, index) => (
              <motion.li
                key={key}
                variants={fadeInUp}
                className="giveaway-step-card group flex min-w-0 flex-col rounded-2xl p-4 sm:p-5 md:p-6"
              >
                <div className="mb-3 flex items-center justify-between gap-3 sm:mb-4">
                  <span
                    className="giveaway-step-number flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <div className="giveaway-step-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    {stepIcons[key]}
                  </div>
                </div>
                <p className="min-w-0 break-words text-sm font-medium leading-relaxed text-brand-800 dark:text-brand-100 sm:text-[0.9375rem]">
                  {t(`steps.${key}`)}
                </p>
              </motion.li>
            ))}
          </motion.ol>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-6 flex flex-col items-center gap-2.5 md:mt-8 md:grid md:grid-cols-2 md:items-stretch md:gap-4"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-sm md:max-w-none"
            >
              <Button
                variant="whatsapp"
                size="lg"
                className="w-full min-h-[48px] gap-2 px-4 py-3 text-sm leading-snug tracking-normal md:min-h-0 md:px-8 md:py-4 md:text-lg md:tracking-wide"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 md:h-5 md:w-5" />
                <span className="text-balance">{t("ctaWhatsapp")}</span>
              </Button>
            </a>
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-sm md:max-w-none"
            >
              <Button
                variant="telegram"
                size="lg"
                className="w-full min-h-[48px] gap-2 px-4 py-3 text-sm leading-snug tracking-normal md:min-h-0 md:px-8 md:py-4 md:text-lg md:tracking-wide"
              >
                <Send className="h-4 w-4 shrink-0 md:h-5 md:w-5" />
                <span className="text-balance">{t("ctaTelegram")}</span>
              </Button>
            </a>
          </motion.div>

          <p className="mt-5 text-center text-xs leading-relaxed text-brand-800/55 dark:text-brand-200/55 sm:mt-6 sm:text-sm">
            {t("disclaimer")}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
