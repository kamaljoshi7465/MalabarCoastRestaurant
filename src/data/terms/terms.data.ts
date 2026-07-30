import { OUTLETS } from "../home/restaurant/RestaurantsSection.data";

export const TERMS_HEADER_DATA = {
  title: "Terms of Service",
  description: "Please read these terms carefully before using our services.",
  lastUpdated: "July 23, 2026",
};

export interface TermsSection {
  id: string;
  heading: string;
  content?: string;
  paragraphAfter?: string;
  items?: string[];
}

export const TERMS_SECTIONS: TermsSection[] = [
  {
    id: "agreement",
    heading: "Terms of Service",
    content: "By using The Malabar Coast website, mobile application, or placing an order, you agree to the following terms.",
  },
  {
    id: "orders",
    heading: "Orders",
    items: [
      "Orders are subject to availability.",
      "We reserve the right to refuse or cancel any order due to pricing errors, stock availability, or suspected fraudulent activity.",
    ],
  },
  {
    id: "pricing",
    heading: "Pricing",
    content: "All prices are displayed in Indian Rupees (INR) and are subject to applicable taxes unless otherwise stated.",
  },
  {
    id: "payments",
    heading: "Payments",
    content: "Payments may be made through accepted online payment methods or other available payment options.",
  },
  {
    id: "cancellations-refunds",
    heading: "Cancellations & Refunds",
    content: "Cancellation and refund requests will be handled according to our Cancellation and Refund Policy.",
    paragraphAfter: "Approved refunds will be processed through the original payment method.",
  },
  {
    id: "food-quality",
    heading: "Food Quality",
    content: "We strive to provide fresh, hygienic, and high-quality food. If you experience any issue with your order, please contact us promptly so we can assist you.",
  },
  {
    id: "intellectual-property",
    heading: "Intellectual Property",
    content: "All logos, photographs, menu designs, branding, graphics, and content displayed by The Malabar Coast are the property of the restaurant and may not be copied, reproduced, or distributed without written permission.",
  },
  {
    id: "liability",
    heading: "Limitation of Liability",
    content: "The Malabar Coast shall not be liable for indirect, incidental, or consequential damages arising from the use of our services.",
  },
  {
    id: "changes",
    heading: "Changes",
    content: "We reserve the right to update these Terms of Service at any time without prior notice.",
  },
  {
    id: "contact",
    heading: "Contact",
    content: "For any questions regarding these terms, please contact us using the contact information provided by The Malabar Coast.",
  },
];

export const TERMS_CONTACT_DATA = {
  heading: "Contact Us",
  description: "If you have questions about these Terms of Service, please contact us:",
  contacts: OUTLETS.map((o) => ({ label: o.city, email: o.email, phone: o.phone })),
};
