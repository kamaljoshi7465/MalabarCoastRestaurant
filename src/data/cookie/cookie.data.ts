export const COOKIE_HEADER_DATA = {
  title: "Cookie Policy",
  description: "How we use cookies and similar technologies on our website.",
  lastUpdated: "July 23, 2026",
};

export interface PolicySection {
  id: string;
  heading: string;
  content?: string;
  items?: string[];
  paragraphAfter?: string;
}

export const COOKIE_SECTIONS: PolicySection[] = [
  {
    id: "intro",
    heading: "Cookie Policy",
    content: "The Malabar Coast uses cookies and similar technologies to improve your browsing experience.",
  },
  {
    id: "what-are-cookies",
    heading: "What Are Cookies?",
    content: "Cookies are small text files stored on your device that help websites remember user preferences and improve functionality.",
  },
  {
    id: "how-we-use",
    heading: "How We Use Cookies",
    content: "We use cookies to:",
    items: [
      "Improve website performance",
      "Remember user preferences",
      "Analyze website traffic",
      "Enhance security",
      "Improve customer experience",
    ],
  },
  {
    id: "managing",
    heading: "Managing Cookies",
    content: "Most web browsers allow you to manage or disable cookies through browser settings. Some website features may not function properly if cookies are disabled.",
    paragraphAfter: "By continuing to use our website, you consent to our use of cookies as described in this policy.",
  },
];

import { OUTLETS } from "../home/restaurant/RestaurantsSection.data";

export const COOKIE_CONTACT_DATA = {
  heading: "Contact Us",
  description: "For any questions regarding our Cookie Policy, please contact us:",
  contacts: OUTLETS.map((o) => ({ label: o.city, email: o.email, phone: o.phone })),
};
