import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { UPCOMING_RESTAURANTS_DATA } from "../../../data/restaurants/restaurantsPage.data";

const UpcomingRestaurants = () => (
  <section id="upcoming" className="section-padding bg-white">
    <div className="container-custom">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-serif font-bold text-gray-900">{UPCOMING_RESTAURANTS_DATA.title}</h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">{UPCOMING_RESTAURANTS_DATA.description}</p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" />
      <div className="mt-12 text-center">
        <p className="mb-4 text-gray-600">{UPCOMING_RESTAURANTS_DATA.prompt}</p>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-[1.04] hover:bg-primary-700"><span>Suggest a Location</span><ArrowRight className="size-4" /></Link>
      </div>
    </div>
  </section>
);

export default UpcomingRestaurants;
