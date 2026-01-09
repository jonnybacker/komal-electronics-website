import { Zap, Shield, Clock, Award, DollarSign, Headphones, Wrench, Sun, Activity } from 'lucide-react';
import { FeatureItem, PortfolioItem, ServiceItem } from './types';

export const CONTACT_INFO = {
  phone: "+92 321 6369766",
  whatsapp: "923076369933",
  email: "jonnybob1148@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61582719035380",
  address: "Tariq Road, Cantt, Multan, Pakistan"
};

// IMAGERY STRATEGY:
// Using high-quality images relevant to Pakistani electrical context where possible.

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential',
    title: 'Residential Wiring',
    // SEO Update: Added "electrician" and "underground" keywords
    description: 'Expert residential electrician services for new constructions, underground cabling, and renovation of old systems in Multan.',
    // Image: Red brick construction site (Reliable URL)
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop', 
    icon: <Wrench className="w-6 h-6" />
  },
  {
    id: 'industrial',
    title: 'Industrial Solutions',
    // SEO Update: Added "Industrial Estate" and "3-phase" context
    description: 'Specialized 3-phase DB box design and heavy machinery wiring for factories in Multan Industrial Estate.',
    // Image: Industrial electrical panel
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop',
    icon: <Activity className="w-6 h-6" />
  },
  {
    id: 'solar',
    title: 'Solar Energy',
    // SEO Update: Added "inverter repair" keyword
    description: 'Complete solar panel installation, net metering, and inverter repair services for hybrid and on-grid systems.',
    // Image: Solar panels
    imageUrl: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=800&auto=format&fit=crop',
    icon: <Sun className="w-6 h-6" />
  },
  {
    id: 'emergency',
    title: 'Emergency Repairs',
    // SEO Update: Added "electrician near me" context (emergency/24-7)
    description: '24/7 emergency electrician in Multan for short circuits, DB box faults, and urgent power breakdown restoration.',
    // Image: Fuse box/Repairs
    imageUrl: 'https://iili.io/feym0Fe.jpg?q=80&w=800&auto=format&fit=crop',
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 'cctv',
    title: 'Security Systems',
    description: 'Installation of CCTV cameras for gate security and remote monitoring.',
    // Image: Security camera
    imageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop',
    icon: <Shield className="w-6 h-6" />
  },
  {
    id: 'smart-home',
    title: 'Smart Automation',
    // SEO Update: Added "IoT" and "Smart Home Electrician" context
    description: 'Advanced smart home electrician services. Control your AC, lights, and fans via mobile app to save electricity.',
    // Updated Image: Smartphone controlling Smart Home App
    imageUrl: 'https://iili.io/feyogKG.jpg?q=80&w=800&auto=format&fit=crop',
    icon: <Headphones className="w-6 h-6" />
  }
];

export const FEATURES: FeatureItem[] = [
  {
    title: 'Expert Technicians',
    // SEO Update: "Electricians in Multan"
    description: 'Top-rated qualified electricians in Multan experienced with Pakistan cables and safety standards.',
    icon: Award
  },
  {
    title: '24/7 Availability',
    description: 'We are always ready to handle UPS breakdowns or wiring faults, day or night.',
    icon: Clock
  },
  {
    title: 'Affordable Pricing',
    description: 'Transparent quotes in PKR. No hidden material charges.',
    icon: DollarSign
  },
  {
    title: 'Safety First',
    description: 'Strict adherence to safety to prevent short circuits and fires.',
    icon: Shield
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'DHA Multan 1 Kanal Villa',
    category: 'Residential',
    // Image: Modern house
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Vehari Road Textile Unit',
    category: 'Industrial',
    // Updated Image: Industrial Electric Panel / Factory Work
    imageUrl: 'https://iili.io/fepMGQs.jpg?q=80&w=800&auto=format&fit=crop' 
  },
  {
    id: '3',
    title: 'Cantt Solar Installation',
    category: 'Solar',
    // Image: Solar panels
    imageUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop'
  }
];

export const LOCATIONS = [
  "DHA Multan",
  "Wapda Town",
  "Gulgasht Colony",
  "Bosan Road",
  "Cantt",
  "Model Town",
  "Shah Rukn-e-Alam",
  "Industrial Estate",
  "Vehari Road",
  "New Multan"
];