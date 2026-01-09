import React from 'react';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-brand-gray relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] -z-0"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-900/10 rounded-full blur-[80px] -z-0"></div>

      {/* Increased max-width from 4xl to 7xl to make boxes wider on desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-10 reveal-text">
            <span className="text-brand-gold font-bold tracking-widest uppercase text-xs">Contact Us</span>
            <h2 className="text-3xl font-bold text-white mt-1">Get In Touch</h2>
        </div>

        {/* 
           CONTACT BOXES
           Grid: 2 cols on mobile, 3 cols on desktop.
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-10">
            
            {/* Box 1: WhatsApp - Green Theme */}
            <div className="bg-[#161616] border-2 border-green-600/30 p-6 md:p-10 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-green-600/5 transition-all aspect-square md:aspect-auto md:h-64 shadow-[0_0_30px_rgba(22,163,74,0.1)] hover:shadow-[0_0_40px_rgba(22,163,74,0.2)]">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
                </div>
                {/* Bigger Text, Green Color */}
                <h3 className="text-2xl md:text-3xl font-extrabold text-green-500 mb-2 tracking-tight">WhatsApp</h3>
                <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-xs md:text-sm font-bold bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition-colors uppercase tracking-wide min-w-[120px]"
                >
                    Chat
                </a>
            </div>

            {/* Box 2: Phone - Gold Theme */}
            <div className="bg-[#161616] border-2 border-brand-gold/30 p-6 md:p-10 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-brand-gold/5 transition-all aspect-square md:aspect-auto md:h-64 relative overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.1)] hover:shadow-[0_0_40px_rgba(255,215,0,0.2)]">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 md:w-10 md:h-10 text-brand-gold" />
                </div>
                {/* Bigger Text, White/Gold Color */}
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">Call Now</h3>
                <a 
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-xs md:text-sm font-bold bg-brand-gold hover:bg-brand-goldHover text-black px-8 py-3 rounded-full transition-colors uppercase tracking-wide min-w-[120px]"
                >
                    Call
                </a>
            </div>

            {/* Box 3: Email - Purple Theme */}
            <div className="col-span-2 md:col-span-1 bg-[#161616] border-2 border-purple-600/30 p-6 md:p-10 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-purple-600/5 transition-all md:aspect-auto md:h-64 shadow-[0_0_30px_rgba(147,51,234,0.1)] hover:shadow-[0_0_40px_rgba(147,51,234,0.2)]">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 md:w-10 md:h-10 text-purple-500" />
                </div>
                {/* Bigger Text, Purple Color */}
                <h3 className="text-2xl md:text-3xl font-extrabold text-purple-500 mb-2 tracking-tight">Email</h3>
                <a 
                    // ADDED: Subject parameter to ensure compose window opens clearly
                    href={`mailto:${CONTACT_INFO.email}?subject=Inquiry for Komal Electronics`}
                    className="text-xs md:text-sm font-bold bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-colors uppercase tracking-wide min-w-[120px]"
                >
                    Email Now
                </a>
            </div>
        </div>

        {/* 
            Serving Areas
        */}
        <div className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden text-center md:text-left">
             <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-center md:justify-start gap-2">
                    <MapPin className="w-5 h-5 text-brand-gold"/> Serving All of Multan
                </h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {[
                    'DHA Multan', 
                    'Cantt', 
                    'Gulgasht', 
                    'Wapda Town', 
                    'Industrial Estate', 
                    'Bosan Road',
                    'Shah Rukn-e-Alam',
                    'New Multan',
                    'Model Town',
                    'Mumtazabad',
                    'Askari Colony',
                    'Vehari Road'
                  ].map((area, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-medium text-slate-300 border border-white/5 hover:border-brand-gold/30 hover:text-brand-gold transition-colors cursor-default">
                      {area}
                    </span>
                  ))}
               </div>
             </div>
             
             {/* Background Decoration */}
             <div className="absolute -right-10 -bottom-10 opacity-[0.03] pointer-events-none rotate-12">
                <MapPin className="w-64 h-64 text-white" />
             </div>
        </div>

      </div>
    </section>
  );
}