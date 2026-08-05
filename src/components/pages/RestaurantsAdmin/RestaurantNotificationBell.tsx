import React, { useState } from "react";
import type { RestaurantNotifications } from "../../../pages/RestaurantAdmin/types";
import { useClickOutside } from "../../../hooks/useClickOutside";

export const RestaurantNotificationBell: React.FC<{
  notifications: RestaurantNotifications;
  onReview: (kind: "pending" | "reschedule" | "cancel") => void;
}> = ({ notifications, onReview }) => {
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));

  const total = notifications.pending_approval + notifications.reschedule_requests + notifications.cancel_requests;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="relative rounded-full p-2.5 text-primary-700 ring-1 ring-gray-200 transition-colors hover:bg-white cursor-pointer"
        aria-label="Notifications"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        {total > 0 && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent-400 text-[10px] font-bold text-primary-900">
            {total > 9 ? "9+" : total}
          </span>
        )}
      </button>

      {open && (
        <div className="fixed inset-x-4 top-20 z-20 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-xl bg-white shadow-xl ring-1 ring-gray-200 sm:absolute sm:inset-x-auto sm:top-auto sm:right-0 sm:mt-2 sm:max-h-none sm:w-80">
          <div className="border-b border-gray-100 px-4 py-3">
            <p className="font-serif text-base text-primary-700">Notifications</p>
          </div>
          <div className="divide-y divide-gray-100">
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-800">Pending approvals</p>
                <p className="truncate text-xs text-gray-500">{notifications.pending_approval} bookings need a response</p>
              </div>
              <button
                onClick={() => {
                  onReview("pending");
                  setOpen(false);
                }}
                className="shrink-0 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600 hover:bg-primary-100"
              >
                Review
              </button>
            </div>
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-800">Reschedule requests</p>
                <p className="truncate text-xs text-gray-500">{notifications.reschedule_requests} guests want a new date/time</p>
              </div>
              <button
                onClick={() => {
                  onReview("reschedule");
                  setOpen(false);
                }}
                className="shrink-0 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600 hover:bg-primary-100"
              >
                Review
              </button>
            </div>
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-800">Cancel requests</p>
                <p className="truncate text-xs text-gray-500">{notifications.cancel_requests} guests want to cancel</p>
              </div>
              <button
                onClick={() => {
                  onReview("cancel");
                  setOpen(false);
                }}
                className="shrink-0 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600 hover:bg-primary-100"
              >
                Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
