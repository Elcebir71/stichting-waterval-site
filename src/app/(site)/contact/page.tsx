import type { Metadata } from "next";
import { Contact } from "@/components/site/contact";

export const metadata: Metadata = {
  title: "Contact | Stichting Waterval Almere",
  description:
    "Neem contact op met Stichting Waterval in Almere: stuur een bericht, bel of mail ons. Wij helpen je graag verder bij vragen over activiteiten, vrijwilligerswerk en donaties.",
};

export default function ContactPage() {
  return <Contact />;
}
