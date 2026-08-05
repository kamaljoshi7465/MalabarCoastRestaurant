import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { setSuperAdminRefreshToken, setSuperAdminToken } from "../api/tokens";
import { useApiMutation } from "./useApiMutation";
import type { SuperAdminAuthResponseData, SuperAdminLoginRequest } from "../types/auth";

export const useSuperAdminLogin = () =>
  useApiMutation(async (payload: SuperAdminLoginRequest) => {
    const result = await apiRequest<SuperAdminAuthResponseData>(ENDPOINTS.superAdminLogin, {
      method: "POST",
      body: payload,
    });
    setSuperAdminToken(result.access_token);
    setSuperAdminRefreshToken(result.refresh_token);
    return result;
  });
