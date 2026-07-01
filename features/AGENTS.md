# features/AGENTS.md

This folder contains feature-specific business sections.

## Rules

Use this folder for big sections of the website.

Recommended structure:

```txt
features/
├── home/
├── menu/
├── about/
├── contacts/
├── orders/
├── admin/
└── theme/
```

## Home Features

Homepage sections may include:

- HeroSection;
- BrandStorySection;
- PopularDrinksSection;
- MenuPreviewSection;
- WhyChooseUsSection;
- GallerySection;
- OffersSection;
- ReviewsSection;
- ContactSection.

## Menu Features

Menu should support:

- categories;
- products;
- prices;
- descriptions;
- images;
- availability;
- order button.

## Orders Features

Ordering should focus on WhatsApp / Telegram.

Do not build complex checkout unless requested.

## Admin Features

Admin should be clean and practical.

Admin should allow editing:

- products;
- categories;
- prices;
- availability;
- images;
- contacts;
- social links;
- offers.

## Animation Rules

Animations should improve the premium feeling, not slow the website down.
Use Framer Motion or GSAP carefully.

Good animation examples:

- fade in on scroll;
- smooth hero entrance;
- subtle parallax;
- card hover lift;
- button micro-interactions;
- smooth theme transitions.
