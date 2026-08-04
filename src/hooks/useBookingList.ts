import { useCallback } from "react";
import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { useApiQuery } from "./useApiQuery";
import type { Booking } from "../types/booking";

export const useBookingList = () => {
  const fetcher = useCallback(
    () => apiRequest<Booking[]>(ENDPOINTS.bookingList, { auth: "otp" }),
    []
  );
  return useApiQuery(fetcher);
};
