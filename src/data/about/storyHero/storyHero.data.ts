import aboutOurStory from "../../../assets/images/AboutSection/about us.png";

interface Stat {
  value: string;
  label: string;
}

interface StoryHeroData {
  image: string;
  since: string;
  title: string;
}

export const stats: Stat[] = [
  { value: "3", label: "Restaurants" },
  { value: "50k+", label: "Happy Guests" },
  { value: "4+", label: "Years" },
];

export const STORY_HERO_DATA: StoryHeroData = {
  image: aboutOurStory,
  since: "2019",
  title: "A journey of flavours, tradition, and innovation — reimagining Indian cuisine for the modern palate.",
};