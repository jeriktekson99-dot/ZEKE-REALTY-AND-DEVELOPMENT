import React, { useState } from "react";
import { BLOGS_DATA } from "../data";
import { BlogPostItem } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, User, Clock, ArrowRight, X, FileText, Check } from "lucide-react";

interface BlogsSectionProps {
  onReadPost?: (post: BlogPostItem) => void;
}

export default function BlogsSection({ onReadPost }: BlogsSectionProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPostItem | null>(null);

  return (
    <section id="blogs" className="relative bg-industrial-light py-20 lg:py-32 overflow-hidden border-b border-stone-200">
      {/* Background grids */}
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

      {/* Red vertical styling accent */}
      <div className="absolute top-0 left-10 w-[3px] h-24 bg-industrial-red" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="blogs-header" className="max-w-3xl mb-16 lg:mb-24">
          <span className="inline-block font-mono text-xs font-black tracking-widest text-industrial-red uppercase mb-3">
            TECHNICAL DIALOGUE &amp; INTEL
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-industrial-black tracking-tight uppercase">
            THE ZEKE LOG ENTRIES
          </h2>
          <div className="w-20 h-1 bg-industrial-red mt-4 mb-6" />
          <p className="text-stone-500 text-sm sm:text-base tracking-wide">
            Read critical white papers and field journals constructed by our in-house geodetic surveyors, general mechanics, and legal title investigators.
          </p>
        </div>

        {/* 3-Column Blogs Grid */}
        <div id="blogs-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS_DATA.map((post) => (
            <div
              key={post.id}
              id={`blog-card-${post.id}`}
              className="bg-white border border-stone-200 hover:border-industrial-red transition-all duration-300 flex flex-col justify-between shadow-sm group hover:shadow-md"
            >
              {/* Card Image Frame */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-950">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-industrial-black text-white px-2.5 py-1 text-[10px] uppercase font-mono font-bold tracking-widest border border-white/10">
                  {post.category}
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 sm:p-8 flex-grow">
                <div className="flex items-center space-x-4 text-[10px] font-mono text-zinc-400 mb-3 uppercase">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-industrial-red" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-zinc-500" />
                    {post.author}
                  </span>
                </div>

                <h3 className="font-display font-black text-base sm:text-lg text-zinc-900 group-hover:text-industrial-red transition-colors uppercase tracking-tight line-clamp-2 leading-tight mb-4">
                  {post.title}
                </h3>

                <p className="text-stone-500 text-xs sm:text-sm tracking-wide leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Footer read action */}
              <div className="px-6 p-5 sm:px-8 border-t border-stone-100 flex items-center justify-between">
                <button
                  id={`read-blog-btn-${post.id}`}
                  onClick={() => {
                    if (onReadPost) {
                      onReadPost(post);
                    } else {
                      setSelectedPost(post);
                    }
                  }}
                  className="text-xs font-mono font-bold text-industrial-red uppercase tracking-widest group-hover:text-industrial-black transition-colors flex items-center gap-1 focus:outline-none"
                >
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </button>
                <span className="text-[10px] text-stone-400 font-mono font-medium">5 MIN READ</span>
              </div>

            </div>
          ))}
        </div>

        {/* Side reader panel slide-in overlay (AnimatePresence) */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              id="blog-reader-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-industrial-black/80 backdrop-blur-sm flex justify-end"
              onClick={() => setSelectedPost(null)}
            >
              {/* Blog body container */}
              <motion.div
                id="blog-reader-panel"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="bg-white text-zinc-800 w-full max-w-2xl h-full shadow-2xl relative flex flex-col overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header controls sticky */}
                <div className="sticky top-0 bg-zinc-900 text-white px-6 py-5 flex items-center justify-between border-b border-zinc-800 z-15">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-industrial-red" />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest">ZEKE TECHNICAL ARCHIVES</span>
                  </div>
                  <button
                    id="close-blog-reader"
                    onClick={() => setSelectedPost(null)}
                    className="bg-zinc-800 hover:bg-industrial-red text-white p-2 border border-zinc-700 hover:border-transparent transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Content body scrollable */}
                <div className="p-8 sm:p-12 space-y-6">
                  <div>
                    <span className="inline-block bg-industrial-red/10 text-industrial-red px-2.5 py-1 text-[10px] uppercase font-mono font-bold tracking-widest mb-4">
                      {selectedPost.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-display font-black text-industrial-black uppercase tracking-tight leading-tight mb-4">
                      {selectedPost.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-xs font-mono text-zinc-500 pb-6 border-b border-stone-200">
                      <span>Date: {selectedPost.date}</span>
                      <span>•</span>
                      <span>Author: {selectedPost.author}</span>
                    </div>
                  </div>

                  {/* Representative Header image */}
                  <div className="bg-industrial-black p-1 border border-stone-200 shadow-sm">
                    <img
                      src={selectedPost.imageUrl}
                      alt={selectedPost.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover aspect-[16/9]"
                    />
                  </div>

                  {/* Summary / Excerpt block bolded */}
                  <p className="text-stone-900 font-sans font-bold text-sm sm:text-base leading-relaxed pl-4 border-l-4 border-industrial-red">
                    "{selectedPost.excerpt}"
                  </p>

                  {/* Substantive main content details */}
                  <div className="text-stone-600 text-sm tracking-wide leading-relaxed space-y-4">
                    <p>{selectedPost.content}</p>
                    <p>
                      Our primary purpose with these regular reports is transparency. In modern real estate, stakeholders are often left in the dark regarding materials quality and concrete loading codes. By documenting our projects and physical processes, we ensure that you are fully educated about standard guidelines before signing.
                    </p>
                    <p>
                      At Zeke Realty and Construction Development, our in-house material formulation labs regularly verify sand compactness and steel tensile limits to secure our ISO-grade quality marks. Connect with our technical engineers today to explore custom specifications.
                    </p>
                  </div>

                  {/* Modal bottom action */}
                  <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <span className="text-xs text-stone-400 font-mono">© 2026 ZEKE CORP TECHNICAL SECTOR</span>
                    <a
                      href="#contact"
                      onClick={() => setSelectedPost(null)}
                      className="bg-industrial-black hover:bg-industrial-red text-white font-display text-xs font-bold uppercase tracking-widest py-3.5 px-6 transition-all duration-300 w-full sm:w-auto text-center"
                    >
                      Connect With Engineers
                    </a>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
