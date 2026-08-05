import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { StatCard } from "../../components/admin/StatCard";
import { useToasts } from "../../components/admin/Toast";
import { useRestaurantDashboard } from "../../hooks/useRestaurantDashboard";
import { useBookingSlots } from "../../hooks/useBookingSlots";
import { formatDate } from "./utils";
import { RestaurantAdminLayout } from "../../layouts/RestaurantAdminLayout";
import { TodayAvailabilityCard } from "../../components/pages/RestaurantsAdmin/TodayAvailabilityCard";
import { OUTLETS } from "../../data/home/restaurant/RestaurantsSection.data";
import { getOutletTimeSlots, isWeekend } from "../../data/reservations/reservationDetails.data";

const todayIso = () => new Date().toISOString().slice(0, 10);

const RestaurantOverview: React.FC = () => {
  const navigate = useNavigate();
  const { data, loading, error, unauthorized, refetch } = useRestaurantDashboard();
  const { data: slots } = useBookingSlots(todayIso());
  const { toasts, push } = useToasts();

  const goToPendingApprovals = () => navigate("/restaurant-dashboard/bookings?status=PENDING");

  if (unauthorized) {
    return <Navigate to="/restaurant-login" replace />;
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

  const { restaurant, today, summary, notifications } = data;

  // Same fix as the Slots tab: the API only returns slots with an explicit override,
  // so build the full day from the outlet's hours and default to ENABLED before
  // layering in whatever the API actually returned for today.
  const outlet = OUTLETS.find((o) => Number(o.id) === restaurant.id);
  const hoursRange = outlet ? (isWeekend(today.date) ? outlet.hours.weekend : outlet.hours.weekday) : null;
  const fullDaySlots = hoursRange
    ? getOutletTimeSlots(hoursRange).map(({ value }) => {
        const override = (slots ?? []).find((s) => s.time === value);
        return override ?? { outlet_id: restaurant.id, date: today.date, time: value, status: "ENABLED" as const, reason: null };
      })
    : slots ?? [];
  const liveToday = {
    ...today,
    available_slots: fullDaySlots.filter((s) => s.status === "ENABLED").length,
    disabled_slots: fullDaySlots.filter((s) => s.status === "DISABLED").length,
  };

  return (
    <RestaurantAdminLayout
      active="overview"
      title="Overview"
      subtitle={`${restaurant.outlet_name} · ${formatDate(today.date)}`}
      restaurant={restaurant}
      today={liveToday}
      notifications={notifications}
      onLogout={() => {
        push("Logged out", "info");
        navigate("/restaurant-login");
      }}
      toasts={toasts}
    >
      <TodayAvailabilityCard today={liveToday} />

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
            onClick={goToPendingApprovals}
            activeLabel="Review requests →"
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
        <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <button
            onClick={goToPendingApprovals}
            className="flex items-center justify-between rounded-lg bg-primary-700/60 px-4 py-3 text-left transition-colors hover:bg-primary-700 cursor-pointer"
          >
            <span className="text-sm text-primary-50">Pending approvals</span>
            <span className="rounded-full bg-accent-400 px-2.5 py-0.5 text-sm font-bold text-primary-900">
              {notifications.pending_approval}
            </span>
          </button>
          <button
            onClick={goToPendingApprovals}
            className="flex items-center justify-between rounded-lg bg-primary-700/60 px-4 py-3 text-left transition-colors hover:bg-primary-700 cursor-pointer"
          >
            <span className="text-sm text-primary-50">Reschedule requests</span>
            <span className="rounded-full bg-accent-400 px-2.5 py-0.5 text-sm font-bold text-primary-900">
              {notifications.reschedule_requests}
            </span>
          </button>
        </div>
      </section>
    </RestaurantAdminLayout>
  );
};

export default RestaurantOverview;
