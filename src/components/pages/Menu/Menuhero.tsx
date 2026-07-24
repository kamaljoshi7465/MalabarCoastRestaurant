import { MENU_HEADER_DATA } from "../../../data/Menu/menuHeader.data";

const Menuhero = () => (
  <section className="relative h-[60vh] min-h-[480px] overflow-hidden">
    <div className="absolute inset-0">
      <img src={MENU_HEADER_DATA.image} alt="Malabar Coast Menus" className="size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
      <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(220,38,38,0.4), transparent 50%), radial-gradient(circle at 80% 70%, rgba(202,138,4,0.3), transparent 50%)" }} />
    </div>
    <div className="relative flex size-full items-center justify-center">
      <div className="container-custom text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary-400">{MENU_HEADER_DATA.eyebrow}</p>
        <h1 className="mb-6 text-5xl leading-tight font-serif font-bold drop-shadow-lg md:text-7xl">{MENU_HEADER_DATA.title} <span className="italic text-gold-400">{MENU_HEADER_DATA.titleAccent}</span></h1>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-white/80 drop-shadow md:text-lg">{MENU_HEADER_DATA.description}</p>
      </div>
    </div>
  </section>
);

export default Menuhero;
