import React from "react";
import { useNavigate } from "react-router-dom";
import { API_RESPONSE, ADMIN_PROFILE } from "./data";
import { useToasts } from "../../components/admin/Toast";
import { SuperAdminLayout } from "../../layouts/SuperAdminLayout";
import { RestaurantSummaryTable } from "../../components/pages/SuperAdmin/RestaurantSummaryTable";

const SuperAdminRestaurants: React.FC = () => {
  const { data } = API_RESPONSE;
  const { summary, restaurants } = data;

  const { toasts, push } = useToasts();
  const navigate = useNavigate();

  const handleBellReview = () => {
    navigate("/super-admin-dashboard/bookings?status=PENDING");
  };

  return (
    <SuperAdminLayout
      active="restaurants"
      title="Restaurants"
      subtitle={`${summary.total_restaurants} restaurants on the platform`}
      summary={summary}
      admin={ADMIN_PROFILE}
      onBellReview={handleBellReview}
      onLogout={() => {
        push("Logged out", "info");
        navigate("/super-admin-login");
      }}
      toasts={toasts}
    >
      <section>
        <RestaurantSummaryTable rows={restaurants} />
      </section>
    </SuperAdminLayout>
  );
};

export default SuperAdminRestaurants;
