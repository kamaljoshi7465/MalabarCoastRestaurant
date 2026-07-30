import { OUTLETS, HEADQUARTERS } from "../home/restaurant/RestaurantsSection.data";

export const CAREERS_HERO = {
  image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=80",
  title: "Join Our Team",
  subtitle: "Be part of India's fastest-growing restaurant chain",
};

export const CAREERS_WHY = {
  title: "Why Work at Malabar Coast",
  subtitle: "We're more than a restaurant – we're a family committed to excellence",
  perks: [
    {
      title: "Great Team Culture",
      description: "Work with passionate food enthusiasts",
      icon: "team",
    },
    {
      title: "Career Growth",
      description: "Clear paths for advancement",
      icon: "growth",
    },
    {
      title: "Work-Life Balance",
      description: "Flexible scheduling options",
      icon: "balance",
    },
    {
      title: "Competitive Benefits",
      description: "Health insurance, bonuses, and perks",
      icon: "benefits",
    },
  ],
};

export const CAREERS_CTA = {
  title: "Don't See Your Role?",
  subtitle: "Send us your resume and we'll keep you in mind for future opportunities",
  email: HEADQUARTERS.email !== "" ? HEADQUARTERS.email : OUTLETS[0].email,
};
