import React, { useMemo, useState } from "react";
import { BOOKING_STATUS_LABEL, STATUS_ORDER, StatusPill } from "./RestaurantStatusPill";
import { BookingDetailModal } from "./BookingDetailModal";
import type { BookingStatus, RestaurantDashboardBooking } from "../../../pages/RestaurantAdmin/types";
import { formatDate } from "../../../pages/RestaurantAdmin/utils";

export const AllBookingsTable: React.FC<{
  bookings: RestaurantDashboardBooking[];
  onAct: (booking: RestaurantDashboardBooking, next: BookingStatus) => void;
}> = ({ bookings, onAct }) => {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<BookingStatus | "ALL">("ALL");
  const [selectedBooking, setSelectedBooking] = useState<RestaurantDashboardBooking | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return bookings.filter((b) => {
      const matchesStatus = statusFilter === "ALL" || b.status === statusFilter;
      const matchesQuery =
        !q ||
        b.name.toLowerCase().includes(q) ||
        b.booking_number.toLowerCase().includes(q) ||
        b.phone.includes(q);
      return matchesStatus && matchesQuery;
    });
  }, [bookings, statusFilter, query]);

  return (
    <div className="card overflow-hidden bg-white">
      <div className="border-b border-gray-100 px-4 py-5 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-serif text-lg text-primary-700 sm:text-xl">All Bookings</h3>
            <p className="text-sm text-gray-500">
              Showing {filtered.length} of {bookings.length} bookings — today, upcoming &amp; recent
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
            onClick={() => setStatusFilter("ALL")}
            className={`shrink-0 cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${statusFilter === "ALL"
              ? "bg-primary-600 text-white"
              : "bg-secondary-200 text-primary-600 hover:bg-secondary-300"
              }`}
          >
            All
          </button>
          {STATUS_ORDER.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`shrink-0 cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${statusFilter === s
                ? "bg-primary-600 text-white"
                : "bg-secondary-200 text-primary-600 hover:bg-secondary-300"
                }`}
            >
              {BOOKING_STATUS_LABEL[s]}
            </button>
          ))}
        </div>
      </div>

      <div className="max-h-[620px] overflow-auto">
        <table className="w-full min-w-[760px] text-sm">
          <thead className="sticky top-0 z-10 bg-secondary-100">
            <tr className="text-left text-xs uppercase tracking-wider text-gray-500">
              <th className="whitespace-nowrap px-6 py-3 font-semibold">Booking #</th>
              <th className="whitespace-nowrap px-4 py-3 font-semibold">Customer</th>
              <th className="whitespace-nowrap px-4 py-3 font-semibold">Date &amp; time</th>
              <th className="whitespace-nowrap px-4 py-3 font-semibold text-center">Guests</th>
              <th className="whitespace-nowrap px-4 py-3 font-semibold">Occasion</th>
              <th className="whitespace-nowrap px-4 py-3 font-semibold text-right">Status</th>
              <th className="whitespace-nowrap px-6 py-3 font-semibold text-right">Details</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-10 text-center text-sm text-gray-400">
                  No bookings match your filters
                </td>
              </tr>
            ) : (
              filtered.map((b) => (
                <tr key={b.id} className="transition-colors hover:bg-secondary-50">
                  <td className="px-6 py-4 font-mono text-xs text-gray-600">{b.booking_number}</td>
                  <td className="px-4 py-4">
                    <p className="font-medium text-gray-800">{b.name}</p>
                    {b.phone && <p className="text-xs text-gray-500">{b.phone}</p>}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-gray-600">
                    {formatDate(b.date)} · {b.time}
                  </td>
                  <td className="px-4 py-4 text-center text-gray-600">{b.guests ?? "—"}</td>
                  <td className="px-4 py-4 text-gray-600">{b.occasion ?? "—"}</td>
                  <td className="px-4 py-4 text-right">
                    <StatusPill status={b.status} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => setSelectedBooking(b)}
                      className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600 transition-colors hover:bg-primary-100 cursor-pointer"
                    >
                      View
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <BookingDetailModal booking={selectedBooking} onClose={() => setSelectedBooking(null)} onAct={onAct} />
    </div>
  );
};
