import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import logo from "../../../assets/icons/malabar-coast-logo.png";
import { ToastStack, type Toast } from "../../../components/admin/Toast";

interface AuthShellProps {
  eyebrow: string;
  heading: string;
  tagline: string;
  bullets: string[];
  title: string;
  subtitle: string;
  toasts: Toast[];
  children: React.ReactNode;
  footer: React.ReactNode;
}

const AuthShell: React.FC<AuthShellProps> = ({
  eyebrow,
  heading,
  tagline,
  bullets,
  title,
  subtitle,
  toasts,
  children,
  footer,
}) => (
  <div className="flex min-h-screen bg-secondary-100 font-sans text-gray-800">
    {/* Brand panel */}
    <aside className="relative hidden w-[42%] flex-col justify-between overflow-hidden bg-primary-700 px-12 py-12 text-secondary-50 lg:flex">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-600/40" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-accent-400/10" />

      <Link to="/" className="relative flex items-center gap-3">
        <img src={logo} alt="Malabar Coast Restaurant" className="h-12 w-auto" />
      </Link>

      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-white">{heading}</h1>
        <p className="mt-4 max-w-sm text-sm text-primary-100">{tagline}</p>

        <ul className="mt-8 space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-primary-50">
              <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-accent-300" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <p className="relative text-xs text-primary-200">
        &copy; {new Date().getFullYear()} Malabar Coast Restaurant. All rights reserved.
      </p>
    </aside>

    {/* Form panel */}
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-10 sm:px-6">
      <Link to="/" className="mb-8 flex items-center gap-3 lg:hidden">
        <img src={logo} alt="Malabar Coast Restaurant" className="h-11 w-auto" />
      </Link>

      <div className="w-full max-w-3xl rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
        <h2 className="font-serif text-2xl text-primary-700">{title}</h2>
        <p className="mt-1.5 text-sm text-gray-500">{subtitle}</p>

        <div className="mt-6">{children}</div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">{footer}</div>
    </main>

    <ToastStack toasts={toasts} />
  </div>
);

export default AuthShell;
