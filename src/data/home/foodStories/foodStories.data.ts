import storyVideo1 from "../../../assets/videos/Stories/1.webm";
import storyVideo2 from "../../../assets/videos/Stories/2.webm";
import storyVideo3 from "../../../assets/videos/Stories/3.webm";
import storyVideo4 from "../../../assets/videos/Stories/4.webm";
import storyVideo5 from "../../../assets/videos/Stories/5.webm";
import storyVideo6 from "../../../assets/videos/Stories/6.webm";
import storyVideo7 from "../../../assets/videos/Stories/7.webm";
import storyVideo8 from "../../../assets/videos/Stories/8.webm";

import storyImage1 from "../../../assets/images/Stories/1Pomfret-Masala-Fry-Story-Image1.webp";
import storyImage2 from "../../../assets/images/Stories/2Surmai-Pollichathu-StoryImage2.webp";
import storyImage3 from "../../../assets/images/Stories/3Madurai-Chicken-Curry-Dosa-Story-Image3.webp";
import storyImage4 from "../../../assets/images/Stories/4Chicken-Ghee-Roast-Story-Image4-.webp";
import storyImage5 from "../../../assets/images/Stories/5Thalassery-Chicken-Biryani-Story-Image5.webp";
import storyImage6 from "../../../assets/images/Stories/6Pomfret-Rawa-Fry-Story-Image6.webp";
import storyImage7 from "../../../assets/images/Stories/7Lobster-Ghee-Roast-Story-Image7.webp";
import storyImage8 from "../../../assets/images/Stories/8Prawn-Andhra-Chilli-Fry-Story-Image8.webp";

export type FoodStoryCategory = "Non-Veg";

export interface FoodStory {
  id: number;
  href: string;
  videoSrc: string;
  poster: string;
  category: FoodStoryCategory;
  title: string;
  description: string;
  descriptionLine2?: string;
}

export const FOOD_STORY_CATEGORIES = ["all", "Non-Veg"] as const;

export const foodStories: FoodStory[] = [
  {
    id: 1,
    href: "/stories/pomfret-masala-fry",
    videoSrc: storyVideo1,
    poster: storyImage1,
    category: "Non-Veg",
    title: "Pomfret Masala Fry",
    description: "Fresh pomfret marinated in authentic Kerala spices and pan-fried to perfection.",
    descriptionLine2: "Crispy outside, juicy inside, served with lemon and onion.",
  },
  {
    id: 2,
    href: "/stories/surmai-pollichathu",
    videoSrc: storyVideo2,
    poster: storyImage2,
    category: "Non-Veg",
    title: "Surmai Pollichathu",
    description: "King fish wrapped in banana leaf with rich Kerala masala and slow-cooked.",
    descriptionLine2: "Aromatic, smoky and packed with traditional coastal flavours.",
  },
  {
    id: 3,
    href: "/stories/madurai-chicken-curry-dosa",
    videoSrc: storyVideo3,
    poster: storyImage3,
    category: "Non-Veg",
    title: "Madurai Chicken Curry Dosa",
    description: "Crispy dosa topped with spicy Madurai-style chicken curry.",
    descriptionLine2: "A perfect fusion of South Indian comfort and bold flavours.",
  },
  {
    id: 4,
    href: "/stories/chicken-ghee-roast",
    videoSrc: storyVideo4,
    poster: storyImage4,
    category: "Non-Veg",
    title: "Chicken Ghee Roast",
    description: "Tender chicken roasted in aromatic ghee with Mangalorean spices.",
    descriptionLine2: "Rich, spicy and irresistibly flavourful.",
  },
  {
    id: 5,
    href: "/stories/thalassery-chicken-biryani",
    videoSrc: storyVideo5,
    poster: storyImage5,
    category: "Non-Veg",
    title: "Thalassery Chicken Biryani",
    description: "Fragrant Jeerakasala rice layered with succulent chicken and mild spices.",
    descriptionLine2: "An iconic Malabar biryani with authentic taste.",
  },
  {
    id: 6,
    href: "/stories/pomfret-rawa-fry",
    videoSrc: storyVideo6,
    poster: storyImage6,
    category: "Non-Veg",
    title: "Pomfret Rawa Fry",
    description: "Pomfret coated with seasoned semolina and fried until golden crisp.",
    descriptionLine2: "Crunchy, delicious and served with classic accompaniments.",
  },
  {
    id: 7,
    href: "/stories/lobster-ghee-roast",
    videoSrc: storyVideo7,
    poster: storyImage7,
    category: "Non-Veg",
    title: "Lobster Ghee Roast",
    description: "Juicy lobster cooked in rich ghee roast masala.",
    descriptionLine2: "A luxurious seafood delicacy bursting with coastal flavours.",
  },
  {
    id: 8,
    href: "/stories/prawn-andhra-chilli-fry",
    videoSrc: storyVideo8,
    poster: storyImage8,
    category: "Non-Veg",
    title: "Prawn Andhra Chilli Fry",
    description: "Succulent prawns tossed in fiery Andhra-style chilli masala.",
    descriptionLine2: "Spicy, bold and perfect for seafood lovers.",
  },
];
