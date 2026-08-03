import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StatCard } from "../../components/admin/StatCard";
import { useToasts } from "../../components/admin/Toast";
import { RESTAURANT_API_RESPONSE } from "./data";
import { RestaurantDashboardLayout } from "./components/RestaurantDashboardLayout";
import { TodayAvailabilityCard } from "./components/TodayAvailabilityCard";
import { WeeklyBookingsChart } from "./components/WeeklyBookingsChart";
import { BookingStatusBreakdown } from "./components/BookingStatusBreakdown";
import { TodaysTimeline } from "./components/TodaysTimeline";
import { UpcomingBookingsExplorer } from "./components/UpcomingBookingsExplorer";
import { RecentActivityList } from "./components/RecentActivityList";
import type { RestaurantBookingStatus } from "./types";

const RestaurantDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { data } = RESTAURANT_API_RESPONSE;
  const {
    restaurant,
    today,
    summary,
    booking_status_count,
    chart_data,
    today_bookings,
    upcoming_bookings,
    recent_bookings,
    notifications,
  } = data;

  const { toasts, push } = useToasts();
  const [overrides, setOverrides] = useState<Record<number, RestaurantBookingStatus>>({});
  const [upcomingStatusFilter, setUpcomingStatusFilter] = useState<RestaurantBookingStatus | "ALL">(
    "ALL"
  );
  const upcomingRef = useRef<HTMLDivElement>(null);

  const liveTodayBookings = today_bookings.map((b) => ({
    ...b,
    status: overrides[b.booking_id] ?? b.status,
  }));
  const liveUpcomingBookings = upcoming_bookings.map((b) => ({
    ...b,
    status: overrides[b.booking_id] ?? b.status,
  }));

  const handleAct = (
    booking: { booking_id: number; booking_number: string },
    next: RestaurantBookingStatus
  ) => {
    setOverrides((o) => ({ ...o, [booking.booking_id]: next }));
    const messages: Record<RestaurantBookingStatus, string> = {
      PENDING: `Booking ${booking.booking_number} set to pending`,
      ACCEPTED: `Booking ${booking.booking_number} approved`,
      COMPLETED: `Booking ${booking.booking_number} marked completed`,
      CANCELLED: `Booking ${booking.booking_number} cancelled`,
      REJECTED: `Booking ${booking.booking_number} rejected`,
      NO_SHOW: `Booking ${booking.booking_number} marked no-show`,
    };
    const tone = next === "REJECTED" || next === "CANCELLED" ? "error" : "success";
    push(messages[next], tone);
  };

  const jumpToPendingApprovals = () => {
    setUpcomingStatusFilter("PENDING");
    upcomingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <RestaurantDashboardLayout
      restaurant={restaurant}
      today={today}
      pendingApproval={notifications.pending_approval}
      onRequestsClick={jumpToPendingApprovals}
      onLogout={() => {
        push("Logged out", "info");
        navigate("/restaurant-login");
      }}
      toasts={toasts}
    >
      <TodayAvailabilityCard today={today} />

      <section>
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Bookings at a glance
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <StatCard label="Total Bookings" value={summary.total_bookings} accent="primary" />
          <StatCard label="Today" value={summary.today_bookings} accent="primary" />
          <StatCard label="Upcoming" value={summary.upcoming_bookings} accent="gold" />
          <StatCard
            label="Pending"
            value={summary.pending_bookings}
            accent="gold"
            onClick={jumpToPendingApprovals}
            activeLabel="Jump to requests ↓"
          />
          <StatCard label="Approved" value={summary.accepted_bookings} accent="primary" />
          <StatCard label="Completed" value={summary.completed_bookings} accent="primary" />
          <StatCard label="Cancelled" value={summary.cancelled_bookings} accent="neutral" />
          <StatCard label="Rejected" value={summary.rejected_bookings} accent="neutral" />
        </div>
      </section>

      <section className="card bg-primary-600 p-5 text-secondary-50 sm:p-6">
        <h3 className="font-serif text-lg sm:text-xl">Needs Your Attention</h3>
        <p className="mt-1 text-sm text-primary-700">Requests waiting from guests</p>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <button
            onClick={jumpToPendingApprovals}
            className="flex items-center justify-between rounded-lg bg-primary-700/60 px-4 py-3 text-left transition-colors hover:bg-primary-700 cursor-pointer"
          >
            <span className="text-sm text-primary-50">Pending approvals</span>
            <span className="rounded-full bg-accent-400 px-2.5 py-0.5 text-sm font-bold text-primary-900">
              {notifications.pending_approval}
            </span>
          </button>
          <div className="flex items-center justify-between rounded-lg bg-primary-700/60 px-4 py-3">
            <span className="text-sm text-primary-50">Cancel requests</span>
            <span className="rounded-full bg-accent-400 px-2.5 py-0.5 text-sm font-bold text-primary-900">
              {notifications.cancel_requests}
            </span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-primary-700/60 px-4 py-3">
            <span className="text-sm text-primary-50">Reschedule requests</span>
            <span className="rounded-full bg-accent-400 px-2.5 py-0.5 text-sm font-bold text-primary-900">
              {notifications.reschedule_requests}
            </span>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <WeeklyBookingsChart points={chart_data.weekly_bookings} todayDate={today.date} />
        </div>
        <BookingStatusBreakdown counts={booking_status_count} />
      </section>

      <section>
        <TodaysTimeline
          bookings={liveTodayBookings}
          totalToday={summary.today_bookings}
          onAct={handleAct}
        />
      </section>

      <section ref={upcomingRef}>
        <UpcomingBookingsExplorer
          bookings={liveUpcomingBookings}
          totalUpcoming={summary.upcoming_bookings}
          statusFilter={upcomingStatusFilter}
          onStatusFilterChange={setUpcomingStatusFilter}
          onAct={handleAct}
        />
      </section>

      <section>
        <RecentActivityList bookings={recent_bookings} />
      </section>
    </RestaurantDashboardLayout>
  );
};

export default RestaurantDashboard;
