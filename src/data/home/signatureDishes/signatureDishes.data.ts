import chickenGheeRoast from "../../../assets/images/Signature/Chicken-Ghee-Roast.webp";
import keralaChickenCurry from "../../../assets/images/Signature/Kerala-Chicken-Curry.jpg.webp";
import pomfretTawaFry from "../../../assets/images/Signature/Pomfret Tawa Fry.webp";
import pomfretPolichathu from "../../../assets/images/Signature/Pomfret-Polichathu.webp";
import TMCprawnMoilee from "../../../assets/images/Signature/TMC-Prawn-Moilee.webp";
import TMCvegetableKurma from "../../../assets/images/Signature/TMC Vegetable Kurma1.webp";
import vegetableMangoCurry from "../../../assets/images/Signature/Vegetable-Mango-Curry.JPG.webp";
import paneerPolichathu from "../../../assets/images/Signature/Paneer-Polichathu.webp";
import TMCtenderCoconutPayasam from "../../../assets/images/Signature/TMC-Tender-Coconut-Payasam.webp";

export type TagVariant =
  | "Signature"
  | "Veg"
  | "Dessert"
  | "Seafood"
  | "Coastal"
  | "Kerala"
  | "Authentic"
  | "Curry"
  | "ComfortFood"
  | "Mangalorean"
  | "Ghee Roasted"
  | "Spicy"
  | "Traditional"
  | "Coconut"
  | "Mild"
  | "Vegetarian"
  | "Creamy"
  | "Mango"
  | "Tangy"
  | "Paneer"
  | "Sweet";

export interface Dish {
  id: string;
  name: string;
  description: string;
  image: string;
  tag: TagVariant[];
}

export const TAG_STYLES: Record<TagVariant, string> = {
  Signature: "bg-purple-500 text-white",
  Veg: "bg-green-500 text-white",
  Dessert: "bg-pink-500 text-white",
  Seafood: "bg-blue-500 text-white",

  Coastal: "bg-teal-500 text-white",
  Kerala: "bg-emerald-600 text-white",
  Authentic: "bg-orange-500 text-white",
  Curry: "bg-amber-500 text-white",
  ComfortFood: "bg-yellow-500 text-white",
  Mangalorean: "bg-red-500 text-white",
  "Ghee Roasted": "bg-orange-600 text-white",
  Spicy: "bg-red-600 text-white",
  Traditional: "bg-indigo-500 text-white",
  Coconut: "bg-cyan-600 text-white",
  Mild: "bg-sky-500 text-white",
  Vegetarian: "bg-green-600 text-white",
  Creamy: "bg-violet-500 text-white",
  Mango: "bg-yellow-600 text-white",
  Tangy: "bg-lime-600 text-white",
  Paneer: "bg-rose-500 text-white",
  Sweet: "bg-pink-600 text-white",
};

export const dishes: Dish[] = [
  {
    id: "Malabar-Pomfret-Tawa-Fry",
    name: "Malabar Pomfret Tawa Fry",
    description:
      "Fresh pomfret marinated with aromatic coastal spices and pan-seared on the tawa to perfection, delivering a crisp exterior and tender, flavourful fish.",
    image: pomfretTawaFry,
    tag: ["Seafood", "Coastal"],
  },
  {
    id: "Kerala-Chicken-Curry",
    name: "Kerala Chicken Curry",
    description:
      "Tender chicken simmered in a rich blend of Kerala spices, coconut and aromatic curry leaves for an authentic, comforting coastal flavour.",
    image: keralaChickenCurry,
    tag: ["Authentic", "Curry", "ComfortFood"],
  },
  {
    id: "Mangalorean-Chicken-Ghee-Roast",
    name: "Mangalorean Chicken Ghee Roast",
    description:
      "Succulent chicken slow-cooked with roasted spices and generous ghee, creating a rich, bold and irresistibly aromatic South Indian classic.",
    image: chickenGheeRoast,
    tag: ["Mangalorean", "Ghee Roasted", "Spicy"],
  },
  {
    id: "Pomfret-Polichatu",
    name: "Pomfret Polichatu",
    description:
      "Whole pomfret coated in a fragrant Kerala masala, wrapped and cooked to lock in its delicate flavours and coastal aromas.",
    image: pomfretPolichathu,
    tag: ["Seafood", "Coastal", "Traditional"],
  },
  {
    id: "Prawn-Moilee",
    name: "Prawn Moilee",
    description:
      "Juicy prawns gently simmered in a delicate coconut milk gravy infused with turmeric, green chilli and aromatic Kerala spices.",
    image: TMCprawnMoilee,
    tag: ["Seafood", "Coconut", "Mild"],
  },
  {
    id: "Vegetable-Kurma",
    name: "Vegetable Kurma",
    description:
      "Seasonal vegetables cooked in a creamy, aromatic coconut-based gravy enriched with traditional South Indian spices.",
    image: TMCvegetableKurma,
    tag: ["Vegetarian", "Coconut", "Creamy"],
  },
  {
    id: "Vegetable-Mango-Curry",
    name: "Vegetable Mango Curry",
    description:
      "Fresh vegetables and tangy raw mango come together in a delicately spiced Kerala-style curry, balancing sweet, sour and savoury flavours.",
    image: vegetableMangoCurry,
    tag: ["Vegetarian", "Mango", "Tangy"],
  },
  {
    id: "Paneer-Polichatu",
    name: "Paneer Polichatu",
    description:
      "Soft paneer wrapped in a fragrant Kerala-style masala and cooked to perfection, bringing together rich spices and authentic coastal flavours.",
    image: paneerPolichathu,
    tag: ["Vegetarian", "Paneer"],
  },
  {
    id: "Coconut-Payasam",
    name: "Coconut Payasam",
    description:
      "A luscious Kerala dessert made with coconut and traditional ingredients, delicately sweetened and finished with comforting South Indian flavours.",
    image: TMCtenderCoconutPayasam,
    tag: ["Dessert", "Traditional", "Sweet"],
  },
];