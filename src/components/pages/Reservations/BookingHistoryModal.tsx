import { useEffect, useState } from "react";
import { History, Loader2, Mail, Phone, RotateCcw, ShieldCheck, X } from "lucide-react";
import { reservationFieldClass } from "../../forms/Reservation/ReservationField";
import { useSendOtp } from "../../../hooks/useSendOtp";
import { useVerifyOtp } from "../../../hooks/useVerifyOtp";
import { clearOtpToken, getOtpToken } from "../../../api/tokens";
import { ToastStack, useToasts } from "../../admin/Toast";
import BookingHistoryList from "./BookingHistoryList";

type Step = "phone" | "otp" | "list";
type Method = "phone" | "email";

const BookingHistoryModal = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState<Step>(() => (getOtpToken() ? "list" : "phone"));
  const [method, setMethod] = useState<Method>("phone");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const { toasts, push } = useToasts();

  const { mutate: sendOtp, loading: sendingOtp, error: sendOtpError } = useSendOtp();
  const { mutate: verifyOtp, loading: verifyingOtp, error: verifyOtpError } = useVerifyOtp();

  const contact = method === "phone" ? phone : email;
  const canSendOtp = method === "phone" ? phone.length === 10 : email.length > 0;

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleSendOtp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await sendOtp({ phone: method === "phone" ? phone : "", email: method === "email" ? email : "" });
      setStep("otp");
    } catch {
      // error surfaced via sendOtpError
    }
  };

  const handleVerifyOtp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await verifyOtp({ phone: method === "phone" ? phone : "", email: method === "email" ? email : "", otp });
      setStep("list");
    } catch {
      // error surfaced via verifyOtpError
    }
  };

  const handleStartOver = () => {
    clearOtpToken();
    setOtp("");
    setStep("phone");
  };

  const handleChangeMethod = (next: Method) => {
    setMethod(next);
    setPhone("");
    setEmail("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <div onClick={(event) => event.stopPropagation()} className="max-h-[85vh] w-full max-w-md overflow-y-auto rounded-3xl border border-white/10 bg-[#0b0b0b] p-6 shadow-2xl md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-xl font-serif font-bold text-white"><History className="size-5 text-primary-400" />Booking History</h2>
          <button onClick={onClose} aria-label="Close" className="rounded-full p-1.5 text-white/50 transition-colors hover:bg-white/10 hover:text-white"><X className="size-5" /></button>
        </div>

        {step === "phone" && (
          <form className="space-y-4" onSubmit={handleSendOtp}>
            <div className="flex rounded-xl border border-white/10 bg-white/5 p-1">
              <button
                type="button"
                onClick={() => handleChangeMethod("phone")}
                className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold tracking-wide transition-colors ${method === "phone" ? "bg-primary-600 text-white" : "text-white/50 hover:text-white/80"}`}
              >
                <Phone className="size-3.5" />Phone
              </button>
              <button
                type="button"
                onClick={() => handleChangeMethod("email")}
                className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold tracking-wide transition-colors ${method === "email" ? "bg-primary-600 text-white" : "text-white/50 hover:text-white/80"}`}
              >
                <Mail className="size-3.5" />Email
              </button>
            </div>

            {method === "phone" ? (
              <>
                <p className="text-sm text-white/50">Enter the phone number you booked with — we&apos;ll text you a one-time code.</p>
                <div>
                  <label htmlFor="history-phone" className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/50"><Phone className="mr-1.5 mb-0.5 inline size-3.5" />Phone Number</label>
                  <input
                    id="history-phone"
                    type="tel"
                    inputMode="numeric"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value.replace(/\D/g, "").slice(0, 10))}
                    className={reservationFieldClass}
                  />
                </div>
              </>
            ) : (
              <>
                <p className="text-sm text-white/50">Enter the email you booked with — we&apos;ll send you a one-time code.</p>
                <div>
                  <label htmlFor="history-email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/50"><Mail className="mr-1.5 mb-0.5 inline size-3.5" />Email Address</label>
                  <input
                    id="history-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className={reservationFieldClass}
                  />
                </div>
              </>
            )}
            {sendOtpError && <p className="text-sm text-error">{sendOtpError}</p>}
            <button type="submit" disabled={sendingOtp || !canSendOtp} className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60">
              {sendingOtp && <Loader2 className="size-4 animate-spin" />}
              {sendingOtp ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        )}

        {step === "otp" && (
          <form className="space-y-4" onSubmit={handleVerifyOtp}>
            <p className="text-sm text-white/50">Enter the 6-digit code sent to <span className="text-white">{contact}</span>.</p>
            <div>
              <label htmlFor="history-otp" className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/50"><ShieldCheck className="mr-1.5 mb-0.5 inline size-3.5" />OTP</label>
              <input
                id="history-otp"
                type="text"
                inputMode="numeric"
                required
                pattern="[0-9]{6}"
                maxLength={6}
                placeholder="6-digit code"
                value={otp}
                onChange={(event) => setOtp(event.target.value.replace(/\D/g, "").slice(0, 6))}
                className={`${reservationFieldClass} tracking-[0.5em]`}
              />
            </div>
            {verifyOtpError && <p className="text-sm text-error">{verifyOtpError}</p>}
            <button type="submit" disabled={verifyingOtp || otp.length !== 6} className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60">
              {verifyingOtp && <Loader2 className="size-4 animate-spin" />}
              {verifyingOtp ? "Verifying..." : "Verify OTP"}
            </button>
            <button type="button" onClick={() => setStep("phone")} className="flex w-full items-center justify-center gap-1.5 text-xs text-white/40 transition-colors hover:text-white/70">
              <RotateCcw className="size-3.5" />Use a different {method === "phone" ? "number" : "email"}
            </button>
          </form>
        )}

        {step === "list" && <BookingHistoryList onStartOver={handleStartOver} push={push} />}
      </div>
      <ToastStack toasts={toasts} />
    </div>
  );
};

export default BookingHistoryModal;
