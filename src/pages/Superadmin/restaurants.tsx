import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { toAdminProfile } from "./utils";
import { useToasts } from "../../components/admin/Toast";
import { useSuperAdminDashboard } from "../../hooks/useSuperAdminDashboard";
import { SuperAdminLayout } from "../../layouts/SuperAdminLayout";
import { RestaurantSummaryTable } from "../../components/pages/SuperAdmin/RestaurantSummaryTable";

const SuperAdminRestaurants: React.FC = () => {
  const { data, loading, error, unauthorized, refetch } = useSuperAdminDashboard();
  const { toasts, push } = useToasts();
  const navigate = useNavigate();

  const handleBellReview = () => {
    navigate("/super-admin-dashboard/bookings?status=PENDING");
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

  const { summary, restaurants, user_profile } = data;

  return (
    <SuperAdminLayout
      active="restaurants"
      title="Restaurants"
      subtitle={`${summary.total_restaurants} restaurants on the platform`}
      summary={summary}
      admin={toAdminProfile(user_profile)}
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
