import { useState } from "react";
import { Loader2, RotateCcw } from "lucide-react";
import { useBookingList } from "../../../hooks/useBookingList";
import { formatTimeLabel } from "../../../data/reservations/reservationDetails.data";
import type { BookingStatus, CustomerBooking } from "../../../types/booking";
import BookingActionPanel from "./BookingActionPanel";
import type { Toast } from "../../admin/Toast";

const STATUS_STYLES: Record<BookingStatus, string> = {
  PENDING: "bg-amber-500/15 text-amber-300 ring-1 ring-inset ring-amber-500/30",
  ACCEPTED: "bg-blue-500/15 text-blue-300 ring-1 ring-inset ring-blue-500/30",
  COMPLETED: "bg-primary-500/15 text-primary-300 ring-1 ring-inset ring-primary-500/30",
  CANCELLED: "bg-white/10 text-white/50 ring-1 ring-inset ring-white/15",
  REJECTED: "bg-red-500/15 text-error ring-1 ring-inset ring-red-500/30",
};

const ACTIONABLE_STATUSES: BookingStatus[] = ["PENDING", "ACCEPTED"];

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", { weekday: "short", day: "2-digit", month: "short", year: "numeric" });

type ActiveAction = { id: number; action: "cancel" | "reschedule" };

const BookingHistoryList = ({ onStartOver, push }: { onStartOver: () => void; push: (message: string, tone?: Toast["tone"]) => void }) => {
  const { data, loading, error, refetch } = useBookingList();
  const [activeAction, setActiveAction] = useState<ActiveAction | null>(null);

  const handleActionDone = (message: string) => {
    setActiveAction(null);
    push(message, "success");
    refetch();
  };

  return (
    <div className="space-y-4">
      <button type="button" onClick={onStartOver} className="flex items-center gap-1.5 text-xs text-white/40 transition-colors hover:text-white/70">
        <RotateCcw className="size-3.5" />Check a different number
      </button>

      {loading && (
        <div className="flex items-center justify-center gap-2 py-10 text-sm text-white/50">
          <Loader2 className="size-4 animate-spin" />Loading your bookings...
        </div>
      )}

      {error && !loading && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-center text-sm text-error">
          {error}
          <button type="button" onClick={onStartOver} className="mt-2 block w-full text-xs underline underline-offset-2">Verify phone number again</button>
        </div>
      )}

      {!loading && !error && data?.length === 0 && (
        <p className="py-10 text-center text-sm text-white/40">No reservations found for this phone number.</p>
      )}

      {!loading && !error && data && data.length > 0 && (
        <ul className="space-y-3">
          {data.map((booking: CustomerBooking) => (
            <li key={booking.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-2 flex items-start justify-between gap-2">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">{booking.booking_number}</p>
                  <p className="font-serif text-base text-white">{booking.outlet_name}</p>
                </div>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${STATUS_STYLES[booking.status]}`}>{booking.status}</span>
              </div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-white/60">
                <p>{formatDate(booking.date)}</p>
                <p>{formatTimeLabel(booking.time)} &middot; {booking.guests} Guests</p>
                {booking.occasion && <p className="col-span-2">Occasion: {booking.occasion}</p>}
                {booking.special_requests && <p className="col-span-2">Requests: {booking.special_requests}</p>}
                {booking.cancel_reason && <p className="col-span-2 text-error">Reason: {booking.cancel_reason}</p>}
              </div>

              {ACTIONABLE_STATUSES.includes(booking.status) && activeAction?.id !== booking.id && (
                <div className="mt-3 flex gap-2 border-t border-white/10 pt-3">
                  <button type="button" onClick={() => setActiveAction({ id: booking.id, action: "reschedule" })} className="flex-1 rounded-lg border border-white/15 py-2 text-xs font-semibold text-white/70 transition-colors hover:border-primary-500/60 hover:text-white">
                    Reschedule
                  </button>
                  <button type="button" onClick={() => setActiveAction({ id: booking.id, action: "cancel" })} className="flex-1 rounded-lg border border-red-500/20 py-2 text-xs font-semibold text-error transition-colors hover:bg-red-500/10">
                    Cancel
                  </button>
                </div>
              )}

              {activeAction?.id === booking.id && (
                <BookingActionPanel booking={booking} action={activeAction.action} onBack={() => setActiveAction(null)} onDone={handleActionDone} />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingHistoryList;
