export const REFUND_HEADER_DATA = {
  title: "Refund & Cancellation Policy",
  description: "How cancellations and refunds are handled at The Malabar Coast.",
  lastUpdated: "July 23, 2026",
};

export interface PolicySection {
  id: string;
  heading: string;
  content?: string;
  items?: string[];
  paragraphAfter?: string;
}

export const REFUND_SECTIONS: PolicySection[] = [
  {
    id: "intro",
    heading: "Refund & Cancellation Policy",
    content: "At The Malabar Coast, we strive to provide the best dining and food delivery experience. This Refund & Cancellation Policy explains how cancellations and refunds are handled.",
  },
  {
    id: "order-cancellation",
    heading: "Order Cancellation",
    items: [
      "Orders can only be cancelled before food preparation has started.",
      "Once preparation has begun, cancellation requests may not be accepted.",
      "Orders placed through third-party delivery platforms are subject to their respective cancellation policies.",
    ],
  },
  {
    id: "refund-eligibility",
    heading: "Refund Eligibility",
    content: "A refund may be considered in the following situations:",
    items: [
      "Payment was deducted but the order was not confirmed.",
      "The wrong order was delivered.",
      "The order was cancelled by The Malabar Coast.",
      "Food quality issues are verified by our support team.",
    ],
  },
  {
    id: "non-refundable",
    heading: "Non-Refundable Cases",
    content: "Refunds will generally not be provided for:",
    items: [
      "Change of mind after food preparation has started.",
      "Incorrect delivery details provided by the customer.",
      "Delays caused by weather, traffic, or circumstances beyond our control.",
    ],
  },
  {
    id: "refund-process",
    heading: "Refund Process",
    content: "Approved refunds will be processed through the original payment method and may take 5–10 business days to reflect, depending on your bank or payment provider.",
  },
  {
    id: "contact",
    heading: "Contact",
    content: "For refund or cancellation assistance, please contact our customer support team.",
  },
];

import { OUTLETS } from "../home/restaurant/RestaurantsSection.data";

export const REFUND_CONTACT_DATA = {
  heading: "Contact Us",
  description: "For refund or cancellation assistance, please reach out to us:",
  contacts: OUTLETS.map((o) => ({ label: o.city, email: o.email, phone: o.phone })),
};
