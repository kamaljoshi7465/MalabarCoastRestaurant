import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { useApiMutation } from "./useApiMutation";
import type { Booking, CancelBookingRequest } from "../types/booking";

export const useCancelBooking = () =>
  useApiMutation((id: number | string, payload: CancelBookingRequest = {}) =>
    apiRequest<Booking>(ENDPOINTS.cancelBooking(id), {
      method: "PATCH",
      body: payload,
      auth: "otp",
    })
  );
