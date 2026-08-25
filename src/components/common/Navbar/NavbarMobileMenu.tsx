import type { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

import { MOB_NAV_ITEMS } from "../../../data/navbar/navbar.data";
import logo2 from "../../../assets/icons/malabar-text-logo.png";
import {
  OUTLETS,
  HEADQUARTERS,
} from "../../../data/home/restaurant/RestaurantsSection.data";

interface NavbarMobileMenuProps {
  mobileOpen: boolean;
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
  pathname: string;
}

const NavbarMobileMenu = ({
  mobileOpen,
  setMobileOpen,
  pathname,
}: NavbarMobileMenuProps) => {
  if (!mobileOpen) return null;

  const phone =
    HEADQUARTERS.phone !== "" ? HEADQUARTERS.phone : OUTLETS[0].phone;

  const email =
    HEADQUARTERS.email !== "" ? HEADQUARTERS.email : OUTLETS[0].email;

  return (
    <div className="fixed inset-0 z-50 bg-black/80">
      <div className="absolute top-0 right-0 flex h-dvh w-[88%] max-w-md flex-col bg-white shadow-2xl sm:w-3/4">
        <div className="flex flex-shrink-0 items-center justify-between border-b border-primary-600/20 px-4 py-4 sm:px-6 sm:py-5">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex min-w-0 items-center"
          >
            <img
              src={logo2}
              alt="Malabar Coast Restaurant"
              className="h-11 w-auto max-w-[180px] object-contain sm:h-14 sm:max-w-[220px]"
            />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="ml-3 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-primary-600/80 transition-colors hover:bg-primary-600/10 hover:text-primary-600 sm:h-10 sm:w-10"
            aria-label="Close menu"
          >
            <span className="text-xl sm:text-2xl">✕</span>
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-3 py-3 sm:px-4 sm:py-4">
          <div className="space-y-1">
            {MOB_NAV_ITEMS.map(({ label, href }, index) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href + label}
                  to={href}
                  onClick={() => setMobileOpen(false)}
                  className="group relative block overflow-hidden"
                  style={{
                    animation: `slideIn .4s ease-out ${
                      index * 0.05
                    }s both`,
                  }}
                >
                  <div
                    className={`relative rounded-xl px-4 py-3 text-base font-display font-normal transition-all duration-300 sm:px-5 sm:py-3 sm:text-lg ${
                      isActive
                        ? "bg-primary-600/5 pl-6 font-semibold text-primary-600"
                        : "text-primary-600/90 hover:bg-primary-600/10 hover:pl-6 hover:text-primary-600"
                    }`}
                  >
                    <span className="relative z-10 pr-8">{label}</span>

                    <div
                      className={`absolute inset-0 origin-left rounded-xl bg-primary-600/5 transition-transform duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />

                    <span
                      className={`absolute right-4 top-1/2 -translate-y-1/2 text-primary-600 transition-opacity duration-300 ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex-shrink-0 border-t border-primary-600/20 px-3 py-2 sm:px-5 sm:py-3">
          <div className="space-y-1.5 sm:space-y-2">
            <a
              href={`tel:${phone}`}
              className="group flex min-w-0 items-center gap-3 rounded-xl px-3 py-2 transition-all duration-300 hover:bg-primary-600/5 sm:px-4 sm:py-2.5"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 shadow-md sm:h-10 sm:w-10">
                <svg
                  className="h-4 w-4 text-white sm:h-5 sm:w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[11px] text-primary-600/60 sm:text-xs">
                  Call Us
                </p>
                <p className="truncate text-sm font-semibold text-primary-600 transition-colors group-hover:text-primary-700 sm:text-sm">
                  {phone}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${email}`}
              className="group flex min-w-0 items-center gap-3 rounded-xl px-3 py-2 transition-all duration-300 hover:bg-primary-600/5 sm:px-4 sm:py-2.5"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 shadow-md sm:h-10 sm:w-10">
                <svg
                  className="h-4 w-4 text-white sm:h-5 sm:w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[11px] text-primary-600/60 sm:text-xs">
                  Email Us
                </p>
                <p
                  title={email}
                  className="truncate text-xs font-semibold text-primary-600 transition-colors group-hover:text-primary-700 sm:text-sm"
                >
                  {email}
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 space-y-2 border-t border-primary-600/20 px-3 pb-3 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Malabar+Coast+Restaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 font-display text-sm text-primary-600/90 transition-all duration-300 hover:bg-primary-600/5 hover:text-primary-600 sm:px-4 sm:py-3 sm:text-base"
          >
            <span className="text-lg transition-transform group-hover:scale-110 sm:text-xl">
              📍
            </span>
            <span>Find Nearest Outlet</span>
          </a>

          <Link
            to="/reservations"
            onClick={() => setMobileOpen(false)}
            className="block w-full rounded-2xl bg-primary-600 px-5 py-3 text-center font-display text-sm text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-primary-700 hover:shadow-xl sm:px-6 sm:py-4 sm:text-base"
          >
            Book a Table
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobileMenu;