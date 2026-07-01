"use client";

import { useEffect } from "react";

const NAVBAR_BAR_SELECTOR = "[data-navbar-bar]";

let cachedNavbarHeight: number | null = null;

function syncNavbarHeight() {
  const navbarBar = document.querySelector<HTMLElement>(NAVBAR_BAR_SELECTOR);
  if (!navbarBar) return;

  const height = Math.round(navbarBar.getBoundingClientRect().height);
  if (cachedNavbarHeight === height) return;

  cachedNavbarHeight = height;
  document.documentElement.style.setProperty(
    "--navbar-height",
    `${height}px`
  );
}

export function NavbarHeightSync() {
  useEffect(() => {
    syncNavbarHeight();

    const navbarBar = document.querySelector<HTMLElement>(NAVBAR_BAR_SELECTOR);
    if (!navbarBar) return;

    const resizeObserver = new ResizeObserver(syncNavbarHeight);
    resizeObserver.observe(navbarBar);

    window.addEventListener("resize", syncNavbarHeight, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", syncNavbarHeight);
      cachedNavbarHeight = null;
    };
  }, []);

  return null;
}
