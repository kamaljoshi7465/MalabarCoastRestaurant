export interface OutletMenus {
  food: string | null;
  drink: string | null;
  botanical: string | null;
}

export interface Outlet {
  id: string;
  name: string;
  locality: string;
  region: string;
  image: string;
  tags: string[];
  signature: string;
  outletUrl: string;
  menus: OutletMenus;
}

export interface RegionFilter {
  label: string;
  value: string;
}

export const REGIONS_DATA: RegionFilter[] = [
  { label: "All", value: "All" },
  { label: "New Delhi", value: "New Delhi" },
  { label: "Haryana", value: "Haryana" },
  { label: "Ranchi", value: "Ranchi" },
  { label: "Uttar Pradesh", value: "Uttar Pradesh" },
  { label: "Chandigarh", value: "Chandigarh" },
  { label: "Noida", value: "Noida" },
];

export const OUTLETS_DATA: Outlet[] = [
  {
    id: "vegas-mall",
    name: "Malabar Coast Vegas Mall",
    locality: "Dwarka",
    region: "New Delhi",
    image: "https://cdn.anardana.in/images/outlets/vegas/ce14fcf4-7c2a-4287-b7c2-9a271607f181.webp",
    tags: ["Shopping Mall", "Family Dining"],
    signature: "Elevated Food · Craft Cocktails · Tandoor Specials",
    outletUrl: "/restaurants/anardana-vegas-mall",
    menus: {
      food: "http://cdn.anardana.in/menus/vegas-food.pdf",
      drink: "http://cdn.anardana.in/menus/vegas-drink.pdf",
      botanical: "https://cdn.anardana.in/menus/seasonal/botanical-menu/vegas.pdf",
    },
  },
  {
    id: "midtown",
    name: "Malabar Coast DLF MidTown Plaza",
    locality: "Moti Nagar",
    region: "New Delhi",
    image: "https://cdn.anardana.in/images/outlets/mid-town/32a8a357-1c6f-4654-b102-eb72b1a0ef5e.webp",
    tags: ["Modern", "Family Dining"],
    signature: "Elevated Food · Craft Cocktails · Tandoor Specials",
    outletUrl: "/restaurants/anardana-midtown",
    menus: {
      food: "https://cdn.anardana.in/menus/midtown-food.pdf",
      drink: "https://cdn.anardana.in/menus/midtown-drink.pdf",
      botanical: "https://cdn.anardana.in/menus/seasonal/botanical-menu/midtown.pdf",
    },
  },
  {
    id: "nsp",
    name: "Malabar Coast UnityOne Elegante Mall",
    locality: "Netaji Subhash Palace",
    region: "New Delhi",
    image: "https://cdn.anardana.in/images/outlets/nsp/266a2321-9d77-42f1-b5da-1c1e72279419.webp",
    tags: ["Shopping Mall", "Family Dining"],
    signature: "Elevated Food · Craft Cocktails · Tandoor Specials",
    outletUrl: "/restaurants/anardana-nsp",
    menus: {
      food: "https://cdn.anardana.in/menus/nsp-food.pdf",
      drink: "https://cdn.anardana.in/menus/nsp-drink.pdf",
      botanical: "https://cdn.anardana.in/menus/seasonal/botanical-menu/nsp.pdf",
    },
  },
  {
    id: "ambience-vk",
    name: "Malabar Coast Ambience Mall",
    locality: "Vasant Kunj",
    region: "New Delhi",
    image: "https://cdn.anardana.in/images/outlets/vasant-kunj/dd3f79c2-c0cf-4f6e-9191-12ddce279663.webp",
    tags: ["Corporate Events", "Family Dining"],
    signature: "Elevated Food · Craft Cocktails · Tandoor Specials",
    outletUrl: "/restaurants/anardana-vk",
    menus: {
      food: "https://cdn.anardana.in/menus/vk-food.pdf",
      drink: "https://cdn.anardana.in/menus/vk-drink.pdf",
      botanical: "https://cdn.anardana.in/menus/seasonal/botanical-menu/vk.pdf",
    },
  },
  {
    id: "faridabad",
    name: "Malabar Coast Pacific Mall",
    locality: "Faridabad",
    region: "Haryana",
    image: "https://cdn.anardana.in/images/outlets/faridabad/fd7e1abb-bf87-4890-ac13-21947598b930.webp",
    tags: ["Family Dining", "Shopping Convenience"],
    signature: "Family Platters · Regional Curries · Sunday Brunch",
    outletUrl: "/restaurants/anardana-faridabad",
    menus: {
      food: "https://cdn.anardana.in/menus/faridabad-food.pdf",
      drink: "https://cdn.anardana.in/menus/faridabad-drink.pdf",
      botanical: "https://cdn.anardana.in/menus/seasonal/botanical-menu/faridabad.pdf",
    },
  },
  {
    id: "gcr",
    name: "Malabar Coast Golf Course Road",
    locality: "Gurugram",
    region: "Haryana",
    image: "https://cdn.anardana.in/images/outlets/gcr/55d46df2-42f5-4ead-8611-7614e82c96d2.webp",
    tags: ["Corporate Dining", "Business Lunch"],
    signature: "Business Lunch Sets · Quick Bites · Craft Cocktails",
    outletUrl: "/restaurants/anardana-gcr",
    menus: {
      food: "https://cdn.anardana.in/menus/gcr-food.pdf",
      drink: "https://cdn.anardana.in/menus/gcr-drink.pdf",
      botanical: "https://cdn.anardana.in/menus/seasonal/botanical-menu/sco.pdf",
    },
  },
  {
    id: "ranchi",
    name: "Malabar Coast Ranchi",
    locality: "Ranchi",
    region: "Ranchi",
    image: "https://cdn.anardana.in/images/outlets/ranchi/ae99c045-504f-4867-bf68-1734e9a773d2.webp",
    tags: ["Scenic Views", "Natural Light"],
    signature: "Regional Specialties · Tandoor Dishes · Traditional Thalis",
    outletUrl: "/restaurants/anardana-ranchi",
    menus: {
      food: "https://cdn.anardana.in/menus/ranchi-food.pdf",
      drink: "https://cdn.anardana.in/menus/ranchi-drink.pdf",
      botanical: "https://cdn.anardana.in/menus/seasonal/botanical-menu/ranchi.pdf",
    },
  },
  {
    id: "noida-max-square",
    name: "Malabar Coast Max Square",
    locality: "Noida",
    region: "Uttar Pradesh",
    image: "https://cdn.anardana.in/images/outlets/noida/1b52324e-be30-4fc7-9b24-cbe804d2e9f5.webp",
    tags: ["Corporate Events", "Business Meetings"],
    signature: "Contemporary Indian Cuisine · Signature Cocktails · Business Lunch Specials",
    outletUrl: "/restaurants/anardana-noida",
    menus: {
      food: "https://cdn.anardana.in/menus/noida-food.pdf",
      drink: "https://cdn.anardana.in/menus/noida-drink.pdf",
      botanical: "https://cdn.anardana.in/menus/seasonal/botanical-menu/noida.pdf",
    },
  },
  {
    id: "saket",
    name: "Malabar Coast DLF Avenue",
    locality: "Saket",
    region: "New Delhi",
    image: "https://cdn.anardana.in/images/outlets/saket/7513496b-43d2-4248-b0e1-d8009531e9df.webp",
    tags: ["Upscale Casual", "Shopping District"],
    signature: "Elevated Food · Premium Cocktails · Gourmet Indian Cuisine",
    outletUrl: "/restaurants/anardana-saket",
    menus: {
      food: "https://cdn.anardana.in/menus/saket-food.pdf",
      drink: "https://cdn.anardana.in/menus/saket-drink.pdf",
      botanical: "https://cdn.anardana.in/menus/seasonal/botanical-menu/saket.pdf",
    },
  },
  {
    id: "sangam",
    name: "Malabar Coast Sangam Courtyard",
    locality: "R.K Puram",
    region: "New Delhi",
    image: "https://cdn.anardana.in/images/outlets/sangam/fa9f507b-be15-4f34-8547-447cc1a17f55.webp",
    tags: ["Neighborhood Favorite", "Family Gatherings"],
    signature: "Family Platters · Regional Curries · Traditional Thalis",
    outletUrl: "/restaurants/anardana-sangam",
    menus: {
      food: "https://cdn.anardana.in/menus/sangam-food.pdf",
      drink: "https://cdn.anardana.in/menus/sangam-drink.pdf",
      botanical: "https://cdn.anardana.in/menus/seasonal/botanical-menu/sangam.pdf",
    },
  },
  {
    id: "m3m",
    name: "Malabar Coast M3M IFC",
    locality: "Gurugram",
    region: "Haryana",
    image: "https://cdn.anardana.in/images/outlets/m3m/e19c52fa-161a-4a0f-90cd-1e72dc97a769.webp",
    tags: ["Financial District", "Corporate Hub"],
    signature: "Business Lunch Sets · Premium Cocktails · Executive Platters",
    outletUrl: "/restaurants/anardana-m3m",
    menus: {
      food: "https://cdn.anardana.in/menus/m3m-food.pdf",
      drink: "https://cdn.anardana.in/menus/m3m-drink.pdf",
      botanical: "https://cdn.anardana.in/menus/seasonal/botanical-menu/m3m.pdf",
    },
  },
  {
    id: "chandigarh",
    name: "Malabar Coast City Emporium Mall",
    locality: "Industrial Area Phase I",
    region: "Chandigarh",
    image: "https://cdn.anardana.in/images/outlets/chd/DSC03994-HDR Topaz Bloom 2x scale.jpg",
    tags: ["Entertainment Hub", "Family Friendly"],
    signature: "North Indian Favorites · Pre-Movie Combos · Punjabi Specialties",
    outletUrl: "/restaurants/anardana-chd",
    menus: {
      food: "https://cdn.anardana.in/menus/chd-food.pdf",
      drink: "https://cdn.anardana.in/menus/chd-drink.pdf",
      botanical: "https://cdn.anardana.in/menus/seasonal/botanical-menu/chandigarh.pdf",
    },
  },
  {
    id: "kkd",
    name: "Malabar Coast East Delhi",
    locality: "Karkardooma",
    region: "New Delhi",
    image: "https://cdn.anardana.in/images/outlets/kkd/99044b5d-c7d9-4d34-9729-a147c55abffd.webp",
    tags: ["Residential Area", "Local Favorite"],
    signature: "Traditional Thalis · Street Food Favorites · Regional Specialties",
    outletUrl: "/restaurants/anardana-kkd",
    menus: {
      food: "https://cdn.anardana.in/menus/kkd-food.pdf",
      drink: "https://cdn.anardana.in/menus/kkd-drink.pdf",
      botanical: "https://cdn.anardana.in/menus/seasonal/botanical-menu/kkd.pdf",
    },
  },
  {
    id: "aditya-ancora",
    name: "Malabar Coast Aditya Ancora",
    locality: "Sector 50",
    region: "Noida",
    image: "/download.jpg",
    tags: ["Shopping Center", "Family Dining"],
    signature: "Elevated Food · Craft Cocktails · Tandoor Specials",
    outletUrl: "/restaurants/anardana-aditya-ancora",
    menus: {
      food: null,
      drink: null,
      botanical: null,
    },
  },
];
