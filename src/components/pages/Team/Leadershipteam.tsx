import { teamMembers } from "../../../data/Team/leadershipTeam.data";
import { TeamMemberCard } from "../../cards/TeamMemberCard";

const firstRow = teamMembers.slice(0, 4);
const secondRow = teamMembers.slice(4, 8);

const LeadershipTeam = () => {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {firstRow.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {secondRow.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;