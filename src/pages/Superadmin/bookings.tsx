import React, { useMemo, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import type { BookingStatus, PlatformBooking } from "./types";
import { toAdminProfile } from "./utils";
import { PLATFORM_STATUS_ORDER } from "../../components/pages/SuperAdmin/StatusPill";
import { useToasts } from "../../components/admin/Toast";
import { useSuperAdminDashboard } from "../../hooks/useSuperAdminDashboard";
import { SuperAdminLayout } from "../../layouts/SuperAdminLayout";
import { LiveBookingsExplorer } from "../../components/pages/SuperAdmin/LiveBookingsExplorer";
import { BookingDetailModal } from "../../components/pages/SuperAdmin/BookingDetailModal";

const isPlatformBookingStatus = (v: string | null): v is BookingStatus =>
  !!v && (PLATFORM_STATUS_ORDER as string[]).includes(v);

const SuperAdminBookings: React.FC = () => {
  const { data, loading, error, unauthorized, refetch } = useSuperAdminDashboard();
  const { toasts, push } = useToasts();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialStatus = searchParams.get("status");

  const [statusFilter, setStatusFilter] = useState<BookingStatus | "ALL">(
    isPlatformBookingStatus(initialStatus) ? initialStatus : "ALL"
  );
  const [selectedBooking, setSelectedBooking] = useState<PlatformBooking | null>(null);
  const [overrides, setOverrides] = useState<Record<number, BookingStatus>>({});

  const bookings = useMemo(
    () => (data ? data.restaurants.flatMap((r) => r.bookings) : []),
    [data]
  );

  const handleAct = (booking: PlatformBooking, next: BookingStatus) => {
    setOverrides((o) => ({ ...o, [booking.id]: next }));
    setSelectedBooking(null);
    const messages: Record<BookingStatus, string> = {
      PENDING: `Booking ${booking.booking_number} set to pending`,
      ACCEPTED: `Booking ${booking.booking_number} approved`,
      COMPLETED: `Booking ${booking.booking_number} marked completed`,
      CANCELLED: `Booking ${booking.booking_number} cancelled`,
      REJECTED: `Booking ${booking.booking_number} rejected`,
    };
    const tone = next === "REJECTED" || next === "CANCELLED" ? "error" : "success";
    push(messages[next], tone);
  };

  const handleBellReview = () => {
    setStatusFilter("PENDING");
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

  const { summary, user_profile } = data;

  return (
    <SuperAdminLayout
      active="bookings"
      title="Bookings"
      subtitle={`${summary.total_bookings.toLocaleString("en-IN")} bookings across the platform`}
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
        <LiveBookingsExplorer
          bookings={bookings}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          bookingOverrides={overrides}
          onOpenBooking={setSelectedBooking}
        />
      </section>

      <BookingDetailModal
        booking={selectedBooking}
        onClose={() => setSelectedBooking(null)}
        onAct={handleAct}
      />
    </SuperAdminLayout>
  );
};

export default SuperAdminBookings;
