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
      title: "Kitty Parties",
      description: "Host your kitty party in style at Malabar Coast. Our dedicated party spaces, delicious multi-cuisine menus, and attentive service ensure your gathering is the talk of the town.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      capacity: "15-50 guests",
      duration: "3-4 hours",
      icon: "team",
    },
    {
      title: "Office Parties",
      description: "Whether it's a team celebration, annual party, or client dinner, Malabar Coast provides the perfect setting for corporate events. Professional service meets authentic Indian hospitality.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      capacity: "20-200 guests",
      duration: "2-5 hours",
      icon: "briefcase",
    },
    {
      title: "Birthday Parties",
      description: "Make birthdays extra special with our customized party packages. From kids' parties to milestone celebrations, we handle every detail so you can enjoy the moment.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
      capacity: "10-100 guests",
      duration: "2-4 hours",
      icon: "gift",
    },
  ],
};

export const EVENTS_FAQS = [
  "How far in advance should I book?",
  "Can I customize the menu?",
  "What is your cancellation policy?",
  "Do you provide decoration services?",
  "Is there parking available?",
  "Can I arrange entertainment like DJs or live music?",
];

export const EVENTS_CONTACT = {
  title: "Ready to Plan Your Event?",
  subtitle: "Get in touch with our event planning team to discuss your requirements",
  phone: "+911234567890",
  phoneDisplay: "+91 123 456 7890",
  email: "hello@anardana.in",
};
