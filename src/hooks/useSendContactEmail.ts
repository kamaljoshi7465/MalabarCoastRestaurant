import { apiRequest } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";
import { useApiMutation } from "./useApiMutation";

export interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const useSendContactEmail = () =>
  useApiMutation((payload: ContactEmailRequest) =>
    apiRequest(ENDPOINTS.contactSendEmail, {
      method: "POST",
      body: payload,
    })
  );