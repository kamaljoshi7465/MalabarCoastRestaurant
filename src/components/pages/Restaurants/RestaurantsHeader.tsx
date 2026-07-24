import { Map } from "lucide-react";
import { RESTAURANTS_HEADER_DATA } from "../../../data/restaurants/restaurantsPage.data";

const RestaurantsHeader = () => (
  <section className="bg-gradient-to-r from-primary-600 to-gold-600 pt-32 pb-20 text-white">
    <div className="container-custom">
      <div className="mb-6 text-center">
        <h1 className="mb-4 text-5xl font-serif font-bold md:text-6xl">{RESTAURANTS_HEADER_DATA.title}</h1>
        <p className="mx-auto max-w-2xl text-xl">{RESTAURANTS_HEADER_DATA.description}</p>
      </div>
      <div className="flex justify-center">
        <a href={RESTAURANTS_HEADER_DATA.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 backdrop-blur-sm transition-all hover:bg-white/20"><Map className="size-4" /><span className="font-semibold">View on Map</span></a>
      </div>
    </div>
  </section>
);

export default RestaurantsHeader;
