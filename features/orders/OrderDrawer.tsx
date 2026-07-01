"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useOrder } from "@/features/orders/OrderContext";
import { formatPrice } from "@/lib/format-price";
import { CONTACT_SETTINGS } from "@/lib/site-config";
import {
  buildMultiOrderMessage,
  buildWhatsAppUrl,
} from "@/lib/whatsapp";
import { buildTelegramUrl } from "@/lib/telegram";

export function OrderDrawer() {
  const { items, isOpen, setIsOpen, removeItem, clearCart, total } = useOrder();

  const orderItems = items.map((i) => ({
    name: i.product.name,
    price: i.product.price ?? 0,
    quantity: i.quantity,
  }));

  const message = buildMultiOrderMessage(orderItems);
  const whatsappUrl = buildWhatsAppUrl(CONTACT_SETTINGS.whatsapp, message);
  const telegramUrl = buildTelegramUrl(CONTACT_SETTINGS.telegram, message);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col glass shadow-premium-lg"
          >
            <div className="flex items-center justify-between border-b border-[var(--glass-border)] p-6">
              <h2 className="font-display text-xl font-bold">Ваш заказ</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl hover:bg-coffee-100 dark:hover:bg-chocolate"
                aria-label="Закрыть"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <p className="text-center text-coffee-500 dark:text-coffee-300/70">
                  Корзина пуста. Добавьте напитки из меню.
                </p>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.product.id}
                      className="flex items-center justify-between rounded-xl bg-coffee-50/50 p-4 dark:bg-chocolate/50"
                    >
                      <div>
                        <p className="font-medium">{item.product.name}</p>
                        <p className="text-sm text-coffee-500">
                          {item.product.price != null
                            ? `${formatPrice(item.product.price)} × ${item.quantity}`
                            : `× ${item.quantity}`}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-coffee-400 hover:text-red-500"
                        aria-label={`Удалить ${item.product.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-[var(--glass-border)] p-6 space-y-4">
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span>Итого</span>
                  <span className="text-gold">{formatPrice(total)}</span>
                </div>
                <div className="grid gap-3">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="whatsapp" className="w-full">
                      Отправить в WhatsApp
                    </Button>
                  </a>
                  <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="telegram" className="w-full">
                      Отправить в Telegram
                    </Button>
                  </a>
                  <Button variant="ghost" size="sm" onClick={clearCart} className="w-full">
                    Очистить
                  </Button>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
