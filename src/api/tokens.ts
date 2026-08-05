const OTP_TOKEN_KEY = "malabar_otp_token";
const ADMIN_TOKEN_KEY = "malabar_admin_token";
const ADMIN_REFRESH_TOKEN_KEY = "malabar_admin_refresh_token";
const SUPER_ADMIN_TOKEN_KEY = "malabar_super_admin_token";
const SUPER_ADMIN_REFRESH_TOKEN_KEY = "malabar_super_admin_refresh_token";

const read = (key: string): string | null => localStorage.getItem(key);
const write = (key: string, token: string): void => localStorage.setItem(key, token);
const clear = (key: string): void => localStorage.removeItem(key);

export const getOtpToken = (): string | null => read(OTP_TOKEN_KEY);
export const setOtpToken = (token: string): void => write(OTP_TOKEN_KEY, token);
export const clearOtpToken = (): void => clear(OTP_TOKEN_KEY);

export const getAdminToken = (): string | null => read(ADMIN_TOKEN_KEY);
export const setAdminToken = (token: string): void => write(ADMIN_TOKEN_KEY, token);
export const getAdminRefreshToken = (): string | null => read(ADMIN_REFRESH_TOKEN_KEY);
export const setAdminRefreshToken = (token: string): void => write(ADMIN_REFRESH_TOKEN_KEY, token);
export const clearAdminToken = (): void => {
  clear(ADMIN_TOKEN_KEY);
  clear(ADMIN_REFRESH_TOKEN_KEY);
};

export const getSuperAdminToken = (): string | null => read(SUPER_ADMIN_TOKEN_KEY);
export const setSuperAdminToken = (token: string): void => write(SUPER_ADMIN_TOKEN_KEY, token);
export const getSuperAdminRefreshToken = (): string | null => read(SUPER_ADMIN_REFRESH_TOKEN_KEY);
export const setSuperAdminRefreshToken = (token: string): void => write(SUPER_ADMIN_REFRESH_TOKEN_KEY, token);
export const clearSuperAdminToken = (): void => {
  clear(SUPER_ADMIN_TOKEN_KEY);
  clear(SUPER_ADMIN_REFRESH_TOKEN_KEY);
};
