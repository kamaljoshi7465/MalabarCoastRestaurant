export const TERMS_HEADER_DATA = {
  title: "Terms of Service",
  description: "Please read these terms carefully before using our services",
  lastUpdated: "January 1, 2026",
};

export interface TermsSection {
  id: string;
  heading: string;
  content?: string;
  paragraphAfter?: string;
  items?: string[];
  subsections?: {
    heading: string;
    content: string;
  }[];
  paragraphs?: {
    label: string;
    text: string;
  }[];
}

export const TERMS_SECTIONS: TermsSection[] = [
  {
    id: "agreement",
    heading: "Agreement to Terms",
    content:
      "Welcome to Anardana. By accessing our website at https://anardana.in, making a reservation, or dining at any of our restaurant locations, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.",
  },
  {
    id: "use-of-website",
    heading: "Use of Website",
    subsections: [
      {
        heading: "Permitted Use",
        content: "You may use our website for lawful purposes only. You agree not to:",
      },
      {
        heading: "Account Responsibility",
        content:
          "If you create an account on our website, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use.",
      },
    ],
    items: [
      "Violate any applicable laws or regulations",
      "Infringe upon our intellectual property rights",
      "Transmit harmful code, viruses, or malware",
      "Attempt to gain unauthorized access to our systems",
      "Use our website for fraudulent purposes",
      "Harass, abuse, or harm other users",
    ],
  },
  {
    id: "reservations",
    heading: "Reservations",
    paragraphs: [
      {
        label: "Booking",
        text: "Reservations are subject to availability and confirmation. We reserve the right to refuse service to anyone for any reason.",
      },
      {
        label: "Cancellation Policy",
        text: "We request at least 24 hours notice for cancellations. Late cancellations or no-shows may result in a cancellation fee or restriction from future reservations.",
      },
      {
        label: "Seating Time",
        text: "Tables are reserved for a maximum of 2 hours for parties of 2-4 guests, and 2.5 hours for larger parties. We may need to reassign your table if you arrive more than 15 minutes late without notice.",
      },
      {
        label: "Special Requests",
        text: "While we will do our best to accommodate special requests (seating preferences, dietary requirements), we cannot guarantee them.",
      },
    ],
  },
  {
    id: "payment",
    heading: "Payment and Pricing",
    paragraphs: [
      {
        label: "Prices",
        text: "All menu prices are subject to change without notice. Prices displayed on our website may differ from in-restaurant pricing.",
      },
      {
        label: "Payment Methods",
        text: "We accept major credit cards, debit cards, and cash. Payment is due at the time of service.",
      },
      {
        label: "Service Charges",
        text: "A service charge may be applied to your bill. Any additional gratuity is at your discretion.",
      },
      {
        label: "Billing Disputes",
        text: "Any billing disputes must be raised at the time of payment or within 7 days of your visit.",
      },
    ],
  },
  {
    id: "food-safety",
    heading: "Food Safety and Allergies",
    content: "While we take precautions to accommodate dietary restrictions and allergies:",
    items: [
      "Please inform your server of any allergies or dietary restrictions",
      "We cannot guarantee complete absence of allergens due to shared kitchen equipment",
      "Menu items may contain or come into contact with common allergens",
      "Guests with severe allergies dine at their own risk",
      "We are not liable for allergic reactions or food-related illnesses",
    ],
  },
  {
    id: "guest-conduct",
    heading: "Guest Conduct and Dress Code",
    paragraphs: [
      {
        label: "Behavior",
        text: "We expect all guests to behave respectfully toward staff and other patrons. We reserve the right to refuse service or ask guests to leave if they engage in disruptive, offensive, or inappropriate behavior.",
      },
      {
        label: "Dress Code",
        text: "Smart casual attire is recommended. We reserve the right to refuse entry to guests wearing inappropriate clothing.",
      },
      {
        label: "Photography",
        text: "Personal photography is permitted for non-commercial use. Flash photography may disturb other guests and should be used sparingly.",
      },
    ],
  },
  {
    id: "intellectual-property",
    heading: "Intellectual Property",
    content:
      "All content on this website, including text, graphics, logos, images, and software, is the property of Anardana Restaurants Pvt. Ltd. or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.",
  },
  {
    id: "third-party",
    heading: "Third-Party Services",
    content:
      "Our website may contain links to third-party websites or services (such as delivery platforms, payment processors). We are not responsible for the content, policies, or practices of these third parties. Use of third-party services is at your own risk.",
  },
  {
    id: "liability",
    heading: "Limitation of Liability",
    content: "To the fullest extent permitted by law, Anardana Restaurants Pvt. Ltd. shall not be liable for:",
    items: [
      "Any indirect, incidental, special, or consequential damages",
      "Loss of profits, revenue, data, or business opportunities",
      "Personal injury or property damage (except where caused by our negligence)",
      "Errors or omissions in website content",
      "Interruptions or delays in service",
    ],
  },
  {
    id: "indemnification",
    heading: "Indemnification",
    content:
      "You agree to indemnify and hold harmless Anardana Restaurants Pvt. Ltd., its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of our services or violation of these Terms.",
  },
  {
    id: "force-majeure",
    heading: "Force Majeure",
    content:
      "We shall not be liable for any failure to perform our obligations due to circumstances beyond our reasonable control, including natural disasters, war, terrorism, labor disputes, government actions, or technical failures.",
  },
  {
    id: "governing-law",
    heading: "Governing Law",
    content:
      "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.",
  },
  {
    id: "changes",
    heading: "Changes to Terms",
    content:
      "We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after changes constitutes acceptance of the modified Terms.",
  },
  {
    id: "severability",
    heading: "Severability",
    content:
      "If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.",
  },
];

export const TERMS_CONTACT_DATA = {
  heading: "Contact Us",
  description: "If you have questions about these Terms of Service, please contact us:",
  email: "hello@anardana.in",
  phone: "01204678639",
  address: [
    "Anardana Restaurants Pvt. Ltd.",
    "6 Park End, Main Vikas Marg,",
    "2nd Floor, Bank of India Building,",
    "East Delhi - 110092",
  ],
};
