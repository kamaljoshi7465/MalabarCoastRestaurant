export interface FoodStory {
  href: string;
  videoSrc: string;
  poster: string;
  category: string;
  title: string;
  description: string;
}

export const foodStories: FoodStory[] = [
  {
    href: "/stories/anardana-shahi-paneer",
    videoSrc: "https://cdn.anardana.in/videos/anardana-shahi-paneer/video.mp4",
    poster: "https://cdn.anardana.in/videos/anardana-shahi-paneer/cover.jpg",
    category: "main course",
    title: "Malabar Coast Shahi Paneer",
    description:
      "Soft cottage cheese cubes slow-simmered in a royal cashew-cream gravy kissed with dried pomegranate — the richest paneer on our menu.",
  },
  {
    href: "/stories/quinao-avocado-bhel",
    videoSrc: "https://cdn.anardana.in/videos/quinao-avocado-bhel/video.mp4",
    poster: "https://cdn.anardana.in/videos/quinao-avocado-bhel/cover.jpg",
    category: "starter",
    title: "Quinao Avocado Bhel",
    description:
      "A modern chaat classic — puffed quinao tossed with creamy avocado, tangy tamarind, and a crunch of sev.",
  },
  {
    href: "/stories/chicken-khurchan-bao-taco",
    videoSrc: "https://cdn.anardana.in/videos/chicken-khurchan-bao-taco/video.mp4",
    poster: "https://cdn.anardana.in/videos/chicken-khurchan-bao-taco/cover.jpg",
    category: "starter",
    title: "Chicken Khurchan Bao Taco",
    description:
      "Tender chicken khurchan — scraped from the tawa with caramelised onions and peppers — tucked into a pillowy bao taco.",
  },
];