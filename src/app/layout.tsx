import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { asset } from "@/lib/paths";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stichtingwaterval.nl"),
  title: "Stichting Waterval Almere | Educatie, cultuur en verbinding",
  description:
    "Stichting Waterval verbindt mensen in Almere via cultuur, educatie en sociale betrokkenheid. Workshops, dialoogbijeenkomsten, buurtprojecten en meer. ANBI-erkend.",
  keywords: [
    "Stichting Waterval",
    "Almere",
    "stichting",
    "vrijwilligerswerk",
    "workshops",
    "cultuur",
    "educatie",
    "buurtactiviteiten",
    "ANBI",
    "integratie",
  ],
  authors: [{ name: "Stichting Waterval" }],
  icons: {
    icon: asset("/images/logo-wide.png"),
  },
  openGraph: {
    title: "Stichting Waterval Almere | Educatie, cultuur en verbinding",
    description:
      "Stichting Waterval verbindt mensen via cultuur, educatie en sociale betrokkenheid. Wij werken aan een inclusieve samenleving waarin iedereen zich welkom voelt.",
    url: "https://www.stichtingwaterval.nl/",
    siteName: "Stichting Waterval",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/images/samen-aan-tafel.jpg",
        width: 1536,
        height: 1023,
        alt: "Bewoners samen aan tafel tijdens een ontmoetingsavond van Stichting Waterval",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stichting Waterval Almere",
    description:
      "Verbindt mensen via cultuur, educatie en sociale betrokkenheid in Almere.",
    images: ["/images/samen-aan-tafel.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
