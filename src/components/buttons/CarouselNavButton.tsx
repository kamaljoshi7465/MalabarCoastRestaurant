import type { ReactNode } from "react";

type CarouselNavButtonProps = {
  direction: "left" | "right";
  onClick: () => void;
  ariaLabel: string;
  children: ReactNode;
};

export default function CarouselNavButton({
  direction,
  onClick,
  ariaLabel,
  children,
}: CarouselNavButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:bg-primary-600 hover:text-white ${
        direction === "left" ? "left-0 -translate-x-4" : "right-0 translate-x-4"
      }`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
