"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { REVIEWS } from "@/lib/site-config";

export default function AdminReviewsPage() {
  return (
    <div className="min-h-screen bg-coffee-50 dark:bg-espresso pt-8 pb-20">
      <Container>
        <Link href="/admin" className="mb-6 inline-flex items-center gap-2 text-sm text-gold hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Назад в админку
        </Link>
        <h1 className="mb-8 font-display text-2xl font-bold">Отзывы</h1>
        <div className="space-y-4">
          {REVIEWS.map((review) => (
            <div key={review.id} className="glass-card p-5">
              <div className="flex items-center justify-between">
                <span className="font-medium">{review.customerName}</span>
                <span className="text-gold">{"★".repeat(review.rating)}</span>
              </div>
              <p className="mt-2 text-sm text-coffee-500">{review.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
