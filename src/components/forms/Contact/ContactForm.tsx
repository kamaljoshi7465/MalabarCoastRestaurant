import { Send } from "lucide-react";
import { SUBJECT_OPTIONS } from "../../../data/contact/contactDetails.data";
import ContactFormField, { contactFieldClass } from "./ContactFormField";

const ContactForm = () => (
  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-7 md:p-9">
    <h2 className="mb-7 text-xl font-serif font-bold text-white">Send Us a Message</h2>
    <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <ContactFormField label="Your Name *" name="name" placeholder="Enter Your Name" required />
        <ContactFormField label="Email Address *" name="email" type="email" placeholder="Enter Your E-mail" required />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <ContactFormField label="Phone Number" name="phone" type="tel" placeholder="Enter Your Phone Number" />
        <div>
          <label htmlFor="subject" className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/40">Subject *</label>
          <select id="subject" name="subject" required defaultValue="" className={contactFieldClass}>
            {SUBJECT_OPTIONS.map((option) => <option key={option.value} value={option.value} className="bg-gray-900">{option.label}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/40">Message *</label>
        <textarea id="message" name="message" required rows={6} placeholder="Tell us how we can help you…" className={`${contactFieldClass} resize-none`} />
      </div>
      <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 py-4 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-primary-700">
        <Send className="size-4" />Send Message
      </button>
    </form>
  </div>
);

export default ContactForm;
