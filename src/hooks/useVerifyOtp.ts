import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { setOtpToken } from "../api/tokens";
import { useApiMutation } from "./useApiMutation";
import type { VerifyOtpRequest, VerifyOtpResponseData } from "../types/booking";

export const useVerifyOtp = () =>
  useApiMutation(async (payload: VerifyOtpRequest) => {
    const result = await apiRequest<VerifyOtpResponseData>(ENDPOINTS.verifyOtp, {
      method: "POST",
      body: payload,
    });
    setOtpToken(result.token);
    return result;
  });
