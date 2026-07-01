/**
 * TimeCoffee design tokens — single source for brand visuals.
 * CSS variables are defined in globals.css; use these for JS/TS contexts.
 */

export const brandColors = {
  cream: "#F4F8FF",
  beige: "#EAF4FF",
  milk: "#FFFFFF",
  brand: {
    50: "#F4F8FF",
    100: "#EAF4FF",
    200: "#DCEBFF",
    300: "#B8D5FF",
    400: "#7FB2FF",
    500: "#2F6FDB",
    600: "#255CC0",
    700: "#1E4DA3",
    800: "#163D8F",
    900: "#07172F",
  },
  coffee: {
    500: "#7D5E42",
    600: "#5C3D28",
    700: "#4A3020",
  },
  coffeeAccent: "#D8BE93",
  caramel: "#D8BE93",
  gold: "#D8BE93",
  goldLight: "#E8D4B8",
  espresso: "#06162D",
  chocolate: "#0B2345",
} as const;

export const motion = {
  easePremium: [0.22, 1, 0.36, 1] as const,
  duration: {
    fast: 0.25,
    normal: 0.4,
    slow: 0.7,
  },
} as const;

export const radii = {
  sm: "0.75rem",
  md: "1rem",
  lg: "1.25rem",
  xl: "1.5rem",
  "2xl": "2rem",
  pill: "9999px",
} as const;
