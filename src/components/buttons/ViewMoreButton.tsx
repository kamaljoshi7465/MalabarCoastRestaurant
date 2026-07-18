import { ArrowRight } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

type ViewMoreButtonProps = {
  text: string;
  href: string;
  style?: CSSProperties;
  className?: string;
  light?: boolean;
  arrow?: boolean;
  icon?: ReactNode;
};

export default function ViewMoreButton({
  text,
  href,
  style,
  className = "",
  light = false,
  arrow = true,
  icon,
}: ViewMoreButtonProps) {
  const baseClasses =
    "btn-primary inline-flex items-center space-x-2 px-6 py-3 font-medium cursor-pointer rounded-xl transition-all duration-300 hover:scale-[1.04]";

  const variantClasses = light
    ? "text-white hover:bg-white border border-white bg-white/10 backdrop-blur-sm hover:text-gray-900"
    : "text-white bg-primary-700 hover:bg-primary-700";

  return (
    <div className="text-center" style={style}>
      <a
        href={href}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        {icon}

        <span>{text}</span>

        {arrow && <ArrowRight size="1em" />}
      </a>
    </div>
  );
}