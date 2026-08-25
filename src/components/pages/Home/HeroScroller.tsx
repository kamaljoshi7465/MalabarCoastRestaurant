import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

import ViewMoreButton from "../../buttons/ViewMoreButton";
import { HERO_ASSETS, HERO_CONTENT } from "../../../data/home/hero/hero.data";

const slides = [
  { type: "video", src: HERO_ASSETS.video, content: HERO_CONTENT[0] },
  { type: "image", src: HERO_ASSETS.outlet, content: HERO_CONTENT[1] },
  { type: "image", src: HERO_ASSETS.gallery[0], content: HERO_CONTENT[2] },
  { type: "image", src: HERO_ASSETS.gallery[1], content: HERO_CONTENT[3] },
  { type: "image", src: HERO_ASSETS.gallery[2], content: HERO_CONTENT[4] },
];

const SLIDE_DURATION = 6000;

export default function HeroScroller() {
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeSlide = slides[current];
  const isVideoSlide = activeSlide.type === "video";

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [current]);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const displayContent =
    activeSlide.content ?? HERO_CONTENT[HERO_CONTENT.length - 1];

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div
        className={`absolute inset-0 z-10 transition-opacity duration-1000 ${
          isVideoSlide
            ? "opacity-50"
            : "pointer-events-none opacity-0"
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
          className="absolute bottom-8 right-8 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/40 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/70 max-sm:bottom-20 max-sm:right-4"
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
              isActive
                ? "opacity-100"
                : "pointer-events-none opacity-0"
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

      <div className="relative z-10 flex h-full items-center pt-24 md:pt-0">
        <div className="container-custom w-full">
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 md:px-0">
            <h1 className="mb-6 text-4xl font-serif font-bold leading-tight text-white sm:text-5xl md:text-7xl">
              {displayContent.title}
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-gray-200 sm:text-xl md:text-2xl">
              {displayContent.subtitle}
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <ViewMoreButton
                text={displayContent.primaryLabel}
                href={displayContent.primaryHref}
              />

              <ViewMoreButton
                text={displayContent.secondaryLabel ?? ""}
                href={displayContent.secondaryHref ?? ""}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 space-x-2 sm:bottom-8 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={
              index === 0
                ? "Go to video slide"
                : `Go to slide ${index}`
            }
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 sm:h-3 ${
              index === current
                ? "w-7 bg-white sm:w-8"
                : "w-2.5 bg-white/50 hover:bg-white/75 sm:w-3"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 z-20 hidden animate-bounce sm:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white p-2">
          <div className="h-3 w-1 animate-pulse rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}