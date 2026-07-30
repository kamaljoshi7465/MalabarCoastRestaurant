import { OUTLETS, RESTAURANT_CITY_FILTERS } from "../../../data/home/restaurant/RestaurantsSection.data";

interface Props {
  activeRegion: string;
  onRegionChange: (region: string) => void;
}

const Menufilterbar = ({ activeRegion, onRegionChange }: Props) => {
  const countFor = (value: string) =>
    value === "All" ? OUTLETS.length : OUTLETS.filter((o) => o.city === value).length;

  return (
    <section className="sticky top-20 z-30 bg-black/80 backdrop-blur-md border-y border-white/10">
      <div className="container-custom py-4 flex justify-center overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {RESTAURANT_CITY_FILTERS.map((value) => {
            const active = activeRegion === value;
            return (
              <button
                key={value}
                onClick={() => onRegionChange(value)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all ${
                  active
                    ? "bg-white text-black font-semibold"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {value} <span className="opacity-60">· {countFor(value)}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menufilterbar;
