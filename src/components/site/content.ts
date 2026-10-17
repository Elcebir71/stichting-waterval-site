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

/** "Wat doen wij?" — het volledige programma, gebaseerd op de bestaande website. */
export type ProgramItem = {
  title: string;
  description: string;
  icon: string;
};

export const WHAT_WE_DO: ProgramItem[] = [
  {
    title: "Weekendschool",
    description:
      "Ontwikkeling en ondersteuning voor leerlingen van groep 5, 6, 7 en 8.",
    icon: "book-open",
  },
  {
    title: "Huiswerkbegeleiding",
    description:
      "Begeleiding bij schoolvakken en planning voor het voortgezet onderwijs.",
    icon: "pen-line",
  },
  {
    title: "Cito-trainingen",
    description:
      "Gerichte trainingen ter voorbereiding op de Cito-toets.",
    icon: "target",
  },
  {
    title: "Privélessen",
    description:
      "Individuele lessen op maat, afgestemd op het eigen tempo.",
    icon: "book-user",
  },
  {
    title: "Taalcursussen",
    description:
      "Turks en Nederlands op eigen niveau, van basis tot gevorderd.",
    icon: "languages",
  },
  {
    title: "Cursus Fotografie",
    description:
      "Ontdek de basis van fotografie en leer je eigen verhaal beeldend te vertellen.",
    icon: "camera",
  },
  {
    title: "Ebru- en kookworkshops",
    description:
      "Traditionele ebru-kunst en het samen bereiden van authentieke gerechten.",
    icon: "utensils",
  },
  {
    title: "Picknicken",
    description:
      "Gezellige picknicks waar bewoners elkaar ontmoeten en buiten samen komen.",
    icon: "trees",
  },
  {
    title: "Multiculturele evenementen",
    description:
      "Van festivals tot buurtavonden: evenementen die mensen dichterbij elkaar brengen.",
    icon: "party",
  },
  {
    title: "Theeavonden",
    description:
      "Ontspannen avonden waarin gesprekken en nieuwe vriendschappen centraal staan.",
    icon: "coffee",
  },
  {
    title: "Koffiedagen",
    description:
      "Open huis: gewoon een bakkie doen met buren, vrienden en familie.",
    icon: "cookie",
  },
  {
    title: "Iftar-bijeenkomsten",
    description:
      "Samen eten en ontmoeten tijdens de Ramadan met iftar-maaltijden.",
    icon: "moon-star",
  },
  {
    title: "Lezingen",
    description:
      "Informatieve lezingen rond actuele sociaal-maatschappelijke thema's.",
    icon: "mic",
  },
];

/** Eerbetoon — genomineerd voor het Appeltje van Oranje. */
export const AWARD = {
  title: "Genomineerd voor het Appeltje van Oranje",
  description:
    "Het Oranje Fonds kent sinds 2003 zijn jaarlijkse prijs toe aan organisaties die zich inzetten voor een leefbare samenleving en de sociale samenhang tussen verschillende groepen. Stichting Waterval werd genomineerd voor deze buitengewoon eervolle prijs: een bronzen beeldje en een geldbedrag van € 15.000, uitgereikt op Paleis Noordeinde door onze beschermvrouwe Prinses Máxima.",
  note:
    "Een Appeltje van Oranje is in de eerste plaats waardering voor het werk en de inzet van de winnende organisatie — en bedoeld om anderen te inspireren soortgelijke initiatieven op te zetten.",
  facts: ["Oranje Fonds", "12 mei 2009", "Paleis Noordeinde", "€ 15.000"],
} as const;

/** Onze visie — drie pijlers van de bestaande website. */
export const VISION = [
  {
    icon: "verbinding",
    title: "Verbinding",
    description:
      "Dialoog is ons belangrijkste instrument om verdeeldheid tegen te gaan en bruggen te bouwen tussen mensen. Op een laagdrempelige en gezellige manier laten wij mensen elkaar ontmoeten en kennen — via georganiseerde bijeenkomsten rond sociaal-maatschappelijke thema's en (inter)nationale dagen, en door het openstellen van onze locatie als ontmoetingsplek.",
  },
  {
    icon: "zelfontwikkeling",
    title: "Zelfontwikkeling",
    description:
      "Ontwikkeling en verandering beginnen bij de mens zelf. Door te werken aan persoonlijke, spirituele en professionele groei werken we aan een betere samenleving. Wij geloven in een leven lang leren: leeskringen, seminars, workshops en mentoringsprojecten voor jong en oud. Daarnaast bieden we de gelegenheid om op onze locatie te werken aan school, studie of werk.",
  },
  {
    icon: "maatschappij",
    title: "Bijdragen aan maatschappelijke vraagstukken",
    description:
      "Wij moedigen mensen aan hun sociale verantwoordelijkheid te nemen door te participeren en liefdadigheid te verrichten in de buurt, wijk en stad waarin ze leven. Samenwerkend met andere instanties werken we positief-kritisch en oplossingsgericht, met vertrouwen, vrijheid en vrede als kernwaarden.",
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
  { label: "Wat we doen", href: "#wat-doen-wij" },
  { label: "Activiteiten", href: "#activiteiten" },
  { label: "Meedoen", href: "#meedoen" },
  { label: "Contact", href: "#contact" },
  {
    label: "Basisschool Waterval",
    href: SITE.basisschool,
    external: true,
  },
];
