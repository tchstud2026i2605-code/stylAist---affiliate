import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Info, Sparkles, X, ChevronLeft, ChevronRight, Palette, Check } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { cn } from '../lib/utils';
import { SEASONAL_DATA } from '../lib/seasonalData';

const STYLES = [
  {
    id: "Minimalist Luxe",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["clean", "tailored", "neutral", "silk", "wool"],
    desc: "Quiet luxury defined by impeccable tailoring and a palette of creams, beiges, and soft whites."
  },
  {
    id: "Urban Edge",
    image: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["oversized", "bold", "utility", "industrial"],
    desc: "Street-forward silhouettes featuring heavy denim, technical hardware, and oversized proportions."
  },
  {
    id: "Evening Elegance",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1492707892479-7fb8d5a4cc97?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["sparkly", "luxury", "satin", "sequins"],
    desc: "Sophisticated glamour for the night. Rich textures and dramatic silhouettes with subtle shine."
  },
  {
    id: "Boho Dream",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["relaxed", "floral", "layered", "artistic"],
    desc: "Eclectic and free-spirited style with vintage-inspired prints and layered textures."
  },
  {
    id: "Quiet Luxury",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["timeless", "cashmere", "wealthy", "subtle"],
    desc: "Understated elegance focusing on premium materials and timeless silhouettes."
  }
];

export default function StyleBlender() {
  const { state, updateState } = useAppContext();
  const navigate = useNavigate();
  const [examplesStyle, setExamplesStyle] = useState<typeof STYLES[0] | null>(null);
  const [showSeasonPicker, setShowSeasonPicker] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const mainScrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  const toggleStyle = (styleId: string) => {
    let newStyles = [...state.selectedStyles];
    if (newStyles.includes(styleId)) {
      if (newStyles.length > 1) {
        newStyles = newStyles.filter(s => s !== styleId);
      }
    } else {
      if (newStyles.length >= 2) newStyles.shift();
      newStyles.push(styleId);
    }
    
    let blendedName = newStyles.join(' + ');
    if (newStyles.includes('Minimalist Luxe') && newStyles.includes('Boho Dream')) blendedName = 'Elevated Boho';
    if (newStyles.includes('Urban Edge') && newStyles.includes('Minimalist Luxe')) blendedName = 'Sleek Street';
    if (newStyles.includes('Quiet Luxury') && newStyles.includes('Urban Edge')) blendedName = 'Smart Casual';
    if (newStyles.includes('Evening Elegance') && newStyles.includes('Boho Dream')) blendedName = 'Elegant Boho';

    updateState({ selectedStyles: newStyles, blendedStyle: newStyles.length > 0 ? blendedName : null });
  };

  const handleSelectSeason = (seasonName: string) => {
    if (SEASONAL_DATA[seasonName]) {
      updateState({ seasonData: SEASONAL_DATA[seasonName] });
      setShowSeasonPicker(false);
    }
  };

  const handleCurate = () => {
    if (state.selectedStyles.length === 0) return;
    navigate('/dashboard');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        <header className="mb-6">
          {/* Season Selector Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <button
              onClick={() => setShowSeasonPicker(!showSeasonPicker)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-pink-deep text-white rounded-full text-[10px] uppercase tracking-widest font-bold shadow-sm shadow-brand-pink-deep/20 hover:bg-brand-pink-deep/90 transition-all cursor-pointer"
            >
              <Palette className="w-3.5 h-3.5 text-brand-pink-light" />
              <span>Color Season: {state.seasonData?.season || 'True Autumn'}</span>
              <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded-full font-mono">Change</span>
            </button>

            {/* Quick Palette Preview dots */}
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/70 backdrop-blur-xs rounded-full border border-brand-pink-light">
              <span className="text-[9px] uppercase tracking-wider font-bold text-brand-pink-deep/60 mr-1">Palette:</span>
              {(state.seasonData?.palette || []).slice(0, 5).map((color: string, i: number) => (
                <span
                  key={i}
                  className="w-3 h-3 rounded-full border border-black/10 inline-block"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Collapsible Season Picker */}
          <AnimatePresence>
            {showSeasonPicker && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mb-6"
              >
                <div className="bg-white rounded-3xl p-5 border border-brand-pink-light shadow-md">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[10px] uppercase font-black tracking-widest text-brand-pink-deep">
                      Select Your Color Season Palette
                    </p>
                    <button
                      onClick={() => setShowSeasonPicker(false)}
                      className="p-1 text-black/40 hover:text-black rounded-full"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    {Object.keys(SEASONAL_DATA).map((sName) => {
                      const isSelected = state.seasonData?.season === sName;
                      const sData = SEASONAL_DATA[sName];
                      return (
                        <button
                          key={sName}
                          onClick={() => handleSelectSeason(sName)}
                          className={cn(
                            "p-2.5 rounded-2xl border text-left transition-all flex flex-col gap-1.5",
                            isSelected
                              ? "bg-brand-pink-deep text-white border-brand-pink-deep shadow-sm"
                              : "bg-slate-50 hover:bg-brand-pink-light/30 border-brand-pink-light/60 text-black"
                          )}
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold uppercase tracking-wider truncate">
                              {sName}
                            </span>
                            {isSelected && <Check className="w-3 h-3 text-white shrink-0" />}
                          </div>
                          <div className="flex gap-1">
                            {sData.palette.slice(0, 4).map((c, idx) => (
                              <span
                                key={idx}
                                className="w-2.5 h-2.5 rounded-full border border-black/10 inline-block"
                                style={{ backgroundColor: c }}
                              />
                            ))}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mb-4">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black mb-1">
              stylAist
            </h1>
            <p className="text-base sm:text-lg font-serif font-bold text-black/90 mb-1">
              AI-powered fashion discovery and personal styling.
            </p>
            <p className="text-xs sm:text-sm text-black/75 font-medium">
              Discover clothing and accessories that match your personal style.
            </p>
          </div>

          <div className="pt-2 border-t border-brand-pink-light/60">
            <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-tight text-black mb-1">
              Blend your <span className="italic">aesthetic.</span>
            </h2>
            <p className="text-[11px] sm:text-xs text-brand-pink-deep font-bold uppercase tracking-widest">
              Select 1 or 2 styles to create your unique wardrobe blend.
            </p>
          </div>
        </header>
      </div>
 
      {/* Horizontal scroll area for styles */}
      <div className="relative my-4 group/main-scroller bg-transparent">
        <div 
          ref={mainScrollRef}
          className="overflow-x-auto pb-4 hide-scrollbar flex items-center w-full scroll-smooth"
        >
          <div className="flex gap-8 h-[510px] min-w-max py-4 px-4 sm:px-6 md:px-8 xl:px-[calc((100vw-1280px)/2+24px)] items-center">
            {STYLES.map((style) => {
              const isSelected = state.selectedStyles.includes(style.id);
              return (
                <div
                  key={style.id}
                  onClick={() => toggleStyle(style.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleStyle(style.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className={cn(
                    "relative group h-[440px] w-[300px] rounded-[36px] overflow-hidden text-left transition-all duration-500 will-change-transform cursor-pointer outline-none shadow-md",
                    isSelected ? "ring-4 ring-brand-pink-deep shadow-lg" : "hover:scale-[1.02] filter grayscale-[0.2]"
                  )}
                  style={{
                    transform: isSelected ? 'scale(1.05) translateZ(0)' : 'scale(1) translateZ(0)',
                    isolation: 'isolate'
                  }}
                >
                  <img 
                    src={style.image} 
                    alt={style.id} 
                    className={cn(
                      "absolute inset-0 w-full h-full object-cover transition-transform duration-700",
                      isSelected ? "scale-110" : "group-hover:scale-105"
                    )} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    <h3 className="font-serif text-3xl mb-2">{style.id}</h3>
                    <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-350 line-clamp-4 leading-relaxed">
                      {style.desc}
                    </p>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setExamplesStyle(style);
                      }}
                      className="mt-4 flex w-fit items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" /> Lookbook
                    </button>
                  </div>
                  
                  {/* Select badge */}
                  <div className={cn(
                    "absolute top-5 right-5 w-8 h-8 rounded-full border border-white flex items-center justify-center transition-colors text-sm font-bold",
                    isSelected ? "bg-white text-black" : "bg-black/20 text-transparent"
                  )}>
                    ✓
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
 
      {/* Action bottom bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="py-6 border-t border-brand-pink-light flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
          <div className="text-center sm:text-left">
            <p className="text-[10px] uppercase tracking-widest text-brand-pink-deep/40 mb-1 font-black">Current Blend</p>
            <p className="font-serif text-2xl text-black italic font-medium">
              {state.blendedStyle || 'Select styles...'}
            </p>
          </div>
          
          <button
            onClick={handleCurate}
            disabled={state.selectedStyles.length === 0}
            className="flex items-center gap-3 bg-brand-pink-deep text-white px-8 py-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-pink-deep/90 shadow-xl shadow-brand-pink-deep/20 transition-all active:scale-95 w-full sm:w-auto justify-center cursor-pointer"
          >
            <span className="uppercase tracking-widest text-xs font-bold">View Matching Items</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Examples Modal */}
      <AnimatePresence>
        {examplesStyle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setExamplesStyle(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#fff2da] rounded-[40px] p-6 md:p-10 max-w-7xl w-[98vw] h-[92vh] flex flex-col shadow-2xl border-2 border-brand-pink-muted relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4 shrink-0">
                <div>
                  <h2 className="font-serif text-3xl md:text-5xl text-black mb-2 font-semibold">
                    {examplesStyle.id} <span className="italic font-light">Lookbook</span>
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {examplesStyle.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-brand-pink-light/40 text-brand-pink-deep text-[10px] font-black rounded-full uppercase border border-brand-pink-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => setExamplesStyle(null)}
                  className="p-3 hover:bg-brand-pink-light/40 rounded-full transition-colors text-brand-pink-deep cursor-pointer"
                  aria-label="Close lookbook"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-black/80 mb-6 max-w-3xl text-sm md:text-base shrink-0 font-medium leading-relaxed">
                {examplesStyle.desc}
              </p>

              {/* Gallery Scroll Container */}
              <div className="flex-1 relative min-h-0 group/scroller flex items-center">
                <button
                  onClick={scrollLeft}
                  className="absolute left-2 md:left-4 z-10 p-4 bg-white/90 hover:bg-white border-2 border-brand-pink-muted rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 text-brand-pink-deep hover:text-black hidden sm:flex items-center justify-center cursor-pointer"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div 
                  ref={scrollRef}
                  className="w-full h-full overflow-x-auto overflow-y-hidden min-h-0 hide-scrollbar flex items-center scroll-smooth pb-2"
                >
                  <div className="flex gap-6 md:gap-8 h-full min-w-max px-2 py-4">
                    {examplesStyle.images.map((img, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08, type: 'spring', stiffness: 120 }}
                        className="h-full aspect-[3/4.2] rounded-[36px] overflow-hidden bg-white border border-brand-pink-muted shadow-lg hover:scale-[1.02] transition-transform duration-500 hover:shadow-2xl"
                      >
                        <img 
                          src={img} 
                          alt={`${examplesStyle.id} lookbook option ${idx + 1}`} 
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={scrollRight}
                  className="absolute right-2 md:right-4 z-10 p-4 bg-white/90 hover:bg-white border-2 border-brand-pink-muted rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 text-brand-pink-deep hover:text-black hidden sm:flex items-center justify-center cursor-pointer"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="sm:hidden text-center text-[10px] text-brand-pink-deep/60 uppercase tracking-widest font-black shrink-0 mt-3 animate-pulse">
                Swipe left/right to view images
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
