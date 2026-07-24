import { Link } from "react-router-dom";
import { EVENTS_CONTACT } from "../../../data/events/events.data";

const EventsContact = () => (
  <section id="contact" className="section-padding bg-gradient-to-r from-primary-600 to-gold-600 text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
    </div>
    <div className="container-custom relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{EVENTS_CONTACT.title}</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">{EVENTS_CONTACT.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <a href={`tel:${EVENTS_CONTACT.phone}`} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-4xl mx-auto mb-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          <h3 className="font-bold mb-2">Call Us</h3>
          <p className="text-sm opacity-90">{EVENTS_CONTACT.phoneDisplay}</p>
        </a>
        <a href={`mailto:${EVENTS_CONTACT.email}`} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-4xl mx-auto mb-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
          <h3 className="font-bold mb-2">Email Us</h3>
          <p className="text-sm opacity-90">{EVENTS_CONTACT.email}</p>
        </a>
        <Link to="/contact" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-4xl mx-auto mb-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
          <h3 className="font-bold mb-2">Visit Us</h3>
          <p className="text-sm opacity-90">Find nearest outlet</p>
        </Link>
      </div>
    </div>
  </section>
);

export default EventsContact;
