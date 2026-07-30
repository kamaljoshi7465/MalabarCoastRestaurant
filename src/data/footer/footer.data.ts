import { OUTLETS } from "../home/restaurant/RestaurantsSection.data";

export interface LinkItem {
  label: string;
  href: string;
  highlight?: boolean;
}

export interface NavSection {
  title: string;
  links: LinkItem[];
}

export interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface LegalItem {
  label: string;
  href: string;
}

export const NAV_SECTIONS: NavSection[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      // { label: "Our Team", href: "/teams" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Dining",
    links: [
      { label: "Our Restaurants", href: "/restaurants" },
      { label: "Menu", href: "/menu" },
      { label: "Reservations", href: "/reservations" },
      { label: "Gallery", href: "/gallery" },
      { label: "Food Stories", href: "/stories" },
      { label: "Private Events", href: "/events" },
    ],
  },
  {
    title: "Our Restaurants",
    links: OUTLETS.map((o) => ({ label: o.name, href: `/restaurants/${o.slug}` })),
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Feedback", href: "/contact?subject=feedback" },
    ],
  },
];

export const LEGAL_LINKS: LegalItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Sitemap", href: "/sitemap.xml" },
];
