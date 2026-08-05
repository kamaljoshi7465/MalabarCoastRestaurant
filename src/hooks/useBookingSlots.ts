import { useCallback } from "react";
import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { useApiQuery } from "./useApiQuery";
import type { BookingSlot } from "../pages/RestaurantAdmin/types";

export const useBookingSlots = (date: string) => {
  const fetcher = useCallback(async () => {
    const result = await apiRequest<{ slots: BookingSlot[] }>(
      `${ENDPOINTS.bookingSlots}?date=${date}`,
      { auth: "admin" }
    );
    return result.slots;
  }, [date]);
  return useApiQuery(fetcher);
};
