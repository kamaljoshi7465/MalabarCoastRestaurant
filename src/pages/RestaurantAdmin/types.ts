export type RestaurantBookingStatus =
  | "PENDING"
  | "ACCEPTED"
  | "COMPLETED"
  | "CANCELLED"
  | "REJECTED"
  | "NO_SHOW";

export interface RestaurantInfo {
  id: number;
  name: string;
  outlet_name: string;
}

export interface TodayInfo {
  date: string;
  available_slots: number;
  disabled_slots: number;
}

export interface RestaurantSummary {
  total_bookings: number;
  today_bookings: number;
  upcoming_bookings: number;
  pending_bookings: number;
  accepted_bookings: number;
  completed_bookings: number;
  cancelled_bookings: number;
  rejected_bookings: number;
}

export type BookingStatusCount = Record<RestaurantBookingStatus, number>;

export interface WeeklyBookingPoint {
  date: string;
  count: number;
}

export interface ChartData {
  weekly_bookings: WeeklyBookingPoint[];
}

/* Today's bookings — no phone or date (implied "today"). */
export interface TodayBooking {
  booking_id: number;
  booking_number: string;
  customer_name: string;
  guests: number;
  booking_time: string;
  status: RestaurantBookingStatus;
}

/* Upcoming bookings — the richest shape: has phone, date, and occasion. */
export interface UpcomingBooking {
  booking_id: number;
  booking_number: string;
  customer_name: string;
  phone: string;
  booking_date: string;
  booking_time: string;
  guests: number;
  occasion: string;
  status: RestaurantBookingStatus;
}

/* Recent activity — the leanest shape: no guests or phone, read-only. */
export interface RecentBooking {
  booking_id: number;
  booking_number: string;
  customer_name: string;
  booking_date: string;
  booking_time: string;
  status: RestaurantBookingStatus;
}

export interface RestaurantNotifications {
  pending_approval: number;
  cancel_requests: number;
  reschedule_requests: number;
}

export interface RestaurantDashboardData {
  restaurant: RestaurantInfo;
  today: TodayInfo;
  summary: RestaurantSummary;
  booking_status_count: BookingStatusCount;
  chart_data: ChartData;
  today_bookings: TodayBooking[];
  upcoming_bookings: UpcomingBooking[];
  recent_bookings: RecentBooking[];
  notifications: RestaurantNotifications;
}

export interface RestaurantDashboardApiResponse {
  success: boolean;
  message: string;
  data: RestaurantDashboardData;
}
