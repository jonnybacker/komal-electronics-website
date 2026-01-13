import React, { useState } from 'react';
import { Menu, X, Phone, Zap, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to handle hash navigation from any page
  const handleNavClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 shadow-lg bg-transparent">
       {/* 
          UPDATED NAVBAR BACKGROUND:
          More "Outstanding" look with deeper black glass and a subtle gold border bottom.
       */}
      <div className="relative z-[60] bg-black/80 backdrop-blur-lg border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
                <div className="bg-brand-gold/10 p-1.5 rounded-lg border border-brand-gold/20 group-hover:bg-brand-gold/20 transition-colors">
                <Zap className="h-6 w-6 text-brand-gold fill-current" />
                </div>
                <span className="font-bold text-xl tracking-tight text-white group-hover:text-brand-gold transition-colors">
                Komal Electronics
                </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-slate-300 hover:text-brand-gold font-medium transition-colors text-sm uppercase tracking-wide cursor-pointer">Home</a>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-slate-300 hover:text-brand-gold font-medium transition-colors text-sm uppercase tracking-wide cursor-pointer">About</a>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-slate-300 hover:text-brand-gold font-medium transition-colors text-sm uppercase tracking-wide cursor-pointer">Services</a>
                <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="text-slate-300 hover:text-brand-gold font-medium transition-colors text-sm uppercase tracking-wide cursor-pointer">Portfolio</a>
                
                <Link 
                to="/booking"
                className="text-slate-300 hover:text-brand-gold font-medium transition-colors text-sm uppercase tracking-wide cursor-pointer"
                >
                Book Now
                </Link>
                
                <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                // ENSURED: rounded-full for circle/pill form
                className="bg-brand-gold hover:bg-brand-goldHover text-brand-dark px-5 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-brand-gold/20"
                >
                <Phone className="w-4 h-4" />
                <span>CHAT ON WHATSAPP</span>
                </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
                <button
                onClick={() => setIsOpen(!isOpen)}
                // Increased padding (p-3) for easier touch
                className="text-slate-300 hover:text-brand-gold focus:outline-none p-3 rounded-md hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
                >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                </button>
            </div>
            </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[55] bg-black/95 backdrop-blur-xl border-t border-white/10 pt-24 overflow-y-auto">
          <div className="px-4 pb-20 space-y-4 shadow-lg flex flex-col items-center min-h-full">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="block w-full text-center px-3 py-4 rounded-xl text-lg font-medium text-slate-200 hover:text-brand-gold hover:bg-white/5 transition-all border border-transparent hover:border-white/5"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="block w-full text-center px-3 py-4 rounded-xl text-lg font-medium text-slate-200 hover:text-brand-gold hover:bg-white/5 transition-all border border-transparent hover:border-white/5"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="block w-full text-center px-3 py-4 rounded-xl text-lg font-medium text-slate-200 hover:text-brand-gold hover:bg-white/5 transition-all border border-transparent hover:border-white/5"
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              onClick={(e) => handleNavClick(e, 'portfolio')}
              className="block w-full text-center px-3 py-4 rounded-xl text-lg font-medium text-slate-200 hover:text-brand-gold hover:bg-white/5 transition-all border border-transparent hover:border-white/5"
            >
              Portfolio
            </a>
            <Link 
              to="/booking" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-3 py-4 rounded-xl text-lg font-medium text-slate-200 hover:text-brand-gold hover:bg-white/5 transition-all border border-transparent hover:border-white/5"
            >
              Book Appointment
            </Link>
            
            <div className="w-full pt-6 border-t border-white/10">
               <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-brand-gold text-brand-dark px-4 py-4 rounded-xl font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
               >
                Chat on WhatsApp
               </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}