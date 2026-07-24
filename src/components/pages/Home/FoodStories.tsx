import { foodStories } from "../../../data/home/foodStories/foodStories.data";
import FoodStoryCard from "../../cards/FoodCard";

const FoodStories: React.FC = () => {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-400 mb-3">
            Malabar Coast Presents
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Food <span className="italic text-gold-400">Stories</span>
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto text-white/60 leading-relaxed">
            Every dish has a story. Hover to watch, click to discover the craft behind our
            kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {foodStories.slice(0, 3).map((story) => (
            <FoodStoryCard key={story.href} story={story} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 font-medium text-sm tracking-wide"
            href="/stories"
          >
            <span>View All Stories</span>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FoodStories;