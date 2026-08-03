import React, { useRef, useState } from "react";

export interface Toast {
  id: number;
  message: string;
  tone: "success" | "error" | "info";
}

export const useToasts = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const idRef = useRef(0);

  const push = (message: string, tone: Toast["tone"] = "success") => {
    const id = ++idRef.current;
    setToasts((t) => [...t, { id, message, tone }]);
    window.setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 3200);
  };

  return { toasts, push };
};

export const ToastStack: React.FC<{ toasts: Toast[] }> = ({ toasts }) => (
  <div className="pointer-events-none fixed inset-x-4 bottom-4 z-50 flex flex-col items-center gap-2 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:items-end">
    {toasts.map((t) => (
      <div
        key={t.id}
        className={`pointer-events-auto flex w-full max-w-sm items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium shadow-lg ring-1 ring-black/5 animate-[fadeIn_0.2s_ease-out] ${
          t.tone === "success"
            ? "bg-primary-600 text-white"
            : t.tone === "error"
            ? "bg-red-600 text-white"
            : "bg-gray-800 text-white"
        }`}
      >
        {t.tone === "success" && <span>✓</span>}
        {t.tone === "error" && <span>✕</span>}
        {t.tone === "info" && <span>ℹ</span>}
        {t.message}
      </div>
    ))}
  </div>
);
