import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { useApiMutation } from "./useApiMutation";
import type { CustomerBooking, RescheduleBookingRequest } from "../types/booking";

export const useRescheduleBooking = () =>
  useApiMutation((id: number | string, payload: RescheduleBookingRequest) =>
    apiRequest<CustomerBooking>(ENDPOINTS.rescheduleBooking(id), {
      method: "PATCH",
      body: payload,
      auth: "otp",
    })
  );
