import { OUTLETS } from "../../../data/home/restaurant/RestaurantsSection.data";

const PhoneIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const MailIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);

const MapIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);

const FooterContact = () => (
  <div className="mt-10 border-t border-gray-800 pt-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {OUTLETS.map((outlet) => (
        <div key={outlet.id}>
          <p className="text-sm font-semibold text-white mb-3">{outlet.name} <span className="text-primary-400">· {outlet.city}</span></p>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-gray-400">
              <span className="text-primary-500 mt-0.5"><MapIcon /></span>
              <a href={outlet.googleMapLink ?? "#"} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary-400 transition-colors">{outlet.address}</a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-primary-500"><PhoneIcon /></span>
              <a href={`tel:${outlet.phone}`} className="text-sm hover:text-primary-400 transition-colors">{outlet.phone}</a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-primary-500"><MailIcon /></span>
              <a href={`mailto:${outlet.email}`} className="text-sm hover:text-primary-400 transition-colors">{outlet.email}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FooterContact;
