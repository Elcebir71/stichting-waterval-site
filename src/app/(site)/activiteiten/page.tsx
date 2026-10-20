import type { Metadata } from "next";
import { Activities } from "@/components/site/activities";

export const metadata: Metadata = {
  title: "Activiteiten | Stichting Waterval Almere",
  description:
    "Kookworkshops, Bezoek je Buren, huiswerkbegeleiding, weekendschool en meer. Bekijk het volledige programma en onze nominatie voor het Appeltje van Oranje.",
};

export default function ActiviteitenPage() {
  return <Activities />;
}
