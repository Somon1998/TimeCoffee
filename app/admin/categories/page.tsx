"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getCategoriesWithProducts } from "@/lib/site-config";

export default function AdminCategoriesPage() {
  const categories = getCategoriesWithProducts();
  return (
    <div className="min-h-screen bg-coffee-50 dark:bg-espresso pt-8 pb-20">
      <Container>
        <Link href="/admin" className="mb-6 inline-flex items-center gap-2 text-sm text-gold hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Назад в админку
        </Link>
        <h1 className="mb-8 font-display text-2xl font-bold">Категории</h1>
        <div className="space-y-3">
          {categories.map((cat) => (
            <div key={cat.id} className="glass-card flex items-center justify-between p-4">
              <span className="font-medium">{cat.name}</span>
              <span className="text-sm text-coffee-500">/{cat.slug}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
