import {
  ArrowRight,
  HandHeart,
  Heart,
  Building2,
  CheckCircle2,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "./content";

export function Involvement() {
  return (
    <section
      id="meedoen"
      aria-labelledby="meedoen-titel"
      className="scroll-mt-24 border-t border-border/70 bg-card"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="relative overflow-hidden rounded-3xl brand-gradient px-6 py-12 shadow-xl shadow-primary/20 sm:px-10 lg:px-14 lg:py-16">
          <div
            aria-hidden={true}
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden={true}
            className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-400/20 blur-2xl"
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">
                Samen maken we verschil
              </p>
              <h2
                id="meedoen-titel"
                className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Doe mee op jouw manier.
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">
                Deel een idee, ontdek een activiteit of kijk hoe je{" "}
                {SITE.name} kunt ondersteunen. Van een paar uur hulp bij
                huiswerkbegeleiding tot het meehelpen organiseren van een
                buurtfestival: alle hulp is welkom.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-12 bg-white px-6 text-base font-semibold text-primary hover:bg-white/90"
                >
                  <a
                    href="#contact"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Word vrijwilliger
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden={true} />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 border-white/40 bg-transparent px-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  <a
                    href="#steun-ons"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Heart className="mr-2 h-5 w-5" aria-hidden={true} />
                    Steun ons werk
                  </a>
                </Button>
              </div>
            </div>

            <ul className="grid gap-3">
              {[
                {
                  icon: HandHeart,
                  title: "Vrijwilligerswerk",
                  text: "Help mee bij workshops, evenementen of begeleiding.",
                },
                {
                  icon: Building2,
                  title: "Samenwerken",
                  text: "Scholen, buurthuizen en organisaties: laten we verbinden.",
                },
                {
                  icon: Heart,
                  title: "Doneren",
                  text: "Met een bijdrage houdt ons werk draaiende voor de wijk.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-400/90 text-primary">
                    <item.icon className="h-5 w-5" aria-hidden={true} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-0.5 text-sm text-white/80">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Donate() {
  return (
    <section
      id="steun-ons"
      aria-labelledby="steun-ons-titel"
      className="scroll-mt-24 border-t border-border/70"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Steun ons
          </p>
          <h2
            id="steun-ons-titel"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            Met jouw bijdrage laten wij de waterval stromen.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Stichting Waterval is een non-profitorganisatie. Donaties gaan
              rechtstreeks naar materialen, locaties en activiteiten voor de
              buurt — van kookworkshops tot dialoogavonden.
            </p>
            <p>
              Als ANBI-erkende stichting kan een donatie bovendien
              fiscaal voordelig zijn voor u als gever.
            </p>
          </div>
          <ul className="mt-6 space-y-3">
            {[
              "Eenmalig of periodiek doneren",
              "ANBI: fiscaal voordelig geven",
              "Transparant besteed aan maatschappelijke doelen",
            ].map((point) => (
              <li key={point} className="flex items-center gap-3 text-foreground">
                <CheckCircle2
                  className="h-5 w-5 shrink-0 text-amber-500"
                  aria-hidden={true}
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <h3 className="text-xl font-semibold text-foreground">
            Donate gegevens
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Wilt u doneren of heeft u vragen over een bijdrage? Neem contact
            met ons op — wij sturen u graag de actuele gegevens.
          </p>
          <dl className="mt-6 space-y-4">
            <div className="rounded-xl bg-secondary p-4">
              <dt className="text-sm font-medium text-muted-foreground">
                E-mail
              </dt>
              <dd>
                <a
                  href={`mailto:${SITE.email}?subject=Donatie%20aan%20Stichting%20Waterval`}
                  className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div className="rounded-xl bg-secondary p-4">
              <dt className="text-sm font-medium text-muted-foreground">
                Telefoon
              </dt>
              <dd>
                <a
                  href={SITE.phoneHref}
                  className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                  {SITE.phone}
                </a>
              </dd>
            </div>
          </dl>
          <p className="mt-6 flex items-start gap-2 rounded-lg border border-dashed border-border bg-background p-3 text-xs leading-relaxed text-muted-foreground">
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden={true} />
            Tip voor de stichting: voeg hier het officiële bankrekeningnummer
            (IBAN) en eventueel een iDEAL-knop (bijvoorbeeld via Mollie) toe.
          </p>
          <Button
            asChild
            className="mt-6 h-12 w-full bg-amber-500 text-base font-semibold text-white hover:bg-amber-600"
          >
            <a
              href={`mailto:${SITE.email}?subject=Donatie%20aan%20Stichting%20Waterval`}
            >
              <Heart className="mr-2 h-5 w-5" aria-hidden={true} />
              Doneer of vraag informatie
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Anbi() {
  return (
    <section
      id="anbi"
      aria-labelledby="anbi-titel"
      className="scroll-mt-24 border-t border-border/70 bg-card"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Open en transparant
            </p>
            <h2
              id="anbi-titel"
              className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            >
              Vertrouwen begint met duidelijkheid.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Stichting Waterval heeft een{" "}
              <strong className="font-semibold text-foreground">
                ANBI-status
              </strong>{" "}
              (Algemeen Nut Beogende Instelling). Dat betekent dat wij ons
              inzetten voor het algemeen nut en dat donaties onder voorwaarden
              fiscaal aftrekbaar zijn.
            </p>
            <a
              href={`mailto:${SITE.email}?subject=${encodeURIComponent(
                "Opvragen ANBI-gegevens (bestuur en beleidsplan)"
              )}`}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-amber-600"
            >
              Bestuurs- en beleidsgegevens opvragen via e-mail
              <ArrowRight className="h-4 w-4" aria-hidden={true} />
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground">
              Organisatiegegevens
            </h3>
            <dl className="mt-4 divide-y divide-border">
              {[
                { term: "Naam", detail: "Stichting Waterval" },
                { term: "Adres", detail: SITE.address },
                { term: "E-mail", detail: SITE.email },
                { term: "Doel", detail: "Ontmoeting, educatie en verbinding in Almere" },
                { term: "Bestuur", detail: "Op aanvraag beschikbaar" },
                { term: "Beleidsplan", detail: "Op aanvraag beschikbaar" },
              ].map((row) => (
                <div
                  key={row.term}
                  className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <dt className="text-sm font-medium text-muted-foreground">
                    {row.term}
                  </dt>
                  <dd className="text-sm font-semibold text-foreground sm:text-right">
                    {row.detail}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden={true} />
              Vul RSIN/Fiscaal nummer en KvK-nummer aan zodra deze gegevens
              definitief vaststaan (verplicht voor ANBI-publicatie).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
