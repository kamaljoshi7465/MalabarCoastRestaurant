import FooterBottom from "./FooterBottom";
import FooterBrand from "./FooterBrand";
import FooterContact from "./FooterContact";
import FooterNav from "./FooterNav";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300">
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-6 lg:gap-x-14">
        <FooterBrand />
        <FooterNav />
      </div>
      <FooterContact />
    </div>
    <FooterBottom />
  </footer>
);

export default Footer;
