import { reservationFieldClass } from "./ReservationField";

type ReservationTextareaProps = { label: string; name: string; placeholder: string; required?: boolean };

const ReservationTextarea = ({ label, name, placeholder, required = false }: ReservationTextareaProps) => <div><label htmlFor={name} className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/50">{label}</label><textarea id={name} name={name} required={required} placeholder={placeholder} rows={3} className={`${reservationFieldClass} resize-none`} /></div>;

export default ReservationTextarea;
