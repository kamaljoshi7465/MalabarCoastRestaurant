import React, { useEffect, useState, useRef, useCallback } from "react";
import CarouselNavButton from "../../buttons/CarouselNavButton";
import CraftedDrinkCard from "../../cards/CraftedDrinkCard";
import { DRINKS } from "../../../data/home/crafteddrinkscarousel/crafteddrinkscarousel.data";

const ITEMS_PER_VIEW = 3;
const TOTAL = DRINKS.length;

const LOOPED_DRINKS = [...DRINKS, ...DRINKS];

const CraftedDrinksCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [animated, setAnimated] = useState<boolean>(true);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef<boolean>(false);
  const dragStartX = useRef<number>(0);
  const dragDelta = useRef<number>(0);

  const goToSlide = useCallback((index: number) => {
    setAnimated(true);
    setCurrentIndex(index);
  }, []);

  const handleNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const handlePrev = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    if (currentIndex >= TOTAL) {
      const timer = setTimeout(() => {
        setAnimated(false);
        setCurrentIndex(currentIndex - TOTAL);
      }, 700);
      return () => clearTimeout(timer);
    }
    if (currentIndex < 0) {
      const timer = setTimeout(() => {
        setAnimated(false);
        setCurrentIndex(currentIndex + TOTAL);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

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
    if (dragDelta.current > 60) handlePrev();
    else if (dragDelta.current < -60) handleNext();
    dragDelta.current = 0;
  };

  useEffect(() => {
    const timer = window.setInterval(() => handleNext(), 4000);
    return () => window.clearInterval(timer);
  }, [handleNext]);

  const translatePercent = currentIndex * (100 / ITEMS_PER_VIEW);
  const dotIndex = ((currentIndex % TOTAL) + TOTAL) % TOTAL;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Crafted Drinks
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thoughtfully crafted. Refreshingly authentic.
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
              className="flex"
              style={{
                transform: `translateX(-${translatePercent}%)`,
                transition: animated ? "transform 700ms ease-out" : "none",
                willChange: "transform",
              }}
            >
              {LOOPED_DRINKS.map((drink, i) => (
                <CraftedDrinkCard key={`${drink.name}-${i}`} drink={drink} />
              ))}
            </div>
          </div>

          <CarouselNavButton direction="left" onClick={handlePrev} ariaLabel="Previous drink">
            <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </CarouselNavButton>

          <CarouselNavButton direction="right" onClick={handleNext} ariaLabel="Next drink">
            <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </CarouselNavButton>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {DRINKS.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === dotIndex ? "bg-primary-600 w-8" : "bg-gray-300 hover:bg-gray-400 w-2"
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