import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Loader2, UtensilsCrossed } from "lucide-react";
import AuthShell from "./components/AuthShell";
import AuthField from "./components/AuthField";
import { useToasts } from "../../components/admin/Toast";

const SuperAdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const { toasts, push } = useToasts();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [submitting, setSubmitting] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      push("Signed in successfully", "success");
      navigate("/super-admin-dashboard");
    }, 700);
  };

  return (
    <AuthShell
      eyebrow="Super Admin Portal"
      heading="Oversee every Malabar Coast outlet."
      tagline="Monitor bookings, manage restaurant partners, and keep the whole network running smoothly."
      bullets={[
        "Network-wide booking & performance overview",
        "Approve and manage restaurant partners",
        "Full visibility across every outlet",
      ]}
      title="Super admin sign in"
      subtitle="Sign in with your administrator credentials."
      toasts={toasts}
      footer={
        <>
          Need an administrator account?{" "}
          <Link to="/super-admin-signup" className="font-semibold text-primary-600 hover:text-primary-700">
            Request access
          </Link>
        </>
      }
    >
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <AuthField
          label="Email address"
          name="email"
          type="email"
          placeholder="admin@malabarcoast.com"
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
          <button type="button" className="font-medium text-primary-600 hover:text-primary-700">
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting && <Loader2 className="size-4 animate-spin" />}
          {submitting ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <div className="mt-6 flex items-start gap-2 rounded-xl bg-secondary-100 px-4 py-3 text-xs text-gray-500">
        <UtensilsCrossed className="mt-0.5 size-4 shrink-0 text-primary-500" />
        <span>
          Are you a restaurant partner?{" "}
          <Link to="/restaurant-login" className="font-semibold text-primary-600 hover:text-primary-700">
            Sign in here
          </Link>
        </span>
      </div>
    </AuthShell>
  );
};

export default SuperAdminLogin;
