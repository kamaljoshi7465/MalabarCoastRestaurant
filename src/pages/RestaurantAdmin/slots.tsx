import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToasts } from "../../components/admin/Toast";
import { RESTAURANT_API_RESPONSE } from "./data";
import type { SlotStatusUpdateRequest } from "./types";
import { RestaurantAdminLayout } from "../../layouts/RestaurantAdminLayout";
import { SlotAvailabilityManager } from "../../components/pages/RestaurantsAdmin/SlotAvailabilityManager";

const RestaurantSlots: React.FC = () => {
  const navigate = useNavigate();
  const { data } = RESTAURANT_API_RESPONSE;
  const { restaurant, today, notifications, slot_availability } = data;

  const { toasts, push } = useToasts();
  const [slots, setSlots] = useState(slot_availability);

  const liveToday = {
    ...today,
    available_slots: slots.filter((s) => s.status === "ENABLED").length,
    disabled_slots: slots.filter((s) => s.status === "DISABLED").length,
  };

  const handleSlotUpdate = (request: SlotStatusUpdateRequest) => {
    setSlots((prev) =>
      prev.map((slot) =>
        request.slots.includes(slot.time)
          ? { ...slot, status: request.status, reason: request.status === "DISABLED" ? request.reason : undefined }
          : slot
      )
    );
    const count = request.slots.length;
    push(
      request.status === "DISABLED"
        ? `${count} slot${count === 1 ? "" : "s"} disabled — ${request.reason}`
        : `${count} slot${count === 1 ? "" : "s"} re-enabled`,
      request.status === "DISABLED" ? "info" : "success"
    );
  };

  return (
    <RestaurantAdminLayout
      active="slots"
      title="Slot Availability"
      subtitle="Disable slots during high demand so guests can't book them"
      restaurant={restaurant}
      today={liveToday}
      pendingApproval={notifications.pending_approval}
      onLogout={() => {
        push("Logged out", "info");
        navigate("/restaurant-login");
      }}
      toasts={toasts}
    >
      <SlotAvailabilityManager
        outletId={restaurant.id}
        date={today.date}
        slots={slots}
        onUpdate={handleSlotUpdate}
      />
    </RestaurantAdminLayout>
  );
};

export default RestaurantSlots;
