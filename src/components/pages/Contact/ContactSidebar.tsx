import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { OUTLETS, SOCIAL_LINKS } from "../../../data/home/restaurant/RestaurantsSection.data";
import { QUICK_LINKS } from "../../../data/contact/contactDetails.data";

const cardClass = "rounded-2xl border border-white/8 bg-white/[0.03] p-6";

type ContactItemProps = { icon: LucideIcon; detail: { label: string; value: string; href: string }; external?: boolean };

const ContactItem = ({ icon: Icon, detail, external = false }: ContactItemProps) => (
  <a href={detail.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group flex gap-3">
    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary-600/20 text-primary-400 transition-colors group-hover:bg-primary-600/30">
      <Icon className="size-4" />
    </span>
    <span>
      <span className="mb-1 block text-xs text-white/35">{detail.label}</span>
      <span className="block whitespace-pre-line text-sm leading-relaxed text-white/70 transition-colors group-hover:text-white">{detail.value}</span>
    </span>
  </a>
);

const ContactSidebar = () => {
  const [activeId, setActiveId] = useState(OUTLETS[0].id);
  const outlet = OUTLETS.find((o) => o.id === activeId)!;

  return (
    <aside className="space-y-5 mt-8">
      <div className={cardClass}>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Our Outlets</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {OUTLETS.map((o) => (
            <button
              key={o.id}
              onClick={() => setActiveId(o.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeId === o.id ? "bg-primary-600 text-white" : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
              }`}
            >
              {o.city}
            </button>
          ))}
        </div>
        <p className="text-xs text-white/40 uppercase tracking-widest mb-4">{outlet.name}</p>
        <div className="space-y-5">
          <ContactItem icon={MapPin} detail={{ label: "Address", value: outlet.address, href: outlet.googleMapLink ?? "#" }} external />
          <ContactItem icon={Phone} detail={{ label: "Phone", value: outlet.phone, href: `tel:${outlet.phone}` }} />
          <ContactItem icon={Mail} detail={{ label: "Email", value: outlet.email, href: `mailto:${outlet.email}` }} />
        </div>
        <h3 className="mb-4 mt-6 text-sm font-semibold uppercase tracking-wider text-white">Hours</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm"><span className="text-white/40">Mon – Fri</span><span className="text-white/80">{outlet.hours.weekday}</span></div>
          <div className="flex items-center justify-between text-sm"><span className="text-white/40">Sat – Sun</span><span className="text-white/80">{outlet.hours.weekend}</span></div>
          <p className="border-t border-white/5 pt-2 text-xs text-white/30">Closed on major public holidays</p>
        </div>
      </div>

      <div className={cardClass}>
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
        <div className="space-y-2">
          {QUICK_LINKS.map((link) => (
            <Link key={link.href} to={link.href} className="group flex items-center justify-between py-2 text-sm text-white/50 transition-colors hover:text-white">
              <span>{link.label}</span>
              <ArrowRight className="size-4 text-primary-400 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>

      <div className={cardClass}>
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white">Follow Us</h3>
        <p className="mb-5 text-xs text-white/30">Stay updated with dishes, events &amp; offers</p>
        <div className="flex gap-3">
          {SOCIAL_LINKS.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/50 hover:text-white hover:bg-primary-600/30 hover:border-primary-500/40 transition-all duration-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d={social.icon} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ContactSidebar;
