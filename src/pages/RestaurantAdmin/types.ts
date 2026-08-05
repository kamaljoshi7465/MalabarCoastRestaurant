export type RestaurantBookingStatus =
  | "PENDING"
  | "ACCEPTED"
  | "COMPLETED"
  | "CANCELLED"
  | "REJECTED";
  // | "NO_SHOW"
  // | "CONFIRMED";

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

export interface RestaurantNotifications {
  pending_approval: number;
  cancel_requests: number;
  reschedule_requests: number;
}

export type SlotStatus = "ENABLED" | "DISABLED";

/* GET /restaurant/booking-slots?date= — a single bookable time slot for a given date. */
export interface BookingSlot {
  outlet_id: number;
  date: string;
  time: string;
  status: SlotStatus;
  reason: string | null;
}

/* POST /admin/booking-slots/status — enable/disable a batch of slots on a date. */
export interface SlotStatusUpdateRequest {
  outlet_id: number;
  date: string;
  slots: string[];
  status: SlotStatus;
  reason?: string;
}

/* POST /admin/bookings/status — accept/reject (or otherwise update) a booking. */
export interface BookingStatusUpdateRequest {
  booking_id: number;
  status: RestaurantBookingStatus;
  reason?: string;
}

/* GET /restaurant/dashboard — live API (admin auth). Booking-list items share one
   rich shape across today/upcoming/recent lists (and can appear in more than one). */
export interface RestaurantDashboardBooking {
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
  status: RestaurantBookingStatus;
  cancel_reason: string | null;
  rejection_reason: string | null;
  created_at: string;
}

export interface RestaurantDashboardOverview {
  restaurant: RestaurantInfo;
  summary: RestaurantSummary;
  today: TodayInfo;
  booking_status_count: BookingStatusCount;
  upcoming_bookings: RestaurantDashboardBooking[];
  today_bookings: RestaurantDashboardBooking[];
  recent_bookings: RestaurantDashboardBooking[];
  chart_data: ChartData;
  notifications: RestaurantNotifications;
}
