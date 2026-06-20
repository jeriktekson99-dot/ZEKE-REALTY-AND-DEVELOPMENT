import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Hammer, Building, ArrowRight, Layers, Send, CheckCircle, ShieldAlert, Phone } from "lucide-react";

export default function Hero() {
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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
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

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-industrial-black text-white overflow-hidden pt-20"
    >
      {/* Background Graphic Overlay with our high-end generated asset */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/zeke_hero_1781624709150.jpg"
          alt="Zeke Realty Modern Steel Glass Construction"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-35 object-center scale-105"
        />
        {/* Absolute gradients to darken and ground the image properly */}
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-industrial-black/80 to-industrial-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-black via-transparent to-industrial-black/40" />
        {/* Subtle dot-pattern or industrial blueprint lines */}
        <div className="absolute inset-0 industrial-grid-dark opacity-20 pointer-events-none" />
      </div>

      {/* Aesthetic Top Diagonal Border Accent (Structural Line) */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none hidden lg:block overflow-hidden z-10">
        <div className="w-full h-full border-l border-white/5 bg-white/[0.01]" />
        {/* An elegant red structural accent bar slicing the hero */}
        <div className="absolute top-1/4 -left-[2px] w-[3px] h-32 bg-industrial-red" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Hero Left Content Column */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            
            {/* Top Indicator Accent */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-industrial-red/10 border-l-4 border-industrial-red px-3 py-1.5 mb-6 w-fit"
            >
              <span className="text-[10px] font-mono font-bold tracking-widest text-industrial-red uppercase">
                INTEGRATED BLUEPRINT ENGINE
              </span>
            </motion.div>

            {/* Main Bold Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7.5xl font-display font-black leading-none tracking-tighter text-white mb-6 uppercase"
            >
              BUILDING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-red to-red-500">
                DREAMS
              </span>{" "}
              INTO{" "}
              <span className="text-stone-100">
                REALITY
              </span>
            </motion.h1>

            {/* Subheading text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-zinc-300 text-base sm:text-lg font-sans tracking-wide max-w-xl mb-8 leading-relaxed border-l border-zinc-700 pl-4"
            >
              Construction, Realty, and Trading managed under one seamless, premium framework. We design with intent, secure with absolute legal safety, and execute with pure structural integrity.
            </motion.p>

            {/* Overlapping Client Profiles Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="flex items-center space-x-4 mb-8"
            >
              {/* Overlapping Avatar Circles */}
              <div className="flex -space-x-3">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-zinc-950 object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
                  alt="Partner Profile"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-zinc-950 object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                  alt="Partner Profile"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-zinc-950 object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                  alt="Partner Profile"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-zinc-950 object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
                  alt="Partner Profile"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Vertical line divider */}
              <div className="h-8 w-[1px] bg-zinc-855 bg-zinc-800" />

              {/* Client statistics column */}
              <div className="flex flex-col">
                <span className="font-display font-black text-sm text-stone-100 uppercase tracking-wider leading-none">
                  500+ TRUSTED PARTNERS
                </span>
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mt-1">
                  Active Ventures &amp; Regional Clients
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 sm:items-center"
            >
              {/* Primary View Portfolio Button */}
              <button
                id="hero-view-portfolio"
                onClick={() => scrollToId("portfolio")}
                className="bg-industrial-red hover:bg-red-700 text-white font-display font-bold uppercase tracking-wider text-xs sm:text-sm py-4 px-8 border border-transparent transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl shadow-industrial-red/20 active:translate-y-[2px]"
              >
                View Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              {/* Call with Phone Number Link */}
              <a
                id="hero-our-services"
                href="tel:+639068374150"
                className="bg-transparent hover:bg-white/5 text-white font-display font-bold uppercase tracking-wider text-xs sm:text-sm py-4 px-8 border border-white/20 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 active:translate-y-[2px]"
              >
                <Phone className="w-4 h-4 text-industrial-red" />
                CALL: 0906 837 4150
              </a>
            </motion.div>

          </div>

          {/* Hero Right Column: Full Interactive Contact Form Panel */}
          <div className="w-full lg:w-[45%] relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 w-full backdrop-blur-sm shadow-2xl relative overflow-hidden"
            >
              {/* Corner edge visual highlights */}
              <div className="absolute top-0 right-0 w-12 h-[2px] bg-industrial-red" />
              <div className="absolute top-0 right-0 w-[2px] h-12 bg-industrial-red" />

              <h3 className="font-display font-black text-lg uppercase tracking-wider text-stone-100 mb-2 flex items-center gap-2">
                <Building className="w-5 h-5 text-industrial-red" />
                GET A FAST QUOTE
              </h3>
              <p className="text-zinc-400 text-xs font-sans tracking-wide mb-6">
                Submit raw specifications, location info, or structural requests below to dispatch our licensed engineering leads.
              </p>

              {isSubmitted ? (
                /* Dynamic Submission Success Alert */
                <div id="hero-form-success-alert" className="bg-zinc-950/90 border-l-4 border-industrial-red p-5 space-y-4 text-left">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-industrial-red flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-black text-xs uppercase tracking-widest text-zinc-100">
                        Blueprints Transmitted
                      </h4>
                      <p className="text-zinc-400 text-[11px] mt-1 leading-relaxed">
                        Data received, <span className="text-white font-bold">{formData.name}</span>! Ticket placed in high-priority queue under tracking code <span className="text-industrial-red font-mono font-bold">ZK-{(Math.random() * 1000).toFixed(0)}</span>.
                      </p>
                    </div>
                  </div>

                  <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
                    An expert consultant will phone or reply to <span className="text-zinc-300">{formData.email}</span> within under 2 hours.
                  </p>

                  <button
                    id="hero-submit-another-btn"
                    onClick={resetForm}
                    className="w-full bg-zinc-850 hover:bg-zinc-800 text-white font-display font-bold uppercase text-[10px] tracking-widest py-2 px-4 transition-all duration-200"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* Interactive Contact Form */
                <form id="hero-contact-form" onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  {errorMsg && (
                    <div id="hero-form-error-banner" className="bg-red-950/50 border border-industrial-red p-3 flex items-center gap-2 text-white text-[11px]">
                      <ShieldAlert className="w-4 h-4 text-industrial-red flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Input Name */}
                  <div>
                    <label htmlFor="hero-contact-name" className="block font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="hero-contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Carlos Valenzuela"
                      className="w-full bg-zinc-950 border border-zinc-800 text-white py-2.5 px-3 text-xs focus:outline-none focus:border-industrial-red font-sans transition-all"
                    />
                  </div>

                  {/* Input Email */}
                  <div>
                    <label htmlFor="hero-contact-email" className="block font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="hero-contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. carlos@corp.com"
                      className="w-full bg-zinc-950 border border-zinc-800 text-white py-2.5 px-3 text-xs focus:outline-none focus:border-industrial-red font-sans transition-all"
                    />
                  </div>

                  {/* Dropdown Project Type */}
                  <div>
                    <label htmlFor="hero-contact-project-type" className="block font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">
                      Project Sector *
                    </label>
                    <div className="relative">
                      <select
                        id="hero-contact-project-type"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-zinc-950 border border-zinc-800 text-white py-2.5 px-3 text-xs focus:outline-none focus:border-industrial-red font-sans transition-all appearance-none cursor-pointer"
                      >
                        <option value="planning">Planning &amp; Architectural Design</option>
                        <option value="land">Premium Land Development</option>
                        <option value="construction">General High-Rise Construction</option>
                        <option value="renovations">Commercial Structural Renovations</option>
                        <option value="extensions">Extensions &amp; Vertical Expansion</option>
                        <option value="realty">Realty Listing purchase / Selling</option>
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-zinc-500 text-[10px]">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Textarea message constraints */}
                  <div>
                    <label htmlFor="hero-contact-message" className="block font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">
                      Project Description *
                    </label>
                    <textarea
                      id="hero-contact-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify estimated size, location target, soil conditions, etc..."
                      className="w-full bg-zinc-950 border border-zinc-800 text-white py-2.5 px-3 text-xs focus:outline-none focus:border-industrial-red font-sans transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="hero-submit-contact-form"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-industrial-red hover:bg-red-700 disabled:bg-zinc-800 text-white py-3 px-4 font-display font-black uppercase tracking-widest text-[10px] text-center flex items-center justify-center gap-2 transition-all duration-300 pointer-events-auto active:translate-y-[2px]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3 h-3 border-2 border-white border-t-transparent animate-spin rounded-full" />
                          TRANSMITTING DATA...
                        </>
                      ) : (
                        <>
                          TRANSMIT BLUEPRINTS
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </motion.div>
          </div>

        </div>

        {/* Scroll indicator anchor bar at the very bottom */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
          <button
            id="scroll-to-about"
            onClick={() => scrollToId("about")}
            className="group flex flex-col items-center text-zinc-400 hover:text-industrial-red transition-colors focus:outline-none"
          >
            <span className="text-[9px] font-mono tracking-widest uppercase mb-1">DISCOVER MORE</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </button>
        </div>

      </div>
    </section>
  );
}
