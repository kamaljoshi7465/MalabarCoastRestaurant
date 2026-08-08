import type { AdminProfile, PlatformBooking, UserProfile } from "./types";

export { useClickOutside } from "../../hooks/useClickOutside";
export const formatNumber = (n: number): string => n.toLocaleString("en-IN");

export const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

export const toAdminProfile = (user: UserProfile): AdminProfile => ({
  name: user.name,
  email: user.email,
  phone: user.phone,
  role: "Super Admin",
  joined: new Date(user.created_at.replace(" ", "T")).toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  }),
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
