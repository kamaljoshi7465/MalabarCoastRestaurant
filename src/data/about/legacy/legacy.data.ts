import aboutOurStory from "../../../assets/images/AboutSection/about us.png";
import { STATS } from "../../common/stats.data";

export interface LegacyData {
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  experience: {
    value: string;
    label: string;
  };
}

export const LEGACY_DATA: LegacyData = {
  title: "The Malabar Coast Legacy",

  paragraphs: [
    `Welcome to The Malabar Coast, where authentic South Indian flavors meet warm hospitality.`,

    `Inspired by the rich culinary traditions of Kerala and South India, we serve a carefully crafted menu featuring dosas, idlis, appams, Kerala parottas, biryanis, curries, seafood specialties, refreshing beverages, and traditional desserts.`,

    `Our commitment is to provide:`,

    `— Fresh, high-quality ingredients`,
    `— Authentic recipes`,
    `— Hygienic food preparation`,
    `— Friendly customer service`,
    `— A memorable dining experienc`,

    `Whether you're joining us for breakfast, lunch, dinner, or a family celebration, we look forward to serving you with the true taste of the Malabar Coast.`
  ],

  image: aboutOurStory,

  imageAlt: "Restaurant interior",

  experience: {
    value: STATS.years.value,
    label: "Years of Excellence",
  },
};