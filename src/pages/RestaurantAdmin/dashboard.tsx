import React from "react";
import { useNavigate } from "react-router-dom";
import { StatCard } from "../../components/admin/StatCard";
import { useToasts } from "../../components/admin/Toast";
import { RESTAURANT_API_RESPONSE } from "./data";
import { formatDate } from "./utils";
import { RestaurantAdminLayout } from "../../layouts/RestaurantAdminLayout";
import { TodayAvailabilityCard } from "../../components/pages/RestaurantsAdmin/TodayAvailabilityCard";

const RestaurantOverview: React.FC = () => {
  const navigate = useNavigate();
  const { data } = RESTAURANT_API_RESPONSE;
  const { restaurant, today, summary, notifications } = data;

  const { toasts, push } = useToasts();

  const goToPendingApprovals = () => navigate("/restaurant-dashboard/bookings?status=PENDING");

  return (
    <RestaurantAdminLayout
      active="overview"
      title="Overview"
      subtitle={`${restaurant.outlet_name} · ${formatDate(today.date)}`}
      restaurant={restaurant}
      today={today}
      pendingApproval={notifications.pending_approval}
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
