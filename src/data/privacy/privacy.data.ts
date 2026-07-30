export const PRIVACY_HEADER_DATA = {
  title: "Privacy Policy",
  description: "We value your privacy and are committed to protecting your personal information.",
  lastUpdated: "July 23, 2026",
};

export interface PrivacySection {
  id: string;
  heading: string;
  content?: string;
  paragraphAfter?: string;
  items?: string[];
}

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: "introduction",
    heading: "Introduction",
    content: "Welcome to The Malabar Coast. We value your privacy and are committed to protecting your personal information.",
  },
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    content: "We may collect the following information:",
    items: [
      "Name",
      "Phone Number",
      "Email Address",
      "Delivery Address",
      "Order Details",
      "Payment Information (processed securely through third-party payment providers)",
      "Device and Usage Information (if you use our website or mobile application)",
    ],
  },
  {
    id: "how-we-use",
    heading: "How We Use Your Information",
    content: "Your information is used to:",
    items: [
      "Process and deliver your food orders",
      "Contact you regarding your order",
      "Provide customer support",
      "Improve our products and services",
      "Send promotional offers (only where permitted)",
    ],
  },
  {
    id: "sharing",
    heading: "Information Sharing",
    content: "We do not sell your personal information. We may share your information with:",
    items: [
      "Delivery partners",
      "Payment gateways",
      "Technology service providers",
      "Government authorities when required by law",
    ],
  },
  {
    id: "data-security",
    heading: "Data Security",
    content: "We use reasonable technical and organizational measures to protect your personal information from unauthorized access, misuse, or disclosure.",
  },
  {
    id: "cookies",
    heading: "Cookies",
    content: "Our website or app may use cookies and similar technologies to improve your browsing experience and analyze website traffic.",
  },
  {
    id: "your-rights",
    heading: "Your Rights",
    content: "You may request access, correction, or deletion of your personal information by contacting us.",
  },
];

import { OUTLETS } from "../home/restaurant/RestaurantsSection.data";

export const PRIVACY_CONTACT_DATA = {
  heading: "Contact Us",
  description: "If you have questions or concerns about this Privacy Policy, please contact us:",
  contacts: OUTLETS.map((o) => ({ label: o.city, email: o.email, phone: o.phone })),
};
