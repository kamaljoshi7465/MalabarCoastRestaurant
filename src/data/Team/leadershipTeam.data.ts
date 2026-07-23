interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  imagePosition?: "object-top" | "object-center";
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Anil Giri",
    role: "Executive President",
    image: "https://cdn.anardana.in/teams/anil-giri.jpg",
  },
  {
    id: 2,
    name: "Arvind Singh Rawat",
    role: "Chief Financial Officer",
    image: "https://cdn.anardana.in/teams/arvind-rawat.jpg",
  },
  {
    id: 3,
    name: "Akarshan Sachdeva",
    role: "Chief Human Resource Officer",
    image: "https://cdn.anardana.in/teams/akarshan-sachdeva.jpg",
  },
  {
    id: 4,
    name: "Neha Pahwa",
    role: "Head - Strategy, Sales and Marketing",
    image: "https://cdn.anardana.in/teams/neha-pahwa.jpg",
  },
  {
    id: 5,
    name: "Aditya Jha",
    role: "Culinary Head",
    image: "https://cdn.anardana.in/teams/aditya-jha.jpg",
  },
  {
    id: 6,
    name: "Manish Chauhan",
    role: "Head of Beverages",
    image: "https://cdn.anardana.in/teams/manish.jpg",
  },
  {
    id: 7,
    name: "Vipul Sharma",
    role: "Head of Audits and Strategy",
    image: "https://cdn.anardana.in/teams/vipul-sharma.jpg",
  },
  {
    id: 8,
    name: "Arnab",
    role: "Head of Operations",
    image: "https://cdn.anardana.in/teams/arnab-dash.jpg",
    imagePosition: "object-top",
  },
];