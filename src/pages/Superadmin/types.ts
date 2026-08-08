export type { BookingStatus } from "../../types/booking";
import type { BookingStatus } from "../../types/booking";

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  created_at: string;
}

export interface Summary {
  total_restaurants: number;
  total_bookings: number;
  today_bookings: number;
  upcoming_bookings: number;
  completed_bookings: number;
  pending_bookings: number;
  accepted_bookings: number;
  rejected_bookings: number;
  cancelled_bookings: number;
}

export type BookingStatusCount = Record<BookingStatus, number>;

/* GET /superadmin/dashboard — data.restaurants[]: one row per outlet on the platform. */
export interface PlatformRestaurant {
  id: number;
  restaurant_name: string;
  owner_name: string;
  email: string;
  outlet_name: string;
  total_bookings: number;
  pending_bookings: number;
  bookings: PlatformBooking[];
}

/* Booking-list items share one rich shape across upcoming/today/recent lists
   (and can appear in more than one). */
export interface PlatformBooking {
  id: number;
  booking_number: string;
  outlet_id: number;
  restaurant: string;
  outlet_name: string;
  date: string;
  time: string;
  guests: number;
  occasion: string | null;
  name: string;
  email: string;
  phone: string;
  special_requests: string | null;
  status: BookingStatus;
  cancel_reason: string | null;
  rejection_reason: string | null;
  created_at: string;
}

export interface WeeklyBookingPoint {
  date: string;
  count: number;
}

export interface ChartData {
  weekly_bookings: WeeklyBookingPoint[];
}

export interface DashboardData {
  user_profile: UserProfile;
  summary: Summary;
  booking_status_count: BookingStatusCount;
  restaurants: PlatformRestaurant[];
  upcoming_bookings: PlatformBooking[];
  today_bookings: PlatformBooking[];
  recent_bookings: PlatformBooking[];
  chart_data: ChartData;
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
  phone: string | null;
  joined: string;
}
