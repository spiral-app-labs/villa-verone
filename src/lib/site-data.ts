export const siteData = {
  name: "Villa Verone Ristorante Italiano",
  shortName: "Villa Verone",
  url: "https://villa-verone.vercel.app",
  officialSite: "https://www.villaverone.com/",
  description:
    "Historic Geneva Italian dining in an 1849 stone home with patio evenings, Southern Italian family recipes, a full wine list, and OpenTable reservations.",
  phone: "(630) 232-2201",
  phoneHref: "tel:+16302322201",
  addressLines: ["416 Hamilton Street", "Geneva, IL 60134"],
  addressFull: "416 Hamilton Street, Geneva, IL 60134",
  reservationUrl: "https://www.opentable.com/r/villa-verone-geneva",
  menuUrl: "https://www.villaverone.com/images/WEBSITE_DINNER_2026.jpg",
  wineUrl: "https://www.villaverone.com/images/WEBSITE_WINE_2026.jpg",
  curbsideUrl:
    "https://www.villaverone.com/index.php/villa-verone-restaurant-upper-club-geneva-il",
  aboutUrl: "https://www.villaverone.com/index.php/about-us",
  partyRoomUrl: "https://www.villaverone.com/index.php/party-room",
  mapsUrl: "https://maps.google.com/?q=416+Hamilton+Street+Geneva+IL+60134",
  googleMapsEmbed:
    "https://www.google.com/maps?q=416+Hamilton+St,+Geneva,+IL+60134&z=15&output=embed",
  social: {
    facebook: "https://www.facebook.com/VillaVeroneRistoranteItaliano/",
    opentable: "https://www.opentable.com/r/villa-verone-geneva",
  },
  heroImage:
    "https://www.villaverone.com/media/mod_zentools/cache/images/VILLAVERONE-OUTDOOR4-b8d1807b33b18a1c30c9514c0e1ec798.jpg",
  featureImages: {
    award:
      "https://www.villaverone.com/media/mod_zentools/cache/images/IMG_8719-5c3d84a67de65cb27235362228cfc206.jpg",
    pasta:
      "https://www.villaverone.com/media/mod_zentools/cache/images/pasta-1dc1c8c8247e4933288fe9e141f21a4a.jpg",
    seafood:
      "https://www.villaverone.com/media/mod_zentools/cache/images/calamari-5a2d2ee21818bb1951f6236a94c65692.jpg",
    wine: "https://www.villaverone.com/images/WEBSITE_WINE_2026.jpg",
    menu: "https://www.villaverone.com/images/WEBSITE_DINNER_2026.jpg",
  },
  signals: [
    { value: "1849", label: "historic stone home" },
    { value: "4.9", label: "OpenTable rating" },
    { value: "2600+", label: "OpenTable diners" },
    { value: "27+", label: "years in Geneva" },
  ],
  hours: [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "3:30 PM - 8:00 PM" },
    { day: "Wednesday", hours: "3:30 PM - 8:00 PM" },
    { day: "Thursday", hours: "3:30 PM - 8:00 PM" },
    { day: "Friday", hours: "3:30 PM - 8:00 PM" },
    { day: "Saturday", hours: "3:30 PM - 8:00 PM" },
    { day: "Sunday", hours: "3:30 PM - 8:00 PM" },
  ],
} as const;

export const navLinks = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#atmosphere", label: "Atmosphere" },
  { href: "#visit", label: "Visit" },
] as const;

export const experiencePillars = [
  {
    title: "Garden of Eatin' patio",
    body: "The outdoor dining setting is one of the clearest reasons to choose Villa Verone for a date night or celebration in Geneva.",
  },
  {
    title: "Southern Italian family cooking",
    body: "The room is built around Pietro's family recipes and a style of hospitality that feels personal rather than corporate.",
  },
  {
    title: "Celebration-ready dining",
    body: "Private rooms, seafood, desserts, and a deep wine list make the restaurant feel occasion-worthy before guests ever arrive.",
  },
] as const;

export const menuHighlights = [
  {
    name: "Rotolo Mamma Carmela",
    detail:
      "A house signature that reinforces the restaurant's old-world, celebration-ready identity.",
  },
  {
    name: "Rigatoni Bolognese",
    detail:
      "A familiar red-sauce classic that anchors the menu for regulars and first-timers alike.",
  },
  {
    name: "Chicken Francaise",
    detail:
      "Bright, polished, and balanced enough to show how Villa Verone handles comfort and finesse together.",
  },
  {
    name: "Penne Al Salmone",
    detail:
      "A richer seafood pasta that widens the menu story beyond standard neighborhood Italian staples.",
  },
  {
    name: "Shrimp and Scallops",
    detail:
      "A signal dish for guests looking for a more celebratory evening out.",
  },
  {
    name: "Pollo Parmigiana",
    detail:
      "The dependable crowd-pleaser that keeps the family-dinner side of the brand strong.",
  },
] as const;

export const serviceMoments = [
  "Reservations run through OpenTable and should be treated as the primary action across the site.",
  "Dinner, wine, and curbside pickup all have live official menu assets that guests can open instantly.",
  "The historic-home setting and patio are major conversion drivers, not secondary details.",
] as const;

export const guestQuotes = [
  {
    quote:
      "For a taste of old Italy, head to Villa Verone in a historic 1849 stone home.",
    source: "OpenTable",
  },
  {
    quote:
      "Warm, authentic and lively, with a beautiful, romantic outdoor patio.",
    source: "OpenTable diners",
  },
  {
    quote: "The real thing.",
    source: "Customer comment featured by Villa Verone",
  },
] as const;
