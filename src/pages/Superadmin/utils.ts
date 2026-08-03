export { useClickOutside } from "../../hooks/useClickOutside";
export const formatNumber = (n: number): string => n.toLocaleString("en-IN");

export const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
