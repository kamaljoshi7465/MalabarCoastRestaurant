import { GALLERY_FILTERS, type GalleryCategory } from "../../../data/gallery/galleryHeader.data";

type GalleryFiltersProps = { activeFilter: GalleryCategory; onFilterChange: (filter: GalleryCategory) => void };

const GalleryFilters = ({ activeFilter, onFilterChange }: GalleryFiltersProps) => {
  return (
    <section className="sticky top-20 z-30 border-y border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container-custom flex justify-center overflow-x-auto py-4">
        <div className="flex min-w-max gap-2">
          {GALLERY_FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => onFilterChange(filter)}
                className={`rounded-full px-4 py-1.5 text-xs uppercase tracking-wider capitalize transition-all ${isActive ? "bg-white font-semibold text-black" : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"}`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryFilters;
