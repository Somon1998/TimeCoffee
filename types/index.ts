export type Category = {
  id: string;
  name: string;
  slug: string;
  sortOrder: number;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price?: number;
  imageUrl?: string;
  categories: string[];
  isAvailable: boolean;
  isPopular?: boolean;
};

export type ContactSettings = {
  country: string;
  city: string;
  phone: string;
  whatsapp: string;
  whatsappDisplay: string;
  telegram: string;
  telegramUrl: string;
  tiktok: string;
  youtube: string;
  address: string;
  mapUrl: string;
  mapEmbedUrl: string;
  email?: string;
};

export type SocialLinks = {
  tiktok: string;
  youtube: string;
  whatsapp: string;
  telegram: string;
};

export type Offer = {
  id: string;
  title: string;
  description: string;
  discountText: string;
  imageUrl?: string;
  isActive: boolean;
};

export type Review = {
  id: string;
  customerName: string;
  text: string;
  rating: number;
  isVisible: boolean;
};

export type OrderItem = {
  product: Product;
  quantity: number;
};

export type ThemeMode = "light" | "dark" | "system";
