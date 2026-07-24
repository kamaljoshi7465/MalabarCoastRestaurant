export type FoodStoryCategory = "starter" | "main course" | "dessert";

export interface FoodStory {
  href: string;
  videoSrc: string;
  poster: string;
  category: FoodStoryCategory;
  title: string;
  description: string;
}

export const FOOD_STORY_CATEGORIES = ["all", "starter", "main course", "dessert"] as const;

export const foodStories: FoodStory[] = [
  {
    href: "/stories/anardana-shahi-paneer",
    videoSrc: "https://cdn.anardana.in/videos/anardana-shahi-paneer/video.mp4",
    poster: "https://cdn.anardana.in/videos/anardana-shahi-paneer/cover.jpg",
    category: "main course",
    title: "Anardana Shahi Paneer",
    description: "Soft cottage cheese cubes slow-simmered in a royal cashew-cream gravy kissed with dried pomegranate — the richest paneer on our menu.",
  },
  {
    href: "/stories/quinao-avocado-bhel",
    videoSrc: "https://cdn.anardana.in/videos/quinao-avocado-bhel/video.mp4",
    poster: "https://cdn.anardana.in/videos/quinao-avocado-bhel/cover.jpg",
    category: "starter",
    title: "Quinao Avocado Bhel",
    description: "A modern chaat classic — puffed quinao tossed with creamy avocado, tangy tamarind, and a crunch of sev.",
  },
  {
    href: "/stories/chicken-khurchan-bao-taco",
    videoSrc: "https://cdn.anardana.in/videos/chicken-khurchan-bao-taco/video.mp4",
    poster: "https://cdn.anardana.in/videos/chicken-khurchan-bao-taco/cover.jpg",
    category: "starter",
    title: "Chicken Khurchan Bao Taco",
    description: "Tender chicken khurchan — scraped from the tawa with caramelised onions and peppers — tucked into a pillowy bao taco.",
  },
  {
    href: "/stories/beetroot-kakori-kebab",
    videoSrc: "https://cdn.anardana.in/videos/beetroot-kakori-kebab/video.mp4",
    poster: "https://cdn.anardana.in/videos/beetroot-kakori-kebab/cover.png",
    category: "starter",
    title: "Beetroot Kakori Kebab",
    description: "A vegetarian tribute to the legendary Kakori — earthy beetroot hand-pounded with spices and char-grilled to silky tenderness.",
  },
  {
    href: "/stories/kulfi-faluda",
    videoSrc: "https://cdn.anardana.in/videos/kulfi-faluda/video.mp4",
    poster: "https://cdn.anardana.in/videos/kulfi-faluda/cover.png",
    category: "dessert",
    title: "Kulfi Faluda",
    description: "Slow-cooked rabri kulfi paired with rose-scented faluda noodles — a Mughal-era dessert refined for the modern palate.",
  },
  {
    href: "/stories/punjabi-mutton-rara",
    videoSrc: "https://cdn.anardana.in/videos/punjabi-mutton-rara/video.mp4",
    poster: "https://cdn.anardana.in/videos/punjabi-mutton-rara/cover.png",
    category: "main course",
    title: "Punjabi Mutton Rara",
    description: "Tender mutton in a robust, twice-cooked gravy with hand-minced kheema — Punjab's rustic roadside classic.",
  },
  {
    href: "/stories/anardana-old-delhi-seekh-kebab",
    videoSrc: "https://cdn.anardana.in/videos/anardana-old-delhi-seekh-kebab/video.mp4",
    poster: "https://cdn.anardana.in/videos/anardana-old-delhi-seekh-kebab/cover.png",
    category: "main course",
    title: "Anardana Old Delhi Seekh Kebab",
    description: "Our signature seekh — slow-cooked mince kissed with dried pomegranate seeds, grilled over live charcoal in true Old Delhi style.",
  },
  {
    href: "/stories/murgh-pardah-seekh-kebab",
    videoSrc: "https://cdn.anardana.in/videos/murgh-pardah-seekh-kebab/video.mp4",
    poster: "https://cdn.anardana.in/videos/murgh-pardah-seekh-kebab/cover.png",
    category: "starter",
    title: "Murgh Pardah Seekh Kebab",
    description: "Delicate chicken seekh wrapped in a gossamer pardah, sealed with a twist of flaky bread — theatre and flavour on a single skewer.",
  },
  {
    href: "/stories/gulkand-paan-tikki",
    videoSrc: "https://cdn.anardana.in/videos/gulkand-paan-tikki/video.mp4",
    poster: "https://cdn.anardana.in/videos/gulkand-paan-tikki/cover.jpg",
    category: "starter",
    title: "Gulkand Paan Tikki",
    description: "A crisp golden tikki hiding a fragrant heart of gulkand and paan — street-food nostalgia reimagined as a fine-dining starter.",
  },
  {
    href: "/stories/dal-muradabadi",
    videoSrc: "https://cdn.anardana.in/videos/dal-muradabadi/video.mp4",
    poster: "https://cdn.anardana.in/videos/dal-muradabadi/cover.jpg",
    category: "starter",
    title: "Dal Muradabadi",
    description: "Paper-thin chana dal slow-simmered with whole spices, finished with a sizzle of pure ghee — the iconic bowl from the streets of Muradabad.",
  },
  {
    href: "/stories/mutton-cooker-wala",
    videoSrc: "https://cdn.anardana.in/videos/mutton-cooker-wala/video.mp4",
    poster: "https://cdn.anardana.in/videos/mutton-cooker-wala/cover.png",
    category: "main course",
    title: "Mutton Cooker Wala",
    description: "Bone-in mutton pressure-cooked with whole garam masala until the marrow melts into a dark, intensely flavoured shorba.",
  },
  {
    href: "/stories/khathal-biryani",
    videoSrc: "https://cdn.anardana.in/videos/khathal-biryani/video.mp4",
    poster: "https://cdn.anardana.in/videos/khathal-biryani/cover.png",
    category: "main course",
    title: "Khathal Biryani",
    description: "Jackfruit layered with long-grain basmati and sealed under a dum crust — a rare vegetarian biryani with the depth of a slow-cooked korma.",
  },
];