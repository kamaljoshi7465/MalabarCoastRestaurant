import React, { useEffect, useState, useRef, useCallback } from "react";
import CarouselNavButton from "../../buttons/CarouselNavButton";
import CraftedDrinkCard from "../../cards/CraftedDrinkCard";
import { DRINKS } from "../../../data/home/crafteddrinkscarousel/crafteddrinkscarousel.data";

const ITEMS_PER_VIEW = 3;
const TOTAL_SLIDES = Math.max(DRINKS.length - ITEMS_PER_VIEW + 1, 1);

const CraftedDrinksCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(2);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef<boolean>(false);
  const dragStartX = useRef<number>(0);
  const dragDelta = useRef<number>(0);

  const goToSlide = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, TOTAL_SLIDES - 1));
    setCurrentIndex(clamped);
  }, []);

  const handlePrev = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const handleNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    dragDelta.current = e.clientX - dragStartX.current;
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const threshold = 60;
    if (dragDelta.current > threshold) {
      handlePrev();
    } else if (dragDelta.current < -threshold) {
      handleNext();
    }
    dragDelta.current = 0;
  };

  useEffect(() => {
    const autoplayTimer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TOTAL_SLIDES);
    }, 4000);

    return () => window.clearInterval(autoplayTimer);
  }, []);

  const translatePercent = currentIndex * (100 / ITEMS_PER_VIEW);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Crafted Drinks
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience our signature beverages crafted with premium ingredients and traditional
            Indian flavors
          </p>
        </div>

        <div className="relative">
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <div
              ref={trackRef}
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${translatePercent}%)`,
                willChange: "transform",
              }}
            >
              {DRINKS.map((drink) => (
                <CraftedDrinkCard key={drink.name} drink={drink} />
              ))}
            </div>
          </div>

          <CarouselNavButton direction="left" onClick={handlePrev} ariaLabel="Previous drink">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-2xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </CarouselNavButton>

          <CarouselNavButton direction="right" onClick={handleNext} ariaLabel="Next drink">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-2xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </CarouselNavButton>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftedDrinksCarousel;