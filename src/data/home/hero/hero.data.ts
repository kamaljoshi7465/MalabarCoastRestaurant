import HeroVideo from "../../../assets/videos/Hero-video.webm";
import outlet from "../../../assets/images/Home/Hero/malabar-hero-1.webp";
import gallery1 from "../../../assets/images/Home/Hero/malabar-hero-2.webp";
import gallery2 from "../../../assets/images/Home/Hero/malabar-hero-3.webp";
import gallery3 from "../../../assets/images/Home/Hero/malabar-hero-4.webp";

export interface HeroContentItem {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export interface HeroAssets {
  video: string;
  outlet: string;
  gallery: string[];
}

export const HERO_CONTENT: HeroContentItem[] = [
  {
    title: "A Refined Celebration of Coastal Cuisine",
    subtitle: "Experience an exquisite blend of Coastal, South Indian, North Indian and Seafood delicacies, thoughtfully crafted with authentic flavours, premium ingredients and impeccable hospitality.",
    primaryLabel: "Reserve a Table",
    primaryHref: "/reservations",
    secondaryLabel: "Explore Our Menu",
    secondaryHref: "/menu",
  },
  {
    title: "Where Culinary Heritage Meets Contemporary Dining",
    subtitle: "Every dish reflects the richness of India's coastal traditions, elevated with exceptional craftsmanship and served in an elegant setting.",
    primaryLabel: "Discover Our Story",
    primaryHref: "/stories",
    secondaryLabel: "View Gallery",
    secondaryHref: "/gallery",
  },
  {
    title: "Inspired by the Coast. Crafted for Every Palate.",
    subtitle: "From signature seafood delicacies and authentic South Indian classics to refined North Indian favourites, every plate is created to leave a lasting impression.",
    primaryLabel: "Our Signature Collection",
    primaryHref: "/menu",
    secondaryLabel: "Book Your Experience",
    secondaryHref: "/reservations",
  },
  {
    title: "Celebrate Every Occasion with Exceptional Dining",
    subtitle: "Whether it's an intimate dinner, family gathering or corporate celebration, The Malabar Coast offers an atmosphere where every moment becomes memorable.",
    primaryLabel: "Plan Your Celebration",
    primaryHref: "/reservations",
    secondaryLabel: "Contact Us",
    secondaryHref: "/contact",
  },
  {
    title: "Timeless Flavours. Exceptional Hospitality.",
    subtitle: "An unforgettable dining destination where authentic cuisine, elegant interiors and warm hospitality come together to create remarkable experiences.",
    primaryLabel: "Visit The Malabar Coast",
    primaryHref: "/",
    secondaryLabel: "Find Our Outlets",
    secondaryHref: "/restaurants",
  },
];

export const HERO_ASSETS: HeroAssets = {
  video: HeroVideo,
  outlet: outlet,
  gallery: [
    gallery1,
    gallery2,
    gallery3,
  ],
};

export const HERO_MAPS_HREF =
  "https://www.google.com/maps/search/?api=1&query=Malabar+Coast+Restaurant";
