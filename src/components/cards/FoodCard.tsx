import { useRef } from "react";
import { Link } from "react-router-dom";
import type { FoodStory } from "../../data/home/foodStories/foodStories.data";

const FoodStoryCard: React.FC<{ story: FoodStory }> = ({ story }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      void video.play();
    }
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div>
      <Link
        className="group relative block aspect-[3/4] rounded-2xl overflow-hidden bg-gray-900 ring-1 ring-white/5 hover:ring-primary-500/50 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary-500/20"
        to={story.href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          src={story.videoSrc}
          poster={story.poster}
          preload="metadata"
          loop
          playsInline
          muted
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[10px] uppercase tracking-widest text-white/90 border border-white/10">
            {story.category}
          </span>
        </div>

        <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-primary-600 group-hover:border-primary-500 transition-all">
          <svg className="w-3.5 h-3.5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
          <h3 className="font-serif font-bold text-lg md:text-xl leading-tight text-white drop-shadow-lg group-hover:text-gold-300 transition-colors">
            {story.title}
          </h3>
          <p className="mt-1.5 text-xs text-white/70 line-clamp-2 leading-relaxed">
            {story.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default FoodStoryCard;