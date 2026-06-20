import React, { useState } from "react";
import { PROJECTS_DATA } from "../data";
import { ProjectItem } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Landmark, Calendar, MapPin, Layers, X, PlusCircle, ArrowRight } from "lucide-react";

export default function Portfolio({ onInquire }: { onInquire?: () => void }) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleInquire = (projectTitle: string) => {
    setSelectedProject(null);
    // Find contact message and pre-fill details
    const messageTextarea = document.getElementById("contact-message") as HTMLTextAreaElement | null;
    const projectTypeSelect = document.getElementById("contact-project-type") as HTMLSelectElement | null;
    
    if (projectTypeSelect) {
      projectTypeSelect.value = "realty";
    }
    
    if (messageTextarea) {
      messageTextarea.value = `I am interested in inquiry details regarding the "${projectTitle}" project. Please provide pricing structural specifications, land zoning details, and pre-selling packages.`;
    }

    if (onInquire) {
      onInquire();
    } else {
      // Fallback Scroll smoothly to contact
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = contactEl.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <section id="portfolio" className="relative bg-industrial-black text-white py-20 lg:py-32 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 industrial-grid-dark opacity-10 pointer-events-none" />

      {/* Decorative vertical red structural beam */}
      <div className="absolute right-10 top-0 w-1 h-32 bg-industrial-red opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Section Header */}
        <div id="portfolio-header" className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <span className="block font-mono text-xs font-bold tracking-widest text-industrial-red uppercase mb-3">
              MUNICIPAL &amp; RESIDENTIAL PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase leading-none">
              ARCHITECTURAL SHOWCASES
            </h2>
            <div className="w-20 h-1 bg-industrial-red mt-4" />
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-sans tracking-wide">
            A meticulous showcase of real engineering operations. Hover each masterpiece to inspect geographic tags, or select a showcase card to drill into core structural specifications.
          </p>
        </div>

        {/* 3-Column Image Project Grid */}
        <div id="portfolio-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-zinc-900 border border-zinc-800 hover:border-industrial-red overflow-hidden relative transition-all duration-300 shadow-xl"
            >
              {/* Aspect ratio frame */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-950">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />

                {/* Flat, bold overlay styling with high contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-industrial-black/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                
                {/* Diagonal subtle brand ribbon */}
                <div className="absolute top-0 right-0 bg-industrial-red text-white text-[10px] uppercase font-mono font-bold tracking-widest py-1 px-4 transform rotate-0 origin-top-right">
                  {project.category.replace(" Architecture", "").replace(" & Development", "")}
                </div>
              </div>

              {/* Text content under the image */}
              <div className="p-6 relative">
                {/* Visual marker */}
                <div className="absolute top-0 left-6 -translate-y-1/2 w-8 h-8 bg-industrial-red text-white flex items-center justify-center border border-industrial-black group-hover:rotate-45 transition-transform">
                  <PlusCircle className="w-4 h-4 group-hover:-rotate-45 transition-transform" />
                </div>

                <div className="mt-2 flex items-center space-x-4 text-xs font-mono text-zinc-400 mb-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-industrial-red" />
                    {project.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    {project.year}
                  </span>
                </div>

                <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-wider text-stone-100 group-hover:text-industrial-red transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                  {project.details}
                </p>

                <div className="mt-5 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono font-bold text-industrial-red uppercase tracking-widest group-hover:text-white transition-colors">
                  <span>SPECIFICATIONS LIST</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial callout box inside portfolio */}
        <div id="portfolio-commercial-cta" className="mt-16 bg-zinc-950 border border-zinc-800 p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Zeke logo from Nav bar - Icon only */}
            <div className="relative w-10 h-10 flex items-center justify-center bg-industrial-black border border-white/10 overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 border-t-2 border-l-2 border-industrial-red"></div>
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-white/20"></div>
              <span className="font-display font-extrabold text-xl text-white tracking-tighter z-10 select-none">
                Z<span className="text-industrial-red">E</span>
              </span>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-industrial-red rotate-45 transform origin-bottom-right"></div>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="font-display font-black text-[15px] uppercase tracking-wider text-stone-100">
                Are you looking for custom industrial site layout operations?
              </h4>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed max-w-2xl">
                We maintain active permits, state-of-the-art grading equipment, and heavy hydraulic drilling gears to execute high-density warehouse structures, roads, and subdivisions throughout Central Luzon.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-white hover:bg-industrial-red hover:text-white text-industrial-black text-xs font-display font-black uppercase tracking-widest py-4 px-8 border border-transparent transition-all duration-300 text-center w-full lg:w-auto"
          >
            Inquire About Custom Builds
          </a>
        </div>

      </div>

      {/* Detail Specifications Modal (AnimatePresence) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            id="portfolio-detail-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-industrial-black/90 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              id="portfolio-detail-modal"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-zinc-900 border-2 border-industrial-red text-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-none shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button Top Right */}
              <button
                id="close-portfolio-modal"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-industrial-black hover:bg-industrial-red text-white border border-zinc-800 hover:border-transparent p-2 transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-10">
                
                {/* Modal Left Image Container */}
                <div>
                  <div className="relative bg-industrial-black p-1.5 border border-zinc-800">
                    <img
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover aspect-[4/3]"
                    />
                  </div>
                  <div className="mt-6 space-y-4">
                    <h4 className="font-display font-black text-xs uppercase tracking-widest text-industrial-red border-b border-zinc-800 pb-2 flex items-center gap-2">
                      <Landmark className="w-4 h-4" />
                      PROJECT DESCRIPTION
                    </h4>
                    <p className="text-zinc-300 text-xs sm:text-sm tracking-wide leading-relaxed">
                      {selectedProject.details}
                    </p>
                  </div>
                </div>

                {/* Modal Right Spec sheet */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="mb-6">
                      <span className="inline-block font-mono text-[10px] text-industrial-red font-bold uppercase tracking-widest border border-industrial-red/30 px-2 py-0.5 mb-2">
                        {selectedProject.category}
                      </span>
                      <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-1">
                        {selectedProject.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 mt-2">
                        <MapPin className="w-4 h-4 text-industrial-red" />
                        <span>{selectedProject.location}</span>
                        <span>•</span>
                        <span>Completed {selectedProject.year}</span>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-display font-black text-xs uppercase tracking-widest text-zinc-400 border-b border-zinc-800 pb-2 mb-4">
                        STRUCTURAL ENGINEERING SPECS
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedProject.specs.map((spec, index) => (
                          <div key={index} className="bg-zinc-950 border border-zinc-800/60 p-4">
                            <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                              {spec.label}
                            </span>
                            <span className="block font-display font-bold text-xs sm:text-sm text-stone-100 mt-1 uppercase">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions buttons inside the modal */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-zinc-800/80">
                    <button
                      id="modal-inquire-btn"
                      onClick={() => handleInquire(selectedProject.title)}
                      className="bg-industrial-red hover:bg-red-700 text-white font-display font-black uppercase tracking-widest text-xs py-4 px-6 text-center transition-all duration-300"
                    >
                      Inquire About This
                    </button>
                    <button
                      id="modal-close-alternative"
                      onClick={() => setSelectedProject(null)}
                      className="bg-transparent hover:bg-zinc-800 text-stone-300 hover:text-white font-display font-bold uppercase tracking-widest text-xs py-4 px-6 text-center border border-zinc-700 transition-all duration-300"
                    >
                      Return to Gallery
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
