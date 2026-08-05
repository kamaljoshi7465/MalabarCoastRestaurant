import { useCallback } from "react";
import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { useApiQuery } from "./useApiQuery";
import type { RestaurantDashboardOverview } from "../pages/RestaurantAdmin/types";

export const useRestaurantDashboard = () => {
  const fetcher = useCallback(
    () => apiRequest<RestaurantDashboardOverview>(ENDPOINTS.restaurantDashboard, { auth: "admin" }),
    []
  );
  return useApiQuery(fetcher);
};
