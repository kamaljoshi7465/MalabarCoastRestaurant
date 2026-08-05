import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Loader2, User, Phone, UtensilsCrossed } from "lucide-react";
import AuthShell from "./components/AuthShell";
import AuthField from "./components/AuthField";
import { useToasts } from "../../components/admin/Toast";
import { useRestaurantSignup } from "../../hooks/useRestaurantSignup";

interface FormState {
  restaurantName: string;
  ownerName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const INITIAL_FORM: FormState = {
  restaurantName: "",
  ownerName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const RestaurantSignup: React.FC = () => {
  const navigate = useNavigate();
  const { toasts, push } = useToasts();
  const { mutate: signup, loading: submitting } = useRestaurantSignup();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const next: typeof errors = {};
    if (form.restaurantName.trim().length < 2) next.restaurantName = "Enter your restaurant's name";
    if (form.ownerName.trim().length < 2) next.ownerName = "Enter the owner/manager's name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address";
    if (!/^[\d+][\d\s-]{7,}$/.test(form.phone)) next.phone = "Enter a valid phone number";
    if (form.password.length < 6) next.password = "Password must be at least 6 characters";
    if (form.confirmPassword !== form.password) next.confirmPassword = "Passwords do not match";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (!agreed) {
      push("Please accept the Terms & Privacy Policy to continue", "error");
      return;
    }

    try {
      await signup({
        restaurant_name: form.restaurantName,
        owner_name: form.ownerName,
        email: form.email,
        phone: form.phone,
        password: form.password,
        confirm_password: form.confirmPassword,
      });
      push("Account created — welcome to Malabar Coast", "success");
      navigate("/restaurant-login");
    } catch (err) {
      push(err instanceof Error ? err.message : "Something went wrong. Please try again.", "error");
    }
  };

  return (
    <AuthShell
      eyebrow="Restaurant Partner Portal"
      heading="Bring your restaurant onto Malabar Coast."
      tagline="Join our network of outlets and start accepting bookings within minutes of signing up."
      bullets={[
        "Free onboarding, no setup fees",
        "Centralized booking management",
        "Support from our partner success team",
      ]}
      title="Create your restaurant account"
      subtitle="Tell us about your outlet to get started."
      toasts={toasts}
      footer={
        <>
          Already have an account?{" "}
          <Link to="/restaurant-login" className="font-semibold text-primary-600 hover:text-primary-700">
            Sign in
          </Link>
        </>
      }
    >
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <AuthField
          label="Restaurant name"
          name="restaurantName"
          placeholder="e.g. Malabar Coast — Kochi"
          icon={<UtensilsCrossed className="size-4.5" />}
          value={form.restaurantName}
          onChange={handleChange}
          error={errors.restaurantName}
        />
        <AuthField
          label="Owner / manager name"
          name="ownerName"
          placeholder="Full name"
          icon={<User className="size-4.5" />}
          value={form.ownerName}
          onChange={handleChange}
          error={errors.ownerName}
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
            label="Phone number"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            icon={<Phone className="size-4.5" />}
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
            autoComplete="tel"
          />
        </div>
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

        <label className="flex items-start gap-2.5 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 size-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          />
          <span>
            I agree to the{" "}
            <Link to="/terms" className="font-medium text-primary-600 hover:text-primary-700">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="font-medium text-primary-600 hover:text-primary-700">
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
        >
          {submitting && <Loader2 className="size-4 animate-spin" />}
          {submitting ? "Creating account..." : "Create Account"}
        </button>
      </form>
    </AuthShell>
  );
};

export default RestaurantSignup;
