"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { REVIEWS } from "@/lib/site-config";
import { viewportOnce } from "@/features/theme/motion";

export function ReviewsSection() {
  const visibleReviews = REVIEWS.filter((r) => r.isVisible);
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % visibleReviews.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + visibleReviews.length) % visibleReviews.length);

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          badge="Отзывы"
          title="Что говорят покупатели"
          subtitle="Отзывы о продукции TimeCoffee"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="relative mx-auto max-w-3xl"
        >
          <div className="rounded-2xl border border-brand-100 bg-white p-8 shadow-premium dark:border-brand-700 dark:bg-brand-800/40 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: visibleReviews[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-brand-500 text-brand-500"
                      />
                    )
                  )}
                </div>
                <blockquote className="font-display text-xl leading-relaxed text-brand-900 dark:text-brand-50 md:text-2xl">
                  &ldquo;{visibleReviews[current].text}&rdquo;
                </blockquote>
                <p className="mt-6 font-medium text-brand-600 dark:text-brand-300">
                  — {visibleReviews[current].customerName}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-100 bg-white transition-all hover:scale-105 hover:border-brand-200 dark:border-brand-700 dark:bg-brand-800/60"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {visibleReviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-brand-600" : "w-2 bg-brand-200"
                  }`}
                  aria-label={`Отзыв ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-100 bg-white transition-all hover:scale-105 hover:border-brand-200 dark:border-brand-700 dark:bg-brand-800/60"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
