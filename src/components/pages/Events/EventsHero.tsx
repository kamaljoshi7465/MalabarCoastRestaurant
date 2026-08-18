import { EVENTS_HERO } from "../../../data/events/events.data";

const EventsHero = () => (
  <section
    className="relative min-h-[80vh] bg-cover bg-center"
    style={{ backgroundImage: `url("${EVENTS_HERO.image}")` }}
  >
    <div className="absolute inset-0 bg-black/60" />

    <div className="relative min-h-[80vh] flex items-center py-30">
      <div className="container-custom w-full">
        <h1 className="text-6xl md:text-7xl font-serif font-bold text-white mb-6">
          {EVENTS_HERO.title}
        </h1>

        <p className="text-2xl text-white/90 max-w-3xl mb-8">
          {EVENTS_HERO.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
          <a
            href="#event-types"
            className="flex-1 inline-flex items-center justify-center py-3 px-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Explore Event
          </a>

          <a
            href="https://www.mahabelly.com/onam-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center py-3 px-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Special Event
          </a>

          <a
            href="/reservations"
            className="flex-1 inline-flex items-center justify-center py-3 px-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Book Your Event
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default EventsHero;
