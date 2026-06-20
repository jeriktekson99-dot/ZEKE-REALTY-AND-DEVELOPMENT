import { ServiceItem, ProjectItem, TestimonialItem, BlogPostItem } from "./types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "planning-design",
    number: "01",
    title: "Planning and Design",
    description: "Detailed blue-printing, structural modeling, and modern industrial interior layout formulation.",
    features: ["BIM 3D Modeling", "Structural Engineering Analysis", "Zoning & Permitting Coordination"]
  },
  {
    id: "land-development",
    number: "02",
    title: "Land Development",
    description: "Site clearing, heavy excavating, grading, and structural civil works for site preparation.",
    features: ["Soil Integrity Analysis", "Topographic Surveys", "Drainage & Infrastructure Layout"]
  },
  {
    id: "construction",
    number: "03",
    title: "Construction",
    description: "Heavy steel-girded structural execution, concrete pouring, and professional architectural building.",
    features: ["Reinforced Concrete Forms", "High-Tensile Structural Steel", "Rigorous Safety Supervisions"]
  },
  {
    id: "renovations",
    number: "04",
    title: "Renovations",
    description: "Converting outdated properties into highly functional industrial-modern marvels safely.",
    features: ["Load-Bearing Modifications", "Acoustic & Thermal Refitting", "Interior Spatial Optimization"]
  },
  {
    id: "extensions",
    number: "05",
    title: "Extensions",
    description: "Vertical additions and horizontal scope expansions seamlessly integrated with original fabrics.",
    features: ["Foundation Expansion Audits", "Seamless Shear Wall Jointing", "Auxiliary Unit Formulation"]
  },
  {
    id: "realty",
    number: "06",
    title: "Realty",
    description: "Premium property acquisitions, legal land clearance, title transfer, and high-value listing management.",
    features: ["Absolute Title Clearance", "Commercial Portfolio Valuation", "Direct Developer Pricing Options"]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "minimalist-villa",
    title: "Modern Minimalist Villa",
    category: "Residential Architecture",
    location: "Tagaytay, Cavite",
    year: "2024",
    imageUrl: "/assets/images/zeke_project_one_1781624725520.jpg",
    details: "An award-winning concrete and glass masterpiece integrated with a lush cliffside view, utilizing advanced thermal insulation and brutalist styling lines.",
    specs: [
      { label: "Total Area", value: "450 sqm" },
      { label: "Structural Grid", value: "Reinforced Concrete" },
      { label: "Accent Palette", value: "Anodic Matte Black & Crimson" },
      { label: "Completion Time", value: "9 Months" }
    ]
  },
  {
    id: "commercial-complex",
    title: "Industrial Commercial Retail",
    category: "Commercial Infrastructure",
    location: "Quezon City, Metro Manila",
    year: "2025",
    imageUrl: "/assets/images/zeke_project_two_1781624742258.jpg",
    details: "A triple-tier commercial space constructed with visible high-tensile steel frames and red powder-coated structural accents to stand out in the busy business district.",
    specs: [
      { label: "Gross Floor Area", value: "1,200 sqm" },
      { label: "Core Frame", value: "ASTM A36 Heavy Steel" },
      { label: "HVAC System", value: "Integrated Energy Recovery VRF" },
      { label: "Completed Phase", value: "100% Operational" }
    ]
  },
  {
    id: "residential-duplex",
    title: "Modern Duplex Townhouses",
    category: "Realty & Development",
    location: "Alabang, Muntinlupa",
    year: "2026",
    imageUrl: "/assets/images/zeke_project_three_1781624759261.jpg",
    details: "A high-end residential complex designed for multi-generational luxury living, with self-contained solar backup panels and integrated safety structures.",
    specs: [
      { label: "Lot Area", value: "380 sqm x 2" },
      { label: "Power Grid", value: "6.5 kW Grid-Tied Solar System" },
      { label: "Safety Rating", value: "Zone 4 Seismic Resistance" },
      { label: "Sales Status", value: "Pre-Selling / Limited Slots" }
    ]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    stars: 5,
    quote: "The integration of land development and construction under Zeke absolutely eliminated the coordination headache. Our Tagaytay villa was delivered two months ahead of schedule with immaculate finish.",
    clientName: "Engr. Antonio Santos",
    role: "Property Owner & Tech Executive",
    location: "Tagaytay City"
  },
  {
    id: "t2",
    stars: 5,
    quote: "As a real estate investor, Zeke Realty's transparent title checking and legal execution saved me millions. The architectural design of our new commercial complex is a bold, modern landmark.",
    clientName: "Katrina Beltran",
    role: "Managing Director, Beltran Holdings",
    location: "Makati City"
  },
  {
    id: "t3",
    stars: 5,
    quote: "Zeke handled our ancestral home renovation. Their structural engineering team strengthened the foundation while matching our exact industrial-modern vision. Simply elite craft.",
    clientName: "Dr. Julian Reyes",
    role: "Cardiologist & Collector",
    location: "San Jose, Manila"
  }
];

export const BLOGS_DATA: BlogPostItem[] = [
  {
    id: "blog-1",
    date: "June 10, 2026",
    category: "Industry Insights",
    title: "Integrated Design-Build: The End of Fragmented Contractor Nightmares",
    excerpt: "Why separating design, land acquisition, and construction leads to budget overruns - and how our integrated blueprint solves it from day one.",
    author: "Zeke Dev Team",
    imageUrl: "/assets/images/zeke_solution_1781624797540.jpg",
    content: "For decades, property owners have suffered under the fragmented traditional approach: hiring an architect, bidding to separate general contractors, chasing land title specialists, and arguing over scope creep. We explore why Zeke's integrated strategy—combining design, development, and realty and logistics legal support under one single roof—redefines efficiency, guarantees structural speed, and keeps budgets locked down by using unified digital planning files."
  },
  {
    id: "blog-2",
    date: "May 28, 2026",
    category: "Realty Guide",
    title: "Selecting High-Yield Land in Calabarzon: A Realty Investor's Playbook",
    excerpt: "Discover the key factors driving high-yielding property values and structural soil suitability in Tagaytay, Cavite, and Batangas.",
    author: "Zeke Legal Division",
    imageUrl: "/assets/images/zeke_project_one_1781624725520.jpg",
    content: "Calabarzon is currently the fastest-growing investment hub just outside Metro Manila. However, building on rolling hills has unique zoning laws, volcanic safety requirements, and soil compaction thresholds. Our legal and realty division breaks down what to look for when inspecting agricultural-to-residential land conversions, resolving easement conflicts, and securing premium cliffside real estate without hidden transactional and municipal fees."
  },
  {
    id: "blog-3",
    date: "April 15, 2026",
    category: "Architecture",
    title: "Brutalist vs Industrial Modernism: Aesthetics or Pure Engineering?",
    excerpt: "An inside look at how raw materials, heavy steel columns, and bold crimson framing provide high-durability modernism that lasts.",
    author: "Arch. Marcus Zeke",
    imageUrl: "/assets/images/zeke_hero_1781624709150.jpg",
    content: "Why are raw concrete, dark steel, and sharp red accents more than just an aesthetic trend? Deep dive into the architectural mechanics of exposed structural steel beams, high-bearing concrete walls of industrial developments, and how brutalist geometries optimize wind-load distribution and lower cooling expenses through advanced material science and mass-wall physics."
  }
];
