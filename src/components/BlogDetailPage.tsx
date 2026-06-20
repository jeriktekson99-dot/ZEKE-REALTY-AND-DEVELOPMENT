import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, 
  User, 
  ArrowLeft, 
  Mail, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  Share2, 
  Sparkles, 
  CheckSquare, 
  ShieldAlert,
  ArrowRight
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime?: string;
  imageUrl: string;
}

interface BlogDetailPageProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  onBack: () => void;
  onInquire: (articleTitle: string) => void;
  onSelectPost?: (post: BlogPost) => void;
  onNavigate?: (section: string) => void;
}

export default function BlogDetailPage({
  post,
  relatedPosts,
  onBack,
  onInquire,
  onSelectPost,
  onNavigate
}: BlogDetailPageProps) {
  // Newsletter subscription states
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Bookmark / Share interactions
  const [bookmarked, setBookmarked] = useState(false);
  const [shared, setShared] = useState(false);

  // Related articles slide controls
  const [activeIndex, setActiveIndex] = useState(0);

  // Filter out current post from related articles safely
  const eligibleRelated = relatedPosts.filter((item) => item.id !== post.id);
  // Get visible related articles (slice of 3, wrapped)
  const visibleRelated = eligibleRelated.slice(activeIndex, activeIndex + 3);
  if (visibleRelated.length < 3 && eligibleRelated.length >= 3) {
    // Wrap around for continuous sliding experience
    visibleRelated.push(...eligibleRelated.slice(0, 3 - visibleRelated.length));
  }

  const handleNextRelated = () => {
    setActiveIndex((prev) => (prev + 1) % Math.max(1, eligibleRelated.length));
  };

  const handlePrevRelated = () => {
    setActiveIndex((prev) => (prev - 1 + eligibleRelated.length) % Math.max(1, eligibleRelated.length));
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    
    // Simulate API webhook or CRM submit trigger
    setTimeout(() => {
      setSubmitting(false);
      setSubscribed(true);
      setEmail("");
      console.log("[Zeke PR Insights Engine] Subscribed email:", email);
    }, 1200);
  };

  const handleShareClick = () => {
    setShared(true);
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => setShared(false), 2000);
  };

  // Pre-generate professional dateline text
  const datelineCity = "MANILA, PH";
  const authorDesignator = post.author.includes("Engr.") 
    ? "Senior Structural Planner, Zeke Civil Sector" 
    : post.author.includes("Atty.") 
    ? "Chief Counsel, Zeke Land & Realty Escrow Division" 
    : post.author.includes("Dr.") 
    ? "Lead Geological Consultant, Zeke Materials Wing" 
    : "Senior Director, Zeke Corporate PR";

  // Let's create high-end structural sections to show true editorial beauty
  return (
    <div id="blog-detail-subpage" className="bg-white min-h-screen text-industrial-black select-text font-sans pt-28">
      
      {/* Breadcrumb Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <button
          onClick={onBack}
          id="detail-back-button"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#E11D48] hover:text-industrial-red uppercase transition-colors group focus:outline-none cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Insights Matrix</span>
        </button>
      </div>

      {/* 2. MAIN CONTENT SPLIT LAYOUT */}
      <div id="blog-detail-content-area" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT 70% COLUMN: Main Article Body */}
          <article className="lg:col-span-8 relative">
            {/* Subtle layout grid overlay */}
            <div className="absolute inset-0 industrial-grid opacity-[0.03] pointer-events-none" />

            {/* Dynamic Blog Headline */}
            <h1 className="text-[26px] font-display font-black text-industrial-black uppercase tracking-tight leading-tight mb-4 relative z-10">
              {post.title}
            </h1>

            {/* Author, date and read estimation metadata right below title */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 pb-4 border-b border-stone-200 font-mono text-xs text-stone-500 relative z-10">
              <span className="font-extrabold text-stone-850 uppercase">{post.author}</span>
              <span className="text-stone-300">•</span>
              <span>Published {post.date}</span>
              <span className="text-stone-300">•</span>
              <span className="uppercase tracking-widest text-[#E11D48] font-bold font-mono">{post.readTime || "7 MIN READ"}</span>
            </div>

            {/* Main Featured Editorial Image Frame */}
            <div className="relative aspect-[16/9] bg-stone-100 p-1 border border-stone-200 shadow-sm mb-10 z-10">
              <img
                src={post.imageUrl}
                alt={post.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 bg-industrial-black text-white px-3 py-1 font-mono text-[9px] tracking-widest uppercase font-bold">
                CORE TECHNICAL RECORD // CAMERA SWEEDS CODE
              </div>
            </div>

            {/* Rich Editorial Text Content Block */}
            <div className="relative z-10 text-stone-700 text-sm sm:text-base leading-relaxed tracking-wide space-y-6 font-sans">
              
              {/* Dateline formatted paragraph */}
              <p>
                <strong className="text-industrial-black font-mono tracking-wide">
                  {datelineCity} — {post.date} — 
                </strong>{" "}
                {post.content || "Zeke Realty & Construction maintains strict, unyielding quality assurance markers across all structural, excavation, and geological sectors. This memorandum provides the validated data collected from our engineers on-duty."}
              </p>

              <blockquote className="bg-[#FFF1F2] border-l-4 border-industrial-red p-5 my-8 font-sans italic text-stone-800">
                <p className="font-semibold text-industrial-black mb-1 text-sm uppercase tracking-wider font-mono not-italic text-industrial-red">
                  EXECUTIVE SUMMARY / ABSTRACT:
                </p>
                "{post.excerpt || "We verify lateral soil compaction tolerances and structural tensile load capacities at high site frequencies to preserve complete asset safety for our stakeholders."}"
              </blockquote>

              <p>
                The structural integrity of modern high-rise frameworks and hillside developments rests on uncompromising quality metrics. At Zeke, our in-house material formulation labs regularly verify sand compactness and steel tensile limits to secure our ISO-grade quality marks. Each report published in our Technical Dialog Logs undergoes third-party certified testing checks.
              </p>

              {/* SECTION SUBHEADING 1 */}
              <h2 className="text-lg sm:text-xl font-display font-black text-industrial-black uppercase tracking-tight pt-4 flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-[#E11D48]" />
                I. Systematic Implementation &amp; Controls
              </h2>
              <div className="w-12 h-1 bg-[#E11D48]" />
              
              <p>
                To avoid structural vulnerabilities, our teams implement horizontal shear joints, thermal sensor clusters, and deep concrete setting timers. By tracking chemical hydration temperatures in solid load-bearing pillars, we maintain accurate curing records that safeguard projects against micro-cracking during extreme thermal variations.
              </p>

              <p>
                This structured methodology removes critical bottlenecks and allows our escrows and title buyers to receive detailed architectural reports within weeks of purchase, ensuring total transaction transparency.
              </p>

              {/* SECTION SUBHEADING 2 */}
              <h2 className="text-lg sm:text-xl font-display font-black text-industrial-black uppercase tracking-tight pt-4 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#E11D48]" />
                II. Geodetic Verification &amp; Zoning Compliance
              </h2>
              <div className="w-12 h-1 bg-[#E11D48]" />

              <p>
                Obtaining municipal building permits in high-density development corridors requires strict compliance checks. We actively coordinate with local government units (LGU) and geologic experts to inspect land slope gradients, identify hidden fault lines, and execute boundary checks. This eliminates title overlaps and safeguards appraisal values for our portfolio.
              </p>
              
              <p>
                Our clients enjoy peace of mind knowing that every parcel of land offered by Zeke has undergone thorough title verification and soil compaction testing before the concrete forms are ever laid down.
              </p>

              {/* Related posts container end spacing */}
            </div>
          </article>


          {/* RIGHT 30% COLUMN: Utility Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* CONTRIBUTOR / AUTHOR CARD */}
            <div id="sidebar-author-card" className="bg-white border border-stone-200 p-6 sm:p-8 rounded-none relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-industrial-red" />
              <span className="block font-mono text-[9px] tracking-widest text-[#E11D48] bg-rose-50 border border-rose-100 px-2 py-0.5 uppercase mb-4 max-w-max">
                CONTRIBUTOR
              </span>

              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-industrial-black text-white border-2 border-industrial-red/50 flex items-center justify-center font-display font-black text-lg select-none">
                  {post.author.replace("Engr.", "").replace("Atty.", "").replace("Dr.", "").trim().substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-display font-black text-base text-zinc-950 uppercase leading-tight tracking-tight">
                    {post.author}
                  </h4>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">
                    {authorDesignator.split(",")[0]}
                  </p>
                </div>
              </div>

              <p className="text-xs text-stone-500 font-sans tracking-wide leading-relaxed mt-3 border-t border-stone-100 pt-3">
                Authorized representative of the Zeke Realty Development Corporation. Coordinates on-site audits, materials validation, and legal land acquisition structures.
              </p>
            </div>

            {/* NEWSLETTER SIGNUP WIDGET */}
            <div id="sidebar-newsletter-card" className="bg-white border border-stone-200 p-6 sm:p-8 rounded-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 border-r border-t border-stone-200 pointer-events-none" />
              <div className="absolute top-0 right-0 w-8 h-[1px] bg-industrial-red" />
              <div className="absolute top-0 right-0 w-[1px] h-8 bg-industrial-red" />
              
              <h3 className="font-display font-black text-lg text-industrial-black uppercase tracking-tight mb-2">
                Subscribe to PR Insights
              </h3>
              <p className="text-xs text-stone-400 font-sans leading-relaxed mb-6">
                Receive instant field releases, title registry changes, and local geomorphological research updates once a week directly inside your inbox. No spam.
              </p>

              {subscribed ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-5 font-sans"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Check className="w-5 h-5 text-emerald-600 font-bold" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-900">VERIFICATION SUCCESS</span>
                  </div>
                  <p className="text-xs leading-relaxed">
                    Corporate insights pipeline verified. You have been registered into our central PR dispatch grid successfully.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="block text-[9px] font-mono font-bold uppercase tracking-widest text-[#E11D48]">
                      COMMUNICATIONS PORTAL *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="secure-email@domain.com"
                      className="w-full text-xs px-3.5 py-3.5 bg-stone-50 border border-stone-300 focus:border-industrial-red focus:bg-white text-industrial-black placeholder-zinc-400 rounded-none focus:outline-none transition-all duration-200 font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-11 bg-industrial-black hover:bg-industrial-red text-white disabled:bg-zinc-800 disabled:text-zinc-600 font-display font-black text-xs uppercase tracking-widest transition-all duration-300 rounded-none shadow-md flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <span>{submitting ? "VERIFYING PORTAL..." : "SUBMIT DISPATCH"}</span>
                    {!submitting && <Mail className="w-3.5 h-3.5" />}
                  </button>
                </form>
              )}
            </div>

            {/* QUICK TELEGRAMS & TECHNICAL MEMOS */}
            <div className="bg-stone-100 border border-stone-200 p-6 rounded-none">
              <span className="block font-mono text-[9px] font-extrabold text-stone-500 uppercase tracking-widest mb-3">
                ZEKE MEMORANDUM CODES
              </span>
              <ul className="space-y-3.5 text-xs font-mono text-stone-600">
                <li className="flex items-start gap-2 border-b border-stone-200 pb-2.5">
                  <span className="text-industrial-red font-bold">»</span>
                  <div>
                    <span className="block text-stone-850 font-bold uppercase">CODE-SH-412</span>
                    <span className="text-[10px] text-stone-400">Laguna Clay Compaction Standards v4</span>
                  </div>
                </li>
                <li className="flex items-start gap-2 border-b border-stone-200 pb-2.5">
                  <span className="text-industrial-red font-bold">»</span>
                  <div>
                    <span className="block text-stone-850 font-bold uppercase">CODE-ASTM-A36</span>
                    <span className="text-[10px] text-stone-400">Structural Steel Formwork specifications</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-industrial-red font-bold">»</span>
                  <div>
                    <span className="block text-stone-850 font-bold uppercase">CODE-PR-ESCR-26</span>
                    <span className="text-[10px] text-stone-400">Pre-selling Title Escrow Procedures</span>
                  </div>
                </li>
              </ul>
            </div>

          </aside>

        </div>
      </div>

      {/* 3. RELATED ARTICLES SECTION */}
      <section id="blog-detail-related" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 border-t border-stone-200 pt-16 pb-24">
        
        {/* RELATED SECTION HEADER */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="block font-mono text-[10px] font-bold tracking-widest text-[#E11D48] uppercase mb-1">
              EXPLORE BREADTH OF INTEL
            </span>
            <h2 className="text-xl sm:text-2.5xl font-display font-black text-industrial-black uppercase tracking-tight">
              Related Articles
            </h2>
          </div>

          {/* MINIMALIST CONTROLS SQUARE BUTTONS */}
          {eligibleRelated.length > 3 && (
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrevRelated}
                className="w-10 h-10 border border-stone-300 bg-white text-zinc-700 hover:border-industrial-red hover:bg-industrial-red hover:text-white transition-all cursor-pointer flex items-center justify-center rounded-none focus:outline-none"
                title="Slide Previous"
              >
                <ChevronLeft className="w-5 h-5 pointer-events-none" />
              </button>
              <button
                onClick={handleNextRelated}
                className="w-10 h-10 border border-stone-300 bg-white text-zinc-700 hover:border-industrial-red hover:bg-industrial-red hover:text-white transition-all cursor-pointer flex items-center justify-center rounded-none focus:outline-none"
                title="Slide Next"
              >
                <ChevronRight className="w-5 h-5 pointer-events-none" />
              </button>
            </div>
          )}
        </div>

        {/* 3-COLUMN RELATED CARDS LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleRelated.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  if (onSelectPost) {
                    onSelectPost(item);
                  } else {
                    // Re-load with the selected post item which exists inside eligibleRelated
                    post.id !== item.id && onBack(); 
                    // Wait brief ms or let state naturally cascade
                    setTimeout(() => {
                      const el = document.getElementById(`blog-grid-card-${item.id}`) || document.getElementById(`read-blog-btn-${item.id}`);
                      if (el) el.click();
                    }, 50);
                  }
                }}
                className="group bg-white border border-stone-200 hover:border-industrial-red transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md cursor-pointer rounded-none relative"
              >
                <div>
                  {/* Photo area */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-stone-100 border-b border-stone-200">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-industrial-black text-white text-[8px] font-mono tracking-widest uppercase font-bold py-0.5 px-2">
                      RELATED ARCHIVE
                    </div>
                  </div>

                  {/* Body details */}
                  <div className="p-6">
                    <span className="block font-mono text-[9px] font-bold text-industrial-red uppercase tracking-widest mb-2.5">
                      {item.category}
                    </span>

                    <h3 className="font-display font-black text-sm sm:text-base text-zinc-950 group-hover:text-industrial-red transition-colors duration-200 line-clamp-2 uppercase tracking-tight leading-tight mb-2">
                      {item.title}
                    </h3>

                    <p className="text-stone-500 text-xs tracking-wide leading-relaxed line-clamp-2 font-sans">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="p-6 pt-0 flex items-center justify-between font-mono text-[9px] uppercase text-stone-400">
                  <span>{item.date}</span>
                  <span className="text-industrial-red font-bold group-hover:text-industrial-black transition-colors flex items-center gap-1.5">
                    OPEN TRANSCRIPT
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. CTA / Call to Action closing block */}
      <section id="about-cta" className="py-24 bg-black text-white relative overflow-hidden border-t-2 border-industrial-red">
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
              onClick={() => onInquire(`Zeke General Project Consultation from blog post: ${post.title}`)}
              className="bg-industrial-red hover:bg-red-700 text-white font-display font-bold uppercase tracking-widest text-xs sm:text-sm py-4.5 px-10 transition-all duration-300 w-full sm:w-auto shadow-lg shadow-industrial-red/25 active:translate-y-[2px]"
            >
              Start Your Project
            </button>

            <button
              id="about-cta-portfolio"
              onClick={() => {
                if (onNavigate) {
                  onNavigate("portfolio");
                } else {
                  onBack();
                  setTimeout(() => {
                    const tabBtn = document.getElementById("nav-portfolio") || document.getElementById("footer-lnk-portfolio");
                    if (tabBtn) tabBtn.click();
                  }, 100);
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
