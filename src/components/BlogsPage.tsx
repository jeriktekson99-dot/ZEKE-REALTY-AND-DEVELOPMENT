import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import BlogDetailPage from "./BlogDetailPage";
import {
  Calendar,
  User,
  ArrowRight,
  X,
  FileText,
  Search,
  SlidersHorizontal,
  Mail,
  Phone,
  ArrowUpRight,
  Download,
  Info,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  category: "Market Analysis" | "Innovation & Technology" | "Civil Engineering" | "Project Update";
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  imageUrl: string;
}

export default function BlogsPage({
  onNavigate,
  onInquire,
  initialPost = null,
  onClearInitialPost
}: {
  onNavigate: (section: string) => void;
  onInquire: () => void;
  initialPost?: BlogPost | null;
  onClearInitialPost?: () => void;
}) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(initialPost);
  const [currentBlogPage, setCurrentBlogPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");

  // Sync initialPost when it gets loaded from central App routing
  useEffect(() => {
    if (initialPost) {
      setSelectedPost(initialPost);
    }
  }, [initialPost]);

  const POSTS_PER_PAGE = 6;

  // Reset page to 1 when search or category filter updates
  useEffect(() => {
    setCurrentBlogPage(1);
  }, [searchQuery, selectedCategory]);

  // Core featured article data, split-screen highlight
  const featuredArticle: BlogPost = {
    id: "featured-drone-deploy",
    title: "Zeke Realty & DroneDeploy Partner to Standardize Reality Capture Across 1,000+ Active Projects",
    category: "Innovation & Technology",
    excerpt: "Deploying high-frequency autonomous UAV sweeps to construct sub-millimeter BIM telemetry, verify site compaction volumes, and safeguard title easements.",
    content: "Zeke Development Corp has officially finalized a strategic integration with DroneDeploy, deploying autonomous flight sweep matrices across our complete pipeline in Cavite, Laguna, and Metro Manila. Instead of relying on delayed post-excavation surveyor reports, our architectural and civil units now receive orthomosaic 3D elevation maps within 3 hours of grading. This allows us to track material distribution with extreme geodetic accuracy, verify 98% Proctor compaction values, and identify structural misalignments instantly prior to concrete pouring. By opening this data pipeline to our escrows and title buyers, we guarantee complete geometric transparency.",
    date: "May 17, 2026",
    author: "Engr. Marcus De Vega",
    readTime: "8 MIN READ",
    imageUrl: "/src/assets/images/zeke_about_workflow_1781626977867.jpg"
  };

  // 12 substantive, industrial-focused articles matching the 4-row by 3-column requirement
  const posts: BlogPost[] = [
    {
      id: "post-1",
      title: "Through the Looking Glass: Inside the Realty Market's Newest Wave",
      category: "Market Analysis",
      excerpt: "An in-depth analysis of high-yield industrial zones and decentralized estate corridors across Cavite and Laguna.",
      content: "As commercial density inside Metro Manila reaches saturation point, professional developers and private trusts are aggressively pivoting south. The Cavite-Laguna Expressway (CALAX) corridor has initiated an unprecedented surge in premium warehouse demand. In this paper, our financial analysts index geodetic title valuations against historical tax yields. We demonstrate why investing in land grading and structural planning early secures an estimated 18.4% CAP rate appreciation within 24 months of site preparation.",
      date: "May 12, 2026",
      author: "Cathy Santos, MBA",
      readTime: "6 MIN READ",
      imageUrl: "/src/assets/images/zeke_hero_1781624709150.jpg"
    },
    {
      id: "post-2",
      title: "Seismic Grade 4 Standards: Engineering Heavy Cantilevers on Cavite Slopes",
      category: "Civil Engineering",
      excerpt: "Evaluating soil shear resilience, sub-grade anchorage matrices, and chemical epoxy joint stability in high-slope developments.",
      content: "Designing premium estates on Tagaytay's scenic ridge lines demands structurally uncompromising engineering. Our structural team discusses the physics behind Zone 4 seismic resistance. Standard wet concrete foundations are insufficient here; instead, our layouts utilize deep drilled anchors set with high-load chemical epoxy resins and connected directly to a network of pre-cast shear walls. This ensures lateral load balancing during ground motion anomalies.",
      date: "April 28, 2026",
      author: "Engr. Marcus De Vega",
      readTime: "10 MIN READ",
      imageUrl: "/src/assets/images/zeke_project_one_1781624725520.jpg"
    },
    {
      id: "post-3",
      title: "Hydration Metrics: Thermal Imagery for Estimating Concrete Setting Speed",
      category: "Innovation & Technology",
      excerpt: "Using non-destructive thermal sensors to audit core curing temperatures and prevent internal thermal cracking.",
      content: "High-durability commercial building columns fail prematurely if thermal gradients during initial cure cycles exceed structural thresholds. By employing custom thermal imaging during early hydration stages, our geologists register real-time chemical reaction rates. This data drives our automated cooling water spray cycles, securing maximum compressive pressure limits exceeding 45 MPa.",
      date: "April 15, 2026",
      author: "Engr. Alejandro Cruz",
      readTime: "7 MIN READ",
      imageUrl: "/src/assets/images/zeke_project_two_1781624742258.jpg"
    },
    {
      id: "post-4",
      title: "Structural Joint Rehabilitation on Commercial Urban Refits",
      category: "Project Update",
      excerpt: "Replacing decaying wooden supports with reinforced ASTM composite steel framework inside legacy city warehouses.",
      content: "Retrofitting legacy commercial warehouses inside Metro Manila presents distinct engineering challenges. Working with tightly enclosed spaces, we deployed heavy hydraulic jacks to temporarily float upper floors. Our crews systematically cut out degraded vertical structural columns, replacing them with custom ASTM-grade structural steel members anchored to a newly cast concrete base.",
      date: "March 30, 2026",
      author: "Engr. Marcus De Vega",
      readTime: "5 MIN READ",
      imageUrl: "/src/assets/images/zeke_project_three_1781624759261.jpg"
    },
    {
      id: "post-5",
      title: "Subgrade Compaction: Verifying Base Resilience on Clay-Dense Soil Layouts",
      category: "Civil Engineering",
      excerpt: "Why the standard soil Proctor test is our foundation's absolute first rule of structural survival.",
      content: "Laguna's active clay soils change volume rapidly during seasonal rain cycles, threatening the joint integrity of standard foundation rings. Our soil classification labs implement triple-point geodetic checks and heavy vibratory rollers to eliminate air inclusions. This comprehensive process prevents settlement fractures and uneven structural shifting over decades.",
      date: "March 18, 2026",
      author: "Dr. Roberto Gomez, Geologist",
      readTime: "9 MIN READ",
      imageUrl: "/src/assets/images/zeke_about_hero_1781626949346.jpg"
    },
    {
      id: "post-6",
      title: "The Design-Build Advantage: Eliminating Contractor and Realty Friction",
      category: "Market Analysis",
      excerpt: "How a unified single-escrow system reduces spatial optimization mistakes and speeds up project handovers.",
      content: "Traditional development segregates land buying, civil engineering, and general contracting, leading to massive tracking disputes and delayed permitting. Zeke Realty and Construction Development operates a consolidated vertical platform. With in-house legal experts coordinating direct with planners and structural engineers, our clients bypass middlemen completely.",
      date: "February 24, 2026",
      author: "Cathy Santos, MBA",
      readTime: "6 MIN READ",
      imageUrl: "/src/assets/images/zeke_about_values_1781626995702.jpg"
    },
    {
      id: "post-7",
      title: "Decentralized Energy: Integrating Photovoltaic Slabs into Commercial Roofs",
      category: "Innovation & Technology",
      excerpt: "Designing load-bearing metal structures configured for dual structural roof shells and solar collection arrays.",
      content: "Adapting industrial warehouse layouts for green energy grids requires strict load balancing calculations. Solar arrays introduce significant constant drag during typhoons. Our architectural team walks through our custom geometric layout plans, showing how we integrate specialized aerodynamic tracks that secure standard panels while acting as lateral wind deflectors.",
      date: "February 08, 2026",
      author: "Engr. Alejandro Cruz",
      readTime: "8 MIN READ",
      imageUrl: "/src/assets/images/zeke_solution_1781624797540.jpg"
    },
    {
      id: "post-8",
      title: "Navigating LGU Building Permits: A Legal and Geodetic Blueprint",
      category: "Market Analysis",
      excerpt: "A tactical guide to clearing title audits, zoning clearances, and environmental compliance certificates.",
      content: "Obtaining building permits in high-density areas often represents a significant bottleneck for developers. We outline the key regulatory gateways of local government units (LGU). Learn how Zeke coordinates land surveys, master plans, structural calculation papers, and fire safety ratings early to secure quick authorization.",
      date: "January 22, 2026",
      author: "Atty. Liza Alonte, Land Specialist",
      readTime: "11 MIN READ",
      imageUrl: "/src/assets/images/zeke_problem_1781624780339.jpg"
    },
    {
      id: "post-9",
      title: "Evaluating Ultra-High-Performance Fiber-Reinforced Concrete (UHPFRC)",
      category: "Innovation & Technology",
      excerpt: "Analyzing the micro-elastic behaviors and high-tensile resistance of metal fibers inside pre-cast building skeletons.",
      content: "Zeke Material Labs is exploring the application of synthetic micro-wires inside cement mixtures. UHPFRC displays extraordinary flexibility and resistance to micro-fracturing under intense load variations, reducing the required volume of steel reinforcement bars while delivering unparalleled aesthetic sleekness.",
      date: "January 04, 2026",
      author: "Dr. Roberto Gomez, Geologist",
      readTime: "9 MIN READ",
      imageUrl: "/src/assets/images/zeke_team_marcus_1781627029490.jpg"
    },
    {
      id: "post-10",
      title: "Pasig Workspace Renovation: Bringing Spatial Flow to Brutalist Frames",
      category: "Project Update",
      excerpt: "Expanding interior volume by removing intermediate columns and installing custom tension-braced horizontal steel headers.",
      content: "A detailed review of our structural remodeling program in Pasig City. By inserting high-tension overhead horizontal beams, we opened up a previously cramped workspace layout, maximizing natural light distribution and optimizing energy conservation parameters.",
      date: "December 15, 2025",
      author: "Engr. Marcus De Vega",
      readTime: "6 MIN READ",
      imageUrl: "/src/assets/images/zeke_team_cathy_1781627011645.jpg"
    },
    {
      id: "post-11",
      title: "Erosion Risk Factors in Ridge-Line Residential Foundations",
      category: "Civil Engineering",
      excerpt: "Strategic geomorphology: mapping underground water channels and building robust pile arrays on steep layouts.",
      content: "Hillside developments are vulnerable to water drainage issues that slowly soften foundational soils. We share how Zeke engineers implement sub-surface geopipes and heavy stone gabion walls to safely direct tropical rainwater flows away from structural columns, keeping the site completely stable.",
      date: "December 02, 2025",
      author: "Dr. Roberto Gomez, Geologist",
      readTime: "8 MIN READ",
      imageUrl: "/src/assets/images/zeke_project_one_1781624725520.jpg"
    },
    {
      id: "post-12",
      title: "Pre-Selling Title Securitization: Protecting Multi-Family Appraisals",
      category: "Market Analysis",
      excerpt: "How cadastral verification surveys block boundary overlap and guarantee title safety for investors.",
      content: "Boundary challenges cause immense litigation pain for commercial property buyers. In this guide, our realty and title team shows how geodetic surveys detect boundary drift early. This safeguards the appraisal values of pre-selling developments, maintaining an unblemished custody chain of ownership.",
      date: "November 19, 2025",
      author: "Atty. Liza Alonte, Land Specialist",
      readTime: "10 MIN READ",
      imageUrl: "/src/assets/images/zeke_project_three_1781624759261.jpg"
    }
  ];

  // Search and Category filter handling
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = ["All Categories", "Market Analysis", "Innovation & Technology", "Civil Engineering", "Project Update"];

  const handleReadPost = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handlePostInquiry = (articleTitle: string) => {
    const messageTextarea = document.getElementById("message") as HTMLTextAreaElement;
    if (messageTextarea) {
      messageTextarea.value = `I am reviewing the Zeke Technical Insights archives regarding "${articleTitle}". I would like to consult with an engineer or investment broker on this specific matter.`;
    }
    const select = document.getElementById("contact-topic") as HTMLSelectElement;
    if (select) {
      select.value = "realty";
    }
    setSelectedPost(null);
    onInquire();
  };

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentBlogPage - 1) * POSTS_PER_PAGE;
  const displayedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  if (selectedPost) {
    const allPosts = [featuredArticle, ...posts];
    return (
      <BlogDetailPage
        post={selectedPost}
        relatedPosts={allPosts}
        onBack={() => {
          setSelectedPost(null);
          if (onClearInitialPost) onClearInitialPost();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onInquire={handlePostInquiry}
        onSelectPost={setSelectedPost}
        onNavigate={onNavigate}
      />
    );
  }

  return (
    <div id="blogs-page-main" className="pt-20 bg-white text-industrial-black min-h-screen">
      
      {/* 1. HERO BANNER */}
      <section id="blogs-hero" className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center bg-industrial-black text-white overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/zeke_solution_1781624797540.jpg"
            alt="Structural steel and modern architectural skeleton"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-40 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-industrial-black/90 to-industrial-black/45" />
          <div className="absolute inset-0 industrial-grid-dark opacity-15 pointer-events-none" />
        </div>

        {/* Structural design corners */}
        <div className="absolute top-0 right-0 w-24 h-24 border-r-4 border-t-4 border-industrial-red/30 m-8 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-industrial-red/30 m-8 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-industrial-red/15 border-l-4 border-industrial-red px-3 py-1 mb-6"
            >
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#E11D48] uppercase">
                AUTHORITATIVE INSIGHTS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-7xl font-display font-black leading-none tracking-tight uppercase"
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
              Expert insights, industry trends, and architectural breakthroughs from the Zeke Development team. Uncover geodetic research, soil studies, and capital appreciation analysis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap justify-center sm:justify-start gap-4"
            >
              <button
                id="blogs-hero-cta-read"
                onClick={() => {
                  const element = document.getElementById("featured-article-anchor");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white hover:bg-industrial-red hover:text-white hover:border-industrial-red text-industrial-black border-2 border-white font-display font-bold uppercase tracking-widest text-xs py-4 px-8 inline-flex items-center gap-2 transition-all duration-300 active:translate-y-[2px] cursor-pointer"
              >
                Featured Article
                <ArrowRight className="w-4 h-4 text-industrial-red group-hover:text-white" />
              </button>
              <button
                id="blogs-hero-cta-secondary"
                onClick={() => {
                  const element = document.getElementById("blogs-grid-section");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/60 hover:border-white font-display font-bold uppercase tracking-widest text-xs py-4 px-8 inline-flex items-center gap-2 transition-all duration-300 active:translate-y-[2px] cursor-pointer"
              >
                Browse All 12 Logs
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED ARTICLE SECTION */}
      <section id="featured-article-anchor" className="py-20 bg-white relative border-b border-stone-200">
        <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="block font-mono text-xs font-bold tracking-widest text-industrial-red uppercase mb-4">
            FEATURED INDUSTRY RELEASE
          </span>
          
          <div
            id="featured-article-card"
            onClick={() => handleReadPost(featuredArticle)}
            className="group bg-white border border-stone-200 hover:border-industrial-red transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-sm hover:shadow-lg cursor-pointer"
          >
            {/* Left Side (Text Panel) */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <span className="inline-block font-mono text-xs font-extrabold text-[#E11D48] bg-rose-50 px-3 py-1 mb-6 border border-rose-100 uppercase tracking-widest">
                  {featuredArticle.category}
                </span>
                
                <h2 className="text-2xl sm:text-3.5xl font-display font-black text-industrial-black uppercase tracking-tight leading-tight group-hover:text-industrial-red transition-colors duration-200 mb-6">
                  {featuredArticle.title}
                </h2>
                
                <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed tracking-wide mb-8">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-stone-100">
                <div className="flex items-center space-x-4 text-xs font-mono text-stone-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-industrial-red" />
                    Published: {featuredArticle.date}
                  </span>
                  <span>•</span>
                  <span>Authored by Zeke Engineering</span>
                </div>
                
                <span className="inline-flex items-center gap-1.5 font-mono text-xs font-extrabold uppercase tracking-widest text-industrial-red group-hover:text-industrial-black transition-colors">
                  READ CASE ANALYSIS
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </div>
            </div>

            {/* Right Side (Image Panel) */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[500px] bg-stone-100">
              <img
                src={featuredArticle.imageUrl}
                alt={featuredArticle.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-101.5 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-industrial-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 right-6 bg-industrial-black text-white px-4 py-2 text-xs font-mono tracking-widest uppercase font-bold">
                ZEKE UAV CONTROL // MAY 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH AND QUICK-NAV BAR */}
      <section id="blogs-grid-section" className="py-12 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center bg-white p-6 border border-stone-200">
            
            {/* Search Input */}
            <div className="relative w-full lg:flex-1">
              <input
                id="blog-search-field"
                type="text"
                placeholder="Search structural logs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 hover:border-industrial-red focus:border-industrial-red focus:ring-1 focus:ring-industrial-red text-xs sm:text-sm font-sans py-3.5 pl-11 pr-4 focus:outline-none focus:bg-white transition-all duration-200 rounded-none"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-stone-400">
                <Search className="w-4 h-4" />
              </div>
            </div>

            {/* Category Dropdown Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
              <span className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest hidden sm:inline whitespace-nowrap">
                Filter by Category:
              </span>
              <div className="relative w-full sm:w-64">
                <select
                  id="blog-category-dropdown"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full appearance-none bg-stone-50 border border-stone-300 hover:border-industrial-red focus:border-industrial-red focus:ring-1 focus:ring-industrial-red text-xs sm:text-sm font-semibold text-industrial-black font-sans uppercase tracking-wider py-3.5 pl-4 pr-10 cursor-pointer transition-all duration-200 focus:outline-none"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === "All Categories" ? "ALL ENTRIES" : cat.toUpperCase()}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-stone-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MAIN BLOG ARTICLE GRID (12 articles structured) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredPosts.length === 0 ? (
            <div className="bg-white border border-stone-200 p-16 text-center text-stone-500 font-sans max-w-xl mx-auto">
              <Info className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
              <p className="font-bold text-base text-industrial-black uppercase tracking-wider mb-2">No Entries Found</p>
              <p className="text-sm">
                No archived reports matched your query <span className="font-bold">"{searchQuery}"</span>. Clear search inputs to browse our core library.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Categories");
                }}
                className="mt-6 bg-industrial-black hover:bg-industrial-red text-white text-xs font-mono font-bold uppercase tracking-widest py-3 px-6 transition-all duration-300 cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <>
              {/* Dense 3-column grid container */}
              <div id="articles-main-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedPosts.map((post) => (
                  <div
                    key={post.id}
                    id={`blog-grid-card-${post.id}`}
                    onClick={() => handleReadPost(post)}
                    className="group bg-white border border-stone-200 hover:border-industrial-red transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md cursor-pointer rounded-none"
                  >
                    <div>
                      {/* Top Image Placeholder with locked 16:9 ratio */}
                      <div className="relative w-full aspect-[16/9] overflow-hidden bg-stone-100 border-b border-stone-200">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-102.5 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-industrial-black text-white text-[9px] font-mono tracking-widest uppercase font-bold py-0.5 px-2">
                          {post.readTime}
                        </div>
                      </div>

                      {/* Content Details Block */}
                      <div className="p-6">
                        <span className="block font-mono text-[10px] font-bold text-industrial-red uppercase tracking-widest mb-3">
                          {post.category}
                        </span>

                        <h3 className="font-display font-black text-base sm:text-lg text-industrial-black group-hover:text-industrial-red transition-colors duration-200 line-clamp-2 uppercase tracking-tight leading-snug mb-3">
                          {post.title}
                        </h3>

                        <p className="text-stone-500 text-xs sm:text-sm tracking-wide leading-relaxed line-clamp-2 mb-0 font-sans">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Metadata row */}
                    <div className="p-6 border-t border-stone-100 flex items-center justify-between text-stone-400 font-mono text-[10px] uppercase">
                      <span>{post.date}</span>
                      <span className="text-industrial-red inline-flex items-center gap-1 group-hover:text-industrial-black transition-colors font-bold">
                        OPEN REPORT
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>

                  </div>
                ))}
              </div>

              {/* 4. PAGINATION CONTROLS */}
              {totalPages > 1 && (
                <div className="mt-16 flex flex-col sm:flex-row items-center justify-between border-t border-stone-200 pt-8 gap-4 font-mono">
                  <span className="text-xs text-zinc-500 uppercase tracking-widest">
                    Showing Page <span className="text-industrial-black font-semibold">{currentBlogPage}</span> of <span className="text-industrial-black font-semibold">{totalPages}</span> ({filteredPosts.length} total entries)
                  </span>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      id="blog-pagination-prev"
                      disabled={currentBlogPage === 1}
                      onClick={() => setCurrentBlogPage((prev) => Math.max(1, prev - 1))}
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
                            id={`blog-pagination-page-${pageNum}`}
                            onClick={() => setCurrentBlogPage(pageNum)}
                            className={`w-10 h-10 border text-xs font-bold transition-all duration-200 cursor-pointer font-mono flex items-center justify-center ${
                              currentBlogPage === pageNum
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
                      id="blog-pagination-next"
                      disabled={currentBlogPage === totalPages}
                      onClick={() => setCurrentBlogPage((prev) => Math.min(totalPages, prev + 1))}
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

      {/* 5. FOR MEDIA INQUIRIES SECTION */}
      <section id="media-inquiries-section" className="py-24 bg-white border-t border-b border-stone-200 relative">
        <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center sm:text-left mb-12">
            <span className="block font-mono text-xs font-bold tracking-widest text-industrial-red uppercase mb-3">
              ZEKE COOPERATION RAIL
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-industrial-black tracking-tight uppercase">
              For Media Inquiries
            </h2>
            <div className="w-16 h-1 bg-industrial-red mt-3 mx-auto sm:mx-0" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card 1 (PR Department) */}
            <div className="group bg-stone-50 border border-stone-200 hover:border-industrial-red transition-all duration-300 grid grid-cols-1 sm:grid-cols-12 overflow-hidden shadow-sm">
              <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="block font-mono text-[9px] font-extrabold text-[#E11D48] bg-rose-50 border border-rose-100 max-w-max px-2 py-0.5 uppercase tracking-widest mb-4">
                    MEDIA WING
                  </span>
                  
                  <h3 className="font-display font-black text-lg text-industrial-black uppercase tracking-tight mb-2.5">
                    PR &amp; Communications
                  </h3>
                  
                  <p className="text-stone-500 text-xs sm:text-sm tracking-wide leading-relaxed font-sans mb-6">
                    Connect with our media coordination representatives for public releases, speaking arrangements, or brand coordination structures.
                  </p>
                </div>

                {/* Contact icon rows */}
                <div className="space-y-3 pt-4 border-t border-stone-200/60 text-xs text-stone-600 font-mono">
                  <div className="flex items-center space-x-2.5">
                    <Mail className="w-4 h-4 text-industrial-red" />
                    <span>press@zeke-realtycorp.ph</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Phone className="w-4 h-4 text-industrial-red" />
                    <span>+63 (2) 8882-9353</span>
                  </div>
                </div>
              </div>

              {/* Right landscape photo holder */}
              <div className="sm:col-span-5 relative min-h-[200px] bg-stone-100">
                <img
                  src="/src/assets/images/zeke_about_workflow_1781626977867.jpg"
                  alt="Zeke workflow public relations communications"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-101.5 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Card 2 (Corporate Relations) */}
            <div className="group bg-stone-50 border border-stone-200 hover:border-industrial-red transition-all duration-300 grid grid-cols-1 sm:grid-cols-12 overflow-hidden shadow-sm">
              <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="block font-mono text-[9px] font-extrabold text-stone-500 bg-stone-150 border border-stone-200 max-w-max px-2 py-0.5 uppercase tracking-widest mb-4">
                    STAKEHOLDERS
                  </span>
                  
                  <h3 className="font-display font-black text-lg text-industrial-black uppercase tracking-tight mb-2.5">
                    Corporate Relations
                  </h3>
                  
                  <p className="text-stone-500 text-xs sm:text-sm tracking-wide leading-relaxed font-sans mb-6">
                    Stakeholder transparency, legal title audit inquiries, joint-venture structural proposals, and developer escrow governance files.
                  </p>
                </div>

                {/* Contact icon rows */}
                <div className="space-y-3 pt-4 border-t border-stone-200/60 text-xs text-stone-600 font-mono">
                  <div className="flex items-center space-x-2.5">
                    <Mail className="w-4 h-4 text-industrial-red" />
                    <span>corporate@zeke-realtycorp.ph</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Phone className="w-4 h-4 text-industrial-red" />
                    <span>+63 (46) 412-2931</span>
                  </div>
                </div>
              </div>

              {/* Right landscape photo holder */}
              <div className="sm:col-span-5 relative min-h-[200px] bg-stone-100">
                <img
                  src="/src/assets/images/zeke_about_values_1781626995702.jpg"
                  alt="Zeke industrial structural metrics corporate stakeholder"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-101.5 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. READY TO WORK TOGETHER? CTA SECTION */}
      <section id="blogs-work-cta" className="py-24 bg-black text-white relative overflow-hidden border-t-2 border-industrial-red">
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
              id="blogs-work-cta-primary"
              onClick={onInquire}
              className="bg-industrial-red hover:bg-red-700 text-white font-display font-bold uppercase tracking-widest text-xs sm:text-sm py-4.5 px-10 transition-all duration-300 w-full sm:w-auto shadow-lg shadow-industrial-red/25 active:translate-y-[2px]"
            >
              Start Your Project
            </button>

            <button
              id="blogs-work-cta-secondary"
              onClick={() => onNavigate("portfolio")}
              className="bg-transparent hover:bg-white/5 text-stone-100 hover:text-white font-display font-bold uppercase tracking-widest text-xs sm:text-sm py-4.5 px-10 border border-zinc-700 hover:border-white transition-all duration-300 w-full sm:w-auto active:translate-y-[2px]"
            >
              View Our Portfolio
            </button>

          </div>

        </div>
      </section>

      {/* TECHNICAL INSIGHT TECHNICAL READER MODAL */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            id="blog-detail-overlay-main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 z-50 bg-industrial-black/95 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              id="blog-analysis-modal"
              initial={{ scale: 0.96, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border-2 border-industrial-red text-industrial-black w-full max-w-3xl rounded-none shadow-2xl relative overflow-hidden"
            >
              {/* Engineering Blueprint Background matrix */}
              <div className="absolute inset-0 industrial-grid opacity-5 pointer-events-none" />

              {/* Close Button Top Right */}
              <button
                id="blog-modal-close-btn"
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-10 bg-stone-150 hover:bg-industrial-red text-industrial-black hover:text-white p-2.5 transition-all duration-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-10 relative z-10">
                
                {/* Header info */}
                <div className="mb-6">
                  <span className="inline-block font-mono text-[9px] text-[#E11D48] bg-rose-50 border border-rose-150 font-bold uppercase tracking-widest px-2.5 py-0.5 mb-2.5">
                    {selectedPost.category}
                  </span>
                  
                  <h3 className="font-display font-black text-xl sm:text-2.5xl uppercase tracking-tight text-industrial-black leading-tight mb-2">
                    {selectedPost.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-zinc-500 pt-3 border-t border-stone-100 mt-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-industrial-red" />
                      {selectedPost.date}
                    </span>
                    <span>•</span>
                    <span>Report Authored by: <span className="font-bold text-stone-800">{selectedPost.author}</span></span>
                    <span>•</span>
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>

                {/* Main Image Banner inside report portal */}
                <div className="relative aspect-[16/7] bg-stone-100 p-1 border border-stone-200 m-1 mb-6">
                  <img
                    src={selectedPost.imageUrl}
                    alt={selectedPost.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-3 left-3 bg-industrial-black text-white px-2.5 py-0.5 font-mono text-[8px] tracking-widest uppercase">
                    ZEKE COMPREHENSIVE RECORD // LOG ENTRY
                  </div>
                </div>

                {/* Core text content */}
                <div className="space-y-4 text-stone-600 text-xs sm:text-sm tracking-wide leading-relaxed font-sans max-h-[30vh] overflow-y-auto pr-2 border-b border-stone-100 pb-6 mb-6">
                  <p className="font-bold text-industrial-black border-l-4 border-industrial-red pl-4 py-1 bg-stone-50">
                    "{selectedPost.excerpt}"
                  </p>
                  <p className="pt-2">{selectedPost.content}</p>
                  <p>
                    Each technical journal entry published in our Zeke Insights log repository represents official project data compiled from our site surveyors and local geomorphological scientists. We seek to protect prospective land trust buyers and real estate developers by verifying ground condition ratings and materials compliance ahead of escrow deposits.
                  </p>
                  <p>
                    For detailed consultations on custom grade engineering codes, structural steel certifications, or available physical testing records, please initiate a direct request with our technical support team.
                  </p>
                </div>

                {/* Actions footer buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center bg-stone-50 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 border-t border-stone-200">
                  <span className="text-[10px] text-stone-400 font-mono">© 2026 ZEKE CORP INTEL SECTOR</span>
                  
                  <div className="flex gap-3 w-full sm:w-auto">
                    <button
                      id="blog-modal-direct-inquire"
                      onClick={() => handlePostInquiry(selectedPost.title)}
                      className="bg-industrial-red hover:bg-zinc-900 text-white font-display font-black uppercase tracking-widest text-[10px] sm:text-xs py-3 px-5 text-center transition-all duration-300 flex-1 sm:flex-none cursor-pointer"
                    >
                      Inquire About This Report
                    </button>
                    <button
                      id="blog-modal-dismiss"
                      onClick={() => setSelectedPost(null)}
                      className="bg-white hover:bg-stone-100 text-stone-600 font-display font-bold uppercase tracking-widest text-[10px] sm:text-xs py-3 px-5 text-center border border-stone-300 transition-all duration-300 flex-1 sm:flex-none cursor-pointer"
                    >
                      Return to Registry
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
