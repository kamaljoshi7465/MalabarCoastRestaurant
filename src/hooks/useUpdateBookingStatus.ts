import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { useApiMutation } from "./useApiMutation";
import type { BookingStatusUpdateRequest, RestaurantDashboardBooking } from "../pages/RestaurantAdmin/types";

export const useUpdateBookingStatus = () =>
  useApiMutation((payload: BookingStatusUpdateRequest) =>
    apiRequest<RestaurantDashboardBooking>(ENDPOINTS.bookingStatus, {
      method: "POST",
      body: payload,
      auth: "super-admin",
    })
  );
