import { motion } from 'motion/react';
import { 
  Layers, 
  LayoutDashboard, 
  Sparkles, 
  Sliders, 
  ChevronRight,
  Info,
  Palette,
  ShieldCheck,
  Mail,
  FileText
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  const features = [
    {
      title: "1. Aesthetic Style Blender",
      icon: Layers,
      badge: "Core Studio",
      colorClass: "bg-purple-100 text-purple-800 border-purple-200",
      description: "Select and blend distinct fashion aesthetics—such as Minimalist Luxe, Urban Edge, Evening Elegance, Boho Dream, and Quiet Luxury. Browse curated lookbooks to explore high-res visual references.",
      actionText: "Blend Styles",
      actionPath: "/"
    },
    {
      title: "2. Seasonal Color Harmony",
      icon: Palette,
      badge: "Color Theory",
      colorClass: "bg-amber-100 text-amber-800 border-amber-200",
      description: "Select your seasonal color archetype from 12 classic palettes (Spring, Summer, Autumn, Winter) to discover clothing tones and harmonies that complement your natural coloring.",
      actionText: "Select Palette",
      actionPath: "/"
    },
    {
      title: "3. Curated Wardrobe Items",
      icon: LayoutDashboard,
      badge: "Gallery",
      colorClass: "bg-emerald-100 text-emerald-800 border-emerald-200",
      description: "Browse high-resolution studio clothing, shoes, and accessories curated specifically for your aesthetic mix and color season. Clean, clothes-only product photography with direct shop links.",
      actionText: "View Matching Items",
      actionPath: "/dashboard"
    },
    {
      title: "4. Precision Category & Budget Filters",
      icon: Sliders,
      badge: "Customization",
      colorClass: "bg-rose-100 text-rose-800 border-rose-200",
      description: "Filter items by category (tops, bottoms, footwear, dresses, accessories), set maximum budget caps, modesty levels, fit preferences, and occasion requirements.",
      actionText: "Explore Catalog",
      actionPath: "/dashboard"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="flex flex-col pb-12 max-w-4xl mx-auto font-montserrat"
    >
      {/* Header */}
      <header className="mb-8 px-2">
        <div className="flex items-center gap-2 text-brand-pink-deep bg-brand-pink-light/30 border border-brand-pink-light/60 px-3 py-1 rounded-full w-fit mb-3">
          <Info className="w-3.5 h-3.5" />
          <span className="text-[10px] font-black uppercase tracking-widest">Guide & Overview</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-black tracking-tight text-slate-900">
          About stylAist
        </h1>
        <p className="text-sm text-brand-pink-deep/70 mt-2 font-medium max-w-xl leading-relaxed">
          Your personal aesthetic style blender and curated fashion catalog. Select your favorite style aesthetics, choose your seasonal color palette, and discover matching clothing items and accessories tailored to your taste.
        </p>
      </header>

      {/* Main Philosophy Card */}
      <div className="bg-white rounded-[32px] p-6 md:p-8 border border-brand-pink-light shadow-sm shadow-brand-pink-deep/5 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink-light/20 rounded-full blur-3xl -mr-8 -mt-8" />
        <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-pink-deep flex items-center justify-center text-white shrink-0 shadow-lg shadow-brand-pink-deep/20">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-serif font-extrabold text-slate-900 mb-2">Our Styling Philosophy & Brand Mission</h2>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              stylAist is founded on the timeless principles of color theory and aesthetic blending. Instead of complicated forms or rigid rules, discovering clothes should be instant and inspiring. Our mission is to make personal styling accessible, private, and fun by allowing users to blend aesthetics, explore 12 seasonal palettes, and browse matching pieces using clean, clothes-only studio photography.
            </p>
            <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest font-black text-brand-pink-deep flex-wrap">
              <span className="flex items-center gap-1">✦ 12 Seasonal Palettes</span>
              <span className="flex items-center gap-1">✦ Aesthetic Blending</span>
              <span className="flex items-center gap-1">✦ Clothes-Only Studio Catalog</span>
              <span className="flex items-center gap-1">✦ Precision Wardrobe Filters</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mandatory Affiliate Disclosure Card */}
      <div className="bg-brand-cream/40 rounded-[28px] p-6 border border-brand-pink-light mb-8">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-brand-pink-deep text-white flex items-center justify-center shrink-0 shadow-sm">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="space-y-1.5 text-xs text-black/80 leading-relaxed">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-black font-serif">
                Affiliate Partnership & Transparency Disclosure
              </h3>
            </div>
            <p className="font-semibold text-black">
              "stylAist partners with fashion brands and may earn an affiliate commission on qualifying purchases."
            </p>
            <p className="text-black/70 text-[11px]">
              stylAist participates in affiliate marketing programs. When you click on an external link to browse or purchase a recommended garment or accessory from an approved partner merchant, we may receive a commission from the merchant at no additional cost to you. All product recommendations are chosen independently based on aesthetic curation and seasonal color harmony.
            </p>
          </div>
        </div>
      </div>

      {/* Grid of features */}
      <h2 className="text-xl font-serif font-extrabold text-slate-900 mb-5 px-2">Core Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {features.map((feat, index) => {
          const Icon = feat.icon;
          return (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-xs rounded-3xl p-5 border border-slate-100 flex flex-col justify-between hover:border-brand-pink-muted transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-pink-light/40 flex items-center justify-center text-brand-pink-deep">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${feat.colorClass}`}>
                    {feat.badge}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-1.5">{feat.title}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
                  {feat.description}
                </p>
              </div>

              <div>
                <button
                  onClick={() => navigate(feat.actionPath)}
                  className="text-[10px] font-black text-brand-pink-deep uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all group py-1 cursor-pointer"
                >
                  <span>{feat.actionText}</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Guide section */}
      <section className="bg-brand-pink-light/20 rounded-[32px] p-6 md:p-8 border border-brand-pink-muted/40 mb-8">
        <h2 className="text-lg font-serif font-extrabold text-slate-900 mb-4 flex items-center gap-2">
          <Sliders className="w-5 h-5 text-brand-pink-deep" />
          Quick Start Guide
        </h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-brand-pink-deep text-white text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">1</div>
            <div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">Choose your Season & Aesthetic</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">Head to the <strong>Style Blender</strong>, choose your color season palette (e.g. True Autumn, Light Spring, etc.), and select 1 or 2 aesthetic styles to blend.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-brand-pink-deep text-white text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">2</div>
            <div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">Browse Matching Items</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">Click <strong>View Matching Items</strong> to explore tops, bottoms, shoes, dresses, and accessories curated specifically for your aesthetic blend and palette.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-brand-pink-deep text-white text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">3</div>
            <div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">Filter, Shuffle & Shop</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">Use category tabs to browse specific garments, adjust budget limits or modesty settings in Filters, shuffle items anytime, and click <strong>Shop</strong> on any item to view details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Creator Contact Card */}
      <section className="bg-white rounded-[32px] p-6 md:p-8 border border-brand-pink-light shadow-sm">
        <h2 className="text-lg font-serif font-extrabold text-slate-900 mb-3 flex items-center gap-2">
          <Mail className="w-5 h-5 text-brand-pink-deep" />
          Creator & Support Contact
        </h2>
        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          For inquiries regarding fashion brand partnerships, publisher relationships, feedback, or technical support, please contact our team directly:
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-semibold">
          <a 
            href="mailto:tchstud2026i2605@gmail.com" 
            className="px-4 py-2.5 bg-brand-pink-deep text-white rounded-xl uppercase tracking-wider text-[10px] font-bold shadow-sm hover:bg-black transition-colors"
          >
            Email Support: tchstud2026i2605@gmail.com
          </a>
          <div className="flex items-center gap-4 text-brand-pink-deep">
            <Link to="/privacy" className="hover:underline flex items-center gap-1 text-[11px]">
              <FileText className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:underline flex items-center gap-1 text-[11px]">
              <FileText className="w-3.5 h-3.5" />
              <span>Terms of Service</span>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
