import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { useApiMutation } from "./useApiMutation";
import type { CancelBookingRequest, CustomerBooking } from "../types/booking";

export const useCancelBooking = () =>
  useApiMutation((id: number | string, payload: CancelBookingRequest = {}) =>
    apiRequest<CustomerBooking>(ENDPOINTS.cancelBooking(id), {
      method: "PATCH",
      body: payload,
      auth: "otp",
    })
  );
