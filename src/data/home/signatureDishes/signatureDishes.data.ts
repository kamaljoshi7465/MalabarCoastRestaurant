export type TagVariant = "Signature" | "Veg" | "Dessert" | "Seafood";

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
};

export const dishes: Dish[] = [
  {
    id: "pollichathu-paneer",
    name: "Pollichathu Paneer",
    description:
      "Soft paneer marinated in authentic Kerala spices, wrapped in banana leaf and slow-cooked to lock in rich smoky flavours.",
    image: "https://cdn.anardana.in/images/signature-dishes/DSC09852-Edit.JPG",
    tag: ["Signature", "Veg"],
  },
  {
    id: "tender-coconut-payasam",
    name: "Tender Coconut Payasam",
    description:
      "A traditional Kerala dessert made with tender coconut, creamy milk and subtle sweetness.",
    image: "https://cdn.anardana.in/images/signature-dishes/DSC09852-Edit.JPG",
    tag: ["Signature", "Dessert"],
  },
  {
    id: "prawn-butter-pepper-garlic",
    name: "Prawn Butter Pepper Garlic",
    description:
      "Succulent prawns tossed in aromatic butter, roasted garlic and freshly cracked black pepper.",
    image: "https://cdn.anardana.in/images/signature-dishes/DSC09852-Edit.JPG",
    tag: ["Signature", "Seafood"],
  },
  {
    id: "pomfret-masala-fry",
    name: "Pomfret Masala Fry",
    description:
      "Whole pomfret marinated with Malabar spices and perfectly pan-fried for a crispy, flavourful finish.",
    image: "https://cdn.anardana.in/images/signature-dishes/DSC09852-Edit.JPG",
    tag: ["Signature", "Seafood"],
  },
  {
    id: "sea-crab-butter-pepper-garlic",
    name: "Sea Crab Butter Pepper Garlic",
    description:
      "Fresh sea crab cooked in a rich butter, garlic and crushed black pepper sauce for a bold coastal flavour.",
    image: "https://cdn.anardana.in/images/signature-dishes/DSC09852-Edit.JPG",
    tag: ["Signature", "Seafood"],
  },
];
