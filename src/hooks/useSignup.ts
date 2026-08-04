import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { setAdminToken, setSuperAdminToken } from "../api/tokens";
import { useApiMutation } from "./useApiMutation";
import type { SignupRequest, SignupResponseData } from "../types/auth";

export const useSignup = () =>
  useApiMutation(async (payload: SignupRequest) => {
    const result = await apiRequest<SignupResponseData>(ENDPOINTS.signup, {
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
