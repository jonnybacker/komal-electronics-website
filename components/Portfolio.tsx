import React from 'react';
import { PORTFOLIO } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      
       {/* 
          BACKGROUND SHEDDING COLOR EFFECTS
       */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[100px] mix-blend-multiply animate-float"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[100px] mix-blend-multiply animate-pulse-slow"></div>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 
            UPDATED HEADER TEXT 
            Switched to darker/richer gradients for better contrast on white background.
        */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 reveal-text">
            <div className="text-center md:text-left">
                <span className="inline-block py-1 px-3 rounded-full bg-yellow-50 border border-yellow-100 text-amber-700 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-3 shadow-sm">
                    Recent Work
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500">Portfolio</span>
                </h2>
                {/* Color Mixture Line */}
                <div className="h-1.5 w-24 bg-gradient-to-r from-amber-400 to-yellow-200 mt-4 mx-auto md:mx-0 rounded-full shadow-sm"></div>
            </div>
            
            <Link to="/booking" className="hidden md:inline-flex items-center group text-slate-600 hover:text-amber-600 font-bold transition-colors mt-4 md:mt-0">
                Start your project <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {PORTFOLIO.map((item, index) => {
            // Animation Logic:
            let animClass = 'reveal-text';
            if (index % 3 === 0) animClass = 'reveal-left';
            if (index % 3 === 2) animClass = 'reveal-right';

            return (
                <div key={item.id} className={`${animClass} group relative overflow-hidden rounded-2xl cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500`}>
                    
                    {/* Glowing border effect on hover */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-blue-500 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500"></div>

                    {/* Image Container */}
                    <div className="aspect-w-4 aspect-h-3 w-full h-[280px] md:h-[450px] relative rounded-2xl overflow-hidden bg-gray-900">
                        <img 
                        src={item.imageUrl} 
                        // SEO UPDATE
                        alt={`${item.title} - Electrician Project in Multan`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                        />
                    </div>
                    
                    {/* Overlay with Text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 rounded-2xl"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="inline-block px-2 py-1 md:px-3 bg-brand-gold text-brand-dark text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2 rounded-full shadow-lg">
                            {item.category}
                        </span>
                        <h3 className="text-white text-xl md:text-3xl font-bold drop-shadow-lg">{item.title}</h3>
                    </div>
                </div>
            );
          })}
        </div>

        <div className="mt-8 md:mt-12 text-center reveal-text md:hidden">
           <Link to="/booking" className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 rounded-full text-slate-600 hover:border-amber-500 hover:text-amber-600 transition-colors text-sm font-bold bg-white shadow-sm">
             Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
           </Link>
        </div>
      </div>
    </section>
  );
}