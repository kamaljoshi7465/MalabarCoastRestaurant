import aboutOurStory from "../../../assets/images/AboutSection/about us.png";
import { STATS } from "../../common/stats.data";

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
  {
    value: STATS?.outlets?.value?.toString(),
    label: "Restaurants",
  },
  {
    value: STATS.happyGuests.value,
    label: "Happy Guests",
  },
  {
    value: STATS.years.value,
    label: "Years",
  },
];

export const STORY_HERO_DATA: StoryHeroData = {
  image: aboutOurStory,
  since: "2020",
  title: "A journey of flavours, tradition, and innovation — reimagining Indian cuisine for the modern palate.",
};