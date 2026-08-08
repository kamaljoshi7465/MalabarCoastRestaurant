import React from "react";
import { StatusPill } from "./RestaurantStatusPill";
import type { BookingStatus, RestaurantDashboardBooking } from "../../../pages/RestaurantAdmin/types";
import { formatDate } from "../../../pages/RestaurantAdmin/utils";

export const BookingCard: React.FC<{
  booking: RestaurantDashboardBooking;
  onAct: (booking: RestaurantDashboardBooking, next: BookingStatus) => void;
}> = ({ booking, onAct }) => (
  <div className="card flex flex-col gap-3 bg-white p-4">
    <div className="flex items-start justify-between gap-2">
      <div className="min-w-0">
        <p className="truncate font-serif text-base text-primary-700">
          {booking.name}
        </p>
        <p className="truncate text-xs text-gray-500">{booking.booking_number}</p>
      </div>
      <StatusPill status={booking.status} />
    </div>

    {booking.occasion && (
      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-100 px-2.5 py-0.5 text-xs font-semibold text-accent-500">
        🎉 {booking.occasion}
      </span>
    )}

    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
      <div>
        <p className="text-[11px] uppercase tracking-wide text-gray-400">Date &amp; time</p>
        <p className="font-medium text-gray-800">
          {formatDate(booking.date)} · {booking.time}
        </p>
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-wide text-gray-400">Guests</p>
        <p className="font-medium text-gray-800">{booking.guests}</p>
      </div>
      <div className="col-span-2">
        <p className="text-[11px] uppercase tracking-wide text-gray-400">Phone</p>
        <p className="font-medium text-gray-800">{booking.phone}</p>
      </div>
    </div>

    {booking.status === "PENDING" && (
      <div className="flex gap-2 pt-1">
        <button
          onClick={() => onAct(booking, "ACCEPTED")}
          className="flex-1 rounded-lg bg-primary-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-700 cursor-pointer"
        >
          Approve
        </button>
        <button
          onClick={() => onAct(booking, "REJECTED")}
          className="flex-1 rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-error transition-colors hover:bg-red-50 cursor-pointer"
        >
          Reject
        </button>
      </div>
    )}
    {booking.status === "ACCEPTED" && (
      <div className="flex gap-2 pt-1">
        <button
          onClick={() => onAct(booking, "COMPLETED")}
          className="flex-1 rounded-lg bg-primary-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-700 cursor-pointer"
        >
          Complete
        </button>
        <button
          onClick={() => onAct(booking, "NO_SHOW")}
          className="flex-1 rounded-lg border border-orange-200 px-3 py-2 text-xs font-semibold text-orange-600 transition-colors hover:bg-orange-50 cursor-pointer"
        >
          No-show
        </button>
        <button
          onClick={() => onAct(booking, "REJECTED")}
          className="flex-1 rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-error transition-colors hover:bg-red-50 cursor-pointer"
        >
          Reject
        </button>
      </div>
    )}
  </div>
);
