import React, { useState } from "react";
import { motion } from "motion/react";
import ServiceDetailPage from "./ServiceDetailPage";
import {
  Compass,
  Map,
  HardHat,
  Hammer,
  Layers,
  Building,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Cpu
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  svgGraphic: React.ReactNode;
}

export default function ServicesPage({
  onNavigate,
  onInquire
}: {
  onNavigate: (section: string) => void;
  onInquire: () => void;
}) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: "planning-design",
      number: "01",
      title: "Planning and Design",
      description: "Comprehensive architectural drafting, structural planning, and interior layout optimization.",
      features: [
        "BIM 3D modeling & virtual walkthroughs",
        "Detailed CAD/Revit working documentation",
        "Zone 4 seismic calculation & wind shear blueprints"
      ],
      specs: [
        { label: "Execution Standard", value: "AIA / NBCP Compliance" },
        { label: "Turnaround Time", value: "3 - 5 Weeks Base" },
        { label: "Scale Capacity", value: "Up to 15 storeys" }
      ],
      svgGraphic: (
        <svg className="w-full h-full text-stone-300 group-hover:text-industrial-red/20 transition-all duration-500" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Grid lines */}
          <line x1="0" y1="20" x2="200" y2="20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,5" />
          <line x1="0" y1="60" x2="200" y2="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10,5" />
          <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,5" />
          <line x1="40" y1="0" x2="40" y2="120" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,5" />
          <line x1="100" y1="0" x2="100" y2="120" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10,5" />
          <line x1="160" y1="0" x2="160" y2="120" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,5" />
          {/* Blueprint shapes */}
          <circle cx="100" cy="60" r="35" stroke="currentColor" strokeWidth="1" />
          <rect x="70" y="40" width="60" height="40" stroke="currentColor" strokeWidth="1.5" />
          <line x1="60" y1="20" x2="140" y2="100" stroke="currentColor" strokeWidth="0.75" />
          <line x1="140" y1="20" x2="60" y2="100" stroke="currentColor" strokeWidth="0.75" />
          {/* Dimensions */}
          <text x="145" y="48" fill="currentColor" className="text-[7px] font-mono select-none">H: 4.80m</text>
          <text x="75" y="95" fill="currentColor" className="text-[7px] font-mono select-none">W: 6.00m</text>
        </svg>
      )
    },
    {
      id: "land-development",
      number: "02",
      title: "Land Development",
      description: "Strategic surveying, grading, site preparation, and civil engineering frameworks.",
      features: [
        "Geodetic boundary line identification",
        "Grade civil excavation & compaction verification",
        "Heavy dynamic soil compaction logs"
      ],
      specs: [
        { label: "Machinery Fleet", value: "Zeke Localized Fleet" },
        { label: "Soil Class Vetted", value: "Class A - E Subtypes" },
        { label: "Earthwork Rating", value: "100% Structural Safety" }
      ],
      svgGraphic: (
        <svg className="w-full h-full text-stone-300 group-hover:text-industrial-red/20 transition-all duration-500" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Contour Lines (Topography representation) */}
          <path d="M10,80 Q50,75 100,90 T190,80" stroke="currentColor" strokeWidth="1" />
          <path d="M10,60 Q60,50 110,70 T190,55" stroke="currentColor" strokeWidth="1" />
          <path d="M10,40 Q70,30 120,50 T190,30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" />
          {/* Slope marker and coordinate axis */}
          <line x1="20" y1="10" x2="20" y2="110" stroke="currentColor" strokeWidth="0.75" />
          <line x1="20" y1="110" x2="180" y2="110" stroke="currentColor" strokeWidth="0.75" />
          {/* Excavation sector box */}
          <rect x="75" y="55" width="50" height="30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4,2" />
          <path d="M75,55 L85,45 M125,55 L135,45" stroke="currentColor" strokeWidth="0.75" />
          <text x="85" y="52" fill="currentColor" className="text-[7px] font-mono select-none">Excavation Cut-Zone</text>
        </svg>
      )
    },
    {
      id: "construction",
      number: "03",
      title: "Construction",
      description: "Full-scale commercial, industrial, and premium residential structural execution.",
      features: [
        "ASTM structural metallurgy specification limits",
        "Inhouse geologists checking concrete hydration",
        "Advanced concrete moisture buffers & structural integrity panels"
      ],
      specs: [
        { label: "Seismic Strength", value: "Vibration Tolerant v8" },
        { label: "Steel Specification", value: "Grade 60 High-Tensile" },
        { label: "Inspection Gates", value: "7-Phase Structural Protocols" }
      ],
      svgGraphic: (
        <svg className="w-full h-full text-stone-300 group-hover:text-industrial-red/20 transition-all duration-500" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Steel Reinforcement cage lines */}
          <line x1="30" y1="15" x2="170" y2="15" stroke="currentColor" strokeWidth="1.5" />
          <line x1="30" y1="105" x2="170" y2="105" stroke="currentColor" strokeWidth="1.5" />
          {/* Vertical Rib Stirrups */}
          <rect x="45" y="15" width="8" height="90" stroke="currentColor" strokeWidth="1" />
          <rect x="70" y="15" width="8" height="90" stroke="currentColor" strokeWidth="1" />
          <rect x="95" y="15" width="8" height="90" stroke="currentColor" strokeWidth="1" />
          <rect x="120" y="15" width="8" height="90" stroke="currentColor" strokeWidth="1" />
          <rect x="145" y="15" width="8" height="90" stroke="currentColor" strokeWidth="1" />
          {/* Diagonal steel ties */}
          <line x1="45" y1="15" x2="70" y2="105" stroke="currentColor" strokeWidth="0.5" />
          <line x1="70" y1="15" x2="95" y2="105" stroke="currentColor" strokeWidth="0.5" />
          <line x1="95" y1="15" x2="120" y2="105" stroke="currentColor" strokeWidth="0.5" />
          <line x1="120" y1="15" x2="145" y2="105" stroke="currentColor" strokeWidth="0.5" />
          <text x="35" y="115" fill="currentColor" className="text-[7px] font-mono select-none">ASTM REBAR GRID T40</text>
        </svg>
      )
    },
    {
      id: "renovations",
      number: "04",
      title: "Renovations",
      description: "High-end modern modernizations, layout retrofitting, and structural updates for existing buildings.",
      features: [
        "Replacing failing structural wood columns with reinforced concrete",
        "Upgrading utility networks & acoustic dampening shields",
        "Modernist layout revisions with open spatial vistas"
      ],
      specs: [
        { label: "Retrofitting Code", value: "FEMA-356 Vetted Protocols" },
        { label: "Load Migration", value: "Temporary Structural Shoring" },
        { label: "Aesthetic Core", value: "Industrial Brutalist Modern" }
      ],
      svgGraphic: (
        <svg className="w-full h-full text-stone-300 group-hover:text-industrial-red/20 transition-all duration-500" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Divided comparison grid: Before & After */}
          <line x1="100" y1="0" x2="100" y2="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
          {/* Left: Classic frame */}
          <path d="M15,90 L45,40 L75,90 Z" stroke="currentColor" strokeWidth="1" />
          <line x1="25" y1="90" x2="25" y2="60" stroke="currentColor" strokeWidth="0.5" />
          <line x1="65" y1="90" x2="65" y2="60" stroke="currentColor" strokeWidth="0.5" />
          <text x="25" y="105" fill="currentColor" className="text-[7px] font-mono select-none">PRE-STAGE</text>
          {/* Right: Solid brutalist cantilever frame */}
          <rect x="115" y="35" width="60" height="55" stroke="currentColor" strokeWidth="1.5" />
          <rect x="135" y="20" width="55" height="15" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="115" y1="35" x2="175" y2="90" stroke="currentColor" strokeWidth="0.75" />
          <text x="120" y="105" fill="currentColor" className="text-[7px] font-mono select-none text-industrial-red font-bold">REINFORCED</text>
        </svg>
      )
    },
    {
      id: "extensions",
      number: "05",
      title: "Extensions",
      description: "Seamless structural add-ons, vertical expansions, and spatial footprint scaling.",
      features: [
        "Shear wall jointing simulation checks under wind forces",
        "Dynamic soil compaction updates near legacy foundation edges",
        "Aesthetic alignment rendering utilizing high-contrast timber & steel"
      ],
      specs: [
        { label: "Slab Integration", value: "Chemical Anchor Bolt Seals" },
        { label: "Load Limit Gate", value: "3D Finite Element Vetting" },
        { label: "Fissure Buffer", value: "Elastomeric Expandable Joints" }
      ],
      svgGraphic: (
        <svg className="w-full h-full text-stone-300 group-hover:text-industrial-red/20 transition-all duration-500" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Existing Building block */}
          <rect x="30" y="40" width="80" height="65" stroke="currentColor" strokeWidth="1.5" />
          <line x1="30" y1="55" x2="110" y2="55" stroke="currentColor" strokeWidth="0.75" />
          <line x1="30" y1="80" x2="110" y2="80" stroke="currentColor" strokeWidth="0.75" />
          {/* Expansion block with thick highlighted joint */}
          <rect x="115" y="25" width="55" height="80" stroke="currentColor" strokeWidth="2" strokeDasharray="3,1" />
          {/* Interaction joint arrows */}
          <line x1="111" y1="50" x2="114" y2="50" stroke="currentColor" strokeWidth="2" />
          <line x1="111" y1="80" x2="114" y2="80" stroke="currentColor" strokeWidth="2" />
          <text x="45" y="112" fill="currentColor" className="text-[7px] font-mono select-none">EXISTING CORE</text>
          <text x="122" y="112" fill="currentColor" className="text-[7px] font-mono select-none">EXTENSION SEC-B</text>
        </svg>
      )
    },
    {
      id: "realty",
      number: "06",
      title: "Realty & Brokerage",
      description: "Premium property acquisition, local market mapping, leasing, and streamlined legal processing.",
      features: [
        "Rigorous 3-tier cadastral title audit",
        "Tax assessment compliance updates secured",
        "Direct-to-buyer negotiation with registered brokers"
      ],
      specs: [
        { label: "Clearing Quality", value: "100% Warranted Titles" },
        { label: "Primary Focus", value: "High-Growth Luzon Corridors" },
        { label: "LGU Liaison", value: "Integrated Municipal Vetting" }
      ],
      svgGraphic: (
        <svg className="w-full h-full text-stone-300 group-hover:text-industrial-red/20 transition-all duration-500" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Real estate plot layout blueprint */}
          <rect x="25" y="15" width="150" height="90" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2,2" />
          {/* Plot divisions */}
          <path d="M70,15 L70,105" stroke="currentColor" strokeWidth="1" />
          <path d="M125,15 L125,105" stroke="currentColor" strokeWidth="1" />
          <path d="M25,60 L175,60" stroke="currentColor" strokeWidth="1.5" />
          {/* Specific highlighted parcel */}
          <rect x="25" y="15" width="45" height="45" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" />
          {/* Seal marker */}
          <circle cx="47" cy="37" r="10" stroke="currentColor" strokeWidth="1" />
          <text x="44" y="39" fill="currentColor" className="text-[6px] font-mono select-none">ZK</text>
          <text x="75" y="30" fill="currentColor" className="text-[7px] font-mono select-none">PLOT 02 - CLEAR</text>
          <text x="130" y="30" fill="currentColor" className="text-[7px] font-mono select-none">ROAD RIGHT OF WAY</text>
          <text x="30" y="112" fill="currentColor" className="text-[7px] font-mono select-none text-industrial-red font-bold">PARCEL 01 AUDITED</text>
        </svg>
      )
    },
    {
      id: "project-trading",
      number: "07",
      title: "Project Management & Trading",
      description: "Direct-to-mill structural steel procurement, high-grade aggregate sourcing, and single-contract budget custody.",
      features: [
        "Unifying site logs, permit clearances, and subteams seamlessly",
        "Direct trade supply chain saving clients substantial margins",
        "Real-time milestone tracking system with instant legal verification"
      ],
      specs: [
        { label: "Steel Partner", value: "Direct ISO-Certified Mills" },
        { label: "Pricing Advantage", value: "Zero Agency Margin Markups" },
        { label: "Milestone Contract", value: "Legally Locked Calendars" }
      ],
      svgGraphic: (
        <svg className="w-full h-full text-stone-300 group-hover:text-industrial-red/20 transition-all duration-500" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Gantt Project timeline metrics */}
          <line x1="20" y1="15" x2="20" y2="105" stroke="currentColor" strokeWidth="0.75" />
          <line x1="20" y1="105" x2="180" y2="105" stroke="currentColor" strokeWidth="0.75" />
          {/* Timeline tracks (Progress bars) */}
          <rect x="30" y="25" width="50" height="8" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
          <rect x="85" y="45" width="60" height="8" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
          <rect x="130" y="65" width="45" height="8" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
          {/* Dependency arrows */}
          <path d="M80,29 L82,29 L82,49 L84,49" stroke="currentColor" strokeWidth="1" />
          <path d="M145,49 L147,49 L147,69 L129,69" stroke="currentColor" strokeWidth="1" />
          <text x="32" y="21" fill="currentColor" className="text-[6px] font-mono select-none">PHASE 01: VETTING</text>
          <text x="87" y="41" fill="currentColor" className="text-[6px] font-mono select-none">PHASE 02: FOUNDATION</text>
          <text x="110" y="87" fill="currentColor" className="text-[6px] font-mono select-none">PM METRIC EFFICIENCY: 98.4%</text>
        </svg>
      )
    }
  ];

  const handleServiceInquiry = (serviceTitle: string) => {
    // Fill the contact form before navigating
    const messageTextarea = document.getElementById("message") as HTMLTextAreaElement;
    if (messageTextarea) {
      messageTextarea.value = `I am interested in acquiring structural service information regarding the "${serviceTitle}" capabilities. Please provide raw material metrics, pricing, and timing blueprints.`;
    }
    onInquire();
  };

  if (selectedService) {
    return (
      <ServiceDetailPage
        service={selectedService}
        onBack={() => {
          setSelectedService(null);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onInquire={(title) => {
          handleServiceInquiry(title);
        }}
        onSelectProject={(projectId) => {
          // Smooth scroll and shift viewport to portfolio section 
          onNavigate("portfolio");
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 100);
        }}
        onNavigate={onNavigate}
      />
    );
  }

  return (
    <div id="services-page-main" className="pt-20 bg-industrial-light text-industrial-black min-h-screen">
      
      {/* 1. HERO BANNER */}
      <section id="services-hero" className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center bg-industrial-black text-white overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/zeke_about_workflow_1781626977867.jpg"
            alt="Zeke workflow master construction site"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-industrial-black/85 to-industrial-black/55" />
          {/* Blueprint Grid Overlay */}
          <div className="absolute inset-0 industrial-grid-dark opacity-15 pointer-events-none" />
        </div>

        {/* Structural design corners */}
        <div className="absolute top-0 right-0 w-24 h-24 border-r-4 border-t-4 border-industrial-red/30 m-8 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-industrial-red/30 m-8 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-industrial-red/15 border-l-4 border-industrial-red px-3 py-1 mb-6"
            >
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#E11D48] uppercase">
                ENGINEERING EXECUTION blue-printing
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-7xl font-display font-black leading-tight tracking-tight uppercase"
            >
              WE DON'T JUST BUILD.<br />
              <span className="text-industrial-red">WE CRAFT</span> YOUR REALITY.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-zinc-300 text-sm sm:text-lg mt-6 max-w-3xl leading-relaxed border-l border-zinc-700 pl-4 font-sans"
            >
              Comprehensive realty, premium construction, and strategic land development engineered under one seamless framework.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap justify-center sm:justify-start gap-4"
            >
              <button
                id="services-hero-cta-primary"
                onClick={onInquire}
                className="bg-white hover:bg-[#E11D48] hover:text-white hover:border-industrial-red text-industrial-black border-2 border-white font-display font-black uppercase tracking-widest text-xs py-4 px-8.5 inline-flex items-center gap-2 transition-all duration-300 active:translate-y-[2px] cursor-pointer"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="services-hero-cta-secondary"
                onClick={() => {
                  const element = document.getElementById("services-core-grid");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/60 hover:border-white font-display font-bold uppercase tracking-widest text-xs py-4 px-8.5 inline-flex items-center gap-2 transition-all duration-300 active:translate-y-[2px] cursor-pointer"
              >
                View Services
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SECTION INTRODUCTION HEADER */}
      <section id="services-intro" className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-stone-200">
        <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            <span className="block font-mono text-xs font-bold tracking-widest text-industrial-red uppercase">
              OPERATIONAL HORIZONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-industrial-black tracking-tight uppercase leading-none">
              What We Build: One Team. <span className="text-industrial-red">Every Stage</span> of Construction.
            </h2>
            <div className="w-16 h-1 bg-industrial-red mt-2" />
            
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed tracking-wide pt-4 font-sans max-w-4xl">
              Zeke Realty and Construction Development entirely eliminates fragmented contracting by deploying a single integrated workflow across all development horizons.
              By unifying premium real estate acquisitions, geological preparation, structural drafting, and final handovers under one master engine, we secure complete timeline precision and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE CORE SERVICES GRID */}
      <section id="services-core-grid" className="py-20 lg:py-32 bg-industrial-light relative">
        <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => (
              <div
                key={item.id}
                id={`services-card-${item.id}`}
                className="group bg-white border border-stone-200 hover:border-industrial-red transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg rounded-none"
              >
                
                {/* TOP HALF: HIGH-CONTRAST GEOMETRIC SCHEMATIC ARCHITECTURAL OVERLAY */}
                <div className="relative h-44 sm:h-48 bg-stone-100 border-b border-stone-200/80 flex items-center justify-center overflow-hidden p-6">
                  {/* Subtle blueprint grid overlay background */}
                  <div className="absolute inset-0 industrial-grid opacity-60 pointer-events-none" />
                  
                  {/* SVG Blueprint Illustration */}
                  <div className="absolute inset-4 flex items-center justify-center">
                    {item.svgGraphic}
                  </div>

                  {/* Elegant floating corner metadata */}
                  <div className="absolute top-3 left-3 bg-industrial-black text-white px-2 py-0.5 font-mono text-[9px] tracking-widest uppercase">
                    SYS.CODE {item.number}
                  </div>
                  <div className="absolute top-3 right-3 text-zinc-400 font-mono text-[9px] tracking-widest uppercase font-bold group-hover:text-industrial-red">
                    ZK-DIV // 07
                  </div>
                </div>

                {/* BOTTOM HALF */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Header: Title + Big number */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-display font-black text-lg sm:text-xl text-industrial-black uppercase tracking-tight group-hover:text-industrial-red transition-colors">
                        {item.title}
                      </h3>
                      <span className="font-display font-black text-3xl text-stone-200 select-none tracking-tight group-hover:text-industrial-red/10 group-hover:scale-105 transition-all">
                        {item.number}
                      </span>
                    </div>

                    <p className="text-stone-500 text-xs sm:text-sm tracking-wide leading-relaxed mb-6 font-sans">
                      {item.description}
                    </p>

                    {/* Core Features list */}
                    <div className="border-t border-stone-100 pt-5 mb-6">
                      <span className="block font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-3">
                        CORE CAPABILITIES
                      </span>
                      <ul className="space-y-2">
                        {item.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start text-xs text-stone-700">
                            <span className="w-1.5 h-1.5 bg-industrial-red mr-2.5 mt-1.5 flex-shrink-0" />
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>


                  </div>

                  {/* Interactive Button */}
                  <div className="pt-2 space-y-2">
                    <button
                      id={`services-details-${item.id}`}
                      onClick={() => {
                        setSelectedService(item);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="w-full text-center bg-industrial-black text-white hover:bg-industrial-red border border-industrial-black hover:border-industrial-red font-mono font-bold text-xs uppercase tracking-widest py-3 transition-all duration-300 cursor-pointer"
                    >
                      View Specifications
                    </button>
                    
                    <button
                      id={`services-inquire-${item.id}`}
                      onClick={() => handleServiceInquiry(item.title)}
                      className="w-full text-center border border-stone-200 text-industrial-black hover:border-industrial-red hover:bg-[#E11D48]/10 hover:text-[#E11D48] font-mono font-bold text-xs uppercase tracking-widest py-3 transition-all duration-300 cursor-pointer"
                    >
                      Inquire Now
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. BOTTOM ENGAGEMENT CTA BLOCK */}
      <section id="services-bottom-cta" className="py-24 bg-black text-white relative overflow-hidden border-t-2 border-industrial-red">
        {/* Background Image structure with slow black-to-image fade effect */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/zeke_hero_1781624709150.jpg"
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
              id="services-bottom-cta-btn"
              onClick={onInquire}
              className="bg-industrial-red hover:bg-red-700 text-white font-display font-bold uppercase tracking-widest text-xs sm:text-sm py-4.5 px-10 transition-all duration-300 w-full sm:w-auto shadow-lg shadow-industrial-red/25 active:translate-y-[2px]"
            >
              Start Your Project
            </button>

            <button
              id="services-bottom-cta-portfolio"
              onClick={() => onNavigate("portfolio")}
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
