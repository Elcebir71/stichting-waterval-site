/**
 * Statik export (GitHub Pages) modunda site bir alt yolda yayınlanabilir
 * (ör. /stichting-waterval-site). `images.unoptimized` ile birlikte
 * Next.js basePath'i <img> src'lerine otomatik eklemediği için tüm
 * public varlıkları bu yardımcıdan geçiriyoruz.
 *
 * NEXT_PUBLIC_BASE_PATH boşsa (özel alan adı / normal sunucu) hiçbir
 * etkisi olmaz.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${BASE_PATH}${path}`;
}
