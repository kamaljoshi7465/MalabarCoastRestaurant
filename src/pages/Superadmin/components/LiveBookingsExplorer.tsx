import React, { useMemo, useState } from "react";
import { formatDate } from "../utils";
import { BOOKING_STATUS_LABEL, STATUS_ORDER, StatusPill } from "./StatusPill";
import type { BookingStatus, FlatBooking, RestaurantBookings } from "../types";

export const LiveBookingsExplorer: React.FC<{
  restaurants: RestaurantBookings[];
  statusFilter: BookingStatus | "ALL";
  onStatusFilterChange: (s: BookingStatus | "ALL") => void;
  bookingOverrides: Record<number, BookingStatus>;
  onOpenBooking: (b: FlatBooking) => void;
  title?: string;
}> = ({
  restaurants,
  statusFilter,
  onStatusFilterChange,
  bookingOverrides,
  onOpenBooking,
  title = "Live Bookings",
}) => {
  const [query, setQuery] = useState("");

  const flat: FlatBooking[] = useMemo(
    () =>
      restaurants.flatMap((r) =>
        r.bookings.map((b) => ({
          ...b,
          status: bookingOverrides[b.booking_id] ?? b.status,
          restaurant_id: r.restaurant_id,
          restaurant_name: r.restaurant_name,
        }))
      ),
    [restaurants, bookingOverrides]
  );

  const filtered = useMemo(() => {
    return flat.filter((b) => {
      const matchesStatus = statusFilter === "ALL" || b.status === statusFilter;
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        b.customer_name.toLowerCase().includes(q) ||
        b.booking_number.toLowerCase().includes(q) ||
        b.restaurant_name.toLowerCase().includes(q) ||
        b.phone.includes(q);
      return matchesStatus && matchesQuery;
    });
  }, [flat, statusFilter, query]);

  return (
    <div className="card overflow-hidden bg-white">
      <div className="border-b border-gray-100 px-4 py-5 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-serif text-lg text-primary-700 sm:text-xl">{title}</h3>
            <p className="text-sm text-gray-500">
              {filtered.length} of {flat.length} bookings · tap a row for details
            </p>
          </div>
          <div className="relative">
            <svg className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search customer, booking #, restaurant..."
              className="w-full rounded-full border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm text-gray-700 outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100 sm:w-72"
            />
          </div>
        </div>

        <div className="mt-4 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          <button
            onClick={() => onStatusFilterChange("ALL")}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
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
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                statusFilter === s
                  ? "bg-primary-600 text-white"
                  : "bg-secondary-200 text-primary-600 hover:bg-secondary-300"
              }`}
            >
              {BOOKING_STATUS_LABEL[s]}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="bg-secondary-100 text-left text-xs uppercase tracking-wider text-gray-500">
              <th className="whitespace-nowrap px-6 py-3 font-semibold">Booking #</th>
              <th className="whitespace-nowrap px-4 py-3 font-semibold">Customer</th>
              <th className="whitespace-nowrap px-4 py-3 font-semibold">Restaurant</th>
              <th className="whitespace-nowrap px-4 py-3 font-semibold">Date &amp; time</th>
              <th className="whitespace-nowrap px-4 py-3 font-semibold text-center">Guests</th>
              <th className="whitespace-nowrap px-6 py-3 font-semibold text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-sm text-gray-400">
                  No bookings match your filters
                </td>
              </tr>
            ) : (
              filtered.map((b) => (
                <tr
                  key={b.booking_id}
                  onClick={() => onOpenBooking(b)}
                  className="cursor-pointer transition-colors hover:bg-secondary-50"
                >
                  <td className="px-6 py-4 font-mono text-xs text-gray-600">
                    {b.booking_number}
                  </td>
                  <td className="px-4 py-4 font-medium text-gray-800">
                    {b.customer_name}
                  </td>
                  <td className="px-4 py-4 text-gray-600">{b.restaurant_name}</td>
                  <td className="whitespace-nowrap px-4 py-4 text-gray-600">
                    {formatDate(b.booking_date)} · {b.booking_time}
                  </td>
                  <td className="px-4 py-4 text-center text-gray-600">{b.guests}</td>
                  <td className="px-6 py-4 text-right">
                    <StatusPill status={b.status} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
