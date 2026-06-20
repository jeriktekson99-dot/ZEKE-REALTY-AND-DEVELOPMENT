import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Compass,
  Building,
  HardHat,
  Hammer,
  Layers,
  Scale,
  Percent,
  Warehouse,
  Users,
  Briefcase,
  PiggyBank,
  PhoneCall,
  Activity,
  ArrowRight,
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
  Wrench,
  Sparkles,
  Award
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  specs: string[];
}

export default function AboutPage({
  onNavigate,
  onInquire
}: {
  onNavigate: (section: string) => void;
  onInquire: () => void;
}) {
  const [activeSlide, setActiveSlide] = useState(0);

  const team: TeamMember[] = [
    {
      name: "Cathy Orquiola",
      role: "Project Director / Principal Architect",
      bio: "With over 14 years overseeing high-density commercial frameworks and custom brutalist estates, Cathy commands the design-build continuum at Zeke. She holds a Master's in Urban Design from UP and specializes in streamlining workflow mechanics, ensuring spatial plans merge peerlessly with steel structural calculations.",
      imageUrl: "/assets/images/zeke_team_cathy_1781627011645.jpg",
      specs: ["14+ Yrs Lead Architecture", "BIM Integration Master", "AIA Regional Panelist"]
    },
    {
      name: "Arch. Marcus Zeke",
      role: "Founder / Managing Director",
      bio: "Marcus founded Zeke with a simple, extreme conviction: eliminate contractor friction permanently. Armed with structural engineering and real estate qualifications, lockstep zoning knowledge, and deep capital expertise, he drives Zeke’s unified site formulation and acquisition strategies across Central Luzon.",
      imageUrl: "/assets/images/zeke_team_marcus_1781627029490.jpg",
      specs: ["Founder & Structural Dir.", "PRC Licensed Broker", "ASTM Metallurgy Advisor"]
    }
  ];

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % team.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + team.length) % team.length);
  };

  // 8 minimalistic capability items
  const capabilities = [
    {
      icon: <Compass className="w-6 h-6 text-industrial-red" />,
      title: "Residential Design",
      desc: "Architectural blueprints and custom concrete drafting optimized for regional micro-climates."
    },
    {
      icon: <Building className="w-6 h-6 text-industrial-red" />,
      title: "Commercial Development",
      desc: "Multi-tier structural frameworks engineered for accelerated spatial utilization and longevity."
    },
    {
      icon: <Layers className="w-6 h-6 text-industrial-red" />,
      title: "Structural Engineering",
      desc: "Advanced Zone 4 seismic stress simulations, wind shear analysis, and heavy grid math."
    },
    {
      icon: <Hammer className="w-6 h-6 text-industrial-red" />,
      title: "Premium Renovations",
      desc: "Replacing outdated historical columns with reinforced concrete, steel beams, and spatial layouts."
    },
    {
      icon: <Wrench className="w-6 h-6 text-industrial-red" />,
      title: "Structural Extensions",
      desc: "Expanding horizontal footprints and vertical load capacities with zero joint compromise."
    },
    {
      icon: <Activity className="w-6 h-6 text-industrial-red" />,
      title: "Industrial Trading",
      desc: "Direct-to-mill sourcing of ASTM structural steel and premium aggregate materials for clients."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-industrial-red" />,
      title: "Custom Steel Fabrications",
      desc: "Surgical CNC welding, structural plates, and pre-cast concrete block assemblies."
    },
    {
      icon: <Scale className="w-6 h-6 text-industrial-red" />,
      title: "Real Estate Management",
      desc: "Unlocking high-yield lands with title protection legal audits and land clearing contracts."
    }
  ];

  return (
    <div id="about-page-main" className="pt-20 bg-industrial-light text-industrial-black min-h-screen">
      
      {/* 1. HERO BANNER */}
      <section id="about-hero" className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center bg-industrial-black text-white overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/zeke_about_hero_1781626949346.jpg"
            alt="Zeke structural detailing"
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
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-industrial-red uppercase">
                AUTHENTIC QUALITY ASSURED
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
              className="text-zinc-300 text-sm sm:text-lg mt-6 max-w-2xl leading-relaxed italic border-l border-zinc-700 pl-4 font-sans"
            >
              "Behind every steel frame and cleared land title is a blueprint of absolute mechanical precision, zero-waste efficiency, and industrial excellence."
            </motion.p>

            {/* CTA Buttons Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 sm:items-center mt-8 justify-center sm:justify-start"
            >
              <button
                id="about-hero-inquire"
                onClick={() => onInquire()}
                className="bg-industrial-red hover:bg-red-700 text-white font-display font-bold uppercase tracking-wider text-xs sm:text-sm py-4 px-8 border border-transparent transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl shadow-industrial-red/20 active:translate-y-[2px] cursor-pointer"
              >
                Get Started Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                id="about-hero-portfolio"
                onClick={() => onNavigate("portfolio")}
                className="bg-transparent hover:bg-white/5 text-white font-display font-bold uppercase tracking-wider text-xs sm:text-sm py-4 px-8 border border-white/20 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 active:translate-y-[2px] cursor-pointer"
              >
                View Portfolio
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2a. BACKGROUND & HISTORY */}
      <section id="about-history" className="py-20 lg:py-32 relative bg-white overflow-hidden pb-10">
        <div className="absolute inset-0 industrial-grid opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch items-center">
            
            {/* Left Side: Heavy Typography & Info */}
            <div className="lg:col-span-6 space-y-6">
              <span className="block font-mono text-xs font-bold tracking-widest text-industrial-red uppercase">
                BACKGROUND & COMPANY HISTORY
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-industrial-black tracking-tight leading-none uppercase">
                Forging a Legacy.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-red to-red-800">
                  Bedrock
                </span>{" "}
                of Excellence.
              </h2>
              <div className="w-16 h-1 bg-industrial-red mt-2" />

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed tracking-wide pt-4 font-sans">
                At Zeke Realty and Construction Development, our legacy is built on uncompromising geodetic integrity and structural excellence. Established as a technical land surveyance and engineering advisory team, we recognized early on that high-capacity development requires a direct, vertical foundation.
              </p>
              
              <p className="text-stone-500 text-xs sm:text-sm leading-relaxed tracking-wide font-sans">
                Through years of deliberate physical asset accumulation, we expanded from mapping soil and securing property deeds to managing state-of-the-art crane towers, complex concrete batch facilities, and heavy earthmoving machines. This storied progression from a regional advisory team to a trusted design-build development partner ensures we deliver on every promise we sign.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  id="hwb-action-quote-history"
                  onClick={onInquire}
                  className="bg-industrial-red hover:bg-red-700 text-white font-display font-bold uppercase tracking-widest text-xs py-4 px-8 inline-flex items-center justify-center gap-2 transition-transform duration-200 active:translate-y-[2px]"
                >
                  Acquire Project Analysis
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Side: Historical crane and construction visual */}
            <div className="lg:col-span-6 relative lg:h-full flex flex-col">
              <div className="relative group lg:h-full lg:flex lg:flex-col lg:flex-1">
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-industrial-black hidden sm:block pointer-events-none transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                <div className="relative bg-industrial-black p-2 shadow-2xl lg:h-full lg:flex lg:flex-col lg:flex-1">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
                    alt="Zeke historical foundation of construction and heavy cranes"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto lg:h-full object-cover aspect-[4/3] lg:aspect-auto lg:flex-grow filter grayscale contrast-110"
                  />
                  <div className="absolute bottom-4 right-4 bg-industrial-red text-white py-1 px-3 text-[10px] font-mono font-bold uppercase tracking-wider">
                    ARCHIVE EST: 1998
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2b. HOW WE BUILD (OPERATIONAL PHYLUM) - Swapped Positions (Picture on left, info on right) */}
      <section id="how-we-build" className="py-20 lg:py-32 relative bg-white overflow-hidden pt-10">
        <div className="absolute inset-0 industrial-grid opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch items-center">
            
            {/* Left Side: Heavy workflow image */}
            <div className="lg:col-span-6 relative order-2 lg:order-1 lg:h-full flex flex-col">
              <div className="relative group lg:h-full lg:flex lg:flex-col lg:flex-1">
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-industrial-black hidden sm:block pointer-events-none transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                <div className="relative bg-industrial-black p-2 shadow-2xl lg:h-full lg:flex lg:flex-col lg:flex-1">
                  <img
                    src="/assets/images/zeke_about_workflow_1781626977867.jpg"
                    alt="Zeke active structural workflow environment"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto lg:h-full object-cover aspect-[4/3] lg:aspect-auto lg:flex-grow filter contrast-105"
                  />
                  <div className="absolute bottom-4 right-4 bg-industrial-red text-white py-1 px-3 text-[10px] font-mono font-bold uppercase tracking-wider">
                    FIELD LOG: QUEZON AREA
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Heavy Typography & Info */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2 lg:pl-6 animate-fadeIn">
              <span className="block font-mono text-xs font-bold tracking-widest text-industrial-red uppercase">
                OPERATIONAL PHYLUM
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-industrial-black tracking-tight leading-none uppercase">
                Driven by Ownership.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-red to-red-800">
                  Engineered
                </span>{" "}
                for Possibility.
              </h2>
              <div className="w-16 h-1 bg-industrial-red mt-2" />

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed tracking-wide pt-4 font-sans">
                At Zeke Realty and Construction Development, we abandoned the chaotic general brokerage model. Instead of leasing drilling machinery and hiring external sub-contractor networks who inflate budgets, we maintain our own localized fleet of backhoes, grading tools, and raw material warehouses.
              </p>
              
              <p className="text-stone-500 text-xs sm:text-sm leading-relaxed tracking-wide font-sans">
                This physical asset strategy allows us to coordinate layout variables directly. While other brokers send you to secondary engineers to fix foundation mismatch issues, our in-house geologists verify structural soil bounds beforehand. We provide a single point of contract billing and unceasing legal monitoring for every property in our custody.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  id="hwb-action-quote"
                  onClick={onInquire}
                  className="bg-industrial-red hover:bg-red-700 text-white font-display font-bold uppercase tracking-widest text-xs py-4 px-8 inline-flex items-center justify-center gap-2 transition-transform duration-200 active:translate-y-[2px]"
                >
                  Acquire Project Analysis
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHAT WE BUILD (4x2 Grid of minimalistic badges) */}
      <section id="what-we-build" className="py-20 lg:py-28 bg-industrial-light border-t border-b border-stone-200 relative">
        <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="block font-mono text-xs font-bold tracking-widest text-industrial-red uppercase mb-2">
              REALITY SPECIFICATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-industrial-black uppercase tracking-tight">
              SPECIFICATION SERVICES matrix
            </h2>
            <div className="w-16 h-1 bg-industrial-red mt-3" />
          </div>

          {/* 4x2 matrix grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((it, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200 hover:border-industrial-red p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-md group"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="w-12 h-12 bg-industrial-light border border-stone-200 flex items-center justify-center mb-6 group-hover:bg-industrial-black group-hover:text-white transition-colors duration-300">
                    {it.icon}
                  </div>
                  <h3 className="font-display font-black text-sm sm:text-base text-industrial-black uppercase tracking-wider mb-2 group-hover:text-industrial-red transition-colors">
                    {it.title}
                  </h3>
                  <p className="text-stone-500 text-xs sm:text-sm tracking-wide leading-relaxed">
                    {it.desc}
                  </p>
                </div>
                {/* Structural link indicator */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex justify-end">
                  <span className="text-[10px] font-mono text-zinc-400 group-hover:text-industrial-red font-bold transition-colors">
                    ZK-DIV {idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. BUILD BY IMPACT STATS DISPLAY (3x2 White Cards) */}
      <section id="build-by-impact" className="py-20 lg:py-32 bg-white relative">
        <div className="absolute inset-0 industrial-grid opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <span className="block font-mono text-xs font-bold tracking-widest text-industrial-red uppercase mb-2">
              QUANTIFIABLE STANDARDS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-industrial-black uppercase tracking-tight">
              BUILD BY IMPACT LOGISTICS
            </h2>
            <div className="w-16 h-1 bg-industrial-red mx-auto mt-3" />
          </div>

          {/* 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-industrial-light border border-stone-200 p-8 shadow-sm hover:shadow-md transition-all border-t-4 border-t-industrial-red">
              <span className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                CONTRACTUAL FIDELITY
              </span>
              <div className="font-display font-black text-5xl sm:text-6xl text-industrial-black tracking-tighter uppercase leading-none my-2">
                100%
              </div>
              <h4 className="font-display font-bold text-xs sm:text-sm text-stone-700 uppercase tracking-wider">
                Projects Delivered On-Time
              </h4>
              <p className="text-stone-500 text-xs mt-3 leading-relaxed">
                We lock delivery milestones into legally bound smart calendars. Zero deferred deadlines, 100% contractual compliance.
              </p>
            </div>

            <div className="bg-industrial-light border border-stone-200 p-8 shadow-sm hover:shadow-md transition-all border-t-4 border-t-industrial-red">
              <span className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                COVERED METERS
              </span>
              <div className="font-display font-black text-5xl sm:text-6xl text-industrial-black tracking-tighter uppercase leading-none my-2">
                5.5K+
              </div>
              <h4 className="font-display font-bold text-xs sm:text-sm text-stone-700 uppercase tracking-wider">
                Total Covered Square Meters
              </h4>
              <p className="text-stone-500 text-xs mt-3 leading-relaxed">
                Over five thousand meters of robust structural foundations, structural layouts, and high-tensile wall grids certified.
              </p>
            </div>

            <div className="bg-industrial-light border border-stone-200 p-8 shadow-sm hover:shadow-md transition-all border-t-4 border-t-industrial-red">
              <span className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                TALENT INTEGRATION
              </span>
              <div className="font-display font-black text-5xl sm:text-6xl text-industrial-black tracking-tighter uppercase leading-none my-2">
                20+
              </div>
              <h4 className="font-display font-bold text-xs sm:text-sm text-stone-700 uppercase tracking-wider">
                In-House Structural Experts
              </h4>
              <p className="text-stone-500 text-xs mt-3 leading-relaxed">
                A physical cadre of licensed geo-technicians, geodetic surveyors, general masons, and contract attorneys.
              </p>
            </div>

            <div className="bg-industrial-light border border-stone-200 p-8 shadow-sm hover:shadow-md transition-all border-t-4 border-t-industrial-red">
              <span className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                ESCROW VALUATION
              </span>
              <div className="font-display font-black text-4xl sm:text-5xl text-industrial-black tracking-tighter uppercase leading-none my-2">
                ₱9.9B+
              </div>
              <h4 className="font-display font-bold text-xs sm:text-sm text-stone-700 uppercase tracking-wider">
                Total Managed Project Valuation
              </h4>
              <p className="text-stone-500 text-xs mt-3 leading-relaxed">
                Demonstrated fiscal capacity to absorb, insure, and execute heavy infrastructural developments sustainably.
              </p>
            </div>

            <div className="bg-industrial-light border border-stone-200 p-8 shadow-sm hover:shadow-md transition-all border-t-4 border-t-industrial-red">
              <span className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                FISCAL OPTIMIZATION
              </span>
              <div className="font-display font-black text-4xl sm:text-5xl text-industrial-black tracking-tighter uppercase leading-none my-2">
                ₱9.4M
              </div>
              <h4 className="font-display font-bold text-xs sm:text-sm text-stone-700 uppercase tracking-wider">
                Average Project Materials Optimization Saved
              </h4>
              <p className="text-stone-500 text-xs mt-3 leading-relaxed">
                By purchasing bulk-grade metallurgical items and utilizing internal geodetic assets, we lower costs significantly for our clients.
              </p>
            </div>

            <div className="bg-industrial-light border border-stone-200 p-8 shadow-sm hover:shadow-md transition-all border-t-4 border-t-industrial-red">
              <span className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                COMPREHENSIVE OUTREACH
              </span>
              <div className="font-display font-black text-4xl sm:text-5xl text-industrial-black tracking-tighter uppercase leading-none my-2">
                1700+
              </div>
              <h4 className="font-display font-bold text-xs sm:text-sm text-stone-700 uppercase tracking-wider">
                Real Estate &amp; Structural Consultations
              </h4>
              <p className="text-stone-500 text-xs mt-3 leading-relaxed">
                Helping landowners map boundary scopes, resolve title encumbrances, and secure residential-to-commercial permits.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. MISSION AND VISION (2 large content cards side-by-side) */}
      <section id="mission-vision" className="py-20 lg:py-32 bg-industrial-light border-t border-b border-stone-200 relative">
        <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Mission Card */}
            <div className="bg-industrial-black text-white p-8 sm:p-14 border-l-4 border-industrial-red shadow-2xl flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-industrial-red tracking-widest block mb-4">
                  01 / OUR MISSION
                </span>
                <h3 className="text-2xl sm:text-4xl font-display font-black uppercase tracking-tight text-white mb-6 leading-tight">
                  One Team. Every Stage <br />of Construction.
                </h3>
                <div className="w-12 h-1 bg-white mb-8" />
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed tracking-wide">
                  To provide absolute structural security and realty transparency under one roof. Our mission is to entirely dismantle the friction and fragmentation of modern real estate and construction. By combining land vetting, zoning audits, engineering, and master material logistics under one highly trained team, we deliver completed architectural icons with bulletproof structural safety.
                </p>
              </div>
              <div className="text-stone-500 font-mono text-[10px] tracking-widest mt-12 uppercase">
                ✦ INTEGRITY • COHESION • PERFORMANCE ✦
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white text-industrial-black p-8 sm:p-14 border-l-4 border-industrial-black shadow-lg flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-industrial-red tracking-widest block mb-4">
                  02 / OUR VISION
                </span>
                <h3 className="text-2xl sm:text-4xl font-display font-black uppercase tracking-tight text-zinc-900 mb-6 leading-tight">
                  Shaping Modern <br />Landscapes.
                </h3>
                <div className="w-12 h-1 bg-industrial-black mb-8" />
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed tracking-wide">
                  To become the nation's premier benchmark for bold, durable, and highly integrated build solutions. We envision a landscape defined by unyielding structural integrity where dream residences and complexes are constructed cleanly without hidden contractors, fees, or timeline delays. We aim to inspire a return to robust engineering honesty and design with bold, modernistic longevity.
                </p>
              </div>
              <div className="text-stone-400 font-mono text-[10px] tracking-widest mt-12 uppercase">
                ✦ INNOVATION • FORESIGHT • LEADERSHIP ✦
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. OUR CORE VALUES (Asymmetrical value blocks) */}
      <section id="about-values" className="py-20 lg:py-32 bg-white relative">
        <div className="absolute inset-0 industrial-grid opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch items-center">
            
            {/* Left Side: Striking Vertical Image */}
            <div className="lg:col-span-5 relative lg:h-full flex flex-col">
              <div className="relative group lg:h-full lg:flex lg:flex-col lg:flex-1">
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-industrial-red hidden sm:block pointer-events-none transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                <div className="relative bg-industrial-black p-2 shadow-2xl lg:h-full lg:flex lg:flex-col lg:flex-1">
                  <img
                    src="/assets/images/zeke_about_values_1781626995702.jpg"
                    alt="Zeke structural details values"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto lg:h-full object-cover aspect-[3/4] lg:aspect-auto lg:flex-grow filter contrast-105"
                  />
                  <div className="absolute top-4 left-4 bg-industrial-black/95 text-white py-1 px-3 border border-white/10 text-[10px] font-mono tracking-widest uppercase">
                    ENGINEERING CODE: Z-29
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Cleanly stacked horizontal values */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              
              <div className="relative mb-8">
                <span className="block font-mono text-xs font-bold tracking-widest text-industrial-red uppercase mb-2">
                  OUR CONSTITUTION
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-black text-industrial-black uppercase tracking-tight">
                  OUR CORE OPERATIONAL VALUES
                </h2>
              </div>

              {/* Value Block 1 */}
              <div className="bg-industrial-light border border-stone-200 hover:border-industrial-red p-6 sm:p-8 flex gap-5 transition-all">
                <div className="font-display font-black text-2xl text-industrial-red font-extrabold">
                  01
                </div>
                <div>
                  <h4 className="font-display font-black text-sm sm:text-base text-zinc-900 uppercase tracking-wider mb-2">
                    Integrated Design-Build System (Efficiency)
                  </h4>
                  <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
                    By merging master architects, geologists, and general masons into a locked workflow, we eliminate coordination waste and deliver properties ahead of scheduling with extreme finish quality.
                  </p>
                </div>
              </div>

              {/* Value Block 2 */}
              <div className="bg-industrial-light border border-stone-200 hover:border-industrial-red p-6 sm:p-8 flex gap-5 transition-all">
                <div className="font-display font-black text-2xl text-industrial-red font-extrabold">
                  02
                </div>
                <div>
                  <h4 className="font-display font-black text-sm sm:text-base text-zinc-900 uppercase tracking-wider mb-2">
                    Absolute Transparency &amp; Accountability (Integrity)
                  </h4>
                  <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
                    We hate hidden markups. We provide fully cataloged material journals detailing exact weights and mill certifications. We stand by single escrow accountability.
                  </p>
                </div>
              </div>

              {/* Value Block 3 */}
              <div className="bg-industrial-light border border-stone-200 hover:border-industrial-red p-6 sm:p-8 flex gap-5 transition-all">
                <div className="font-display font-black text-2xl text-industrial-red font-extrabold">
                  03
                </div>
                <div>
                  <h4 className="font-display font-black text-sm sm:text-base text-zinc-900 uppercase tracking-wider mb-2">
                    Future-Proof Structural Engineering (Innovation)
                  </h4>
                  <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
                    We never cut corners on metallurgical standards. Every structure carries Zone 4 seismic resilience buffers and smart structural insulation matrices designed to persist safely for generations.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. BEHIND THE TEAM (Profile slider / carousel) */}
      <section id="behind-the-team" className="py-20 lg:py-32 bg-industrial-light border-t border-b border-stone-200 relative">
        <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mb-16">
            <span className="block font-mono text-xs font-bold tracking-widest text-industrial-red uppercase mb-2">
              EXECUTIVE COMPLIANCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-industrial-black uppercase tracking-tight">
              BEHIND THE EXECUTIVE SCHEMES
            </h2>
            <div className="w-16 h-1 bg-industrial-red mt-3" />
          </div>

          {/* Interactive Slide box container */}
          <div id="team-slider-container" className="bg-white border border-stone-200 p-6 sm:p-10 shadow-xl relative">
            <div className="absolute top-0 left-0 w-12 h-1 bg-industrial-red" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Slider Left side: text bios */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="font-mono text-[10px] text-industrial-red font-bold uppercase tracking-widest border border-industrial-red/20 px-2 py-0.5 rounded-none inline-block mb-3">
                    {team[activeSlide].role}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-4xl text-zinc-900 uppercase tracking-tight">
                    {team[activeSlide].name}
                  </h3>
                </div>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed tracking-wide italic">
                  "{team[activeSlide].bio}"
                </p>

                {/* Micro tech credentials specs */}
                <div>
                  <span className="block font-mono text-[9px] text-zinc-400 uppercase tracking-widest mb-3">
                    Audit Credentials
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {team[activeSlide].specs.map((spec, idx) => (
                      <span
                        key={idx}
                        className="bg-industrial-light border border-stone-200 text-stone-700 text-[10px] font-mono tracking-wider px-3 py-1 uppercase"
                      >
                        ✦ {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Slide Nav buttons */}
                <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex gap-2">
                    <button
                      id="team-prev-btn"
                      onClick={handlePrevSlide}
                      className="bg-industrial-light hover:bg-industrial-black hover:text-white text-industrial-black border border-stone-200 p-2.5 transition-colors focus:outline-none"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      id="team-next-btn"
                      onClick={handleNextSlide}
                      className="bg-industrial-light hover:bg-industrial-black hover:text-white text-industrial-black border border-stone-200 p-2.5 transition-colors focus:outline-none"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Indicators dots */}
                  <div className="flex space-x-1.5">
                    {team.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={`w-5 h-1 transition-all ${
                          activeSlide === i ? "bg-industrial-red" : "bg-stone-200 hover:bg-stone-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

              </div>

              {/* Slider Right half: professional headshot portrait */}
              <div className="lg:col-span-5 relative">
                <div className="relative bg-industrial-light p-1 border border-stone-200 shadow-sm overflow-hidden aspect-square">
                  <img
                    src={team[activeSlide].imageUrl}
                    alt={team[activeSlide].name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Absolute signature border tag */}
                  <div className="absolute top-0 right-0 bg-industrial-red text-white py-1.5 px-4 font-mono font-bold text-[9px] tracking-widest uppercase">
                    ZEKE EXEC COMPLIANT
                  </div>
                </div>
              </div>

            </div>

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
              id="about-cta-start"
              onClick={onInquire}
              className="bg-industrial-red hover:bg-red-700 text-white font-display font-bold uppercase tracking-widest text-xs sm:text-sm py-4.5 px-10 transition-all duration-300 w-full sm:w-auto shadow-lg shadow-industrial-red/25 active:translate-y-[2px]"
            >
              Start Your Project
            </button>

            <button
              id="about-cta-portfolio"
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
