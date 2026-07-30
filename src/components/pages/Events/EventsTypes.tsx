import { useState } from "react";
import { EVENTS_TYPES } from "../../../data/events/events.data";

const EventTypeIcon = ({ icon }: { icon: string }) => {
  if (icon === "team") return <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-2xl text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
  if (icon === "briefcase") return <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-2xl text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>;
  return <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-2xl text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>;
};

const EventsTypes = () => {
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  return (
    <section id="event-types" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">{EVENTS_TYPES.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{EVENTS_TYPES.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS_TYPES.events.map((ev) => {
            const isOpen = openTitle === ev.title;
            return (
              <div key={ev.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img src={ev.image} alt={ev.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <EventTypeIcon icon={ev.icon} />
                      <h3 className="text-2xl font-serif font-bold text-white">{ev.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{ev.description}</p>
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                      <span>Capacity: {ev.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                      <span>Duration: {ev.duration}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpenTitle(isOpen ? null : ev.title)}
                    className="w-full py-3 px-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all mb-4"
                  >
                    {isOpen ? "Show Less" : "View Details"}
                  </button>
                  {isOpen && (
                    <div className="space-y-4 animate-fadeIn border-t pt-4">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                          Features Included
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {ev.features.map((f) => (
                            <li key={f} className="flex items-start gap-2">
                              <span className="text-primary-600 mt-1">•</span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Ideal For</h4>
                        <div className="flex flex-wrap gap-2">
                          {ev.idealFor.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-gold-50 text-gold-700 text-xs rounded-full">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <a href="#contact" className="block w-full py-3 bg-gradient-to-r from-primary-600 to-gold-600 text-white text-center font-bold rounded-lg hover:shadow-lg transition-all">Book This Event</a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventsTypes;
