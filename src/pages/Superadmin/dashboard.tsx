import React, { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_RESPONSE, ADMIN_PROFILE } from "./data";
import { formatNumber, formatDate } from "./utils";
import { StatCard } from "./components/StatCard";
import { StatusPill, RestaurantStatusPill } from "./components/StatusPill";
import { WeeklyBookingsChart } from "./components/WeeklyBookingsChart";
import { SuperAdminLayout } from "./components/SuperAdminLayout";
import { useToasts } from "./components/Toast";
import type { BookingStatus, FlatBooking, RestaurantBookingSummary } from "./types";

const RESTAURANT_PREVIEW_LIMIT = 5;
const BOOKINGS_PREVIEW_LIMIT = 5;

const RestaurantPerformancePreview: React.FC<{
  rows: RestaurantBookingSummary[];
}> = ({ rows }) => {
  const top5 = useMemo(
    () => [...rows].sort((a, b) => b.total_bookings - a.total_bookings).slice(0, RESTAURANT_PREVIEW_LIMIT),
    [rows]
  );

  return (
    <div className="card overflow-hidden bg-white">
      <div className="flex flex-col gap-3 border-b border-gray-100 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h3 className="font-serif text-lg text-primary-700 sm:text-xl">
            Restaurant Performance
          </h3>
          <p className="text-sm text-gray-500">
            Showing {top5.length} of {rows.length} restaurants
          </p>
        </div>
        <Link
          to="/super-admin-dashboard/restaurants"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary-50 px-4 py-2 text-xs font-semibold text-primary-600 transition-colors hover:bg-primary-100"
        >
          View all restaurants
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-sm">
          <thead>
            <tr className="bg-secondary-100 text-left text-xs uppercase tracking-wider text-gray-500">
              <th className="whitespace-nowrap px-6 py-3 font-semibold">Restaurant</th>
              <th className="whitespace-nowrap px-4 py-3 font-semibold">Status</th>
              <th className="whitespace-nowrap px-4 py-3 font-semibold text-right">Today</th>
              <th className="whitespace-nowrap px-4 py-3 font-semibold text-right">Pending</th>
              <th className="whitespace-nowrap px-6 py-3 font-semibold text-right">Total</th>
              <th className="whitespace-nowrap px-6 py-3 font-semibold text-right">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {top5.map((r) => (
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
                <td className="px-4 py-4 text-right text-gray-600">{r.today_bookings}</td>
                <td className="px-4 py-4 text-right">
                  <span className="font-semibold text-accent-500">{r.pending_bookings}</span>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ============================================================================
   LIVE BOOKINGS PREVIEW — 5 latest bookings + "view all"
   ============================================================================ */

const LiveBookingsPreview: React.FC<{ flatBookings: FlatBooking[] }> = ({
  flatBookings,
}) => {
  const latest5 = useMemo(
    () =>
      [...flatBookings]
        .sort((a, b) =>
          `${b.booking_date}T${b.booking_time}`.localeCompare(`${a.booking_date}T${a.booking_time}`)
        )
        .slice(0, BOOKINGS_PREVIEW_LIMIT),
    [flatBookings]
  );

  return (
    <div className="card overflow-hidden bg-white">
      <div className="flex flex-col gap-3 border-b border-gray-100 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h3 className="font-serif text-lg text-primary-700 sm:text-xl">Live Bookings</h3>
          <p className="text-sm text-gray-500">
            Showing {latest5.length} of {flatBookings.length} bookings
          </p>
        </div>
        <Link
          to="/super-admin-dashboard/bookings"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary-50 px-4 py-2 text-xs font-semibold text-primary-600 transition-colors hover:bg-primary-100"
        >
          View all bookings
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="bg-secondary-100 text-left text-xs uppercase tracking-wider text-gray-500">
              <th className="whitespace-nowrap px-6 py-3 font-semibold">Booking #</th>
              <th className="whitespace-nowrap px-4 py-3 font-semibold">Customer</th>
              <th className="whitespace-nowrap px-4 py-3 font-semibold">Restaurant</th>
              <th className="whitespace-nowrap px-4 py-3 font-semibold">Date &amp; time</th>
              <th className="whitespace-nowrap px-6 py-3 font-semibold text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {latest5.map((b) => (
              <tr key={b.booking_id} className="hover:bg-secondary-50">
                <td className="px-6 py-4 font-mono text-xs text-gray-600">{b.booking_number}</td>
                <td className="px-4 py-4 font-medium text-gray-800">{b.customer_name}</td>
                <td className="px-4 py-4 text-gray-600">{b.restaurant_name}</td>
                <td className="whitespace-nowrap px-4 py-4 text-gray-600">
                  {formatDate(b.booking_date)} · {b.booking_time}
                </td>
                <td className="px-6 py-4 text-right">
                  <StatusPill status={b.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ============================================================================
   MAIN DASHBOARD
   ============================================================================ */

const SuperAdminDashboard: React.FC = () => {
  const { data } = API_RESPONSE;
  const { summary, restaurant_booking_summary, restaurant_bookings, chart_data, notifications } = data;

  const { toasts, push } = useToasts();
  const navigate = useNavigate();

  const flatBookings: FlatBooking[] = useMemo(
    () =>
      restaurant_bookings.flatMap((r) =>
        r.bookings.map((b) => ({
          ...b,
          restaurant_id: r.restaurant_id,
          restaurant_name: r.restaurant_name,
        }))
      ),
    [restaurant_bookings]
  );

  const goToBookings = (status: BookingStatus | "ALL") => {
    navigate(status === "ALL" ? "/super-admin-dashboard/bookings" : `/super-admin-dashboard/bookings?status=${status}`);
  };

  const handleBellReview = (kind: "restaurant" | "booking") => {
    if (kind === "booking") {
      goToBookings("PENDING");
    } else {
      navigate("/super-admin-dashboard/restaurants");
    }
  };

  return (
    <SuperAdminLayout
      active="overview"
      title="Dashboard Overview"
      subtitle="Monday, August 3, 2026 — platform-wide snapshot"
      summary={summary}
      notifications={notifications}
      admin={ADMIN_PROFILE}
      onBellReview={handleBellReview}
      onLogout={() => {
        push("Logged out", "info");
        navigate("/super-admin-login");
      }}
      toasts={toasts}
    >
      {/* Restaurant summary row */}
      <section>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard label="Total Restaurants" value={summary.total_restaurants} accent="primary" />
          <StatCard label="Active Restaurants" value={summary.active_restaurants} accent="primary" />
          <StatCard label="Inactive Restaurants" value={summary.inactive_restaurants} accent="neutral" />
        </div>
      </section>

      {/* Booking summary row — clickable, opens the Bookings page pre-filtered */}
      <section>
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Bookings at a glance — tap any card to open Bookings filtered
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          <StatCard
            label="Total Bookings"
            value={summary.total_bookings}
            accent="primary"
            onClick={() => goToBookings("ALL")}
          />
          <StatCard label="Today" value={summary.today_bookings} accent="gold" />
          <StatCard label="Upcoming" value={summary.upcoming_bookings} accent="gold" />
          <StatCard
            label="Pending"
            value={summary.pending_bookings}
            accent="gold"
            onClick={() => goToBookings("PENDING")}
          />
          <StatCard
            label="Approved"
            value={summary.accepted_bookings}
            accent="primary"
            onClick={() => goToBookings("ACCEPTED")}
          />
          <StatCard
            label="Completed"
            value={summary.completed_bookings}
            accent="primary"
            onClick={() => goToBookings("COMPLETED")}
          />
          <StatCard
            label="Cancelled"
            value={summary.cancelled_bookings}
            accent="neutral"
            onClick={() => goToBookings("CANCELLED")}
          />
          <StatCard
            label="Rejected"
            value={summary.rejected_bookings}
            accent="neutral"
            onClick={() => goToBookings("REJECTED")}
          />
        </div>
      </section>

      {/* Chart + notifications */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <WeeklyBookingsChart points={chart_data.weekly_bookings} />
        </div>
        <div className="card bg-primary-600 p-5 text-secondary-50 sm:p-6">
          <h3 className="font-serif text-lg sm:text-xl">Needs Your Attention</h3>
          <p className="mt-1 text-sm text-primary-700">
            Approvals waiting across the platform
          </p>
          <div className="mt-5 space-y-3">
            <button
              onClick={() => navigate("/super-admin-dashboard/restaurants")}
              className="flex w-full items-center justify-between rounded-lg bg-primary-700/60 px-4 py-3 text-left transition-colors hover:bg-primary-700"
            >
              <span className="text-sm text-primary-50">Restaurant approvals</span>
              <span className="rounded-full bg-accent-400 px-2.5 py-0.5 text-sm font-bold text-primary-900">
                {notifications.pending_restaurant_approvals}
              </span>
            </button>
            <button
              onClick={() => goToBookings("PENDING")}
              className="flex w-full items-center justify-between rounded-lg bg-primary-700/60 px-4 py-3 text-left transition-colors hover:bg-primary-700"
            >
              <span className="text-sm text-primary-50">Booking approvals</span>
              <span className="rounded-full bg-accent-400 px-2.5 py-0.5 text-sm font-bold text-primary-900">
                {notifications.pending_booking_approvals}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Restaurant performance preview — top 5 + view all */}
      <section>
        <RestaurantPerformancePreview rows={restaurant_booking_summary} />
      </section>

      {/* Live bookings preview — latest 5 + view all */}
      <section>
        <LiveBookingsPreview flatBookings={flatBookings} />
      </section>
    </SuperAdminLayout>
  );
};

export default SuperAdminDashboard;
