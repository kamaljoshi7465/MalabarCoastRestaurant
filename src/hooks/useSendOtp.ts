import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { useApiMutation } from "./useApiMutation";
import type { SendOtpRequest, SendOtpResponseData } from "../types/booking";

export const useSendOtp = () =>
  useApiMutation((payload: SendOtpRequest) =>
    apiRequest<SendOtpResponseData>(ENDPOINTS.sendOtp, { method: "POST", body: payload })
  );
