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
    botanical: string;
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
      botanical: "https://cdn.anardana.in/menus/seasonal/botanical-menu/vk.pdf",
    },
    menu: "https://www.zomato.com",
    reservations: {
      swiggyUrl: "https://www.swiggy.com",
      zomatoUrl: "https://www.zomato.com",
      eazydinerUrl: "https://www.eazydiner.com",
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
    menu: "https://www.zomato.com",
    menus: {
      food: "https://cdn.anardana.in/menus/vk-food.pdf",
      mocktail: "https://cdn.anardana.in/menus/vk-drink.pdf",
      botanical: "https://cdn.anardana.in/menus/seasonal/botanical-menu/vk.pdf",
    },
    reservations: {
      swiggyUrl: "https://www.swiggy.com",
      zomatoUrl: "https://www.zomato.com",
      eazydinerUrl: "https://www.eazydiner.com",
      districtUrl: "https://www.district.in",
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
    menu: "https://www.zomato.com",
    menus: {
      food: "https://cdn.anardana.in/menus/vk-food.pdf",
      mocktail: "https://cdn.anardana.in/menus/vk-drink.pdf",
      botanical: "https://cdn.anardana.in/menus/seasonal/botanical-menu/vk.pdf",
    },
    reservations: {
      swiggyUrl: "https://www.swiggy.com",
      zomatoUrl: "https://www.zomato.com",
      eazydinerUrl: "https://www.eazydiner.com",
      districtUrl: "https://www.district.in",
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
