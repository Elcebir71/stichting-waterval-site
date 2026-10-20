import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Sprout, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/site/hero";
import { Involvement } from "@/components/site/involvement";
import { VISION } from "@/components/site/content";
import { VISION_ICONS } from "@/components/site/about";

export const metadata: Metadata = {
  title: "Stichting Waterval Almere | Educatie, cultuur en verbinding",
  description:
    "Stichting Waterval verbindt mensen in Almere via cultuur, educatie en sociale betrokkenheid. Ontdek onze missie, activiteiten en hoe je kunt meedoen. ANBI-erkend.",
};

const MISSION_NUMBERS = ["01", "02", "03"];

export default function Home() {
  return (
    <>
      <Hero />

      <section
        aria-labelledby="missie-titel"
        className="border-t border-border/70 bg-card"
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Onze missie
            </p>
            <h2
              id="missie-titel"
              className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            >
              Bruggen bouwen tussen mensen en community&rsquo;s.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Sinds 1999 werken we aan een vreedzame, inclusieve samenleving
              waarin iedereen mee kan doen — &ldquo;Leef en laat leven&rdquo;.
              Drie pijlers vormen de basis van alles wat we doen.
            </p>
          </div>

          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {VISION.map((pillar, index) => {
              const Icon = VISION_ICONS[pillar.icon] ?? HeartHandshake;
              return (
                <li
                  key={pillar.title}
                  className="group relative flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                >
                  <span
                    aria-hidden={true}
                    className="text-sm font-bold tracking-widest text-amber-500/90"
                  >
                    {MISSION_NUMBERS[index]}
                  </span>
                  <span className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden={true} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </li>
              );
            })}
          </ol>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 bg-primary px-6 text-base font-semibold hover:bg-primary/90"
            >
              <Link href="/over-ons">
                Meer over onze missie en visie
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden={true} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-primary/25 px-6 text-base font-semibold text-primary hover:bg-secondary hover:text-primary"
            >
              <Link href="/activiteiten">Bekijk onze activiteiten</Link>
            </Button>
          </div>
        </div>
      </section>

      <Involvement />
    </>
  );
}
