# supabase/AGENTS.md

This folder contains database schema, migrations, seed data, RLS policies, and Supabase-related setup.

## Rules

Be careful with database changes.

Before changing SQL:

1. Explain what will change.
2. Do not drop existing tables unless explicitly requested.
3. Use safe migrations.
4. Keep RLS policies secure.
5. Do not expose service role keys on the client.

## Recommended Tables

### products

Fields:

- id;
- name;
- description;
- price;
- image_url;
- category_id;
- is_available;
- is_popular;
- created_at;
- updated_at.

### categories

Fields:

- id;
- name;
- slug;
- sort_order;
- created_at.

### contact_settings

Fields:

- id;
- phone;
- whatsapp;
- telegram;
- instagram;
- tiktok;
- youtube;
- address;
- map_url;
- updated_at.

### offers

Fields:

- id;
- title;
- description;
- discount_text;
- image_url;
- is_active;
- created_at.

### reviews

Fields:

- id;
- customer_name;
- text;
- rating;
- is_visible;
- created_at.

### admin_users

Fields:

- email;
- created_at.

## Security

- Public users can read available products, visible offers, visible reviews, and public contacts.
- Only admins can insert, update, or delete business data.
- Use RLS policies.
- Never put secret keys in frontend code.

## Migration Rules

- Use `CREATE TABLE IF NOT EXISTS` when safe.
- Use `ALTER TABLE ... ADD COLUMN IF NOT EXISTS` for new columns.
- Never reset production data without explicit permission.
- Add comments to important SQL sections.
