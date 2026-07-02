import type {
  Category,
  ContactSettings,
  Offer,
  Product,
  Review,
} from "@/types";
import {
  DEMO_IMAGES,
  PRODUCT_IMAGES,
} from "@/lib/image-placeholders";

export {
  DEMO_IMAGES,
  PRODUCT_IMAGES,
  getProductPlaceholder,
} from "@/lib/image-placeholders";

export const SITE_NAME = "TimeCoffee";
export const SITE_TAGLINE = "Вкус, который всегда с вами";
export const SITE_DESCRIPTION =
  "TimeCoffee — бренд растворимого кофе 3 в 1 из Таджикистана. Кофе со сливками и сахаром для дома, офиса и дороги.";

export const NAV_ROUTES = [
  { href: "/", key: "home" },
  { href: "/products", key: "products" },
  { href: "/about", key: "about" },
  { href: "/gallery", key: "gallery" },
  { href: "/contacts", key: "contacts" },
] as const;

export const CATEGORIES: Category[] = [
  { id: "coffee-3in1", name: "Кофе 3 в 1", slug: "coffee-3in1", sortOrder: 1 },
  { id: "milk", name: "Молочный", slug: "milk", sortOrder: 2 },
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "TimeCoffee 3 в 1 мягкий",
    description: "Мягкий вкус со сливками, кофе и сахаром — идеален для ежедневного напитка",
    imageUrl: PRODUCT_IMAGES.productLine,
    categories: ["coffee-3in1"],
    isAvailable: true,
    isPopular: true,
  },
  {
    id: "2",
    name: "TimeCoffee оригинал",
    description: "Фирменный вкус TimeCoffee в удобной мягкой упаковке 3 в 1",
    imageUrl: PRODUCT_IMAGES.softPack,
    categories: ["coffee-3in1"],
    isAvailable: true,
    isPopular: true,
  },
  {
    id: "3",
    name: "TimeCoffee молочный",
    description: "Нежный молочный вкус — сбалансированный и приятный",
    price: 50,
    imageUrl: PRODUCT_IMAGES.milk,
    categories: ["coffee-3in1", "milk"],
    isAvailable: true,
    isPopular: true,
  },
];

export const OFFERS: Offer[] = [
  {
    id: "1",
    title: "Семейная упаковка",
    description: "Выгодная упаковка TimeCoffee 3 в 1 для дома и офиса",
    discountText: "Выгодно",
    imageUrl: DEMO_IMAGES.offerFamily,
    isActive: true,
  },
  {
    id: "2",
    title: "Набор вкусов TimeCoffee",
    description: "Попробуйте несколько вкусов в одном наборе по специальной цене",
    discountText: "Набор",
    imageUrl: DEMO_IMAGES.offerBundle,
    isActive: true,
  },
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    customerName: "Алиса М.",
    text: "TimeCoffee 3 в 1 — мой ежедневный выбор. Мягкий вкус, удобно брать на работу и в поездку.",
    rating: 5,
    isVisible: true,
  },
  {
    id: "2",
    customerName: "Дмитрий К.",
    text: "Заказываю упаковки для офиса — быстро готовится, вкус стабильный, коллегам нравится.",
    rating: 5,
    isVisible: true,
  },
  {
    id: "3",
    customerName: "Сара Н.",
    text: "Удобный формат 3 в 1: не нужны отдельно сливки и сахар. Заказываю через WhatsApp — всё быстро.",
    rating: 5,
    isVisible: true,
  },
  {
    id: "4",
    customerName: "Игорь В.",
    text: "Приятный мягкий вкус и красивая синяя упаковка. Беру TimeCoffee почти каждую неделю.",
    rating: 5,
    isVisible: true,
  },
];

export const CONTACT_SETTINGS: ContactSettings = {
  country: "Таджикистан",
  city: "Таджикистан",
  phone: "+992 94 003 20 20",
  whatsapp: "992937301953",
  whatsappDisplay: "+992 93 730 19 53",
  telegram: "TimeCoffeetjk",
  telegramUrl: "https://t.me/TimeCoffeetjk",
  tiktok: "",
  youtube: "",
  address: "Таджикистан",
  mapUrl:
    "https://www.google.com/maps/place/%D0%94%D1%83%D1%88%D0%B0%D0%BD%D0%B1%D0%B5,+%D0%A2%D0%B0%D0%B4%D0%B6%D0%B8%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@38.5416391,68.7993794,16z/data=!4m6!3m5!1s0x38b5d127f601c729:0x29525b9787d4a994!8m2!3d38.5417354!4d68.7978523!16s%2Fg%2F11c2vm_kr9?g_ep=Eg1tbF8yMDI2MDYxNF8wIOC7DCoASAJQAg%3D%3D",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=38.5417354,68.7978523&hl=ru&z=16&output=embed",
  email: "timecoffeetj@gmail.com",
};

const BRAND_GALLERY = "/images/brand-gallery";

export const GALLERY_IMAGES = [
  {
    id: "1",
    src: `${BRAND_GALLERY}/time-coffee-packaging-cup.png`,
  },
  {
    id: "2",
    src: `${BRAND_GALLERY}/time-coffee-sachets-cup.png`,
  },
  {
    id: "3",
    src: `${BRAND_GALLERY}/time-coffee-home-office.png`,
  },
];

export const WHY_CHOOSE_US_KEYS = [
  "quality",
  "format",
  "prep",
  "taste",
  "portable",
  "packaging",
] as const;

export function getPopularProducts(): Product[] {
  return PRODUCTS.filter((p) => p.isPopular && p.isAvailable);
}

export function getHomePreviewProducts(): Product[] {
  return PRODUCTS.filter((p) => p.isAvailable);
}

export function getHomePreviewCategories(): Category[] {
  const categoryIds = new Set(
    getHomePreviewProducts().flatMap((p) => p.categories ?? [])
  );

  return CATEGORIES.filter((category) => categoryIds.has(category.id)).sort(
    (a, b) => a.sortOrder - b.sortOrder
  );
}

export function getCategoriesWithProducts(): Category[] {
  const categoryIds = new Set(
    PRODUCTS.filter((p) => p.isAvailable).flatMap((p) => p.categories ?? [])
  );

  return CATEGORIES.filter((category) => categoryIds.has(category.id)).sort(
    (a, b) => a.sortOrder - b.sortOrder
  );
}

export function getProductsByCategory(categoryId: string): Product[] {
  return PRODUCTS.filter(
    (p) => p.categories?.includes(categoryId) && p.isAvailable
  );
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
