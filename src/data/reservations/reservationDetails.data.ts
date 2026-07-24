export const OUTLETS = [
  ["anardana-vegas-mall", "Malabar Coast Vegas Mall — Dwarka, New Delhi"], ["anardana-midtown", "Malabar Coast DLF MidTown Plaza — Moti Nagar, New Delhi"], ["anardana-nsp", "Malabar Coast UnityOne Elegante Mall — Netaji Subhash Palace, New Delhi"], ["anardana-vk", "Malabar Coast Ambience Mall — Vasant Kunj, New Delhi"], ["anardana-faridabad", "Malabar Coast Pacific Mall — Faridabad, Haryana"], ["anardana-gcr", "Malabar Coast Golf Course Road — Gurugram, Haryana"], ["anardana-ranchi", "Malabar Coast Ranchi — Ranchi, Ranchi"], ["anardana-noida", "Malabar Coast Max Square — Noida, Uttar Pradesh"], ["anardana-saket", "Malabar Coast DLF Avenue — Saket, New Delhi"], ["anardana-sangam", "Malabar Coast Sangam Courtyard — R.K Puram, New Delhi"], ["anardana-m3m", "Malabar Coast M3M IFC — Gurugram, Haryana"], ["anardana-chd", "Malabar Coast City Emporium Mall — Industrial Area Phase I, Chandigarh"], ["anardana-kkd", "Malabar Coast East Delhi — Karkardooma, New Delhi"],
] as const;

export const DATES = Array.from({ length: 30 }, (_, index) => {
  const date = new Date(2026, 6, 23 + index);
  return { value: date.toISOString().slice(0, 10), label: date.toLocaleDateString("en-IN", { weekday: "short", month: "short", day: "numeric", year: "numeric" }) };
});

export const TIMES = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM", "12:00 AM"].map((label, index) => ({ value: index === 24 ? "00:00" : `${String(12 + Math.floor(index / 2)).padStart(2, "0")}:${index % 2 ? "30" : "00"}`, label }));

export const GUESTS = Array.from({ length: 8 }, (_, index) => ({ value: String(index + 1), label: `${index + 1} Guest${index ? "s" : ""}` }));
export const OCCASIONS = [["", "Optional"], ["birthday", "Birthday"], ["anniversary", "Anniversary"], ["business", "Business Meeting"], ["date", "Date Night"], ["family", "Family Gathering"], ["other", "Other"]] as const;

export const RESERVATION_TERMS = [
  "A representative will contact you to confirm your booking and discuss availability.", "Submitting a request does not guarantee a confirmed booking. All reservations are subject to availability.", "Reservations may be subject to time limits during peak hours.", "If you don't receive a confirmation call within a reasonable time, please contact us directly.", "The restaurant may modify or cancel reservations due to unforeseen circumstances with prior notice.", "Please arrive on time. A 15-minute grace period applies — after which the table may be released.", "Special requests (seating, dietary) will be accommodated where possible but cannot be guaranteed.", "For groups of 9+ guests, please contact us directly for customised arrangements.",
];

export const RESERVATION_PERKS = [
  { title: "Confirmation Call", description: "Team calls to finalise", icon: "check" },
  { title: "15-min Grace", description: "Late arrival buffer", icon: "clock" },
  { title: "Special Requests", description: "We'll do our best", icon: "users" },
] as const;
