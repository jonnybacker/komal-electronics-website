import React from 'react';
import { Zap, MapPin, Phone, Mail, ArrowRight, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="relative bg-black text-slate-300 pt-12 pb-6 border-t border-white/10 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0A0A0A] to-black z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid - Compact Mobile Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-10 mb-8 lg:mb-10">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="bg-brand-gold/10 p-2 rounded-lg border border-brand-gold/20">
                <Zap className="h-5 w-5 text-brand-gold fill-current" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Komal Electronics
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 lg:mb-6 max-w-sm">
              Your trusted partner for electrical engineering, solar solutions, and smart home automation in Multan. Safety and quality guaranteed.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-brand-gold font-bold text-sm mb-3 lg:mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" onClick={(e) => handleNav(e, 'home')} className="hover:text-brand-gold transition-colors block py-1">Home</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNav(e, 'services')} className="hover:text-brand-gold transition-colors block py-1">Services</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNav(e, 'about')} className="hover:text-brand-gold transition-colors block py-1">About Us</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="hover:text-brand-gold transition-colors block py-1">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="col-span-1">
            <h4 className="text-brand-gold font-bold text-sm mb-3 lg:mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-brand-gold transition-colors cursor-default py-1">Residential</li>
              <li className="hover:text-brand-gold transition-colors cursor-default py-1">Industrial</li>
              <li className="hover:text-brand-gold transition-colors cursor-default py-1">Solar Systems</li>
              <li className="hover:text-brand-gold transition-colors cursor-default py-1">Smart Home</li>
            </ul>
          </div>

           {/* Contact Info */}
           <div className="col-span-2 lg:col-span-1 bg-white/5 rounded-2xl p-5 border border-white/5">
            <h4 className="text-brand-gold font-bold text-sm mb-4 uppercase tracking-wider flex items-center gap-2">
                Contact Details
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-500 mt-1 shrink-0" />
                <span className="text-slate-300 leading-snug">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-brand-gold transition-colors font-medium">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-gold transition-colors truncate">{CONTACT_INFO.email}</a>
              </li>
               <li className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
                <Facebook className="w-4 h-4 text-blue-500 shrink-0" />
                <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors text-blue-400">Follow on Facebook</a>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-3">
          <p>© 2026 Komal Electronics. All rights reserved.</p>
          
          <div className="flex items-center gap-1.5">
            <span>Built with</span>
            <span className="text-red-500 text-lg leading-none">♥</span>
            <span>in Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}