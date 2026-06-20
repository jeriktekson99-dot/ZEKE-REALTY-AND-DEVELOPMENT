import React from "react";
import { SERVICES_DATA } from "../data";
import { Compass, Map, HardHat, Hammer, Layers, Building, ChevronRight } from "lucide-react";

export default function Services() {
  // Safe helper to grab the correct icon for each service
  const getIcon = (id: string) => {
    switch (id) {
      case "planning-design":
        return <Compass className="w-8 h-8 text-industrial-red" />;
      case "land-development":
        return <Map className="w-8 h-8 text-industrial-red" />;
      case "construction":
        return <HardHat className="w-8 h-8 text-industrial-red" />;
      case "renovations":
        return <Hammer className="w-8 h-8 text-industrial-red" />;
      case "extensions":
        return <Layers className="w-8 h-8 text-industrial-red" />;
      case "realty":
        return <Building className="w-8 h-8 text-industrial-red" />;
      default:
        return <HardHat className="w-8 h-8 text-industrial-red" />;
    }
  };

  return (
    <section id="services" className="relative bg-white py-20 lg:py-32 overflow-hidden">
      {/* Structural background lines & grids */}
      <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />

      {/* Red diagonal structural layout slice */}
      <div className="absolute left-0 bottom-0 w-24 h-1 bg-industrial-red" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="services-header" className="max-w-3xl mb-16 lg:mb-24">
          <span className="inline-block font-mono text-xs font-black tracking-widest text-industrial-red uppercase mb-3">
            CAPABILITIES &amp; EXECUTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-industrial-black tracking-tight uppercase leading-none">
            WHAT WE BUILD &amp; DEVELOP
          </h2>
          <div className="w-20 h-1 bg-industrial-red mt-4 mb-6" />
          <p className="text-stone-500 text-base sm:text-lg tracking-wide">
            A comprehensive overview of our fully licensed corporate solutions. From soil engineering and land acquisition to structural steel framing and premium residential listings, Zeke is single-point accountability.
          </p>
        </div>

        {/* Dynamic 3-Column Services Grid */}
        <div id="services-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative bg-industrial-light border border-stone-200 hover:border-industrial-red p-8 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md"
            >
              {/* Massive Geometric Background Number */}
              <div 
                id={`service-number-${service.id}`}
                className="absolute right-6 top-4 font-display font-black text-7xl text-stone-200/60 leading-none group-hover:text-industrial-red/10 group-hover:scale-105 transition-all duration-300 select-none font-extrabold"
              >
                {service.number}
              </div>

              {/* Card top elements (Icon + Title) */}
              <div className="relative z-10">
                {/* Custom icon container with industrial look */}
                <div className="w-16 h-16 bg-white border border-stone-200 group-hover:border-industrial-red flex items-center justify-center mb-6 shadow-sm group-hover:bg-industrial-black group-hover:text-white transition-all duration-300">
                  {getIcon(service.id)}
                </div>

                <h3 className="font-display font-black text-lg text-industrial-black uppercase tracking-wider mb-3 leading-tight group-hover:text-industrial-red transition-colors">
                  {service.title}
                </h3>

                <p className="text-stone-500 text-xs sm:text-sm tracking-wide leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Card bottom elements (Core Features) */}
              <div className="relative z-10 border-t border-stone-200/70 pt-6 mt-6">
                <span className="block font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-3">
                  Core Deliverables
                </span>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-stone-600 font-medium">
                      {/* Arrow style red marker badge matches diagonal logo arrow badge style */}
                      <span className="w-1.5 h-1.5 bg-industrial-red mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* An elegant corner cut and subtle line for visual aesthetic */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-stone-300/60 group-hover:bg-industrial-red transition-colors" />

            </div>
          ))}
        </div>

        {/* Single Line Branding Accent */}
        <div className="mt-20 border-t border-zinc-200/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3 text-industrial-black/50 font-mono text-xs">
            <span className="w-8 h-[2px] bg-industrial-red" />
            <span className="uppercase tracking-widest">ISO 9001:2015 STRUCTURAL STANDARDS COMPLIANT</span>
          </div>
          <p className="text-stone-400 text-xs tracking-wider uppercase text-center sm:text-left">
            Need custom architectural specifications? 
            <a href="#contact" className="text-industrial-red hover:underline font-bold ml-1">Connect with our engineers</a>
          </p>
        </div>

      </div>
    </section>
  );
}
