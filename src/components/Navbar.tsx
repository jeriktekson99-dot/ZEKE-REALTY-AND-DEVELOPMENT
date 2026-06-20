import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

export default function Navbar({
  currentPage,
  onPageChange
}: {
  currentPage: "home" | "about" | "services" | "portfolio" | "blogs" | "get-started";
  onPageChange: (page: "home" | "about" | "services" | "portfolio" | "blogs" | "get-started") => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (currentPage === "about") {
      setActiveSection("about");
    } else if (currentPage === "services") {
      setActiveSection("services");
    } else if (currentPage === "portfolio") {
      setActiveSection("portfolio");
    } else if (currentPage === "blogs") {
      setActiveSection("blogs");
    } else if (currentPage === "get-started") {
      setActiveSection("get-started");
    } else {
      setActiveSection("home");
    }
  }, [currentPage]);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (id === "about") {
      onPageChange("about");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "services") {
      onPageChange("services");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "portfolio") {
      onPageChange("portfolio");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "blogs") {
      onPageChange("blogs");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "get-started" || id === "contact") {
      onPageChange("get-started");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      onPageChange("home");
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            const offset = 80; // height of sticky navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 150);
      }
    }
  };

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Blogs", id: "blogs" }
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || currentPage === "about" || currentPage === "services" || currentPage === "portfolio" || currentPage === "blogs" || currentPage === "get-started"
          ? "bg-industrial-black/95 backdrop-blur-md border-b border-industrial-red/20 py-3 shadow-lg"
          : "bg-industrial-black/90 md:bg-transparent md:backdrop-blur-none border-b border-white/5 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo Brand Block */}
          <div
            id="brand-logo"
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            {/* Geometric custom SVG-like Logo Icon */}
            <div className="relative w-10 h-10 flex items-center justify-center bg-industrial-black border border-white/10 overflow-hidden">
              {/* Diagonals to create structural outline */}
              <div className="absolute inset-0 border-t-2 border-l-2 border-industrial-red"></div>
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-white/20"></div>
              <span className="font-display font-extrabold text-xl text-white tracking-tighter z-10 select-none group-hover:scale-110 transition-transform duration-200">
                Z<span className="text-industrial-red">E</span>
              </span>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-industrial-red rotate-45 transform origin-bottom-right"></div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display font-black text-sm sm:text-base text-white tracking-widest leading-none group-hover:text-industrial-red transition-colors">
                ZEKE
              </span>
              <span className="text-[9px] text-zinc-400 font-mono tracking-widest leading-none mt-1 uppercase">
                REALTY &amp; CONSTRUCTION
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-xs lg:text-sm font-display font-bold uppercase tracking-wider relative transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? "text-industrial-red font-black"
                    : scrolled || currentPage === "about" || currentPage === "services" || currentPage === "portfolio" || currentPage === "blogs" || currentPage === "get-started" ? "text-stone-300 hover:text-white" : "text-white hover:text-industrial-red"
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-industrial-red"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              id="nav-get-started"
              onClick={() => handleNavClick("contact")}
              className="bg-industrial-red hover:bg-red-700 text-white font-display text-xs lg:text-sm font-semibold uppercase tracking-widest py-3 px-6 transition-all duration-300 relative overflow-hidden group clip-path hover:shadow-lg hover:shadow-industrial-red/20 active:translate-y-[2px] cursor-pointer"
            >
              {/* Sharp geometric layout cut-out accent */}
              <span className="absolute left-0 top-0 h-full w-[3px] bg-white group-hover:w-[6px] transition-all duration-200"></span>
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-none text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800 focus:outline-none focus:ring-1 focus:ring-industrial-red cursor-pointer"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-industrial-black border-b border-zinc-800"
          >
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-3 text-sm font-display font-bold uppercase tracking-wider border-l-2 cursor-pointer ${
                    activeSection === item.id
                      ? "bg-zinc-900 border-industrial-red text-industrial-red"
                      : "border-transparent text-stone-300 hover:bg-zinc-900 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 pt-4 border-t border-zinc-800">
                <button
                  id="mobile-get-started"
                  onClick={() => handleNavClick("contact")}
                  className="w-full bg-industrial-red text-white py-3 px-4 font-display font-semibold uppercase tracking-widest text-center text-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
