"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Heart, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/paths";
import { NAV_LINKS, SITE } from "./content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
        <Link
          href="/"
          aria-label={`${SITE.name} — home`}
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
        </Link>

        <nav aria-label="Hoofdnavigatie" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active =
                !link.external &&
                (link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    {...(link.external
                      ? {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-primary ${
                      active
                        ? "bg-secondary font-semibold text-primary"
                        : "text-foreground/80"
                    }`}
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
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden bg-amber-500 text-sm font-semibold text-primary-foreground hover:bg-amber-600 sm:inline-flex"
          >
            <Link href="/meedoen#steun-ons">
              <Heart aria-hidden="true" className="mr-2 h-4 w-4" />
              Steun ons
            </Link>
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
            {NAV_LINKS.map((link) => {
              const active =
                !link.external &&
                (link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    {...(link.external
                      ? {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-2 rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-secondary hover:text-primary ${
                      active
                        ? "bg-secondary font-semibold text-primary"
                        : "text-foreground/85"
                    }`}
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
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/meedoen#steun-ons"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-md bg-amber-500 px-3 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-amber-600"
              >
                Steun ons
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
