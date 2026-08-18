import { EVENTS_HERO } from "../../../data/events/events.data";

const EventsHero = () => (
  <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url("${EVENTS_HERO.image}")` }}>
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative h-full flex items-center">
      <div className="container-custom">
        <h1 className="text-6xl md:text-7xl font-serif font-bold text-white mb-6">{EVENTS_HERO.title}</h1>
        <p className="text-2xl text-white/90 max-w-3xl mb-8">{EVENTS_HERO.subtitle}</p>
        <div className="flex flex-wrap gap-4">
          <a href="#event-types" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-gold-600 text-white rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">Explore Event</a>
          <a href="https://www.mahabelly.com/onam-2026/" target="_blank" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-gold-600 text-white rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">Special Event</a>
          <a href="/reservations" className="inline-flex items-center justify-center px-8 py-4 bg-white/90 backdrop-blur-sm text-primary-600 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 hover:scale-105">Book Your Event</a>
        </div>
      </div>
    </div>
  </section>
);

export default EventsHero;
