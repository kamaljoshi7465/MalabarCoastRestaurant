import React, { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API_RESPONSE, ADMIN_PROFILE } from "./data";
import type { BookingStatus, PlatformBooking } from "./types";
import { mergeBookings } from "./utils";
import { STATUS_ORDER } from "../../components/admin/BookingStatusPill";
import { useToasts } from "../../components/admin/Toast";
import { SuperAdminLayout } from "../../layouts/SuperAdminLayout";
import { LiveBookingsExplorer } from "../../components/pages/SuperAdmin/LiveBookingsExplorer";
import { BookingDetailModal } from "../../components/pages/SuperAdmin/BookingDetailModal";

const isBookingStatus = (v: string | null): v is BookingStatus =>
  !!v && (STATUS_ORDER as string[]).includes(v);

const SuperAdminBookings: React.FC = () => {
  const { data } = API_RESPONSE;
  const { summary, upcoming_bookings, today_bookings, recent_bookings } = data;
  const bookings = useMemo(
    () => mergeBookings(upcoming_bookings, today_bookings, recent_bookings),
    [upcoming_bookings, today_bookings, recent_bookings]
  );

  const { toasts, push } = useToasts();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialStatus = searchParams.get("status");

  const [statusFilter, setStatusFilter] = useState<BookingStatus | "ALL">(
    isBookingStatus(initialStatus) ? initialStatus : "ALL"
  );
  const [selectedBooking, setSelectedBooking] = useState<PlatformBooking | null>(null);
  const [overrides, setOverrides] = useState<Record<number, BookingStatus>>({});

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

  return (
    <SuperAdminLayout
      active="bookings"
      title="Bookings"
      subtitle={`${summary.total_bookings.toLocaleString("en-IN")} bookings across the platform`}
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
