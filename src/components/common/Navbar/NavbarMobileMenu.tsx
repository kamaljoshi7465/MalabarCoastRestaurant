import type { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { CONTACT_ITEMS } from "../../../data/footer/footer.data";
import { MOB_NAV_ITEMS } from "../../../data/navbar/navbar.data";
import logo2 from "../../../assets/icons/anardana-text-logo.avif";
import NavbarBrand from "./NavbarBrand";

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
        <div className="flex flex-shrink-0 items-center justify-between border-b border-black/10 p-6">
          <NavbarBrand
            imageSrc={logo2}
            alt="Anardana Restaurant"
            className="h-8 w-auto"
            linkClassName="flex items-center"
          />

          <button
            onClick={() => setMobileOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#4c0e25]/10"
          >
            <span className="text-2xl">✕</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3">
          <div className="space-y-1">
            {MOB_NAV_ITEMS.map(({ label, href }, index) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  to={href}
                  onClick={() => setMobileOpen(false)}
                  className="group block"
                  style={{
                    animation: `slideIn .4s ease-out ${index * 0.05}s both`,
                  }}
                >
                  <div
                    className={`relative overflow-hidden rounded-xl px-5 py-3 text-lg transition-all duration-300 ${
                      isActive
                        ? "bg-[#4c0e25]/10 pl-7 font-semibold text-[#4c0e25]"
                        : "text-black/80 hover:bg-[#4c0e25]/10 hover:pl-7 hover:text-[#4c0e25]"
                    }`}
                  >
                    <span className="relative z-10">{label}</span>

                    <div
                      className={`absolute inset-0 rounded-xl bg-[#4c0e25]/5 origin-left transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />

                    <span
                      className={`absolute right-5 top-1/2 -translate-y-1/2 transition-all duration-300 ${
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

        <div className="flex-shrink-0 border-t border-black/10 px-6 py-4">
          <a
            href={phoneContact?.href ?? "tel:"}
            className="group mb-3 flex items-center gap-3 rounded-xl p-3 transition hover:bg-[#4c0e25]/5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4c0e25] text-white">
              📞
            </div>

            <div>
              <p className="text-xs text-gray-500">Call Us</p>
              <p className="font-semibold group-hover:text-[#4c0e25]">
                {phoneContact?.value ?? "Phone unavailable"}
              </p>
            </div>
          </a>

          <a
            href={emailContact?.href ?? "mailto:"}
            className="group flex items-center gap-3 rounded-xl p-3 transition hover:bg-[#4c0e25]/5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4c0e25] text-white">
              ✉️
            </div>

            <div>
              <p className="text-xs text-gray-500">Email Us</p>
              <p className="font-semibold group-hover:text-[#4c0e25]">
                {emailContact?.value ?? "Email unavailable"}
              </p>
            </div>
          </a>
        </div>

        <div className="flex-shrink-0 space-y-3 border-t border-black/10 px-6 py-5">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Anardana+Restaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl py-3 transition hover:bg-[#4c0e25]/5"
          >
            <span className="text-xl">📍</span>
            <span>Find Nearest Outlet</span>
          </a>

          <Link
            to="/reservations"
            onClick={() => setMobileOpen(false)}
            className="block rounded-2xl bg-[#4c0e25] px-6 py-4 text-center text-white transition hover:scale-[1.02] hover:bg-[#5f1230]"
          >
            Book a Table
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobileMenu;
