import React from "react";
import { StatusPill } from "./RestaurantStatusPill";
import type { RestaurantBookingStatus, RestaurantDashboardBooking } from "../../../pages/RestaurantAdmin/types";

export const TodaysTimeline: React.FC<{
  bookings: RestaurantDashboardBooking[];
  totalToday: number;
  onAct: (booking: RestaurantDashboardBooking, next: RestaurantBookingStatus) => void;
}> = ({ bookings, totalToday, onAct }) => {
  const sorted = [...bookings].sort((a, b) => a.time.localeCompare(b.time));

  return (
    <div className="card bg-white p-4 sm:p-6">
      <div className="mb-4">
        <h3 className="font-serif text-lg text-primary-700 sm:text-xl">Today's Timeline</h3>
        <p className="text-sm text-gray-500">
          Showing {sorted.length} of {totalToday} bookings scheduled today
        </p>
      </div>

      {sorted.length === 0 ? (
        <p className="rounded-lg bg-secondary-100 px-4 py-6 text-center text-sm text-gray-400">
          No bookings scheduled for today.
        </p>
      ) : (
        <div className="max-h-[620px] overflow-y-auto pr-2">
          <ol className="ml-2 relative space-y-4 border-l-2 border-secondary-200 pl-5">
            {sorted.map((b) => (
              <li key={b.id} className="relative">
                <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-primary-500" />
                <div className="flex flex-col gap-3 rounded-lg bg-secondary-50 p-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <p className="font-serif text-base text-primary-700">{b.time}</p>
                    <p className="truncate text-sm font-medium text-gray-800">
                      {b.name} · {b.guests} guest{b.guests === 1 ? "" : "s"}
                    </p>
                    <p className="truncate text-xs text-gray-500">{b.booking_number}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <StatusPill status={b.status} />
                    {b.status === "PENDING" && (
                      <>
                        <button
                          onClick={() => onAct(b, "ACCEPTED")}
                          className="rounded-full bg-primary-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-primary-700 cursor-pointer"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => onAct(b, "REJECTED")}
                          className="rounded-full border border-red-200 px-3 py-1.5 text-xs font-semibold text-error transition-colors hover:bg-red-50 cursor-pointer"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {b.status === "ACCEPTED" && (
                      <>
                        <button
                          onClick={() => onAct(b, "COMPLETED")}
                          className="rounded-full bg-primary-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-primary-700 cursor-pointer"
                        >
                          Complete
                        </button>
                        <button
                          onClick={() => onAct(b, "CANCELLED")}
                          className="rounded-full border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600 transition-colors hover:bg-gray-50 cursor-pointer"
                        >
                          Cancel
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};
