import React, { useMemo } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { formatNumber, formatDate, toAdminProfile } from "./utils";
import { StatusPill } from "../../components/pages/SuperAdmin/StatusPill";
import { useToasts } from "../../components/admin/Toast";
import { useSuperAdminDashboard } from "../../hooks/useSuperAdminDashboard";
import { SuperAdminLayout } from "../../layouts/SuperAdminLayout";
import { StatCard } from "../../components/admin/StatCard";
import { WeeklyBookingsChart } from "../../components/pages/SuperAdmin/WeeklyBookingsChart";
import type { BookingStatus, PlatformBooking, PlatformRestaurant } from "./types";

const RESTAURANT_PREVIEW_LIMIT = 5;
const BOOKINGS_PREVIEW_LIMIT = 5;

const RestaurantPerformancePreview: React.FC<{
  rows: PlatformRestaurant[];
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
        <table className="w-full min-w-[680px] text-sm">
          <thead>
            <tr className="bg-secondary-100 text-left text-xs uppercase tracking-wider text-gray-500">
              <th className="whitespace-nowrap px-6 py-3 font-semibold">Restaurant</th>
              <th className="whitespace-nowrap px-4 py-3 font-semibold">Owner</th>
              <th className="whitespace-nowrap px-4 py-3 font-semibold text-right">Pending</th>
              <th className="whitespace-nowrap px-6 py-3 font-semibold text-right">Total</th>
              <th className="whitespace-nowrap px-6 py-3 font-semibold text-right">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {top5.map((r) => (
              <tr key={r.id} className="hover:bg-secondary-50">
                <td className="px-6 py-4 font-medium text-gray-800">
                  <Link
                    to={`/super-admin-dashboard/restaurants/${r.id}`}
                    className="hover:text-primary-600 hover:underline"
                  >
                    {r.restaurant_name}
                  </Link>
                </td>
                <td className="px-4 py-4 text-gray-600">{r.owner_name}</td>
                <td className="px-4 py-4 text-right">
                  <span className="font-semibold text-accent-500">{r.pending_bookings}</span>
                </td>
                <td className="px-6 py-4 text-right font-serif text-base text-primary-700">
                  {formatNumber(r.total_bookings)}
                </td>
                <td className="px-6 py-4 text-right">
                  <Link
                    to={`/super-admin-dashboard/restaurants/${r.id}`}
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
   LIVE BOOKINGS PREVIEW — 5 most recent bookings + "view all"
   ============================================================================ */

const LiveBookingsPreview: React.FC<{ bookings: PlatformBooking[] }> = ({
  bookings,
}) => {
  const latest5 = useMemo(() => bookings.slice(0, BOOKINGS_PREVIEW_LIMIT), [bookings]);

  return (
    <div className="card overflow-hidden bg-white">
      <div className="flex flex-col gap-3 border-b border-gray-100 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h3 className="font-serif text-lg text-primary-700 sm:text-xl">Live Bookings</h3>
          <p className="text-sm text-gray-500">
            Showing {latest5.length} of {bookings.length} recent bookings
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
              <tr key={b.id} className="hover:bg-secondary-50">
                <td className="px-6 py-4 font-mono text-xs text-gray-600">{b.booking_number}</td>
                <td className="px-4 py-4 font-medium text-gray-800">{b.name}</td>
                <td className="px-4 py-4 text-gray-600">{b.restaurant}</td>
                <td className="whitespace-nowrap px-4 py-4 text-gray-600">
                  {formatDate(b.date)} · {b.time}
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
  const { data, loading, error, unauthorized, refetch } = useSuperAdminDashboard();
  const { toasts, push } = useToasts();
  const navigate = useNavigate();

  const goToBookings = (status: BookingStatus | "ALL") => {
    navigate(status === "ALL" ? "/super-admin-dashboard/bookings" : `/super-admin-dashboard/bookings?status=${status}`);
  };

  const handleBellReview = () => {
    goToBookings("PENDING");
  };

  if (unauthorized) {
    return <Navigate to="/super-admin-login" replace />;
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-secondary-100 px-4 text-center">
        <p className="text-sm text-error">{error}</p>
        <button onClick={refetch} className="rounded-full bg-primary-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700">
          Retry
        </button>
      </div>
    );
  }

  if (loading || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-secondary-100">
        <Loader2 className="size-6 animate-spin text-primary-600" />
      </div>
    );
  }

  const { summary, restaurants, recent_bookings, chart_data, user_profile } = data;

  return (
    <SuperAdminLayout
      active="overview"
      title="Dashboard Overview"
      subtitle="Platform-wide snapshot"
      summary={summary}
      admin={toAdminProfile(user_profile)}
      onBellReview={handleBellReview}
      onLogout={() => {
        push("Logged out", "info");
        navigate("/super-admin-login");
      }}
      toasts={toasts}
    >
      {/* Restaurant summary row */}
      <section>
        <div className="max-w-xs">
          <StatCard label="Total Restaurants" value={summary.total_restaurants} accent="primary" />
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

      {/* Chart + pending bookings shortcut */}
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
              onClick={() => goToBookings("PENDING")}
              className="flex w-full items-center justify-between rounded-lg bg-primary-700/60 px-4 py-3 text-left transition-colors hover:bg-primary-700"
            >
              <span className="text-sm text-primary-50">Booking approvals</span>
              <span className="rounded-full bg-accent-400 px-2.5 py-0.5 text-sm font-bold text-primary-900">
                {summary.pending_bookings}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Restaurant performance preview — top 5 + view all */}
      <section>
        <RestaurantPerformancePreview rows={restaurants} />
      </section>

      {/* Live bookings preview — latest 5 + view all */}
      <section>
        <LiveBookingsPreview bookings={recent_bookings} />
      </section>
    </SuperAdminLayout>
  );
};

export default SuperAdminDashboard;
