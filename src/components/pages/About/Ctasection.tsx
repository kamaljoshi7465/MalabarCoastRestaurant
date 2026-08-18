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
      <div
        className="relative flex min-h-[460px] md:min-h-[500px] items-center bg-gradient-to-r from-[#0b321c] via-[#244f1b] to-[#80600b] px-4 py-12 md:min-h-[400px] md:px-8 md:py-16"
      >
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

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center text-center">
          <div className="mb-4 flex items-center justify-center">
            <div className="h-px w-[135px] bg-[#c9a227]/70 md:w-[160px]" />

            <div className="mx-3 flex items-center justify-center text-[#d5a92c]">
              {CTA_ICONS.heart}
            </div>

            <div className="h-px w-[135px] bg-[#c9a227]/70 md:w-[160px]" />
          </div>

          <h2 className="mb-4 font-serif text-3xl font-normal leading-tight text-[#d9a72e] sm:text-4xl md:text-[42px]">
            {CTA_CONTENT.title}
          </h2>

          <p className="mb-6 max-w-4xl text-base leading-6 text-gray-200 md:text-lg">
            {CTA_CONTENT.description}
          </p>

          <div className="flex w-full items-center justify-center">
            <div className="mr-5 hidden h-px w-20 bg-[#c9a227]/70 sm:block md:w-24" />

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#d5a92c] md:gap-6 md:text-base">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
              </span>

              {OUTLETS.map((outlet, index) => (
                <span key={outlet.city}>
                  {outlet.city}

                  {index < OUTLETS.length - 1 && (
                    <span className="ml-4 text-[#c9a227] md:ml-6">|</span>
                  )}
                </span>
              ))}
            </div>

            <div className="ml-5 hidden h-px w-20 bg-[#c9a227]/70 sm:block md:w-24" />
          </div>
        </div>
      </div>

      <div
        className="relativeflexmin-h-[105px]items-centerjustify-centerborder-tborder-[#9c7916]bg-[#0b2d19]px-4py-7md:min-h-[110px]"
      >
        <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          <Link
            to="/restaurants"
            className="inline-flexh-11min-w-[185px]items-centerjustify-centergap-2rounded-fullbg-[#e5b13f]px-7text-smfont-boldtext-[#15351f]transition-allduration-300hover:bg-[#efbd52]hover:shadow-lg"
          >
            <span>Find an Outlet</span>
            {CTA_ICONS.arrowRight}
          </Link>

          <Link
            to="/reservations"
            className="inline-flexh-11min-w-[185px]items-centerjustify-centergap-2rounded-fullborderborder-[#e5b13f]px-7text-smfont-boldtext-[#e5b13f]transition-allduration-300hover:bg-[#e5b13f]hover:text-[#15351f]hover:shadow-lg"
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