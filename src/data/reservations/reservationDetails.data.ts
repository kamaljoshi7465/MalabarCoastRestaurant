export const isWeekend = (dateStr: string) => {
  const day = new Date(`${dateStr}T00:00:00`).getDay();
  return day === 0 || day === 6;
};

const parseHourLabel = (label: string): number => {
  const match = label.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return 0;
  const [, hourStr, minuteStr, meridiem] = match;
  const hour = (Number(hourStr) % 12) + (meridiem.toUpperCase() === "PM" ? 12 : 0);
  return hour * 60 + Number(minuteStr);
};

const formatSlot = (minutes: number) => {
  const normalized = ((minutes % 1440) + 1440) % 1440;
  const hour24 = Math.floor(normalized / 60);
  const minute = normalized % 60;
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return {
    value: `${String(hour24).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
    label: `${hour12}:${String(minute).padStart(2, "0")} ${hour24 < 12 ? "AM" : "PM"}`,
  };
};

/** Converts a 24-hour "HH:MM" value (as returned by the booking API) into a "7:00 PM"-style label. */
export const formatTimeLabel = (value: string) => {
  const [hour, minute] = value.split(":").map(Number);
  return formatSlot(hour * 60 + minute).label;
};

/** Half-hour slots spanning an outlet's "9:00 AM – 11:30 PM"-style hours range. */
export const getOutletTimeSlots = (hoursRange: string) => {
  const [openLabel, closeLabel] = hoursRange.split("–").map((part) => part.trim());
  const open = parseHourLabel(openLabel);
  const close = parseHourLabel(closeLabel);
  const closeAdjusted = close <= open ? close + 24 * 60 : close;

  const slots = [];
  for (let minutes = open; minutes <= closeAdjusted; minutes += 30) slots.push(formatSlot(minutes));
  return slots;
};

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
