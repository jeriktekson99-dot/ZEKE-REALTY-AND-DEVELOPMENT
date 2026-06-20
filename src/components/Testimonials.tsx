import React from "react";
import { TESTIMONIALS_DATA } from "../data";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-white py-20 lg:py-32 overflow-hidden">
      {/* Background industrial grid */}
      <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />

      {/* Side visual border mark */}
      <div className="absolute bottom-0 right-0 w-32 h-1 bg-industrial-red" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="testimonials-header" className="max-w-3xl mb-16 lg:mb-24 text-center mx-auto">
          <span className="inline-block font-mono text-xs font-black tracking-widest text-industrial-red uppercase mb-3">
            VERIFIED SOCIAL COMPLIANCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-industrial-black tracking-tight uppercase">
            CLIENTS BUILT WITH ZEKE
          </h2>
          <div className="w-20 h-1 bg-industrial-red mx-auto mt-4 mb-6" />
          <p className="text-stone-500 text-sm sm:text-base tracking-wide max-w-2xl mx-auto">
            Honest feedback from residential landowners, developers, and corporate investors who selected standard-setting integration over chaotic contractor fragmentation.
          </p>
        </div>

        {/* 3-Column Testimonials Layout */}
        <div id="testimonials-card-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              className="bg-industrial-light border border-stone-200 hover:border-industrial-red p-8 flex flex-col justify-between transition-all duration-300 shadow-sm relative group"
            >
              {/* Corner quote mark decorative */}
              <span className="absolute bottom-4 right-6 font-display font-black text-8xl text-zinc-200/50 leading-none pointer-events-none select-none group-hover:text-industrial-red/10 transition-colors">
                ”
              </span>

              <div className="relative z-10">
                {/* 5-Star Rating Graphic */}
                <div id={`stars-${item.id}`} className="flex items-center space-x-1 mb-6">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-industrial-red text-industrial-red group-hover:scale-110 transition-transform"
                    />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-zinc-700 font-sans text-xs sm:text-sm tracking-wide leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Info Banner */}
              <div className="relative z-10 border-t border-stone-200/80 pt-5 mt-4">
                <h4 className="font-display font-black text-sm text-zinc-900 uppercase tracking-wider">
                  {item.clientName}
                </h4>
                <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">
                  {item.role}
                </span>
                <span className="block text-[10px] text-industrial-red font-semibold mt-0.5">
                  {item.location}
                </span>
              </div>

              {/* Angle element accent */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-stone-300 group-hover:bg-industrial-red transition-all" />

            </div>
          ))}
        </div>

        {/* Highlight quote at the bottom */}
        <div id="testimonials-summary-box" className="mt-16 text-center text-stone-400 text-xs font-mono tracking-widest uppercase">
          ✦ TOTAL SATISFACTION RATING: <span className="text-industrial-red font-bold">4.96/5.00 STARS</span> BASED ON 80+ RESIDENTIAL &amp; COMMERCIAL COMMITS ✦
        </div>

      </div>
    </section>
  );
}
