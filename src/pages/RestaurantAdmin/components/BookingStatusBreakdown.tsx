import React from "react";
import { formatNumber } from "../utils";
import { BOOKING_STATUS_LABEL, STATUS_ORDER } from "./RestaurantStatusPill";
import type { BookingStatusCount } from "../types";

export const BookingStatusBreakdown: React.FC<{ counts: BookingStatusCount }> = ({
  counts,
}) => {
  const max = Math.max(...STATUS_ORDER.map((s) => counts[s]), 1);

  return (
    <div className="card bg-white p-4 sm:p-6">
      <div className="mb-4">
        <h3 className="font-serif text-lg text-primary-700 sm:text-xl">Status Breakdown</h3>
        <p className="text-sm text-gray-500">All bookings by status</p>
      </div>
      <ul className="space-y-3">
        {STATUS_ORDER.map((status) => (
          <li key={status}>
            <div className="mb-1 flex items-center justify-between gap-2 text-sm">
              <span className="font-medium text-gray-800">{BOOKING_STATUS_LABEL[status]}</span>
              <span className="font-serif text-primary-700">{formatNumber(counts[status])}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary-200">
              <div
                className="h-full rounded-full bg-accent-400"
                style={{ width: `${(counts[status] / max) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
