import type { Metadata } from "next";
import { Involvement, Donate, Anbi } from "@/components/site/involvement";

export const metadata: Metadata = {
  title: "Meedoen & steun ons | Stichting Waterval Almere",
  description:
    "Word vrijwilliger, werk samen of doneer aan Stichting Waterval. Als ANBI-erkende stichting is jouw bijdrage fiscaal voordelig en transparant besteed.",
};

export default function MeedoenPage() {
  return (
    <>
      <Involvement />
      <Donate />
      <Anbi />
    </>
  );
}
