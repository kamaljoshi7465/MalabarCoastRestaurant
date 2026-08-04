import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { useApiMutation } from "./useApiMutation";
import type { Booking, CreateBookingRequest } from "../types/booking";

export const useCreateBooking = () =>
  useApiMutation((payload: CreateBookingRequest) =>
    apiRequest<Booking>(ENDPOINTS.createBooking, { method: "POST", body: payload })
  );
