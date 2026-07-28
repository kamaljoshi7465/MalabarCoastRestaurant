import { Link } from "react-router-dom";
import type { Outlet } from "../../../data/home/restaurant/RestaurantsSection.data";

const DetailHero = ({ restaurant }: { restaurant: Outlet }) => (
  <section className="relative h-[60vh] min-h-[500px]">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${restaurant.image})` }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
    </div>
    <div className="relative h-full flex items-end">
      <div className="container-custom pb-12">
        <Link to="/restaurants" className="inline-flex items-center space-x-2 text-white/90 hover:text-white mb-6">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
          </svg>
          <span>Back to Restaurants</span>
        </Link>
        <div className="flex flex-wrap gap-3 mb-4">
          {restaurant.specialtyTags.map((v) => (
            <span key={v} className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">{v}</span>
          ))}
        </div>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">{restaurant.name}</h1>
        <p className="text-xl text-white/90 max-w-7xl">{restaurant.description}</p>
      </div>
    </div>
  </section>
);

export default DetailHero;
