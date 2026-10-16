import {
  GraduationCap,
  Palette,
  HousePlus,
  HandHeart,
  HeartHandshake,
  PartyPopper,
} from "lucide-react";
import { VALUES } from "./content";

const ICONS: Record<string, React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>> = {
  workshops: GraduationCap,
  art: Palette,
  neighborhood: HousePlus,
  volunteers: HandHeart,
  loneliness: HeartHandshake,
  festival: PartyPopper,
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
              Over Stichting Waterval
            </p>
            <h2
              id="over-ons-titel"
              className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            >
              Een plek waar mensen en ideeën samenkomen.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Een sterke samenleving begint met contact. {`Stichting Waterval`} zet
                zich in voor activiteiten en initiatieven die ontmoeting,
                persoonlijke ontwikkeling en betrokkenheid stimuleren in Almere.
              </p>
              <p>
                Onze missie: mensen verbinden via cultuur, educatie en sociale
                betrokkenheid. We werken graag samen met bewoners, vrijwilligers
                en maatschappelijke partners, zodat mogelijkheden ontstaan om
                kennis te delen, talenten te ontdekken en elkaar beter te leren
                kennen.
              </p>
            </div>
          </div>

          <div id="waar-we-voor-staan" className="scroll-mt-24">
            <h3 className="text-lg font-semibold text-foreground">
              Waar we voor staan
            </h3>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {VALUES.map((value) => {
                const Icon = ICONS[value.icon] ?? HandHeart;
                return (
                  <li
                    key={value.title}
                    className="group rounded-xl border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" aria-hidden={true} />
                    </span>
                    <h4 className="mt-3 font-semibold text-foreground">
                      {value.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
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
