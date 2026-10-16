export const SITE = {
  name: "Stichting Waterval",
  tagline: "Waar mensen elkaar ontmoeten en groeien",
  email: "info@stichtingwaterval.nl",
  phone: "+31 6 4498 0168",
  phoneHref: "tel:+31644980168",
  address: "De Striptekenaar 22, 1336 CM Almere",
  facebook: "https://www.facebook.com/StichtingWaterval/",
  instagram: "https://www.instagram.com/st_waterval",
  basisschool: "https://www.bswaterval.nl",
  baseUrl: "https://www.stichtingwaterval.nl",
} as const;

export type Activity = {
  title: string;
  kicker: string;
  description: string;
  image?: string;
  imageAlt?: string;
  icon?: string;
  featured?: boolean;
  /** Uitgelichte poster: toon volledige afbeelding (object-contain). */
  poster?: boolean;
  /** Label boven de kaart, bijvoorbeeld een terugblik. */
  badge?: string;
};

/** Kernactiviteiten — gebaseerd op de bestaande website. */
export const ACTIVITIES: Activity[] = [
  {
    title: "Ark van Noach",
    kicker: "Dialoog & ontmoeting",
    description:
      "Een avond van verbinding op het water: samen varen, samen verbinden onder genot van asurapudding. Een dialoogbijeenkomst rond gedeelde verhalen en tradities, met aandacht voor vrede, begrip en verbinding tussen verschillende levensbeschouwingen.",
    image: "/images/ark-van-noach-poster.webp",
    imageAlt:
      "Poster van de dialoogbijeenkomst Ark van Noach: een avond van verbinding op het water onder genot van asurapudding",
    featured: true,
    poster: true,
    badge: "Terugblik — 26 juni 2026, Marina Muiderzand Almere",
  },
  {
    title: "Kookworkshops",
    kicker: "Cultuur & koken",
    description:
      "Praktische workshops waarin deelnemers samen authentieke gerechten leren bereiden — van lahmacun tot baklava — en aan het einde van de les gezellig samen eten.",
    image: "/images/kookworkshops.webp",
    imageAlt:
      "Deelnemers koken samen Turkse gerechten tijdens een kookworkshop in de keuken van Stichting Waterval",
  },
  {
    title: "Bezoek je Buren",
    kicker: "Buurt & verbinding",
    description:
      "Een laagdrempelig project waarin buurtbewoners met verschillende achtergronden elkaar leren kennen, vaak onder het genot van zelfgemaakte hapjes.",
    image: "/images/bezoek-je-buren.webp",
    imageAlt:
      "Buren elkaar vriendschappelijk verwelkomen aan de deur met bloemen en een cadeautje",
  },
  {
    title: "Huiswerkbegeleiding",
    kicker: "Onderwijs & ontwikkeling",
    description:
      "Begeleiding voor leerlingen in het voortgezet onderwijs bij schoolvakken, planning en het zelfstandig leren werken.",
    image: "/images/huiswerkbegeleiding.webp",
    imageAlt:
      "Vrijwilliger helpt leerlingen met huiswerk in het educatiecentrum van Stichting Waterval",
  },
];

export const EXTRA_ACTIVITIES: Activity[] = [
  {
    title: "Cursus Turks",
    kicker: "Taal",
    icon: "languages",
    description:
      "Leer de Turkse taal op eigen niveau, van basis tot gevorderd, in kleine groepen.",
  },
  {
    title: "Cursus Fotografie",
    kicker: "Kunst & creativiteit",
    icon: "camera",
    description:
      "Ontdek de basis van fotografie en leer je eigen verhaal beeldend te vertellen.",
  },
  {
    title: "Zomer Picknick",
    kicker: "Samen buiten",
    icon: "trees",
    description:
      "Een gezellige picknick waar bewoners elkaar ontmoeten en de zomer samen vieren.",
  },
  {
    title: "Appeltje van Oranje",
    kicker: "Integratie & verbinding",
    icon: "heart-handshake",
    description:
      "Een bijeenkomst rond maatschappelijke betrokkenheid en verbinding binnen de wijk.",
  },
];

/** Waar we voor staan — gebaseerd op de bestaande website. */
export const VALUES = [
  {
    icon: "workshops",
    title: "Workshops & trainingen",
    description:
      "Educatieve en praktische workshops die kinderen, jongeren en volwassenen helpen om nieuwe vaardigheden te ontwikkelen.",
  },
  {
    icon: "art",
    title: "Kunst en cultuur",
    description:
      "We brengen mensen samen via culturele activiteiten, inspiratieavonden en ontmoetingsmomenten die verbinding en begrip versterken.",
  },
  {
    icon: "neighborhood",
    title: "Wijkprojecten",
    description:
      "Samen met buurtbewoners werken aan projecten die de wijk verbeteren en de sociale cohesie versterken.",
  },
  {
    icon: "volunteers",
    title: "Samenwerking & vrijwilligers",
    description:
      "Samen met scholen, buurthuizen, gemeenten en lokale partners zetten we projecten neer die écht impact maken — gedragen door betrokken vrijwilligers.",
  },
  {
    icon: "loneliness",
    title: "Tegen eenzaamheid",
    description:
      "Doe mee aan sociale activiteiten en krijg toegang tot middelen die helpen in het dagelijks leven.",
  },
  {
    icon: "festival",
    title: "Buurtfestivals & evenementen",
    description:
      "Van buurtavonden tot grotere evenementen: we creëren momenten waar bewoners elkaar leren kennen en de sociale cohesie groeit.",
  },
] as const;

export type NavLink = {
  label: string;
  href: string;
  /** Externe link: opent in een nieuw tabblad. */
  external?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Over ons", href: "#over-ons" },
  { label: "Wat we doen", href: "#waar-we-voor-staan" },
  { label: "Activiteiten", href: "#activiteiten" },
  { label: "Meedoen", href: "#meedoen" },
  { label: "Contact", href: "#contact" },
  {
    label: "Basisschool Waterval",
    href: SITE.basisschool,
    external: true,
  },
];
