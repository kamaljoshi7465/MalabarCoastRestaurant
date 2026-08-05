import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { useApiMutation } from "./useApiMutation";
import type { RestaurantAuthResponseData, RestaurantSignupRequest } from "../types/auth";

export const useRestaurantSignup = () =>
  useApiMutation(async (payload: RestaurantSignupRequest) => {
    const result = await apiRequest<RestaurantAuthResponseData>(ENDPOINTS.restaurantSignup, {
      method: "POST",
      body: payload,
    });
    // setAdminToken(result.access_token);
    // setAdminRefreshToken(result.refresh_token);
    return result;
  });
