import React from "react";
import { useNavigate } from "react-router-dom";
import { API_RESPONSE, ADMIN_PROFILE } from "./data";
import { useToasts } from "./components/Toast";
import { SuperAdminLayout } from "./components/SuperAdminLayout";
import { RestaurantSummaryTable } from "./components/RestaurantSummaryTable";

const SuperAdminRestaurants: React.FC = () => {
  const { data } = API_RESPONSE;
  const { summary, restaurant_booking_summary, notifications } = data;

  const { toasts, push } = useToasts();
  const navigate = useNavigate();

  const handleBellReview = (kind: "restaurant" | "booking") => {
    if (kind === "booking") {
      navigate("/super-admin-dashboard/bookings?status=PENDING");
    } else {
      push("You're already viewing restaurants", "info");
    }
  };

  return (
    <SuperAdminLayout
      active="restaurants"
      title="Restaurants"
      subtitle={`${summary.total_restaurants} restaurants on the platform`}
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
      <section>
        <RestaurantSummaryTable rows={restaurant_booking_summary} />
      </section>
    </SuperAdminLayout>
  );
};

export default SuperAdminRestaurants;
