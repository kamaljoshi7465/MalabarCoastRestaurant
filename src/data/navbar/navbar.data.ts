export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Restaurants", href: "/restaurants" },
  { label: "Gallery", href: "/gallery" },
  // { label: "Team", href: "/teams" },
  { label: "Reservations", href: "/reservations" },
  { label: "Contact", href: "/contact" },
];

export const MOB_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Restaurants", href: "/restaurants" },
  { label: "Food Stories", href: "/stories" },
  { label: "Gallery", href: "/gallery" },
  // { label: "Our Team", href: "/teams" },
  { label: "Reservations", href: "/reservations" },
  { label: "Contact", href: "/contact" },
];
