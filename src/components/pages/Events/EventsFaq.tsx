import { useState } from "react";
import { EVENTS_FAQS } from "../../../data/events/events.data";

const EventsFaq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to know about hosting events at Malabar Coast</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {EVENTS_FAQS.map((q, i) => (
            <div key={i} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-100 transition-colors">
                <span className="font-semibold text-gray-900 pr-4">{q}</span>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className={`text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsFaq;
