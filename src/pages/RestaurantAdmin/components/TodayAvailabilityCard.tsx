import React from "react";
import { formatDate } from "../utils";
import type { TodayInfo } from "../types";

export const TodayAvailabilityCard: React.FC<{ today: TodayInfo }> = ({ today }) => {
  const total = today.available_slots + today.disabled_slots;
  const availablePct = total > 0 ? Math.round((today.available_slots / total) * 100) : 0;

  return (
    <div className="card bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-serif text-lg text-primary-700 sm:text-xl">Today's Availability</h3>
        <span className="text-sm text-gray-500">{formatDate(today.date)}</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
            Available Slots
          </p>
          <p className="mt-1 font-serif text-2xl text-primary-700">{today.available_slots}</p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
            Disabled Slots
          </p>
          <p className="mt-1 font-serif text-2xl text-gray-500">{today.disabled_slots}</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="h-2 w-full overflow-hidden rounded-full bg-secondary-200">
          <div
            className="h-full rounded-full bg-primary-500"
            style={{ width: `${availablePct}%` }}
          />
        </div>
        <p className="mt-1 text-xs text-gray-500">{availablePct}% of today's slots are open</p>
      </div>
    </div>
  );
};
