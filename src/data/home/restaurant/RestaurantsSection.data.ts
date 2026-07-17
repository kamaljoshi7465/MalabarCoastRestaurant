export interface Outlet {
  id: string;
  name: string;
  slug: string;
  image: string;
  location: string;
  city: "New Delhi" | "Haryana" | "Ranchi" | "Uttar Pradesh" | "Chandigarh";
  isOpen: boolean;
  topTags: string[];
  description: string;
  bottomTags: string[];
}

export type CityFilter = "All" | Outlet["city"];

export const OUTLETS: Outlet[] = [
  {
    id: "vegas-mall",
    name: "Anardana Vegas Mall",
    slug: "anardana-vegas-mall",
    image:
      "https://cdn.anardana.in/images/outlets/vegas/ce14fcf4-7c2a-4287-b7c2-9a271607f181.webp",
    location: "Dwarka, New Delhi",
    city: "New Delhi",
    isOpen: true,
    topTags: ["Shopping Mall", "Family Dining"],
    description:
      "Our newest outlet at Vegas Mall in Dwarka brings the authentic Anardana experience to West Delhi. A vibrant space for families, shoppers, and food lovers — expect the same bold North Indian flavours in a modern mall setting.",
    bottomTags: ["Elevated Food", "Craft Cocktails", "Tandoor Specials"],
  },
  {
    id: "midtown",
    name: "Anardana DLF MidTown Plaza",
    slug: "anardana-midtown",
    image:
      "https://cdn.anardana.in/images/outlets/mid-town/32a8a357-1c6f-4654-b102-eb72b1a0ef5e.webp",
    location: "Moti Nagar, New Delhi",
    city: "New Delhi",
    isOpen: true,
    topTags: ["Modern", "Family Dining"],
    description:
      "Located in the modern DLF MidTown Plaza at Moti Nagar, this outlet offers a vibrant dining experience with authentic Indian flavors. Perfectly accessible and welcoming for families, friends, and all occasions.",
    bottomTags: ["Elevated Food", "Craft Cocktails", "Tandoor Specials"],
  },
  {
    id: "nsp",
    name: "Anardana UnityOne Elegante Mall",
    slug: "anardana-nsp",
    image:
      "https://cdn.anardana.in/images/outlets/nsp/266a2321-9d77-42f1-b5da-1c1e72279419.webp",
    location: "Netaji Subhash Palace, New Delhi",
    city: "New Delhi",
    isOpen: true,
    topTags: ["Shopping Mall", "Family Dining"],
    description:
      "Located in the vibrant UnityOne Elegante Mall at Netaji Subhash Palace, this outlet offers a perfect dining destination for shoppers and families. With easy accessibility, modern amenities, and a welcoming atmosphere, it's an ideal spot for a delightful meal during your shopping experience.",
    bottomTags: ["Elevated Food", "Craft Cocktails", "Tandoor Specials"],
  },
  {
    id: "vasant-kunj",
    name: "Anardana Ambience Mall",
    slug: "anardana-vk",
    image:
      "https://cdn.anardana.in/images/outlets/vasant-kunj/dd3f79c2-c0cf-4f6e-9191-12ddce279663.webp",
    location: "Vasant Kunj, New Delhi",
    city: "New Delhi",
    isOpen: true,
    topTags: ["Corporate Events", "Family Dining"],
    description:
      "Located in the prestigious Ambience Mall, our Vasant Kunj outlet is perfect for corporate parties and special celebrations. Featuring spacious seating, elegant decor, and excellent facilities, it's ideal for both intimate gatherings and large group events.",
    bottomTags: ["Elevated Food", "Craft Cocktails", "Tandoor Specials"],
  },
  {
    id: "faridabad",
    name: "Anardana Pacific Mall",
    slug: "anardana-faridabad",
    image:
      "https://cdn.anardana.in/images/outlets/faridabad/fd7e1abb-bf87-4890-ac13-21947598b930.webp",
    location: "Faridabad, Haryana",
    city: "Haryana",
    isOpen: true,
    topTags: ["Family Dining", "Shopping Convenience"],
    description:
      "A vibrant dining destination in Pacific Mall, perfect for families and shoppers looking for a convenient meal. Experience authentic Indian flavors in a comfortable setting with easy access to entertainment and shopping.",
    bottomTags: ["Family Platters", "Regional Curries", "Sunday Brunch"],
  },
  {
    id: "gcr",
    name: "Anardana Golf Course Road",
    slug: "anardana-gcr",
    image:
      "https://cdn.anardana.in/images/outlets/gcr/55d46df2-42f5-4ead-8611-7614e82c96d2.webp",
    location: "Gurugram, Haryana",
    city: "Haryana",
    isOpen: true,
    topTags: ["Corporate Dining", "Business Lunch"],
    description:
      "Strategically located on Golf Course Road, this outlet caters to the corporate crowd with express lunch options and contemporary ambiance. Perfect for business meetings, client dinners, and quick professional lunches.",
    bottomTags: ["Business Lunch Sets", "Quick Bites", "Craft Cocktails"],
  },
];

export const CITY_FILTERS = [
  "All",
  "New Delhi",
  "Haryana",
  "Ranchi",
  "Uttar Pradesh",
  "Chandigarh",
] as const;
