import React, { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { WeeklyBookingPoint } from "../../../pages/Superadmin/types";
import { formatDate, formatNumber } from "../../../pages/Superadmin/utils";

export const WeeklyBookingsChart: React.FC<{ points: WeeklyBookingPoint[] }> = ({
  points,
}) => {
  const [metric, setMetric] = useState<"count" | "cumulative">("count");

  const chartData = useMemo(() => {
    let running = 0;
    return points.map((p) => {
      running += p.count;
      return { ...p, label: formatDate(p.date), cumulative: running };
    });
  }, [points]);

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
        <div className="flex rounded-full bg-secondary-200 p-1 text-xs font-semibold">
          <button
            onClick={() => setMetric("count")}
            className={`rounded-full px-3 py-1.5 transition-colors ${
              metric === "count"
                ? "bg-primary-600 text-white shadow-sm"
                : "text-primary-600 hover:text-primary-700"
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setMetric("cumulative")}
            className={`rounded-full px-3 py-1.5 transition-colors ${
              metric === "cumulative"
                ? "bg-primary-600 text-white shadow-sm"
                : "text-primary-600 hover:text-primary-700"
            }`}
          >
            Cumulative
          </button>
        </div>
      </div>
      <div className="h-56 w-full sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="weeklyFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#006A2A" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#006A2A" stopOpacity={0.02} />
              </linearGradient>
            </defs>
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
            <Area
              type="monotone"
              dataKey={metric}
              stroke="#006A2A"
              strokeWidth={2.5}
              fill="url(#weeklyFill)"
              name={metric === "count" ? "Bookings" : "Cumulative"}
              activeDot={{ r: 5 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
