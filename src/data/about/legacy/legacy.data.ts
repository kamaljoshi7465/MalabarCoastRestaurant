import aboutOurStory from "../../../assets/images/AboutSection/about-us.webp";
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
    `Welcome to The Malabar Coast, where the rich culinary heritage of Malabar meets the 
warmth of South Indian hospitality.`,

    `Inspired by the flavours and culinary traditions of Malabar and South India, our cuisine 
celebrates time-honoured recipes, authentic spices, and the diverse flavours of the 
region. From soft, delicate appams and dosas to flaky Malabar parottas, aromatic 
biryanis, traditional curries, fresh seafood and indulgent desserts, every dish is crafted 
to bring the true essence of the Malabar Coast to your table. `,

    `At The Malabar Coast, we believe in:`,

    `● Authentic Malabar Flavours rooted in traditional recipes `,
    `● Fresh, Quality Ingredients carefully selected for every dish`, 
    `● Traditional Cooking with time-honoured techniques`, 
    `● Warm & Genuine Hospitality that makes every guest feel at home`, 
    `● A Memorable Dining Experience inspired by the spirit of the Malabar Coast`,

    `Whether you're joining us for a leisurely breakfast, a family lunch, an intimate dinner, or a 
      special celebration, we invite you to slow down, savour every flavour, and experience the 
         true taste and soul of the Malabar Coast.`,

         `The Malabar Coast : Spices, Sea & Soul`
  ],

  image: aboutOurStory,

  imageAlt: "Restaurant interior",

  experience: {
    value: STATS.years.value,
    label: "Years of Excellence",
  },
};