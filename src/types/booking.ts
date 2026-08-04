export type BookingStatus =
  | "PENDING"
  | "ACCEPTED"
  | "COMPLETED"
  | "CANCELLED"
  | "REJECTED";

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
  customer_name: string;
  email: string;
  phone: string;
  booking_date: string;
  booking_time: string;
  guests: number;
  occasion?: string;
}

/* POST /booking/send-otp — no auth */
export interface SendOtpRequest {
  phone: string;
}

export interface SendOtpResponseData {
  otp_expires_in: number;
}

/* POST /booking/verify-otp — no auth */
export interface VerifyOtpRequest {
  phone: string;
  otp: string;
}

export interface VerifyOtpResponseData {
  token: string;
}

/* PATCH /bookings/:id/cancel — OTP token */
export interface CancelBookingRequest {
  reason?: string;
}

/* PATCH /bookings/:id/reschedule — OTP token */
export interface RescheduleBookingRequest {
  booking_date: string;
  booking_time: string;
}
