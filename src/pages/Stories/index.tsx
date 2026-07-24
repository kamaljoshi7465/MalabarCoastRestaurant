import { useState } from "react";
import { Link } from "react-router-dom";
import { foodStories, FOOD_STORY_CATEGORIES, type FoodStoryCategory } from "../../data/home/foodStories/foodStories.data";
import FoodStoryCard from "../../components/cards/FoodCard";

const Stories = () => {
  const [active, setActive] = useState<"all" | FoodStoryCategory>("all");

  const filtered = active === "all" ? foodStories : foodStories.filter((s) => s.category === active);

  const count = (cat: string) =>
    cat === "all" ? foodStories.length : foodStories.filter((s) => s.category === cat).length;

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/40 via-black to-black pointer-events-none" />
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(220, 38, 38, 0.25), transparent 50%), radial-gradient(circle at 80% 70%, rgba(202, 138, 4, 0.2), transparent 50%)" }}
        />
        <div className="relative container-custom text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-400 mb-4">Malabar Coast Presents</p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Food <span className="italic text-gold-400">Stories</span>
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto text-white/60 leading-relaxed">
            Every dish has a story. Scan, watch, and discover the craft behind our kitchen.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 text-xs text-white/40">
            <span className="w-8 h-px bg-white/20" />
            <span>{foodStories.length} Stories</span>
            <span className="w-8 h-px bg-white/20" />
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-30 bg-black/80 backdrop-blur-md border-y border-white/10">
        <div className="container-custom py-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            {FOOD_STORY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all ${
                  active === cat
                    ? "bg-white text-black font-semibold"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat} <span className="opacity-60">· {count(cat)}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((story) => (
              <FoodStoryCard key={story.href} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-12">
        <div className="container-custom text-center">
          <p className="text-white/60 text-sm mb-4">Hungry yet? Reserve your table.</p>
          <Link to="/reservations" className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-700 rounded-full font-medium transition-colors">
            Book a Table
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Stories;
