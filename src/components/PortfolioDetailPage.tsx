import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Layers, 
  User, 
  Send, 
  ShieldAlert, 
  FileText, 
  Clock, 
  Hammer,
  CheckCircle,
  HelpCircle
} from "lucide-react";

interface PortfolioProject {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Renovations" | "Land Development";
  locationKey: "Metro Manila" | "Cavite" | "Laguna" | "Rizal";
  locationDesc: string;
  year: string;
  imageUrl: string;
  description: string;
  specs: { label: string; value: string }[];
}

interface PortfolioDetailPageProps {
  project: PortfolioProject;
  onBack: () => void;
  onInquire: (projectTitle: string) => void;
  onNavigate?: (section: string) => void;
}

export default function PortfolioDetailPage({
  project,
  onBack,
  onInquire,
  onNavigate
}: PortfolioDetailPageProps) {
  // Main showcase image can be updated when clicking thumbnails
  const [activeImage, setActiveImage] = useState(project.imageUrl);
  
  // Interactive Inquiry Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    `I am reviewing the elite portfolio and am highly interested in the structural metrics of the "${project.title}" project. Please provide pre-selling or contracting estimates.`
  );
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Gallery Thumbnails using various high-resolution assets from our assets list
  const galleryThumbnails = [
    project.imageUrl,
    "/assets/images/zeke_project_one_1781624725520.jpg",
    "/assets/images/zeke_project_two_1781624742258.jpg",
    "/assets/images/zeke_project_three_1781624759261.jpg",
    "/assets/images/zeke_about_workflow_1781626977867.jpg",
  ].filter((url, index, self) => self.indexOf(url) === index).slice(0, 4);

  // Pad to ensure exactly 4 thumbnails if there are duplicates or fewer items
  while (galleryThumbnails.length < 4) {
    galleryThumbnails.push("/assets/images/zeke_hero_1781624709150.jpg");
  }

  // Dynamic values depending on project scope
  const clientPlaceholder = project.category === "Commercial" 
    ? "Global Hospitality Group / Corporate Partner" 
    : project.category === "Residential" 
    ? "Premium Private Trust Estate" 
    : project.category === "Land Development" 
    ? "Metro Regional Infrastructure Joint-Venture" 
    : "Zeke Realty Escrow Syndicate";
    
  const projectValuePlaceholder = project.category === "Commercial"
    ? "₱315.4M PHP"
    : project.category === "Land Development"
    ? "₱128.0M PHP"
    : project.category === "Renovations"
    ? "₱42.5M PHP"
    : "₱88.2M PHP";

  const serviceMethodPlaceholder = project.category === "Commercial"
    ? "ASTM Structural Steel & Foundation"
    : project.category === "Residential"
    ? "Reinforced Concrete & Turnkey"
    : project.category === "Land Development"
    ? "Cadastral Site Grading & Sub-Base"
    : "Shear Dampening & Wall Restoration";

  const completionDatePlaceholder = `OCTOBER ${project.year || "2024"}`;

  const marketPlaceholder = project.category === "Commercial"
    ? "₱315.4M PHP // COMMERCIAL"
    : project.category === "Land Development"
    ? "₱128.0M PHP // INFRASTRUCTURE"
    : project.category === "Renovations"
    ? "₱42.5M PHP // PRIVATE RE"
    : "₱88.2M PHP // RESIDENTIAL REALTY";

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      console.log(`[Zeke Project Inquire] Name: ${name}, Email: ${email}, Msg: ${message}`);
    }, 1200);
  };

  return (
    <div id="portfolio-detail-subpage" className="bg-white min-h-screen text-industrial-black select-text font-sans pt-28">
      
      {/* Breadcrumb Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <button
          onClick={onBack}
          id="detail-back-to-portfolio"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#E11D48] hover:text-industrial-black uppercase transition-colors group focus:outline-none cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio Blueprint</span>
        </button>
      </div>

      {/* 2. ELONGATED HEADER: TITLE & 6 SPEC POINTS IN A 2x3 GRID (NOT IN A CONTAINER) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 mb-10">
        <h2 className="text-[32px] font-display font-black text-industrial-black uppercase tracking-tight leading-none">
          {project.title}
        </h2>
        <p className="text-stone-400 font-mono text-[10px] mt-2 uppercase tracking-wider">
          RECORD ID // ZK-{project.id.toUpperCase().substring(0, 8)}
        </p>

        {/* Elongated Line between the title and 6 points */}
        <div className="border-t border-stone-200 mt-6 w-full" />

        {/* Six specs points arranged below the title - 2 rows of 3 columns layout with NO background container */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-6 w-full mt-6">
          <div>
            <span className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-bold">CLIENT</span>
            <span className="block text-sm font-bold text-industrial-black uppercase mt-1 leading-tight" title={clientPlaceholder}>
              {clientPlaceholder}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-bold">SERVICE METHOD</span>
            <span className="block text-sm font-bold text-industrial-black uppercase mt-1 leading-tight">
              {serviceMethodPlaceholder}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-bold">LOCATION</span>
            <span className="block text-sm font-bold text-industrial-black uppercase mt-1 leading-tight">
              {project.locationDesc}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-bold">CATEOGRY</span>
            <span className="block text-sm font-bold text-industrial-black uppercase mt-1 leading-tight">
              {project.category}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-bold">COMPLETION DATE</span>
            <span className="block text-sm font-bold text-red-600 uppercase mt-1 leading-tight">
              {completionDatePlaceholder}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-bold">MARKET</span>
            <span className="block text-sm font-bold text-emerald-600 uppercase mt-1 leading-tight">
              {marketPlaceholder}
            </span>
          </div>
        </div>
      </div>

      {/* 3. MAIN GALLERY & CASE STUDY SPLIT LAYOUT */}
      <div id="project-detail-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: Media Gallery & Technical Case Study (70%) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Gallery direct contents (Not in container cards) */}
            <div className="space-y-4">
              
              {/* Massive Main Project Image Showcase */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100 border border-stone-200/65 shadow-sm p-1">
                <img
                  src={activeImage}
                  alt={`${project.title} active view`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-industrial-black text-white px-3.5 py-1 font-mono text-[9px] tracking-widest uppercase font-bold">
                  ZEKE CIVIL ENGINEERING DIVISION // SHUTTER CODES ACTIVE
                </div>
              </div>

              {/* Thumbnail Grid Row */}
              <div className="grid grid-cols-4 gap-3">
                {galleryThumbnails.map((thumbnail, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(thumbnail)}
                    className={`relative aspect-[16/10] overflow-hidden border-2 transition-all duration-300 rounded-none focus:outline-none cursor-pointer ${
                      activeImage === thumbnail ? "border-[#E11D48] scale-102" : "border-stone-200 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={thumbnail}
                      alt="Thumbnail thumbnail selection"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                  </button>
                ))}
              </div>
            </div>
 
            {/* Case Study Content Blocks - direct flat rendering */}
            <div className="space-y-10 relative">
              <div className="absolute inset-0 industrial-grid opacity-[0.02] pointer-events-none" />
              
              {/* Segment 1 */}
              <div className="space-y-4 relative z-10">
                <h3 className="text-xl sm:text-2xl font-display font-black text-industrial-black uppercase tracking-tight flex items-center gap-2">
                  <Hammer className="w-5 h-5 text-[#E11D48]" />
                  Bringing Luxury &amp; Precision To {project.locationDesc.split(",")[0]}
                </h3>
                <div className="w-12 h-1 bg-[#E11D48]" />
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed tracking-wide font-sans pt-2">
                  {project.description} Custom integrated designs and structurally resilient frameworks require uncompromising geotechnical safety benchmarks. Zeke Realty and Construction Development Corporation oversaw the geodetic mapping, slope stability monitoring, concrete hydration timing, and title escrow clearing sequences of this flagship complex.
                </p>
                <p className="text-stone-600 text-sm leading-relaxed tracking-wide font-sans">
                  Our raw fabrication methodologies emphasize reinforced concrete foundations, structural steel load partitions, and seismic shear mitigation vectors. Prior to excavation, we completed a 98% Modified Proctor density audit across the active soils to bypass clay expansion risks and preserve stable appraisal values for all corporate partners.
                </p>
              </div>
 
              {/* Segment 2 */}
              <div className="space-y-4 relative z-10 pt-8 border-t border-stone-200">
                <h3 className="text-xl sm:text-2xl font-display font-black text-industrial-black uppercase tracking-tight flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-[#E11D48]" />
                  Technical Framework &amp; Engineering Execution
                </h3>
                <div className="w-12 h-1 bg-[#E11D48]" />
                
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed tracking-wide font-sans pt-2">
                  To achieve total seismic dampening, we introduced structural chemical anchors and elastomeric expansion joints designed to withstand Category 5 wind loads. Under absolute supervision of our mechanical wing, the civil structure features ASTM Grade 50 steel girders and high-early-strength Portland concrete forms (fc' 40 MPa).
                </p>
 
                {/* Sub-specification callout bullet checklist list (with light bone background) */}
                <div className="bg-stone-50 border border-stone-200 p-6 rounded-none grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h5 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3 border-b border-stone-200 pb-1.5">
                      STRUCTURAL LOAD SAFETY VECTORS
                    </h5>
                    <ul className="space-y-2.5 text-xs text-stone-700 font-sans">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#E11D48] mt-0.5 flex-shrink-0" />
                        <span>High-Early Concrete 40 MPa Rating</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#E11D48] mt-0.5 flex-shrink-0" />
                        <span>ASTM A572 Structural Grade Steel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#E11D48] mt-0.5 flex-shrink-0" />
                        <span>Seismic Zone 4 Shielding Systems</span>
                      </li>
                    </ul>
                  </div>
 
                  <div>
                    <h5 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3 border-b border-stone-200 pb-1.5">
                      REGULATORY APPROVED ASSURANCE
                    </h5>
                    <ul className="space-y-2.5 text-xs text-stone-700 font-sans">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#E11D48] mt-0.5 flex-shrink-0" />
                        <span>Municipal Building Clearance Approved</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#E11D48] mt-0.5 flex-shrink-0" />
                        <span>ISO 9001:2015 Compliant Material Vetting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#E11D48] mt-0.5 flex-shrink-0" />
                        <span>100% Validated Cadastral Map Checks</span>
                      </li>
                    </ul>
                  </div>
                </div>
 
                <p className="text-stone-600 text-sm leading-relaxed tracking-wide font-sans pt-4">
                  This rigorous multi-phase validation process ensures that your luxury estates and high-rise commercial structures enjoy optimal safety profiles and unyielding durability. Our design protocols adhere strictly to Filipino zoning parameters, local government (LGU) guidelines, and standard civil engineering structural codes.
                </p>
              </div>
 
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Sidebar (30%) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Project Management / Lead Card */}
            <div id="sidebar-lead-card" className="bg-white border border-stone-200 p-6 sm:p-8 rounded-none relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#E11D48]" />
              <span className="block font-mono text-[9px] tracking-widest text-[#E11D48] bg-rose-50 border border-rose-100 px-2 py-0.5 uppercase mb-4 max-w-max">
                PROJECT DIRECTOR
              </span>

              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-industrial-black text-white border-2 border-[#E11D48]/50 flex items-center justify-center font-display font-black text-lg select-none rounded-none">
                  MO
                </div>
                <div>
                  <h4 className="font-display font-black text-base text-zinc-950 uppercase leading-tight tracking-tight">
                    Marcus Orquiola
                  </h4>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5 leading-none">
                    Lead Structural Planner
                  </p>
                </div>
              </div>

              <p className="text-xs text-stone-500 font-sans tracking-wide leading-relaxed mt-3 border-t border-stone-100 pt-3">
                Authorized Engineering Lead for Zeke Construction Sector. Inspects steel tensile properties, compaction logs, hydraulic shoring operations, and final regulatory municipal certificate issuance.
              </p>
            </div>

            {/* Project Specific Inquiry Form */}
            <div id="sidebar-inquiry-card" className="bg-white border border-stone-200 p-6 sm:p-8 rounded-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 border-r border-t border-stone-200 pointer-events-none animate-pulse" />
              <div className="absolute top-0 right-0 w-8 h-[1px] bg-[#E11D48]" />
              <div className="absolute top-0 right-0 w-[1px] h-8 bg-[#E11D48]" />
              
              <h3 className="font-display font-black text-lg text-industrial-black uppercase tracking-tight mb-2 flex items-center gap-1.5">
                Inquire on This Project
              </h3>
              <p className="text-xs text-stone-400 font-sans leading-relaxed mb-6">
                Connect directly with the development division for joint commercial acquisitions, pre-selling unit estimates, or technical blueprints.
              </p>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-5 font-sans"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 font-bold" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-900">INQUIRY VETTED</span>
                  </div>
                  <p className="text-xs leading-relaxed">
                    Corporate intake verified. Your project query has been transmitted to Marcus Orquiola. We will reply within 2 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="block text-[9px] font-mono font-bold uppercase tracking-widest text-[#E11D48]">
                      REPRESENTATIVE NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Director Carlos Santos"
                      className="w-full text-xs px-3.5 py-3 bg-stone-50 border border-stone-300 focus:border-[#E11D48] focus:bg-white text-industrial-black placeholder-zinc-400 rounded-none focus:outline-none transition-all duration-250 font-sans"
                    />
                  </div>

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
                      className="w-full text-xs px-3.5 py-3 bg-stone-50 border border-stone-300 focus:border-[#E11D48] focus:bg-white text-industrial-black placeholder-zinc-400 rounded-none focus:outline-none transition-all duration-250 font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[9px] font-mono font-bold uppercase tracking-widest text-[#E11D48]">
                      INQUIRY LOGS / PRE-SET PARAMS
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full text-xs px-3.5 py-3 bg-stone-50 border border-stone-300 focus:border-[#E11D48] focus:bg-white text-industrial-black placeholder-zinc-400 rounded-none focus:outline-none transition-all duration-250 font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-11 bg-industrial-black hover:bg-[#E11D48] text-white disabled:bg-zinc-800 disabled:text-zinc-600 font-display font-black text-xs uppercase tracking-widest transition-all duration-300 rounded-none shadow-md flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <span>{submitting ? "VERIFYING SECURE CHANNEL..." : "SUBMIT INQUIRY"}</span>
                    {!submitting && <Send className="w-3.5 h-3.5" />}
                  </button>
                </form>
              )}
            </div>

            {/* Quick specifications code sheet index logs */}
            <div className="bg-stone-100 border border-stone-200 p-6 rounded-none">
              <span className="block font-mono text-[9px] font-extrabold text-stone-500 uppercase tracking-widest mb-3">
                ZEKE TECHNICAL CODES INDEX
              </span>
              <ul className="space-y-3.5 text-xs font-mono text-stone-600">
                <li className="flex items-start gap-2 border-b border-stone-200 pb-2.5">
                  <span className="text-[#E11D48] font-bold">»</span>
                  <div>
                    <span className="block text-stone-850 font-bold uppercase">SEC-CODE-STR-24</span>
                    <span className="text-[10px] text-stone-400">Filipino National Structural Code compliant</span>
                  </div>
                </li>
                <li className="flex items-start gap-2 border-b border-stone-200 pb-2.5">
                  <span className="text-[#E11D48] font-bold">»</span>
                  <div>
                    <span className="block text-stone-850 font-bold uppercase">SEC-CODE-SOIL-98</span>
                    <span className="text-[10px] text-stone-400">98% ASTM Proctor compaction validation</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E11D48] font-bold">»</span>
                  <div>
                    <span className="block text-stone-850 font-bold uppercase">SEC-CODE-ISO-9001</span>
                    <span className="text-[10px] text-stone-400">Strict structural auditing workflow logs</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* 4. CTA / Call to Action closing block */}
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
              onClick={() => onInquire(project.title)}
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
