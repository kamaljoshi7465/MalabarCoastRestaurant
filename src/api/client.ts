import type { ApiResponse } from "../types/api";
import { getAdminToken, getOtpToken, getSuperAdminToken } from "./tokens";

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export type AuthScope = "otp" | "admin" | "super-admin";

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

const resolveToken = (scope?: AuthScope): string | null => {
  switch (scope) {
    case "otp":
      return getOtpToken();
    case "admin":
      return getAdminToken();
    case "super-admin":
      return getSuperAdminToken();
    default:
      return null;
  }
};

interface RequestOptions {
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  body?: unknown;
  auth?: AuthScope;
}

export async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { method = "GET", body, auth } = options;

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const token = resolveToken(auth);
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  const payload = (await response.json().catch(() => null)) as ApiResponse<T> | null;

  if (!response.ok || !payload || !payload.success) {
    throw new ApiError(payload?.message ?? `Request failed with status ${response.status}`, response.status);
  }

  return payload.data;
}
