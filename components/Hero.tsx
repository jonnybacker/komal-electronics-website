import React, { useEffect, useState } from 'react';
import { Calendar, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  // Parallax Effect on Scroll
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate Jingardia particles (Sparks)
  const sparks = Array.from({ length: 30 }).map((_, i) => {
    // Random directions for sparks
    const tx = (Math.random() - 0.5) * 200 + 'px';
    const ty = (Math.random() - 0.5) * 200 + 'px';
    const delay = Math.random() * 2 + 's';
    const left = Math.random() > 0.5; // Spawn from left or right side

    return (
      <div 
        key={i}
        className="absolute w-1 h-1 bg-brand-gold rounded-full animate-jingardia z-10"
        style={{
          top: `${Math.random() * 100}%`,
          left: left ? '0%' : '100%',
          '--tx': left ? '100px' : '-100px', // Fly inward or outward
          '--ty': ty,
          animationDuration: `${0.5 + Math.random()}s`,
          animationDelay: delay,
          boxShadow: '0 0 10px 2px rgba(255, 215, 0, 0.8)'
        } as React.CSSProperties}
      />
    );
  });

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center bg-black overflow-hidden perspective-container">
      
      {/* 
         BACKGROUND: "Electrical Man"
         DESKTOP FIX: Increased opacity to 0.85 (was 0.6) and reduced gradient darkness so image is very clear.
         MOBILE: Kept as is (opacity-80) since user said it is good.
      */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
            alt="Electrician Working" 
            className="w-full h-full object-cover opacity-80 md:opacity-85 transition-opacity duration-500" 
          />
          {/* Gradient Overlay - Much lighter on desktop now for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent md:via-black/30 md:to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 md:from-black/60 md:via-transparent md:to-black/60"></div>
          
          {/* 
             EFFECT: Side Lightning & Jingardia (Sparks) 
          */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
             
             {/* Left Side Lightning */}
             <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 animate-pulse transition-all duration-300">
                <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 50 800">
                    <path d="M20,0 L10,50 L30,100 L5,200 L40,300 L10,400 L35,500 L0,600 L40,700 L20,800" 
                          fill="none" stroke="#00BFFF" strokeWidth="2" className="electricity-path opacity-70" />
                     <path d="M25,0 L15,60 L35,110 L10,210 L45,310 L15,410 L40,510 L5,610 L45,710 L25,800" 
                          fill="none" stroke="#FFD700" strokeWidth="1" className="electricity-path opacity-50" style={{animationDelay: '0.5s'}} />
                </svg>
                {/* Glow backing */}
                <div className="absolute inset-y-0 left-0 w-2 md:w-4 bg-blue-500/20 blur-xl animate-lightning-flash"></div>
             </div>

             {/* Right Side Lightning */}
             <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 animate-pulse transition-all duration-300">
                 <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 50 800">
                    <path d="M20,0 L40,50 L10,100 L45,200 L5,300 L40,400 L10,500 L50,600 L10,700 L30,800" 
                          fill="none" stroke="#00BFFF" strokeWidth="2" className="electricity-path opacity-70" style={{animationDirection: 'reverse'}} />
                    <path d="M25,0 L45,60 L15,110 L50,210 L10,310 L45,410 L15,510 L55,610 L15,710 L35,800" 
                          fill="none" stroke="#FFD700" strokeWidth="1" className="electricity-path opacity-50" style={{animationDelay: '1s'}} />
                </svg>
                {/* Glow backing */}
                <div className="absolute inset-y-0 right-0 w-2 md:w-4 bg-brand-gold/20 blur-xl animate-lightning-flash"></div>
             </div>

             {/* Jingardia Sparks Container */}
             {sparks}
             
             {/* Central Welding Spark Effect */}
             <div className="absolute top-1/2 left-1/3 w-[2px] h-[2px] bg-white shadow-[0_0_80px_40px_rgba(0,191,255,0.4)] animate-spark z-10"></div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center flex flex-col items-center justify-center h-full pt-16 md:pt-20">
        
        {/* Main Content */}
        <div className="reveal-text relative max-w-5xl mx-auto">
            
            {/* Heading - Removed "Expert Electrical &" based on user edit */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter drop-shadow-2xl">
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
                 {/* Highlighted Box Style */}
                 <span className="relative inline-block transform -skew-x-12 group">
                    <span className="absolute inset-0 bg-brand-gold rounded-sm shadow-[0_0_50px_rgba(255,215,0,0.4)] group-hover:shadow-[0_0_80px_rgba(255,215,0,0.6)] transition-shadow duration-500 animate-pulse-slow"></span>
                    <span className="relative z-10 block px-4 py-1 md:px-8 md:py-2 text-black transform skew-x-12">
                        Smart Home
                    </span>
                 </span>
                 <span>Services</span>
              </div>
              
              <span className="block mt-2 md:mt-4">in Multan</span>
            </h1>
            
            {/* Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-lg font-medium text-slate-300 mb-10 tracking-wide">
              <div className="flex items-center gap-2 backdrop-blur-md bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:border-brand-gold/50 transition-colors shadow-lg">
                 <Zap className="w-5 h-5 text-brand-gold" />
                 <span>Smart & Safe Solutions</span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-md bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:border-brand-gold/50 transition-colors shadow-lg">
                 <ShieldCheck className="w-5 h-5 text-brand-gold" />
                 <span>60-Minute Emergency Response</span>
              </div>
            </div>
        
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full px-4 sm:px-0">
              <button 
                onClick={scrollToServices}
                className="px-8 py-4 bg-black/40 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-widest rounded-xl transition-all hover:bg-white/10 hover:border-white/40 w-full sm:w-auto"
              >
                EXPLORE SERVICES
              </button>
              
              <Link 
                to="/booking"
                className="px-8 py-4 bg-brand-gold text-brand-dark font-bold uppercase tracking-widest rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] transition-all hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2 relative overflow-hidden group"
              >
                {/* Button Shine Effect */}
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform group-hover:translate-x-[200%] transition-transform duration-700"></div>
                <Calendar className="w-5 h-5 relative z-10" /> 
                <span className="relative z-10">BOOK APPOINTMENT</span>
              </Link>
            </div>
        </div>

      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow text-brand-gold z-20 opacity-80 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-brand-gold to-transparent"></div>
      </div>
    </section>
  );
}