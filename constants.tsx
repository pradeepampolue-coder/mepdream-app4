
import React from 'react';
import { 
  Zap, 
  Settings, 
  ShieldCheck, 
  Globe, 
  Clock, 
  Truck, 
  HardHat, 
  Activity,
  Home,
  Building2,
  ShoppingBag,
  Utensils,
  Warehouse,
  Hospital
} from 'lucide-react';
import { ServiceItem, IndustryItem, ProductItem, ResourceItem } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'maint',
    title: 'Electrical & Technical Maintenance',
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?auto=format&fit=crop&q=80&w=1200',
    description: 'Expert diagnostics and 24/7 troubleshooting. We specialize in identifying faults before they cause downtime, ensuring your electrical systems remain robust and reliable.',
    details: [
      '24/7 emergency electrical and technical repairs',
      'Fault finding, diagnostics, and troubleshooting',
      'Preventive and scheduled maintenance',
      'Load management and energy optimization'
    ]
  },
  {
    id: 'install',
    title: 'Electrical Installations',
    icon: 'Settings',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=1200',
    description: 'Precision wiring for industrial and commercial projects. Our certified team handles everything from main panel setups to complex industrial machinery integration.',
    details: [
      'Wiring and rewiring (residential, commercial, industrial)',
      'Electrical panel setup & upgrades',
      'Indoor/outdoor lighting installation',
      'Industrial electrical machinery setup'
    ]
  },
  {
    id: 'support',
    title: 'Technical Support Services',
    icon: 'Globe',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200',
    description: 'Beyond basic power: we integrate smart technology and maintain critical network infrastructure to keep your technical operations seamless.',
    details: [
      'Meter installation and servicing',
      'UPS and generator electrical integration',
      'Smart home and automation support',
      'Network and minor technical equipment maintenance'
    ]
  },
  {
    id: 'safety',
    title: 'Safety & Compliance',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200',
    description: 'Safety is non-negotiable. We provide thorough inspections and grounding solutions to ensure your premises meet all regulatory electrical standards.',
    details: [
      'Comprehensive electrical inspections',
      'Earthing & grounding solutions',
      'Circuit breaker (MCB, ACB, VCB) maintenance',
      'Compliance with national electrical safety standards'
    ]
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  { 
    name: 'Residential Communities', 
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    description: 'Reliable 24/7 support for apartments and residential societies, ensuring families stay safe and powered.'
  },
  { 
    name: 'Offices & Commercial', 
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    description: 'Maximizing uptime for businesses with expert preventive maintenance for high-rise offices and corporate hubs.'
  },
  { 
    name: 'Retail & Malls', 
    icon: 'ShoppingBag',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800',
    description: 'Specialized lighting and power management for retail spaces, ensuring a vibrant and safe customer experience.'
  },
  { 
    name: 'Restaurants & Hotels', 
    icon: 'Utensils',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    description: 'Maintaining critical kitchen and guest systems in high-traffic hospitality environments where downtime isn’t an option.'
  },
  { 
    name: 'Industrial & Warehouses', 
    icon: 'Warehouse',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    description: 'Heavy-duty electrical support for factories and logistics centers, focusing on machinery setup and safety compliance.'
  },
  { 
    name: 'Hospitals & Education', 
    icon: 'Hospital',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    description: 'Ensuring uninterrupted power and technical infrastructure for critical healthcare and educational facilities.'
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'lapp',
    name: 'LAPP India',
    image: 'https://images.unsplash.com/photo-1558389186-438424b00a32?auto=format&fit=crop&q=80&w=1200',
    description: 'LAPP is a leading supplier of integrated solutions and branded products in the field of cable and connection technology. From multi-core cables to branded products like ÖLFLEX, UNITRONIC, and ETHERLINE, we provide the best in connection solutions.'
  },
  {
    id: 'accuride',
    name: 'Accuride International',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
    description: 'Accuride is a world leader in the design and manufacture of ball bearing slides and movement solutions. Their precision-engineered slides are the global standard for smooth movement in industrial and commercial applications.'
  }
];

export const RESOURCES_DATA: ResourceItem[] = [
  { id: 'video', name: 'Corporate Video', description: 'Watch our operations in action and learn more about our commitment to quality.' },
  { id: 'brochures', name: 'E-Brochures', description: 'Download our technical specifications, service catalogs, and corporate profiles.' },
  { id: 'gallery', name: 'Gallery', description: 'Visual documentation of our landmark projects and dedicated technical teams.' }
];

export const CORE_VALUES = [
  { title: 'Safety & Compliance', icon: <ShieldCheck className="w-6 h-6 text-blue-600" /> },
  { title: 'Integrity & Transparency', icon: <Globe className="w-6 h-6 text-blue-600" /> },
  { title: 'Reliability & 24/7 Service', icon: <Clock className="w-6 h-6 text-blue-600" /> },
  { title: 'Quality Workmanship', icon: <HardHat className="w-6 h-6 text-blue-600" /> },
  { title: 'Customer-Centric Service', icon: <Activity className="w-6 h-6 text-blue-600" /> }
];
