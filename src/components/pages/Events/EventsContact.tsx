import { OUTLETS } from "../../../data/home/restaurant/RestaurantsSection.data";

const PhoneIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EmailIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MapIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const EventsContact = () => (
  <section id="contact" className="section-padding bg-gradient-to-r from-primary-600 to-gold-600 text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
    </div>
    <div className="container-custom relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Plan Your Event With Us</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">Reach out to any of our outlets to book your next private dining or special event experience.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {OUTLETS.map((outlet) => (
          <div key={outlet.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col gap-4">
            <h3 className="font-serif font-bold text-xl text-center mb-2">{outlet.name}</h3>
            <p className="text-sm opacity-80 text-center">{outlet.location}</p>
            <a href={`tel:${outlet.phone}`} className="flex items-center gap-3 hover:bg-white/10 rounded-lg px-3 py-2 transition-all duration-300">
              <PhoneIcon />
              <span className="text-sm opacity-90">{outlet.phone}</span>
            </a>
            <a href={`mailto:${outlet.email}`} className="flex items-center gap-3 hover:bg-white/10 rounded-lg px-3 py-2 transition-all duration-300">
              <EmailIcon />
              <span className="text-sm opacity-90 break-all">{outlet.email}</span>
            </a>
            {outlet.googleMapLink && (
              <a href={outlet.googleMapLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:bg-white/10 rounded-lg px-3 py-2 transition-all duration-300">
                <MapIcon />
                <span className="text-sm opacity-90">Get Directions</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EventsContact;
