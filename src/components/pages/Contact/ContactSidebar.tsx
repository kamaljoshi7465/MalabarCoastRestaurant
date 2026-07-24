import type { LucideIcon } from "lucide-react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT_DETAILS, HOURS, QUICK_LINKS, SOCIAL_LINKS } from "../../../data/contact/contactDetails.data";

const cardClass = "rounded-2xl border border-white bg-white/[0.03] p-6";

const ContactSidebar = () => (
  <aside className="space-y-5">
    <div className={cardClass}>
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">Headquarters</h3>
      <div className="space-y-5">
        <ContactItem icon={MapPin} detail={CONTACT_DETAILS.address} external />
        <ContactItem icon={Phone} detail={CONTACT_DETAILS.phone} />
        <ContactItem icon={Mail} detail={CONTACT_DETAILS.email} />
      </div>
    </div>
    <div className={cardClass}>
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">Hours</h3>
      <div className="space-y-3">
        {HOURS.map((hour) => <div key={hour.days} className="flex items-center justify-between text-sm"><span className="text-white/40">{hour.days}</span><span className="text-white/80">{hour.time}</span></div>)}
        <p className="border-t border-white/5 pt-2 text-xs text-white/30">Closed on major public holidays</p>
      </div>
    </div>
    <div className={cardClass}>
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
      <div className="space-y-2">
        {QUICK_LINKS.map((link) => <Link key={link.href} to={link.href} className="group flex items-center justify-between py-2 text-sm text-white/50 transition-colors hover:text-white"><span>{link.label}</span><ArrowRight className="size-4 text-primary-400 opacity-0 transition-opacity group-hover:opacity-100" /></Link>)}
      </div>
    </div>
    <div className={cardClass}>
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white">Follow Us</h3>
      <p className="mb-5 text-xs text-white/30">Stay updated with dishes, events &amp; offers</p>
      <div className="flex gap-3">
        {SOCIAL_LINKS.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="flex size-9 items-center justify-center rounded-xl border border-white/8 bg-white/5 text-sm font-semibold text-white/50 transition-all duration-200 hover:border-primary-500/40 hover:bg-primary-600/30 hover:text-white">{social.label.slice(0, 1)}</a>)}
      </div>
    </div>
  </aside>
);

type ContactItemProps = { icon: LucideIcon; detail: { label: string; value: string; href: string }; external?: boolean };

const ContactItem = ({ icon: Icon, detail, external = false }: ContactItemProps) => <a href={detail.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group flex gap-3"><span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary-600/20 text-primary-400 transition-colors group-hover:bg-primary-600/30"><Icon className="size-4" /></span><span><span className="mb-1 block text-xs text-white/35">{detail.label}</span><span className="block whitespace-pre-line text-sm leading-relaxed text-white/70 transition-colors group-hover:text-white">{detail.value}</span></span></a>;

export default ContactSidebar;
