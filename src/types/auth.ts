export type UserRole = "SUPER_ADMIN" | "RESTAURANT";

export interface RestaurantSignupRequest {
  role: "RESTAURANT";
  restaurant_name: string;
  owner_name: string;
  email: string;
  phone: string;
  password: string;
}

export interface SuperAdminSignupRequest {
  role: "SUPER_ADMIN";
  full_name: string;
  email: string;
  invite_code: string;
  password: string;
}

/* POST /auth/signup — no auth */
export type SignupRequest = RestaurantSignupRequest | SuperAdminSignupRequest;

export interface SignupResponseData {
  token: string;
  role: UserRole;
}

/* POST /auth/login — no auth */
export interface LoginRequest {
  role: UserRole;
  email: string;
  password: string;
}

export interface LoginResponseData {
  token: string;
  role: UserRole;
}
