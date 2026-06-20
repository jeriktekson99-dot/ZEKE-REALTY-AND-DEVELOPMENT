import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  Send,
  CheckCircle,
  ShieldAlert
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function GetStartedPage({
  onNavigate,
  onInquire
}: {
  onNavigate: (section: string) => void;
  onInquire: () => void;
}) {
  // FAQ state
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Form submission state - precisely duplicated from ContactSection.tsx
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "construction",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Simple robust validation
    if (!formData.name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg("Please provide some specifications regarding your project.");
      return;
    }

    setIsSubmitting(true);

    // Simulate real high-speed API route proxy dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 350, behavior: "smooth" });
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      projectType: "construction",
      message: ""
    });
    setIsSubmitted(false);
  };

  // FAQs from Blueprint
  const faqs: FAQItem[] = [
    {
      question: "What is the typical timeline from initial planning and design to actual construction deployment?",
      answer: "Typically, the pre-construction phase takes 4 to 8 weeks. This critical period covers schematic concept design, geological soil analysis, structural calculation drafts, geodetic title validations, and securing the necessary Local Government Unit (LGU) building permits. Actual ground deployment initiates immediately upon municipal permit release."
    },
    {
      question: "Do you handle both land acquisition/realty matching and structural building under one contract?",
      answer: "Yes. Zeke offers a highly optimized, single-escrow Design-Build contract. Our in-house licensed geodetic engineers and real estate attorneys handle direct title verification, cadastral boundary alignment checks, and acquisition escrow, which flows seamlessly into structural design and engineering under one cohesive program."
    },
    {
      question: "How does Zeke ensure material cost optimization and structural transparency during a build?",
      answer: "We mandate strict client transparency frameworks. Every active site is scanned weekly using autonomous UAV path sweeps via our DroneDeploy integration. Clients receive instant access to direct 3D orthomosaic models, volume compaction metrics, and live material tracking. No hidden markups or sub-contracting layers are introduced."
    },
    {
      question: "What regions or provinces do your realty and construction teams currently service?",
      answer: "Our core teams are fully deployed across Metro Manila, Cavite (including high-slope Tagaytay corridors), Laguna (industrial logistics zones), and select premium growth corridors in Batangas. This geographical density ensures our operations managers can inspect every active site daily."
    },
    {
      question: "Can I request a renovation or extension on a pre-existing structure not built by Zeke?",
      answer: "Absolutely. However, we require a comprehensive, non-destructive materials test of the existing support frame (including concrete core compression tests and steel joint integrity verification) before drafting any remodeling blueprints to guarantee structural compliance with Seismic Zone 4 standards."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="get-started-page" className="pt-20 bg-[#F4F5F6] text-industrial-black min-h-screen">
      
      {/* 1. HERO BANNER */}
      <section id="get-started-hero" className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center bg-industrial-black text-white overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/zeke_solution_1781624797540.jpg"
            alt="Zeke solution construction design"
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-industrial-red/15 border-l-4 border-industrial-red px-3 py-1 mb-6"
            >
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-industrial-red uppercase">
                CONSTRUCTION INITIATION PROTOCOL
              </span>
            </motion.div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-display font-black leading-none tracking-tight uppercase">
              READY TO BUILD?<br />
              <span className="text-industrial-red">LET'S DESIGN</span> YOUR REALITY.
            </h1>
            <p className="text-zinc-400 text-sm sm:text-lg mt-6 max-w-2xl leading-relaxed border-l border-zinc-700 pl-4 font-sans">
              Take the first step toward your next premium development, architectural masterpiece, or real estate acquisition. Submit your technical requirements below to generate a workspace blueprint.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE DUPLICATED SPLIT SECTION (LIGHT BACKGROUND) */}
      <section id="intake-split-section" className="relative bg-[#F4F5F6] text-industrial-black py-20 lg:py-32 overflow-hidden">
        {/* Background blueprint grids - light version */}
        <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />

        {/* Decorative metal support girder visual accent */}
        <div className="absolute left-0 bottom-0 top-0 w-1 bg-gradient-to-b from-industrial-red to-red-800" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* LEFT COLUMN: Large Typography Title & Office Contact Details (Duplicate from Home page with light colors) */}
            <div className="lg:col-span-5 flex flex-col justify-start lg:space-y-6 space-y-5">
              <div>
                <span className="block font-mono text-xs font-bold tracking-widest text-industrial-red uppercase mb-4">
                  COMMISSION AN AUDIT
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tight leading-none mb-8 text-industrial-black">
                  YOUR PROJECT <br />
                  STARTS{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-red to-red-500 font-display font-black">
                    HERE.
                  </span>
                </h2>
                <div className="w-16 h-1 bg-industrial-red mb-6" />
                <p className="text-stone-600 text-sm sm:text-base font-sans tracking-wide leading-relaxed mb-4">
                  Please transmit your project data, soil type, or realty requirements below. Our engineering and legal division leads will analyze your scope immediately.
                </p>
              </div>

              {/* Structured Contact Details Panel */}
              <div className="space-y-8">
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-white border border-stone-200 shadow-sm p-3.5 text-industrial-red">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] font-bold text-stone-500 uppercase tracking-widest leading-none mb-2">
                      HOTLINES
                    </h4>
                    <a 
                      href="tel:+639068374150"
                      className="font-display font-black text-sm sm:text-base text-industrial-black tracking-wider hover:text-industrial-red transition-colors block"
                    >
                      0906 837 4150
                    </a>
                    <p className="text-xs text-stone-600 mt-1">
                      Direct Corporate Mobile Hotline
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-white border border-stone-200 shadow-sm p-3.5 text-industrial-red">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] font-bold text-stone-500 uppercase tracking-widest leading-none mb-2">
                      TECHNICAL &amp; SALES INQUIRIES
                    </h4>
                    <a 
                      href="mailto:zekerealty.constdev@gmail.com" 
                      className="font-display font-black text-sm sm:text-base text-industrial-black tracking-wider hover:text-industrial-red transition-colors block break-all"
                    >
                      zekerealty.constdev@gmail.com
                    </a>
                    <p className="text-xs text-stone-600 mt-1">
                      Response Guaranteed in &lt; 2 Hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-white border border-stone-200 shadow-sm p-3.5 text-industrial-red">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] font-bold text-stone-500 uppercase tracking-widest leading-none mb-2">
                      CORPORATE HEADQUARTERS
                    </h4>
                    <p className="text-industrial-black text-xs sm:text-sm font-sans tracking-wide leading-relaxed">
                      Blk. 20 Lot 3 The Villas at Dasmariñas Highlands<br />
                      Dasmariñas City, Dasmariñas City, 4114 Cavite
                    </p>
                  </div>
                </div>

              </div>

              {/* Compliance footnote */}
              <div className="pt-6 border-t border-stone-200 text-[10px] font-mono text-stone-500 tracking-wider uppercase leading-relaxed">
                SEC REGISTRATION: CS202619043 • PRC ACCREDITED CONTRACTOR
              </div>
            </div>

            {/* RIGHT COLUMN: High-Efficiency Contact Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-stone-200 shadow-sm p-8 sm:p-12 relative overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-[2px] bg-industrial-red" />
                <div className="absolute top-0 right-0 w-[2px] h-16 bg-industrial-red" />

                <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-wider text-industrial-black mb-8">
                  PROJECT ENGAGEMENT PORTAL
                </h3>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    /* Dynamic Submission Success Block with deep visual polish (light variant) */
                    <motion.div 
                      key="form-success-alert"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-stone-50 border-l-4 border-industrial-red p-6 sm:p-8 space-y-6"
                    >
                      <div className="flex items-start gap-4">
                        <CheckCircle className="w-8 h-8 text-industrial-red flex-shrink-0" />
                        <div>
                          <h4 className="font-display font-black text-base uppercase tracking-wider text-industrial-black">
                            TRANSMISSION SUCCESSFUL
                          </h4>
                          <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">
                            Thank you, <span className="text-industrial-black font-bold">{formData.name}</span>! Your project logs have been registered inside our ticketing queue under tracking block <span className="text-industrial-red font-bold font-mono">ZK-2026-{(Math.random() * 10000).toFixed(0)}</span>.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white p-4 border border-stone-200 rounded-none overflow-hidden">
                        <span className="block font-mono text-[9px] text-stone-400 uppercase tracking-widest">SUMMARY OF SCOPE SENT</span>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                          <div>
                            <span className="block text-[10px] text-stone-500">Project Sector:</span>
                            <span className="block text-xs font-bold uppercase text-industrial-black font-mono">{formData.projectType}</span>
                          </div>
                          <div>
                            <span className="block text-[10px] text-stone-500">Response ETA:</span>
                            <span className="block text-xs font-bold text-industrial-red">Under 2 Hours</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-stone-500 leading-relaxed font-sans">
                        An in-house structural engineer or reality catalog coordinator will phone or dispatch an email directly to <span className="text-stone-700 font-semibold">{formData.email}</span>.
                      </p>

                      <button
                        onClick={resetForm}
                        className="w-full bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-300 font-display font-bold uppercase text-xs tracking-widest py-3 text-center transition-all duration-200 cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                    </motion.div>
                  ) : (
                    /* Actual Form (Light variant) */
                    <motion.form 
                      key="zeke-contact-form"
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      
                      {errorMsg && (
                        <div id="form-error-banner" className="bg-red-50 border border-industrial-red/50 p-4 flex items-center gap-3 text-industrial-red text-xs font-semibold">
                          <ShieldAlert className="w-5 h-5 text-industrial-red flex-shrink-0" />
                          <span>{errorMsg}</span>
                        </div>
                      )}

                      {/* Input Name */}
                      <div>
                        <label htmlFor="contact-name" className="block font-mono text-[10px] font-bold text-stone-600 uppercase tracking-widest mb-2">
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Director Carlos Valenzuela"
                          className="w-full bg-stone-50 border border-stone-300 hover:border-industrial-red focus:border-industrial-red focus:ring-1 focus:ring-industrial-red text-industrial-black py-3.5 px-4 text-sm focus:outline-none font-sans transition-all"
                        />
                      </div>

                      {/* Input Email */}
                      <div>
                        <label htmlFor="contact-email" className="block font-mono text-[10px] font-bold text-stone-600 uppercase tracking-widest mb-2">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. valenzuela@corp.com"
                          className="w-full bg-stone-50 border border-stone-300 hover:border-industrial-red focus:border-industrial-red focus:ring-1 focus:ring-industrial-red text-industrial-black py-3.5 px-4 text-sm focus:outline-none font-sans transition-all"
                        />
                      </div>

                      {/* Dropdown Project Type */}
                      <div>
                        <label htmlFor="contact-project-type" className="block font-mono text-[10px] font-bold text-stone-600 uppercase tracking-widest mb-2">
                          Project Type / Division *
                        </label>
                        <div className="relative">
                          <select
                            id="contact-project-type"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            className="w-full bg-stone-50 border border-stone-300 hover:border-industrial-red focus:border-industrial-red focus:ring-1 focus:ring-industrial-red text-industrial-black py-3.5 px-4 text-sm focus:outline-none font-sans transition-all appearance-none cursor-pointer"
                          >
                            <option value="planning">Planning and Design</option>
                            <option value="land">Land Development</option>
                            <option value="construction">General High-Rise Construction</option>
                            <option value="renovations">Structural Renovations</option>
                            <option value="extensions">Extensions &amp; Vertical Expansion</option>
                            <option value="realty">Realty Listing purchase / Selling</option>
                          </select>
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-stone-500 text-xs">
                            ▼
                          </div>
                        </div>
                      </div>

                      {/* Textarea message constraints */}
                      <div>
                        <label htmlFor="contact-message" className="block font-mono text-[10px] font-bold text-stone-600 uppercase tracking-widest mb-2">
                          Project Scope &amp; Site Location *
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="List key specifications, soil type, estimated timeframe, location parameters, or target realty property..."
                          className="w-full bg-stone-50 border border-stone-300 hover:border-industrial-red focus:border-industrial-red focus:ring-1 focus:ring-industrial-red text-industrial-black py-3.5 px-4 text-sm focus:outline-none font-sans transition-all resize-none"
                        />
                      </div>

                      {/* Submission triggers */}
                      <div className="pt-2">
                        <button
                          id="submit-contact-form"
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-industrial-red hover:bg-[#111111] disabled:bg-stone-300 text-white py-4 px-6 font-display font-black uppercase tracking-widest text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-all duration-300 pointer-events-auto active:translate-y-[2px]"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent animate-spin rounded-full" />
                              TRANSMITTING DATA...
                            </>
                          ) : (
                            <>
                              TRANSMIT FORM BLUEPRINTS
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>

                    </motion.form>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS (FAQ) SECTION */}
      <section id="faq-accordion-section" className="py-24 bg-white border-t border-b border-stone-200 relative">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 industrial-grid" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-xs font-black tracking-widest text-industrial-red uppercase border-b-2 border-industrial-red pb-1 mb-4">
              ZEKE FRAMEWORK EXPLANATIONS
            </span>
            <h2 className="text-3xl sm:text-4.5xl font-display font-black text-industrial-black tracking-tight uppercase">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1.5 bg-industrial-red mx-auto mt-4" />
          </div>

          {/* Accordion Stack with pure custom toggle/expansion mechanics */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  id={`faq-item-${idx}`}
                  className="bg-[#F8F9FA] border border-stone-200 hover:border-stone-400 [&[data-open='true']]:border-industrial-red transition-all duration-300"
                  data-open={isOpen ? "true" : "false"}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left p-6 sm:p-8 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-display font-black text-xs sm:text-sm lg:text-base text-industrial-black tracking-tight uppercase leading-snug">
                      {idx + 1}. {faq.question}
                    </span>
                    <span className={`p-1.5 border border-stone-300 text-industrial-black shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-industrial-red text-white border-industrial-red" : "bg-white"
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {/* Smooth expandable panel */}
                  <motion.div
                    initial="collapsed"
                    animate={isOpen ? "open" : "collapsed"}
                    variants={{
                      open: { opacity: 1, height: "auto", display: "block" },
                      collapsed: { opacity: 0, height: 0, transitionEnd: { display: "none" } }
                    }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-8 sm:px-8 sm:pb-8 border-t border-stone-200/80 pt-6 text-stone-600 text-xs sm:text-sm leading-relaxed tracking-wide font-sans">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
