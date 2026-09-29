import { useState, useRef, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Layers, LayoutDashboard, Menu, X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  const navItems = [
    { name: 'Style Blender', path: '/', icon: Layers },
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'About', path: '/about', icon: Info },
  ];

  return (
    <div className="h-screen w-screen bg-[#fff2da] flex flex-col font-montserrat text-black selection:bg-brand-pink-light selection:text-black overflow-hidden">
      {/* Top Demonstration Notice Banner */}
      <div 
        role="region"
        aria-label="Development notice"
        className="w-full bg-[#fdeee9] border-b border-brand-pink-muted/80 px-4 py-2 text-center text-xs font-semibold text-black/85 flex items-center justify-center gap-2 shrink-0 z-50 shadow-xs"
      >
        <span className="w-2 h-2 rounded-full bg-brand-pink-deep shrink-0" />
        <span>Product listings shown here are for demonstration purposes while stylAist is in development.</span>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-brand-pink-muted hidden md:flex flex-col bg-white h-full shrink-0">
        <nav className="flex-1 py-6 flex flex-col gap-2 px-4 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || (item.path === '/' && location.pathname === '/blend');
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-2xl text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300",
                  isActive 
                    ? "bg-brand-pink-deep text-white shadow-lg shadow-brand-pink-deep/20" 
                    : "text-black/60 hover:bg-brand-pink-light/30 hover:text-black"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>
        <div className="p-6 border-t border-brand-pink-light/30">
          <p className="text-[10px] uppercase tracking-widest font-black text-brand-pink-deep/40 leading-relaxed">
            Style Blender<br/>& Wardrobe Studio
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between py-3 px-4 border-b border-brand-pink-light bg-white z-40 relative">
          <Link to="/" className="flex items-center gap-1.5">
            <span className="font-serif italic font-black text-xl text-black tracking-tight">stylAist</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 text-black hover:bg-brand-pink-light/30 rounded-full transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>

        {/* Mobile Menu Backdrop & Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 z-40 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              {/* Navigation Panel Drawer */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="fixed right-0 top-0 bottom-0 w-72 bg-[#fff2da] border-l border-brand-pink-muted z-50 md:hidden p-6 flex flex-col shadow-2xl overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-brand-pink-muted">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-brand-pink-deep">
                    STYL-AIST NAVIGATION
                  </span>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-brand-pink-light/30 rounded-full text-brand-pink-deep transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path || (item.path === '/' && location.pathname === '/blend');
                    
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-2xl text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300",
                          isActive 
                            ? "bg-brand-pink-deep text-white shadow-lg shadow-brand-pink-deep/20" 
                            : "text-black/70 hover:bg-brand-pink-light/30 hover:text-black"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-auto pt-8 border-t border-brand-pink-muted">
                  <p className="text-[10px] uppercase tracking-widest font-black text-brand-pink-deep/40">
                    Style Blender<br/>& Wardrobe Studio
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div 
          ref={scrollRef} 
          className="flex-1 overflow-y-auto w-full relative flex flex-col justify-between scroll-smooth"
        >
          <div className={cn(
            "flex-1 w-full py-4 md:py-6",
            (location.pathname === '/' || location.pathname === '/blend') ? "px-0" : "max-w-7xl mx-auto px-4 md:px-6"
          )}>
            <Outlet />
          </div>
          <Footer />
        </div>
      </main>
      </div>
    </div>
  );
}
