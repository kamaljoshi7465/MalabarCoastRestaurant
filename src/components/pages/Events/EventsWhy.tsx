import { EVENTS_WHY } from "../../../data/events/events.data";

const WhyIcon = ({ icon }: { icon: string }) => {
  if (icon === "calendar") return <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-3xl text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
  if (icon === "check") return <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-3xl text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>;
  if (icon === "team") return <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-3xl text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
  return <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-3xl text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>;
};

const EventsWhy = () => (
  <section className="section-padding bg-white">
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">{EVENTS_WHY.title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{EVENTS_WHY.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {EVENTS_WHY.features.map((f) => (
          <div key={f.title} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <WhyIcon icon={f.icon} />
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{f.title}</h3>
            <p className="text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EventsWhy;
