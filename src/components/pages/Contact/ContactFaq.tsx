import { FAQS } from "../../../data/contact/contactDetails.data";

const ContactFaq = () => (
  <div className="mt-6 rounded-2xl border border-white bg-white/[0.03] p-7 md:p-9">
    <h2 className="mb-6 text-xl font-serif font-bold text-white">Frequently Asked Questions</h2>
    <div className="space-y-2">
      {FAQS.map((faq) => (
        <details key={faq.question} className="group cursor-pointer overflow-hidden rounded-xl border border-white/5">
          <summary className="flex list-none items-center justify-between px-5 py-4 text-sm font-medium text-white/80 transition-colors select-none hover:text-white">
            <span>{faq.question}</span>
            <span className="ml-4 shrink-0 text-lg text-white/30 transition-transform duration-200 group-open:rotate-45">+</span>
          </summary>
          <p className="border-t border-white/5 px-5 pt-3 pb-4 text-sm leading-relaxed text-white/45">{faq.answer}</p>
        </details>
      ))}
    </div>
  </div>
);

export default ContactFaq;
