"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { OFFERS } from "@/lib/site-config";

export default function AdminOffersPage() {
  return (
    <div className="min-h-screen bg-coffee-50 dark:bg-espresso pt-8 pb-20">
      <Container>
        <Link href="/admin" className="mb-6 inline-flex items-center gap-2 text-sm text-gold hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Назад в админку
        </Link>
        <h1 className="mb-8 font-display text-2xl font-bold">Акции</h1>
        <div className="space-y-4">
          {OFFERS.map((offer) => (
            <div key={offer.id} className="glass-card p-5">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-gold/10 px-3 py-1 text-sm font-bold text-gold">
                  {offer.discountText}
                </span>
                <span className={`text-xs ${offer.isActive ? "text-green-600" : "text-red-500"}`}>
                  {offer.isActive ? "Активна" : "Неактивна"}
                </span>
              </div>
              <h2 className="mt-2 font-display text-lg font-semibold">{offer.title}</h2>
              <p className="text-sm text-coffee-500">{offer.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
