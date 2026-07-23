import { CTA_CONTENT, CTA_ICONS, CTA_STATS } from "../../../data/about/cta/cta.data";

const CtaSection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-gold-600 text-white relative overflow-hidden px-4 py-16 md:px-8 lg:px-16 lg:py-24">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
          {CTA_ICONS.heart}
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          {CTA_CONTENT.title}
        </h2>

        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
          {CTA_CONTENT.description}{" "}
          <span className="font-bold">{CTA_CONTENT.highlightedText}</span> across
          Delhi NCR
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <a
            href="/restaurants"
            className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Find an Outlet</span>
            {CTA_ICONS.arrowRight}
          </a>
          <a
            href="/reservations"
            className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Book a Table</span>
            {CTA_ICONS.calendar}
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 border-t border-white/30">
          {CTA_STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-serif font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-wider opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;