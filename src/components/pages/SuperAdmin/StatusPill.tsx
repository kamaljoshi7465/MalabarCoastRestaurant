import React from "react";
import type { RestaurantStatus } from "../../../pages/Superadmin/types";

export {
  BOOKING_STATUS_LABEL,
  BOOKING_STATUS_STYLES,
  STATUS_ORDER,
  StatusPill,
} from "../../../components/admin/BookingStatusPill";

export const RestaurantStatusPill: React.FC<{ status: RestaurantStatus }> = ({
  status,
}) => (
  <span
    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
      status === "ACTIVE"
        ? "bg-primary-50 text-primary-600"
        : "bg-gray-100 text-gray-500"
    }`}
  >
    <span
      className={`h-1.5 w-1.5 rounded-full ${
        status === "ACTIVE" ? "bg-primary-500" : "bg-gray-400"
      }`}
    />
    {status === "ACTIVE" ? "Active" : "Inactive"}
  </span>
);
