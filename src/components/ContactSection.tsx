import React from "react";

interface ContactSectionProps {
  onNavigate?: (sectionId: string) => void;
  onInquire?: () => void;
}

export default function ContactSection({ onNavigate, onInquire }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 bg-black text-white relative overflow-hidden border-t-2 border-industrial-red">
      {/* Background Image structure with slow black-to-image fade effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/zeke_hero_1781624709150.jpg"
          alt="Zeke engineering structural frame"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 grayscale"
        />
        {/* Gradient that starts solid black on the left and slowly reveals the grayscaled low-opacity image on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
        <div className="absolute inset-0 industrial-grid-dark opacity-10 pointer-events-none" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tight">
          Ready to Bring Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-red to-red-500">
            Vision to Life?
          </span>
        </h2>
        <div className="w-16 h-[2px] bg-industrial-red mt-4 mb-6" />
        
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mb-10 leading-relaxed font-sans">
          Connect directly with Cathy Orquiola or Marcus Zeke to inspect available realty parcels, execute deep soil clearing logs, or specify structural steel forms.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-start items-stretch sm:items-center">
          
          <button
            id="home-cta-start"
            onClick={onInquire}
            className="bg-industrial-red hover:bg-red-700 text-white font-display font-bold uppercase tracking-widest text-xs sm:text-sm py-4.5 px-10 transition-all duration-300 w-full sm:w-auto shadow-lg shadow-industrial-red/25 active:translate-y-[2px] cursor-pointer"
          >
            Start Your Project
          </button>

          <button
            id="home-cta-portfolio"
            onClick={() => onNavigate?.("portfolio")}
            className="bg-transparent hover:bg-white/5 text-stone-100 hover:text-white font-display font-bold uppercase tracking-widest text-xs sm:text-sm py-4.5 px-10 border border-zinc-700 hover:border-white transition-all duration-300 w-full sm:w-auto active:translate-y-[2px] cursor-pointer"
          >
            View Our Portfolio
          </button>

        </div>

      </div>
    </section>
  );
}
