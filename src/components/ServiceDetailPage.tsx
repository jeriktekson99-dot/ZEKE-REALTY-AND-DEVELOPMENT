import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Check,
  Zap,
  Shield,
  Layers,
  ArrowRight,
  CheckCircle,
  Cpu,
  Feather,
  Eye,
  Hammer
} from "lucide-react";

export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
}

interface ServiceDetailPageProps {
  service: ServiceDetail;
  onBack: () => void;
  onInquire: (serviceTitle: string) => void;
  onSelectProject?: (projectId: string) => void;
  onNavigate?: (section: string) => void;
}

export default function ServiceDetailPage({
  service,
  onBack,
  onInquire,
  onSelectProject,
  onNavigate
}: ServiceDetailPageProps) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // High-Resolution Local Assets
  const images = {
    blueprintBg: "/assets/images/zeke_about_hero_1781626949346.jpg",
    buildInProgress: "/assets/images/zeke_project_one_1781624725520.jpg",
    rawFraming: "/assets/images/zeke_project_two_1781624742258.jpg",
    technicalDesign: "/assets/images/zeke_about_workflow_1781626977867.jpg",
    projectDeployment: "/assets/images/zeke_project_three_1781624759261.jpg",
    ctaBg: "/assets/images/zeke_solution_1781624797540.jpg"
  };

  // Featured projects grid data (3 columns) matching the Related Articles structure
  const featuredProjects = [
    {
      id: "res-highrise",
      title: "Solace Heights Tower B",
      category: "Residential",
      imageUrl: "/assets/images/zeke_project_one_1781624725520.jpg",
      description: "A premium structural footprint emphasizing state-of-the-art seismic shear panels."
    },
    {
      id: "com-hq",
      title: "Apex Industrial Complex",
      category: "Commercial",
      imageUrl: "/assets/images/zeke_project_two_1781624742258.jpg",
      description: "Direct-to-mill structural steel frameworks engineered for heavy loading layouts."
    },
    {
      id: "lnd-corp",
      title: "Cavitex Regional Logistics Hub",
      category: "Land Development",
      imageUrl: "/assets/images/zeke_project_three_1781624759261.jpg",
      description: "Rigorous grade civil excavations and geotechnical pre-stretching sequences."
    }
  ];



  // Nav handles for projects slider trigger
  const handlePrevProject = () => {
    setActiveProjectIndex((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
  };

  const handleNextProject = () => {
    setActiveProjectIndex((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="service-detail-subpage" className="bg-[#F8F9FA] min-h-screen text-industrial-black select-text font-sans pt-20">
      
      {/* 1. HERO BANNER */}
      <section id="service-detail-hero" className="relative min-h-[45vh] sm:min-h-[50vh] flex items-center bg-industrial-black text-white overflow-hidden py-20 sm:py-28">
        {/* Dark architectural blueprint or project layout overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={images.blueprintBg}
            alt="Dark architectural blueprint layout grid"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-25 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-industrial-black/90 to-industrial-black/45" />
          <div className="absolute inset-0 industrial-grid-dark opacity-15 pointer-events-none" />
        </div>

        {/* Structural red design accent corners */}
        <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-industrial-red/30 m-6 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-industrial-red/30 m-6 pointer-events-none" />

        {/* Back to Services List link at the far top left of the hero section */}
        <div className="absolute top-8 left-0 right-0 z-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={onBack}
              id="service-detail-back-btn"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-zinc-300 hover:text-[#E11D48] uppercase transition-colors group focus:outline-none cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Services Blueprint</span>
            </button>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-industrial-red/10 border-l-4 border-industrial-red px-3 py-1 mb-6"
            >
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#E11D48] uppercase">
                DIVISION DEEP DIVE // SPEC {service.number}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-display font-black leading-tight tracking-tight uppercase"
            >
              {service.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* 2. SECTION 1: SERVICE OVERVIEW */}
      <section id="service-overview-section" className="py-16 sm:py-24 bg-white relative border-b border-stone-200">
        <div className="absolute inset-0 industrial-grid opacity-[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            
            {/* Left Column: Large sharp-edged build in progress asset with home-page design */}
            <div className="relative group w-full">
              {/* Thick Industrial Frame Accent with offset */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-industrial-black pointer-events-none translate-x-2 translate-y-2 hidden sm:block transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
              
              <div className="relative bg-industrial-black p-2 shadow-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/11]">
                <img
                  src={images.buildInProgress}
                  alt="Premier structural landmark build in progress"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-[#E11D48] text-white px-3.5 py-1.5 font-mono text-[9px] tracking-widest uppercase font-bold">
                  ZEKE STRUCTURAL FIELD EYE
                </div>
              </div>
            </div>

            {/* Right Column: Section description and details */}
            <div className="space-y-6">
              <span className="font-mono text-xs font-bold tracking-widest text-[#E11D48] uppercase font-bold">
                01 / SERVICE OVERVIEW
              </span>
              <h2 className="text-[30px] font-display font-black text-industrial-black uppercase tracking-tight leading-tight mt-1">
                Excellence in Architectural &amp; Structural Craft.
              </h2>
              <div className="w-12 h-1 bg-[#E11D48]" />
              
              <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
                <p className="font-bold text-industrial-black">
                  The "{service.title}" division delivers architectural excellence, structurally sound design-build execution, and geodetic safety parameters.
                </p>
                <p>
                  {service.description} We handle every stage of your project with high-grade engineering, direct material sourcing, and hands-on site management.
                </p>
              </div>

              {/* Dynamic list features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-stone-100">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 font-sans">
                    <Check className="w-4 h-4 text-industrial-red flex-shrink-0 mt-0.5" />
                    <span className="font-bold uppercase tracking-tight text-industrial-black text-[11px] leading-tight-none">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION 2: VALUE PROPOSITIONS & STRUCTURAL INTEGRITY */}
      <section id="service-value-prop-section" className="py-16 sm:py-24 bg-[#F8F9FA] relative border-b border-stone-200">
        <div className="absolute inset-0 industrial-grid opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            
            {/* Left Column: Proposition narrative and specifications */}
            <div className="space-y-6 lg:order-1 order-2">
              <span className="font-mono text-xs font-bold tracking-widest text-[#E11D48] uppercase font-bold">
                02 / WHY WE EXCEL
              </span>
              <h2 className="text-[30px] font-display font-black text-industrial-black uppercase tracking-tight leading-tight mt-1">
                Built to Last. <br />Down to Every Detail.
              </h2>
              <div className="w-12 h-1 bg-[#E11D48]" />
              
              <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
                <p>
                  We focus on quality designs, seismic resistance, and durable concrete hydration. We source building materials directly from certified mills to ensure complete transparent tracking. Our rigorous civil engineering procedures guarantee that your structures are fortified dynamically for lifelong durability.
                </p>
                <p className="border-l-4 border-[#E11D48] pl-4 py-2 bg-stone-100 text-stone-800 font-mono text-xs leading-relaxed uppercase">
                  "WE SECURE LIFELONG STRUCTURAL INTEGRITY BY COMMITTING TO ADVANCED CHEMICAL ANCHORING AND EXCELLENCE."
                </p>
              </div>

              {/* Specs boxes list */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white border border-stone-200 p-4 rounded-none">
                  <span className="block font-mono text-[9px] text-stone-400 font-bold uppercase tracking-widest">SOIL PROTOCOLS</span>
                  <span className="block text-xs font-black text-industrial-black uppercase mt-1">98% ASTM Proctor Compliant</span>
                </div>
                <div className="bg-white border border-stone-200 p-4 rounded-none">
                  <span className="block font-mono text-[9px] text-stone-400 font-bold uppercase tracking-widest">METALLURGY RATING</span>
                  <span className="block text-xs font-black text-[#E11D48] uppercase mt-1">Grade 60 Structural Steel</span>
                </div>
              </div>
            </div>

            {/* Right Column: Wide sharp landscape image placeholder with home-page design */}
            <div className="relative group w-full lg:order-2 order-1">
              {/* Behind Accent Block (Right aligned) */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#E11D48] pointer-events-none -translate-x-2 translate-y-2 hidden sm:block transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1" />
              
              <div className="relative bg-industrial-black p-2 shadow-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/11]">
                <img
                  src={images.rawFraming}
                  alt="Raw structural concrete framing and finishes"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-industrial-black text-white border border-white/10 px-3.5 py-1.5 font-mono text-[9px] tracking-widest uppercase font-bold">
                  RAW METRIC FABRICATION
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECTION 3: TECHNICAL CAPABILITIES STACK */}
      <section id="service-technical-stack" className="py-16 sm:py-24 bg-white relative border-b border-stone-200">
        <div className="absolute inset-0 industrial-grid opacity-[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Centralized Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="font-mono text-xs font-bold tracking-widest text-[#E11D48] uppercase font-bold">
              03 / TECHNICAL CAPABILITIES
            </span>
            <h2 className="text-[30px] font-display font-black text-industrial-black uppercase tracking-tight mt-2 text-center">
              One Team. Every Stage of Construction.
            </h2>
            <div className="w-12 h-1 bg-[#E11D48] mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch items-center">
            
            {/* Left Side (~40%): Vertical landscape image showing technical design / workflow with home-page design */}
            <div className="lg:col-span-5 relative group w-full lg:h-full flex flex-col">
              {/* Thick Industrial Frame Accent with offset */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-industrial-black pointer-events-none translate-x-2 translate-y-2 hidden sm:block transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
              
              <div className="relative bg-industrial-black p-2 shadow-2xl overflow-hidden lg:h-full lg:flex lg:flex-col lg:flex-1 h-auto aspect-[3/4] sm:aspect-[4/3] lg:aspect-auto">
                <img
                  src={images.technicalDesign}
                  alt="Structural blueprint and engineering site coordination"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto lg:h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105 group-hover:scale-105 lg:flex-grow lg:flex-1"
                />
                <div className="absolute bottom-4 right-4 bg-[#E11D48] text-white p-3 font-mono text-[9px] tracking-widest uppercase font-bold z-10">
                  BIM &amp; CAD COORDINATION ACTIVE
                </div>
              </div>
            </div>

            {/* Right Side (~60%): Technical capabilities horizontal list stacks */}
            <div className="lg:col-span-7 flex flex-col justify-between lg:h-full">
              {/* Rows index stack */}
              <div className="space-y-4 lg:space-y-0 lg:flex lg:flex-col lg:justify-between lg:h-full lg:gap-4 flex-grow">
                
                {/* Row 1 */}
                <div className="bg-stone-50 hover:bg-white border border-stone-200 hover:border-[#E11D48] p-6 sm:p-8 flex gap-5 transition-all duration-300 rounded-none shadow-sm group lg:flex-1 lg:flex lg:flex-col lg:justify-center">
                  <div className="flex gap-5">
                    <div className="font-display font-black text-2xl text-[#E11D48] font-extrabold flex-shrink-0">
                      01
                    </div>
                    <div>
                      <h4 className="font-display font-black text-sm sm:text-base text-zinc-900 uppercase tracking-wider mb-2">
                        Integrated Design-Build
                      </h4>
                      <p className="text-stone-500 text-xs sm:text-sm leading-relaxed font-sans">
                        We unify conceptual drafting with real engineering for immediate, coordinated CAD updates, eliminating field mismatch.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="bg-stone-50 hover:bg-white border border-stone-200 hover:border-[#E11D48] p-6 sm:p-8 flex gap-5 transition-all duration-300 rounded-none shadow-sm group lg:flex-1 lg:flex lg:flex-col lg:justify-center">
                  <div className="flex gap-5">
                    <div className="font-display font-black text-2xl text-[#E11D48] font-extrabold flex-shrink-0">
                      02
                    </div>
                    <div>
                      <h4 className="font-display font-black text-sm sm:text-base text-zinc-900 uppercase tracking-wider mb-2">
                        Personalized Craftsmanship &amp; Engineering
                      </h4>
                      <p className="text-stone-500 text-xs sm:text-sm leading-relaxed font-sans">
                        Reinforcement alignments are verified on-site by our expert geodetic surveyor teams for absolute precision.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="bg-stone-50 hover:bg-white border border-stone-200 hover:border-[#E11D48] p-6 sm:p-8 flex gap-5 transition-all duration-300 rounded-none shadow-sm group lg:flex-1 lg:flex lg:flex-col lg:justify-center">
                  <div className="flex gap-5">
                    <div className="font-display font-black text-2xl text-[#E11D48] font-extrabold flex-shrink-0">
                      03
                    </div>
                    <div>
                      <h4 className="font-display font-black text-sm sm:text-base text-zinc-900 uppercase tracking-wider mb-2">
                        Owner's Technical Representative
                      </h4>
                      <p className="text-stone-500 text-xs sm:text-sm leading-relaxed font-sans">
                        We handle every step of municipal permitting, LGU coordination, and structural clearances on your behalf.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SECTION 4: FIELD METHODOLOGIES & SAFETY STANDARDS */}
      <section id="service-standards-section" className="py-16 sm:py-24 bg-[#F8F9FA] relative border-b border-stone-200">
        <div className="absolute inset-0 industrial-grid opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            
            {/* Left Column: Operational standards description list */}
            <div className="space-y-6 lg:order-1 order-2">
              <span className="font-mono text-xs font-bold tracking-widest text-[#E11D48] uppercase font-bold">
                04 / OPERATIONAL STANDARDS
              </span>
              <h2 className="text-[30px] font-display font-black text-industrial-black uppercase tracking-tight leading-tight mt-1">
                Structural Shielding &amp; Safety Compliance.
              </h2>
              <div className="w-12 h-1 bg-[#E11D48]" />
              
              <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
                <p>
                  We maintain strict quality control following civil zoning codes and safety standards. Every foundation phase is tested sequentially before casting to verify maximum tension and compaction. By compiling verified soil compaction logs and inspecting metallurgy bonds, we secure seamless, flawless LGU compliance.
                </p>
                
                {/* Visual specifications highlights list */}
                <ul className="space-y-3 pt-2 text-stone-700 text-xs">
                  <li className="flex items-center gap-2 font-mono">
                    <span className="w-2 h-2 bg-[#E11D48]" />
                    <span>LGU BUILDING CLEARANCE ISSUED: 100% SUCCESS RATE</span>
                  </li>
                  <li className="flex items-center gap-2 font-mono">
                    <span className="w-2 h-2 bg-[#E11D48]" />
                    <span>SEISMIC CATEGORY ZONE 4 SPECS CERTIFIED</span>
                  </li>
                  <li className="flex items-center gap-2 font-mono">
                    <span className="w-2 h-2 bg-[#E11D48]" />
                    <span>CADASTRAL MAPPING &amp; TAX CLEARANCES VERIFIED</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Clean heavy landscape image from deployment with home-page design */}
            <div className="relative group w-full lg:order-2 order-1">
              {/* Thick Industrial Frame Accent with offset */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-industrial-black pointer-events-none -translate-x-2 translate-y-2 hidden sm:block transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1" />
              
              <div className="relative bg-industrial-black p-2 shadow-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/11]">
                <img
                  src={images.projectDeployment}
                  alt="Heavy industrial project deployment site"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-industrial-black text-white border border-white/10 px-3.5 py-1.5 font-mono text-[9px] tracking-widest uppercase font-bold">
                  MUNICIPAL CLEARANCE DEPLOYMENT
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SECTION 5: FEATURED PROJECTS GRID */}
      <section id="service-featured-projects" className="py-16 sm:py-24 bg-white relative border-b border-stone-200">
        <div className="absolute inset-0 industrial-grid opacity-[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Row: Title and arrow control navigation wrappers */}
          <div className="flex flex-col sm:flex-row items-end justify-between gap-4 mb-12 pb-6 border-b border-stone-100">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold tracking-widest text-[#E11D48] uppercase font-bold">
                SUCCESS RECORDS
              </span>
              <h3 className="text-[30px] font-display font-black text-industrial-black uppercase tracking-tight leading-none mt-1">
                Featured Projects
              </h3>
              <div className="w-12 h-1 bg-[#E11D48]" />
            </div>
            
            {/* Minimal circles navigation control wrappers */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrevProject}
                className="w-10 h-10 border-2 border-stone-200 hover:border-[#E11D48] hover:bg-[#E11D48] hover:text-white text-zinc-600 flex items-center justify-center transition-all duration-300 rounded-none focus:outline-none cursor-pointer"
                title="Previous Case Study"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextProject}
                className="w-10 h-10 border-2 border-stone-200 hover:border-[#E11D48] hover:bg-[#E11D48] hover:text-white text-zinc-600 flex items-center justify-center transition-all duration-300 rounded-none focus:outline-none cursor-pointer"
                title="Next Case Study"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Related articles layout grid (3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((proj, idx) => (
              <div 
                key={proj.id}
                id={`featured-proj-${proj.id}`}
                className="group bg-[#F4F5F6] border border-stone-200 hover:border-[#E11D48] transition-all duration-300 flex flex-col justify-between rounded-none overflow-hidden"
              >
                {/* Sharp Image container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-industrial-black text-white px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest">
                    {proj.category}
                  </div>
                </div>

                {/* Meta details card client */}
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="block font-mono text-[9px] text-[#E11D48] font-bold uppercase tracking-widest">
                      ACTIVE SPEC MATRIX // PHILIPPINES
                    </span>
                    <h4 className="font-display font-black text-lg text-industrial-black uppercase tracking-tight group-hover:text-[#E11D48] transition-colors leading-tight">
                      {proj.title}
                    </h4>
                    <p className="text-stone-500 text-xs leading-relaxed line-clamp-2">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                    <button
                      onClick={() => {
                        if (onSelectProject) {
                          onSelectProject(proj.id);
                        } else {
                          // Fallback to inquiry if selection handler not configured on current tree
                          onInquire(`${service.title} - ${proj.title}`);
                        }
                      }}
                      className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-industrial-black group-hover:text-[#E11D48] uppercase transition-colors focus:outline-none cursor-pointer"
                    >
                      <span>View Project Detail</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <span className="text-[10px] font-mono text-stone-300">ZK-REC: {proj.id.toUpperCase()}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>



      {/* 8. CTA / Call to Action closing block */}
      <section id="about-cta" className="py-24 bg-black text-white relative overflow-hidden border-t-2 border-industrial-red">
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
          
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tight text-white leading-none">
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
              id="about-cta-start"
              onClick={() => onInquire(service.title)}
              className="bg-industrial-red hover:bg-red-700 text-white font-display font-bold uppercase tracking-widest text-xs sm:text-sm py-4.5 px-10 transition-all duration-300 w-full sm:w-auto shadow-lg shadow-industrial-red/25 active:translate-y-[2px]"
            >
              Start Your Project
            </button>

            <button
              id="about-cta-portfolio"
              onClick={() => {
                if (onNavigate) {
                  onNavigate("portfolio");
                } else if (onSelectProject) {
                  onSelectProject("re-home-parcels");
                } else {
                  onBack();
                }
              }}
              className="bg-transparent hover:bg-white/5 text-stone-100 hover:text-white font-display font-bold uppercase tracking-widest text-xs sm:text-sm py-4.5 px-10 border border-zinc-700 hover:border-white transition-all duration-300 w-full sm:w-auto active:translate-y-[2px]"
            >
              View Our Portfolio
            </button>

          </div>

        </div>
      </section>

    </div>
  );
}
