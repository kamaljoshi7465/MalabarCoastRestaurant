import { useCallback } from "react";
import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { useApiQuery } from "./useApiQuery";
import type { Booking } from "../types/booking";

export const useBookingDetails = (id: number | string) => {
  const fetcher = useCallback(
    () => apiRequest<Booking>(ENDPOINTS.bookingDetails(id), { auth: "otp" }),
    [id]
  );
  return useApiQuery(fetcher);
};
