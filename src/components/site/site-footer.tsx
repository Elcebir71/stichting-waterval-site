import Image from "next/image";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";
import { asset } from "@/lib/paths";
import { NAV_LINKS, SITE } from "./content";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-primary-900/40 brand-gradient text-white/90">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-flex items-center rounded-lg bg-white px-3 py-2">
              <Image
                src={asset("/images/logo-wide.png")}
                alt={`${SITE.name} logo`}
                width={140}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
              Ruimte voor ontmoeting, ontwikkeling en verbinding in Almere.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook van Stichting Waterval (opent in nieuw venster)"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Facebook className="h-5 w-5" aria-hidden={true} />
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram van Stichting Waterval (opent in nieuw venster)"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Instagram className="h-5 w-5" aria-hidden={true} />
              </a>
            </div>
          </div>

          <nav aria-label="Verkennen">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-300">
              Verkennen
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                    {link.external && (
                      <>
                        {" "}
                        <ExternalLink
                          className="inline h-3 w-3"
                          aria-hidden={true}
                        />
                        <span className="sr-only">(opent in nieuw venster)</span>
                      </>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-300">
              Transparantie
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="#anbi"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  ANBI-gegevens
                </a>
              </li>
              <li>
                <a
                  href="#steun-ons"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  Doneren
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  Contact opnemen
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-300">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden={true} />
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden={true} />
                <a
                  href={SITE.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden={true} />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div
          className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between sm:px-6"
        >
          <p>
            © {year} {SITE.name}. Alle rechten voorbehouden.
          </p>
          <p>Stichting Waterval · Almere, Nederland · ANBI</p>
        </div>
      </div>
    </footer>
  );
}
