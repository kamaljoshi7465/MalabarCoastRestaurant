import KokumShikanjiImage from "../../../assets/images/Drinks-Mocktail/Kokum-Shikanji.webp"
import TenderCoconutBlastImage from "../../../assets/images/Drinks-Mocktail/Tender-Coconut-Blast.webp"
import KulukkiSarbatImage from "../../../assets/images/Drinks-Mocktail/Kulukki-Sarbat.webp"

export interface Drink {
  name: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
}

export const DRINKS: Drink[] = [
  {
    name: "Kokum Shikanji",
    description: "A revitalizing blend of kokum, hand-crafted spices, lemon and a hint of mint. This traditional coastal cooler uplifts your senses with a tangy, sweet and sour refreshment.",
    image: KokumShikanjiImage,
    category: "Mocktail",
    tags: ["Signature", "Refreshing"]
  },
  {
    name: "Tender Coconut Blast",
    description: "A luscious fusion of tender coconut water and cream with a touch of natural sweetness. Smooth, hydrating and tropical – a perfect escape in every sip.",
    image: TenderCoconutBlastImage,
    category: "Mocktail",
    tags: ["Signature", "Tropical"]
  },
  {
    name: "Kulukki Sarbat",
    description: "A traditional Kerala favourite made with lime, mint, basil seeds (sabja) and a hint of natural sweetness, hand-shaken to perfection. Zesty, cooling and incredibly refreshing.",
    image: KulukkiSarbatImage,
    category: "Mocktail",
    tags: ["Signature", "Energizing"]
  },
  {
    name: "Kokum Shikanji",
    description: "A revitalizing blend of kokum, hand-crafted spices, lemon and a hint of mint. This traditional coastal cooler uplifts your senses with a tangy, sweet and sour refreshment.",
    image: KokumShikanjiImage,
    category: "Mocktail",
    tags: ["Signature", "Refreshing"]
  },
  {
    name: "Tender Coconut Blast",
    description: "A luscious fusion of tender coconut water and cream with a touch of natural sweetness. Smooth, hydrating and tropical – a perfect escape in every sip.",
    image: TenderCoconutBlastImage,
    category: "Mocktail",
    tags: ["Signature", "Tropical"]
  },
  {
    name: "Kulukki Sarbat",
    description: "A traditional Kerala favourite made with lime, mint, basil seeds (sabja) and a hint of natural sweetness, hand-shaken to perfection. Zesty, cooling and incredibly refreshing.",
    image: KulukkiSarbatImage,
    category: "Mocktail",
    tags: ["Signature", "Energizing"]
  },
];