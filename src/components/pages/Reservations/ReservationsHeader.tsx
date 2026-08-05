import { useState } from "react";
import { History } from "lucide-react";
import { RESERVATIONS_HEADER_DATA } from "../../../data/reservations/reservationsHeader.data";
import BookingHistoryModal from "./BookingHistoryModal";

const imageCards = [
  "absolute top-0 left-4 h-56 w-44 -rotate-3",
  "absolute top-6 left-40 z-10 h-60 w-44 rotate-2",
  "absolute top-2 left-[19rem] z-20 h-52 w-40 -rotate-1",
];

const ReservationsHeader = () => {
  const [historyOpen, setHistoryOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img src={RESERVATIONS_HEADER_DATA.backgroundImage} alt="" fetchPriority="high" decoding="async" className="size-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
        <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(220, 38, 38, 0.25), transparent 45%), radial-gradient(circle at 85% 50%, rgba(202, 138, 4, 0.15), transparent 45%)" }} />
      </div>

      <div className="relative container-custom pt-36 pb-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary-400">{RESERVATIONS_HEADER_DATA.eyebrow}</p>
            <h1 className="mb-5 text-5xl leading-tight font-serif font-bold text-white md:text-6xl">
              {RESERVATIONS_HEADER_DATA.title} <br />
              <span className="italic text-gold-400">{RESERVATIONS_HEADER_DATA.titleAccent}</span>
            </h1>
            <p className="max-w-md text-base leading-relaxed text-white/50 md:text-lg">{RESERVATIONS_HEADER_DATA.description}</p>
            <div className="mt-8 flex items-center gap-3 text-xs text-white/30"><span className="h-px w-8 bg-white/20" /><span>{RESERVATIONS_HEADER_DATA.caption}</span><span className="h-px w-8 bg-white/20" /></div>
            <button type="button" onClick={() => setHistoryOpen(true)} className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white/70 transition-colors duration-300 hover:border-primary-500/60 hover:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-black">
              <History className="size-4" />Check Booking History
            </button>
          </div>

          <div className="relative hidden h-72 lg:block">
            {RESERVATIONS_HEADER_DATA.galleryImages.map((image, index) => (
              <div key={image} className={`${imageCards[index]} overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10`}>
                <img src={image} alt="" loading="lazy" decoding="async" className="size-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {historyOpen && <BookingHistoryModal onClose={() => setHistoryOpen(false)} />}
    </section>
  );
};

export default ReservationsHeader;
