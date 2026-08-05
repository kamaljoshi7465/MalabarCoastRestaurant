import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useToasts } from "../../components/admin/Toast";
import { useRestaurantDashboard } from "../../hooks/useRestaurantDashboard";
import { RestaurantAdminLayout } from "../../layouts/RestaurantAdminLayout";
import { WeeklyBookingsChart } from "../../components/pages/RestaurantsAdmin/WeeklyBookingsChart";
import { BookingStatusBreakdown } from "../../components/pages/RestaurantsAdmin/BookingStatusBreakdown";

const RestaurantAnalytics: React.FC = () => {
  const navigate = useNavigate();
  const { data, loading, error, unauthorized, refetch } = useRestaurantDashboard();
  const { toasts, push } = useToasts();

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

  const { restaurant, today, chart_data, booking_status_count, notifications } = data;

  return (
    <RestaurantAdminLayout
      active="analytics"
      title="Analytics"
      subtitle="Weekly booking trend & status breakdown"
      restaurant={restaurant}
      today={today}
      notifications={notifications}
      onLogout={() => {
        push("Logged out", "info");
        navigate("/restaurant-login");
      }}
      toasts={toasts}
    >
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <WeeklyBookingsChart points={chart_data.weekly_bookings} todayDate={today.date} />
        </div>
        <BookingStatusBreakdown counts={booking_status_count} />
      </section>
    </RestaurantAdminLayout>
  );
};

export default RestaurantAnalytics;
