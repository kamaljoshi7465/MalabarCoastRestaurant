import React from "react";
import { StatusPill } from "./RestaurantStatusPill";
import type { RestaurantDashboardBooking } from "../../../pages/RestaurantAdmin/types";
import { formatDate } from "../../../pages/RestaurantAdmin/utils";

export const RecentActivityList: React.FC<{ bookings: RestaurantDashboardBooking[] }> = ({
  bookings,
}) => (
  <div className="card bg-white p-4 sm:p-6">
    <div className="mb-4">
      <h3 className="font-serif text-lg text-primary-700 sm:text-xl">Recent Activity</h3>
      <p className="text-sm text-gray-500">Latest booking status updates</p>
    </div>

    {bookings.length === 0 ? (
      <p className="rounded-lg bg-secondary-100 px-4 py-6 text-center text-sm text-gray-400">
        No recent activity.
      </p>
    ) : (
      <ul className="divide-y divide-gray-100">
        {bookings.map((b) => (
          <li key={b.id} className="flex items-center justify-between gap-3 py-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-gray-800">{b.name}</p>
              <p className="truncate text-xs text-gray-500">
                {b.booking_number} · {formatDate(b.date)} · {b.time}
              </p>
            </div>
            <StatusPill status={b.status} />
          </li>
        ))}
      </ul>
    )}
  </div>
);
