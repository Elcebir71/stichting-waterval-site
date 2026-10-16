import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "Ongeldig verzoek." },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = (body ?? {}) as Record<
      string,
      unknown
    >;

    const errors: Record<string, string> = {};
    if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      errors.name = "Vul uw naam in (minimaal 2 tekens).";
    }
    if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
      errors.email = "Vul een geldig e-mailadres in.";
    }
    if (typeof subject !== "string" || subject.trim().length < 2) {
      errors.subject = "Kies een onderwerp.";
    }
    if (typeof message !== "string" || message.trim().length < 10 || message.trim().length > 2000) {
      errors.message = "Uw bericht moet minimaal 10 tekens bevatten.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { ok: false, error: "Controleer de ingevulde gegevens.", errors },
        { status: 422 }
      );
    }

    const saved = await db.contactMessage.create({
      data: {
        name: (name as string).trim(),
        email: (email as string).trim(),
        phone: typeof phone === "string" && phone.trim() ? phone.trim() : null,
        subject: (subject as string).trim(),
        message: (message as string).trim(),
      },
      select: { id: true, createdAt: true },
    });

    return NextResponse.json({ ok: true, id: saved.id }, { status: 201 });
  } catch (err) {
    console.error("[/api/contact] Fout bij opslaan:", err);
    return NextResponse.json(
      { ok: false, error: "Er ging iets mis. Probeer het later opnieuw." },
      { status: 500 }
    );
  }
}
