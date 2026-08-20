import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "../../../data/home/restaurant/RestaurantsSection.data";

const FooterBrand = () => (
  <div className="lg:col-span-2 max-w-[380px]">
    <Link className="flex items-center space-x-3 mb-3" to="/">
      <img src="/favicon.svg" alt="Malabar Coast" className="relative w-8 h-8 flex-shrink-0 rounded-full bg-white shadow-md" />
      <div>
        <h3 className="text-xl font-display font-bold text-white">The Malabar Coast</h3>
      </div>
    </Link>
    <p className="text-sm text-gray-400 mb-4 max-w-[360px] leading-7">
      Welcome to The Malabar Coast, one of the best South Indian restaurants in Indore,
       serving authentic Kerala cuisine and coastal delicacies inspired by the rich flavours of India’s 
       southern shores. From Kerala and Mangalore to Chettinad, Tamil Nadu and Goa, our menu 
       celebrates bold spices, traditional recipes and soulful comfort food.  
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
