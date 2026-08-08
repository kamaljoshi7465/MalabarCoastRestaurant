import React, { useState } from "react";
import type { AdminProfile } from "../../../pages/Superadmin/types";
import { useClickOutside } from "../../../hooks/useClickOutside";

export const AdminProfileMenu: React.FC<{
  admin: AdminProfile;
  onLogout: () => void;
}> = ({ admin, onLogout }) => {
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));
  const initial = admin.name.charAt(0);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-2 shadow-sm ring-1 ring-gray-200 transition-colors hover:bg-secondary-50 sm:gap-2.5 sm:pr-4 cursor-pointer"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-300 font-serif text-primary-900">
          {initial}
        </span>
        <span className="hidden text-sm font-medium text-gray-700 sm:inline">
          {admin.name.split(" ")[0]}
        </span>
        <svg
          className={`hidden h-4 w-4 text-gray-400 transition-transform sm:block ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-20 mt-2 w-[calc(100vw-2rem)] max-w-xs overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-gray-200 sm:w-72 sm:max-w-none">
          <div className="flex items-center gap-3 bg-primary-600 px-4 py-4 text-white">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-300 font-serif text-lg text-primary-900">
              {initial}
            </span>
            <div className="min-w-0">
              <p className="truncate font-serif text-base">{admin.name}</p>
              <p className="truncate text-xs text-primary-100">{admin.role}</p>
            </div>
          </div>

          <div className="space-y-3 px-4 py-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="truncate">{admin.email}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{admin.phone || "Not provided"}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Admin since {admin.joined}</span>
            </div>
          </div>

          <div className="space-y-1 border-t border-gray-100 px-2 py-2">
            <button
              onClick={onLogout}
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-error hover:bg-red-50 cursor-pointer"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
