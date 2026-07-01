"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CONTACT_SETTINGS } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { buildTelegramUrl } from "@/lib/telegram";
import { fadeInUp, staggerContainer, viewportOnce } from "@/features/theme/motion";

type ContactInfoCardProps = {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
};

function ContactInfoCard({ icon: Icon, title, children }: ContactInfoCardProps) {
  return (
    <div className="contact-card-premium rounded-2xl p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="contact-icon-premium flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-base font-semibold tracking-tight text-brand-900 dark:text-brand-50">
            {title}
          </h3>
          <div className="mt-1.5 text-sm leading-relaxed text-brand-800/65 dark:text-brand-200/70">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactSection() {
  const t = useTranslations("contacts");
  const whatsappUrl = buildWhatsAppUrl(
    CONTACT_SETTINGS.whatsapp,
    t("contactMessage")
  );
  const telegramUrl = buildTelegramUrl(
    CONTACT_SETTINGS.telegram,
    t("contactMessage")
  );

  return (
    <section
      id="contacts"
      className="section-padding-compact section-warm-accent relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-subtle-mesh-light dark:bg-subtle-mesh-dark"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-brand-400/8 blur-3xl dark:bg-brand-500/6"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-1/4 h-56 w-56 rounded-full bg-brand-200/30 blur-3xl dark:bg-brand-700/20"
        aria-hidden
      />

      <Container className="relative">
        <SectionHeading
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-3.5"
          >
            <motion.div variants={fadeInUp}>
              <ContactInfoCard icon={MapPin} title={t("address")}>
                <p>{CONTACT_SETTINGS.address}</p>
                <a
                  href={CONTACT_SETTINGS.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-300 dark:hover:text-brand-200"
                >
                  {t("openMap")} →
                </a>
              </ContactInfoCard>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ContactInfoCard icon={Phone} title={t("phone")}>
                <a
                  href={`tel:${CONTACT_SETTINGS.phone.replace(/\s/g, "")}`}
                  className="block transition-colors hover:text-brand-600 dark:hover:text-brand-300"
                >
                  {CONTACT_SETTINGS.phone}
                </a>
              </ContactInfoCard>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ContactInfoCard icon={Mail} title={t("email")}>
                <a
                  href={`mailto:${CONTACT_SETTINGS.email}`}
                  className="block transition-colors hover:text-brand-600 dark:hover:text-brand-300"
                >
                  {CONTACT_SETTINGS.email}
                </a>
              </ContactInfoCard>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="whatsapp" className="w-full gap-2">
                  <WhatsAppIcon className="h-5 w-5 shrink-0" />
                  {t("whatsapp")}
                </Button>
              </a>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="telegram" className="w-full gap-2">
                  <Send className="h-5 w-5 shrink-0" />
                  {t("telegram")}
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            className="map-frame-premium h-full min-h-[320px] lg:min-h-0"
          >
            <iframe
              src={CONTACT_SETTINGS.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("mapTitle")}
              className="h-full min-h-[320px] w-full lg:min-h-[380px]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
