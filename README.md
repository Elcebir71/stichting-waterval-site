# Stichting Waterval — Website (Next.js)

Stichting Waterval Almere'nin modern web sitesi.
Next.js 16 + TypeScript + Tailwind CSS + shadcn/ui ile geliştirilmiştir.

## Özellikler

- Tek sayfa kurumsal site: Hero, Over ons, Activiteiten, Meedoen, Donatie,
  ANBI ve Contact bölümleri
- Gerçek görseller: topluluk fotoğrafı (hero + sosyal medya paylaşım kartı),
  gerçek etkinlik afişi (Ark van Noach) ve 4 aktivite kartının tamamında
  fotoğraf (kookworkshop, bezoek je buren, huiswerkbegeleiding)
- Hollandaca içerik + tam SEO meta etiketleri (title, description, Open Graph)
- İletişim formu üç modda çalışabilir (build zamanında seçilir):
  1. **API modu** (varsayılan): `POST /api/contact` → Prisma/SQLite'a kaydeder
  2. **Endpoint modu**: `NEXT_PUBLIC_FORM_ENDPOINT` verilirse Formspree/Web3Forms'a POST eder
  3. **Statik mod** (GitHub Pages): `NEXT_PUBLIC_STATIC_EXPORT=1` ile mailto e-postası açar
- Statik export desteği: `NEXT_STATIC_EXPORT=1` ile `out/` klasörüne statik HTML derler

## GitHub Pages'e yayınlama

1. Bu depoyu GitHub'a yükleyin (tüm dosyalar repo kökünde olmalı)
2. **Settings → Pages** → Build and deployment → Source: **GitHub Actions**
3. Her push sonrası `.github/workflows/pages.yml` otomatik derleyip yayınlar
4. Site adresi: `https://<kullanıcı>.github.io/<repo-adı>/`
   (özel alan adı/CNAME varsa Actions otomatik olarak kök yolda yayınlar)

## Yerelde çalıştırma

```bash
bun install
bun run dev          # http://localhost:3000
```

## Statik build almak (elle)

```bash
bun run build:export:subpath   # /<repo-adı> alt yolu için
# veya özel alan adı için:
NEXT_STATIC_EXPORT=1 NEXT_PUBLIC_STATIC_EXPORT=1 bun run build:export
```

Çıktı `out/` klasörüne düşer; GitHub Pages'e yüklenmeye hazırdır.

## Form endpoint'i ayarlamak

`.github/workflows/pages.yml` içindeki build adımının env bloğuna:

```yaml
NEXT_PUBLIC_FORM_ENDPOINT: "https://formspree.io/f/xxxxxxxx"
```

## Veritabanı (API modu)

```bash
bun run db:push      # şemayı uygula
```

SQLite dosyası `db/custom.db` üzerinde tutulur (yalnızca sunucu modunda gerekir).

## Fotoğrafları değiştirmek

`public/images/` altındaki dosyaları aynı isimle değiştirmeniz yeterli:

| Dosya | Kullanım yeri |
|---|---|
| `samen-aan-tafel.jpg` | Hero bölümü + sosyal medya paylaşım görseli |
| `ark-van-noach-poster.webp` | Öne çıkan etkinlik kartı (afiş) |
| `kookworkshops.webp` | Kookworkshops kartı |
| `bezoek-je-buren.webp` | Bezoek je Buren kartı |
| `huiswerkbegeleiding.webp` | Huiswerkbegeleiding kartı |
| `logo-wide.png` | Üst menü logosu |

Başka bir dosya adı kullanmak isterseniz `src/components/site/content.ts`
içindeki `image:` yollarını güncelleyin.

## Doldurulması gerekenler (vakıf verisi)

- [ ] Donasyon kartındaki IBAN (+ iDEAL/Mollie butonu)
- [ ] ANBI tablosundaki RSIN ve KvK numaraları

## Teknolojiler

Next.js 16 · TypeScript · Tailwind CSS 4 · shadcn/ui · Prisma (SQLite) · Lucide Icons
