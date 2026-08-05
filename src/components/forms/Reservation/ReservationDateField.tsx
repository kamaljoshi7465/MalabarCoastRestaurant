import type { ReactNode } from "react";
import { reservationFieldClass } from "./ReservationField";

type ReservationDateFieldProps = { label: string; name: string; value: string; onChange: (value: string) => void; min: string; required?: boolean; icon?: ReactNode };

const ReservationDateField = ({ label, name, value, onChange, min, required = false, icon }: ReservationDateFieldProps) => <div><label htmlFor={name} className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/50">{icon}{label}</label><input id={name} name={name} type="date" value={value} min={min} required={required} onChange={(event) => onChange(event.target.value)} className={`${reservationFieldClass} [color-scheme:dark]`} /></div>;

export default ReservationDateField;
