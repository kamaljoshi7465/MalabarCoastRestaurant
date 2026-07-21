import { useState } from "react";
import { testimonials } from "../../../data/home/testimonials/testimonials.data";

const StarIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth={2}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gold-400 fill-gold-400 text-xl mx-1"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ChevronLeftIcon = () => (
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
);

const ChevronRightIcon = () => (
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
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToIndex = (index: number) => {
    setActiveIndex(index);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="section-padding bg-gray-900 text-white py-16 lg:py-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Read authentic reviews from our valued patrons across all restaurants
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 relative">
            <div className="text-6xl text-primary-500 opacity-20 absolute top-4 left-4 font-serif">
              "
            </div>

            <div className="relative">
              <div className="flex justify-center mb-6">
                {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              <p className="text-lg md:text-xl text-center mb-8 text-gray-200 italic">
                {activeTestimonial.quote}
              </p>

              <div className="text-center">
                <h4 className="text-lg font-semibold">{activeTestimonial.name}</h4>
                <p className="text-sm text-gray-300">{activeTestimonial.location}</p>
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
              <button
                onClick={goToPrevious}
                className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 -ml-6"
                aria-label="Previous testimonial"
              >
                <ChevronLeftIcon />
              </button>
              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 -mr-6"
                aria-label="Next testimonial"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => goToIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${index === activeIndex
                  ? "bg-primary-500 w-8"
                  : "w-3 bg-white/30 hover:bg-white/50"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;