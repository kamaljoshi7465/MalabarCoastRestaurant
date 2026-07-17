import { Clock, MapPin } from "lucide-react";
import type { FC } from "react";
import StatusBadge from "./StatusBadge";
import type { Outlet } from "../../../../data/home/restaurant/RestaurantsSection.data";

interface OutletCardProps {
  outlet: Outlet;
}

const OutletCard: FC<OutletCardProps> = ({ outlet }) => (
  <a
    className="card group outlet-card block overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
    href={`/restaurants/${outlet.slug}`}
  >
    <div className="relative h-64 overflow-hidden">
      <img
        src={outlet.image}
        alt={outlet.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <StatusBadge isOpen={outlet.isOpen} />
      <div className="absolute right-4 top-4 flex flex-wrap gap-2">
        {outlet.topTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="p-6">
      <h3 className="mb-2 text-xl font-serif font-bold text-gray-900 transition-colors group-hover:text-primary-600">
        {outlet.name}
      </h3>

      <div className="mb-3 flex items-center text-gray-600">
        <MapPin className="mr-2 text-primary-600" size="1em" />
        <span className="text-sm">{outlet.location}</span>
      </div>

      <p className="mb-4 line-clamp-2 text-sm text-gray-600">{outlet.description}</p>

      <div className="flex items-center border-t pt-4 text-sm text-gray-500">
        <div className="flex items-center">
          <Clock className="mr-1" size="1em" />
          <span>{outlet.isOpen ? "Open Now" : "Closed"}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {outlet.bottomTags.map((tag) => (
          <span key={tag} className="rounded bg-primary-50 px-2 py-1 text-xs text-primary-700">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </a>
);

export default OutletCard;
