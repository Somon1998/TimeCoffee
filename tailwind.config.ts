import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
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
          50: "#F7F3EF",
          100: "#EDE4DB",
          200: "#D4C4B0",
          300: "#B89B7A",
          400: "#9A7B5C",
          500: "#7D5E42",
          600: "#5C3D28",
          700: "#4A3020",
          800: "#3A2518",
          900: "#2A1A10",
        },
        "coffee-accent": "#D8BE93",
        caramel: "#D8BE93",
        gold: "#D8BE93",
        "gold-light": "#E8D4B8",
        espresso: "#06162D",
        chocolate: "#0B2345",
        bronze: "#D8BE93",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 8px 32px rgba(47, 111, 219, 0.1)",
        "premium-lg": "0 20px 60px rgba(47, 111, 219, 0.14)",
        "premium-xl": "0 32px 80px rgba(47, 111, 219, 0.18)",
        "premium-dark": "0 8px 32px rgba(0, 0, 0, 0.45)",
        glass: "0 8px 32px rgba(47, 111, 219, 0.08)",
        "glass-lg": "0 16px 48px rgba(47, 111, 219, 0.12)",
        "blue-glow":
          "0 0 60px rgba(47, 111, 219, 0.35), 0 20px 40px rgba(22, 61, 143, 0.15)",
        "blue-glow-sm":
          "0 0 24px rgba(47, 111, 219, 0.28), 0 8px 20px rgba(22, 61, 143, 0.1)",
        "gold-glow":
          "0 0 24px rgba(132, 190, 255, 0.18), 0 8px 20px rgba(47, 111, 219, 0.1)",
        "gold-glow-sm":
          "0 0 16px rgba(132, 190, 255, 0.16), 0 4px 12px rgba(47, 111, 219, 0.08)",
        "product-glow":
          "0 0 80px rgba(47, 111, 219, 0.28), 0 0 120px rgba(132, 190, 255, 0.14), 0 24px 48px rgba(22, 61, 143, 0.12)",
        "nav-float":
          "0 12px 40px rgba(47, 111, 219, 0.12), 0 4px 12px rgba(7, 23, 47, 0.06)",
        "nav-float-dark":
          "0 12px 48px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(90, 140, 255, 0.18)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "radial-brand":
          "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(47, 111, 219, 0.14) 0%, transparent 65%)",
        "radial-gold":
          "radial-gradient(ellipse 55% 45% at 78% 58%, rgba(132, 190, 255, 0.14) 0%, transparent 62%)",
        "radial-coffee":
          "radial-gradient(ellipse 45% 35% at 72% 65%, rgba(216, 190, 147, 0.08) 0%, transparent 70%)",
        "radial-blue":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(47, 111, 219, 0.12) 0%, transparent 70%)",
        "radial-blue-dark":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(47, 111, 219, 0.1) 0%, transparent 70%)",
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        "hero-mesh-light":
          "radial-gradient(ellipse at 18% 28%, rgba(47, 111, 219, 0.1) 0%, transparent 48%), radial-gradient(ellipse at 82% 68%, rgba(132, 190, 255, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 75% 40%, rgba(220, 235, 255, 0.5) 0%, transparent 45%), radial-gradient(ellipse at 50% 100%, rgba(234, 244, 255, 0.85) 0%, transparent 58%)",
        "hero-mesh-dark":
          "radial-gradient(ellipse at 18% 28%, rgba(47, 111, 219, 0.14) 0%, transparent 48%), radial-gradient(ellipse at 82% 68%, rgba(132, 190, 255, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 75% 40%, rgba(22, 61, 143, 0.35) 0%, transparent 45%), radial-gradient(ellipse at 50% 100%, rgba(11, 35, 69, 0.55) 0%, transparent 58%)",
        "subtle-mesh-light":
          "radial-gradient(ellipse at 0% 50%, rgba(47, 111, 219, 0.05) 0%, transparent 50%), radial-gradient(ellipse at 100% 50%, rgba(132, 190, 255, 0.06) 0%, transparent 50%)",
        "subtle-mesh-dark":
          "radial-gradient(ellipse at 0% 50%, rgba(47, 111, 219, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 100% 50%, rgba(132, 190, 255, 0.08) 0%, transparent 50%)",
        "hero-light":
          "radial-gradient(ellipse at 30% 20%, rgba(47, 111, 219, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(220, 235, 255, 0.7) 0%, transparent 50%)",
        "hero-dark":
          "radial-gradient(ellipse at 30% 20%, rgba(47, 111, 219, 0.16) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(14, 42, 82, 0.45) 0%, transparent 50%)",
        "btn-primary":
          "linear-gradient(135deg, #2F6FDB 0%, #255CC0 50%, #1E4DA3 100%)",
        "btn-primary-hover":
          "linear-gradient(135deg, #255CC0 0%, #2F6FDB 50%, #255CC0 100%)",
        "logo-monogram":
          "linear-gradient(145deg, #2F6FDB 0%, #255CC0 45%, #163D8F 100%)",
      },
      animation: {
        "gradient-shift": "gradient-shift 12s ease infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
