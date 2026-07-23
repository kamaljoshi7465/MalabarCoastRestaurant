import { JOIN_OUR_TEAM_CONTENT, JOIN_OUR_TEAM_ICONS } from "../../../data/Team/joinOurTeam.data";

const JoinOurTeam = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom text-center">
        <div className="mb-6 inline-block rounded-full bg-primary-100 p-4">
          {JOIN_OUR_TEAM_ICONS.users}
        </div>

        <h2 className="mb-6 font-serif text-4xl font-bold text-gray-900 md:text-5xl">
          {JOIN_OUR_TEAM_CONTENT.title}
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-600">
          {JOIN_OUR_TEAM_CONTENT.description}
        </p>

        <a
          href={JOIN_OUR_TEAM_CONTENT.buttonLink}
          className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary-700 hover:shadow-xl"
        >
          <span>{JOIN_OUR_TEAM_CONTENT.buttonText}</span>
          {JOIN_OUR_TEAM_ICONS.arrowRight}
        </a>
      </div>
    </section>
  );
};

export default JoinOurTeam;