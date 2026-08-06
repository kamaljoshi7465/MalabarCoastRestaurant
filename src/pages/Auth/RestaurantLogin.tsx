import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Mail, Lock, Loader2, ShieldCheck } from "lucide-react";
import AuthShell from "./components/AuthShell";
import AuthField from "./components/AuthField";
import { useToasts } from "../../components/admin/Toast";
import { useRestaurantLogin } from "../../hooks/useRestaurantLogin";
import { getAdminToken } from "../../api/tokens";

const RestaurantLogin: React.FC = () => {
  const navigate = useNavigate();
  const { toasts, push } = useToasts();
  const { mutate: login, loading: submitting } = useRestaurantLogin();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  if (getAdminToken()) return <Navigate to="/restaurant-dashboard" replace />;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const next: typeof errors = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address";
    if (form.password.length < 6) next.password = "Password must be at least 6 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await login({ email: form.email, password: form.password });
      push("Signed in successfully", "success");
      navigate("/restaurant-dashboard");
    } catch (err) {
      push(err instanceof Error ? err.message : "Something went wrong. Please try again.", "error");
    }
  };

  return (
    <AuthShell
      eyebrow="Restaurant Partner Portal"
      heading="Run your outlet without the guesswork."
      tagline="Manage bookings, track today's covers, and keep every outlet in sync from one dashboard."
      bullets={[
        "Real-time booking approvals & status tracking",
        "Daily availability at a glance",
        "Weekly performance insights",
      ]}
      title="Welcome back"
      subtitle="Sign in to manage your restaurant's bookings."
      toasts={toasts}
      footer={
        <>
          {/* New restaurant partner?{" "}
          <Link to="/restaurant-signup" className="font-semibold text-primary-600 hover:text-primary-700">
            Create an account
          </Link> */}
        </>
      }
    >
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <AuthField
          label="Email address"
          name="email"
          type="email"
          placeholder="you@restaurant.com"
          icon={<Mail className="size-4.5" />}
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
        />
        <AuthField
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          icon={<Lock className="size-4.5" />}
          value={form.password}
          onChange={handleChange}
          error={errors.password}
          autoComplete="current-password"
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" className="size-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
            Remember me
          </label>
          {/* <button type="button" className="font-medium text-primary-600 hover:text-primary-700">
            Forgot password?
          </button> */}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
        >
          {submitting && <Loader2 className="size-4 animate-spin" />}
          {submitting ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <div className="mt-6 flex items-start gap-2 rounded-xl bg-secondary-100 px-4 py-3 text-xs text-gray-500">
        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary-500" />
        <span>
          Are you a Malabar Coast super admin?{" "}
          <Link to="/super-admin-login" className="font-semibold text-primary-600 hover:text-primary-700">
            Sign in here
          </Link>
        </span>
      </div>
    </AuthShell>
  );
};

export default RestaurantLogin;
