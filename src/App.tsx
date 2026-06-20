/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import BlogsSection from "./components/BlogsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import PortfolioPage from "./components/PortfolioPage";
import BlogsPage from "./components/BlogsPage";
import GetStartedPage from "./components/GetStartedPage";
import FloatingChatbox from "./components/FloatingChatbox";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "about" | "services" | "portfolio" | "blogs" | "get-started">("home");
  const [selectedBlogPost, setSelectedBlogPost] = useState<any>(null);

  const handleInquireClick = () => {
    setCurrentPage("get-started");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCustomNavigate = (sectionId: string) => {
    if (sectionId === "about" || sectionId === "services" || sectionId === "portfolio" || sectionId === "blogs" || sectionId === "get-started") {
      setCurrentPage(sectionId);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setCurrentPage("home");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
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
  };

  return (
    <div className="bg-industrial-light min-h-screen font-sans overflow-x-hidden selection:bg-industrial-red selection:text-white">
      {/* Sticky Glassmorphism/Solid Navbar */}
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* Main Content Render */}
      <main className="relative">
        {currentPage === "home" ? (
          <>
            {/* Dynamic Architecturally Overlaid Hero Section */}
            <Hero />

            {/* Asymmetric Problem and Solution Statement Modules */}
            <ProblemSolution />

            {/* Capable Gridded Services Panel */}
            <Services />

            {/* 3-Column Engineering Project Portfolio Showcase and Modals */}
            <Portfolio onInquire={handleInquireClick} />

            {/* Bento-style Why Choose Us Feature Stack */}
            <WhyChooseUs />

            {/* Five-Star Responsive Testimonial Carousel/Grid */}
            <Testimonials />

            {/* Substantial Technical Engineering Logs / Blogs Section */}
            <BlogsSection onReadPost={(post) => {
              setSelectedBlogPost(post);
              setCurrentPage("blogs");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />

            {/* Secure High-Efficiency Client Intake Portal / Form */}
            <ContactSection onNavigate={handleCustomNavigate} onInquire={handleInquireClick} />
          </>
        ) : currentPage === "services" ? (
          <ServicesPage onNavigate={handleCustomNavigate} onInquire={handleInquireClick} />
        ) : currentPage === "portfolio" ? (
          <PortfolioPage onNavigate={handleCustomNavigate} onInquire={handleInquireClick} />
        ) : currentPage === "blogs" ? (
          <BlogsPage 
            onNavigate={handleCustomNavigate} 
            onInquire={handleInquireClick} 
            initialPost={selectedBlogPost}
            onClearInitialPost={() => setSelectedBlogPost(null)}
          />
        ) : currentPage === "get-started" ? (
          <GetStartedPage onNavigate={handleCustomNavigate} onInquire={handleInquireClick} />
        ) : (
          <AboutPage onNavigate={handleCustomNavigate} onInquire={handleInquireClick} />
        )}
      </main>

      {/* Solid Multi-Column Footer with Return-to-Top shortcut */}
      <Footer onNavigate={handleCustomNavigate} />

      {/* Floating Chatbox Widget */}
      <FloatingChatbox />
    </div>
  );
}

