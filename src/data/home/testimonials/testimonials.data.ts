interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "The Anardana at Ambience Mall is absolutely stunning! The food was exceptional, especially their Elevated Food. The ambiance is perfect for family dinners and the service is impeccable. Love coming here!",
    name: "Priya Sharma",
    location: "New Delhi · Vasant Kunj",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Anardana has become my go-to place for special occasions. The attention to detail in every dish is remarkable, and the staff goes above and beyond to ensure a memorable experience.",
    name: "Rajat Gupta",
    location: "Mumbai · Andheri",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "I had the pleasure of dining at Anardana recently, and I must say, it was an unforgettable experience. The flavors were exquisite, and the presentation was top-notch. Highly recommend!",
    name: "Anjali Mehta",
    location: "Bengaluru · Koramangala",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Anardana is a culinary gem! The Elevated Food is a delightful journey for the taste buds. The staff is friendly and attentive, making every visit a pleasure.",
    name: "Siddharth Rao",
    location: "Chennai · Nungambakkam",
    rating: 5,
  },
];