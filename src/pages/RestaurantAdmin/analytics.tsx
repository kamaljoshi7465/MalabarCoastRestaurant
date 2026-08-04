import React from "react";
import { useNavigate } from "react-router-dom";
import { useToasts } from "../../components/admin/Toast";
import { RESTAURANT_API_RESPONSE } from "./data";
import { RestaurantAdminLayout } from "../../layouts/RestaurantAdminLayout";
import { WeeklyBookingsChart } from "../../components/pages/RestaurantsAdmin/WeeklyBookingsChart";
import { BookingStatusBreakdown } from "../../components/pages/RestaurantsAdmin/BookingStatusBreakdown";

const RestaurantAnalytics: React.FC = () => {
  const navigate = useNavigate();
  const { data } = RESTAURANT_API_RESPONSE;
  const { restaurant, today, chart_data, booking_status_count, notifications } = data;

  const { toasts, push } = useToasts();

  return (
    <RestaurantAdminLayout
      active="analytics"
      title="Analytics"
      subtitle="Weekly booking trend & status breakdown"
      restaurant={restaurant}
      today={today}
      pendingApproval={notifications.pending_approval}
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
