import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { setAdminRefreshToken, setAdminToken } from "../api/tokens";
import { useApiMutation } from "./useApiMutation";
import type { RestaurantAuthResponseData, RestaurantLoginRequest } from "../types/auth";

export const useRestaurantLogin = () =>
  useApiMutation(async (payload: RestaurantLoginRequest) => {
    const result = await apiRequest<RestaurantAuthResponseData>(ENDPOINTS.restaurantLogin, {
      method: "POST",
      body: payload,
    });
    setAdminToken(result.access_token);
    setAdminRefreshToken(result.refresh_token);
    return result;
  });
