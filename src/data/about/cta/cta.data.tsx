import { STATS } from "../../common/stats.data";

export interface Stat {
  value: string;
  label: string;
}

export interface CTAData {
  title: string;
  description: string;
  highlightedText: string;
}

const HeartIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth={2}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-5xl mx-auto"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

export const CTA_CONTENT: CTAData = {
  title: "Be Part of Our Story",
  description:
    "Join us for an unforgettable dining experience at any of our",
  highlightedText: "13 unique restaurants",
};

export const CTA_STATS: Stat[] = [
  {
    value: STATS.outlets.value,
    label: "Restaurants",
  },
  {
    value: STATS.happyGuests.value,
    label: "Happy Customers",
  },
  {
    value: STATS.years.value,
    label: "Years",
  },
];

export const CTA_ICONS = {
  heart: <HeartIcon />,
  arrowRight: <ArrowRightIcon />,
  calendar: <CalendarIcon />,
};