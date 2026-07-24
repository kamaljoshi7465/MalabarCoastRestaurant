import { Link } from "react-router-dom";

const Menucta = () => (
  <section className="border-t border-white/10 py-16">
    <div className="container-custom text-center max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
        Looking for <span className="italic text-gold-400">Something Specific?</span>
      </h2>
      <p className="text-white/60 mb-8">We're happy to accommodate dietary requirements, allergen information, or special requests.</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link to="/reservations" className="px-7 py-3 bg-primary-600 hover:bg-primary-700 rounded-full font-medium transition-colors">Book a Table</Link>
        <Link to="/contact" className="px-7 py-3 bg-white/10 hover:bg-white/20 rounded-full font-medium transition-colors">Contact Us</Link>
      </div>
    </div>
  </section>
);

export default Menucta;
