export type BookingStatus =
  | "PENDING"
  | "ACCEPTED"
  | "COMPLETED"
  | "CANCELLED"
  | "REJECTED"
  // | "CONFIRMED"
  | "NO_SHOW";

export interface Booking {
  booking_id: number;
  booking_number: string;
  customer_name: string;
  phone: string;
  booking_date: string;
  booking_time: string;
  guests: number;
  status: BookingStatus;
}

export interface FlatBooking extends Booking {
  restaurant_id: number;
  restaurant_name: string;
}

/* POST /booking — no auth */
export interface CreateBookingRequest {
  outlet_id: number;
  date: string;
  time: string;
  guests: number;
  occasion?: string;
  name: string;
  email: string;
  phone: string;
  special_requests?: string;
}

/* POST /booking/send-otp — no auth */
export interface SendOtpRequest {
  phone: string;
  email: string;
}

export interface SendOtpResponseData {
  expires_in: string;
}

/* POST /booking/verify-otp — no auth */
export interface VerifyOtpRequest {
  phone: string;
  email: string;
  otp: string;
}

export interface VerifyOtpResponseData {
  token: string;
}

/* GET /bookings — OTP token; a customer's own booking history */
export interface CustomerBooking {
  id: number;
  booking_number: string;
  restaurant: string;
  outlet_name: string;
  status: BookingStatus;
  cancel_reason: string | null;
  created_at: string;
  outlet_id: number;
  date: string;
  time: string;
  guests: number;
  occasion: string | null;
  name: string;
  email: string;
  phone: string;
  special_requests: string | null;
}

/* PATCH /bookings/:id/cancel — OTP token */
export interface CancelBookingRequest {
  reason?: string;
}

/* PATCH /bookings/:id/reschedule — OTP token */
export interface RescheduleBookingRequest {
  date: string;
  time: string;
  guests: number;
}
