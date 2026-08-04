import React, { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToasts } from "../../components/admin/Toast";
import { RESTAURANT_API_RESPONSE } from "./data";
import type { AnyBooking, RestaurantBookingStatus } from "./types";
import { STATUS_ORDER } from "../../components/pages/RestaurantsAdmin/RestaurantStatusPill";
import { RestaurantAdminLayout } from "../../layouts/RestaurantAdminLayout";
import { AllBookingsTable } from "../../components/pages/RestaurantsAdmin/AllBookingsTable";
import { TodaysTimeline } from "../../components/pages/RestaurantsAdmin/TodaysTimeline";
import { UpcomingBookingsExplorer } from "../../components/pages/RestaurantsAdmin/UpcomingBookingsExplorer";
import { RecentActivityList } from "../../components/pages/RestaurantsAdmin/RecentActivityList";

const isBookingStatus = (v: string | null): v is RestaurantBookingStatus =>
  !!v && (STATUS_ORDER as string[]).includes(v);

const RestaurantBookings: React.FC = () => {
  const navigate = useNavigate();
  const { data } = RESTAURANT_API_RESPONSE;
  const { restaurant, today, summary, today_bookings, upcoming_bookings, recent_bookings, notifications } = data;

  const { toasts, push } = useToasts();
  const [searchParams] = useSearchParams();
  const initialStatus = searchParams.get("status");
  const [upcomingStatusFilter, setUpcomingStatusFilter] = useState<RestaurantBookingStatus | "ALL">(
    isBookingStatus(initialStatus) ? initialStatus : "ALL"
  );
  const [overrides, setOverrides] = useState<Record<number, RestaurantBookingStatus>>({});

  const liveTodayBookings = today_bookings.map((b) => ({
    ...b,
    status: overrides[b.booking_id] ?? b.status,
  }));
  const liveUpcomingBookings = upcoming_bookings
    .filter((b) => b.booking_date === today.date)
    .map((b) => ({
      ...b,
      status: overrides[b.booking_id] ?? b.status,
    }));

  const allBookings = useMemo(() => {
    const merged = new Map<number, AnyBooking>();
    recent_bookings.forEach((b) => {
      merged.set(b.booking_id, {
        booking_id: b.booking_id,
        booking_number: b.booking_number,
        customer_name: b.customer_name,
        booking_date: b.booking_date,
        booking_time: b.booking_time,
        status: overrides[b.booking_id] ?? b.status,
      });
    });
    today_bookings.forEach((b) => {
      merged.set(b.booking_id, {
        booking_id: b.booking_id,
        booking_number: b.booking_number,
        customer_name: b.customer_name,
        booking_date: today.date,
        booking_time: b.booking_time,
        guests: b.guests,
        status: overrides[b.booking_id] ?? b.status,
      });
    });
    upcoming_bookings.forEach((b) => {
      merged.set(b.booking_id, {
        booking_id: b.booking_id,
        booking_number: b.booking_number,
        customer_name: b.customer_name,
        phone: b.phone,
        booking_date: b.booking_date,
        booking_time: b.booking_time,
        guests: b.guests,
        occasion: b.occasion,
        status: overrides[b.booking_id] ?? b.status,
      });
    });
    return Array.from(merged.values()).sort((a, b) =>
      `${a.booking_date}T${a.booking_time}`.localeCompare(`${b.booking_date}T${b.booking_time}`)
    );
  }, [today_bookings, upcoming_bookings, recent_bookings, overrides, today.date]);

  const handleAct = (
    booking: { booking_id: number; booking_number: string },
    next: RestaurantBookingStatus
  ) => {
    setOverrides((o) => ({ ...o, [booking.booking_id]: next }));
    const messages: Record<RestaurantBookingStatus, string> = {
      PENDING: `Booking ${booking.booking_number} set to pending`,
      ACCEPTED: `Booking ${booking.booking_number} approved`,
      COMPLETED: `Booking ${booking.booking_number} marked completed`,
      CANCELLED: `Booking ${booking.booking_number} cancelled`,
      REJECTED: `Booking ${booking.booking_number} rejected`,
      NO_SHOW: `Booking ${booking.booking_number} marked no-show`,
    };
    const tone = next === "REJECTED" || next === "CANCELLED" ? "error" : "success";
    push(messages[next], tone);
  };

  return (
    <RestaurantAdminLayout
      active="bookings"
      title="Bookings"
      subtitle={`${summary.total_bookings.toLocaleString("en-IN")} bookings on record`}
      restaurant={restaurant}
      today={today}
      pendingApproval={notifications.pending_approval}
      onLogout={() => {
        push("Logged out", "info");
        navigate("/restaurant-login");
      }}
      toasts={toasts}
    >
      <section>
        <AllBookingsTable bookings={allBookings} />
      </section>

      <section>
        <TodaysTimeline
          bookings={liveTodayBookings}
          totalToday={summary.today_bookings}
          onAct={handleAct}
        />
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
        <RecentActivityList bookings={recent_bookings} />
      </section>
    </RestaurantAdminLayout>
  );
};

export default RestaurantBookings;
