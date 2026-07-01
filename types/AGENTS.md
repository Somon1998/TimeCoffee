# types/AGENTS.md

This folder contains shared TypeScript types.

## Rules

All important data models should have types.

Recommended types:

- Product;
- Category;
- ContactSettings;
- SocialLinks;
- Offer;
- Review;
- OrderItem;
- ThemeMode.

Avoid using `any`.

Use clear names and simple interfaces.

Example:

```ts
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  categoryId: string;
  isAvailable: boolean;
  isPopular?: boolean;
};
```

## Type Quality

- Keep types small and clear.
- Reuse shared types instead of redefining them.
- Use union types for statuses and categories when useful.
- Keep database types and UI types consistent.
