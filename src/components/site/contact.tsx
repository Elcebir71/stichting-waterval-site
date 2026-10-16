"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { SITE } from "./content";

const SUBJECTS = [
  { value: "algemeen", label: "Algemene vraag" },
  { value: "activiteiten", label: "Activiteiten & agenda" },
  { value: "vrijwilligers", label: "Vrijwilligerswerk" },
  { value: "donatie", label: "Donatie" },
  { value: "samenwerking", label: "Samenwerking" },
] as const;

type FieldErrors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

/**
 * Gönderim modları (build zamanında belirlenir):
 * - NEXT_PUBLIC_FORM_ENDPOINT doluysa → o adrese POST (Formspree/Web3Forms uyumlu)
 * - NEXT_PUBLIC_STATIC_EXPORT=1 ise (GitHub Pages) → mailto: ile e-posta uygulaması açılır
 * - aksi halde → yerleşik /api/contact (Next.js sunucusu)
 */
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";
const IS_STATIC_EXPORT = process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";
const MODE: "endpoint" | "mailto" | "api" = FORM_ENDPOINT
  ? "endpoint"
  : IS_STATIC_EXPORT
    ? "mailto"
    : "api";

export function Contact() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [subject, setSubject] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      subject,
      message: String(data.get("message") ?? ""),
    };

    // Konu seçimi tüm modlarda zorunlu (tarayıcı doğrulaması Radix Select'i kapsamaz)
    if (!payload.subject) {
      setFieldErrors({ subject: "Kies een onderwerp." });
      toast({
        title: "Verzenden mislukt",
        description: "Kies een onderwerp.",
        variant: "destructive",
      });
      return;
    }

    if (MODE === "endpoint") {
      setSubmitting(true);
      setFieldErrors({});
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...payload,
            _subject: `[Website] ${SUBJECTS.find((s) => s.value === payload.subject)?.label ?? payload.subject}`,
          }),
        });
        if (res.ok) {
          setSubmitted(true);
          setSubject("");
          form.reset();
          toast({
            title: "Bericht verzonden",
            description:
              "Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.",
          });
        } else {
          toast({
            title: "Verzenden mislukt",
            description: "Controleer de ingevulde gegevens en probeer het opnieuw.",
            variant: "destructive",
          });
        }
      } catch {
        toast({
          title: "Verzenden mislukt",
          description: "Er ging iets mis. Probeer het later opnieuw.",
          variant: "destructive",
        });
      } finally {
        setSubmitting(false);
      }
      return;
    }

    if (MODE === "mailto") {
      const label =
        SUBJECTS.find((s) => s.value === payload.subject)?.label ?? payload.subject;
      const body = [
        `Naam: ${payload.name}`,
        `E-mail: ${payload.email}`,
        `Telefoon: ${payload.phone || "-"}`,
        `Onderwerp: ${label}`,
        "",
        "Bericht:",
        payload.message,
      ].join("\n");
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
        `[Website] ${label}`
      )}&body=${encodeURIComponent(body)}`;
      setSubmitted(true);
      setSubject("");
      form.reset();
      toast({
        title: "E-mailprogramma geopend",
        description:
          "Uw e-mailprogramma wordt geopend met een vooringevuld bericht. Verzend het vanaf daar naar ons.",
      });
      return;
    }

    setSubmitting(true);
    setFieldErrors({});
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as {
        ok: boolean;
        error?: string;
        errors?: FieldErrors;
      };

      if (res.ok && json.ok) {
        setSubmitted(true);
        setSubject("");
        form.reset();
        toast({
          title: "Bericht verzonden",
          description:
            "Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.",
        });
      } else {
        if (json.errors) setFieldErrors(json.errors);
        toast({
          title: "Verzenden mislukt",
          description: json.error ?? "Controleer de ingevulde gegevens.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Verzenden mislukt",
        description: "Er ging iets mis. Probeer het later opnieuw.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-titel"
      className="scroll-mt-24 border-t border-border/70"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Contact
            </p>
            <h2
              id="contact-titel"
              className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            >
              Kom in gesprek met ons.
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
              Heeft u een vraag, idee of wilt u meehelpen? Stuur een bericht —
              we reageren zo snel mogelijk.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Mail className="h-5 w-5" aria-hidden={true} />
                </span>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    E-mail
                  </h3>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-semibold text-foreground underline-offset-4 hover:underline"
                  >
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Phone className="h-5 w-5" aria-hidden={true} />
                </span>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Telefoon
                  </h3>
                  <a
                    href={SITE.phoneHref}
                    className="font-semibold text-foreground underline-offset-4 hover:underline"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <MapPin className="h-5 w-5" aria-hidden={true} />
                </span>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Adres
                  </h3>
                  <p className="font-semibold text-foreground">{SITE.address}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div
                role="status"
                className="flex h-full min-h-72 flex-col items-center justify-center gap-4 text-center"
              >
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <CheckCircle2 className="h-8 w-8" aria-hidden={true} />
                </span>
                <h3 className="text-2xl font-semibold text-foreground">
                  Bedankt voor uw bericht!
                </h3>
                <p className="max-w-sm text-muted-foreground">
                  We hebben uw bericht ontvangen en nemen zo snel mogelijk
                  contact met u op.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="mt-2"
                >
                  Nieuw bericht sturen
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate={false} aria-label="Contactformulier">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">
                      Naam <span aria-hidden={true} className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      minLength={2}
                      maxLength={100}
                      autoComplete="name"
                      placeholder="Uw naam"
                      aria-invalid={Boolean(fieldErrors.name)}
                      aria-describedby={fieldErrors.name ? "name-error" : undefined}
                    />
                    {fieldErrors.name && (
                      <p id="name-error" role="alert" className="text-sm text-destructive">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">
                      E-mailadres <span aria-hidden={true} className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="naam@voorbeeld.nl"
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    />
                    {fieldErrors.email && (
                      <p id="email-error" role="alert" className="text-sm text-destructive">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">Telefoonnummer (optioneel)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+31 6 12345678"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="subject">
                      Onderwerp <span aria-hidden={true} className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={subject}
                      onValueChange={(value) => setSubject(value)}
                    >
                      <SelectTrigger
                        id="subject"
                        className="w-full"
                        aria-invalid={Boolean(fieldErrors.subject)}
                      >
                        <SelectValue placeholder="Kies een onderwerp" />
                      </SelectTrigger>
                      <SelectContent>
                        {SUBJECTS.map((s) => (
                          <SelectItem key={s.value} value={s.value}>
                            {s.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldErrors.subject && (
                      <p role="alert" className="text-sm text-destructive">
                        {fieldErrors.subject}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <Label htmlFor="message">
                      Bericht <span aria-hidden={true} className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      minLength={10}
                      maxLength={2000}
                      rows={5}
                      placeholder="Waar wilt u ons over vertellen?"
                      className="resize-y"
                      aria-invalid={Boolean(fieldErrors.message)}
                      aria-describedby={fieldErrors.message ? "message-error" : undefined}
                    />
                    {fieldErrors.message && (
                      <p id="message-error" role="alert" className="text-sm text-destructive">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 h-12 w-full bg-primary text-base font-semibold hover:bg-primary/90 sm:w-auto sm:px-10"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden={true} />
                      Versturen…
                    </>
                  ) : (
                    <>
                      Verstuur bericht
                      <Send className="ml-2 h-5 w-5" aria-hidden={true} />
                    </>
                  )}
                </Button>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  Met het versturen gaat u akkoord dat wij uw gegevens gebruiken
                  om te reageren op uw bericht. Wij delen uw gegevens niet met
                  derden.
                </p>
                {MODE === "mailto" && (
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Na het verzenden wordt uw e-mailprogramma geopend met een
                    vooringevuld bericht aan {SITE.email}. U verzendt het
                    bericht vanaf daar.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
