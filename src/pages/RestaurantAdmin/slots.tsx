import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useToasts } from "../../components/admin/Toast";
import { useRestaurantDashboard } from "../../hooks/useRestaurantDashboard";
import { useBookingSlots } from "../../hooks/useBookingSlots";
import { useUpdateBookingSlotStatus } from "../../hooks/useUpdateBookingSlotStatus";
import type { BookingSlot, SlotStatusUpdateRequest } from "./types";
import { RestaurantAdminLayout } from "../../layouts/RestaurantAdminLayout";
import { SlotAvailabilityManager } from "../../components/pages/RestaurantsAdmin/SlotAvailabilityManager";
import { OUTLETS } from "../../data/home/restaurant/RestaurantsSection.data";
import { getOutletTimeSlots, isWeekend } from "../../data/reservations/reservationDetails.data";

const todayIso = () => new Date().toISOString().slice(0, 10);

const RestaurantSlots: React.FC = () => {
  const navigate = useNavigate();
  const { toasts, push } = useToasts();
  const [date, setDate] = useState(todayIso);

  const { data, loading, error, unauthorized, refetch } = useRestaurantDashboard();
  const { data: slots, loading: slotsLoading, error: slotsError, unauthorized: slotsUnauthorized, refetch: refetchSlots } = useBookingSlots(date);
  const { mutate: updateSlotStatus } = useUpdateBookingSlotStatus();

  const handleSlotUpdate = async (request: SlotStatusUpdateRequest) => {
    try {
      await updateSlotStatus(request);
      refetchSlots();
      const count = request.slots.length;
      push(
        request.status === "DISABLED"
          ? `${count} slot${count === 1 ? "" : "s"} disabled — ${request.reason}`
          : `${count} slot${count === 1 ? "" : "s"} re-enabled`,
        request.status === "DISABLED" ? "info" : "success"
      );
    } catch (err) {
      push(err instanceof Error ? err.message : "Couldn't update slot availability. Please try again.", "error");
    }
  };

  if (unauthorized || slotsUnauthorized) {
    return <Navigate to="/restaurant-login" replace />;
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-secondary-100 px-4 text-center">
        <p className="text-sm text-error">{error}</p>
        <button onClick={refetch} className="rounded-full bg-primary-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700">
          Retry
        </button>
      </div>
    );
  }

  if (loading || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-secondary-100">
        <Loader2 className="size-6 animate-spin text-primary-600" />
      </div>
    );
  }

  const { restaurant, today, notifications } = data;

  // The API only returns slots that have an explicit override (usually just disabled
  // ones) — build the full day's half-hour slots from the outlet's own hours (same
  // source ReservationForm uses) and default everything to ENABLED, then layer in
  // whatever the API actually returned for this date.
  const outlet = OUTLETS.find((o) => Number(o.id) === restaurant.id);
  const hoursRange = outlet ? (isWeekend(date) ? outlet.hours.weekend : outlet.hours.weekday) : null;
  const fullDaySlots: BookingSlot[] = hoursRange
    ? getOutletTimeSlots(hoursRange).map(({ value }) => {
        const override = (slots ?? []).find((s) => s.time === value);
        return override ?? { outlet_id: restaurant.id, date, time: value, status: "ENABLED", reason: null };
      })
    : slots ?? [];

  const liveToday = date === today.date
    ? { ...today, available_slots: fullDaySlots.filter((s) => s.status === "ENABLED").length, disabled_slots: fullDaySlots.filter((s) => s.status === "DISABLED").length }
    : today;

  return (
    <RestaurantAdminLayout
      active="slots"
      title="Slot Availability"
      subtitle="Disable slots during high demand so guests can't book them"
      restaurant={restaurant}
      today={liveToday}
      notifications={notifications}
      onLogout={() => {
        push("Logged out", "info");
        navigate("/restaurant-login");
      }}
      toasts={toasts}
    >
      <div className="card flex flex-wrap items-center gap-3 bg-white p-4 sm:p-5">
        <label htmlFor="slots-date" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Viewing date
        </label>
        <input
          id="slots-date"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
        />
      </div>

      {slotsError && (
        <div className="card flex flex-col items-center gap-3 bg-white p-6 text-center">
          <p className="text-sm text-error">{slotsError}</p>
          <button onClick={refetchSlots} className="rounded-full bg-primary-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700">
            Retry
          </button>
        </div>
      )}

      {!slotsError && (slotsLoading || !slots) && (
        <div className="card flex items-center justify-center bg-white p-10">
          <Loader2 className="size-5 animate-spin text-primary-600" />
        </div>
      )}

      {!slotsError && slots && (
        <SlotAvailabilityManager outletId={restaurant.id} date={date} slots={fullDaySlots} onUpdate={handleSlotUpdate} />
      )}
    </RestaurantAdminLayout>
  );
};

export default RestaurantSlots;
