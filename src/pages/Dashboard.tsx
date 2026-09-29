import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, RefreshCw, SlidersHorizontal, X, Edit, Palette, Sparkles } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { useNavigate, Link } from 'react-router-dom';
import { LOOKBOOK, getStyleKey, LookbookItem } from '../lib/lookbook';
import { cn } from '../lib/utils';

export default function Dashboard() {
  const { state, updateFilters } = useAppContext();
  const navigate = useNavigate();
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [shuffleSeed, setShuffleSeed] = useState(0);

  const { seasonData } = state;

  // Build the item pool matching user's selected styles and season
  const allMatchedItems = useMemo(() => {
    const preferredStyleKeys = state.selectedStyles.map(s => getStyleKey(s)).filter(Boolean) as string[];
    let pool: LookbookItem[] = [];
    
    if (preferredStyleKeys.length > 0) {
      preferredStyleKeys.forEach(key => {
        if (LOOKBOOK[key]) {
          pool = [...pool, ...LOOKBOOK[key].items.map(i => ({ ...i, styleId: key }))];
        }
      });
    } else {
      Object.keys(LOOKBOOK).forEach(key => {
        pool = [...pool, ...LOOKBOOK[key].items.map(i => ({ ...i, styleId: key }))];
      });
    }

    // Apply filters
    const filters = state.filters;
    let filtered = pool.filter(item => {
      // Budget limit
      if (filters.maxPrice && item.priceValue && item.priceValue > filters.maxPrice) {
        return false;
      }
      // Modesty
      if (filters.modesty === 'modest' && item.modesty !== 'modest') {
        return false;
      }
      // Exclude revealing
      if (filters.excludeRevealing && item.revealing) {
        return false;
      }
      // Occasion
      if (filters.occasion && filters.occasion !== 'any') {
        if (!item.occasion?.includes(filters.occasion)) {
          return false;
        }
      }
      // Fit
      if (filters.fit && filters.fit !== 'any') {
        if (item.fit && item.fit !== filters.fit) {
          return false;
        }
      }
      return true;
    });

    // Shuffle deterministic on shuffleSeed
    return [...filtered].sort(() => 0.5 - Math.random());
  }, [state.selectedStyles, state.filters, shuffleSeed]);

  // Filter by selected category tab
  const displayedItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return allMatchedItems;
    }
    return allMatchedItems.filter(item => item.category === selectedCategory);
  }, [allMatchedItems, selectedCategory]);

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'top', label: 'Tops' },
    { id: 'bottom', label: 'Bottoms' },
    { id: 'shoes', label: 'Shoes' },
    { id: 'dress', label: 'Dresses' },
    { id: 'accessory', label: 'Accessories' }
  ];

  if (!state.selectedStyles || state.selectedStyles.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center py-24 px-4 bg-white rounded-[40px] border border-brand-pink-light shadow-sm m-4">
        <div className="w-16 h-16 bg-brand-pink-light/20 rounded-full flex items-center justify-center mb-4">
          <Palette className="w-8 h-8 text-brand-pink-deep" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-black mb-2">No Styles Selected Yet</h2>
        <p className="text-black/60 max-w-sm mb-8 font-medium text-sm">
          Select your aesthetic styles in the Style Blender to discover matching clothes and color harmonies.
        </p>
        <button 
          onClick={() => navigate('/')} 
          className="px-8 py-4 bg-brand-pink-deep text-white rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-brand-pink-deep/90 shadow-xl shadow-brand-pink-deep/20 transition-all active:scale-95 cursor-pointer"
        >
          Select Aesthetics
        </button>
      </div>
    );
  }

  const activeFiltersCount = [
    state.filters.maxPrice && state.filters.maxPrice < 500,
    state.filters.modesty !== 'any',
    state.filters.occasion !== 'any',
    state.filters.fit !== 'any',
    state.filters.excludeRevealing,
    state.filters.dislikedColors.length > 0
  ].filter(Boolean).length;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col pb-12">
      {/* Header Profile Section */}
      <header className="flex flex-row justify-between items-center mb-6 px-2 gap-3 sm:gap-4 flex-nowrap overflow-hidden">
        <div className="flex-1 min-w-0">
          <Link to="/" className="group py-1 inline-flex flex-col min-w-0">
            <span className="hidden sm:block text-[7px] sm:text-[9px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-brand-pink-deep/45 mb-0.5 leading-none transition-colors group-hover:text-brand-pink-deep truncate">
              style preference:
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-sm sm:text-[15px] md:text-[17px] lg:text-[22px] font-serif italic font-bold text-brand-pink-deep group-hover:text-brand-pink transition-all duration-300 truncate block">
                {state.selectedStyles.map((s: string) => s.toLowerCase()).join(' + ')} style
              </span>
              <Edit className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5 text-brand-pink-deep group-hover:text-brand-pink transition-all duration-300 shrink-0" />
            </div>
          </Link>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 flex-nowrap">
          {/* Season Indicator Pill */}
          <Link 
            to="/" 
            className="flex items-center gap-1.5 px-3.5 py-2 bg-white rounded-2xl border border-brand-pink-light shadow-sm text-black hover:border-brand-pink-deep transition-all"
            title="Color Season (Click to change)"
          >
            <span className="text-[9px] font-black uppercase tracking-wider text-brand-pink-deep truncate">
              {seasonData?.season || 'Season'}
            </span>
            <div className="hidden xs:flex gap-1 items-center">
              {(seasonData?.palette || []).slice(0, 3).map((col: string, i: number) => (
                <span key={i} className="w-2.5 h-2.5 rounded-full inline-block border border-black/10" style={{ backgroundColor: col }} />
              ))}
            </div>
          </Link>

          {/* Filters Toggle Button */}
          <button 
            onClick={() => setFilterModalOpen(true)}
            className={cn(
              "px-3.5 py-2 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer border",
              activeFiltersCount > 0 
                ? "bg-brand-pink-deep text-white border-brand-pink-deep" 
                : "bg-white text-black border-brand-pink-light hover:bg-brand-pink-light/30"
            )}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters</span>
            {activeFiltersCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-white text-brand-pink-deep text-[8px] font-black flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Shuffle / Refresh Button */}
          <button 
            onClick={() => setShuffleSeed(s => s + 1)}
            className="px-3.5 py-2 bg-white border border-brand-pink-light rounded-2xl text-[9px] font-black uppercase tracking-widest text-brand-pink-deep hover:bg-brand-pink-light/30 transition-all flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
            title="Shuffle Items"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Shuffle</span>
          </button>
        </div>
      </header>

      {/* Main Matched Items Section */}
      <div className="bg-white rounded-[40px] border border-brand-pink-light p-6 sm:p-8 shadow-sm">
        {/* Gallery Title & Subheader */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-brand-pink-light/60 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-pink-deep/50">
                Curated Gallery
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif text-black italic font-medium">
              Best Items For You
            </h1>
            <p className="text-xs text-black/60 mt-1 font-medium">
              Garments and accessories matching your <strong className="text-brand-pink-deep">{state.selectedStyles.join(' + ')}</strong> aesthetic and <strong className="text-brand-pink-deep">{seasonData?.season}</strong> color palette.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-pink-deep/50 block">
              Catalog Available
            </span>
            <span className="text-sm font-bold text-black font-mono">
              {displayedItems.length} Pieces
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-4 mb-6">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = cat.id === 'all' 
              ? allMatchedItems.length 
              : allMatchedItems.filter(i => i.category === cat.id).length;
            
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer shrink-0 border",
                  isSelected
                    ? "bg-brand-pink-deep text-white border-brand-pink-deep shadow-md shadow-brand-pink-deep/20"
                    : "bg-brand-cream/10 text-black/70 border-brand-pink-light hover:bg-brand-pink-light/30 hover:text-black"
                )}
              >
                <span>{cat.label}</span>
                <span className={cn(
                  "text-[8px] font-bold px-1.5 py-0.5 rounded-full font-mono",
                  isSelected ? "bg-white/20 text-white" : "bg-brand-pink-light text-brand-pink-deep"
                )}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Empty State */}
        {displayedItems.length === 0 ? (
          <div className="py-16 text-center flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-brand-pink-light/30 flex items-center justify-center text-brand-pink-deep mb-3">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif italic text-black mb-1">No items match your active filters</h3>
            <p className="text-xs text-black/50 max-w-sm mb-4">
              Try adjusting your budget limit or modesty requirements in the filters panel to view more items.
            </p>
            <button
              onClick={() => {
                updateFilters({
                  maxPrice: 500,
                  modesty: 'any',
                  occasion: 'any',
                  fit: 'any',
                  excludeRevealing: false,
                  dislikedColors: []
                });
                setSelectedCategory('all');
              }}
              className="px-5 py-2.5 bg-brand-pink-deep text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-pink-deep/90 transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Grid of Items */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            {displayedItems.map((item, idx) => (
              <motion.div 
                key={`${item.name}-${idx}-${shuffleSeed}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(idx * 0.02, 0.3) }}
                className="group bg-brand-pink-light/5 border border-brand-pink-light rounded-3xl overflow-hidden p-3.5 flex flex-col hover:border-brand-pink-deep transition-all hover:shadow-xl hover:shadow-brand-pink-deep/5"
              >
                {/* Image Container with Studio Clothes-Only Framing */}
                <div className="aspect-[3/4] relative flex items-center justify-center overflow-hidden rounded-2xl bg-white p-3 shadow-inner">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                  />
                  <span className="absolute top-2 right-2 text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-xs">
                    {item.category}
                  </span>
                </div>

                {/* Details */}
                <div className="mt-3 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[8px] font-black text-brand-pink-deep/60 uppercase tracking-wider truncate">
                      {item.styleId || 'Classic'}
                    </p>
                    <h4 className="text-[11px] font-bold text-black line-clamp-1 mt-0.5" title={item.name}>
                      {item.name}
                    </h4>
                  </div>

                  <div className="mt-3 pt-2 border-t border-brand-pink-light/40 flex items-center justify-between gap-1">
                    <span className="text-[11px] font-black text-brand-pink-deep font-mono">
                      {item.price}
                    </span>

                    {item.url && item.url !== '#' && (
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="px-2.5 py-1 bg-brand-pink-deep hover:bg-black text-white text-[8px] uppercase tracking-wider font-bold rounded-lg flex items-center gap-1 transition-all active:scale-95 shadow-xs"
                        title={`Shop ${item.name}`}
                      >
                        <span>Shop</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Filter Modal */}
      <AnimatePresence>
        {filterModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFilterModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-[32px] w-full max-w-lg overflow-hidden shadow-2xl relative flex flex-col max-h-[85vh] z-10"
            >
              <div className="p-8 border-b border-brand-pink-light flex justify-between items-center bg-brand-cream/10">
                 <div>
                    <h2 className="text-2xl font-serif italic text-black">Wardrobe Preferences</h2>
                    <p className="text-[10px] uppercase font-black tracking-widest text-brand-pink-deep/40">Fine-tune your catalog settings</p>
                 </div>
                 <button onClick={() => setFilterModalOpen(false)} className="p-2 hover:bg-brand-pink-light rounded-full transition-colors cursor-pointer">
                    <X className="w-5 h-5 text-brand-pink-deep" />
                 </button>
              </div>

              <div className="p-8 overflow-y-auto hide-scrollbar space-y-8">
                {/* Max Price */}
                <div>
                   <label className="text-[10px] font-black uppercase tracking-widest text-brand-pink-deep/40 block mb-3">Budget Limit</label>
                   <div className="flex items-center gap-4">
                      <input 
                        type="range" 
                        min="20" 
                        max="500" 
                        step="10"
                        value={state.filters.maxPrice || 500}
                        onChange={(e) => updateFilters({ maxPrice: parseInt(e.target.value) })}
                        className="flex-1 accent-brand-pink-deep cursor-pointer"
                      />
                      <span className="text-xl font-serif italic w-16 text-right">${state.filters.maxPrice || '500'}</span>
                   </div>
                </div>

                {/* Modesty */}
                <div>
                   <label className="text-[10px] font-black uppercase tracking-widest text-brand-pink-deep/40 block mb-3">Modesty Level</label>
                   <div className="flex gap-2">
                      {['any', 'modest'].map((m) => (
                        <button 
                          key={m}
                          onClick={() => updateFilters({ modesty: m as any })}
                          className={cn(
                            "px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all cursor-pointer",
                            state.filters.modesty === m ? "bg-black text-white border-black" : "bg-white text-black border-brand-pink-light hover:bg-brand-pink-light"
                          )}
                        >
                          {m}
                        </button>
                      ))}
                   </div>
                </div>

                {/* Occasion */}
                <div>
                   <label className="text-[10px] font-black uppercase tracking-widest text-brand-pink-deep/40 block mb-3">Occasion</label>
                   <div className="flex flex-wrap gap-2">
                      {['any', 'casual', 'fancy', 'semi-formal'].map((o) => (
                        <button 
                          key={o}
                          onClick={() => updateFilters({ occasion: o as any })}
                          className={cn(
                            "px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all cursor-pointer",
                            state.filters.occasion === o ? "bg-black text-white border-black" : "bg-white text-black border-brand-pink-light hover:bg-brand-pink-light"
                          )}
                        >
                          {o}
                        </button>
                      ))}
                   </div>
                </div>

                {/* Fit */}
                <div>
                   <label className="text-[10px] font-black uppercase tracking-widest text-brand-pink-deep/40 block mb-3">Style Fit</label>
                   <div className="flex flex-wrap gap-2">
                      {['any', 'tight', 'oversized'].map((f) => (
                        <button 
                          key={f}
                          onClick={() => updateFilters({ fit: f as any })}
                          className={cn(
                            "px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all cursor-pointer",
                            state.filters.fit === f ? "bg-black text-white border-black" : "bg-white text-black border-brand-pink-light hover:bg-brand-pink-light"
                          )}
                        >
                          {f}
                        </button>
                      ))}
                   </div>
                </div>

                {/* Exclude revealing */}
                <div className="flex items-center gap-3 pt-4 border-t border-brand-pink-light">
                   <input 
                    type="checkbox" 
                    id="excludeRevealing"
                    checked={state.filters.excludeRevealing}
                    onChange={(e) => updateFilters({ excludeRevealing: e.target.checked })}
                    className="w-4 h-4 accent-brand-pink-deep cursor-pointer"
                   />
                   <label htmlFor="excludeRevealing" className="text-[11px] font-black uppercase tracking-widest text-black cursor-pointer">
                     Exclude revealing pieces
                   </label>
                </div>
              </div>

              <div className="p-8 bg-brand-cream/5 border-t border-brand-pink-light flex gap-4">
                 <button 
                  onClick={() => setFilterModalOpen(false)}
                  className="flex-1 py-4 bg-brand-pink-deep text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg shadow-brand-pink-deep/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                 >
                  Apply Filters
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
