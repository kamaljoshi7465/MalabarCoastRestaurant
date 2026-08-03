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
