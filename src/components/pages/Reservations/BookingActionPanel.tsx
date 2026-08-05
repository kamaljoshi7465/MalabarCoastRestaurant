import { useState } from "react";
import { Loader2 } from "lucide-react";
import ReservationDateField from "../../forms/Reservation/ReservationDateField";
import ReservationSelect from "../../forms/Reservation/ReservationSelect";
import { reservationFieldClass } from "../../forms/Reservation/ReservationField";
import { GUESTS, getOutletTimeSlots, isWeekend } from "../../../data/reservations/reservationDetails.data";
import { OUTLETS } from "../../../data/home/restaurant/RestaurantsSection.data";
import { useCancelBooking } from "../../../hooks/useCancelBooking";
import { useRescheduleBooking } from "../../../hooks/useRescheduleBooking";
import type { CustomerBooking } from "../../../types/booking";

const todayIso = () => new Date().toISOString().slice(0, 10);

type BookingActionPanelProps = {
  booking: CustomerBooking;
  action: "cancel" | "reschedule";
  onBack: () => void;
  onDone: (message: string) => void;
};

const BookingActionPanel = ({ booking, action, onBack, onDone }: BookingActionPanelProps) => {
  const { mutate: cancelBooking, loading: cancelling, error: cancelError } = useCancelBooking();
  const { mutate: rescheduleBooking, loading: rescheduling, error: rescheduleError } = useRescheduleBooking();

  const [reason, setReason] = useState("");
  const [date, setDate] = useState(booking.date);
  const [time, setTime] = useState(booking.time);
  const [guests, setGuests] = useState(String(booking.guests));

  const outlet = OUTLETS.find((o) => Number(o.id) === booking.outlet_id);
  const timeOptions = outlet ? getOutletTimeSlots(isWeekend(date) ? outlet.hours.weekend : outlet.hours.weekday) : [];

  const handleCancel = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await cancelBooking(booking.id, { reason: reason.trim() || undefined });
      onDone(`Booking ${booking.booking_number} cancelled.`);
    } catch {
      // error surfaced via cancelError
    }
  };

  const handleReschedule = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await rescheduleBooking(booking.id, { date, time, guests: Number(guests) });
      onDone(`Booking ${booking.booking_number} rescheduled.`);
    } catch {
      // error surfaced via rescheduleError
    }
  };

  if (action === "cancel") {
    return (
      <form onSubmit={handleCancel} className="mt-3 space-y-3 border-t border-white/10 pt-3">
        <div>
          <label htmlFor={`cancel-reason-${booking.id}`} className="mb-1.5 block text-[11px] uppercase tracking-wider text-white/40">Reason (optional)</label>
          <input id={`cancel-reason-${booking.id}`} value={reason} onChange={(event) => setReason(event.target.value)} placeholder="Plans changed" className={reservationFieldClass} />
        </div>
        {cancelError && <p className="text-xs text-error">{cancelError}</p>}
        <div className="flex gap-2">
          <button type="button" onClick={onBack} className="flex-1 rounded-lg border border-white/15 py-2 text-xs font-semibold text-white/60 transition-colors hover:text-white">Back</button>
          <button type="submit" disabled={cancelling} className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-error py-2 text-xs font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-60">
            {cancelling && <Loader2 className="size-3.5 animate-spin" />}
            {cancelling ? "Cancelling..." : "Confirm Cancellation"}
          </button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleReschedule} className="mt-3 space-y-3 border-t border-white/10 pt-3">
      <div className="grid grid-cols-2 gap-3">
        <ReservationDateField
          label="New Date"
          name={`reschedule-date-${booking.id}`}
          value={date}
          onChange={(value) => {
            setDate(value);
            setTime("");
          }}
          min={todayIso()}
          required
        />
        <ReservationSelect
          key={date}
          label="New Time"
          name={`reschedule-time-${booking.id}`}
          options={timeOptions}
          placeholder={timeOptions.length ? "Pick a time" : "Pick a date first"}
          disabled={timeOptions.length === 0}
          defaultValue={time}
          onChange={setTime}
          required
        />
      </div>
      <ReservationSelect
        label="Guests"
        name={`reschedule-guests-${booking.id}`}
        options={GUESTS.map(({ value, label }) => [value, label] as const)}
        defaultValue={guests}
        onChange={setGuests}
        required
      />
      {rescheduleError && <p className="text-xs text-error">{rescheduleError}</p>}
      <div className="flex gap-2">
        <button type="button" onClick={onBack} className="flex-1 rounded-lg border border-white/15 py-2 text-xs font-semibold text-white/60 transition-colors hover:text-white">Back</button>
        <button type="submit" disabled={rescheduling || !time} className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary-600 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60">
          {rescheduling && <Loader2 className="size-3.5 animate-spin" />}
          {rescheduling ? "Rescheduling..." : "Confirm Reschedule"}
        </button>
      </div>
    </form>
  );
};

export default BookingActionPanel;
