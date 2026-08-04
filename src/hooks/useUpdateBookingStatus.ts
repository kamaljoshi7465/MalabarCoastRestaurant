import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { useApiMutation } from "./useApiMutation";
import type { AnyBooking, BookingStatusUpdateRequest } from "../pages/RestaurantAdmin/types";

export const useUpdateBookingStatus = () =>
  useApiMutation((payload: BookingStatusUpdateRequest) =>
    apiRequest<AnyBooking>(ENDPOINTS.bookingStatus, {
      method: "POST",
      body: payload,
      auth: "admin",
    })
  );
