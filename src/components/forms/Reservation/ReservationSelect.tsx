import type { ReactNode } from "react";
import { reservationFieldClass } from "./ReservationField";

type ReservationSelectProps = { label: string; name: string; options: readonly (readonly [string, string] | { value: string; label: string })[]; placeholder?: string; required?: boolean; icon?: ReactNode; defaultValue?: string };

const ReservationSelect = ({ label, name, options, placeholder, required = false, icon, defaultValue = "" }: ReservationSelectProps) => <div><label htmlFor={name} className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/50">{icon}{label}</label><select id={name} name={name} required={required} defaultValue={defaultValue} className={reservationFieldClass}>{placeholder && <option value="" className="bg-gray-900">{placeholder}</option>}{options.map((option) => { const [value, optionLabel] = "value" in option ? [option.value, option.label] : option; return <option key={value} value={value} className="bg-gray-900">{optionLabel}</option>; })}</select></div>;

export default ReservationSelect;
