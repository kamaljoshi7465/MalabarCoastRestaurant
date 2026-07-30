import { useParams, Link } from "react-router-dom";
import { foodStories } from "../../data/home/foodStories/foodStories.data";

const StoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = foodStories.find((s) => s.href === `/stories/${slug}`);

  if (!story) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center text-white bg-black">
        <h1 className="font-serif text-3xl font-bold text-primary-600">Story Not Found</h1>
        <Link to="/stories" className="rounded-full bg-primary-600 px-6 py-2 text-white hover:bg-primary-700">All Stories</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 pt-54 pb-12">
        <Link to="/stories" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
          </svg>
          <span>All Stories</span>
        </Link>

        <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
          <video
            src={story.videoSrc}
            poster={story.poster}
            controls
            autoPlay
            playsInline
            className="w-full h-auto max-h-[80vh] bg-black"
          />
        </div>

        <div className="mt-6 text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-3">{story.title}</h1>
          <p className="text-xs uppercase tracking-widest text-primary-400 mb-4">{story.category}</p>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">{story.description}</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/reservations" className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-full font-medium transition-colors">Book a Table</Link>
          <Link to="/stories" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full font-medium transition-colors">Watch More Stories</Link>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;
