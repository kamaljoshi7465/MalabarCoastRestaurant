import React, { useEffect, useRef, useState } from "react";
import CountUp from "../../common/CountUp";
import { features, stats } from "../../../data/home/whyChoose/whyChoose.data";

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

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-gold-50 to-orange-50 relative overflow-hidden  py-16 lg:py-24">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-gold-200/30 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-200/30 to-pink-200/30 rounded-full blur-3xl -z-0" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 transition-all duration-1000 opacity-100 translate-y-0">
          <div className="inline-block mb-4">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider bg-white/80 px-4 py-2 rounded-full shadow-sm">
              Our Excellence
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary-600 to-gold-600 bg-clip-text text-transparent">
              Malabar Coast
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            More than just a restaurant - we&apos;re a celebration of India&apos;s culinary heritage
            <br className="hidden md:block" />
            with a contemporary twist
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 text-center opacity-100 translate-y-0"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.iconGradient} rounded-2xl flex items-center justify-center mb-6 mx-auto transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div ref={statsRef} className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100/50 transition-all duration-1000 opacity-100 scale-100">
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
                <div className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;