import React from "react";
import { motion } from "motion/react";
import { AlertOctagon, CheckSquare, ShieldCheck, Scale, Compass, HardHat } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section id="about" className="relative bg-industrial-light py-20 lg:py-32 overflow-hidden">
      {/* Industrial grid background */}
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24 lg:space-y-40">
        
        {/* ==================== PROBLEM STATEMENT SECTION ==================== */}
        <div id="problem-statement-block" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch items-center">
          
          {/* Column A: Sticky Content Card with Image Illustration */}
          <div className="lg:col-span-6 relative order-last lg:order-first lg:h-full flex flex-col">
            <div className="relative group lg:h-full lg:flex lg:flex-col lg:flex-1">
              {/* Thick Industrial Frame Accent with Construction Red color */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-industrial-black pointer-events-none translate-x-2 translate-y-2 hidden sm:block transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
              
              <div className="relative bg-industrial-black p-2 shadow-2xl overflow-hidden lg:h-full lg:flex lg:flex-col lg:flex-1">
                <img
                  src="/images/zeke_problem_1781624780339.jpg"
                  alt="Industrial architectural frustration problems"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto lg:h-full object-cover aspect-[4/3] lg:aspect-auto lg:flex-grow filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Warning Overlay Label */}
                <div className="absolute top-4 right-4 bg-industrial-red text-white py-1.5 px-3 font-mono font-bold text-[10px] tracking-widest uppercase">
                  PROJECT CRITICAL RISKS
                </div>
              </div>
            </div>
          </div>

          {/* Column B: Explicit Text Details */}
          <div className="lg:col-span-6">
            <div className="relative">
              <span className="block font-mono text-xs font-bold tracking-widest text-industrial-red mb-3 uppercase">
                THE INDUSTRY BOTTLENECK
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-industrial-black tracking-tight uppercase">
                The Friction in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-black to-zinc-600">
                  Modern Development
                </span>
              </h2>
              <div className="w-16 h-1 bg-industrial-red mt-4 mb-8" />
            </div>

            <p className="text-stone-600 text-base sm:text-lg tracking-wide leading-relaxed mb-8">
              Building a dream property often becomes a logistical, financial, and emotional nightmare. Property developers, homebuyers, and investors are forced to swim in fragmented waters while managing multiple separate agencies.
            </p>

            {/* Structured Friction List Grid */}
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-zinc-900 text-industrial-red p-2.5 border border-zinc-800">
                  <AlertOctagon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-zinc-900 uppercase tracking-wide">
                    Segmented, Uncoordinated Contractors
                  </h4>
                  <p className="text-stone-500 text-sm mt-1 leading-relaxed">
                    Architects draft unrealistic plans that structural engineers can't build, of which sub-contractors blame on materials, leaving you stuck in the middle.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-zinc-900 text-industrial-red p-2.5 border border-zinc-800">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-zinc-900 uppercase tracking-wide">
                    Mismatched Realty &amp; Legal Title Traps
                  </h4>
                  <p className="text-stone-500 text-sm mt-1 leading-relaxed">
                    Purchasing prime land only to face municipal zoning restrictions, outstanding back taxes, or boundary easement disputes during construction phases.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-zinc-900 text-industrial-red p-2.5 border border-zinc-800">
                  <AlertOctagon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-zinc-900 uppercase tracking-wide">
                    Hidden Markups &amp; Delayed Milestones
                  </h4>
                  <p className="text-stone-500 text-sm mt-1 leading-relaxed">
                    Each entity adds its own hidden profit markup, raising budgets by 30% while pushing delivery deadlines indefinitely into the future.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ==================== SOLUTION STATEMENT SECTION ==================== */}
        <div id="solution-statement-block" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch items-center pt-10">
          
          {/* Column A: Explicit Text Details (Swapped Alignments) */}
          <div className="lg:col-span-6">
            <div className="relative">
              <span className="block font-mono text-xs font-bold tracking-widest text-industrial-red mb-3 uppercase">
                THE SYSTEMIC ANTIDOTE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-industrial-black tracking-tight uppercase">
                The Zeke <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-red to-red-700">
                  Integrated Blueprint
                </span>
              </h2>
              <div className="w-16 h-1 bg-industrial-red mt-4 mb-8" />
            </div>

            <p className="text-stone-600 text-base sm:text-lg tracking-wide leading-relaxed mb-8">
              We completely eliminate the friction. Zeke Realty and Construction Development integrates land vetting, structural design, general block engineering, and interior styling under a single, highly aligned corporate roof.
            </p>

            {/* Integrated Solutions Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white p-5 border border-zinc-200 hover:border-industrial-red transition-all duration-300">
                <div className="text-industrial-red mb-3">
                  <Compass className="w-6 h-6" />
                </div>
                <h5 className="font-display font-bold text-xs sm:text-sm text-industrial-black uppercase tracking-wider mb-2">
                  1. Real Estate Diligence
                </h5>
                <p className="text-stone-500 text-xs leading-relaxed">
                  Our internal legal specialists clear land titles and secure environmental zoning clearances before any design files are drafted.
                </p>
              </div>

              <div className="bg-white p-5 border border-zinc-200 hover:border-industrial-red transition-all duration-300">
                <div className="text-industrial-red mb-3">
                  <CheckSquare className="w-6 h-6" />
                </div>
                <h5 className="font-display font-bold text-xs sm:text-sm text-industrial-black uppercase tracking-wider mb-2">
                  2. Dynamic BIM Modeling
                </h5>
                <p className="text-stone-500 text-xs leading-relaxed">
                  Architects and master construction leaders build the structure virtually together, aligning architectural form with precise engineering.
                </p>
              </div>

              <div className="bg-white p-5 border border-zinc-200 hover:border-industrial-red transition-all duration-300">
                <div className="text-industrial-red mb-3">
                  <HardHat className="w-6 h-6" />
                </div>
                <h5 className="font-display font-bold text-xs sm:text-sm text-industrial-black uppercase tracking-wider mb-2">
                  3. In-House Execution
                </h5>
                <p className="text-stone-500 text-xs leading-relaxed">
                  Zero external contractor markup. Our highly skilled physical machinery operators and engineers handle building phases entirely.
                </p>
              </div>

              <div className="bg-white p-5 border border-zinc-200 hover:border-industrial-red transition-all duration-300">
                <div className="text-industrial-red mb-3">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h5 className="font-display font-bold text-xs sm:text-sm text-industrial-black uppercase tracking-wider mb-2">
                  4. Single Accountability
                </h5>
                <p className="text-stone-500 text-xs leading-relaxed">
                  One single cohesive point of billing contact, one unified warranty package, and a strict timeline guarantee.
                </p>
              </div>

            </div>
          </div>

          {/* Column B: Aesthetic Image Illustration (Right aligned) */}
          <div className="lg:col-span-6 relative lg:h-full flex flex-col">
            <div className="relative group lg:h-full lg:flex lg:flex-col lg:flex-1">
              {/* Behind Accent Block */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-industrial-red pointer-events-none -translate-x-2 translate-y-2 hidden sm:block transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1" />
              
              <div className="relative bg-industrial-black p-2 shadow-2xl overflow-hidden lg:h-full lg:flex lg:flex-col lg:flex-1">
                <img
                  src="/images/zeke_solution_1781624797540.jpg"
                  alt="Zeke absolute design synergy solutions"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto lg:h-full object-cover aspect-[4/3] lg:aspect-auto lg:flex-grow group-hover:scale-105 transition-transform duration-500"
                />
                {/* Integration Badge */}
                <div className="absolute bottom-4 left-4 bg-industrial-black text-white border border-white/10 py-1.5 px-3 font-mono font-bold text-[10px] tracking-widest uppercase">
                  SOLUTIONS: 100% UNIFIED
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
