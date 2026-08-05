import React, { useMemo, useState } from "react";
import type { BookingSlot, SlotStatusUpdateRequest } from "../../../pages/RestaurantAdmin/types";
import { formatDate, formatTime } from "../../../pages/RestaurantAdmin/utils";

const DEFAULT_REASON = "Restaurant Full";

export const SlotAvailabilityManager: React.FC<{
  outletId: number;
  date: string;
  slots: BookingSlot[];
  onUpdate: (request: SlotStatusUpdateRequest) => void;
}> = ({ outletId, date, slots, onUpdate }) => {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [reason, setReason] = useState(DEFAULT_REASON);
  const [showReasonPrompt, setShowReasonPrompt] = useState(false);

  const toggleSelect = (time: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(time)) next.delete(time);
      else next.add(time);
      return next;
    });
  };

  const clearSelection = () => {
    setSelected(new Set());
    setShowReasonPrompt(false);
  };

  const selectedSlots = useMemo(() => slots.filter((s) => selected.has(s.time)), [slots, selected]);
  const canDisable = selectedSlots.some((s) => s.status === "ENABLED");
  const canEnable = selectedSlots.some((s) => s.status === "DISABLED");

  const submitDisable = () => {
    const targets = selectedSlots.filter((s) => s.status === "ENABLED").map((s) => s.time);
    if (targets.length === 0) return;
    onUpdate({
      outlet_id: outletId,
      date,
      slots: targets,
      status: "DISABLED",
      reason: reason.trim() || DEFAULT_REASON,
    });
    setReason(DEFAULT_REASON);
    clearSelection();
  };

  const submitEnable = () => {
    const targets = selectedSlots.filter((s) => s.status === "DISABLED").map((s) => s.time);
    if (targets.length === 0) return;
    onUpdate({ outlet_id: outletId, date, slots: targets, status: "ENABLED" });
    clearSelection();
  };

  return (
    <div className="card bg-white p-4 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-lg text-primary-700 sm:text-xl">Manage Slot Availability</h3>
          <p className="text-sm text-gray-500">
            {formatDate(date)} · Disable slots during high demand so guests can't book them.
          </p>
        </div>

        {selected.size > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-gray-500">{selected.size} selected</span>
            <button
              onClick={clearSelection}
              className="text-xs font-medium text-gray-500 transition-colors hover:text-gray-700 cursor-pointer"
            >
              Clear
            </button>
            {canEnable && (
              <button
                onClick={submitEnable}
                className="rounded-full bg-primary-600 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-primary-700 cursor-pointer"
              >
                Enable Selected
              </button>
            )}
            {canDisable && (
              <button
                onClick={() => setShowReasonPrompt(true)}
                className="rounded-full border border-red-200 px-3.5 py-1.5 text-xs font-semibold text-error transition-colors hover:bg-red-50 cursor-pointer"
              >
                Disable Selected
              </button>
            )}
          </div>
        )}
      </div>

      {showReasonPrompt && (
        <div className="mt-4 flex flex-col gap-3 rounded-xl bg-red-50 p-4 sm:flex-row sm:items-center">
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Reason (e.g. Restaurant Full)"
            className="w-full rounded-lg border border-red-200 bg-white px-3.5 py-2 text-sm text-gray-800 focus:border-error focus:outline-none focus:ring-2 focus:ring-red-100 sm:flex-1"
          />
          <div className="flex shrink-0 gap-2">
            <button
              onClick={submitDisable}
              className="rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-700 cursor-pointer"
            >
              Confirm Disable
            </button>
            <button
              onClick={() => setShowReasonPrompt(false)}
              className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600 transition-colors hover:bg-gray-50 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {slots.map((slot) => {
          const isSelected = selected.has(slot.time);
          const isDisabled = slot.status === "DISABLED";
          return (
            <button
              key={slot.time}
              onClick={() => toggleSelect(slot.time)}
              title={isDisabled ? (slot.reason ?? undefined) : undefined}
              className={`flex flex-col items-start gap-0.5 rounded-xl border px-3 py-2.5 text-left transition-colors cursor-pointer ${
                isSelected
                  ? "border-primary-500 ring-2 ring-primary-100"
                  : isDisabled
                  ? "border-red-100 bg-red-50/60"
                  : "border-gray-200 hover:border-primary-200"
              }`}
            >
              <span className={`text-sm font-semibold ${isDisabled ? "text-gray-400 line-through" : "text-gray-800"}`}>
                {formatTime(slot.time)}
              </span>
              {isDisabled ? (
                <span className="text-[11px] font-medium text-error">Disabled</span>
              ) : (
                <span className="text-[11px] text-gray-500">Open</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
