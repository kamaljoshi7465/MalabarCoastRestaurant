import { type ReactNode } from "react";

export interface JoinOurTeamData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const UsersIcon = (): ReactNode => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth={2}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-5xl text-primary-600 mx-auto"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ArrowRightIcon = (): ReactNode => (
  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

export const JOIN_OUR_TEAM_CONTENT: JoinOurTeamData = {
  title: "Join Our Team",
  description:
    "We're always looking for passionate individuals to join the Anardana family",
  buttonText: "View Open Positions",
  buttonLink: "/careers",
};

export const JOIN_OUR_TEAM_ICONS = {
  users: <UsersIcon />,
  arrowRight: <ArrowRightIcon />,
};