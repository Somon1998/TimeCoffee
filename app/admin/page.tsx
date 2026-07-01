import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  Coffee,
  LayoutDashboard,
  Megaphone,
  MessageSquare,
  Settings,
  Tags,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Админ-панель",
  description: "Управление меню, контактами и акциями TimeCoffee",
  robots: { index: false, follow: false },
};

const adminLinks = [
  {
    href: "/admin/products",
    label: "Продукты",
    description: "Добавлять, редактировать цены и фото",
    icon: Coffee,
  },
  {
    href: "/admin/categories",
    label: "Категории",
    description: "Управление категориями меню",
    icon: Tags,
  },
  {
    href: "/admin/offers",
    label: "Акции",
    description: "Специальные предложения и скидки",
    icon: Megaphone,
  },
  {
    href: "/admin/reviews",
    label: "Отзывы",
    description: "Модерация отзывов клиентов",
    icon: MessageSquare,
  },
  {
    href: "/admin/settings",
    label: "Настройки",
    description: "Контакты, соцсети, адрес",
    icon: Settings,
  },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-coffee-50 dark:bg-espresso pt-8 pb-20">
      <Container>
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-coffee-600 text-white dark:bg-gold dark:text-espresso">
            <LayoutDashboard className="h-6 w-6" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold">Админ-панель</h1>
            <p className="text-sm text-coffee-500 dark:text-coffee-300/70">
              Управление сайтом TimeCoffee
            </p>
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-gold/30 bg-gold/5 p-4 text-sm text-coffee-600 dark:text-coffee-200/80">
          <strong>Архитектура готова.</strong> Подключите Supabase (см.{" "}
          <code className="rounded bg-coffee-100 px-1 dark:bg-chocolate">.env.local.example</code>
          ) и выполните миграцию из{" "}
          <code className="rounded bg-coffee-100 px-1 dark:bg-chocolate">
            supabase/migrations/
          </code>
          . Сейчас сайт работает на mock-данных из{" "}
          <code className="rounded bg-coffee-100 px-1 dark:bg-chocolate">
            lib/site-config.ts
          </code>
          .
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {adminLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group glass-card p-6 transition-all hover:shadow-premium-lg hover:-translate-y-1"
            >
              <link.icon className="mb-4 h-8 w-8 text-gold transition-transform group-hover:scale-110" />
              <h2 className="font-display text-lg font-semibold">{link.label}</h2>
              <p className="mt-1 text-sm text-coffee-500 dark:text-coffee-300/70">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
