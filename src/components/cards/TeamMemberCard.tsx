interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  imagePosition?: "object-top" | "object-center";
}

export const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className="group">
    <div className="relative aspect-square overflow-hidden bg-gray-100 mb-6 rounded-lg">
      <img
        src={member.image}
        alt={member.name}
        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
          member.imagePosition ?? ""
        }`}
      />
    </div>
    <div className="space-y-2 text-center">
      <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
        {member.name}
      </h3>
      <p className="text-base text-gray-700 font-medium uppercase tracking-wide text-sm">
        {member.role}
      </p>
    </div>
  </div>
);