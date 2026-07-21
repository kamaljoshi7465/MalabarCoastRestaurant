import { LEGAL_LINKS } from "../../../data/footer/footer.data";

const FooterBottom = () => (
  <div className="border-t border-gray-800">
    <div className="container-custom py-5">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Malabar Coast Restaurants Pvt. Ltd.. All rights reserved.
        </p>
        <div className="flex space-x-6">
          {LEGAL_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default FooterBottom;
