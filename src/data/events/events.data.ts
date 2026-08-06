import { STATS } from "../common/stats.data";

export const EVENTS_HERO = {
  image: "https://images.unsplash.com/photo-1519167758481-83f29da8c898?w=1920&q=80",
  title: "Private Events",
  subtitle: "Host unforgettable celebrations at Malabar Coast - From kitty parties to office events, we make every occasion special",
};

export const EVENTS_WHY = {
  title: "Why Choose Malabar Coast for Events",
  subtitle: "Experience seamless event planning and exceptional hospitality",
  features: [
    {
      title: "Flexible Booking",
      description: "Book your preferred date and time slot with easy rescheduling options",
      icon: "calendar",
    },
    {
      title: "All-Inclusive Packages",
      description: "No hidden costs - everything you need in one comprehensive package",
      icon: "check",
    },
    {
      title: "Expert Coordination",
      description: "Dedicated event coordinators to handle every detail of your celebration",
      icon: "team",
    },
    {
      title: "Premium Venues",
      description: `Beautifully designed spaces across ${STATS?.outlets?.value} restaurants nationwide`,
      icon: "award",
    },
  ],
};

export const EVENTS_TYPES = {
  title: "Types of Events We Host",
  subtitle: "Choose from our specially curated event experiences",
  events: [
    {
      title: "Birthday Parties",
      description: "Celebrate birthdays with delicious Kerala cuisine, customised menus, elegant ambience and dedicated service.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
      capacity: "20–50 guests",
      duration: "2–5 hours",
      icon: "gift",
      features: [
        "Custom food packages",
        "Decor support",
        "Music arrangement",
        "Cake cutting area",
        "Family-friendly ambience",
      ],
      idealFor: ["Kids birthdays", "Adult celebrations", "Surprise parties"],
    },
    {
      title: "Kitty Parties",
      description: "A cosy venue for ladies' get-togethers with curated menus and warm hospitality.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      capacity: "15–30 guests",
      duration: "2–4 hours",
      icon: "team",
      features: [
        "Veg & non-veg menus",
        "Mocktails",
        "Reserved seating",
        "Group packages",
      ],
      idealFor: ["Monthly kitty clubs", "Social gatherings", "Ladies get-togethers"],
    },
    {
      title: "Office Parties",
      description: "Host team lunches, corporate dinners and celebrations in a comfortable setting.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      capacity: "20–60 guests",
      duration: "2–6 hours",
      icon: "briefcase",
      features: [
        "Buffet/set menu",
        "Reserved area",
        "Billing support",
      ],
      idealFor: ["Team outings", "Achievement celebrations", "Festive events"],
    },
  ],
};

export const EVENTS_FAQS = [
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 1-2 weeks in advance for smaller gatherings and 3-4 weeks for larger events, especially during weekends and festive seasons, to ensure your preferred date and time slot.",
  },
  {
    question: "Can I customize the menu?",
    answer:
      "Yes, our chefs can tailor the food and beverage menu to your preferences, including vegetarian, non-vegetarian and dietary requirements, as part of our all-inclusive event packages.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made at least 48 hours before the event are eligible for a full refund of any advance paid. For cancellations within 48 hours, please reach out to your outlet's event coordinator to discuss options.",
  },
  {
    question: "Do you provide decoration services?",
    answer:
      "Yes, we offer decor support ranging from simple table setups to themed arrangements. Let our event coordinator know your vision and we'll help bring it to life.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Most of our outlets offer on-site or nearby parking for guests. Availability varies by location, so please check with your chosen outlet while booking.",
  },
  {
    question: "Can I arrange entertainment like DJs or live music?",
    answer:
      "Absolutely - we can help coordinate DJs, live music and other entertainment for your event, subject to venue guidelines and local noise regulations. Speak to our team while planning your event.",
  },
];