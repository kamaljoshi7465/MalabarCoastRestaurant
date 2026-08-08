import React, { useMemo, useState } from "react";
import { BOOKING_STATUS_LABEL, STATUS_ORDER } from "./RestaurantStatusPill";
import { BookingCard } from "./BookingCard";
import type { BookingStatus, RestaurantDashboardBooking } from "../../../pages/RestaurantAdmin/types";

export const UpcomingBookingsExplorer: React.FC<{
  bookings: RestaurantDashboardBooking[];
  totalUpcoming: number;
  statusFilter: BookingStatus | "ALL";
  onStatusFilterChange: (s: BookingStatus | "ALL") => void;
  onAct: (booking: RestaurantDashboardBooking, next: BookingStatus) => void;
}> = ({ bookings, totalUpcoming, statusFilter, onStatusFilterChange, onAct }) => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return bookings.filter((b) => {
      const matchesStatus = statusFilter === "ALL" || b.status === statusFilter;
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        b.name.toLowerCase().includes(q) ||
        b.booking_number.toLowerCase().includes(q) ||
        b.phone.includes(q);
      return matchesStatus && matchesQuery;
    });
  }, [bookings, statusFilter, query]);

  return (
    <div className="card bg-white p-4 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-serif text-lg text-primary-700 sm:text-xl">Upcoming Bookings</h3>
          <p className="text-sm text-gray-500">
            Showing {filtered.length} of {totalUpcoming} upcoming bookings
          </p>
        </div>
        <div className="relative">
          <svg className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search customer, booking #, phone..."
            className="w-full rounded-full border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm text-gray-700 outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100 sm:w-72"
          />
        </div>
      </div>

      <div className="mt-4 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        <button
          onClick={() => onStatusFilterChange("ALL")}
          className={`shrink-0 rounded-full px-3.5 py-1.5 cursor-pointer text-xs font-semibold transition-colors ${
            statusFilter === "ALL"
              ? "bg-primary-600 text-white"
              : "bg-secondary-200 text-primary-600 hover:bg-secondary-300"
          }`}
        >
          All
        </button>
        {STATUS_ORDER.map((s) => (
          <button
            key={s}
            onClick={() => onStatusFilterChange(s)}
            className={`shrink-0 rounded-full px-3.5 py-1.5 cursor-pointer text-xs font-semibold transition-colors ${
              statusFilter === s
                ? "bg-primary-600 text-white"
                : "bg-secondary-200 text-primary-600 hover:bg-secondary-300"
            }`}
          >
            {BOOKING_STATUS_LABEL[s]}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-6 rounded-lg bg-secondary-100 px-4 py-10 text-center text-sm text-gray-400">
          No bookings match your filters
        </p>
      ) : (
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((b) => (
            <BookingCard key={b.id} booking={b} onAct={onAct} />
          ))}
        </div>
      )}
    </div>
  );
};
