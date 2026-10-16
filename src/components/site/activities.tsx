import Image from "next/image";
import {
  ArrowRight,
  Camera,
  CalendarHeart,
  HeartHandshake,
  Languages,
  Trees,
  Facebook,
  Instagram,
} from "lucide-react";
import { asset } from "@/lib/paths";
import { ACTIVITIES, EXTRA_ACTIVITIES, SITE } from "./content";

const EXTRA_ICONS: Record<string, React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>> = {
  languages: Languages,
  camera: Camera,
  trees: Trees,
  "heart-handshake": HeartHandshake,
};

export function Activities() {
  return (
    <section
      id="activiteiten"
      aria-labelledby="activiteiten-titel"
      className="scroll-mt-24 border-t border-border/70"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Wat we doen
            </p>
            <h2
              id="activiteiten-titel"
              className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            >
              Activiteiten die verbinden.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Ontdek de verschillende manieren waarop mensen elkaar kunnen
            ontmoeten en samen kunnen leren en groeien.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {ACTIVITIES.map((activity) =>
            activity.featured ? (
              <li
                key={activity.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:shadow-primary/10 sm:col-span-2"
              >
                <div className="grid items-center gap-0 md:grid-cols-[auto_1fr]">
                  <div className="brand-gradient flex items-center justify-center p-8 md:p-10">
                    <Image
                      src={asset(activity.image ?? "/images/samen-aan-tafel.jpg")}
                      alt={activity.imageAlt ?? activity.title}
                      width={360}
                      height={510}
                      loading="lazy"
                      className="h-auto w-52 rounded-lg shadow-2xl shadow-black/30 transition-transform duration-500 group-hover:scale-[1.03] md:w-72"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-6 md:p-8">
                    {activity.badge && (
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                        <CalendarHeart className="h-3.5 w-3.5" aria-hidden={true} />
                        {activity.badge}
                      </span>
                    )}
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-amber-600">
                      {activity.kicker}
                    </p>
                    <h3 className="text-2xl font-semibold text-foreground">
                      {activity.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {activity.description}
                    </p>
                    <a
                      href="#contact"
                      className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-amber-600"
                    >
                      Vraag er naar
                      <ArrowRight className="h-4 w-4" aria-hidden={true} />
                    </a>
                  </div>
                </div>
              </li>
            ) : (
              <li
                key={activity.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-secondary">
                  <Image
                    src={asset(activity.image ?? "/images/samen-aan-tafel.jpg")}
                    alt={activity.imageAlt ?? activity.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-2 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                    {activity.kicker}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">
                    {activity.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {activity.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-amber-600"
                  >
                    Vraag er naar
                    <ArrowRight
                      className="h-4 w-4"
                      aria-hidden={true}
                    />
                  </a>
                </div>
              </li>
            )
          )}
        </ul>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EXTRA_ACTIVITIES.map((activity) => {
            const Icon = EXTRA_ICONS[activity.icon ?? "heart-handshake"] ?? HeartHandshake;
            return (
              <li
                key={activity.title}
                className="rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Icon className="h-5 w-5" aria-hidden={true} />
                </span>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-amber-600">
                  {activity.kicker}
                </p>
                <h3 className="mt-1 font-semibold text-foreground">
                  {activity.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {activity.description}
                </p>
              </li>
            );
          })}
        </ul>

        <aside className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-amber-200 bg-accent p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <CalendarHeart
              className="mt-0.5 h-6 w-6 shrink-0 text-amber-600"
              aria-hidden={true}
            />
            <div>
              <h3 className="font-semibold text-accent-foreground">
                Nieuwe data volgen snel!
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-accent-foreground/80">
                We zijn druk bezig met het programma voor de komende maanden.
                Volg onze social media of neem contact op voor de actuele agenda.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Volg ons op Facebook (opent in nieuw venster)"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/85"
            >
              <Facebook className="h-5 w-5" aria-hidden={true} />
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Volg ons op Instagram (opent in nieuw venster)"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/85"
            >
              <Instagram className="h-5 w-5" aria-hidden={true} />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
