import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "../../../data/footer/footer.data";

const FooterBrand = () => (
  <div className="lg:col-span-2 max-w-[380px]">
    <Link className="flex items-center space-x-3 mb-3" to="/">
      <div className="relative w-14 h-14 flex-shrink-0 rounded-full bg-white p-1.5 shadow-md" />
      <div>
        <h3 className="text-xl font-display font-bold text-white">Malabar Coast</h3>
      </div>
    </Link>
    <p className="text-sm text-gray-400 mb-4 max-w-[360px] leading-7">
      Malabar Coast is a modern Indian restaurant that offers a unique dining experience, blending
      authentic Indian flavors with contemporary cuisine. The restaurant uses fresh, seasonal
      ingredients and traditional cooking techniques to create dishes that are both delicious
      and visually stunning.
    </p>
    <div className="flex space-x-3">
      {SOCIAL_LINKS.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
          aria-label={label}
        >
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d={icon} />
          </svg>
        </a>
      ))}
    </div>
  </div>
);

export default FooterBrand;
