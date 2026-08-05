import React from "react";
import type { RestaurantBookingStatus } from "../../../pages/RestaurantAdmin/types";

export const BOOKING_STATUS_LABEL: Record<RestaurantBookingStatus, string> = {
  PENDING: "Pending",
  ACCEPTED: "Approved",
  COMPLETED: "Completed",
  CANCELLED: "Cancelled",
  REJECTED: "Rejected",
  // NO_SHOW: "No-show",
  // CONFIRMED: "Confirmed",
};

export const BOOKING_STATUS_STYLES: Record<RestaurantBookingStatus, string> = {
  PENDING: "bg-accent-100 text-accent-500 ring-1 ring-inset ring-accent-300",
  ACCEPTED: "bg-primary-50 text-primary-600 ring-1 ring-inset ring-primary-200",
  COMPLETED: "bg-primary-100 text-primary-700 ring-1 ring-inset ring-primary-300",
  CANCELLED: "bg-gray-100 text-gray-600 ring-1 ring-inset ring-gray-300",
  REJECTED: "bg-red-50 text-error ring-1 ring-inset ring-red-200",
  // NO_SHOW: "bg-gray-100 text-gray-500 ring-1 ring-inset ring-gray-300",
  // CONFIRMED: "bg-primary-50 text-primary-600 ring-1 ring-inset ring-primary-200",
};

export const STATUS_ORDER: RestaurantBookingStatus[] = [
  "PENDING",
  "ACCEPTED",
  "COMPLETED",
  "CANCELLED",
  "REJECTED",
];

export const StatusPill: React.FC<{ status: RestaurantBookingStatus }> = ({ status }) => (
  <span
    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap ${BOOKING_STATUS_STYLES[status]}`}
  >
    {BOOKING_STATUS_LABEL[status]}
  </span>
);
