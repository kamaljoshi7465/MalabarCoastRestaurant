import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  OUTLETS,
  type Outlet,
} from "../../../data/home/restaurant/RestaurantsSection.data";

type RestaurantCardsProps = {
  city: string;
  vibe: string;
};

const RestaurantCards = ({ city, vibe }: RestaurantCardsProps) => {
  const restaurants = OUTLETS.filter(
    (restaurant) =>
      (city === "All" || restaurant.city === city) &&
      (vibe === "All" ||
        restaurant.specialtyTags.includes(vibe) ||
        restaurant.amenities.includes(vibe) ||
        restaurant.specialties.includes(vibe)),
  );

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.slug}
              restaurant={restaurant}
            />
          ))}
        </div>

        {restaurants.length === 0 && (
          <p className="py-12 text-center text-gray-500">
            No restaurants match these filters yet.
          </p>
        )}
      </div>
    </section>
  );
};

const RestaurantCard = ({ restaurant }: { restaurant: Outlet }) => (
  <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/5">
    <Link
      to={`/restaurants/${restaurant.slug}`}
      className="relative block h-64 shrink-0 overflow-hidden"
    >
      <img
        src={restaurant.image}
        alt={restaurant.name}
        loading="lazy"
        className="size-full object-cover transition-transform duration-300 hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-sm">
        <span className="relative flex size-3 items-center justify-center">
          <span className="absolute size-3 animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative size-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e,0_0_20px_#22c55e]" />
        </span>

        <span className="text-xs font-semibold tracking-wide text-green-400">
          OPEN
        </span>
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="mb-1 text-2xl font-serif font-bold text-white">
          {restaurant.name}
        </h3>

        <p className="flex items-center text-sm text-white/90">
          <MapPin className="mr-2 size-4 shrink-0" />
          {restaurant.location}
        </p>
      </div>
    </Link>

    <div className="flex flex-1 flex-col p-6">
      <div className="mb-4 flex min-h-[32px] flex-wrap gap-2">
        {restaurant.specialtyTags.map((vibe) => (
          <span
            key={vibe}
            className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700"
          >
            {vibe}
          </span>
        ))}
      </div>

      <p className="mb-4 min-h-[48px] text-sm leading-6 text-gray-600">
        {restaurant.description}
      </p>

      <div className="mb-4 min-h-[128px] space-y-3">
        <p className="flex items-start text-sm text-gray-700">
          <MapPin className="mr-2 mt-1 size-4 shrink-0 text-primary-600" />
          <span>{restaurant.address}</span>
        </p>

        <a
          href={`tel:${restaurant.phone}`}
          className="flex items-center text-sm text-gray-700 hover:text-primary-600"
        >
          <Phone className="mr-2 size-4 shrink-0 text-primary-600" />
          {restaurant.phone}
        </a>

        <p className="flex items-start text-sm text-gray-700">
          <Clock className="mr-2 mt-1 size-4 shrink-0 text-primary-600" />

          <span>
            {restaurant.hours.weekday}
            <br />
            <span className="text-xs text-gray-500">
              Weekend: {restaurant.hours.weekend}
            </span>
          </span>
        </p>
      </div>

      <div className="mt-auto mb-4 flex min-h-[52px] flex-wrap gap-2 border-b pb-4">
        {restaurant.amenities.map((amenity) => (
          <span
            key={amenity}
            className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600"
          >
            {amenity}
          </span>
        ))}
      </div>

      <div className="mb-4 min-h-[60px]">
        <h4 className="mb-2 text-xs font-semibold uppercase text-gray-700">
          Specialties
        </h4>

        <div className="flex flex-wrap gap-2">
          {restaurant.specialties.map((specialty) => (
            <span
              key={specialty}
              className="rounded bg-gold-400/10 px-2 py-1 text-xs text-gold-600"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex gap-2">
          <Link
            to={`/restaurants/${restaurant.slug}`}
            className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-primary-600 py-2 text-sm text-white hover:bg-primary-700"
          >
            Details
            <ArrowRight className="size-4" />
          </Link>

          <Link
            to={`/reservations?outlet=${restaurant.slug}`}
            className="flex-1 rounded-lg border border-primary-600 py-2 text-center text-sm text-primary-600 hover:bg-primary-50"
          >
            Book Table
          </Link>
        </div>

        <a
          href={restaurant.googleMapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:from-amber-600 hover:to-orange-600"
        >
          <MapPin className="size-4" />
          Get Directions
        </a>
      </div>
    </div>
  </article>
);

export default RestaurantCards;