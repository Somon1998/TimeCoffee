"use client";

import { HeroSteamEffect } from "@/components/ui/HeroSteamEffect";
import { SiteImage } from "@/components/ui/SiteImage";
import { PremiumBackground } from "@/components/ui/PremiumBackground";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState, type RefObject } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import {
  floatAnimation,
  heroImageVariants,
  heroTextVariants,
} from "@/features/theme/motion";
import { SITE_NAME, DEMO_IMAGES } from "@/lib/site-config";

type HeroScrollMotion = {
  imageY: MotionValue<number>;
  textY: MotionValue<number>;
  opacity: MotionValue<number>;
  imageScale: MotionValue<number>;
};

type HeroMotionPrefs = {
  floatEnabled: boolean;
  steamAnimated: boolean;
};

function HeroSectionView({
  sectionRef,
  scrollMotion,
  motionPrefs = { floatEnabled: false, steamAnimated: false },
}: {
  sectionRef: RefObject<HTMLElement | null>;
  scrollMotion?: HeroScrollMotion;
  motionPrefs?: HeroMotionPrefs;
}) {
  const t = useTranslations("hero");

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] overflow-hidden pt-24 pb-12 sm:min-h-screen sm:pt-28 sm:pb-16 md:pt-32 md:pb-16"
    >
      <PremiumBackground variant="hero" />

      {scrollMotion ? (
        <>
          <motion.div
            style={{ y: scrollMotion.imageY }}
            className="product-glow -right-16 top-28 h-[26rem] w-[26rem] bg-brand-400/20 dark:bg-brand-500/12"
          />
          <motion.div
            style={{ y: scrollMotion.textY }}
            className="product-glow product-glow--pulse -left-20 bottom-12 h-72 w-72 bg-brand-300/15 dark:bg-brand-400/10"
          />
        </>
      ) : (
        <>
          <div className="product-glow -right-16 top-28 h-[26rem] w-[26rem] bg-brand-400/20 dark:bg-brand-500/12" />
          <div className="product-glow product-glow--pulse -left-20 bottom-12 h-72 w-72 bg-brand-300/15 dark:bg-brand-400/10" />
        </>
      )}
      <div className="product-glow product-glow--delayed right-[18%] top-[42%] h-56 w-56 bg-brand-200/30 dark:bg-brand-400/8" />

      <Container className="relative flex min-h-[calc(92vh-6.5rem)] flex-col items-center justify-center gap-10 sm:min-h-[calc(100vh-7.5rem)] lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
        <motion.div
          style={
            scrollMotion
              ? { opacity: scrollMotion.opacity, y: scrollMotion.textY }
              : undefined
          }
          className="flex-1 text-center lg:max-w-xl lg:flex-[0.46] lg:text-left xl:max-w-2xl"
        >
          <motion.span
            custom={0}
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-white/70 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-brand-600 backdrop-blur-md sm:mb-6 sm:text-sm dark:border-brand-600/40 dark:bg-brand-900/50 dark:text-brand-200"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-coffee-accent" aria-hidden />
            {t("badge")}
          </motion.span>

          <motion.h1
            custom={1}
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            className="heading-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl xl:text-8xl"
          >
            {SITE_NAME}
          </motion.h1>

          <motion.p
            custom={2}
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            className="text-gradient-hero mt-4 font-display text-2xl font-semibold leading-snug sm:mt-5 sm:text-3xl md:text-4xl lg:mt-5"
          >
            {t("tagline")}
          </motion.p>

          <motion.p
            custom={3}
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            className="text-body-premium mx-auto mt-6 max-w-lg text-base sm:text-lg lg:mx-0 lg:mt-7 lg:max-w-md"
          >
            {t("description")}
          </motion.p>

          <motion.div
            custom={4}
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:mt-9 lg:justify-start"
          >
            <Link href="/products">
              <Button variant="primary" size="lg" className="hero-cta-btn group w-full sm:w-auto">
                {t("cta")}
                <ArrowRight className="h-5 w-5 transition-transform duration-500 ease-out group-hover:translate-x-1.5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={heroImageVariants}
          initial="hidden"
          animate="visible"
          style={scrollMotion ? { scale: scrollMotion.imageScale } : undefined}
          className="relative w-full max-w-[340px] flex-1 sm:max-w-[520px] lg:max-w-none lg:flex-[0.56] xl:flex-[0.58]"
        >
          <motion.div
            animate={motionPrefs.floatEnabled ? floatAnimation : undefined}
            className="relative mx-auto w-full lg:scale-[1.04] xl:scale-[1.06]"
          >
            <div
              className="hero-product-back-glow absolute -inset-14 rounded-full sm:-inset-16"
              aria-hidden
            />
            <div
              className="hero-product-back-glow hero-product-back-glow--accent absolute -inset-8 rounded-[2.75rem] sm:-inset-10"
              aria-hidden
            />
            <div className="product-glow-ring absolute -inset-3 rounded-[2.5rem] sm:-inset-5" aria-hidden />

            <div
              className="absolute -inset-10 rounded-full bg-gradient-radial from-brand-400/25 via-brand-300/12 to-transparent blur-3xl dark:from-brand-500/18 dark:via-brand-400/8"
              aria-hidden
            />
            <div
              className="absolute -inset-4 rounded-[2.25rem] bg-gradient-radial from-coffee-accent/15 via-transparent to-transparent opacity-80 blur-xl dark:from-coffee-accent/10"
              aria-hidden
            />
            <div
              className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/25 to-transparent opacity-50 dark:from-brand-300/8"
              aria-hidden
            />

            <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] border border-brand-300/50 shadow-product-glow ring-1 ring-brand-400/20 dark:border-brand-500/30 dark:ring-brand-400/15 sm:aspect-[16/10]">
              <SiteImage
                src={DEMO_IMAGES.hero}
                alt={t("imageAlt")}
                width={2614}
                height={1394}
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 520px, 56vw"
                className="h-full w-full object-cover object-center"
                priority
              />
              <HeroSteamEffect
                animated={motionPrefs.steamAnimated}
                className="left-[14%] top-[8%] h-[42%] w-[28%] sm:left-[16%] sm:top-[6%] sm:h-[44%] sm:w-[26%]"
              />
            </div>

            <div
              className="absolute -bottom-2 left-1/2 h-10 w-4/5 -translate-x-1/2 rounded-full bg-coffee-800/12 blur-2xl dark:bg-black/50"
              aria-hidden
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function HeroSectionParallax({
  motionPrefs,
}: {
  motionPrefs: HeroMotionPrefs;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <HeroSectionView
      sectionRef={ref}
      scrollMotion={{ imageY, textY, opacity, imageScale }}
      motionPrefs={motionPrefs}
    />
  );
}

function HeroSectionStatic({
  motionPrefs,
}: {
  motionPrefs: HeroMotionPrefs;
}) {
  const ref = useRef<HTMLElement>(null);
  return <HeroSectionView sectionRef={ref} motionPrefs={motionPrefs} />;
}

function useHeroMotionPrefs() {
  const [prefs, setPrefs] = useState({
    parallaxEnabled: false,
    floatEnabled: false,
    steamAnimated: false,
  });

  useEffect(() => {
    const tabletQuery = window.matchMedia("(max-width: 767px)");
    const desktopQuery = window.matchMedia("(max-width: 1023px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => {
      const reduced = reducedMotionQuery.matches;
      const desktopMotion = !desktopQuery.matches && !reduced;

      setPrefs({
        parallaxEnabled: !tabletQuery.matches && !reduced,
        floatEnabled: desktopMotion,
        steamAnimated: desktopMotion,
      });
    };

    update();
    tabletQuery.addEventListener("change", update);
    desktopQuery.addEventListener("change", update);
    reducedMotionQuery.addEventListener("change", update);

    return () => {
      tabletQuery.removeEventListener("change", update);
      desktopQuery.removeEventListener("change", update);
      reducedMotionQuery.removeEventListener("change", update);
    };
  }, []);

  return prefs;
}

export function HeroSection() {
  const { parallaxEnabled, ...motionPrefs } = useHeroMotionPrefs();

  return parallaxEnabled ? (
    <HeroSectionParallax motionPrefs={motionPrefs} />
  ) : (
    <HeroSectionStatic motionPrefs={motionPrefs} />
  );
}
