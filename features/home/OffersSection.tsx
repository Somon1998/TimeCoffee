"use client";

import { SiteImage } from "@/components/ui/SiteImage";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OFFERS } from "@/lib/site-config";
import { fadeInUp, staggerContainer, viewportOnce } from "@/features/theme/motion";

export function OffersSection() {
  const activeOffers = OFFERS.filter((o) => o.isActive);

  return (
    <section className="section-padding bg-brand-50/50 dark:bg-brand-900/30">
      <Container>
        <SectionHeading
          badge="Акции"
          title="Специальные предложения"
          subtitle="Выгодные наборы и семейные упаковки TimeCoffee"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-2"
        >
          {activeOffers.map((offer) => (
            <motion.article
              key={offer.id}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-3xl shadow-premium-lg"
            >
              {offer.imageUrl && (
                <SiteImage
                  src={offer.imageUrl}
                  alt={offer.title}
                  width={800}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-80"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-800/70 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-10">
                <span className="mb-3 inline-block w-fit rounded-full bg-brand-400 px-4 py-1 text-sm font-bold text-white">
                  {offer.discountText}
                </span>
                <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                  {offer.title}
                </h3>
                <p className="mt-2 max-w-md text-brand-100/90">{offer.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
