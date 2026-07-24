export const CONTACT_DETAILS = {
  address: {
    label: "Address",
    value:
      "Malabar Coast Hospitality Private Limited\n6 Park End, Main Vikas Marg,\n2nd Floor, Bank of India Building,\nEast Delhi - 110092",
    href: "https://maps.app.goo.gl/qyUxWcupF3C46MD79",
  },
  phone: { label: "Phone", value: "01204678639", href: "tel:01204678639" },
  email: { label: "Email", value: "hello@anardana.in", href: "mailto:hello@anardana.in" },
};

export const HOURS = [
  { days: "Mon – Fri", time: "11:00 AM - 11:00 PM" },
  { days: "Sat – Sun", time: "11:00 AM - 12:00 AM" },
];

export const QUICK_LINKS = [
  { label: "Find an Outlet", href: "/restaurants" },
  { label: "Make a Reservation", href: "/reservations" },
  { label: "View Menu", href: "/menu" },
  { label: "Career Opportunities", href: "/careers" },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/anardana.in", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/anardana.in/", icon: "facebook" },
  { label: "Twitter", href: "https://twitter.com/anardanakitchen", icon: "twitter" },
  { label: "YouTube", href: "https://www.youtube.com/results?search_query=anardana.in+delhi", icon: "youtube" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/77045838/", icon: "linkedin" },
] as const;

export const SUBJECT_OPTIONS = [
  { value: "", label: "Select a subject" },
  { value: "general", label: "General Inquiry" },
  { value: "reservation", label: "Reservation Issue" },
  { value: "feedback", label: "Feedback" },
  { value: "catering", label: "Catering & Events" },
  { value: "careers", label: "Career Opportunities" },
  { value: "other", label: "Other" },
];

export const FAQS = [
  { question: "How far in advance can I make a reservation?", answer: "You can make reservations up to 30 days in advance for all our restaurants." },
  { question: "Do you accommodate dietary restrictions?", answer: "Yes! We offer vegetarian, vegan, and gluten-free options. Please mention any dietary restrictions when booking." },
  { question: "Is there a dress code?", answer: "Smart casual attire is recommended for most restaurants. Some premium locations may have specific dress codes." },
  { question: "Do you offer private dining or catering?", answer: "Yes, several restaurants have private dining rooms. Contact us for catering and event inquiries." },
];
