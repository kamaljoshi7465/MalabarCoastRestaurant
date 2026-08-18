import { GALLERY_HEADER_DATA } from "../../../data/gallery/galleryHeader.data";

const GalleryHeader = () => (
  <section className="relative h-[50vh] min-h-[100px] pt-40 overflow-hidden bg-black">
    <div className="absolute inset-0">
      <img src={GALLERY_HEADER_DATA.image} alt="Malabar Coast" className="size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
      <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(220, 38, 38, 0.4), transparent 50%), radial-gradient(circle at 80% 70%, rgba(202, 138, 4, 0.3), transparent 50%)" }} />
    </div>
    <div className="relative flex size-full items-center justify-center">
      <div className="container-custom text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary-400">{GALLERY_HEADER_DATA.eyebrow}</p>
        <h1 className="mb-6 text-5xl leading-tight font-serif font-bold text-white drop-shadow-lg md:text-7xl">{GALLERY_HEADER_DATA.title} <span className="italic text-gold-400">{GALLERY_HEADER_DATA.titleAccent}</span></h1>
        <div className="mx-auto flex min-h-[110px] max-w-xl items-start justify-center">
          <p className="w-full text-base leading-relaxed text-white/80 drop-shadow md:text-lg">
            {GALLERY_HEADER_DATA.description}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default GalleryHeader;
