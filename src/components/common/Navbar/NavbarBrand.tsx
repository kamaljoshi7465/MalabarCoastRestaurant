import { Link } from "react-router-dom";

interface NavbarBrandProps {
  imageSrc: string;
  alt?: string;
  className?: string;
  linkClassName?: string;
}

const NavbarBrand = ({
  imageSrc,
  alt = "Malabar Coast Restaurant",
  className = "h-48 w-auto transition-transform duration-300 group-hover:scale-105",
  linkClassName = "group flex items-center",
}: NavbarBrandProps) => (
  <Link to="/" className={linkClassName}>
    <img src={imageSrc} alt={alt} className={className} />
  </Link>
);

export default NavbarBrand;
