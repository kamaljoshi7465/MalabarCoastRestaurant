import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { useApiMutation } from "./useApiMutation";
import type { DaySlot, SlotStatusUpdateRequest } from "../pages/RestaurantAdmin/types";

export const useUpdateBookingSlotStatus = () =>
  useApiMutation((payload: SlotStatusUpdateRequest) =>
    apiRequest<DaySlot[]>(ENDPOINTS.bookingSlotStatus, {
      method: "POST",
      body: payload,
      auth: "admin",
    })
  );
