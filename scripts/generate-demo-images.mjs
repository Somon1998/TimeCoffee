import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT = path.join(process.cwd(), "public", "images", "demo");

const palette = {
  espresso: "#1A1008",
  chocolate: "#2E1C12",
  coffee: "#4A3224",
  caramel: "#6B4E36",
  bronze: "#8B6B4E",
  gold: "#D4A853",
  cream: "#FAF7F2",
  beige: "#E8DDD0",
  foam: "#F5F0EA",
  milk: "#C8956C",
  matcha: "#7A9E6A",
  tea: "#5C8A5A",
};

function wrap(id, label, w, h, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="${id}-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${palette.espresso}"/>
      <stop offset="55%" stop-color="${palette.chocolate}"/>
      <stop offset="100%" stop-color="${palette.coffee}"/>
    </linearGradient>
    <radialGradient id="${id}-glow" cx="50%" cy="30%" r="55%">
      <stop offset="0%" stop-color="${palette.gold}" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="${palette.gold}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="${id}-cup" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${palette.cream}"/>
      <stop offset="100%" stop-color="${palette.beige}"/>
    </linearGradient>
    <linearGradient id="${id}-steam" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="${palette.gold}" stop-opacity="0"/>
      <stop offset="100%" stop-color="${palette.gold}" stop-opacity="0.45"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#${id}-bg)"/>
  <rect width="${w}" height="${h}" fill="url(#${id}-glow)"/>
  <circle cx="${w * 0.85}" cy="${h * 0.15}" r="${h * 0.14}" fill="${palette.gold}" opacity="0.08"/>
  <circle cx="${w * 0.12}" cy="${h * 0.82}" r="${h * 0.1}" fill="${palette.caramel}" opacity="0.1"/>
  ${body}
</svg>`;
}

function cup(id, cx, cy, scale = 1, foam = true, handle = true) {
  const s = scale;
  return `
  <ellipse cx="${cx}" cy="${cy + 130 * s}" rx="${120 * s}" ry="${22 * s}" fill="${palette.espresso}" opacity="0.35"/>
  <path d="M${cx - 90 * s} ${cy + 110 * s}h${180 * s}c${14 * s} 0 ${22 * s}-${10 * s} ${22 * s}-${22 * s}V${cy - 20 * s}c0-${62 * s}-${50 * s}-${112 * s}-${112 * s}-${112 * s}h-${36 * s}c-${62 * s} 0-${112 * s} ${50 * s}-${112 * s} ${112 * s}v${90 * s}c0 ${12 * s} ${8 * s} ${22 * s} ${22 * s} ${22 * s}z" fill="url(#${id}-cup)"/>
  ${handle ? `<path d="M${cx + 92 * s} ${cy - 10 * s}h${28 * s}c${28 * s} 0 ${50 * s} ${22 * s} ${50 * s} ${50 * s}v${28 * s}c0 ${40 * s}-${32 * s} ${72 * s}-${72 * s} ${72 * s}h-${8 * s}" fill="none" stroke="${palette.cream}" stroke-width="${14 * s}" stroke-linecap="round"/>` : ""}
  <ellipse cx="${cx}" cy="${cy - 20 * s}" rx="${112 * s}" ry="${20 * s}" fill="${palette.milk}" opacity="0.55"/>
  ${foam ? `<ellipse cx="${cx}" cy="${cy - 38 * s}" rx="${92 * s}" ry="${44 * s}" fill="${palette.foam}"/>
  <path d="M${cx - 52 * s} ${cy - 38 * s}c${18 * s}-${16 * s} ${40 * s}-${24 * s} ${52 * s}-${24 * s}s${34 * s} ${8 * s} ${52 * s} ${24 * s}" fill="none" stroke="${palette.gold}" stroke-width="${3 * s}" opacity="0.4"/>` : `<ellipse cx="${cx}" cy="${cy - 34 * s}" rx="${88 * s}" ry="${18 * s}" fill="${palette.chocolate}" opacity="0.85"/>`}
  `;
}

function steam(id, cx, cy, scale = 1) {
  const s = scale;
  return `
  <path d="M${cx - 20 * s} ${cy - 70 * s}c0-${30 * s} ${18 * s}-${54 * s} ${38 * s}-${54 * s}" fill="none" stroke="url(#${id}-steam)" stroke-width="${8 * s}" stroke-linecap="round"/>
  <path d="M${cx} ${cy - 90 * s}c0-${38 * s} ${26 * s}-${68 * s} ${52 * s}-${68 * s}" fill="none" stroke="url(#${id}-steam)" stroke-width="${7 * s}" stroke-linecap="round" opacity="0.75"/>
  <path d="M${cx + 24 * s} ${cy - 72 * s}c0-${22 * s} ${16 * s}-${40 * s} ${34 * s}-${40 * s}" fill="none" stroke="url(#${id}-steam)" stroke-width="${6 * s}" stroke-linecap="round" opacity="0.55"/>
  `;
}

const images = {
  "hero.svg": wrap(
    "hero",
    "Кофе Time Coffee",
    800,
    1000,
    `${cup("hero", 400, 520, 1.15, true, true)}${steam("hero", 400, 450, 1.15)}
    <text x="400" y="920" text-anchor="middle" fill="${palette.gold}" font-family="Georgia, serif" font-size="28" opacity="0.55" letter-spacing="6">TIME COFFEE</text>`
  ),

  "cappuccino.svg": wrap(
    "cap",
    "Капучино",
    800,
    600,
    `${cup("cap", 400, 300, 1.1, true, true)}${steam("cap", 400, 240, 1.1)}
    <circle cx="360" cy="248" r="6" fill="${palette.gold}" opacity="0.5"/><circle cx="400" cy="236" r="5" fill="${palette.gold}" opacity="0.45"/><circle cx="440" cy="250" r="5" fill="${palette.gold}" opacity="0.4"/>`
  ),

  "latte.svg": wrap(
    "latte",
    "Латте",
    800,
    600,
    `${cup("latte", 400, 310, 1.05, true, true)}
    <path d="M330 255c30-40 60-55 70-55s40 15 70 55" fill="none" stroke="${palette.cream}" stroke-width="5" opacity="0.35"/>
    <path d="M350 270c18-22 32-30 50-30s32 8 50 30" fill="none" stroke="${palette.gold}" stroke-width="3" opacity="0.35"/>`
  ),

  "espresso.svg": wrap(
    "esp",
    "Эспрессо",
    800,
    600,
    `${cup("esp", 400, 340, 0.95, false, false)}
    <ellipse cx="400" cy="318" rx="78" ry="14" fill="${palette.chocolate}"/>
    <ellipse cx="400" cy="308" rx="62" ry="8" fill="${palette.gold}" opacity="0.35"/>`
  ),

  "flat-white.svg": wrap(
    "fw",
    "Флэт уайт",
    800,
    600,
    `${cup("fw", 400, 320, 1, true, true)}
    <circle cx="400" cy="278" r="34" fill="${palette.foam}" opacity="0.9"/>
    <path d="M382 278c8-10 12-14 18-14s10 4 18 14" fill="none" stroke="${palette.bronze}" stroke-width="2.5" opacity="0.5"/>`
  ),

  "raf.svg": wrap(
    "raf",
    "Раф",
    800,
    600,
    `${cup("raf", 400, 300, 1.1, true, true)}
    <rect x="330" y="250" width="140" height="36" rx="18" fill="${palette.cream}" opacity="0.25"/>
    <path d="M350 268h100" stroke="${palette.gold}" stroke-width="3" opacity="0.35"/>`
  ),

  "americano.svg": wrap(
    "am",
    "Американо",
    800,
    600,
    `${cup("am", 400, 330, 1, false, true)}
    <ellipse cx="400" cy="318" rx="90" ry="16" fill="${palette.chocolate}" opacity="0.9"/>
    ${steam("am", 400, 280, 0.9)}`
  ),

  "green-tea.svg": wrap(
    "gt",
    "Зелёный чай",
    800,
    600,
    `
    <path d="M290 430h220c16 0 24-8 24-24V300c0-56-46-102-102-102h-8c-56 0-102 46-102 102v106c0 16 8 24 24 24z" fill="url(#gt-cup)"/>
    <ellipse cx="400" cy="300" rx="102" ry="18" fill="${palette.tea}" opacity="0.55"/>
    <ellipse cx="400" cy="286" rx="82" ry="34" fill="${palette.tea}" opacity="0.75"/>
    <path d="M350 286c16-14 32-20 50-20s34 6 50 20" fill="none" stroke="${palette.cream}" stroke-width="3" opacity="0.3"/>
    <ellipse cx="400" cy="452" rx="120" ry="20" fill="${palette.espresso}" opacity="0.3"/>`
  ),

  "matcha-latte.svg": wrap(
    "ml",
    "Матча-латте",
    800,
    600,
    `${cup("ml", 400, 310, 1.05, true, true)}
    <ellipse cx="400" cy="286" rx="88" ry="38" fill="${palette.matcha}" opacity="0.85"/>
    <path d="M350 286c18-16 34-22 50-22s32 6 50 22" fill="none" stroke="${palette.cream}" stroke-width="3" opacity="0.25"/>`
  ),

  "cheesecake.svg": wrap(
    "cake",
    "Чизкейк",
    800,
    600,
    `
    <ellipse cx="400" cy="430" rx="170" ry="28" fill="${palette.espresso}" opacity="0.35"/>
    <rect x="250" y="300" width="300" height="120" rx="16" fill="${palette.cream}"/>
    <rect x="250" y="280" width="300" height="36" rx="12" fill="${palette.foam}"/>
    <circle cx="320" cy="292" r="10" fill="#C45C5C" opacity="0.7"/>
    <circle cx="360" cy="286" r="8" fill="#B84A4A" opacity="0.65"/>
    <circle cx="400" cy="294" r="9" fill="#C45C5C" opacity="0.7"/>
    <circle cx="440" cy="286" r="8" fill="#A83D3D" opacity="0.6"/>
    <circle cx="480" cy="292" r="10" fill="#C45C5C" opacity="0.65"/>`
  ),

  "croissant.svg": wrap(
    "cro",
    "Круассан",
    800,
    600,
    `
    <ellipse cx="400" cy="420" rx="160" ry="24" fill="${palette.espresso}" opacity="0.3"/>
    <path d="M220 380c60-80 140-110 180-110s120 30 180 110c-50 50-110 70-180 70s-130-20-180-70z" fill="${palette.gold}" opacity="0.85"/>
    <path d="M260 372c48-52 108-72 140-72s92 20 140 72" fill="none" stroke="${palette.caramel}" stroke-width="6" opacity="0.45"/>
    <path d="M290 360c34-30 72-42 110-42s76 12 110 42" fill="none" stroke="${palette.cream}" stroke-width="4" opacity="0.25"/>`
  ),

  "avocado-toast.svg": wrap(
    "toast",
    "Тост с авокадо",
    800,
    600,
    `
    <ellipse cx="400" cy="430" rx="180" ry="26" fill="${palette.espresso}" opacity="0.3"/>
    <rect x="230" y="330" width="340" height="52" rx="14" fill="${palette.bronze}" opacity="0.8"/>
    <rect x="250" y="318" width="300" height="44" rx="12" fill="${palette.gold}" opacity="0.55"/>
  <ellipse cx="400" cy="308" rx="120" ry="34" fill="${palette.matcha}" opacity="0.8"/>
  <circle cx="360" cy="296" r="16" fill="${palette.cream}" opacity="0.9"/>
  <circle cx="360" cy="296" r="8" fill="${palette.gold}" opacity="0.7"/>`
  ),

  "iced-latte.svg": wrap(
    "ice",
    "Айс-латте",
    800,
    600,
    `
    <path d="M310 120h180l-24 320H334L310 120z" fill="url(#ice-cup)" opacity="0.35"/>
    <path d="M320 430h160c12 0 20-8 20-20V280c0-48-38-86-86-86h-28c-48 0-86 38-86 86v130c0 12 8 20 20 20z" fill="url(#ice-cup)"/>
    <rect x="350" y="250" width="100" height="140" rx="8" fill="${palette.chocolate}" opacity="0.55"/>
    <ellipse cx="400" cy="280" rx="72" ry="30" fill="${palette.cream}" opacity="0.75"/>
    <circle cx="370" cy="320" r="8" fill="${palette.cream}" opacity="0.5"/>
    <circle cx="420" cy="350" r="10" fill="${palette.cream}" opacity="0.45"/>
    <circle cx="385" cy="380" r="7" fill="${palette.cream}" opacity="0.4"/>
    <ellipse cx="400" cy="452" rx="110" ry="18" fill="${palette.espresso}" opacity="0.3"/>`
  ),

  "gallery-pour.svg": wrap(
    "pour",
    "Заваривание кофе",
    800,
    1000,
    `
    <rect x="280" y="180" width="240" height="320" rx="20" fill="${palette.bronze}" opacity="0.45"/>
    <path d="M400 180v-60" stroke="${palette.gold}" stroke-width="8" stroke-linecap="round" opacity="0.5"/>
    <path d="M400 120c-20 40-20 80 0 120" fill="none" stroke="${palette.cream}" stroke-width="6" opacity="0.25"/>
    ${cup("pour", 400, 620, 0.9, false, false)}
    <ellipse cx="400" cy="598" rx="78" ry="12" fill="${palette.chocolate}"/>
    <path d="M360 220c20 80 40 120 40 180" fill="none" stroke="${palette.gold}" stroke-width="5" opacity="0.35"/>`
  ),

  "gallery-interior.svg": wrap(
    "int",
    "Интерьер кофейни",
    800,
    1000,
    `
    <rect x="0" y="700" width="800" height="300" fill="${palette.espresso}"/>
    <rect x="80" y="520" width="280" height="180" rx="12" fill="${palette.caramel}" opacity="0.55"/>
    <rect x="420" y="480" width="300" height="220" rx="12" fill="${palette.bronze}" opacity="0.45"/>
    <rect x="140" y="760" width="120" height="8" rx="4" fill="${palette.gold}" opacity="0.35"/>
    <rect x="300" y="780" width="200" height="8" rx="4" fill="${palette.gold}" opacity="0.25"/>
    <circle cx="200" cy="600" r="36" fill="${palette.gold}" opacity="0.2"/>
    <circle cx="600" cy="560" r="28" fill="${palette.gold}" opacity="0.16"/>`
  ),

  "gallery-barista.svg": wrap(
    "bar",
    "Бариста за работой",
    800,
    1000,
    `
    <rect x="120" y="620" width="560" height="120" rx="16" fill="${palette.bronze}" opacity="0.5"/>
    ${cup("bar", 400, 520, 0.85, true, true)}
    <circle cx="400" cy="260" r="72" fill="${palette.caramel}" opacity="0.55"/>
    <rect x="350" y="330" width="100" height="140" rx="30" fill="${palette.coffee}" opacity="0.7"/>`
  ),

  "gallery-beans.svg": wrap(
    "beans",
    "Кофейные зёрна",
    800,
    1000,
    `
    <ellipse cx="280" cy="520" rx="70" ry="42" fill="${palette.chocolate}" transform="rotate(-25 280 520)"/>
    <ellipse cx="380" cy="480" rx="68" ry="40" fill="${palette.caramel}" transform="rotate(18 380 480)"/>
    <ellipse cx="500" cy="540" rx="72" ry="44" fill="${palette.bronze}" transform="rotate(-12 500 540)"/>
    <ellipse cx="420" cy="620" rx="66" ry="38" fill="${palette.chocolate}" transform="rotate(32 420 620)"/>
    <ellipse cx="300" cy="640" rx="64" ry="36" fill="${palette.coffee}" transform="rotate(-8 300 640)"/>
    <ellipse cx="540" cy="470" rx="60" ry="36" fill="${palette.caramel}" transform="rotate(22 540 470)"/>`
  ),

  "gallery-atmosphere.svg": wrap(
    "atm",
    "Уютная атмосфера",
    800,
    1000,
    `
    <rect x="100" y="560" width="220" height="140" rx="24" fill="${palette.bronze}" opacity="0.4"/>
    <rect x="480" y="520" width="220" height="180" rx="24" fill="${palette.caramel}" opacity="0.35"/>
    ${cup("atm", 400, 680, 0.75, true, true)}
    <circle cx="180" cy="300" r="90" fill="${palette.gold}" opacity="0.12"/>
    <circle cx="620" cy="280" r="70" fill="${palette.gold}" opacity="0.1"/>`
  ),

  "gallery-dessert.svg": wrap(
    "des",
    "Десерты",
    800,
    1000,
    `
    <rect x="220" y="560" width="160" height="110" rx="14" fill="${palette.cream}"/>
    <rect x="420" y="540" width="180" height="130" rx="16" fill="${palette.foam}"/>
    <circle cx="300" cy="548" r="10" fill="#C45C5C" opacity="0.7"/>
    <circle cx="500" cy="560" r="9" fill="${palette.gold}" opacity="0.55"/>
    <path d="M250 620c40-30 80-30 120 0" fill="none" stroke="${palette.bronze}" stroke-width="4" opacity="0.35"/>`
  ),

  "gallery-counter.svg": wrap(
    "cnt",
    "Кофейная стойка",
    800,
    1000,
    `
    <rect x="80" y="500" width="640" height="180" rx="20" fill="${palette.bronze}" opacity="0.55"/>
    <rect x="120" y="420" width="120" height="90" rx="12" fill="${palette.caramel}" opacity="0.45"/>
    <rect x="280" y="400" width="100" height="110" rx="12" fill="${palette.coffee}" opacity="0.5"/>
    <rect x="420" y="410" width="140" height="100" rx="12" fill="${palette.chocolate}" opacity="0.5"/>
    <rect x="580" y="430" width="90" height="80" rx="12" fill="${palette.caramel}" opacity="0.4"/>
    ${cup("cnt", 400, 620, 0.7, true, false)}`
  ),

  "offer-morning.svg": wrap(
    "off1",
    "Утренний кофе",
    800,
    400,
    `${cup("off1", 280, 180, 0.9, true, true)}${steam("off1", 280, 130, 0.9)}
    <text x="560" y="220" text-anchor="middle" fill="${palette.gold}" font-family="Georgia, serif" font-size="42" opacity="0.7">−20%</text>`
  ),

  "offer-combo.svg": wrap(
    "off2",
    "Комбо кофе и десерт",
    800,
    400,
    `${cup("off2", 240, 190, 0.75, true, true)}
    <rect x="420" y="210" width="140" height="90" rx="12" fill="${palette.cream}"/>
    <rect x="420" y="196" width="140" height="28" rx="10" fill="${palette.foam}"/>`
  ),
};

await mkdir(OUT, { recursive: true });

for (const [name, svg] of Object.entries(images)) {
  await writeFile(path.join(OUT, name), svg, "utf8");
}

console.log(`Generated ${Object.keys(images).length} demo images in ${OUT}`);
