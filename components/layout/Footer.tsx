import { MapPin, Phone, Send } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { CONTACT_SETTINGS, NAV_ROUTES, SITE_NAME } from "@/lib/site-config";
import { buildTelegramUrl } from "@/lib/telegram";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const tContacts = await getTranslations("contacts");
  const year = new Date().getFullYear();
  const whatsappUrl = buildWhatsAppUrl(
    CONTACT_SETTINGS.whatsapp,
    tContacts("contactMessage")
  );
  const telegramUrl = buildTelegramUrl(
    CONTACT_SETTINGS.telegram,
    tContacts("contactMessage")
  );

  return (
    <footer className="footer-premium relative overflow-hidden text-white">
      <div className="footer-premium-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="footer-premium-line pointer-events-none absolute inset-x-0 top-0" aria-hidden />

      <Container className="relative py-12 md:py-14">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-12">
          <div className="lg:pr-4">
            <BrandLogo size="lg" variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-200/75">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-base font-semibold tracking-wide text-white/95">
              {t("navigation")}
            </h3>
            <ul className="space-y-2.5">
              {NAV_ROUTES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-200/70 transition-colors duration-300 hover:text-brand-100"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-base font-semibold tracking-wide text-white/95">
              {t("contacts")}
            </h3>
            <ul className="space-y-3 text-sm text-brand-200/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300/80" />
                <span className="leading-relaxed">{CONTACT_SETTINGS.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-brand-300/80" />
                <a
                  href={`tel:${CONTACT_SETTINGS.phone.replace(/\s/g, "")}`}
                  className="transition-colors duration-300 hover:text-white"
                >
                  {CONTACT_SETTINGS.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-base font-semibold tracking-wide text-white/95">
              {t("social")}
            </h3>
            <div className="flex gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="footer-social-premium text-[#25D366]"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="footer-social-premium text-[#5CC8FF]"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-copyright mt-10 border-t border-white/8 pt-6 md:mt-12 md:pt-7">
          <p className="text-center text-xs tracking-wide text-brand-300/55">
            © {year} {SITE_NAME}. {t("copyright")}
          </p>
        </div>
      </Container>
    </footer>
  );
}
