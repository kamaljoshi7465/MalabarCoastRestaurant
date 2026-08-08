import React, { useMemo, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useToasts } from "../../components/admin/Toast";
import { useRestaurantDashboard } from "../../hooks/useRestaurantDashboard";
import { useUpdateBookingStatus } from "../../hooks/useUpdateBookingStatus";
import type { BookingStatus, RestaurantDashboardBooking } from "./types";
import { BOOKING_STATUS_LABEL, STATUS_ORDER } from "../../components/admin/BookingStatusPill";
import { RestaurantAdminLayout } from "../../layouts/RestaurantAdminLayout";
import { AllBookingsTable } from "../../components/pages/RestaurantsAdmin/AllBookingsTable";
import { TodaysTimeline } from "../../components/pages/RestaurantsAdmin/TodaysTimeline";
import { UpcomingBookingsExplorer } from "../../components/pages/RestaurantsAdmin/UpcomingBookingsExplorer";
import { RecentActivityList } from "../../components/pages/RestaurantsAdmin/RecentActivityList";

const isBookingStatus = (v: string | null): v is BookingStatus =>
  !!v && (STATUS_ORDER as string[]).includes(v);

const RestaurantBookings: React.FC = () => {
  const navigate = useNavigate();
  const { data, loading, error, unauthorized, refetch } = useRestaurantDashboard();
  const { mutate: updateStatus } = useUpdateBookingStatus();

  const { toasts, push } = useToasts();
  const [searchParams] = useSearchParams();
  const initialStatus = searchParams.get("status");
  const [upcomingStatusFilter, setUpcomingStatusFilter] = useState<BookingStatus | "ALL">(
    isBookingStatus(initialStatus) ? initialStatus : "ALL"
  );
  const [overrides, setOverrides] = useState<Record<number, BookingStatus>>({});

  const allBookings = useMemo(() => {
    if (!data) return [];
    return data.all_bookings
      .map((b) => ({ ...b, status: overrides[b.id] ?? b.status }))
      .sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`));
  }, [data, overrides]);

  const liveTodayBookings = (data?.today_bookings ?? []).map((b) => ({ ...b, status: overrides[b.id] ?? b.status }));
  const liveUpcomingBookings = (data?.upcoming_bookings ?? []).map((b) => ({ ...b, status: overrides[b.id] ?? b.status }));

  const handleAct = async (booking: RestaurantDashboardBooking, next: BookingStatus) => {
    setOverrides((o) => ({ ...o, [booking.id]: next }));
    try {
      await updateStatus({ booking_id: booking.id, status: next });
      push(`Booking ${booking.booking_number} updated to ${BOOKING_STATUS_LABEL[next]}`, next === "REJECTED" || next === "CANCELLED" ? "error" : "success");
      refetch();
    } catch (err) {
      setOverrides((o) => {
        const next = { ...o };
        delete next[booking.id];
        return next;
      });
      push(err instanceof Error ? err.message : "Couldn't update this booking. Please try again.", "error");
    }
  };

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

  return (
    <RestaurantAdminLayout
      active="bookings"
      title="Bookings"
      subtitle={`${summary.total_bookings.toLocaleString("en-IN")} bookings on record`}
      restaurant={restaurant}
      today={today}
      notifications={notifications}
      onLogout={() => {
        push("Logged out", "info");
        navigate("/restaurant-login");
      }}
      toasts={toasts}
    >
      <section>
        <AllBookingsTable bookings={allBookings} onAct={handleAct} />
      </section>

      <section>
        <TodaysTimeline bookings={liveTodayBookings} totalToday={summary.today_bookings} onAct={handleAct} />
      </section>

      <section>
        <UpcomingBookingsExplorer
          bookings={liveUpcomingBookings}
          totalUpcoming={liveUpcomingBookings.length}
          statusFilter={upcomingStatusFilter}
          onStatusFilterChange={setUpcomingStatusFilter}
          onAct={handleAct}
        />
      </section>

      <section>
        <RecentActivityList bookings={data.recent_bookings} />
      </section>
    </RestaurantAdminLayout>
  );
};

export default RestaurantBookings;
