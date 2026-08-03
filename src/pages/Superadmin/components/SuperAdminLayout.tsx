import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AdminProfileMenu } from "./AdminProfileMenu";
import { NotificationBell } from "./NotificationBell";
import { ToastStack, type Toast } from "./Toast";
import type { AdminProfile, Notifications, Summary } from "../types";

export type NavKey = "overview" | "restaurants" | "bookings";

const NAV_ITEMS: { key: NavKey; label: string; icon: string; to: string }[] = [
  { key: "overview", label: "Overview", icon: "▦", to: "/super-admin-dashboard" },
  { key: "restaurants", label: "Restaurants", icon: "🍽", to: "/super-admin-dashboard/restaurants" },
  { key: "bookings", label: "Bookings", icon: "📅", to: "/super-admin-dashboard/bookings" },
];

const SidebarContent: React.FC<{
  summary: Summary;
  active: NavKey;
  onNavigate?: () => void;
}> = ({ summary, active, onNavigate }) => (
  <>
    <div className="flex items-center gap-2 px-6 py-6">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-400 font-serif text-lg text-primary-900">
        M
      </span>
      <div>
        <p className="font-serif text-lg leading-tight">Malabar Coast</p>
        <p className="text-[11px] uppercase tracking-widest text-primary-200">
          Super Admin
        </p>
      </div>
    </div>

    <nav className="mt-4 flex-1 space-y-1 px-3">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.key}
          to={item.to}
          onClick={onNavigate}
          className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm transition-colors ${
            active === item.key
              ? "bg-primary-600 font-semibold text-white"
              : "text-primary-100 hover:bg-primary-600/60"
          }`}
        >
          <span aria-hidden>{item.icon}</span>
          {item.label}
        </Link>
      ))}
    </nav>

    <div className="mx-3 mb-6 rounded-xl bg-primary-600/60 p-4 text-xs text-primary-100">
      <p className="font-semibold text-secondary-50">
        {summary.active_restaurants} restaurants live
      </p>
      <p className="mt-1">
        {summary.inactive_restaurants} awaiting reactivation
      </p>
    </div>
  </>
);

export const SuperAdminLayout: React.FC<{
  active: NavKey;
  title: string;
  subtitle?: string;
  summary: Summary;
  notifications: Notifications;
  admin: AdminProfile;
  onBellReview: (kind: "restaurant" | "booking") => void;
  onLogout: () => void;
  toasts: Toast[];
  children: React.ReactNode;
}> = ({
  active,
  title,
  subtitle,
  summary,
  notifications,
  admin,
  onBellReview,
  onLogout,
  toasts,
  children,
}) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  return (
    <div className="min-h-screen bg-secondary-100 font-sans text-gray-800">
      <div className="flex">
        {/* Desktop sidebar */}
        <aside className="sticky top-0 hidden h-screen w-64 flex-col bg-primary-700 text-secondary-50 lg:flex">
          <SidebarContent summary={summary} active={active} />
        </aside>

        {/* Mobile drawer sidebar */}
        {mobileNavOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileNavOpen(false)}
            />
            <aside className="absolute left-0 top-0 flex h-full w-72 max-w-[85vw] flex-col bg-primary-700 text-secondary-50 shadow-2xl">
              <button
                onClick={() => setMobileNavOpen(false)}
                className="absolute right-3 top-4 rounded-full p-1.5 text-primary-100 hover:bg-primary-600"
                aria-label="Close menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <SidebarContent summary={summary} active={active} onNavigate={() => setMobileNavOpen(false)} />
            </aside>
          </div>
        )}

        {/* Main content */}
        <div className="min-w-0 flex-1">
          {/* Topbar */}
          <header className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-gray-200 bg-secondary-50/90 px-4 py-4 backdrop-blur sm:px-6 lg:px-10">
            <div className="flex min-w-0 items-center gap-3">
              <button
                onClick={() => setMobileNavOpen(true)}
                className="shrink-0 rounded-lg p-2 text-primary-700 ring-1 ring-gray-200 hover:bg-white lg:hidden"
                aria-label="Open menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="min-w-0">
                <h1 className="truncate font-serif text-xl text-primary-700 sm:text-2xl">
                  {title}
                </h1>
                {subtitle && (
                  <p className="hidden text-sm text-gray-500 sm:block">{subtitle}</p>
                )}
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2 sm:gap-4">
              <NotificationBell notifications={notifications} onReview={onBellReview} />
              <AdminProfileMenu admin={admin} onLogout={onLogout} />
            </div>
          </header>

          <main className="space-y-6 p-4 sm:space-y-8 sm:p-6 lg:p-10">{children}</main>
        </div>
      </div>

      <ToastStack toasts={toasts} />
    </div>
  );
};
