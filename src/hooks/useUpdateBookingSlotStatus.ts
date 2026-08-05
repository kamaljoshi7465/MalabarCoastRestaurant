import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { useApiMutation } from "./useApiMutation";
import type { BookingSlot, SlotStatusUpdateRequest } from "../pages/RestaurantAdmin/types";

export const useUpdateBookingSlotStatus = () =>
  useApiMutation((payload: SlotStatusUpdateRequest) =>
    apiRequest<BookingSlot[]>(ENDPOINTS.bookingSlotStatus, {
      method: "POST",
      body: payload,
      auth: "admin",
    })
  );
