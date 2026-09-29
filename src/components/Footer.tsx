import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, FileText, Heart, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white/90 border-t border-brand-pink-muted mt-auto pt-10 pb-12 font-montserrat text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mandatory Affiliate Disclosure Trust Banner */}
        <div className="bg-brand-cream/40 border border-brand-pink-light/80 rounded-2xl p-4 sm:p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 shadow-xs">
          <div className="w-9 h-9 rounded-xl bg-brand-pink-deep/10 text-brand-pink-deep flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex-1 text-xs text-black/75 leading-relaxed">
            <span className="font-bold text-black uppercase tracking-wider text-[10px] block sm:inline sm:mr-2">
              Affiliate Disclosure:
            </span>
            stylAist partners with fashion brands and may earn an affiliate commission on qualifying purchases.
            <span className="text-black/50 ml-1">
              All product recommendations are curated independently according to seasonal color harmony and personal aesthetic style.
            </span>
          </div>
        </div>

        {/* Main Footer Links & Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-brand-pink-light/40">
          {/* Brand Mission Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-serif italic font-bold text-xl text-black">stylAist</span>
              <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-brand-pink-light/60 font-bold text-brand-pink-deep">
                Wardrobe Studio
              </span>
            </div>
            <p className="text-xs text-black/70 leading-relaxed max-w-sm">
              Our mission is to make personal styling, seasonal color palettes, and curated fashion discovery intuitive, accessible, and delight-driven—using 100% clothes-only studio photography and aesthetic blending.
            </p>
            <div className="pt-1 flex items-center gap-4">
              <Link 
                to="/about" 
                className="text-[11px] font-bold text-brand-pink-deep hover:text-black inline-flex items-center gap-1 transition-colors"
              >
                <span>Read our brand mission & styling guide</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">
              Explore
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link to="/" className="text-black/75 hover:text-brand-pink-deep transition-colors">
                  Style Blender
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-black/75 hover:text-brand-pink-deep transition-colors">
                  Curated Catalog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-black/75 hover:text-brand-pink-deep transition-colors flex items-center gap-1">
                  <span>About Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Trust Links Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">
              Trust & Legal
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link to="/privacy" className="text-black/75 hover:text-brand-pink-deep transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-brand-pink-deep/60" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-black/75 hover:text-brand-pink-deep transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-brand-pink-deep/60" />
                  <span>Terms of Service</span>
                </Link>
              </li>
              <li className="pt-1 text-xs text-black/70 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-brand-pink-deep/60 shrink-0" />
                <span>Contact & Support:</span>
                <a 
                  href="mailto:tchstud2026i2605@gmail.com" 
                  className="font-bold text-brand-pink-deep hover:underline truncate"
                >
                  tchstud2026i2605@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-black/50">
          <p>© {currentYear} stylAist. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Curated with</span>
            <Heart className="w-3 h-3 text-brand-pink-deep fill-brand-pink-deep" />
            <span>for personal wardrobe clarity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
