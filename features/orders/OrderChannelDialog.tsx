"use client";

import { useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { CONTACT_SETTINGS } from "@/lib/site-config";
import { buildTelegramUrl } from "@/lib/telegram";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type OrderChannelDialogProps = {
  productName: string;
  isOpen: boolean;
  onClose: () => void;
};

export function OrderChannelDialog({
  productName,
  isOpen,
  onClose,
}: OrderChannelDialogProps) {
  const t = useTranslations("order");
  const message = t("singleMessage", { product: productName });
  const whatsappUrl = buildWhatsAppUrl(CONTACT_SETTINGS.whatsapp, message);
  const telegramUrl = buildTelegramUrl(CONTACT_SETTINGS.telegram, message);

  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEscape]);

  const openChannel = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-[2px] sm:backdrop-blur-sm"
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="order-channel-title"
            className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="pointer-events-auto w-[calc(100vw-2rem)] max-w-md"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-premium-lg dark:border-brand-700 dark:bg-brand-800">
                <div className="flex items-start justify-between gap-3 border-b border-brand-100 px-4 py-3 sm:px-5 sm:py-4 dark:border-brand-700">
                  <div className="min-w-0 flex-1 pr-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-brand-600 dark:text-brand-300">
                      {t("title")}
                    </p>
                    <h2
                      id="order-channel-title"
                      className="mt-1 break-words font-display text-base font-semibold leading-snug text-brand-900 sm:text-lg dark:text-brand-50"
                    >
                      {t("youWant", { product: productName })}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-brand-600/70 transition-colors hover:bg-brand-50 hover:text-brand-600 dark:text-brand-200/70 dark:hover:bg-brand-700 dark:hover:text-brand-100"
                    aria-label={t("close")}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-4 p-4 sm:p-5">
                  <p className="text-sm leading-relaxed text-brand-800/70 dark:text-brand-200/80">
                    {t("chooseChannel")}
                  </p>

                  <div className="grid gap-3">
                    <Button
                      variant="whatsapp"
                      className="h-12 w-full gap-2"
                      onClick={() => openChannel(whatsappUrl)}
                    >
                      <WhatsAppIcon className="h-5 w-5 shrink-0" />
                      WhatsApp
                    </Button>
                    <Button
                      variant="telegram"
                      className="h-12 w-full gap-2"
                      onClick={() => openChannel(telegramUrl)}
                    >
                      <Send className="h-5 w-5 shrink-0" />
                      Telegram
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
