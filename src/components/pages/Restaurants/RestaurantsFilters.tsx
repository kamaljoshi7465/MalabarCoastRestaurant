import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { RESTAURANT_CITY_FILTERS, RESTAURANT_VIBE_FILTERS } from "../../../data/restaurants/restaurantsPage.data";

type RestaurantsFiltersProps = { city: string; vibe: string; onCityChange: (city: string) => void; onVibeChange: (vibe: string) => void };

const RestaurantsFilters = ({ city, vibe, onCityChange, onVibeChange }: RestaurantsFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="sticky top-20 z-40 bg-white shadow-md">
      <div className="container-custom py-2">
        <button type="button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} className="flex w-full items-center justify-between py-2 text-sm font-semibold text-gray-700 transition-colors hover:text-primary-600">
          <span className="flex items-center gap-2"><ChevronDown className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />Filters</span><span className="text-xs text-gray-600">14 outlets</span>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="space-y-3 pt-3 pb-2">
            <FilterGroup label="Filter by City" filters={RESTAURANT_CITY_FILTERS} activeFilter={city} onChange={onCityChange} activeClass="bg-primary-600 text-white shadow-md" />
            <FilterGroup label="Filter by Vibe" filters={RESTAURANT_VIBE_FILTERS} activeFilter={vibe} onChange={onVibeChange} activeClass="bg-gold-500 text-white shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

type FilterGroupProps = { label: string; filters: string[]; activeFilter: string; onChange: (filter: string) => void; activeClass: string };

const FilterGroup = ({ label, filters, activeFilter, onChange, activeClass }: FilterGroupProps) => <div><p className="mb-1.5 text-xs font-semibold text-gray-700">{label}</p><div className="flex flex-wrap gap-1.5">{filters.map((filter) => <button key={filter} type="button" onClick={() => onChange(filter)} className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-300 ${activeFilter === filter ? activeClass : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>{filter}</button>)}</div></div>;

export default RestaurantsFilters;
