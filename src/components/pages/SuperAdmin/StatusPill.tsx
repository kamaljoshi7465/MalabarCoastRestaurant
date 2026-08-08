import React from "react";
import { BOOKING_STATUS_LABEL, BOOKING_STATUS_STYLES } from "../../admin/BookingStatusPill";
import type { BookingStatus } from "../../../pages/Superadmin/types";

export { BOOKING_STATUS_LABEL as PLATFORM_STATUS_LABEL, BOOKING_STATUS_STYLES as PLATFORM_STATUS_STYLES, STATUS_ORDER as PLATFORM_STATUS_ORDER } from "../../admin/BookingStatusPill";

export const StatusPill: React.FC<{ status: BookingStatus }> = ({ status }) => (
  <span
    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap ${BOOKING_STATUS_STYLES[status]}`}
  >
    {BOOKING_STATUS_LABEL[status]}
  </span>
);
