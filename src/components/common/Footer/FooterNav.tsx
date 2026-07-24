import { NAV_SECTIONS } from "../../../data/footer/footer.data";

const FooterNav = () => (
  <>
    {NAV_SECTIONS.map(({ title, links }) => (
      <div key={title}>
        <h4 className="text-white font-display text-md mb-4">{title}</h4>
        <ul className="space-y-3">
          {links.map(({ label, href, highlight }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-sm transition-colors ${
                  highlight
                    ? "text-primary-400 hover:text-primary-300 font-medium"
                    : "hover:text-primary-400"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </>
);

export default FooterNav;
