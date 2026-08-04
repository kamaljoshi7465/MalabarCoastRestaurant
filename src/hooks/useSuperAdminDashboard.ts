import { useCallback } from "react";
import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { useApiQuery } from "./useApiQuery";
import type { DashboardData } from "../pages/Superadmin/types";

export const useSuperAdminDashboard = () => {
  const fetcher = useCallback(
    () => apiRequest<DashboardData>(ENDPOINTS.superAdminDashboard, { auth: "super-admin" }),
    []
  );
  return useApiQuery(fetcher);
};
