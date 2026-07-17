import type { CSSProperties } from "react";

type TagButtonProps = {
  text: string;
  style?: CSSProperties;
  className?: string;
};

export default function TagButton({
  text,
  style,
  className = "",
}: TagButtonProps) {
  return (
    <span
      style={style}
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${className}`}
    >
      {text}
    </span>
  );
}