import type { FC } from "react";

interface StatusBadgeProps {
  isOpen: boolean;
}

const StatusBadge: FC<StatusBadgeProps> = ({ isOpen }) => {
  if (!isOpen) {
    return (
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-sm">
        <div className="h-2 w-2 rounded-full bg-gray-400" />
        <span className="text-xs font-semibold tracking-wide text-gray-300">CLOSED</span>
      </div>
    );
  }

  return (
    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-3 w-3 animate-ping rounded-full bg-green-400 opacity-75" />
        <div className="relative h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e,0_0_20px_#22c55e]" />
      </div>
      <span className="text-xs font-semibold tracking-wide text-green-400">OPEN</span>
    </div>
  );
};

export default StatusBadge;
