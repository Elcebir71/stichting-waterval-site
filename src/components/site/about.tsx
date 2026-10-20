import { HeartHandshake, Sprout, HandHeart, Quote } from "lucide-react";
import { VISION } from "./content";

export const VISION_ICONS: Record<string, React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>> = {
  verbinding: HeartHandshake,
  zelfontwikkeling: Sprout,
  maatschappij: HandHeart,
};

export function About() {
  return (
    <section
      id="over-ons"
      aria-labelledby="over-ons-titel"
      className="scroll-mt-24 border-t border-border/70 bg-card"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Over ons &amp; identiteit
            </p>
            <h2
              id="over-ons-titel"
              className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            >
              Een plek waar mensen en ideeën samenkomen.
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Stichting Waterval is in 1999 opgericht op initiatief van enkele
                Nederlands-Turkse ouders en studenten. De ouders zochten naar
                mogelijkheden om schooluitval van hun kinderen te voorkomen en
                hen te motiveren — deze behoefte was de basis voor de
                activiteiten van de stichting. Met steun, met name vanuit de
                Turkse gemeenschap in Almere, heeft de stichting in de loop der
                jaren heel veel activiteiten kunnen ontplooien. Naast het
                ondersteunen van leerlingen werden stappen gezet op het gebied
                van integratie.
              </p>
              <p>
                Stichting Waterval streeft naar een vreedzame samenleving
                waarin mensen elkaar accepteren en respecteren, ongeacht hun
                afkomst, levensbeschouwing en levensstijl. Leef en laat leven
                dus. De stichting is opgericht door vrijwilligers die
                geïnspireerd zijn vanuit het Hizmet-gedachtegoed.
              </p>
              <p>
                Er is vaak grote onbekendheid als het gaat om de verschillen
                tussen diverse culturen — onbekend maakt onbemind. Om
                integratie en participatie in de multiculturele samenleving te
                bevorderen, organiseert Stichting Waterval een scala aan
                activiteiten: van voorlichtingsavonden tot cursussen en het
                begeleiden van jongeren, zodat zij hun schoolloopbaan met
                succes kunnen voortzetten en afronden. Per jaar maken
                tientallen jongeren en volwassenen gebruik van de diensten van
                de stichting.
              </p>
            </div>
            <figure className="mt-8 rounded-xl border border-amber-200 bg-accent p-5">
              <Quote
                className="h-5 w-5 text-amber-600"
                aria-hidden={true}
              />
              <blockquote className="mt-2 text-lg font-medium leading-relaxed text-accent-foreground">
                &ldquo;Leef om te laten leven&rdquo; — met deze spirit proberen
                de vrijwilligers dienstbaar te zijn voor de maatschappij en aan
                een ieder de hand te reiken. We kunnen niet iedereen helpen,
                maar iedereen kan iemand helpen.
              </blockquote>
              <figcaption className="mt-2 text-sm font-semibold text-amber-700">
                Fethullah Gülen, inspiratiebron van de visie
              </figcaption>
            </figure>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground">
              Onze visie
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Drie pijlers vormen de basis van alles wat we doen.
            </p>
            <ul className="mt-5 space-y-4">
              {VISION.map((pillar) => {
                const Icon =
                  VISION_ICONS[pillar.icon] ?? HeartHandshake;
                return (
                  <li
                    key={pillar.title}
                    className="group rounded-xl border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-5 w-5" aria-hidden={true} />
                      </span>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {pillar.title}
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
