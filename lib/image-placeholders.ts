/** Фото продукции TimeCoffee — карточки на /menu и /products */
const PRODUCT_PHOTOS = "/images/products";

export const PRODUCT_IMAGES = {
  productLine: `${PRODUCT_PHOTOS}/time-coffee-product-line.png`,
  milk: `${PRODUCT_PHOTOS}/time-coffee-milk.png`,
  sticks: `${PRODUCT_PHOTOS}/time-coffee-sticks.png`,
  softPack: `${PRODUCT_PHOTOS}/time-coffee-soft-pack.png`,
} as const;

/** Demo-фото в public/images/production/ — галерея, офферы и прочие секции */
const PRODUCTION_PHOTOS = "/images/production";

export const HERO_VIDEO = "/videos/hero-timecoffee.mp4";

export const DEMO_IMAGES = {
  hero: "/images/hero/time-coffee-sticks-hero.png",
  productSoft: `${PRODUCTION_PHOTOS}/product-soft.jpg`,
  productOriginal: `${PRODUCTION_PHOTOS}/product-original.jpg`,
  productMilk: `${PRODUCTION_PHOTOS}/product-milk.jpg`,
  productClassic: `${PRODUCTION_PHOTOS}/product-classic.jpg`,
  productBox: `${PRODUCTION_PHOTOS}/product-box.jpg`,
  productSet: `${PRODUCTION_PHOTOS}/product-set.jpg`,
  about: "/images/brand/time-coffee-about-brand.png",
  galleryPackaging: `${PRODUCTION_PHOTOS}/coffee-packaging.jpg`,
  galleryCup: `${PRODUCTION_PHOTOS}/coffee-cup.jpg`,
  galleryInstant: `${PRODUCTION_PHOTOS}/instant-coffee.jpg`,
  galleryBeans: `${PRODUCTION_PHOTOS}/coffee-beans.jpg`,
  galleryPreparation: `${PRODUCTION_PHOTOS}/product-lifestyle.jpg`,
  galleryProduction: `${PRODUCTION_PHOTOS}/coffee-production.jpg`,
  galleryLifestyle: `${PRODUCTION_PHOTOS}/coffee-sachet.jpg`,
  offerBundle: `${PRODUCTION_PHOTOS}/offer-bundle.jpg`,
  offerFamily: `${PRODUCTION_PHOTOS}/offer-family.jpg`,
} as const;

/** @deprecated Используйте DEMO_IMAGES */
export const PLACEHOLDER_IMAGES = {
  coffee: DEMO_IMAGES.productOriginal,
  coffeeCappuccino: DEMO_IMAGES.productSoft,
  coffeeLatte: DEMO_IMAGES.productMilk,
  coffeeEspresso: DEMO_IMAGES.productClassic,
  coffeeFlatWhite: DEMO_IMAGES.productOriginal,
  coffeeRaf: DEMO_IMAGES.productMilk,
  coffeeAmericano: DEMO_IMAGES.productClassic,
  tea: DEMO_IMAGES.productSoft,
  dessert: DEMO_IMAGES.productSet,
  breakfast: DEMO_IMAGES.productBox,
  coldDrink: DEMO_IMAGES.productMilk,
  cafe: DEMO_IMAGES.galleryProduction,
  beans: DEMO_IMAGES.galleryBeans,
  hero: DEMO_IMAGES.hero,
  galleryInterior: DEMO_IMAGES.galleryProduction,
  galleryBarista: DEMO_IMAGES.galleryPreparation,
  galleryAtmosphere: DEMO_IMAGES.galleryLifestyle,
  galleryPour: DEMO_IMAGES.galleryInstant,
  galleryDessert: DEMO_IMAGES.galleryCup,
  galleryCounter: DEMO_IMAGES.galleryPackaging,
} as const;

const PRODUCT_IMAGE_BY_ID: Record<string, string> = {
  "1": PRODUCT_IMAGES.productLine,
  "2": PRODUCT_IMAGES.softPack,
  "3": PRODUCT_IMAGES.milk,
  "4": PRODUCT_IMAGES.sticks,
};

export function getProductPlaceholder(
  categories: string[],
  productId?: string
): string {
  if (productId && PRODUCT_IMAGE_BY_ID[productId]) {
    return PRODUCT_IMAGE_BY_ID[productId];
  }

  if (categories.includes("milk")) {
    return PRODUCT_IMAGES.milk;
  }

  if (categories.includes("classic")) {
    return PRODUCT_IMAGES.sticks;
  }

  if (categories.includes("coffee-3in1")) {
    return PRODUCT_IMAGES.softPack;
  }

  return PRODUCT_IMAGES.productLine;
}
