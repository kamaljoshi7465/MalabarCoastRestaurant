import React, { useEffect, useRef, useState } from "react";
import CountUp from "../../common/CountUp";
import { features, stats } from "../../../data/home/whyChoose/whyChoose.data";

import {
  GiCookingPot,
  GiBowlOfRice,
  GiSeaStar,
  GiPartyFlags,
} from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";

const WhyChoose: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.4,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Page 9 icons
  const page9Icons = [
    GiCookingPot,
    GiBowlOfRice,
    MdAccountBalance,
    GiSeaStar,
    GiPartyFlags,
    FaHeart,
  ];

  // Page 9 icon colors
  const iconColors = [
    "bg-[#f58220]",
    "bg-[#f5a623]",
    "bg-[#568b25]",
    "bg-[#15929c]",
    "bg-[#e72d68]",
    "bg-[#8d2c9d]",
  ];

  // Decorative line colors
  const lineColors = [
    "bg-[#f58220]",
    "bg-[#f5a623]",
    "bg-[#568b25]",
    "bg-[#15929c]",
    "bg-[#e72d68]",
    "bg-[#8d2c9d]",
  ];

  return (
    <section className="relative overflow-hidden bg-[#f5efe5] py-14 lg:py-20">
      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#183d2d]">
            Why Choose{" "}
            <span className="text-[#a85d26]">Malabar Coast</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = page9Icons[index];

            return (
              <div
                key={feature.title}
                className="group relative min-h-[235px] overflow-hidden rounded-[14px] bg-[#fffdf9] border border-[#eee5d8] shadow-[0_7px_22px_rgba(76,57,35,0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_13px_32px_rgba(76,57,35,0.20)]"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Top Icon */}
                <div
                  className={`absolute top-5 left-1/2 -translate-x-1/2 w-[58px] h-[58px] rounded-full ${iconColors[index]} flex items-center justify-center text-white shadow-[0_4px_10px_rgba(0,0,0,0.13)] transition-transform duration-300 group-hover:scale-105`}
                >
                  <Icon className="w-[30px] h-[30px]" />
                </div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col items-center text-center px-7 pt-[96px] pb-10">
                  <h3 className="font-serif text-[18px] lg:text-[19px] font-bold text-[#183d2d] leading-tight">
                    {feature.title}
                  </h3>

                  {/* Decorative Title Line */}
                  <div className="flex items-center justify-center mt-3 mb-4">
                    <span
                      className={`w-[18px] h-[2px] rounded-full ${lineColors[index]}`}
                    />

                    <span
                      className={`w-[5px] h-[5px] rounded-full ${lineColors[index]} mx-[4px]`}
                    />

                    <span
                      className={`w-[18px] h-[2px] rounded-full ${lineColors[index]}`}
                    />
                  </div>

                  <p className="max-w-[285px] text-[13px] lg:text-[13.5px] leading-[1.6] text-[#44403b]">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Decorative Design */}
                <div className="absolute bottom-0 left-0 right-0 h-[65px] pointer-events-none overflow-hidden">
                  {/* Left decorative curves */}
                  <svg
                    className="absolute left-[-8px] bottom-[-5px] w-[125px] h-[75px] opacity-[0.13] text-[#b27a39]"
                    viewBox="0 0 125 75"
                    fill="none"
                  >
                    <path
                      d="M3 70C18 56 29 44 45 41C62 37 77 44 91 39C103 35 111 25 121 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />

                    <path
                      d="M17 64C19 51 26 40 37 31"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />

                    <path
                      d="M29 53C23 42 19 33 20 22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />

                    <path
                      d="M37 31L32 25M37 31L43 27"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>

                  {/* Right decorative curves */}
                  <svg
                    className="absolute right-[-10px] bottom-[-8px] w-[120px] h-[75px] opacity-[0.11] text-[#b27a39]"
                    viewBox="0 0 120 75"
                    fill="none"
                  >
                    <path
                      d="M2 65C18 52 31 47 45 48C59 49 69 56 82 53C97 50 107 39 118 25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />

                    <path
                      d="M74 54C79 43 86 34 97 29"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />

                    <path
                      d="M95 30L90 24M95 30L101 27"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>

                  {/* Center small decorative dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 opacity-[0.12]">
                    <span className="w-1 h-1 rounded-full bg-[#b27a39]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b27a39]" />
                    <span className="w-1 h-1 rounded-full bg-[#b27a39]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Existing Stats Section */}
        <div
          ref={statsRef}
          className="mt-16 bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100/50 transition-all duration-1000 opacity-100 scale-100"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold bg-gradient-to-br from-primary-600 via-primary-500 to-gold-600 bg-clip-text text-transparent mb-2 transition-transform duration-300 group-hover:scale-110">
                  <CountUp
                    value={stat.value}
                    active={isVisible}
                    duration={2000}
                  />
                </div>

                <div className="text-gray-600 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;