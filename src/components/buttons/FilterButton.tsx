type FilterButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
  className?: string;
};

export default function FilterButton({
  label,
  active,
  onClick,
  className = "",
}: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-6 py-2 font-medium transition-all duration-300 cursor-pointer ${
        active
          ? "bg-primary-600 text-white shadow-md"
          : "bg-white text-gray-700 hover:bg-gray-100"
      } ${className}`}
    >
      {label}
    </button>
  );
}
