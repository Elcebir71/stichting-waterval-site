import type { Metadata } from "next";
import { About } from "@/components/site/about";

export const metadata: Metadata = {
  title: "Over ons & identiteit | Stichting Waterval Almere",
  description:
    "Opgericht in 1999 door Nederlands-Turkse ouders en studenten. Leer onze identiteit, visie en drie pijlers kennen: verbinding, zelfontwikkeling en maatschappelijke bijdragen.",
};

export default function OverOnsPage() {
  return <About />;
}
