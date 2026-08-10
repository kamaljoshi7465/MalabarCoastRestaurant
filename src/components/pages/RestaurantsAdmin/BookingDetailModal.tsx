import React, { useEffect } from "react";
import { StatusPill } from "./RestaurantStatusPill";
import { formatDate } from "../../../pages/RestaurantAdmin/utils";
import type { BookingStatus, RestaurantDashboardBooking } from "../../../pages/RestaurantAdmin/types";

export const BookingDetailModal: React.FC<{
  booking: RestaurantDashboardBooking | null;
  onClose: () => void;
  onAct: (booking: RestaurantDashboardBooking, next: BookingStatus) => void;
}> = ({ booking, onClose, onAct }) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!booking) return null;

  const act = (next: BookingStatus) => {
    onAct(booking, next);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between bg-primary-600 px-5 py-4 text-white sm:px-6 sm:py-5">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wider text-primary-100">{booking.booking_number}</p>
            <h3 className="truncate font-serif text-lg sm:text-xl">{booking.name}</h3>
          </div>
          <button onClick={onClose} className="shrink-0 rounded-full p-1.5 text-primary-100 hover:bg-primary-700 hover:text-white cursor-pointer" aria-label="Close">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4 px-5 py-5 sm:px-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400">Date &amp; time</p>
              <p className="mt-0.5 font-medium text-gray-800">
                {formatDate(booking.date)} · {booking.time}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400">Guests</p>
              <p className="mt-0.5 font-medium text-gray-800">{booking.guests}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400">Phone</p>
              <p className="mt-0.5 font-medium text-gray-800">{booking.phone}</p>
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wide text-gray-400">Email</p>
              <p className="mt-0.5 truncate font-medium text-gray-800">{booking.email}</p>
            </div>
            {booking.occasion && (
              <div className="col-span-2">
                <p className="text-xs uppercase tracking-wide text-gray-400">Occasion</p>
                <p className="mt-0.5 font-medium text-gray-800">{booking.occasion}</p>
              </div>
            )}
            {booking.special_requests && (
              <div className="col-span-2">
                <p className="text-xs uppercase tracking-wide text-gray-400">Special requests</p>
                <p className="mt-0.5 font-medium text-gray-800">{booking.special_requests}</p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between rounded-lg bg-secondary-100 px-4 py-3">
            <span className="text-xs uppercase tracking-wide text-gray-500">Current status</span>
            <StatusPill status={booking.status} />
          </div>

          {booking.cancel_reason && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-xs text-error">Cancellation reason: {booking.cancel_reason}</p>
          )}
          {booking.rejection_reason && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-xs text-error">Rejection reason: {booking.rejection_reason}</p>
          )}

          <p className="text-xs text-gray-400">Booked {booking.created_at}</p>

          {booking.status === "PENDING" && (
            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <button onClick={() => act("ACCEPTED")} className="btn-primary flex-1 bg-primary-600 hover:bg-primary-700">
                Approve booking
              </button>
              <button onClick={() => act("REJECTED")} className="flex-1 rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-error transition-colors hover:bg-red-50 cursor-pointer">
                Reject
              </button>
            </div>
          )}
          {booking.status === "ACCEPTED" && (
            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <button onClick={() => act("COMPLETED")} className="btn-primary flex-1 bg-primary-600 hover:bg-primary-700">
                Mark as completed
              </button>
              <button onClick={() => act("REJECTED")} className="flex-1 rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-error transition-colors hover:bg-red-50 cursor-pointer">
                Reject booking
              </button>
            </div>
          )}
          {(booking.status === "COMPLETED" || booking.status === "CANCELLED" || booking.status === "REJECTED") && (
            <p className="rounded-lg bg-secondary-100 px-4 py-3 text-center text-xs text-gray-500">
              This booking is closed — no further action needed.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
