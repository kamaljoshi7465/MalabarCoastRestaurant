import { useEffect, useRef } from "react";
import { testimonials as EVENTS_TESTIMONIALS } from "../../../data/home/testimonials/testimonials.data";

const StarIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-gold-600 fill-current text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const doubled = [...EVENTS_TESTIMONIALS, ...EVENTS_TESTIMONIALS];

const EventsTestimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let frame: number;
    const step = () => {
      if (!isPaused.current && el) {
        el.scrollLeft += 0.5;
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-gold-50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real experiences from real celebrations</p>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth"
          style={{ scrollbarWidth: "none" }}
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
        >
          {doubled.map((t, i) => (
            <div key={i} className="flex-shrink-0 w-[400px] bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-5xl text-primary-500 opacity-20 font-serif mb-4">"</div>
              <div className="flex gap-1 mb-4">{Array(5).fill(0).map((_, j) => <StarIcon key={j} />)}</div>
              <p className="text-gray-700 italic mb-6 min-h-[120px]">{t.quote}</p>
              <div className="border-t pt-4">
                <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                <p className="text-sm text-primary-600 font-medium">{t.designation}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 italic">Hover over testimonials to pause auto-scroll</p>
        </div>
      </div>
    </section>
  );
};

export default EventsTestimonials;
