import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { useApiMutation } from "./useApiMutation";
import type { Booking, RescheduleBookingRequest } from "../types/booking";

export const useRescheduleBooking = () =>
  useApiMutation((id: number | string, payload: RescheduleBookingRequest) =>
    apiRequest<Booking>(ENDPOINTS.rescheduleBooking(id), {
      method: "PATCH",
      body: payload,
      auth: "otp",
    })
  );
