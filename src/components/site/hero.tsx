import Image from "next/image";
import { ArrowRight, MapPin, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/paths";
import { SITE } from "./content";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-titel" className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-14 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:pb-20 lg:pt-16">
        <div className="flex flex-col items-start gap-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
            <MapPin className="h-4 w-4 text-amber-500" aria-hidden="true" />
            Samen in Almere
          </p>
          <h1
            id="hero-titel"
            className="text-balance text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl lg:text-[3.4rem]"
          >
            Waar mensen elkaar ontmoeten en{" "}
            <span className="relative inline-block text-amber-600">
              groeien
              <svg
                aria-hidden="true"
                viewBox="0 0 120 12"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-amber-400"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9 C 30 3, 60 3, 118 7"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            {SITE.name} verbindt mensen via cultuur, educatie en sociale
            betrokkenheid. Wij werken aan een inclusieve samenleving waarin
            iedereen zich welkom voelt.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 bg-primary px-6 text-base font-semibold hover:bg-primary/90"
            >
              <a
                href="#activiteiten"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ontdek onze activiteiten
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-primary/25 px-6 text-base font-semibold text-primary hover:bg-secondary hover:text-primary"
            >
              <a
                href="#over-ons"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leer ons kennen
              </a>
            </Button>
          </div>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Users className="h-4 w-4 text-amber-500" aria-hidden="true" />
              Gedragen door vrijwilligers
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-amber-500" aria-hidden="true" />
              ANBI-erkend
            </li>
          </ul>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-amber-200/50 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-primary/10 blur-2xl"
          />
          <figure className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-primary/10">
            <Image
              src={asset("/images/samen-aan-tafel.jpg")}
              alt="Bewoners en gasten samen aan tafel tijdens een ontmoetingsavond van Stichting Waterval"
              width={1536}
              height={1023}
              priority
              className="h-auto w-full object-cover"
            />
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-primary/90 px-4 py-1.5 text-sm font-medium text-primary-foreground">
              Samen aan tafel in Almere
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
