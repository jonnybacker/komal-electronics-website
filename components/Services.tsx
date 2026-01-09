import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, X, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  onSelect: (service: ServiceItem) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onSelect }) => {
  // Logic for staggered animations
  // On Desktop (3 cols): 0=Left, 1=Up, 2=Right
  // On Mobile (2 cols): Handled via media queries in CSS if needed, but basic logic works generally well.
  
  let animationClass = 'reveal-text'; // Default Up
  if (index % 3 === 0) animationClass = 'reveal-left';
  if (index % 3 === 2) animationClass = 'reveal-right';

  return (
    <div 
      className={`${animationClass} cursor-pointer h-full`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }} // Stagger delay based on column
      onClick={() => onSelect(service)}
    >
      <div
        className="relative w-full h-full bg-[#0A0A0A] rounded-xl overflow-hidden shadow-xl border border-white/5 group hover:border-brand-gold/30 transition-colors duration-500 flex flex-col"
      >
        {/* Image Height - Significantly increased for desktop as requested */}
        <div className="relative h-32 md:h-80 overflow-hidden z-10 shrink-0">
          <img 
            src={service.imageUrl} 
            // SEO UPDATE: Dynamic keyword-rich alt text
            alt={`${service.title} - Professional Electrician Services in Multan`} 
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out scale-100 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent opacity-90"></div>
          
          <div 
            className="absolute top-2 right-2 md:top-4 md:right-4 bg-black/40 backdrop-blur-md p-1.5 md:p-3 rounded-lg md:rounded-xl border border-white/10 text-brand-gold shadow-lg"
          >
             {service.icon && React.isValidElement(service.icon) ? React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-4 h-4 md:w-6 md:h-6" }) : null}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-3 md:p-8 relative z-10 flex flex-col flex-grow justify-start">
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

          {/* Text sizes adjusted for readability */}
          <h3 
            className="text-sm md:text-2xl font-bold text-slate-100 mb-1 md:mb-3 group-hover:text-brand-gold transition-colors leading-tight"
          >
            {service.title}
          </h3>
          <p 
            className="text-slate-500 md:text-slate-400 text-[10px] md:text-base mb-2 md:mb-4 leading-snug flex-grow line-clamp-3 md:line-clamp-none"
          >
            {service.description}
          </p>
          <div className="text-[10px] md:text-sm font-bold text-brand-gold uppercase tracking-wide flex items-center gap-1 md:gap-2 mt-auto">
            View <span className="hidden md:inline">Details</span> <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-8 md:py-24 bg-brand-gray relative overflow-hidden border-t border-white/5">
      
      {/* 
         BACKGROUND SHEDDING COLOR EFFECTS
         Added multiple blobs to create a rich, shedding light effect behind the content.
      */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {/* Gold Blob - Left Center */}
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen"></div>
        
        {/* Blue/Cyan Blob - Bottom Right */}
        <div className="absolute bottom-0 -right-32 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-blob mix-blend-screen animation-delay-2000"></div>
        
        {/* Purple/Pink Blob - Top Center (Subtle) */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] opacity-50"></div>
      </div>

      {/* Increased max-width for desktop to make boxes look 'big' and 'impressive' */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-16 reveal-text">
          <span className="text-brand-gold font-bold tracking-widest uppercase text-xs md:text-sm">What We Do</span>
          <h2 className="text-2xl md:text-5xl font-bold text-white mt-2">Explore Services</h2>
          <div className="w-16 md:w-24 h-1 bg-brand-gold mx-auto mt-4 md:mt-6 rounded-full"></div>
        </div>

        {/* 
            UPDATED GRID:
            Mobile: grid-cols-2 (per previous request)
            Desktop: lg:grid-cols-3 (per current request)
            Result: 6 items = 2 rows of 3 on desktop.
        */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 lg:gap-10 mx-auto">
          {SERVICES.map((service, index) => (
            <ServiceCard 
                key={service.id} 
                service={service} 
                index={index} 
                onSelect={setSelectedService}
            />
          ))}
        </div>
      </div>

      {/* 
        EXPANDED MODAL OVERLAY
      */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop with blur - Clicking closes modal */}
            <div 
                className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
                onClick={() => setSelectedService(null)}
            ></div>

            {/* Expanded Content */}
            <div className="relative w-full max-w-4xl bg-[#111] rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/20 transform transition-all duration-300 scale-100 animate-fade-in-up">
                
                {/* Close Button */}
                <button 
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full text-white hover:text-brand-gold hover:bg-black transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="grid md:grid-cols-2">
                    {/* Image Side - Interactive/Animated */}
                    <div className="h-[250px] md:h-[500px] relative group overflow-hidden">
                         <img 
                            src={selectedService.imageUrl} 
                            // SEO UPDATE
                            alt={`${selectedService.title} - Expert Electrician in Multan`} 
                            className="w-full h-full object-cover transition-transform duration-[10s] ease-linear scale-100 hover:scale-125"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    </div>

                    {/* Details Side */}
                    <div className="p-6 md:p-10 flex flex-col justify-center">
                        <div className="mb-6">
                            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2 block">Service Details</span>
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{selectedService.title}</h2>
                            <p className="text-slate-400 text-sm md:text-lg leading-relaxed">
                                {selectedService.description}
                            </p>
                        </div>

                        <Link 
                            to="/booking" 
                            className="w-full py-4 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-bold text-center rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-gold/10 uppercase tracking-widest"
                        >
                            Book This Service
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      )}
    </section>
  );
}