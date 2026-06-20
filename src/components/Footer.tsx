import React from "react";
import { Hammer, Facebook, Instagram, Twitter, Linkedin, ArrowUp, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer({ onNavigate }: { onNavigate?: (section: string) => void }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleNavClick = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
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
    }
  };

  return (
    <footer id="footer-block" className="relative bg-[#020202] text-zinc-400 py-16 border-t border-zinc-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 industrial-grid-dark opacity-[0.03] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Segment: Brand, Contact Info, Sitemaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 pb-12 border-b border-zinc-900">
          
          {/* Col 1: Logo, Brand and Social Boxes (3 Columns) */}
          <div className="md:col-span-3 flex flex-col space-y-6">
            <div className="flex items-center space-x-3">
              {/* Custom Geometric Logo Icon to Match Navbar */}
              <div className="relative w-10 h-10 flex items-center justify-center bg-industrial-black border border-white/10 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 border-t-2 border-l-2 border-industrial-red"></div>
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-white/20"></div>
                <span className="font-display font-extrabold text-xl text-white tracking-tighter z-10 select-none">
                  Z<span className="text-industrial-red">E</span>
                </span>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-industrial-red rotate-45 transform origin-bottom-right"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-sm sm:text-base text-white tracking-widest leading-none">
                  ZEKE
                </span>
                <span className="text-[9px] text-zinc-400 font-mono tracking-widest leading-none mt-1 uppercase">
                  REALTY &amp; CONSTRUCTION
                </span>
              </div>
            </div>
            
            <p className="text-xs text-zinc-500 leading-relaxed font-sans">
              Zeke Realty and Construction Development is a heavy-assets general contractor and land legal consultancy firm specializing in seismically secure structures and geodetic site alignment.
            </p>

            {/* Social Media Boxes */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://web.facebook.com/zekerealtyconstructiondevelopment/?_rdc=1&_rdr#" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center text-zinc-500 hover:text-[#E11D48] hover:border-[#E11D48]/50 transition-all p-2.5 bg-zinc-950 border border-zinc-900 rounded-none w-10 h-10"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/zekerealty.constdev?fbclid=IwY2xjawSi-CNleHRuA2FlbQIxMABicmlkETFOaUxZYmMxT29la2VVRDdIc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvvIAEUWFIARYIPNT5vFM95uHkY_rq5tCCTJGH_5inig7lMT8HFk491YD3wj_aem__gpo5nryOc8maTQ6kuMCIw" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center text-zinc-500 hover:text-[#E11D48] hover:border-[#E11D48]/50 transition-all p-2.5 bg-zinc-950 border border-zinc-900 rounded-none w-10 h-10"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Our Services (3 Columns) */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-white border-l-2 border-industrial-red pl-3">
              Our Services
            </h4>
            <ul className="space-y-2 pt-2 text-xs font-mono">
              <li className="text-zinc-500 hover:text-zinc-300 transition-colors">Planning and Design</li>
              <li className="text-zinc-500 hover:text-zinc-300 transition-colors">Land Development</li>
              <li className="text-zinc-500 hover:text-zinc-300 transition-colors">Construction</li>
              <li className="text-zinc-500 hover:text-zinc-300 transition-colors">Renovations</li>
              <li className="text-zinc-500 hover:text-zinc-300 transition-colors">Extensions</li>
              <li className="text-zinc-500 hover:text-zinc-300 transition-colors">Realty &amp; Brokerage</li>
              <li className="text-zinc-500 hover:text-zinc-300 transition-colors">Project Management &amp; Trading</li>
            </ul>
          </div>

          {/* Col 3: Sitemap Links (2 Columns) */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-white border-l-2 border-industrial-red pl-3">
              Sitemap
            </h4>
            
            <div className="flex flex-col space-y-2 pt-2 text-xs font-mono uppercase tracking-widest">
              <button onClick={() => handleNavClick("home")} className="hover:text-white transition-colors cursor-pointer text-left">
                Home
              </button>
              <button onClick={() => handleNavClick("about")} className="hover:text-white transition-colors cursor-pointer text-left">
                About
              </button>
              <button onClick={() => handleNavClick("services")} className="hover:text-white transition-colors cursor-pointer text-left">
                Services
              </button>
              <button onClick={() => handleNavClick("portfolio")} className="hover:text-white transition-colors cursor-pointer text-left">
                Portfolio
              </button>
              <button onClick={() => handleNavClick("blogs")} className="hover:text-white transition-colors cursor-pointer text-left">
                Blogs
              </button>
              <button onClick={() => handleNavClick("contact")} className="hover:text-white transition-colors text-industrial-red cursor-pointer text-left">
                Contact
              </button>
            </div>
          </div>

          {/* Col 4: Corporate Desk (4 Columns) */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-white border-l-2 border-industrial-red pl-3">
              Corporate Desk
            </h4>
            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <a href="tel:+639068374150" className="flex items-center gap-2.5 text-zinc-400 hover:text-industrial-red transition-all group">
                <Phone className="w-4 h-4 text-zinc-600 group-hover:text-industrial-red transition-colors" />
                <span className="font-mono">0906 837 4150</span>
              </a>
              <a href="mailto:zekerealty.constdev@gmail.com" className="flex items-center gap-2.5 text-zinc-400 hover:text-industrial-red transition-all group">
                <Mail className="w-4 h-4 text-zinc-600 group-hover:text-industrial-red transition-colors" />
                <span className="font-mono text-xs sm:text-sm break-all">zekerealty.constdev@gmail.com</span>
              </a>
              <div className="flex items-start gap-2.5 text-zinc-400">
                <MapPin className="w-4 h-4 text-zinc-600 mt-0.5 flex-shrink-0" />
                <span className="font-sans text-xs leading-relaxed max-w-[240px]">
                  Blk. 20 Lot 3 The Villas at Dasmariñas Highlands Dasmariñas City, Dasmariñas City, 4114 Cavite
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-zinc-400">
                <Clock className="w-4 h-4 text-zinc-600 mt-0.5 flex-shrink-0" />
                <div className="font-sans text-xs leading-relaxed space-y-0.5">
                  <div>Mon – Fri: 8:00 AM – 5:00 PM</div>
                  <div>Sat: 8:00 AM – 12:00 PM</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mt-1">Philippine Time</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & micro details */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-mono tracking-wider text-zinc-600 uppercase">
          <div>
            © {new Date().getFullYear()} ZEKE REALTY &amp; CONSTRUCTION DEVELOPMENT. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-zinc-400 transition-colors">TERMS OF ENGAGEMENT</span>
            <span className="hover:text-zinc-400 transition-colors">STRUCTURAL CERTIFICATIONS</span>
            {/* Scroll back up anchor */}
            <button
              id="return-to-top"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-500 hover:text-industrial-red transition-all cursor-pointer font-bold focus:outline-none"
            >
              Back to Top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
