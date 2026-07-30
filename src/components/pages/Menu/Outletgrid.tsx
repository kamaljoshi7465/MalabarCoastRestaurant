import { Link } from "react-router-dom";
import { OUTLETS, type Outlet } from "../../../data/home/restaurant/RestaurantsSection.data";

const FoodIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 2v9M7 11a3 3 0 0 0 3-3V2M4 2v6a3 3 0 0 0 3 3" />
    <path d="M17 2c-1.5 1-2.5 3-2.5 5.5S15.5 13 17 13v9" />
  </svg>
);

const DrinkIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16l-8 9-8-9Z" />
    <path d="M12 13v7" />
    <path d="M8 21h8" />
    <path d="M15 4l2-2" />
  </svg>
);

const KittyPartyIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 10 10" />
    <path d="M12 8v4l3 3" />
    <path d="M18 2l2 2-2 2" />
    <path d="M22 2h-4" />
  </svg>
);

const DownloadIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 group-hover/btn:translate-y-0.5 transition-transform" height="1em" width="1em">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ArrowIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform" height="1em" width="1em">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const PinIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5" height="1em" width="1em">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const OutletCard = ({ outlet }: { outlet: Outlet }) => {
  const { name, location, city, image, specialtyTags, specialties, menus, slug } = outlet;

  return (
    <div className="group relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-primary-500/40 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary-500/10 flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="text-xl font-serif font-bold text-white mb-1 drop-shadow-lg">{name}</h3>
          <div className="flex items-center text-white/80 text-xs">
            <PinIcon />
            <span>{location} · {city}</span>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1 mb-3">
          {specialtyTags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-full bg-white/5 text-white/70 text-[10px] uppercase tracking-wider border border-white/10">{tag}</span>
          ))}
        </div>

        <div className="mb-4">
          <p className="text-[10px] uppercase tracking-widest text-gold-400/80 mb-1.5">Signatures</p>
          <p className="text-xs text-white/70 leading-relaxed line-clamp-2">{specialties.join(" · ")}</p>
        </div>

        <div className="mt-auto space-y-2">
          {menus.food ? (
            <a href={menus.food} target="_blank" rel="noopener noreferrer" className="group/btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white text-sm font-medium border transition-all bg-primary-600/90 hover:bg-primary-600 border-primary-500/30 hover:border-primary-400">
              <span className="group-hover/btn:scale-110 transition-transform"><FoodIcon /></span>
              <span className="flex-1 text-left">Food Menu</span>
              <DownloadIcon />
            </a>
          ) : (
            <button disabled className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white/40 text-sm cursor-not-allowed">
              <span className="opacity-60"><FoodIcon /></span>
              <span className="flex-1 text-left">Food Menu</span>
              <span className="text-[10px] uppercase tracking-widest opacity-60">Coming Soon</span>
            </button>
          )}

          {menus.mocktail ? (
            <a href={menus.mocktail} target="_blank" rel="noopener noreferrer" className="group/btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white text-sm font-medium border transition-all bg-gold-600/90 hover:bg-gold-600 border-gold-500/30 hover:border-gold-400">
              <span className="group-hover/btn:scale-110 transition-transform"><DrinkIcon /></span>
              <span className="flex-1 text-left">Mocktail Menu</span>
              <DownloadIcon />
            </a>
          ) : (
            <button disabled className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white/40 text-sm cursor-not-allowed">
              <span className="opacity-60"><DrinkIcon /></span>
              <span className="flex-1 text-left">Mocktail Menu</span>
              <span className="text-[10px] uppercase tracking-widest opacity-60">Coming Soon</span>
            </button>
          )}

          {menus.kittyParty && (
            <a href={menus.kittyParty} target="_blank" rel="noopener noreferrer" className="group/btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white text-sm font-medium border transition-all bg-pink-700/90 hover:bg-pink-700 border-pink-600/30 hover:border-pink-500">
              <span className="group-hover/btn:scale-110 transition-transform"><KittyPartyIcon /></span>
              <span className="flex-1 text-left">Kitty Party Menu</span>
              <DownloadIcon />
            </a>
          )}

          <Link to={`/restaurants/${slug}`} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider text-white/70 hover:text-white transition-colors">
            <span>View Outlet</span>
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

interface Props {
  activeRegion: string;
}

const Outletgrid = ({ activeRegion }: Props) => {
  const filtered = activeRegion === "All" ? OUTLETS : OUTLETS.filter((o) => o.city === activeRegion);

  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((outlet) => (
            <OutletCard key={outlet.id} outlet={outlet} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outletgrid;
