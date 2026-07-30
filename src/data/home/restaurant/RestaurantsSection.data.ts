export interface Outlet {
  id: string;
  name: string;
  slug: string;
  image: string;
  location: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    weekday: string;
    weekend: string;
  };
  gallery: string[];
  menu: string;
  menus: {
    food: string;
    mocktail: string;
    kittyParty: string;
  }
  reservations: {
    swiggyUrl?: string;
    zomatoUrl?: string;
    eazydinerUrl?: string;
    districtUrl?: string;
  }
  city: "Delhi" | "Gurugram" | "Noida" | "Indore";
  isOpen: boolean;
  specialtyTags: string[];
  specialties: string[];
  amenities: string[];
  description: string;
  // bottomTags: string[];
  googleMapLink?: string;
}

export type CityFilter = "All" | Outlet["city"];

export const OUTLETS: Outlet[] = [
  {
    id: "0001",
    name: "M3M Atrium 57",
    slug: "m3m-atrium-57",
    image: "https://cdn.anardana.in/images/outlets/vegas/ce14fcf4-7c2a-4287-b7c2-9a271607f181.webp",
    location: "M3M Atrium Sector 57, Gurugram",
    address: "Ground Floor, M3M Atrium, Shop Number 6,7,8, near THE HDFC SCHOOL, Sector 57, Gurugram, Haryana 122011",
    city: "Gurugram",
    phone: "09971100955",
    email: "themalabarcoastt@gmail.com",
    hours: {
      weekday: "09:00 AM – 11:30 PM",
      weekend: "09:00 AM – 11:30 PM"
    },
    gallery: ["https://cdn.anardana.in/images/outlets/vegas/ce14fcf4-7c2a-4287-b7c2-9a271607f181.webp"],
    menus: {
      food: "https://cdn.anardana.in/menus/vk-food.pdf",
      mocktail: "https://cdn.anardana.in/menus/vk-drink.pdf",
      kittyParty: "https://cdn.anardana.in/menus/seasonal/botanical-menu/vk.pdf",
    },
    menu: "gurgaon-",
    reservations: {
      swiggyUrl: "https://www.swiggy.com/restaurants/gurgaon/sector-57/the-malabar-coast-1100210/dineout",
      zomatoUrl: "https://www.zomato.com/ncr/the-malabar-coast-sector-57-gurgaon",
      eazydinerUrl: "https://www.eazydiner.com/delhi-ncr/the-malabar-coast-by-appumm-house-sector-66-gurgaon-683269",
    },
    isOpen: true,
    specialtyTags: ['Family Dining', 'Authentic coastal cuisine'], // vibes, topTags
    description: "Welcome to The Malabar Coast — proudly known as the Best South Indian Restaurant in Gurgaon, serving authentic Kerala food and coastal delicacies inspired by the rich culinary heritage of India’s southern shores. At The Malabar Coast, we bring you the bold, aromatic, and comforting flavours of the Malabar Coast—from Kerala’s tranquil backwaters to the fiery tastes of Mangalore, Chettinad, Andhra, Tamil Nadu and Goa. Signature must-try dishes: 🍤 Prawn Andhra Chilli Fry 🍛 Mangalorean Fish Curry with Malabar Parotta 🍗 Chicken Ghee Roast with Neer Dosa 🫓 Crispy Dosa with Sambar & Chutney 🌿 Banana Leaf Meal 🐟 Pomfret Tawa Fry Whether you’re craving bold spices or soulful comfort food, The Malabar Coast promises an unforgettable journey.",
    amenities: ["Family Friendly", "Bar", "Parking", "WiFi"], //bottomTags, 
    specialties: ["Coastal Cuisine", "Fresh Seafood", "Signature Mocktails", "Traditional Desserts", "Family Dining Experience"],
    googleMapLink: "https://www.google.com/maps/dir//The+Malabar+Coast,+Ground+Floor,+M3M+Atrium,+Shop+Number+6,7,8,+near+THE+HDFC+SCHOOL,+Sector+57,+Gurugram,+Haryana+122011/@28.4196864,77.070336,14z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x390d23b0236887b7:0x3b2246cba1e4ffae!2m2!1d77.0750982!2d28.4238389?entry=ttu&g_ep=EgoyMDI2MDcyMC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: "0002",
    name: "The Appumm house",
    slug: "the-appumm-house",
    image: "https://cdn.anardana.in/images/outlets/vegas/ce14fcf4-7c2a-4287-b7c2-9a271607f181.webp",
    location: "COWRKS Noida 62, Tower 5, Candor Techspace",
    address: "Block B, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309",
    city: "Noida",
    phone: "08506936320",
    email: "themalabarcostmkt2@gmail.com",
    hours: {
      weekday: "09:30 AM – 11:00 PM",
      weekend: "09:30 AM – 11:00 PM"
    },
    gallery: ["https://cdn.anardana.in/images/outlets/vegas/ce14fcf4-7c2a-4287-b7c2-9a271607f181.webp"],
    menu: "https://www.zomato.com/ncr/the-malabar-coast-by-appumm-house-sector-62-noida/book",
    menus: {
      food: "https://cdn.anardana.in/menus/vk-food.pdf",
      mocktail: "https://cdn.anardana.in/menus/vk-drink.pdf",
      kittyParty: "https://cdn.anardana.in/menus/seasonal/botanical-menu/vk.pdf",
    },
    reservations: {
      swiggyUrl: "https://www.swiggy.com/restaurants/noida-1/sector-62/the-malabar-coast-by-the-appum-house-727741/dineout",
      zomatoUrl: "https://www.zomato.com/ncr/the-malabar-coast-by-appumm-house-sector-62-noida/book",
      eazydinerUrl: "https://www.eazydiner.com/delhi-ncr/the-malabar-coast-by-appumm-house-sector-66-gurgaon-688946",
      districtUrl: "https://www.district.in/dining/ncr/the-malabar-coast-by-appumm-house-sector-62-noida/book?utm_source=rwg",
    },
    isOpen: true,
    specialtyTags: ['Family Dining', 'Authentic coastal cuisine'], // vibes, topTags
    description: "Welcome to The Malabar Coast — proudly known as the Best South Indian Restaurant in Noida, serving authentic Kerala food and coastal delicacies inspired by the rich culinary heritage of India’s southern shores. At The Malabar Coast, we bring you the bold, aromatic, and comforting flavours of the Malabar Coast — from Kerala’s tranquil backwaters to the fiery tastes of Mangalore, Chettinad, Andhra, Tamil Nadu and Goa. Signature must-try dishes: 🍤 Prawn Andhra Chilli Fry 🍛 Mangalorean Fish Curry with Malabar Parotta 🍗 Chicken Ghee Roast with Neer Dosa 🫓 Crispy Dosa with Sambar & Chutney 🍚 Fresh Idly 🐟 Pomfret Tawa Fry Whether you’re craving bold spices or soulful comfort food, The Malabar Coast promises an unforgettable journey.",
    amenities: ["Family Friendly", "Premium Dining", "Air Conditioned", "Free Wi-Fi", "Valet Parking", "Group Dining"], //bottomTags, amenities
    specialties: ["Coastal Cuisine", "Fresh Seafood", "Signature Mocktails", "Traditional Desserts", "Family Dining Experience"],  //bottomTags
    googleMapLink: "https://www.google.com/maps/dir//The+Malabar+Coast+By+The+Appumm+house,+Block+B,+Industrial+Area,+Sector+62,+Noida,+Uttar+Pradesh+201309/@28.4196864,77.070336,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390ce5abef3bc005:0x994b1bd65f86215a!2m2!1d77.3579144!2d28.6214025?entry=ttu&g_ep=EgoyMDI2MDcyMC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "0003",
    name: "Phoenix Citadel Mall",
    slug: "phoenix-citadel-mall",
    image: "https://cdn.anardana.in/images/outlets/vegas/ce14fcf4-7c2a-4287-b7c2-9a271607f181.webp",
    location: "Phoenix Citadel Mall",
    address: "1st floor, Phoenix Citadel, mall, Indore, Madhya Pradesh 452016",
    city: "Indore",
    phone: "08817413636",
    email: "yakshahospitality@gmail.com",
    hours: {
      weekday: "09:30 AM – 11:00 PM",
      weekend: "09:30 AM – 11:00 PM"
    },
    gallery: ["https://cdn.anardana.in/images/outlets/vegas/ce14fcf4-7c2a-4287-b7c2-9a271607f181.webp"],
    menu: "https://www.zomato.com/indore/the-malabar-coast-2-by-pass-road-north/book",
    menus: {
      food: "https://cdn.anardana.in/menus/vk-food.pdf",
      mocktail: "https://cdn.anardana.in/menus/vk-drink.pdf",
      kittyParty: "https://cdn.anardana.in/menus/seasonal/botanical-menu/vk.pdf",
    },
    reservations: {
      swiggyUrl: "https://www.swiggy.com/restaurants/indore/nipania/the-malabar-coast-910359/dineout",
      zomatoUrl: "https://www.zomato.com/indore/the-malabar-coast-2-by-pass-road-north/book",
      eazydinerUrl: "https://www.eazydiner.com/indore/the-malabar-coast-phoenix-citadel-mall-mr-10-road-705090",
      districtUrl: "https://www.district.in/dining/indore/the-malabar-coast-2-by-pass-road-north/book?utm_source=rwg",
    },
    isOpen: true,
    specialtyTags: ['Family Dining', 'Authentic coastal cuisine'], //vibes
    description: "The Malabar Coast, where we bring you the bold, aromatic, and comforting tastes of India’s coastal kitchens — from Kerala’s backwaters to the fiery flavours of Mangalore, Chettinad, Andhra, Tamil and Goan. Our menu features handpicked regional favorites like: 🍛 Mangalorean Fish Curry 🍗 Chicken Ghee Roast with Neer Dosa 🌶️ Andhra Chilli Chicken 🥥 Vegetable Stew with Idiyappam 🫓 Malabar Parotta with Chettinad Mutton 🐟 Pomfret Tawa Fry 🍗 Thalassery Chicken Biryani Every dish is made using traditional recipes, fresh seafood, and house-made masalas, delivering an authentic coastal experience in every bite.",
    amenities: ["Family Friendly", "Premium Dining", "Air Conditioned", "Free Wi-Fi", "Valet Parking", "Group Dining"],  //bottomTags,
    specialties: ["Coastal Cuisine", "Fresh Seafood", "Signature Mocktails", "Traditional Desserts", "Family Dining Experience"],
    googleMapLink: "https://www.google.com/maps/dir//The+Malabar+Coast,+1st+floor,+Phoenix+Citadel,+mall,+Indore,+Madhya+Pradesh+452016/@28.4196864,77.070336,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3962e3001ae72923:0xd6f4a3f9ded8dca3!2m2!1d75.9349721!2d22.7458776?entry=ttu&g_ep=EgoyMDI2MDcyMC4wIKXMDSoASAFQAw%3D%3D"
  },
];

export const RESTAURANT_CITY_FILTERS = [
  "All",
  "Gurugram",
  "Noida",
  "Indore"
] as const;

export const RESTAURANTS_HEADER_DATA = {
  title: "Our Restaurants",
  description: "Discover 14 unique dining experiences across Delhi NCR. Each outlet has its own character, vibe, and specially curated menu.",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Malabar+Coast+Restaurant",
};

export const UPCOMING_RESTAURANTS_DATA = {
  title: "Coming Soon",
  description: "Exciting new locations opening across Delhi NCR. Be the first to experience Malabar Coast in these cities.",
  prompt: "Want to see Malabar Coast in your city?",
};

// export const RESTAURANT_VIBE_FILTERS = [
//   "All", "Shopping Mall", "Family Dining", "Casual", "Modern", "Corporate Events", "Special Celebrations", "Shopping Convenience", "Corporate Dining", "Business Lunch", "Scenic Views", "Natural Light", "Casual Dining", "Business Meetings", "Family Celebrations", "Upscale Casual", "Shopping District", "Contemporary", "Neighborhood Favorite", "Family Gatherings", "Cozy", "Financial District", "Corporate Hub", "Premium", "Entertainment Hub", "Family Friendly", "Cinema Dining", "Residential Area", "Local Favorite", "Community Dining", "Shopping Center",
// ];

export const RESTAURANT_VIBE_FILTERS = [
  "All",
  ...new Set([
    ...OUTLETS.flatMap((o) => o.specialtyTags ?? []),
    ...OUTLETS.flatMap((o) => o.amenities ?? []),
    ...OUTLETS.flatMap((o) => o.specialties ?? []),
  ]),
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/themalabarcoast_", icon: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" },
  { label: "Facebook", href: "https://www.facebook.com/malabarcoastbyappummhouse/", icon: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" },
  // { label: "Twitter", href: "https://twitter.com/anardanakitchen", icon: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" },
  { label: "YouTube", href: "https://youtube.com/@themalabarcoast-c8s?si=QCGA9qBu3F3sYvoZ", icon: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/malabar-coast/", icon: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" },
] as const;