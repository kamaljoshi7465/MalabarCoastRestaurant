import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import {
  CTA_CONTENT,
  CTA_ICONS,
  CTA_STATS,
} from "../../../data/about/cta/cta.data";
import { OUTLETS } from "../../../data/home/restaurant/RestaurantsSection.data";

const CtaSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative bg-gradient-to-r from-[#0b321c] via-[#244f1b] to-[#80600b] px-4 pt-48 md:px-8 md:py-24">
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <div className="mb-2 flex items-center justify-center">
            <div className="h-px w-[135px] bg-[#c9a227]/70 md:w-[160px]" />

            <div className="mx-3 flex items-center justify-center text-[#d5a92c]">
              {CTA_ICONS.heart}
            </div>

            <div className="h-px w-[135px] bg-[#c9a227]/70 md:w-[160px]" />
          </div>

          <h2 className="mb-4 font-serif text-3xl font-normal leading-tight text-[#d9a72e] sm:text-4xl md:text-[42px]">
            {CTA_CONTENT.title}
          </h2>

          <p className="mb-5 text-base leading-6 text-gray-200 md:text-lg">
            {CTA_CONTENT.description}{" "}
          </p>

          <div className="flex items-center justify-center">
            <div className="mr-5 hidden h-px w-20 bg-[#c9a227]/70 sm:block md:w-24" />

            <div className="flex items-center gap-5 text-sm text-[#d5a92c] md:gap-6 md:text-base">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
              </span>
              {OUTLETS.map((outlet, index) => (
                <span key={outlet.city}>
                  {outlet.city}
                  {index < OUTLETS.length - 1 && (
                    <span className="text-[#c9a227]"> | </span>
                  )}
                </span>
              ))}
            </div>
            <div className="ml-5 hidden h-px w-20 bg-[#c9a227]/70 sm:block md:w-24" />
          </div>
        </div>
      </div>

      <div className="relative border-t border-[#9c7916] bg-[#0b2d19] px-4 py-7">
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/restaurants"
            className="inline-flex h-11 min-w-[185px] items-center justify-center gap-2 rounded-full bg-[#e5b13f] px-7 text-sm font-bold text-[#15351f] transition-colors duration-300 hover:bg-[#efbd52]"
          >
            <span>Find an Outlet</span>
            {CTA_ICONS.arrowRight}
          </Link>

          <Link
            to="/reservations"
            className="inline-flex h-11 min-w-[185px] items-center justify-center gap-2 rounded-full border border-[#e5b13f] px-7 text-sm font-bold text-[#e5b13f] transition-colors duration-300 hover:bg-[#e5b13f] hover:text-[#15351f]"
          >
            <span>Book a Table</span>
            {CTA_ICONS.calendar}
          </Link>
        </div>

        <div className="absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-[#c9a227]/70" />
      </div>

      <div className="hidden">
        {CTA_STATS.map((stat) => (
          <div key={stat.label}>
            <div>{stat.value}</div>
            <div>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CtaSection;