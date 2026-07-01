# AGENTS.md — Time Coffee Project

You are working on **Time Coffee**, a premium coffee brand website for a real client.

This is not a simple landing page and not a basic online store.
This project must feel like a modern, expensive, elegant coffee brand website with real business functionality.

The website should make visitors think:

> “Wow, this coffee brand looks premium, modern, and trustworthy.”

## Project Goal

Build a premium brand website for **Time Coffee** with:

- beautiful modern UI;
- premium coffee brand atmosphere;
- light and dark theme;
- smooth animations;
- responsive design;
- menu/catalog;
- WhatsApp / Telegram ordering;
- contact section;
- social media links;
- admin-ready architecture;
- clean production-ready code.

## Important Product Understanding

This is a **brand website for a coffee business**, not a classic e-commerce marketplace.

The main goal is to:

- show the brand beautifully;
- create trust;
- present coffee, drinks, desserts, and offers;
- help customers contact or order through WhatsApp / Telegram;
- allow the business owner to manage menu, prices, contacts, and promotions.

## Design Direction

The design must feel:

- premium;
- modern;
- expensive;
- atmospheric;
- clean;
- emotional;
- elegant;
- coffee-inspired.

Use a strong visual direction:

### Light Theme

- cream;
- beige;
- white;
- coffee brown;
- caramel;
- soft gold accents.

### Dark Theme

- espresso black;
- dark chocolate;
- bronze;
- warm gold;
- premium dark gradients.

Avoid cheap template-looking design.

## UX Requirements

The website must be:

- simple to use;
- fast;
- mobile-first;
- responsive;
- clear;
- conversion-focused;
- beautiful on desktop and mobile.

Every important action should be obvious:

- view menu;
- order via WhatsApp;
- contact the cafe;
- open map;
- view social media.

## Required Website Sections

The public website should include:

1. Header
   - logo;
   - navigation;
   - order button;
   - light/dark theme switcher;
   - mobile burger menu.

2. Hero Section
   - premium first screen;
   - strong headline;
   - emotional coffee brand text;
   - CTA buttons;
   - beautiful coffee visual;
   - smooth animations.

3. About / Brand Story
   - story of Time Coffee;
   - atmosphere;
   - quality;
   - why this cafe is special.

4. Menu / Catalog
   - coffee;
   - tea;
   - desserts;
   - breakfast;
   - cold drinks;
   - price;
   - order button.

5. Popular Drinks
   - highlighted products;
   - premium cards;
   - hover animation.

6. Why Choose Us
   - fresh beans;
   - cozy atmosphere;
   - professional baristas;
   - quality ingredients;
   - fast ordering.

7. Gallery
   - coffee;
   - cafe atmosphere;
   - interior;
   - product photos.

8. Special Offers
   - promotions;
   - combo offers;
   - seasonal drinks.

9. Reviews
   - customer testimonials.

10. Contacts
   - address;
   - phone;
   - WhatsApp;
   - Telegram;
   - Instagram;
   - TikTok;
   - YouTube;
   - map.

11. Footer
   - logo;
   - links;
   - contacts;
   - social media;
   - copyright.

## Ordering Logic

Do not build a complex payment system unless requested.

For this business, ordering through WhatsApp / Telegram is enough.

Buttons should generate messages like:

```txt
Здравствуйте! Я хочу заказать: Cappuccino
```

For multiple items:

```txt
Здравствуйте! Я хочу заказать:
1. Cappuccino — 18 сомони
2. Cheesecake — 25 сомони

Итого: 43 сомони
```

## Admin Logic

The project should be ready for an admin panel.

Admin should be able to manage:

- products;
- categories;
- prices;
- descriptions;
- images;
- availability;
- promotions;
- contacts;
- social links;
- address;
- map link.

Use Supabase if database is needed.

## Technical Stack

Prefer:

- Next.js App Router;
- TypeScript;
- Tailwind CSS;
- Supabase;
- Framer Motion or GSAP;
- next-themes;
- responsive design;
- reusable components;
- clean architecture.

## Coding Rules

Always write clean, maintainable, production-ready code.

Use:

- TypeScript types;
- reusable components;
- clear folder structure;
- semantic HTML;
- accessible buttons and links;
- optimized images;
- responsive layout;
- no duplicated logic;
- no random inline hacks.

Avoid:

- messy code;
- huge components;
- duplicated sections;
- hardcoded business logic everywhere;
- breaking existing functionality;
- unnecessary libraries;
- fake complex architecture.

## Cursor Behavior Rules

Before making changes:

1. Read the current project structure.
2. Check existing files.
3. Understand the current stack.
4. Do not overwrite working code blindly.
5. Explain what you will change.
6. Work step by step.
7. After changes, run type check/build if possible.
8. Report what was changed.

If something is unclear, make a safe assumption and explain it.

## Quality Standard

The final website should feel like a real premium client project, not a student demo.

The website must be good enough to show to a paying client.
