import React, { useEffect } from "react";
import { StatusPill } from "./StatusPill";
import type { BookingStatus, PlatformBooking } from "../../../pages/Superadmin/types";
import { formatDate } from "../../../pages/Superadmin/utils";

export const BookingDetailModal: React.FC<{
  booking: PlatformBooking | null;
  onClose: () => void;
  onAct: (booking: PlatformBooking, next: BookingStatus) => void;
}> = ({ booking, onClose, onAct }) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!booking) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between bg-primary-600 px-5 py-4 text-white sm:px-6 sm:py-5">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wider text-primary-100">
              {booking.booking_number}
            </p>
            <h3 className="truncate font-serif text-lg sm:text-xl">{booking.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 rounded-full p-1.5 text-primary-100 hover:bg-primary-700 hover:text-white"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4 px-5 py-5 sm:px-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400">Restaurant</p>
              <p className="mt-0.5 font-medium text-gray-800">{booking.restaurant}</p>
              <p className="text-xs text-gray-400">{booking.outlet_name}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400">Phone</p>
              <p className="mt-0.5 font-medium text-gray-800">{booking.phone}</p>
            </div>
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
          </div>

          <div className="flex items-center justify-between rounded-lg bg-secondary-100 px-4 py-3">
            <span className="text-xs uppercase tracking-wide text-gray-500">Current status</span>
            <StatusPill status={booking.status} />
          </div>

          {booking.status === "PENDING" && (
            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <button
                onClick={() => onAct(booking, "ACCEPTED")}
                className="btn-primary flex-1 bg-primary-600 hover:bg-primary-700"
              >
                Approve booking
              </button>
              <button
                onClick={() => onAct(booking, "REJECTED")}
                className="flex-1 rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-error transition-colors hover:bg-red-50"
              >
                Reject
              </button>
            </div>
          )}
          {booking.status === "ACCEPTED" && (
            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <button
                onClick={() => onAct(booking, "COMPLETED")}
                className="btn-primary flex-1 bg-primary-600 hover:bg-primary-700"
              >
                Mark as completed
              </button>
              <button
                onClick={() => onAct(booking, "CANCELLED")}
                className="flex-1 rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-50"
              >
                Cancel booking
              </button>
            </div>
          )}
          {(booking.status === "COMPLETED" ||
            booking.status === "CANCELLED" ||
            booking.status === "REJECTED") && (
            <p className="rounded-lg bg-secondary-100 px-4 py-3 text-center text-xs text-gray-500">
              This booking is closed — no further action needed.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
