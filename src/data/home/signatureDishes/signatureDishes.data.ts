export type DietType = "veg" | "non-veg";

export type TagVariant = "special" | "dessert" | "main" | "appetizer";

export interface Dish {
  id: string;
  name: string;
  description: string;
  image: string;
  diet: DietType;
  tag: TagVariant;
}

export const DIET_STYLES: Record<DietType, string> = {
  veg: "bg-green-100 text-green-700 border border-green-200",
  "non-veg": "bg-red-100 text-red-700 border border-red-200",
};

export const TAG_STYLES: Record<TagVariant, string> = {
  special: "bg-purple-500 text-white",
  dessert: "bg-pink-500 text-white",
  main: "bg-red-500 text-white",
  appetizer: "bg-orange-500 text-white",
};

export const DIET_LABELS: Record<DietType, string> = {
  veg: "Veg",
  "non-veg": "Non-Veg",
};

export const dishes: Dish[] = [
  {
    id: "chicken-kurchan-bao-taco",
    name: "Chicken Kurchan Bao Taco",
    description:
      "Steamed bao filled with smoky chicken khurchan, laced with garlic yoghurt tahini and finished with pomegranate molasses",
    image:
      "https://cdn.anardana.in/images/gallery/food/Chicken%20Khruchan%20Bao%20Taco.webp",
    diet: "non-veg",
    tag: "special",
  },
  {
    id: "kunafa-bird-nest",
    name: "Kunafa Bird Nest",
    description: "Crisp kunafa nest topped with rabdi and gulab jamun",
    image: "https://cdn.anardana.in/images/signature-dishes/DSC00240-Edit.JPG",
    diet: "veg",
    tag: "dessert",
  },
  {
    id: "gulkand-paan-tikki",
    name: "Gulkand Paan Tikki",
    description:
      "Soft patties infused with fragrant betel leaf & sweet gulkand, layered with yogurt and tangy chutneys, carrying nostalgia in every bite",
    image: "https://cdn.anardana.in/images/signature-dishes/DSC00264-Edit.JPG",
    diet: "veg",
    tag: "special",
  },
  {
    id: "bhetki-fish-pollichathu",
    name: "Bhetki Fish Pollichathu",
    description:
      "Fresh bhetki marinated with Malabar spices, wrapped and pan-seared in banana leaf, carrying coastal spices",
    image: "https://cdn.anardana.in/images/signature-dishes/DSC00227-Edit.JPG",
    diet: "non-veg",
    tag: "main",
  },
  {
    id: "anardana-shahi-paneer",
    name: "Anardana Shahi Paneer",
    description:
      "Paneer simmered in a cashew and tomato gravy, velvety in texture and layered with richness",
    image: "https://cdn.anardana.in/images/signature-dishes/DSC00302-Edit.JPG",
    diet: "veg",
    tag: "main",
  },
  {
    id: "bhara-bhara-veg-kebab-platter",
    name: "Bhara-Bhara Veg Kebab Platter",
    description:
      "Ricotta Dahi Kebab, Edamame Seekh, Paneer Tikka and Mushroom Galouti, grilled to smoky tenderness with chutneys that lift the flavour",
    image: "https://cdn.anardana.in/images/signature-dishes/DSC00028-Edit.JPG",
    diet: "veg",
    tag: "appetizer",
  },
  {
    id: "tangra-chilli-chicken",
    name: "Tangra Chilli Chicken",
    description:
      "Paneer cubes and peppers wok-tossed in a smoky chilli sauce, echoing the fiery spirit of Tangra's kitchen",
    image: "https://cdn.anardana.in/images/signature-dishes/DSC00106-Edit.JPG",
    diet: "non-veg",
    tag: "appetizer",
  },
  {
    id: "chicken-changezi-cornetto",
    name: "Chicken Changezi Cornetto",
    description:
      "Crisp warqi paratha cones filled with spiced chicken and paired with a cooling mint dip, offering a crunch in every bite",
    image: "https://cdn.anardana.in/images/signature-dishes/DSC09852-Edit.JPG",
    diet: "non-veg",
    tag: "appetizer",
  },
];
