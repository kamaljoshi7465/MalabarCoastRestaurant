import { useState } from "react";
import GalleryFilters from "../../components/pages/Gallery/GalleryFilters";
import GalleryGrid from "../../components/pages/Gallery/GalleryGrid";
import GalleryHeader from "../../components/pages/Gallery/GalleryHeader";
import type { GalleryCategory } from "../../data/gallery/galleryHeader.data";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");

  return <div className="bg-black"><GalleryHeader /><GalleryFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} /><GalleryGrid activeFilter={activeFilter} /></div>;
};

export default Gallery;
