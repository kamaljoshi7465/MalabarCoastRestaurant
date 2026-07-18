import { useMemo, useState } from "react";
import { CITY_FILTERS, OUTLETS, type CityFilter } from "../../../../data/home/restaurant/RestaurantsSection.data";
import FilterButton from "../../../buttons/FilterButton";
import OutletCard from "./OutletCard";
import ViewMoreButton from "../../../buttons/ViewMoreButton";

const RestaurantsSection = () => {
  const [activeFilter, setActiveFilter] = useState<CityFilter>("All");

  const filteredOutlets = useMemo(() => {
    if (activeFilter === "All") return OUTLETS;
    return OUTLETS.filter((outlet) => outlet.city === activeFilter);
  }, [activeFilter]);

  return (
    <section className="section-padding bg-gray-50 py-16">
      <div className="container-custom mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-serif font-bold text-gray-900 md:text-5xl">
            Discover Our Restaurants
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Each location offers a unique dining experience with its own distinctive vibe and carefully curated menu
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {CITY_FILTERS.map((filter) => (
            <FilterButton
              key={filter}
              label={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredOutlets.map((outlet) => (
            <OutletCard key={outlet.id} outlet={outlet} />
          ))}
        </div>

        {filteredOutlets.length === 0 && (
          <p className="mt-8 text-center text-gray-500">No restaurants found in this location yet.</p>
        )}

        <div className="mt-12">
          <ViewMoreButton text="View All Restaurants" href="/restaurants" />
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;
