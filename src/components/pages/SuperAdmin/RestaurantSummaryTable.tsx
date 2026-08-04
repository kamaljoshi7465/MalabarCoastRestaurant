import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { RestaurantStatusPill } from "./StatusPill";
import type { RestaurantBookingSummary, RestaurantStatus } from "../../../pages/Superadmin/types";
import { formatNumber } from "../../../pages/Superadmin/utils";

type SortKey = keyof Pick<
  RestaurantBookingSummary,
  | "restaurant_name"
  | "today_bookings"
  | "upcoming_bookings"
  | "pending_bookings"
  | "completed_bookings"
  | "cancelled_bookings"
  | "total_bookings"
>;

export const RestaurantSummaryTable: React.FC<{
  rows: RestaurantBookingSummary[];
  title?: string;
}> = ({ rows, title = "Restaurant Performance" }) => {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"ALL" | RestaurantStatus>("ALL");
  const [sortKey, setSortKey] = useState<SortKey>("total_bookings");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  };

  const filtered = useMemo(() => {
    let result = rows.filter((r) =>
      r.restaurant_name.toLowerCase().includes(query.toLowerCase())
    );
    if (statusFilter !== "ALL") {
      result = result.filter((r) => r.status === statusFilter);
    }
    result = [...result].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (typeof av === "string" && typeof bv === "string") {
        return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
      }
      const an = av as number;
      const bn = bv as number;
      return sortDir === "asc" ? an - bn : bn - an;
    });
    return result;
  }, [rows, query, statusFilter, sortKey, sortDir]);

  const SortHeader: React.FC<{ label: string; sk: SortKey; align?: "left" | "right" }> = ({
    label,
    sk,
    align = "right",
  }) => (
    <th
      onClick={() => toggleSort(sk)}
      className={`cursor-pointer select-none whitespace-nowrap px-4 py-3 font-semibold transition-colors hover:text-primary-600 ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      <span className="inline-flex items-center gap-1">
        {sortKey === sk && align === "left" && (
          <span className="text-primary-500">{sortDir === "asc" ? "▲" : "▼"}</span>
        )}
        {label}
        {sortKey === sk && align === "right" && (
          <span className="text-primary-500">{sortDir === "asc" ? "▲" : "▼"}</span>
        )}
      </span>
    </th>
  );

  return (
    <div className="card overflow-hidden bg-white">
      <div className="flex flex-col gap-4 border-b border-gray-100 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h3 className="font-serif text-lg text-primary-700 sm:text-xl">
            {title}
          </h3>
          <p className="text-sm text-gray-500">
            {filtered.length} of {rows.length} restaurants · tap a column to sort
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative">
            <svg className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search restaurant..."
              className="w-full rounded-full border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm text-gray-700 outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100 sm:w-56"
            />
          </div>
          <div className="flex rounded-full bg-secondary-200 p-1 text-xs font-semibold">
            {(["ALL", "ACTIVE", "INACTIVE"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`flex-1 rounded-full px-3 py-1.5 capitalize transition-colors ${
                  statusFilter === s
                    ? "bg-primary-600 text-white shadow-sm"
                    : "text-primary-600 hover:text-primary-700"
                }`}
              >
                {s.toLowerCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[880px] text-sm">
          <thead>
            <tr className="bg-secondary-100 text-left text-xs uppercase tracking-wider text-gray-500">
              <SortHeader label="Restaurant" sk="restaurant_name" align="left" />
              <th className="whitespace-nowrap px-4 py-3 font-semibold">Status</th>
              <SortHeader label="Today" sk="today_bookings" />
              <SortHeader label="Upcoming" sk="upcoming_bookings" />
              <SortHeader label="Pending" sk="pending_bookings" />
              <SortHeader label="Completed" sk="completed_bookings" />
              <SortHeader label="Cancelled" sk="cancelled_bookings" />
              <th className="whitespace-nowrap px-6 py-3 font-semibold text-right">
                <span
                  onClick={() => toggleSort("total_bookings")}
                  className="inline-flex cursor-pointer select-none items-center gap-1 hover:text-primary-600"
                >
                  {sortKey === "total_bookings" && (
                    <span className="text-primary-500">{sortDir === "asc" ? "▲" : "▼"}</span>
                  )}
                  Total
                </span>
              </th>
              <th className="whitespace-nowrap px-6 py-3 font-semibold text-right">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-6 py-10 text-center text-sm text-gray-400">
                  No restaurants match "{query}"
                </td>
              </tr>
            ) : (
              filtered.map((r) => (
                <tr key={r.restaurant_id} className="hover:bg-secondary-50">
                  <td className="px-6 py-4 font-medium text-gray-800">
                    <Link
                      to={`/super-admin-dashboard/restaurants/${r.restaurant_id}`}
                      className="hover:text-primary-600 hover:underline"
                    >
                      {r.restaurant_name}
                    </Link>
                  </td>
                  <td className="px-4 py-4">
                    <RestaurantStatusPill status={r.status} />
                  </td>
                  <td className="px-4 py-4 text-right text-gray-600">
                    {r.today_bookings}
                  </td>
                  <td className="px-4 py-4 text-right text-gray-600">
                    {r.upcoming_bookings}
                  </td>
                  <td className="px-4 py-4 text-right">
                    <span className="font-semibold text-accent-500">
                      {r.pending_bookings}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right text-primary-600">
                    {formatNumber(r.completed_bookings)}
                  </td>
                  <td className="px-4 py-4 text-right text-error">
                    {r.cancelled_bookings}
                  </td>
                  <td className="px-6 py-4 text-right font-serif text-base text-primary-700">
                    {formatNumber(r.total_bookings)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      to={`/super-admin-dashboard/restaurants/${r.restaurant_id}`}
                      className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600 hover:bg-primary-100"
                    >
                      View
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
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
