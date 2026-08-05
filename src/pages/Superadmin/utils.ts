import type { PlatformBooking } from "./types";

export { useClickOutside } from "../../hooks/useClickOutside";
export const formatNumber = (n: number): string => n.toLocaleString("en-IN");

export const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

export const mergeBookings = (...lists: PlatformBooking[][]): PlatformBooking[] => {
  const byId = new Map<number, PlatformBooking>();
  for (const list of lists) {
    for (const booking of list) {
      byId.set(booking.id, booking);
    }
  }
  return [...byId.values()];
};
