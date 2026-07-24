import { Link } from "react-router-dom";
import { CONTACT_ITEMS } from "../../../data/footer/footer.data";

const FooterContact = () => (
  <div className="mt-10 border-t border-gray-800 pt-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
        <div key={label} className="flex items-start space-x-3">
          <span className="text-primary-500 mt-1">{icon}</span>
          <div>
            <p className="text-sm font-semibold text-white">{label}</p>
            {href ? (
              href.startsWith("/") ? (
                <Link to={href} className="text-sm hover:text-primary-400 transition-colors">{value}</Link>
              ) : (
                <a href={href} className="text-sm hover:text-primary-400 transition-colors">{value}</a>
              )
            ) : (
              <p className="text-sm whitespace-pre-line">{value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FooterContact;
