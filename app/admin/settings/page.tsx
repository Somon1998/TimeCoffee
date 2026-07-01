"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CONTACT_SETTINGS } from "@/lib/site-config";

export default function AdminSettingsPage() {
  const fields = [
    { label: "Телефон", value: CONTACT_SETTINGS.phone },
    { label: "WhatsApp", value: CONTACT_SETTINGS.whatsapp },
    { label: "Telegram", value: CONTACT_SETTINGS.telegram },
    { label: "TikTok", value: CONTACT_SETTINGS.tiktok },
    { label: "YouTube", value: CONTACT_SETTINGS.youtube },
    { label: "Адрес", value: CONTACT_SETTINGS.address },
    { label: "Карта", value: CONTACT_SETTINGS.mapUrl },
  ];

  return (
    <div className="min-h-screen bg-coffee-50 dark:bg-espresso pt-8 pb-20">
      <Container>
        <Link href="/admin" className="mb-6 inline-flex items-center gap-2 text-sm text-gold hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Назад в админку
        </Link>
        <h1 className="mb-8 font-display text-2xl font-bold">Настройки контактов</h1>
        <div className="space-y-4 max-w-xl">
          {fields.map((field) => (
            <div key={field.label} className="glass-card p-4">
              <label className="text-xs font-medium text-coffee-500 uppercase tracking-wide">
                {field.label}
              </label>
              <p className="mt-1 font-medium">{field.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-coffee-500">
          Редактирование через формы будет доступно после подключения Supabase.
        </p>
      </Container>
    </div>
  );
}
