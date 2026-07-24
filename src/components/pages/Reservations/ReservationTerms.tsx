import { Check, Clock, Users } from "lucide-react";
import { RESERVATION_PERKS, RESERVATION_TERMS } from "../../../data/reservations/reservationDetails.data";

const perkIcons = { check: Check, clock: Clock, users: Users };

const ReservationTerms = () => (
  <aside className="lg:sticky lg:top-24">
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <h2 className="mb-5 text-lg font-serif font-bold text-white">Terms &amp; Conditions</h2>
      <ul className="space-y-4">
        {RESERVATION_TERMS.map((term) => <li key={term} className="flex gap-3 text-xs leading-relaxed text-white/50"><span className="mt-0.5 shrink-0 text-primary-500">•</span><span>{term}</span></li>)}
      </ul>
    </div>
    <div className="mt-4 grid grid-cols-3 gap-3">
      {RESERVATION_PERKS.map((perk) => { const Icon = perkIcons[perk.icon]; return <div key={perk.title} className="rounded-2xl border border-white bg-white/[0.03] p-4 text-center"><Icon className="mx-auto mb-2 size-5 text-primary-400" /><p className="text-xs leading-tight font-semibold text-white">{perk.title}</p><p className="mt-1 text-[10px] text-white/35">{perk.description}</p></div>; })}
    </div>
  </aside>
);

export default ReservationTerms;
