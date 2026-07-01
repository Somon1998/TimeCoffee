"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PRODUCTS } from "@/lib/site-config";
import { formatPrice } from "@/lib/format-price";

export default function AdminProductsPage() {
  return (
    <div className="min-h-screen bg-coffee-50 dark:bg-espresso pt-8 pb-20">
      <Container>
        <Link href="/admin" className="mb-6 inline-flex items-center gap-2 text-sm text-gold hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Назад в админку
        </Link>

        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-display text-2xl font-bold">Продукты</h1>
          <Button size="sm" disabled>
            + Добавить (Supabase)
          </Button>
        </div>

        <div className="overflow-hidden rounded-2xl glass-card">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-[var(--glass-border)] bg-coffee-50/50 dark:bg-chocolate/50">
              <tr>
                <th className="p-4 font-semibold">Название</th>
                <th className="p-4 font-semibold hidden sm:table-cell">Категория</th>
                <th className="p-4 font-semibold">Цена</th>
                <th className="p-4 font-semibold hidden md:table-cell">Статус</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map((p) => (
                <tr key={p.id} className="border-b border-[var(--glass-border)] last:border-0">
                  <td className="p-4">{p.name}</td>
                  <td className="p-4 hidden sm:table-cell text-coffee-500">{p.categories.join(", ")}</td>
                  <td className="p-4">
                    {p.price != null ? formatPrice(p.price) : null}
                  </td>
                  <td className="p-4 hidden md:table-cell">
                    <span className={`rounded-full px-2 py-0.5 text-xs ${p.isAvailable ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700"}`}>
                      {p.isAvailable ? "Доступен" : "Скрыт"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-coffee-500">
          Полное редактирование будет доступно после подключения Supabase Auth.
        </p>
      </Container>
    </div>
  );
}
