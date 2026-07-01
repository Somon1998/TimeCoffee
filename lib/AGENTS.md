# lib/AGENTS.md

This folder contains utilities, services, helpers, clients, and shared logic.

## Rules

Keep business logic out of UI components when possible.

Use this folder for:

- Supabase client;
- WhatsApp message builder;
- Telegram link builder;
- formatters;
- constants;
- theme helpers;
- validation helpers;
- data fetching functions.

## Important

Do not duplicate helper functions.

If a value is reused many times, move it to constants.

Recommended files:

```txt
lib/
├── supabase/
├── whatsapp.ts
├── telegram.ts
├── constants.ts
├── utils.ts
├── format-price.ts
└── site-config.ts
```

## WhatsApp / Telegram

Message builders should generate clean customer messages.

Example:

```txt
Здравствуйте! Я хочу заказать: Latte
```

For multiple products, include names, prices, and total.

## Security

- Never expose secret keys in browser code.
- Use `NEXT_PUBLIC_` only for safe public values.
- Service role keys must stay server-side only.
