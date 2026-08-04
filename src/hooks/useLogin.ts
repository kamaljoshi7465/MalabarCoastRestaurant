import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { setAdminToken, setSuperAdminToken } from "../api/tokens";
import { useApiMutation } from "./useApiMutation";
import type { LoginRequest, LoginResponseData } from "../types/auth";

export const useLogin = () =>
  useApiMutation(async (payload: LoginRequest) => {
    const result = await apiRequest<LoginResponseData>(ENDPOINTS.login, {
      method: "POST",
      body: payload,
    });
    if (result.role === "SUPER_ADMIN") {
      setSuperAdminToken(result.token);
    } else {
      setAdminToken(result.token);
    }
    return result;
  });
