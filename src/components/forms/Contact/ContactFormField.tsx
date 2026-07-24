type ContactFormFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
};

export const contactFieldClass =
  "w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 transition-all duration-200 focus:border-primary-500/60 focus:outline-none";

const ContactFormField = ({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: ContactFormFieldProps) => (
  <div>
    <label htmlFor={name} className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/40">
      {label}
    </label>
    <input id={name} name={name} type={type} required={required} placeholder={placeholder} className={contactFieldClass} />
  </div>
);

export default ContactFormField;
