import type { Booking } from "../../types/booking";
export type { BookingStatus, Booking, FlatBooking } from "../../types/booking";

export interface Summary {
  total_restaurants: number;
  active_restaurants: number;
  inactive_restaurants: number;
  total_bookings: number;
  today_bookings: number;
  upcoming_bookings: number;
  pending_bookings: number;
  accepted_bookings: number;
  completed_bookings: number;
  cancelled_bookings: number;
  rejected_bookings: number;
  no_show_bookings: number;
}

export type RestaurantStatus = "ACTIVE" | "INACTIVE";

export interface RestaurantBookingSummary {
  restaurant_id: number;
  restaurant_name: string;
  today_bookings: number;
  upcoming_bookings: number;
  total_bookings: number;
  pending_bookings: number;
  accepted_bookings: number;
  completed_bookings: number;
  cancelled_bookings: number;
  rejected_bookings: number;
  status: RestaurantStatus;
}

export interface RestaurantBookings {
  restaurant_id: number;
  restaurant_name: string;
  bookings: Booking[];
}

export interface WeeklyBookingPoint {
  date: string;
  count: number;
}

export interface ChartData {
  weekly_bookings: WeeklyBookingPoint[];
}

export interface Notifications {
  pending_restaurant_approvals: number;
  pending_booking_approvals: number;
}

export interface DashboardData {
  summary: Summary;
  restaurant_booking_summary: RestaurantBookingSummary[];
  restaurant_bookings: RestaurantBookings[];
  chart_data: ChartData;
  notifications: Notifications;
}

export interface DashboardApiResponse {
  success: boolean;
  message: string;
  data: DashboardData;
}

export interface AdminProfile {
  name: string;
  email: string;
  role: string;
  phone: string;
  joined: string;
}
