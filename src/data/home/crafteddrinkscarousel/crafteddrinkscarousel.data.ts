import AampannaImage from "../../../assets/images/Drinks-Mocktail/Aampanna.webp"
import ButterMilk from "../../../assets/images/Drinks-Mocktail/Butter-Milk.webp"
import MasalaCoke from "../../../assets/images/Drinks-Mocktail/Masala-Coke.webp"
import Panakkam from "../../../assets/images/Drinks-Mocktail/Panakkam.webp"
import TenderCoconutMilkShake from "../../../assets/images/Drinks-Mocktail/Tender-Coconut-Milk-Shake.webp"
import TMCKokumSharbatShikanji from "../../../assets/images/Drinks-Mocktail/TMC-Kokum-Sharbat-Shikanji.webp"
import VerginMojito from "../../../assets/images/Drinks-Mocktail/Vergin-Mojito.webp"

export interface Drink {
  name: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
}

export const DRINKS: Drink[] = [
  {
    name: "Aampanna",
    description: "",
    image: AampannaImage,
    category: "Mocktail",
    tags: ["Signature", "Refreshing"]
  },
  {
    name: "Butter Milk",
    description: "",
    image: ButterMilk,
    category: "Mocktail",
    tags: ["Signature", "Tropical"]
  },
  {
    name: "Masala Coke",
    description: "",
    image: MasalaCoke,
    category: "Mocktail",
    tags: ["Signature", "Energizing"]
  },
  {
    name: "Panakkam",
    description: "",
    image: Panakkam,
    category: "Mocktail",
    tags: ["Signature", "Refreshing"]
  },
  {
    name: "Tender Coconut Milk Shake",
    description: "",
    image: TenderCoconutMilkShake,
    category: "Mocktail",
    tags: ["Signature", "Tropical"]
  },
  {
    name: "TMC Kokum Sharbat_Shikanji",
    description: "",
    image: TMCKokumSharbatShikanji,
    category: "Mocktail",
    tags: ["Signature", "Energizing"]
  },
  {
    name: "Vergin Mojito",
    description: "",
    image: VerginMojito,
    category: "Mocktail",
    tags: ["Signature", "Energizing"]
  },
];