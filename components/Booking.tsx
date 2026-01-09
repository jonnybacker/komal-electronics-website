import React, { useState } from 'react';
import { CheckCircle, Clock, Calendar, Zap, ArrowLeft, Star, ShieldCheck, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

export default function Booking() {
  const [formState, setFormState] = useState({
    name: '',
    location: '',
    phone: '',
    email: '',
    serviceType: '',
    description: '',
    urgency: 'standard'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Booking Request*%0A%0A*Name:* ${formState.name}%0A*Location:* ${formState.location}%0A*Phone:* ${formState.phone}%0A*Service:* ${formState.serviceType}%0A*Urgency:* ${formState.urgency}%0A*Details:* ${formState.description}`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden text-white font-sans bg-black">
      
      {/* Background Image: High-Tech/Electrical */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555664424-778a696335b7?q=80&w=2000&auto=format&fit=crop" 
            alt="Electrical Circuit Background" 
            className="w-full h-full object-cover opacity-40 lg:opacity-30 transition-opacity duration-500" // Increased opacity on mobile (40%)
          />
          {/* Mobile gradient vs Desktop gradient - Lighter on mobile now */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black/80 lg:bg-gradient-to-r lg:from-black lg:via-black/90 lg:to-black/70"></div>
      </div>

      {/* Decorative Elements - Desktop Only */}
      <div className="hidden lg:block absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      
      {/* 
        UPDATED: Top Right Komal Electronics Link 
        Attractive, quick access to home.
      */}
      <Link 
        to="/" 
        className="absolute top-6 right-6 lg:top-10 lg:right-10 z-50 flex items-center gap-2 group bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 hover:border-brand-gold/50 transition-all shadow-lg"
      >
        <div className="bg-brand-gold/20 p-1 rounded-full group-hover:bg-brand-gold transition-colors">
            <Zap className="w-4 h-4 text-brand-gold group-hover:text-black transition-colors" />
        </div>
        <span className="font-bold text-sm lg:text-base text-white group-hover:text-brand-gold transition-colors tracking-wide">
            KOMAL ELECTRONICS
        </span>
      </Link>


      {/* Left Side: Information & Trust (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-5/12 relative z-10 flex-col justify-center p-12 lg:p-16 border-r border-white/5">
        
        <Link to="/" className="absolute top-10 left-10 text-slate-400 hover:text-brand-gold flex items-center gap-2 transition-colors group px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 backdrop-blur-sm">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight">
            Schedule Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">Expert Visit</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-md leading-relaxed border-l-2 border-brand-gold pl-4 mt-6">
            You are one step away from solving your electrical problems. Our engineers are ready to deploy.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="space-y-8 relative">
            {/* Connecting Line */}
            <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-white/10"></div>

            <div className="relative flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,215,0,0.4)] z-10">
                    <Calendar className="w-5 h-5 text-brand-dark" />
                </div>
                <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-brand-gold transition-colors">1. Book Appointment</h4>
                    <p className="text-slate-500 text-sm">Fill out the form with your details.</p>
                </div>
            </div>

            <div className="relative flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 z-10 group-hover:border-brand-gold transition-colors">
                    <Phone className="w-5 h-5 text-slate-400 group-hover:text-brand-gold" />
                </div>
                <div>
                    <h4 className="text-white font-bold text-lg">2. Confirmation Call</h4>
                    <p className="text-slate-500 text-sm">We verify details within 15 mins.</p>
                </div>
            </div>

            <div className="relative flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 z-10 group-hover:border-brand-gold transition-colors">
                    <Zap className="w-5 h-5 text-slate-400 group-hover:text-brand-gold" />
                </div>
                <div>
                    <h4 className="text-white font-bold text-lg">3. Expert Arrival</h4>
                    <p className="text-slate-500 text-sm">Our team arrives fully equipped.</p>
                </div>
            </div>
        </div>
        
        {/* Trust Badges */}
        <div className="mt-12 flex gap-4">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span className="text-xs font-bold text-slate-300">PEC Licensed</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-xs font-bold text-slate-300">On-Time Guarantee</span>
            </div>
        </div>

      </div>

      {/* Right Side: Form (Responsive) */}
      <div className="flex-1 relative z-10 flex items-start lg:items-center justify-center p-6 sm:p-8 lg:p-12 overflow-y-auto h-screen lg:h-auto">
        
        {/* Mobile Header (Updated to include top-right link logic which is now global, but keeping back button here for mobile UX) */}
        <div className="lg:hidden w-full absolute top-0 left-0 p-6 flex justify-between items-center z-20 bg-gradient-to-b from-black to-transparent pointer-events-none">
            <Link to="/" className="text-slate-300 flex items-center gap-2 text-sm font-bold hover:text-brand-gold transition-colors pointer-events-auto bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <ArrowLeft className="w-4 h-4"/> Back
            </Link>
            {/* The absolute top-right link covers the other side */}
        </div>

        <div className="w-full max-w-xl animate-fade-in-up mt-20 lg:mt-0 pb-10">
          
          {/* Container Styles:
              Mobile: Minimalist, transparent, no borders.
              Desktop: Glassmorphism card, borders, shadows.
          */}
          <div className="w-full lg:bg-brand-gray/50 lg:backdrop-blur-xl lg:border lg:border-white/10 lg:p-10 lg:rounded-3xl lg:shadow-2xl relative overflow-visible lg:overflow-hidden group">
            
            {/* Top Glow (Desktop) */}
            <div className="hidden lg:block absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

            <div className="mb-8 relative">
              <span className="text-brand-gold text-2xl absolute -left-6 top-1 lg:hidden animate-pulse">⚡</span>
              <h2 className="text-3xl md:text-3xl font-bold text-white flex items-center gap-3">
                 <Zap className="w-6 h-6 text-brand-gold fill-current hidden lg:block" />
                 Request Service
              </h2>
              <p className="text-slate-400 text-sm mt-2">Please provide accurate details for faster service in Multan.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name & Phone */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3.5 rounded-xl focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all placeholder:text-slate-600 focus:bg-white/10"
                    placeholder="e.g. Ali Khan"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3.5 rounded-xl focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all placeholder:text-slate-600 focus:bg-white/10"
                    placeholder="0300-1234567"
                  />
                </div>
              </div>

              {/* Location & Service */}
              <div className="grid md:grid-cols-2 gap-5">
                 <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-1"><MapPin className="w-3 h-3"/> Location</label>
                  <input 
                    type="text" 
                    required
                    value={formState.location}
                    onChange={(e) => setFormState({...formState, location: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3.5 rounded-xl focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all placeholder:text-slate-600 focus:bg-white/10"
                    placeholder="e.g. DHA Phase 1"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Service Type</label>
                  <select 
                    required
                    value={formState.serviceType}
                    onChange={(e) => setFormState({...formState, serviceType: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3.5 rounded-xl focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all appearance-none cursor-pointer hover:bg-white/10"
                  >
                    <option value="" className="bg-brand-gray text-slate-500">Select Service</option>
                    <option value="Residential Wiring" className="bg-brand-gray">Residential Wiring</option>
                    <option value="Solar Installation" className="bg-brand-gray">Solar Installation</option>
                    <option value="Industrial Panel" className="bg-brand-gray">Industrial Panel</option>
                    <option value="Smart Home" className="bg-brand-gray">Smart Home Automation</option>
                    <option value="UPS/Inverter Repair" className="bg-brand-gray">UPS / Inverter Repair</option>
                    <option value="Emergency Breakdown" className="bg-brand-gray">Emergency Breakdown</option>
                    <option value="Other" className="bg-brand-gray">Other</option>
                  </select>
                </div>
              </div>

              {/* Urgency Selector */}
              <div className="space-y-2">
                 <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Urgency Level</label>
                 <div className="grid grid-cols-2 gap-3">
                    <button
                        type="button"
                        onClick={() => setFormState({...formState, urgency: 'standard'})}
                        className={`py-3.5 rounded-xl border text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                            formState.urgency === 'standard'
                            ? 'bg-brand-gold border-brand-gold text-brand-dark shadow-lg shadow-brand-gold/20'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/30 hover:text-white'
                        }`}
                    >
                        Standard
                    </button>
                    <button
                        type="button"
                        onClick={() => setFormState({...formState, urgency: 'emergency'})}
                        className={`py-3.5 rounded-xl border text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                            formState.urgency === 'emergency'
                            ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/30'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:border-red-500/50 hover:text-red-400'
                        }`}
                    >
                        <Zap className="w-4 h-4" /> Emergency
                    </button>
                 </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Issue Details</label>
                <textarea 
                  rows={3}
                  value={formState.description}
                  onChange={(e) => setFormState({...formState, description: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-3.5 rounded-xl focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all placeholder:text-slate-600 resize-none focus:bg-white/10"
                  placeholder="Describe the problem or project details..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-brand-gold hover:bg-brand-goldHover text-brand-dark rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-brand-gold/20 transform hover:-translate-y-1 mt-6 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-wider text-sm md:text-base">
                    Confirm Appointment
                </span>
              </button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}