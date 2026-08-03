import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatNumber, formatShortDay } from "../utils";
import type { WeeklyBookingPoint } from "../types";

export const WeeklyBookingsChart: React.FC<{
  points: WeeklyBookingPoint[];
  todayDate: string;
}> = ({ points, todayDate }) => {
  const chartData = points.map((p) => ({ ...p, label: formatShortDay(p.date) }));
  const total = points.reduce((sum, p) => sum + p.count, 0);
  const avg = Math.round(total / (points.length || 1));

  return (
    <div className="card bg-white p-4 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-serif text-lg text-primary-700 sm:text-xl">
            Weekly Bookings
          </h3>
          <p className="text-sm text-gray-500">
            {formatNumber(total)} bookings · avg {formatNumber(avg)}/day
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-500">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
          Today highlighted
        </span>
      </div>
      <div className="h-56 w-full sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F3E8C9" vertical={false} />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 11, fill: "#6B7280" }}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
              width={36}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #F3E8C9",
                fontSize: 13,
              }}
              labelStyle={{ color: "#004B1D", fontWeight: 600 }}
            />
            <Bar dataKey="count" name="Bookings" radius={[6, 6, 0, 0]}>
              {chartData.map((p) => (
                <Cell key={p.date} fill={p.date === todayDate ? "#D4A017" : "#006A2A"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
