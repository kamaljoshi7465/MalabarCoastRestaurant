import { CalendarDays, Clock, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { GUESTS, OCCASIONS, getOutletTimeSlots, isWeekend } from "../../../data/reservations/reservationDetails.data";
import ReservationDateField from "./ReservationDateField";
import ReservationField from "./ReservationField";
import ReservationSelect from "./ReservationSelect";
import ReservationTextarea from "./ReservationTextarea";
import { OUTLETS } from "../../../data/home/restaurant/RestaurantsSection.data";
import { useCreateBooking } from "../../../hooks/useCreateBooking";
import { ToastStack, useToasts } from "../../admin/Toast";
import type { CreateBookingRequest } from "../../../types/booking";

const labelIconClass = "mr-1.5 mb-0.5 inline size-3.5";
const todayIso = () => new Date().toISOString().slice(0, 10);

const ReservationForm = () => {
  const { mutate, loading } = useCreateBooking();
  const { toasts, push } = useToasts();
  const [outletId, setOutletId] = useState("");
  const [date, setDate] = useState("");
  const minDate = useMemo(() => todayIso(), []);

  const selectedOutlet = OUTLETS.find((o) => String(Number(o.id)) === outletId);
  const timeOptions = useMemo(() => {
    if (!selectedOutlet || !date) return [];
    return getOutletTimeSlots(isWeekend(date) ? selectedOutlet.hours.weekend : selectedOutlet.hours.weekday);
  }, [selectedOutlet, date]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload: CreateBookingRequest = {
      outlet_id: Number(formData.get("outlet")),
      date: String(formData.get("date")),
      time: String(formData.get("time")),
      guests: Number(formData.get("guests")),
      occasion: String(formData.get("occasion") || "") || undefined,
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      phone: String(formData.get("phone")),
      special_requests: String(formData.get("special_requests") || "") || undefined,
    };

    try {
      await mutate(payload);
      form.reset();
      setOutletId("");
      setDate("");
      push("Reservation request submitted! Our team will call to confirm.", "success");
    } catch (err) {
      push(err instanceof Error ? err.message : "Something went wrong. Please try again.", "error");
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <h2 className="mb-6 text-xl font-serif font-bold text-white">Your Details</h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <ReservationSelect label="Select Outlet *" name="outlet" options={OUTLETS.map((o) => ({ value: String(Number(o.id)), label: o.name }))} placeholder="Choose an outlet" required onChange={setOutletId} />
        <div className="grid grid-cols-2 gap-4">
          <ReservationDateField label="Date *" name="date" value={date} onChange={setDate} min={minDate} required icon={<CalendarDays className={labelIconClass} />} />
          <ReservationSelect key={`${outletId}-${date}`} label="Time *" name="time" options={timeOptions} placeholder={timeOptions.length ? "Pick a time" : "Choose outlet & date first"} required disabled={timeOptions.length === 0} icon={<Clock className={labelIconClass} />} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <ReservationSelect label="Guests *" name="guests" options={GUESTS.map(({ value, label }) => [value, label] as const)} required defaultValue="1" icon={<Users className={labelIconClass} />} />
          <ReservationSelect label="Occasion" name="occasion" options={OCCASIONS} />
        </div>
        <ReservationField label="Full Name *" name="name" placeholder="Enter Your Name" required />
        <div className="grid grid-cols-2 gap-4">
          <ReservationField label="Email *" name="email" type="email" placeholder="Enter Your Email" required />
          <ReservationField label="Phone *" name="phone" type="tel" placeholder="Enter Your Phone Number" required />
        </div>
        <ReservationTextarea label="Special Requests" name="special_requests" placeholder="Window seat, dietary needs, etc." />
        <button type="submit" disabled={loading} className="mt-2 w-full rounded-xl bg-primary-600 py-4 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60">
          {loading ? "Submitting..." : "Submit Reservation Request"}
        </button>
        <p className="text-center text-xs text-white/25">After submitting your booking request, you will receive a confirmation message. Our team will review your request and confirm your reservation shortly.</p>
      </form>
      <ToastStack toasts={toasts} />
    </div>
  );
};

export default ReservationForm;
