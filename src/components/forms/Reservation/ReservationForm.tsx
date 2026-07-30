import { CalendarDays, Clock, Users } from "lucide-react";
import { DATES, GUESTS, OCCASIONS, TIMES } from "../../../data/reservations/reservationDetails.data";
import ReservationField from "./ReservationField";
import ReservationSelect from "./ReservationSelect";
import { OUTLETS } from "../../../data/home/restaurant/RestaurantsSection.data";

const labelIconClass = "mr-1.5 mb-0.5 inline size-3.5";

const ReservationForm = () => (
  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
    <h2 className="mb-6 text-xl font-serif font-bold text-white">Your Details</h2>
    <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
      <ReservationSelect label="Select Outlet *" name="outlet" options={OUTLETS.map((o) => ({ value: o.slug, label: o.name }))} placeholder="Choose an outlet" required />
      <div className="grid grid-cols-2 gap-4">
        <ReservationSelect label="Date *" name="date" options={DATES} placeholder="Pick a date" required icon={<CalendarDays className={labelIconClass} />} />
        <ReservationSelect label="Time *" name="time" options={TIMES} placeholder="Pick a time" required icon={<Clock className={labelIconClass} />} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ReservationSelect label="Guests *" name="guests" options={GUESTS.map(({ value, label }) => [value, label] as const)} required defaultValue="1" icon={<Users className={labelIconClass} />} />
        <ReservationSelect label="Occasion" name="occasion" options={OCCASIONS} />
      </div>
      <ReservationField label="Full Name *" name="name" placeholder="Enter Your Name" required />
      <div className="grid grid-cols-2 gap-4">
        <ReservationField label="Email *" name="email" type="email" placeholder="Enter Your Email" required />
        <ReservationField label="Phone *" name="phone" type="tel" placeholder="Enter Your Phone Number" required /></div>
      <button type="submit" className="mt-2 w-full rounded-xl bg-primary-600 py-4 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-primary-700">Submit Reservation Request</button>
      <p className="text-center text-xs text-white/25">Submission does not guarantee a confirmed booking — our team will call to confirm.</p>
    </form>
  </div>
);

export default ReservationForm;
