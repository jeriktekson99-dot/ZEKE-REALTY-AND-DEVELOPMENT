import React from "react";
import { Shield, Radio, CheckSquare, Layers, Clock, Gavel, Check } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative bg-industrial-light py-20 lg:py-32 overflow-hidden border-t border-b border-stone-200">
      {/* Background industrial grids */}
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

      {/* Subtle corner line decorations */}
      <div className="absolute top-0 left-0 w-2 h-24 bg-industrial-red" />
      <div className="absolute top-0 left-0 w-24 h-2 bg-industrial-red" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT SIDE: Prominent Heavy Slogan Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-industrial-black border-l-4 border-industrial-red p-8 sm:p-10 text-white relative shadow-2xl">
            {/* Background grid details */}
            <div className="absolute inset-0 industrial-grid-dark opacity-10 pointer-events-none" />
            
            {/* Top design element */}
            <div className="relative z-10 flex flex-col space-y-4">
              <span className="font-mono text-[10px] tracking-widest text-industrial-red font-black uppercase">
                THE VALUATION MATRIX
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black leading-none tracking-tighter uppercase">
                BUILT <br />
                DIFFERENT.<br />
                <span className="text-industrial-red">BY DESIGN.</span>
              </h2>

              <p className="font-sans text-[16px] text-zinc-400 leading-relaxed pt-2">
                Zeke is not merely a broker or builder. We are a heavy-assets developer which owns our engineering equipment and land legal services outright, a complete ecosystem engineered for total project control. That is the Zeke absolute safety guarantee.
              </p>
            </div>

            {/* Bottom details with gray line and footer meta details */}
            <div className="relative z-10 mt-8 pt-6">
              {/* Gray line at the bottom of content */}
              <div className="w-full h-[1px] bg-zinc-800 mb-4" />

              <div className="flex flex-row items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-wider">
                <div className="flex items-center gap-2 text-zinc-400">
                  <div className="w-4 h-4 rounded-full bg-industrial-red/15 border border-industrial-red/50 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-industrial-red stroke-[3]" />
                  </div>
                  <span>Licensed & Bonded 2019</span>
                </div>
                <div className="text-right text-zinc-500 font-bold">
                  ZK_ENG_REG #09882A
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Three Cleanly Stacked Horizontal Low-Profile Feature List Items */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Feature Item 1 */}
            <div 
              id="why-feature-1"
              className="group bg-white border border-stone-200 hover:border-industrial-red p-6 sm:p-8 flex gap-5 transition-all duration-300 shadow-sm"
            >
              <div className="font-display font-black text-2xl sm:text-3xl text-industrial-red font-extrabold flex-shrink-0 leading-none">
                01
              </div>
              <div>
                <h3 className="font-display font-black text-sm sm:text-base text-zinc-900 uppercase tracking-wider mb-2">
                  Uncompromised Structural Integrity
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm leading-relaxed tracking-wide">
                  Every foundation, shear wall joint, and load-bearing steel standard we place exceeds regional code specifications by up to 25%. We design specifically to resist extreme seismic Zone-4 tremors and super-typhoon conditions.
                </p>
              </div>
            </div>

            {/* Feature Item 2 */}
            <div 
              id="why-feature-2"
              className="group bg-white border border-stone-200 hover:border-industrial-red p-6 sm:p-8 flex gap-5 transition-all duration-300 shadow-sm"
            >
              <div className="font-display font-black text-2xl sm:text-3xl text-industrial-red font-extrabold flex-shrink-0 leading-none">
                02
              </div>
              <div>
                <h3 className="font-display font-black text-sm sm:text-base text-zinc-900 uppercase tracking-wider mb-2">
                  Transparent End-to-End Project Tracking
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm leading-relaxed tracking-wide">
                  Gain secure digital log entries for every cement transaction, structural phase inspection, and soil density compaction clearance. We provide clear bill-of-materials transparency so there are zero hidden margins or surprise fees.
                </p>
              </div>
            </div>

            {/* Feature Item 3 */}
            <div 
              id="why-feature-3"
              className="group bg-white border border-stone-200 hover:border-industrial-red p-6 sm:p-8 flex gap-5 transition-all duration-300 shadow-sm"
            >
              <div className="font-display font-black text-2xl sm:text-3xl text-industrial-red font-extrabold flex-shrink-0 leading-none">
                03
              </div>
              <div>
                <h3 className="font-display font-black text-sm sm:text-base text-zinc-900 uppercase tracking-wider mb-2">
                  Seamless Realty &amp; Legal Integration
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm leading-relaxed tracking-wide">
                  Avoid long land legal battles. Our dedicated realty conveyancing division guarantees absolute clean titles, coordinates complex environmental surveys, and resolves zoning permissions prior to structural commitment.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
