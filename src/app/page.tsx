import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Activities } from "@/components/site/activities";
import { Involvement, Donate, Anbi } from "@/components/site/involvement";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="hoofdinhoud" className="flex-1">
        <Hero />
        <About />
        <Activities />
        <Involvement />
        <Donate />
        <Anbi />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
