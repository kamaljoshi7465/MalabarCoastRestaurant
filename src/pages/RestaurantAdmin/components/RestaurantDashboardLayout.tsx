import React from "react";
import { ToastStack, type Toast } from "../../../components/admin/Toast";
import type { RestaurantInfo, TodayInfo } from "../types";

const SlotsChip: React.FC<{ today: TodayInfo }> = ({ today }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-400 px-3 py-1 text-xs font-semibold text-primary-900 whitespace-nowrap">
    <span className="h-1.5 w-1.5 rounded-full bg-primary-800" />
    {today.available_slots} slots open today
  </span>
);

const RequestsBell: React.FC<{ count: number; onClick: () => void }> = ({
  count,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="relative rounded-full bg-primary-800/60 p-2.5 text-primary-50 transition-colors hover:bg-primary-800 cursor-pointer"
    aria-label="Pending booking approvals"
  >
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
    {count > 0 && (
      <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent-400 text-[10px] font-bold text-primary-900">
        {count > 9 ? "9+" : count}
      </span>
    )}
  </button>
);

export const RestaurantDashboardLayout: React.FC<{
  restaurant: RestaurantInfo;
  today: TodayInfo;
  pendingApproval: number;
  onRequestsClick: () => void;
  onLogout: () => void;
  toasts: Toast[];
  children: React.ReactNode;
}> = ({ restaurant, today, pendingApproval, onRequestsClick, onLogout, toasts, children }) => {
  const initial = restaurant.name.charAt(0);

  return (
    <div className="min-h-screen bg-secondary-100 font-sans text-gray-800">
      <header className="sticky top-0 z-20 bg-primary-700 text-secondary-50 shadow-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-10">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-400 font-serif text-lg text-primary-900">
              {initial}
            </span>
            <div className="min-w-0">
              <p className="truncate font-serif text-lg leading-tight sm:text-xl">
                {restaurant.name}
              </p>
              <p className="truncate text-xs text-primary-100">
                {restaurant.outlet_name} · Outlet #{restaurant.id}
              </p>
            </div>
            <SlotsChip today={today} />
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <RequestsBell count={pendingApproval} onClick={onRequestsClick} />
            <button
              onClick={onLogout}
              className="rounded-full bg-primary-800/60 px-3.5 py-2 text-xs font-semibold text-primary-50 transition-colors hover:bg-primary-800 cursor-pointer sm:px-4"
            >
              Log out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-6 p-4 sm:space-y-8 sm:p-6 lg:p-10">
        {children}
      </main>

      <ToastStack toasts={toasts} />
    </div>
  );
};
