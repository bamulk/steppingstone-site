import fs from "node:fs";
import path from "node:path";

export type GalleryPhoto = { src: string; caption: string };

const dir = path.join(process.cwd(), "public", "gallery");

// "02-rio-linda-pool.jpg" -> "Rio linda pool"; camera names (IMG_1234) get no caption.
function captionFrom(file: string) {
  const base = file.replace(/\.[^.]+$/, "").replace(/^\d+[-_ ]*/, "");
  // No caption for camera names, ids and anything else that is mostly digits or hex.
  if (!base || /^(img|dsc|pxl|photo|image|screenshot)[-_ ]?\d*/i.test(base) || /\d{3,}/.test(file) || /[0-9a-f]{8}/i.test(file)) return "";
  const words = base.replace(/[-_]+/g, " ").trim();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

// Every image dropped into public/gallery, in filename order.
export function getGalleryPhotos(): GalleryPhoto[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => ({ src: `/gallery/${encodeURIComponent(f)}`, caption: captionFrom(f) }));
}
