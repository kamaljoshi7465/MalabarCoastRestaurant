export const SHIPPING_HEADER_DATA = {
  title: "Shipping & Delivery Policy",
  description: "Everything you need to know about our delivery process.",
  lastUpdated: "July 23, 2026",
};

export interface PolicySection {
  id: string;
  heading: string;
  content?: string;
  items?: string[];
  paragraphAfter?: string;
}

export const SHIPPING_SECTIONS: PolicySection[] = [
  {
    id: "delivery-areas",
    heading: "Delivery Areas",
    content: "The Malabar Coast delivers to selected serviceable locations through our delivery partners.",
  },
  {
    id: "delivery-time",
    heading: "Delivery Time",
    content: "Estimated delivery time is generally 30–60 minutes, depending on:",
    items: ["Distance", "Traffic conditions", "Weather", "Order volume"],
    paragraphAfter: "Delivery times are estimates and may vary.",
  },
  {
    id: "delivery-charges",
    heading: "Delivery Charges",
    content: "Delivery charges, if applicable, will be displayed during checkout before payment.",
  },
  {
    id: "order-tracking",
    heading: "Order Tracking",
    content: "Customers may receive order updates via SMS, phone call, or through the delivery platform used to place the order.",
  },
  {
    id: "failed-delivery",
    heading: "Failed Delivery",
    content: "If the customer is unavailable or provides an incorrect delivery address, additional charges may apply, or the order may be cancelled without a refund.",
  },
  {
    id: "contact",
    heading: "Contact",
    content: "For delivery-related assistance, please contact The Malabar Coast customer support.",
  },
];

import { OUTLETS } from "../home/restaurant/RestaurantsSection.data";

export const SHIPPING_CONTACT_DATA = {
  heading: "Contact Us",
  description: "For delivery-related assistance, please reach out to us:",
  contacts: OUTLETS.map((o) => ({ label: o.city, email: o.email, phone: o.phone })),
};
