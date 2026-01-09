import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon?: React.ReactNode;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface NavLink {
  label: string;
  href: string; // Used for anchor tags or internal routing
}