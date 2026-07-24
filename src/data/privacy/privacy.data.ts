export const PRIVACY_HEADER_DATA = {
  title: "Privacy Policy",
  description: "Your privacy is important to us",
  lastUpdated: "January 1, 2026",
};

export interface PrivacySection {
  id: string;
  heading: string;
  content?: string;
  paragraphAfter?: string;
  items?: string[];
  subsections?: {
    heading: string;
    content: string;
    items: string[];
  }[];
}

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: "introduction",
    heading: "Introduction",
    content:
      'Anardana Restaurants Pvt. Ltd. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, dine at our restaurants, or use our services.',
  },
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    subsections: [
      {
        heading: "Personal Information",
        content: "We may collect personal information that you provide to us, including:",
        items: [
          "Name and contact information (email, phone number)",
          "Reservation details and dining preferences",
          "Payment information",
          "Feedback and survey responses",
          "Special dietary requirements or allergies",
        ],
      },
      {
        heading: "Automatically Collected Information",
        content: "When you visit our website, we may automatically collect:",
        items: [
          "IP address and browser type",
          "Device information and operating system",
          "Pages visited and time spent on our site",
          "Referring website addresses",
          "Cookies and similar tracking technologies",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    heading: "How We Use Your Information",
    content: "We use the information we collect to:",
    items: [
      "Process reservations and provide dining services",
      "Communicate with you about your reservations and inquiries",
      "Send promotional offers and updates (with your consent)",
      "Improve our services and customer experience",
      "Comply with legal obligations",
      "Prevent fraud and enhance security",
      "Analyze website usage and optimize performance",
    ],
  },
  {
    id: "sharing",
    heading: "Sharing Your Information",
    content: "We may share your information with:",
    items: [
      "Service providers who assist in our operations (payment processors, reservation systems)",
      "Business partners with your explicit consent",
      "Law enforcement or regulatory authorities when required by law",
      "Potential buyers in the event of a business sale or merger",
    ],
    paragraphAfter: "We do not sell your personal information to third parties.",
  },
  {
    id: "cookies",
    heading: "Cookies and Tracking Technologies",
    content:
      "We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.",
  },
  {
    id: "data-security",
    heading: "Data Security",
    content:
      "We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.",
  },
  {
    id: "your-rights",
    heading: "Your Rights",
    content: "You have the right to:",
    items: [
      "Access and review your personal information",
      "Request corrections to inaccurate data",
      "Request deletion of your personal information",
      "Opt-out of marketing communications",
      "Object to certain processing of your data",
      "Request a copy of your data in a portable format",
    ],
    paragraphAfter: "To exercise these rights, please contact us at hello@anardana.in",
  },
  {
    id: "childrens-privacy",
    heading: "Children's Privacy",
    content:
      "Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.",
  },
  {
    id: "third-party-links",
    heading: "Third-Party Links",
    content:
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.",
  },
  {
    id: "changes",
    heading: "Changes to This Privacy Policy",
    content:
      'We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.',
  },
];

export const PRIVACY_CONTACT_DATA = {
  heading: "Contact Us",
  description: "If you have questions or concerns about this Privacy Policy, please contact us:",
  email: "hello@anardana.in",
  phone: "01204678639",
  address: [
    "Anardana Restaurants Pvt. Ltd.",
    "6 Park End, Main Vikas Marg,",
    "2nd Floor, Bank of India Building,",
    "East Delhi - 110092",
  ],
};
