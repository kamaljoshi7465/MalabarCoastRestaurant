import storyVideo1 from "../../../assets/videos/Stories/storyVideo1.webm";
import storyImage1 from "../../../assets/images/Stories/storyImage1.webp"
export type FoodStoryCategory = "Non-veg";

export interface FoodStory {
  href: string;
  videoSrc: string;
  poster: string;
  category: FoodStoryCategory;
  title: string;
  description: string;
}

export const FOOD_STORY_CATEGORIES = ["all", "Non-veg"] as const;

export const foodStories: FoodStory[] = [
  {
    href: "/stories/pomfret-masala-fry",
    videoSrc: storyVideo1,
    poster: storyImage1,
    category: "Non-veg",
    title: "Pomfret Masala Fry",
    description: "Witness the artistry behind our signature Pomfret Masala Fry as fresh pomfret is hand-marinated with authentic Malabar spices and expertly pan-fried to create a perfectly crisp exterior with tender, flavourful meat inside.",
  },
];