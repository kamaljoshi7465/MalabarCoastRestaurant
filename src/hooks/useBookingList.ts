import { useCallback } from "react";
import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { useApiQuery } from "./useApiQuery";
import type { CustomerBooking } from "../types/booking";

export const useBookingList = () => {
  const fetcher = useCallback(
    () => apiRequest<CustomerBooking[]>(ENDPOINTS.bookingList, { auth: "otp" }),
    []
  );
  return useApiQuery(fetcher);
};
