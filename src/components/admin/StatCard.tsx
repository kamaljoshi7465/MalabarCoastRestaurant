import React from "react";

const formatNumber = (n: number): string => n.toLocaleString("en-IN");

export interface StatCardProps {
  label: string;
  value: number;
  accent?: "primary" | "gold" | "neutral";
  suffix?: string;
  onClick?: () => void;
  active?: boolean;
  activeLabel?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  accent = "neutral",
  suffix,
  onClick,
  active,
  activeLabel,
}) => {
  const accentBar =
    accent === "primary"
      ? "bg-primary-500"
      : accent === "gold"
      ? "bg-accent-400"
      : "bg-gray-300";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      className={`card relative w-full overflow-hidden bg-white p-4 text-left transition-transform sm:p-5 ${
        onClick ? "cursor-pointer hover:-translate-y-0.5 hover:shadow-lg" : "cursor-default"
      } ${active ? "ring-2 ring-primary-500" : ""}`}
    >
      <span className={`absolute left-0 top-0 h-full w-1 ${accentBar}`} />
      <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 sm:text-xs">
        {label}
      </p>
      <p className="mt-2 font-serif text-2xl text-primary-700 sm:text-3xl">
        {formatNumber(value)}
        {suffix ? (
          <span className="ml-1 text-sm font-sans text-gray-400">
            {suffix}
          </span>
        ) : null}
      </p>
      {onClick && (
        <span className="mt-1 block text-[11px] font-medium text-primary-400">
          {active ? activeLabel ?? "Showing ↓" : "Click to filter ↓"}
        </span>
      )}
    </button>
  );
};
