import type { RestaurantDashboardApiResponse } from "../../pages/RestaurantAdmin/types";

export const restaurantDashboardData: RestaurantDashboardApiResponse = {
  success: true,
  message: "Dashboard data fetched successfully.",
  data: {
    restaurant: {
      id: 1,
      name: "The Malabar Coast",
      outlet_name: "M3M Atrium 57",
    },
    today: {
      date: "2026-08-15",
      available_slots: 18,
      disabled_slots: 4,
    },
    summary: {
      total_bookings: 1250,
      today_bookings: 24,
      upcoming_bookings: 38,
      pending_bookings: 12,
      accepted_bookings: 18,
      completed_bookings: 1045,
      cancelled_bookings: 15,
      rejected_bookings: 7,
    },
    booking_status_count: {
      PENDING: 12,
      ACCEPTED: 18,
      COMPLETED: 1045,
      CANCELLED: 15,
      REJECTED: 7,
      NO_SHOW: 9,
    },
    chart_data: {
      weekly_bookings: [
        { date: "2026-08-09", count: 18 },
        { date: "2026-08-10", count: 22 },
      ],
    },
    today_bookings: [
      {
        booking_id: 103,
        booking_number: "BK000103",
        customer_name: "Amit Kumar",
        guests: 5,
        booking_time: "18:30",
        status: "PENDING",
      },
    ],
    upcoming_bookings: [
      {
        booking_id: 101,
        booking_number: "BK000101",
        customer_name: "Kamal Joshi",
        phone: "9876543210",
        booking_date: "2026-08-15",
        booking_time: "19:00",
        guests: 4,
        occasion: "Birthday",
        status: "ACCEPTED",
      },
    ],
    recent_bookings: [
      {
        booking_id: 98,
        booking_number: "BK000098",
        customer_name: "Priya Singh",
        booking_date: "2026-08-14",
        booking_time: "20:30",
        status: "COMPLETED",
      },
    ],
    notifications: {
      pending_approval: 12,
      cancel_requests: 2,
      reschedule_requests: 3,
    },
  },
};
