export interface HeroContentItem {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
}

export interface HeroAssets {
  video: string;
  outlet: string;
  gallery: string[];
}

export const HERO_CONTENT: HeroContentItem[] = [
  {
    title: "Anardana Vegas Mall, Dwarka",
    subtitle: "Authentic flavours, modern setting — visit us at Sector 14 Dwarka",
    primaryLabel: "Get Directions",
    primaryHref: "/restaurants/anardana-vegas-mall",
  },
  {
    title: "Progressive Indian Dining",
    subtitle: "Experience authentic flavors with a contemporary twist",
    primaryLabel: "Explore Menu",
    primaryHref: "/menu",
  },
  {
    title: "13 Unique Experiences",
    subtitle: "Each outlet with its own distinctive vibe, sumptuous menu and cocktails",
    primaryLabel: "Find Your Restaurant",
    primaryHref: "/restaurants",
  },
  {
    title: "Craft Your Experience",
    subtitle: "Signature cocktails and culinary excellence",
    primaryLabel: "View Our Drinks",
    primaryHref: "/menu",
  },
  {
    title: "Reserve Your Table",
    subtitle: "Book now for an unforgettable culinary journey",
    primaryLabel: "Book Now",
    primaryHref: "/reservations",
  },
];

export const HERO_ASSETS: HeroAssets = {
  video: "https://cdn.anardana.in/videos/vegas-website.mp4",
  outlet: "https://cdn.anardana.in/images/outlets/vegas/ef09d7bc-28df-4407-af87-30ce76fa2a8d.webp",
  gallery: [
    "https://cdn.anardana.in/images/gallery-hero/3.jpg",
    "https://cdn.anardana.in/images/gallery-hero/2.jpg",
    "https://cdn.anardana.in/images/gallery-hero/5.jpg",
    "https://cdn.anardana.in/images/gallery-hero/4.jpg",
  ],
};

export const HERO_MAPS_HREF =
  "https://www.google.com/maps/search/?api=1&query=Anardana+Restaurant";
