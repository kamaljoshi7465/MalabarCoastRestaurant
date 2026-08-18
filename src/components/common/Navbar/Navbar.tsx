import { useState } from "react";
import { useLocation } from "react-router-dom";
import NavbarBrand from "./NavbarBrand";
import NavbarLinks from "./NavbarLinks";
import NavbarMobileMenu from "./NavbarMobileMenu";
import logo from "../../../assets/icons/malabar-coast-logo.png";

const Navbar = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4">
      <div
        className=" mx-auto mt-4 max-w-7xl rounded-2xl border border-white/10 bg-black/40 backdrop-blur-3xl supports-[backdrop-filter]:bg-black/35 shadow-2xl shadow-black/50 transition-all duration-500 "
      >
        {!mobileOpen && (
          <div className="flex h-16 items-center justify-between px-4">
            <NavbarBrand imageSrc={logo} />
            <NavbarLinks pathname={pathname} />

            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="p-2 text-white transition-colors duration-300 hover:text-white/70 lg:hidden"
              aria-label="Toggle menu"
            >
              <span className="text-2xl">{mobileOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        )}
      </div>

      <NavbarMobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} pathname={pathname} />
    </nav>
  );
};

export default Navbar;