import { stats, STORY_HERO_DATA } from "../../../data/about/storyHero/storyHero.data";

const StoryHero = () => {
  return (
    <section className="relative h-[85vh] overflow-hidden flex items-end">
      <div className="absolute inset-0">
        <img
          src={STORY_HERO_DATA?.image}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 75% 30%, rgba(220, 38, 38, 0.18), transparent 50%)",
          }}
        />
      </div>

      <div className="relative container-custom pb-20 w-full">
        <p className="text-xs uppercase tracking-[0.3em] text-primary-400 mb-4">
          Since {STORY_HERO_DATA?.since}
        </p>

        <h1 className="text-6xl md:text-8xl font-serif font-bold text-white leading-none mb-5">
          Our <span className="italic text-gold-400">Story</span>
        </h1>

        <p className="text-lg md:text-xl text-white/55 max-w-xl leading-relaxed">
          {STORY_HERO_DATA?.title}
        </p>

        <div className="mt-12 flex gap-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-serif font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-white/40 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryHero;