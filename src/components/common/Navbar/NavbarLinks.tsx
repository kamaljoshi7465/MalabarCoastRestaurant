import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../../data/navbar/navbar.data";

interface NavbarLinksProps {
  pathname: string;
}

const NavbarLinks = ({ pathname }: NavbarLinksProps) => (
  <>
    <div className="hidden items-center space-x-6 lg:flex">
      {NAV_ITEMS.map(({ label, href }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            to={href}
            className={`group relative text-md font-normal transition-all duration-300 ${isActive ? "text-white" : "text-white/90 hover:text-white"
              }`}
          >
            {label}
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-red-500 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
            />
          </Link>
        );
      })}
    </div>

    <div className="hidden items-center space-x-3 lg:flex">
      <a
        href="https://www.google.com/maps/search/?api=1&query=Malabar+Coast+Restaurant"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1.5 text-md text-white/90 transition-colors duration-300 hover:text-white"
      >
        <span>📍</span>
        <span>Find Outlet</span>
      </a>

      <Link
        to="/reservations"
        className="rounded-full bg-primary-600 px-5 py-2 text-md text-white shadow-lg transition-all duration-300 hover:bg-primary-700 hover:shadow-xl"
      >
        Book Table
      </Link>
    </div>
  </>
);

export default NavbarLinks;
