import type { NextConfig } from "next";

/**
 * Statik export modu (GitHub Pages vb. için):
 *   NEXT_STATIC_EXPORT=1 ile build alındığında site `out/` klasörüne
 *   statik HTML olarak derlenir. Normal modda sandbox'taki gibi
 *   standalone sunucu kullanılır.
 */
const isStaticExport = process.env.NEXT_STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = isStaticExport
  ? {
      output: "export",
      trailingSlash: true,
      images: { unoptimized: true },
      ...(basePath ? { basePath } : {}),
      typescript: {
        ignoreBuildErrors: true,
      },
      reactStrictMode: false,
    }
  : {
      output: "standalone",
      typescript: {
        ignoreBuildErrors: true,
      },
      reactStrictMode: false,
    };

export default nextConfig;
