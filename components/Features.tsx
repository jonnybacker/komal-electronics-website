import React from 'react';
import { FEATURES } from '../constants';

export default function Features() {
  return (
    <section id="features" className="py-0 bg-brand-dark border-b border-white/5 relative overflow-hidden">
      
      {/* Video Inspiration: Scrolling Text Strip */}
      <div className="bg-brand-gold/10 border-y border-brand-gold/10 py-3 overflow-hidden backdrop-blur-sm relative z-20">
         <div className="whitespace-nowrap animate-marquee flex items-center gap-8">
             {[...Array(6)].map((_, i) => (
                <span key={i} className="text-sm md:text-base font-bold text-brand-gold/70 uppercase tracking-[0.2em] flex items-center gap-8">
                    Smart Home <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span> 
                    Industrial <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span> 
                    Residential <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span> 
                    Solar <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                </span>
             ))}
         </div>
      </div>

      {/* 3D Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)', 
             backgroundSize: '40px 40px',
             transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)'
           }}>
      </div>
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-brand-gold/5 to-transparent opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-24">
        
        {/* 
            Grid Config:
            Mobile: grid-cols-2 (2 boxes per line)
            Desktop: lg:grid-cols-4 (All 4 boxes in one line)
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 mx-auto">
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className={`reveal-text group perspective-container`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Style: Inspired by Video "Prop Firm" cards - Dark, Glassy, Subtle Borders */}
              <div className="relative p-4 md:p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.06] transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] h-full flex flex-col items-center text-center backdrop-blur-sm overflow-hidden group">
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/0 via-brand-gold/0 to-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Smaller icon wrapper on mobile */}
                  <div className="relative z-10 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-brand-card to-black border border-white/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 shadow-lg group-hover:border-brand-gold/50 transition-colors duration-500 shrink-0">
                    <feature.icon className="w-5 h-5 md:w-8 md:h-8 text-brand-gold transform transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  
                  <div className="relative z-10">
                    {/* Compact text for mobile 2-col view */}
                    <h3 className="text-sm md:text-xl font-bold text-white mb-1.5 md:mb-3 group-hover:text-brand-gold transition-colors leading-tight">
                        {feature.title}
                    </h3>
                    <p className="text-slate-400 text-[10px] md:text-sm leading-snug md:leading-relaxed">
                        {feature.description}
                    </p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}