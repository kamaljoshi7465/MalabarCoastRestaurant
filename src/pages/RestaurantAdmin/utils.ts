export const formatNumber = (n: number): string => n.toLocaleString("en-IN");

export const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

export const formatShortDay = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-IN", { weekday: "short" });

export const formatTime = (time: string): string => {
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
};
