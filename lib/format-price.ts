export const CURRENCY = "сомони";
export const CURRENCY_SYMBOL = "смн";

export function formatPrice(price: number): string {
  return `${price} ${CURRENCY}`;
}
