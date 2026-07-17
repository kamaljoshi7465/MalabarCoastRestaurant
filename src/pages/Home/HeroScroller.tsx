import { useEffect, useRef, useState } from "react";
import { ArrowRight, MapPin, Volume2, VolumeX } from "lucide-react";
import { HERO_ASSETS, HERO_CONTENT, HERO_MAPS_HREF } from "../../data/home/hero/hero.data";

const slides = [
  { type: "video", src: HERO_ASSETS.video, content: HERO_CONTENT[0] },
  { type: "image", src: HERO_ASSETS.outlet, content: HERO_CONTENT[1] },
  { type: "image", src: HERO_ASSETS.gallery[0], content: HERO_CONTENT[2] },
  { type: "image", src: HERO_ASSETS.gallery[1], content: HERO_CONTENT[3] },
  { type: "image", src: HERO_ASSETS.gallery[2], content: HERO_CONTENT[4] },
  { type: "image", src: HERO_ASSETS.gallery[3] },
];

const SLIDE_DURATION = 6000;

export default function HeroScroller() {
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeSlide = slides[current];
  const isVideoSlide = activeSlide.type === "video";

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current]);

  const goToSlide = (index: number) => setCurrent(index);

  const displayContent = activeSlide.content ?? HERO_CONTENT[HERO_CONTENT.length - 1];

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div
        className={`absolute inset-0 z-10 transition-opacity duration-1000 ${
          isVideoSlide ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <video
          className="h-full w-full object-cover"
          src={HERO_ASSETS.video}
          autoPlay
          playsInline
          preload="auto"
          muted={muted}
          loop
        />
        <button
          type="button"
          aria-label={muted ? "Unmute video" : "Mute video"}
          onClick={() => setMuted((m) => !m)}
          className="absolute bottom-8 right-8 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/40 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/70"
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>

      {slides.map((slide, index) => {
        if (slide.type !== "image") return null;
        const isActive = index === current;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
        );
      })}

      <div className="relative flex h-full items-center">
        <div className="container-custom px-6 md:px-12">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
              {displayContent.title}
            </h1>
            <p className="mb-8 text-xl text-gray-200 md:text-2xl">
              {displayContent.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={displayContent.primaryHref}
                className="btn-primary flex items-center space-x-2 rounded-full bg-white px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-100"
              >
                <span>{displayContent.primaryLabel}</span>
                <ArrowRight size={16} />
              </a>
              <a
                href={HERO_MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center space-x-2 rounded-full border border-white bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-gray-900"
              >
                <MapPin size={16} />
                <span>Find Restaurants</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={index === 0 ? "Go to video slide" : `Go to slide ${index}`}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === current ? "w-8 bg-white" : "w-3 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white p-2">
          <div className="h-3 w-1 animate-pulse rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}