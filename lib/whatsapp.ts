export function buildWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = phone.replace(/\D/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function buildSingleOrderMessage(productName: string): string {
  return `Здравствуйте! Я хочу заказать: ${productName}`;
}

export function buildMultiOrderMessage(
  items: { name: string; price: number; quantity: number }[]
): string {
  const lines = items.map(
    (item, i) => `${i + 1}. ${item.name} — ${item.price} сомони`
  );
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return `Здравствуйте! Я хочу заказать:\n${lines.join("\n")}\n\nИтого: ${total} сомони`;
}
