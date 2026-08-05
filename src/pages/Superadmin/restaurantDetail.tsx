import React, { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_RESPONSE, ADMIN_PROFILE } from "./data";
import type { BookingStatus, PlatformBooking } from "./types";
import { mergeBookings } from "./utils";
import { useToasts } from "../../components/admin/Toast";
import { SuperAdminLayout } from "../../layouts/SuperAdminLayout";
import { StatCard } from "../../components/admin/StatCard";
import { LiveBookingsExplorer } from "../../components/pages/SuperAdmin/LiveBookingsExplorer";
import { BookingDetailModal } from "../../components/pages/SuperAdmin/BookingDetailModal";

const SuperAdminRestaurantDetail: React.FC = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const { data } = API_RESPONSE;
  const { summary, restaurants, upcoming_bookings, today_bookings, recent_bookings } = data;

  const { toasts, push } = useToasts();
  const navigate = useNavigate();
  const [selectedBooking, setSelectedBooking] = useState<PlatformBooking | null>(null);
  const [statusFilter, setStatusFilter] = useState<BookingStatus | "ALL">("ALL");
  const [overrides, setOverrides] = useState<Record<number, BookingStatus>>({});

  const restaurant = useMemo(
    () => restaurants.find((r) => String(r.id) === restaurantId),
    [restaurants, restaurantId]
  );

  const restaurantBookings: PlatformBooking[] = useMemo(() => {
    if (!restaurant) return [];
    return mergeBookings(upcoming_bookings, today_bookings, recent_bookings).filter(
      (b) => b.outlet_id === restaurant.id
    );
  }, [upcoming_bookings, today_bookings, recent_bookings, restaurant]);

  const todayCount = useMemo(
    () => (restaurant ? today_bookings.filter((b) => b.outlet_id === restaurant.id).length : 0),
    [today_bookings, restaurant]
  );
  const upcomingCount = useMemo(
    () => (restaurant ? upcoming_bookings.filter((b) => b.outlet_id === restaurant.id).length : 0),
    [upcoming_bookings, restaurant]
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
    navigate("/super-admin-dashboard/bookings?status=PENDING");
  };

  if (!restaurant) {
    return (
      <SuperAdminLayout
        active="restaurants"
        title="Restaurant not found"
        summary={summary}
        admin={ADMIN_PROFILE}
        onBellReview={handleBellReview}
        onLogout={() => {
          push("Logged out", "info");
          navigate("/super-admin-login");
        }}
        toasts={toasts}
      >
        <div className="card flex flex-col items-center gap-4 bg-white p-10 text-center">
          <p className="text-gray-600">
            We couldn't find a restaurant with id "{restaurantId}".
          </p>
          <Link
            to="/super-admin-dashboard/restaurants"
            className="rounded-lg bg-primary-600 px-6 py-2 text-white hover:bg-primary-700"
          >
            Back to Restaurants
          </Link>
        </div>
      </SuperAdminLayout>
    );
  }

  return (
    <SuperAdminLayout
      active="restaurants"
      title={restaurant.restaurant_name}
      subtitle="Restaurant details & bookings"
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
        <Link
          to="/super-admin-dashboard/restaurants"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:underline"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to all restaurants
        </Link>
      </section>

      <section className="card flex flex-col gap-4 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <h2 className="font-serif text-2xl text-primary-700">{restaurant.restaurant_name}</h2>
          <p className="text-sm text-gray-500">Restaurant ID #{restaurant.id} · {restaurant.outlet_name}</p>
          <p className="mt-1 text-sm text-gray-500">
            {restaurant.owner_name} · {restaurant.email}
          </p>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        <StatCard label="Today" value={todayCount} accent="gold" />
        <StatCard label="Upcoming" value={upcomingCount} accent="gold" />
        <StatCard label="Pending" value={restaurant.pending_bookings} accent="gold" />
        <StatCard label="Total" value={restaurant.total_bookings} accent="primary" />
      </section>

      <section>
        <LiveBookingsExplorer
          bookings={restaurantBookings}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          bookingOverrides={overrides}
          onOpenBooking={setSelectedBooking}
          title={`${restaurant.restaurant_name} — Bookings`}
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

export default SuperAdminRestaurantDetail;
