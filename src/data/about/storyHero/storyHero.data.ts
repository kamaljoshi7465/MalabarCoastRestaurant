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
  { value: "13", label: "Restaurants" },
  { value: "1M+", label: "Happy Guests" },
  { value: "7+", label: "Years" },
];

export const STORY_HERO_DATA: StoryHeroData = {
  image: "https://cdn.anardana.in/images/gallery-hero/6.jpg",
  since: "2019",
  title: "A journey of flavours, tradition, and innovation — reimagining Indian cuisine for the modern palate.",
};