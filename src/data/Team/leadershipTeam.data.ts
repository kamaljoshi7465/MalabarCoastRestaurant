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
    image: "",
  },
  {
    id: 2,
    name: "Arvind Singh Rawat",
    role: "Chief Financial Officer",
    image: "",
  },
  {
    id: 3,
    name: "Akarshan Sachdeva",
    role: "Chief Human Resource Officer",
    image: "",
  },
  {
    id: 4,
    name: "Neha Pahwa",
    role: "Head - Strategy, Sales and Marketing",
    image: "",
  },
  {
    id: 5,
    name: "Aditya Jha",
    role: "Culinary Head",
    image: "",
  },
  {
    id: 6,
    name: "Manish Chauhan",
    role: "Head of Beverages",
    image: "",
  },
  {
    id: 7,
    name: "Vipul Sharma",
    role: "Head of Audits and Strategy",
    image: "",
  },
  {
    id: 8,
    name: "Arnab",
    role: "Head of Operations",
    image: "",
    imagePosition: "object-top",
  },
];