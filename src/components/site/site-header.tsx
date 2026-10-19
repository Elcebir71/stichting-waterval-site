"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, Heart, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/paths";
import { NAV_LINKS, SITE } from "./content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75 transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <a
        href="#hoofdinhoud"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Ga naar de inhoud
      </a>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#top"
          aria-label={`${SITE.name} — naar boven`}
          className="flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <Image
            src={asset("/images/logo-wide.png")}
            alt={`${SITE.name} logo`}
            width={140}
            height={40}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </a>

        <nav aria-label="Hoofdnavigatie" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                  {link.external && (
                    <>
                      <ExternalLink
                        className="h-3 w-3 text-muted-foreground"
                        aria-hidden={true}
                      />
                      <span className="sr-only">
                        (opent in nieuw venster)
                      </span>
                    </>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden bg-amber-500 text-sm font-semibold text-primary-foreground hover:bg-amber-600 sm:inline-flex"
          >
            <a
              href="#steun-ons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Heart aria-hidden="true" className="mr-2 h-4 w-4" />
              Steun ons
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-expanded={open}
            aria-controls="mobiel-menu"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {open && (
        <nav
          id="mobiel-menu"
          aria-label="Mobiele navigatie"
          className="border-t bg-background lg:hidden"
        >
          <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-md px-3 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                  {link.external && (
                    <>
                      <ExternalLink
                        className="h-4 w-4 text-muted-foreground"
                        aria-hidden={true}
                      />
                      <span className="sr-only">
                        (opent in nieuw venster)
                      </span>
                    </>
                  )}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#steun-ons"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-md bg-amber-500 px-3 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-amber-600"
              >
                Steun ons
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
