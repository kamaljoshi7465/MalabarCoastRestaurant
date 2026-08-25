import { Link } from "react-router-dom";

import type { Outlet } from "../../../data/home/restaurant/RestaurantsSection.data";

const DetailHero = ({ restaurant }: { restaurant: Outlet }) => (
  <section
    className="
      relative
      min-h-[780px]
      md:min-h-[650px]
      lg:h-[60vh]
      lg:min-h-[550px]
    "
  >
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${restaurant.image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
    </div>

    <div className="relative flex items-start lg:h-full lg:items-end">
      <div
        className="
          container-custom
          w-full
          px-4
          pt-28
          pb-10
          sm:px-6
          sm:pt-32
          sm:pb-12
          md:px-6
          md:pt-28
          md:pb-12
          lg:px-0
          lg:pt-0
          lg:pb-12
        "
      >
        <Link
          to="/restaurants"
          className="
            inline-flex
            items-center
            space-x-2
            text-white/90
            hover:text-white
            mb-5
            md:mb-6
          "
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>

          <span>Back to Restaurants</span>
        </Link>

        <div className="flex flex-wrap gap-3 mb-4">
          {restaurant.specialtyTags.map((v) => (
            <span
              key={v}
              className="
                px-3
                py-1.5
                md:px-4
                md:py-2
                bg-white/20
                backdrop-blur-sm
                text-white
                rounded-full
                text-xs
                md:text-sm
                font-semibold
              "
            >
              {v}
            </span>
          ))}
        </div>

        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-serif
            font-bold
            text-white
            mb-3
            md:mb-4
            leading-tight
          "
        >
          {restaurant.name}
        </h1>

        <p
          className="
            text-base
            sm:text-lg
            md:text-xl
            text-white/90
            max-w-full
            sm:max-w-3xl
            md:max-w-5xl
            lg:max-w-7xl
            leading-relaxed
          "
        >
          {restaurant.description}
        </p>
      </div>
    </div>
  </section>
);

export default DetailHero;