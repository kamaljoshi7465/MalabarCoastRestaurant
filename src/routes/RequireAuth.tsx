import { Navigate, Outlet } from "react-router-dom";
import { getAdminToken, getSuperAdminToken } from "../api/tokens";

export const RequireRestaurantAuth = () => (getAdminToken() ? <Outlet /> : <Navigate to="/restaurant-login" replace />);

export const RequireSuperAdminAuth = () => (getSuperAdminToken() ? <Outlet /> : <Navigate to="/super-admin-login" replace />);
