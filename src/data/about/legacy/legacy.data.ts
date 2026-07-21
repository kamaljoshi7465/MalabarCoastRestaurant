export interface LegacyData {
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  experience: {
    value: string;
    label: string;
  };
}

export const LEGACY_DATA: LegacyData = {
  title: "The Anardana Legacy",

  paragraphs: [
    `Founded in 2019, Anardana began with a simple vision: To reimagine traditional Indian cuisine for the modern palate while honoring culinary heritage. Our name, meaning "pomegranate seeds" in Hindi, symbolizes the essence of our philosophy—each seed unique, yet part of a greater whole.`,

    `What started as a single outlet in the heart of Delhi has rapidly blossomed into a family of 13 distinctive restaurants across Delhi NCR. Each location tells its own story, reflecting the local culture while maintaining the core values that define Anardana.`,

    `Our chefs, trained in both traditional and contemporary techniques, source the finest ingredients to create dishes that honor their heritage while surprising and delighting contemporary diners. From street food reimagined to royal Mughlai feasts, every menu item is a celebration of India's rich culinary diversity.`,
  ],

  image: "https://cdn.anardana.in/images/about/About-the-brand.jpg",

  imageAlt: "Restaurant interior",

  experience: {
    value: "7+",
    label: "Years of Excellence",
  },
};