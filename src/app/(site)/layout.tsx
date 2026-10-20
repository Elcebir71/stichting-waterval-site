import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

/**
 * Ortak sayfa kabuğu: tüm sayfalarda sticky header + main + sticky footer.
 * (site) route grubu URL'yi etkilemez — /, /over-ons, /activiteiten vb.
 */
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="hoofdinhoud" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
