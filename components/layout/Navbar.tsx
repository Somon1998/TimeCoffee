"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Container } from "@/components/ui/Container";
import { Link, usePathname } from "@/i18n/navigation";
import { NAV_ROUTES } from "@/lib/site-config";
import { premiumEase } from "@/features/theme/motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let rafId = 0;
    let lastScrolled: boolean | null = null;

    const update = () => {
      rafId = 0;
      const next = window.scrollY > 24;
      if (lastScrolled === next) return;
      lastScrolled = next;
      setScrolled(next);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header data-site-navbar className="fixed inset-x-0 top-0 z-50">
      <div
        aria-hidden
        className={cn(
          "navbar-scroll-shield",
          scrolled && "navbar-scroll-shield-scrolled"
        )}
      />
      <div
        data-navbar-bar
        className="relative z-10 px-4 pt-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: premiumEase }}
          className={cn(
            "mx-auto max-w-7xl transition-all duration-500",
            scrolled ? "mt-0" : "mt-1"
          )}
        >
          <div
            className={cn(
              "glass-nav rounded-2xl transition-all duration-500",
              scrolled && "glass-nav-scrolled",
              scrolled
                ? "shadow-nav-float dark:shadow-nav-float-dark py-2.5"
                : "py-3.5 shadow-glass"
            )}
          >
          <Container className="!px-4 sm:!px-6">
            <nav className="flex items-center justify-between gap-2 sm:gap-4">
              <div className="min-w-0 shrink">
                <BrandLogo size="sm" />
              </div>

              <div className="hidden items-center gap-1 lg:flex">
                {NAV_ROUTES.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "nav-link rounded-xl px-4 py-2",
                      pathname === link.href && "nav-link-active"
                    )}
                  >
                    {t(link.key)}
                  </Link>
                ))}
                <LanguageSwitcher className="ml-2" />
              </div>

              <div className="flex shrink-0 items-center gap-2 lg:hidden">
                <LanguageSwitcher className="shrink-0" />
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                    "border border-brand-200/60 bg-white/60 backdrop-blur-xl",
                    "transition-all duration-300 hover:shadow-premium",
                    "dark:border-brand-600/40 dark:bg-brand-900/60"
                  )}
                  aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
                >
                  {mobileOpen ? (
                    <X className="h-5 w-5 text-brand-700 dark:text-brand-100" />
                  ) : (
                    <Menu className="h-5 w-5 text-brand-700 dark:text-brand-100" />
                  )}
                </button>
              </div>
            </nav>
          </Container>
          </div>
        </motion.div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.3, ease: premiumEase }}
              className="absolute inset-x-0 top-full z-20 mx-auto mt-2 max-w-7xl overflow-hidden lg:hidden"
            >
              <div
                className={cn(
                  "glass-nav rounded-2xl p-4 shadow-nav-float dark:shadow-nav-float-dark",
                  scrolled && "glass-nav-scrolled"
                )}
              >
              <div className="flex flex-col gap-1">
                {NAV_ROUTES.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        pathname === link.href
                          ? "bg-brand-50/80 text-brand-600 dark:bg-brand-700/50 dark:text-brand-100"
                          : "text-brand-800/80 hover:bg-brand-50/60 dark:text-brand-100/80 dark:hover:bg-brand-700/30"
                      )}
                    >
                      {t(link.key)}
                    </Link>
                  </motion.div>
                ))}
              </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
