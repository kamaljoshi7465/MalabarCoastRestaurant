import { CONTACT_HEADER_DATA } from "../../../data/contact/contactHeader.data";

const ContactHeader = () => {
  return (
    <section className="relative overflow-hidden pt-36 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/25 via-black to-black" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.18), transparent 45%), radial-gradient(circle at 80% 30%, rgba(202, 138, 4, 0.12), transparent 45%)",
          }}
        />
      </div>

      <div className="relative container-custom">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary-400">
          {CONTACT_HEADER_DATA.eyebrow}
        </p>
        <h1 className="mb-5 text-5xl leading-none font-serif font-bold text-white md:text-7xl">
          Get In{" "}
          <span className="italic text-gold-400">
            Touch
          </span>
        </h1>
        <p className="max-w-lg text-base leading-relaxed text-white/50 md:text-lg">
          {CONTACT_HEADER_DATA.description}
        </p>
      </div>
    </section>
  );
};

export default ContactHeader;
