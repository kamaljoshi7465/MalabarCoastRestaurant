import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Loader2, User, KeyRound } from "lucide-react";
import AuthShell from "./components/AuthShell";
import AuthField from "./components/AuthField";
import { useToasts } from "../../components/admin/Toast";

interface FormState {
  fullName: string;
  email: string;
  inviteCode: string;
  password: string;
  confirmPassword: string;
}

const INITIAL_FORM: FormState = {
  fullName: "",
  email: "",
  inviteCode: "",
  password: "",
  confirmPassword: "",
};

const SuperAdminSignup: React.FC = () => {
  const navigate = useNavigate();
  const { toasts, push } = useToasts();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const next: typeof errors = {};
    if (form.fullName.trim().length < 2) next.fullName = "Enter your full name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address";
    if (form.inviteCode.trim().length < 4) next.inviteCode = "Enter the admin invite code";
    if (form.password.length < 6) next.password = "Password must be at least 6 characters";
    if (form.confirmPassword !== form.password) next.confirmPassword = "Passwords do not match";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      push("Administrator account created", "success");
      navigate("/super-admin-dashboard");
    }, 700);
  };

  return (
    <AuthShell
      eyebrow="Super Admin Portal"
      heading="Bring on your next administrator."
      tagline="Admin access is invite-only — you'll need a valid invite code from an existing super admin to continue."
      bullets={[
        "Invite-only, code-gated access",
        "Full network oversight from day one",
        "Audit-friendly account provisioning",
      ]}
      title="Create an administrator account"
      subtitle="You'll need an admin invite code to continue."
      toasts={toasts}
      footer={
        <>
          Already have an account?{" "}
          <Link to="/super-admin-login" className="font-semibold text-primary-600 hover:text-primary-700">
            Sign in
          </Link>
        </>
      }
    >
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <AuthField
          label="Full name"
          name="fullName"
          placeholder="Full name"
          icon={<User className="size-4.5" />}
          value={form.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />
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
          label="Admin invite code"
          name="inviteCode"
          placeholder="Enter the code you were given"
          icon={<KeyRound className="size-4.5" />}
          value={form.inviteCode}
          onChange={handleChange}
          error={errors.inviteCode}
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <AuthField
            label="Password"
            name="password"
            type="password"
            placeholder="Create a password"
            icon={<Lock className="size-4.5" />}
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            autoComplete="new-password"
          />
          <AuthField
            label="Confirm password"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter password"
            icon={<Lock className="size-4.5" />}
            value={form.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            autoComplete="new-password"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting && <Loader2 className="size-4 animate-spin" />}
          {submitting ? "Creating account..." : "Create Admin Account"}
        </button>
      </form>
    </AuthShell>
  );
};

export default SuperAdminSignup;
