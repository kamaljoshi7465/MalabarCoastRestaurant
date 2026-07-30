import { GALLERY_IMAGES } from "../../../data/gallery/galleryHeader.data";

const GalleryGrid = () => {

  return (
    <section className="py-10">
      <div className="container-custom">
        <div className="columns-2 space-y-4 gap-4 md:columns-3 md:space-y-5 md:gap-5 lg:columns-4">
          {GALLERY_IMAGES.map((image) => (
            <div key={image.src} className="mb-4 break-inside-avoid md:mb-5">
              <div className="group relative cursor-pointer overflow-hidden rounded-xl ring-1 ring-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:ring-primary-500/40">
                <img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"><p className="text-sm font-medium text-white drop-shadow-lg">{image.alt}</p></div>
              </div>
            </div>
          ))}
        </div>
        {GALLERY_IMAGES.length === 0 && <p className="py-12 text-center text-sm text-white/50">More moments coming soon.</p>}
      </div>
    </section>
  );
};

export default GalleryGrid;
