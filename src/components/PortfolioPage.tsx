import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import PortfolioDetailPage from "./PortfolioDetailPage";
import {
  MapPin,
  Calendar,
  Layers,
  ArrowUpRight,
  SlidersHorizontal,
  X,
  ChevronDown,
  Info,
  Search,
  ChevronLeft,
  ChevronRight
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

export default function PortfolioPage({
  onNavigate,
  onInquire
}: {
  onNavigate: (section: string) => void;
  onInquire: () => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");
  const [selectedLocation, setSelectedLocation] = useState<string>("All Locations");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPortfolioPage, setCurrentPortfolioPage] = useState<number>(1);

  const PROJECTS_PER_PAGE = 4;

  // Reset page to 1 when filters or search change
  useEffect(() => {
    setCurrentPortfolioPage(1);
  }, [selectedCategory, selectedLocation, searchQuery]);

  // Curated list of 8 distinctive projects, matching the 2-column, 4-row grid requirement
  const projects: PortfolioProject[] = [
    {
      id: "custom-residence-expertise",
      title: "Custom Residence Expertise",
      category: "Residential",
      locationKey: "Cavite",
      locationDesc: "Tagaytay, Cavite",
      year: "2024",
      imageUrl: "/src/assets/images/zeke_project_one_1781624725520.jpg",
      description: "A premium structural duplex engineered to withstand seismic Zone 4 lateral acceleration and dense coastal winds. Features beautiful textured raw concrete walls contrasted with custom industrial crimson accents.",
      specs: [
        { label: "Gross Floor Area", value: "450 sqm" },
        { label: "Core Frame", value: "Reinforced Concrete Core" },
        { label: "Seismic Limit", value: "Zone 4 Shield" },
        { label: "Soil Class Vetted", value: "Class C Compaction" }
      ]
    },
    {
      id: "commercial-development-hub",
      title: "Commercial Development Hub",
      category: "Commercial",
      locationKey: "Metro Manila",
      locationDesc: "Quezon City, Metro Manila",
      year: "2025",
      imageUrl: "/src/assets/images/zeke_project_two_1781624742258.jpg",
      description: "Triple-tier retail and corporate headquarters featuring premium exposed structural girders, acoustic-isolated partition slabs, and highly efficient dynamic heat extraction systems.",
      specs: [
        { label: "Gross Floor Area", value: "1,200 sqm" },
        { label: "Structural Steel", value: "ASTM Grade 50 A572" },
        { label: "Thermal Insulation", value: "Double Glazed low-E" },
        { label: "Completed Stage", value: "100% Operational" }
      ]
    },
    {
      id: "prime-grading-subdivision",
      title: "Prime Grading & Civil Preparation",
      category: "Land Development",
      locationKey: "Rizal",
      locationDesc: "Antipolo, Rizal",
      year: "2025",
      imageUrl: "/src/assets/images/zeke_about_workflow_1781626977867.jpg",
      description: "Mass excavation, geodetic control mapping, and reinforced hillside structural retaining systems. We stabilized complex clayey-silt vectors to prepare a premium high-yield subdivision layout.",
      specs: [
        { label: "Development Area", value: "12 Hectares" },
        { label: "Compaction Rating", value: "98% Modified Proctor" },
        { label: "Slope Security", value: "Soil-nailing + Geogrids" },
        { label: "Heavy Fleet Use", value: "Zeke Mechanical Wing" }
      ]
    },
    {
      id: "modern-industrial-loft",
      title: "Modern Industrial Loft Refit",
      category: "Renovations",
      locationKey: "Laguna",
      locationDesc: "Santa Rosa, Laguna",
      year: "2024",
      imageUrl: "/src/assets/images/zeke_hero_1781624709150.jpg",
      description: "Modern preservation conversion of an old electronic storage plant into multi-functional creative headquarters, retaining raw masonry elements while inserting rigid high-tensile steel expansion tiers.",
      specs: [
        { label: "Converted Area", value: "780 sqm" },
        { label: "Structural Insert", value: "Exposed Load H-Beams" },
        { label: "Acoustic Guard", value: "55 STC Sound Dampers" },
        { label: "Ventilation", value: "High-Efficiency VRF" }
      ]
    },
    {
      id: "high-rise-commercial-assembly",
      title: "Urban Commercial Logistics Complex",
      category: "Commercial",
      locationKey: "Metro Manila",
      locationDesc: "Makati, Metro Manila",
      year: "2026",
      imageUrl: "/src/assets/images/zeke_about_values_1781626995702.jpg",
      description: "High-load warehouse and logistical integration setup built under tight city municipal deadlines. Deployed proprietary rapid concrete formwork structures to reduce timeline friction.",
      specs: [
        { label: "Usable Floor Space", value: "2,200 sqm" },
        { label: "Foundation Base", value: "Drilled Micropiles 12m" },
        { label: "Concrete Strength", value: "fc' 40 MPa High-Early" },
        { label: "Load Capacity", value: "25 kPa Warehousing" }
      ]
    },
    {
      id: "vertical-estate-expansion",
      title: "Vertical Structural Extension",
      category: "Renovations",
      locationKey: "Cavite",
      locationDesc: "Silang, Cavite",
      year: "2025",
      imageUrl: "/src/assets/images/zeke_about_hero_1781626949346.jpg",
      description: "Engineering addition of a complete second storey onto a legacy framework using premium light-weight steel framing, structural chemical anchoring systems, and elastomeric expansion joints.",
      specs: [
        { label: "Added Floor Area", value: "185 sqm" },
        { label: "Anchorage Model", value: "RE 500 Epoxy Anchors" },
        { label: "Weight Reduction", value: "-35% vs Wet Concrete" },
        { label: "Wind Rating", value: "To 250 kph Sustained" }
      ]
    },
    {
      id: "urban-refitting-complex",
      title: "Urban Workspace Modernization",
      category: "Renovations",
      locationKey: "Metro Manila",
      locationDesc: "Pasig, Metro Manila",
      year: "2026",
      imageUrl: "/src/assets/images/zeke_solution_1781624797540.jpg",
      description: "Structural overhaul of a commercial block. Replaced aging partition columns with high-contrast steel columns, modernizing the layout into spacious open planning zones.",
      specs: [
        { label: "Regenerated Scope", value: "650 sqm" },
        { label: "Shoring Method", value: "Hydraulic Jack Matrix" },
        { label: "Aesthetic Vibe", value: "Industrial Brutalist" },
        { label: "Power Efficiency", value: "+40% Solar Integrated" }
      ]
    },
    {
      id: "subdivision-layout-preparation",
      title: "Geodetic Civil Site Grading",
      category: "Land Development",
      locationKey: "Laguna",
      locationDesc: "Calamba, Laguna",
      year: "2025",
      imageUrl: "/src/assets/images/zeke_project_three_1781624759261.jpg",
      description: "Strategic masterplanning, roadway grading, subgrade excavation, and structural concrete utility channels for high-end subdivision expansion in highly active Laguna clay soils.",
      specs: [
        { label: "Total Length Grade", value: "3.2 Kilometers" },
        { label: "Subgrade Code", value: "AASHTO Soil Standard" },
        { label: "Retaining Walls", value: "Pre-cast Reinforced" },
        { label: "Zoning Approved", value: "100% LGU Certified" }
      ]
    }
  ];

  // Filtering Logic
  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === "All Projects" || project.category === selectedCategory;
    const locationMatch = selectedLocation === "All Locations" || project.locationKey === selectedLocation;
    const queryMatch =
      !searchQuery.trim() ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.locationDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && locationMatch && queryMatch;
  });

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPortfolioPage - 1) * PROJECTS_PER_PAGE;
  const displayedProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handleProjectInquiry = (projectTitle: string) => {
    // Fill the contact form before navigating
    const messageTextarea = document.getElementById("message") as HTMLTextAreaElement;
    if (messageTextarea) {
      messageTextarea.value = `I am reviewing the elite portfolio and am highly interested in the structural metrics of the "${projectTitle}" project. Please provide pre-selling or contracting estimates.`;
    }
    // Set the dropdown field to realty or construction if it exists
    const projectTypeSelect = document.getElementById("contact-project-type") as HTMLSelectElement;
    if (projectTypeSelect) {
      projectTypeSelect.value = "realty";
    }
    setSelectedProject(null);
    onInquire();
  };

  if (selectedProject) {
    return (
      <PortfolioDetailPage
        project={selectedProject}
        onBack={() => {
          setSelectedProject(null);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onInquire={(title) => {
          handleProjectInquiry(title);
        }}
        onNavigate={onNavigate}
      />
    );
  }

  return (
    <div id="portfolio-page-main" className="pt-20 bg-white text-industrial-black min-h-screen">
      
      {/* 1. HERO BANNER */}
      <section id="portfolio-hero" className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center bg-industrial-black text-white overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/zeke_project_two_1781624742258.jpg"
            alt="Zeke structural commercial assembly project"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-industrial-black/90 to-industrial-black/55" />
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
                ELITE SITE SHOWCASE
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
              An elite portfolio showcasing unyielding structural integrity, precision design, and luxury real estate acquisitions. Each asset is backed by municipal clearances and geodetic soil audits.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap justify-center sm:justify-start gap-4"
            >
              <button
                id="portfolio-hero-cta-primary"
                onClick={onInquire}
                className="bg-white hover:bg-industrial-red hover:text-white hover:border-industrial-red text-industrial-black border-2 border-white font-display font-black uppercase tracking-widest text-xs py-4 px-8.5 inline-flex items-center gap-2 transition-all duration-300 active:translate-y-[2px] cursor-pointer"
              >
                Inquire now
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                id="portfolio-hero-cta-secondary"
                onClick={() => {
                  const element = document.getElementById("portfolio-showcase-section");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/60 hover:border-white font-display font-bold uppercase tracking-widest text-xs py-4 px-8.5 inline-flex items-center gap-2 transition-all duration-300 active:translate-y-[2px] cursor-pointer"
              >
                View project grid
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SECTION HEADER & FILTER SYSTEM */}
      <section id="portfolio-showcase-section" className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-stone-200">
        <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-stone-200">
            <div className="max-w-3xl">
              <span className="block font-mono text-xs font-bold tracking-widest text-industrial-red uppercase mb-4">
                REAL-WORLD OPERATIONS SHOWCASE
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-industrial-black tracking-tight uppercase leading-tight">
                What We Build: Building the future of the construction industry, <span className="text-industrial-red">one project</span> at a time.
              </h2>
              <div className="w-16 h-1 bg-industrial-red mt-4" />
            </div>
          </div>

          {/* FILTER CONTROLS LAYOUT */}
          <div id="portfolio-filters" className="mt-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between bg-stone-50 p-6 border border-stone-200">
            <div className="flex flex-wrap items-center gap-6 w-full">
              
              {/* Selector 1: Project Type */}
              <div className="flex flex-col min-w-[200px] w-full sm:w-auto relative">
                <label className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-2.5">
                  Filter by Project Type
                </label>
                <div className="relative">
                  <select
                    id="filter-project-type"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full sm:w-64 appearance-none bg-white border border-stone-300 hover:border-industrial-red focus:border-industrial-red focus:ring-1 focus:ring-industrial-red text-xs sm:text-sm font-semibold text-industrial-black font-sans uppercase tracking-wider py-3.5 pl-4 pr-10 cursor-pointer transition-all duration-200 focus:outline-none"
                  >
                    <option value="All Projects">All Projects</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Renovations">Renovations</option>
                    <option value="Land Development">Land Development</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-stone-500">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Selector 2: Location */}
              <div className="flex flex-col min-w-[200px] w-full sm:w-auto relative">
                <label className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-2.5">
                  Filter by Location
                </label>
                <div className="relative">
                  <select
                    id="filter-location"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full sm:w-64 appearance-none bg-white border border-stone-300 hover:border-industrial-red focus:border-industrial-red focus:ring-1 focus:ring-industrial-red text-xs sm:text-sm font-semibold text-industrial-black font-sans uppercase tracking-wider py-3.5 pl-4 pr-10 cursor-pointer transition-all duration-200 focus:outline-none"
                  >
                    <option value="All Locations">All Locations</option>
                    <option value="Metro Manila">Metro Manila</option>
                    <option value="Cavite">Cavite</option>
                    <option value="Laguna">Laguna</option>
                    <option value="Rizal">Rizal</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-stone-500">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Selector 3: Search Bar */}
              <div className="flex flex-col min-w-[240px] w-full sm:w-auto flex-1 relative">
                <label className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-2.5">
                  Search Blueprint Assets
                </label>
                <div className="relative">
                  <input
                    id="portfolio-search-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ENTER SPECIFICATION OR NAME..."
                    className="w-full appearance-none bg-white border border-stone-300 hover:border-industrial-red focus:border-industrial-red focus:ring-1 focus:ring-industrial-red text-xs sm:text-sm font-semibold text-industrial-black font-mono uppercase tracking-wider py-3.5 pl-10 pr-10 transition-all duration-200 focus:outline-none"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-stone-500">
                    <Search className="w-4 h-4 text-stone-400" />
                  </div>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-stone-400 hover:text-industrial-red font-mono text-xs cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

            </div>

            {/* Filter Status Reset Info */}
            {(selectedCategory !== "All Projects" || selectedLocation !== "All Locations" || searchQuery !== "") && (
              <button
                id="reset-filters-btn"
                onClick={() => {
                  setSelectedCategory("All Projects");
                  setSelectedLocation("All Locations");
                  setSearchQuery("");
                }}
                className="text-xs font-mono font-bold text-industrial-red hover:text-red-700 underline flex-shrink-0 cursor-pointer"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 3. THE PORTFOLIO GRID */}
      <section id="portfolio-core-grid" className="py-20 lg:py-28 bg-stone-50 relative">
        <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {filteredProjects.length === 0 ? (
            <div className="bg-white border border-stone-200 p-16 text-center text-stone-500 font-sans max-w-xl mx-auto">
              <Info className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
              <p className="font-bold text-base text-industrial-black uppercase tracking-wider mb-2">No Projects Match</p>
              <p className="text-sm text-stone-500">
                Currently, no projects fall under the combination of <span className="font-bold">"{selectedCategory}"</span> in <span className="font-bold">"{selectedLocation}"</span>.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All Projects");
                  setSelectedLocation("All Locations");
                }}
                className="mt-6 bg-industrial-black hover:bg-industrial-red text-white text-xs font-mono font-bold uppercase tracking-widest py-3 px-6 transition-all duration-300"
              >
                Reset Selection
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {displayedProjects.map((project) => (
                  <div
                    key={project.id}
                    id={`portfolio-item-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="group bg-white border border-stone-200 hover:border-industrial-red transition-all duration-300 flex flex-col overflow-hidden cursor-pointer hover:shadow-lg rounded-none"
                  >
                    {/* Huge image placeholder maintaining standard 16:9 aspect ratio */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-stone-100 border-b border-stone-200">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                      />
                      
                      {/* Dark gradient shadow layer */}
                      <div className="absolute inset-0 bg-gradient-to-t from-industrial-black/45 via-transparent to-transparent opacity-70" />
                      
                      {/* Corner Tag */}
                      <div className="absolute top-4 left-4 bg-industrial-black text-white px-3 py-1 font-mono text-[9px] tracking-widest uppercase font-bold">
                        {project.category}
                      </div>
                    </div>

                    {/* Bottom Content Block */}
                    <div className="p-6 sm:p-8 flex items-center justify-between gap-6">
                      <div>
                        {/* Project Title */}
                        <h3 className="font-display font-black text-lg sm:text-xl text-industrial-black uppercase tracking-tight group-hover:text-industrial-red transition-colors duration-200">
                          {project.title}
                        </h3>
                        {/* Subtitle / Details */}
                        <p className="text-stone-500 text-xs sm:text-sm mt-1 mb-0 font-sans tracking-wide">
                          Construction &amp; Realty | {project.locationDesc}
                        </p>
                      </div>

                      {/* Interactive Action: A crisp black-and-red arrow icon on the far right of text block */}
                      <div className="flex-shrink-0 w-10 h-10 bg-industrial-black text-white group-hover:bg-[#E11D48] transition-colors duration-300 flex items-center justify-center relative">
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 bg-industrial-red" />
                      </div>
                    </div>

                  </div>
                ))}
              </div>

              {/* PAGINATION CONTROLS */}
              {totalPages > 1 && (
                <div className="mt-16 flex flex-col sm:flex-row items-center justify-between border-t border-stone-200 pt-8 gap-4 font-mono">
                  <span className="text-xs text-zinc-500 uppercase tracking-widest">
                    Showing Page <span className="text-industrial-black font-semibold">{currentPortfolioPage}</span> of <span className="text-industrial-black font-semibold">{totalPages}</span> ({filteredProjects.length} total entries)
                  </span>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      id="portfolio-pagination-prev"
                      disabled={currentPortfolioPage === 1}
                      onClick={() => setCurrentPortfolioPage((prev) => Math.max(1, prev - 1))}
                      className="px-4 py-3 border border-stone-200 hover:border-industrial-red disabled:opacity-40 disabled:hover:border-stone-200 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed bg-white text-zinc-700 flex items-center gap-1.5 uppercase tracking-wider text-[10px] font-bold"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      PREV
                    </button>

                    <div className="flex items-center space-x-1">
                      {Array.from({ length: totalPages }).map((_, idx) => {
                        const pageNum = idx + 1;
                        return (
                          <button
                            key={pageNum}
                            id={`portfolio-pagination-page-${pageNum}`}
                            onClick={() => setCurrentPortfolioPage(pageNum)}
                            className={`w-10 h-10 border text-xs font-bold transition-all duration-200 cursor-pointer font-mono flex items-center justify-center ${
                              currentPortfolioPage === pageNum
                                ? "bg-industrial-black border-industrial-black text-white"
                                : "bg-white border-stone-200 hover:border-industrial-red text-zinc-700 hover:text-industrial-red"
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      id="portfolio-pagination-next"
                      disabled={currentPortfolioPage === totalPages}
                      onClick={() => setCurrentPortfolioPage((prev) => Math.min(totalPages, prev + 1))}
                      className="px-4 py-3 border border-stone-200 hover:border-industrial-red disabled:opacity-40 disabled:hover:border-stone-200 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed bg-white text-zinc-700 flex items-center gap-1.5 uppercase tracking-wider text-[10px] font-bold"
                    >
                      NEXT
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

        </div>
      </section>

      {/* 4. READY TO WORK TOGETHER? CTA SECTION */}
      <section id="portfolio-work-cta" className="py-24 bg-black text-white relative overflow-hidden border-t-2 border-industrial-red">
        {/* Background Image structure with slow black-to-image fade effect */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/zeke_hero_1781624709150.jpg"
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
              id="portfolio-cta-btn"
              onClick={onInquire}
              className="bg-industrial-red hover:bg-red-700 text-white font-display font-bold uppercase tracking-widest text-xs sm:text-sm py-4.5 px-10 transition-all duration-300 w-full sm:w-auto shadow-lg shadow-industrial-red/25 active:translate-y-[2px]"
            >
              Start Your Project
            </button>

            <button
              id="portfolio-cta-about"
              onClick={() => onNavigate("about")}
              className="bg-transparent hover:bg-white/5 text-stone-100 hover:text-white font-display font-bold uppercase tracking-widest text-xs sm:text-sm py-4.5 px-10 border border-zinc-700 hover:border-white transition-all duration-300 w-full sm:w-auto active:translate-y-[2px]"
            >
              Learn About Us
            </button>

          </div>

        </div>
      </section>

      {/* DETAIL SPECIFICATIONS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            id="portfolio-detail-modal-root"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-industrial-black/90 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              id="portfolio-project-spec-modal"
              initial={{ scale: 0.96, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border-2 border-industrial-red text-industrial-black w-full max-w-4xl rounded-none shadow-2xl relative overflow-hidden"
            >
              
              {/* Corner accent border */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-industrial-red/5 rotate-45 transform translate-x-8 -translate-y-8 pointer-events-none" />

              {/* Close Button Top Right */}
              <button
                id="modal-close-top"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-stone-150 hover:bg-industrial-red text-industrial-black hover:text-white p-2.5 transition-all duration-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-10">
                
                {/* Modal Left Image Container */}
                <div className="space-y-6">
                  <div className="relative bg-stone-100 p-1 border border-stone-200/80">
                    <img
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover aspect-[4/3]"
                    />
                    <div className="absolute bottom-3 left-3 bg-industrial-black text-white text-[9px] font-mono tracking-widest uppercase py-0.5 px-2">
                       ZK RECORD // {selectedProject.year}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display font-black text-xs uppercase tracking-widest text-industrial-red border-b border-stone-200 pb-2 mb-3 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-industrial-red" />
                      Structural Overview
                    </h4>
                    <p className="text-stone-600 text-xs sm:text-sm tracking-wide leading-relaxed font-sans">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

                {/* Modal Right Spec sheet */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="mb-6">
                      <span className="inline-block font-mono text-[9px] text-industrial-red font-bold uppercase tracking-widest border border-industrial-red/30 px-2.5 py-0.5 mb-2.5">
                        {selectedProject.category}
                      </span>
                      <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-industrial-black mb-1">
                        {selectedProject.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-xs font-mono text-stone-500 mt-2">
                        <MapPin className="w-4 h-4 text-industrial-red" />
                        <span>{selectedProject.locationDesc}</span>
                        <span>•</span>
                        <span>Year completed {selectedProject.year}</span>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-display font-black text-xs uppercase tracking-widest text-stone-400 border-b border-stone-200 pb-2 mb-4">
                        Structural Engineering Specs
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedProject.specs.map((spec, index) => (
                          <div key={index} className="bg-stone-50 border border-stone-200 p-4">
                            <span className="block font-mono text-[9px] text-stone-500 uppercase tracking-widest">
                              {spec.label}
                            </span>
                            <span className="block font-display font-bold text-xs sm:text-sm text-industrial-black mt-1 uppercase">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions buttons inside the modal */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-stone-200">
                    <button
                      id="modal-inquire-direct"
                      onClick={() => handleProjectInquiry(selectedProject.title)}
                      className="bg-industrial-red hover:bg-zinc-900 border border-transparent hover:border-industrial-red text-white hover:text-industrial-red font-display font-black uppercase tracking-widest text-xs py-4 px-6 text-center transition-all duration-300 cursor-pointer"
                    >
                      Inquire About This
                    </button>
                    <button
                      id="modal-return-gallery"
                      onClick={() => setSelectedProject(null)}
                      className="bg-transparent hover:bg-stone-100 text-stone-600 hover:text-industrial-black font-display font-bold uppercase tracking-widest text-xs py-4 px-6 text-center border border-stone-300 transition-all duration-300 cursor-pointer"
                    >
                      Return to Gallery
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
