import type { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { CONTACT_ITEMS } from "../../../data/footer/footer.data";
import { MOB_NAV_ITEMS } from "../../../data/navbar/navbar.data";
import logo2 from "../../../assets/icons/malabar-text-logo.avif";

interface NavbarMobileMenuProps {
  mobileOpen: boolean;
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
  pathname: string;
}

const NavbarMobileMenu = ({ mobileOpen, setMobileOpen, pathname }: NavbarMobileMenuProps) => {
  if (!mobileOpen) return null;

  const emailContact = CONTACT_ITEMS.find((item) => item.label === "Email");
  const phoneContact = CONTACT_ITEMS.find((item) => item.label === "Phone");

  return (
    <div className="fixed inset-0 z-50 bg-black/80">
      <div className="absolute top-0 right-0 flex h-screen w-3/4 flex-col bg-white shadow-2xl">

        {/* Header */}
        <div className="flex flex-shrink-0 items-center justify-between border-b border-primary-600/20 p-6">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <img src={logo2} alt="Malabar Coast Restaurant" className="h-8 w-auto" />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-primary-600/10 text-primary-600/80 hover:text-primary-600"
            aria-label="Close menu"
          >
            <span className="text-2xl">✕</span>
          </button>
        </div>

        {/* Nav links — scrollable */}
        <div className="relative min-h-0 flex-1 overflow-hidden max-h-[40vh]">
          <div className="absolute inset-y-0 right-2 w-1 rounded-full overflow-hidden bg-primary-600/20">
            <div className="w-full bg-gradient-to-b from-primary-600 to-primary-600 rounded-full" />
          </div>
          <div className="h-full overflow-y-auto overflow-x-hidden px-4 py-2 pr-6">
            <div className="space-y-0">
              {MOB_NAV_ITEMS.map(({ label, href }, index) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href + label}
                    to={href}
                    onClick={() => setMobileOpen(false)}
                    className="group block relative overflow-hidden"
                    style={{ animation: `slideIn .4s ease-out ${index * 0.05}s both` }}
                  >
                    <div
                      className={`relative rounded-xl px-5 py-2 text-lg font-display font-normal transition-all duration-300 hover:bg-primary-600/10 hover:pl-7 ${
                        isActive
                          ? "bg-primary-600/5 pl-7 font-semibold text-primary-600"
                          : "text-primary-600/90 hover:text-primary-600"
                      }`}
                    >
                      <span className="relative z-10">{label}</span>
                      <div
                        className={`absolute inset-0 rounded-xl bg-primary-600/5 origin-left transition-transform duration-300 ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                      <span
                        className={`absolute right-5 top-1/2 -translate-y-1/2 text-primary-600 transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
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
        </div>

        {/* Contact */}
        <div className="flex-shrink-0 border-t border-primary-600/20 px-6 py-2">
          <div className="space-y-2">
            <a
              href={phoneContact?.href ?? "tel:"}
              className="group flex items-center space-x-3 rounded-xl px-4 py-2 transition-all duration-300 hover:bg-primary-600/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 shadow-md">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs text-primary-600/60">Call Us</p>
                <p className="text-sm font-semibold text-primary-600 transition-colors group-hover:text-primary-700">
                  {phoneContact?.value ?? "Phone unavailable"}
                </p>
              </div>
            </a>

            <a
              href={emailContact?.href ?? "mailto:"}
              className="group flex items-center space-x-3 rounded-xl px-4 py-2 transition-all duration-300 hover:bg-primary-600/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 shadow-md">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs text-primary-600/60">Email Us</p>
                <p className="text-sm font-semibold text-primary-600 transition-colors group-hover:text-primary-700">
                  {emailContact?.value ?? "Email unavailable"}
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex-shrink-0 space-y-2 border-t border-primary-600/20 px-4 pb-4 pt-4">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Malabar+Coast+Restaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center space-x-2 rounded-xl px-4 py-2 font-display text-primary-600/90 transition-all duration-300 hover:bg-primary-600/5 hover:text-primary-600"
          >
            <span className="text-xl transition-transform group-hover:scale-110">📍</span>
            <span>Find Nearest Outlet</span>
          </a>

          <Link
            to="/reservations"
            onClick={() => setMobileOpen(false)}
            className="block w-full rounded-2xl bg-primary-600 px-6 py-4 text-center font-display text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary-700 hover:shadow-xl"
          >
            Book a Table
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobileMenu;
