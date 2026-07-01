-- Time Coffee — Initial Schema
-- Safe migration: uses IF NOT EXISTS

-- Categories
CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Products
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  price NUMERIC(10, 2) NOT NULL,
  image_url TEXT,
  category_id TEXT NOT NULL REFERENCES categories(id),
  is_available BOOLEAN NOT NULL DEFAULT true,
  is_popular BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Contact settings (single row)
CREATE TABLE IF NOT EXISTS contact_settings (
  id INTEGER PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  phone TEXT NOT NULL DEFAULT '',
  whatsapp TEXT NOT NULL DEFAULT '',
  telegram TEXT NOT NULL DEFAULT '',
  instagram TEXT NOT NULL DEFAULT '',
  tiktok TEXT NOT NULL DEFAULT '',
  youtube TEXT NOT NULL DEFAULT '',
  address TEXT NOT NULL DEFAULT '',
  map_url TEXT NOT NULL DEFAULT '',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Offers
CREATE TABLE IF NOT EXISTS offers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  discount_text TEXT NOT NULL DEFAULT '',
  image_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Reviews
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name TEXT NOT NULL,
  text TEXT NOT NULL,
  rating INTEGER NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_visible BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Admin users
CREATE TABLE IF NOT EXISTS admin_users (
  email TEXT PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE offers ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY IF NOT EXISTS "Public read categories" ON categories FOR SELECT USING (true);
CREATE POLICY IF NOT EXISTS "Public read available products" ON products FOR SELECT USING (is_available = true);
CREATE POLICY IF NOT EXISTS "Public read contacts" ON contact_settings FOR SELECT USING (true);
CREATE POLICY IF NOT EXISTS "Public read active offers" ON offers FOR SELECT USING (is_active = true);
CREATE POLICY IF NOT EXISTS "Public read visible reviews" ON reviews FOR SELECT USING (is_visible = true);

-- Admin write policies (authenticated users in admin_users)
CREATE POLICY IF NOT EXISTS "Admin manage products" ON products FOR ALL
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admin_users));

CREATE POLICY IF NOT EXISTS "Admin manage categories" ON categories FOR ALL
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admin_users));

CREATE POLICY IF NOT EXISTS "Admin manage contacts" ON contact_settings FOR ALL
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admin_users));

CREATE POLICY IF NOT EXISTS "Admin manage offers" ON offers FOR ALL
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admin_users));

CREATE POLICY IF NOT EXISTS "Admin manage reviews" ON reviews FOR ALL
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admin_users));
