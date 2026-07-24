import { CAREERS_HERO, CAREERS_WHY, CAREERS_CTA } from "../../data/careers/careers.data";

const PerkIcon = ({ icon }: { icon: string }) => {
  if (icon === "team") return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-2xl text-primary-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
  if (icon === "growth") return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-2xl text-primary-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  );
  if (icon === "balance") return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-2xl text-primary-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-2xl text-primary-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
};

const Careers = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Hero */}
    <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${CAREERS_HERO.image})` }}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative h-full flex items-center">
        <div className="container-custom">
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-white mb-6">{CAREERS_HERO.title}</h1>
          <p className="text-2xl text-white/90 max-w-2xl">{CAREERS_HERO.subtitle}</p>
        </div>
      </div>
    </section>

    {/* Why Work Here */}
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">{CAREERS_WHY.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{CAREERS_WHY.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CAREERS_WHY.perks.map((perk) => (
            <div key={perk.title} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PerkIcon icon={perk.icon} />
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">{perk.title}</h3>
              <p className="text-sm text-gray-600">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-gradient-to-r from-primary-600 to-gold-600 text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl font-serif font-bold mb-4">{CAREERS_CTA.title}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{CAREERS_CTA.subtitle}</p>
        <a href={`mailto:${CAREERS_CTA.email}`} className="btn-primary bg-white text-primary-600 hover:bg-gray-100">Send Resume</a>
      </div>
    </section>
  </div>
);

export default Careers;
