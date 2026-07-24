type ReservationFieldProps = { label: string; name: string; placeholder: string; type?: "text" | "email" | "tel"; required?: boolean };

export const reservationFieldClass = "w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 transition-all duration-200 focus:border-primary-500/60 focus:bg-white/8 focus:outline-none";

const ReservationField = ({ label, name, placeholder, type = "text", required = false }: ReservationFieldProps) => <div><label htmlFor={name} className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/50">{label}</label><input id={name} name={name} type={type} required={required} placeholder={placeholder} className={reservationFieldClass} /></div>;

export default ReservationField;
