import React from 'react';
import { Shield, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-8 md:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden relative">
      
      {/* Background Shading Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Image Side - Constrained Height on Mobile */}
          <div className="reveal relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl group h-48 md:h-auto w-full border border-slate-100">
              {/* Updated image with object-cover to fit constrained height */}
              <img 
                src="https://iili.io/feyUJP2.jpg?q=80&w=1000&auto=format&fit=crop" 
                alt="Electrical Tools Multimeter and Wires used by Electrician in Multan" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Decorative box behind */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border-4 border-amber-400/30 rounded-lg -z-0 hidden md:block"></div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-3 md:p-6 rounded-xl shadow-2xl text-center border border-slate-100 min-w-[120px]">
               <span className="block text-2xl md:text-5xl font-extrabold text-slate-900">12+</span>
               <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 mt-1 block">Years Experience</span>
            </div>
          </div>

          {/* Text Side */}
          <div className="reveal reveal-delay-200 mt-4 md:mt-0">
            {/* Improved Badge Style for 'Our Story' */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-amber-800 font-bold tracking-widest uppercase text-[10px] md:text-xs">
                    Our Story
                </span>
            </div>

            {/* Improved Heading Contrast */}
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 leading-[1.1]">
              Decades of Trust in <br/>
              {/* Gradient text that is readable on white */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 drop-shadow-sm">
                Electrical Excellence
              </span>
            </h2>
            
            {/* SEO UPDATE: Injected "best electrician team... in Multan" naturally */}
            <p className="text-slate-600 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed font-medium">
              Starting over a decade ago as a modest workshop in the heart of Multan, 
              Komal Electronics has evolved into the best electrician team and 
              premier full-service electrical engineering firm. We bridge the gap between 
              traditional craftsmanship and modern smart home technology.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="flex gap-4 group">
                <div className="mt-1 p-2 bg-slate-50 rounded-lg group-hover:bg-amber-50 transition-colors">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base md:text-lg">Safety First</h4>
                  <p className="text-slate-600 text-sm md:text-base">We adhere to strict international safety standards for every wire we lay.</p>
                </div>
              </div>
              
              <div className="flex gap-4 group">
                <div className="mt-1 p-2 bg-slate-50 rounded-lg group-hover:bg-amber-50 transition-colors">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base md:text-lg">Smart Solutions</h4>
                  <p className="text-slate-600 text-sm md:text-base">Certified experts in home automation, solar inverters, and IoT integration.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}