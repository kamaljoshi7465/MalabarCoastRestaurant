import type { ReactNode } from "react";
import { reservationFieldClass } from "./ReservationField";

type ReservationSelectProps = { label: string; name: string; options: readonly (readonly [string, string] | { value: string; label: string })[]; placeholder?: string; required?: boolean; icon?: ReactNode; defaultValue?: string; disabled?: boolean; onChange?: (value: string) => void };

const ReservationSelect = ({ label, name, options, placeholder, required = false, icon, defaultValue = "", disabled = false, onChange }: ReservationSelectProps) => <div><label htmlFor={name} className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/50">{icon}{label}</label><select id={name} name={name} required={required} defaultValue={defaultValue} disabled={disabled} onChange={onChange ? (event) => onChange(event.target.value) : undefined} className={`${reservationFieldClass} ${disabled ? "cursor-not-allowed opacity-50" : ""}`}>{placeholder && <option value="" className="bg-gray-900">{placeholder}</option>}{options.map((option) => { const [value, optionLabel] = "value" in option ? [option.value, option.label] : option; return <option key={value} value={value} className="bg-gray-900">{optionLabel}</option>; })}</select></div>;

export default ReservationSelect;
