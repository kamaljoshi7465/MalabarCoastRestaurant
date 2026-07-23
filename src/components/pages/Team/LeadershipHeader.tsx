import { TEAM_HEADER_DATA } from "../../../data/Team/leadershipHeader.data";

const LeadershipHeader = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-gold-600 text-white mt-20">
      <div className="container-custom text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
          {TEAM_HEADER_DATA.title}
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
          {TEAM_HEADER_DATA.description}
        </p>
      </div>
    </section>
  );
};

export default LeadershipHeader;