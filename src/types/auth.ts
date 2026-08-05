export type UserRole = "SUPER_ADMIN" | "RESTAURANT";

/* POST /restaurant/signup — no auth */
export interface RestaurantSignupRequest {
  restaurant_name: string;
  owner_name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
}

/* POST /restaurant/login — no auth */
export interface RestaurantLoginRequest {
  email: string;
  password: string;
}

export interface RestaurantAccount {
  id: number;
  name: string;
  role: string;
}

/* Response shape for POST /restaurant/signup and POST /restaurant/login */
export interface RestaurantAuthResponseData {
  access_token: string;
  refresh_token: string;
  restaurant: RestaurantAccount;
}

/* POST /superadmin/login — no auth */
export interface SuperAdminLoginRequest {
  email: string;
  password: string;
}

export interface SuperAdminAccount {
  id: number;
  name: string;
  role: string;
}

/* Response shape for POST /superadmin/login — assumed to mirror the restaurant auth
   response (access_token/refresh_token + account object); unconfirmed against a live
   success response since the provided super admin credentials returned "Invalid email
   or password." Verify the "admin" key name once a valid login succeeds. */
export interface SuperAdminAuthResponseData {
  access_token: string;
  refresh_token: string;
  admin: SuperAdminAccount;
}

export interface SuperAdminSignupRequest {
  role: "SUPER_ADMIN";
  full_name: string;
  email: string;
  invite_code: string;
  password: string;
}
