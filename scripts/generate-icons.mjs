import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

function createSvg(size) {
  const radius = Math.round((8 / 32) * size);
  const fontSize = Math.round(size * 0.4375);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563B8"/>
      <stop offset="45%" stop-color="#1A4F9C"/>
      <stop offset="100%" stop-color="#153D7A"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${radius}" fill="url(#g)"/>
  <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="${fontSize}" font-weight="700" letter-spacing="-0.02em">TC</text>
</svg>`;
}

async function writePng(size, filename) {
  const svg = Buffer.from(createSvg(size));
  await sharp(svg).png().toFile(path.join(publicDir, filename));
}

async function main() {
  fs.mkdirSync(publicDir, { recursive: true });

  await writePng(180, "apple-touch-icon.png");
  await writePng(192, "icon-192.png");
  await writePng(512, "icon-512.png");

  const png16 = await sharp(Buffer.from(createSvg(16))).png().toBuffer();
  const png32 = await sharp(Buffer.from(createSvg(32))).png().toBuffer();
  const ico = await toIco([png16, png32]);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), ico);

  console.log("Generated icons in public/");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
