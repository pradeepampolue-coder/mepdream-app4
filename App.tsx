
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Clock, 
  CheckCircle2,
  ChevronRight,
  Send,
  Loader2,
  AlertTriangle,
  Settings,
  Globe,
  Building2,
  Home as HomeIcon,
  ArrowLeft,
  ShoppingBag,
  Utensils,
  Warehouse,
  Hospital,
  ExternalLink,
  ChevronDown,
  FileText,
  Play,
  Image as ImageIcon
} from 'lucide-react';
import { Section, ChatMessage } from './types';
import { SERVICES_DATA, INDUSTRIES_DATA, PRODUCTS_DATA, RESOURCES_DATA, CORE_VALUES } from './constants';
import { getTechnicalAdvice } from './services/geminiService';

const Logo = ({ inverted = false }: { inverted?: boolean }) => (
  <div className={`flex flex-col items-center justify-center ${inverted ? 'brightness-0 invert' : ''}`}>
    <svg viewBox="0 0 400 240" className="h-16 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top Graphic: Buildings and Drop */}
      <g className="logo-top">
        {/* Buildings Silhouette */}
        <path d="M220 100 V40 H240 V100 M245 100 V20 H270 V100 M275 100 V35 H295 V100 M300 100 V50 H320 V100" stroke="#024B97" strokeWidth="2" fill="#024B97" />
        {/* Water Drop with Lightning */}
        <path d="M190 100 C190 120 170 140 150 140 C130 140 110 120 110 100 C110 80 150 40 150 40 C150 40 190 80 190 100Z" fill="url(#dropGradient)" />
        <path d="M145 75 L160 95 H145 L155 120" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      
      {/* MEP Text with Swish */}
      <g transform="translate(40, 110)">
        {/* Swish lines */}
        <path d="M20 60 C 20 20, 300 20, 320 60" stroke="#F47A20" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M0 65 C 0 110, 340 110, 340 50" stroke="#3BB54A" strokeWidth="6" strokeLinecap="round" fill="none" />
        
        {/* MEP Letters */}
        <text x="50" y="85" style={{ font: 'italic bold 85px sans-serif' }}>
          <tspan fill="#024B97">M</tspan>
          <tspan fill="#F47A20">E</tspan>
          <tspan fill="#3BB54A">P</tspan>
        </text>
      </g>
      
      {/* Bottom Text */}
      <g transform="translate(40, 200)">
        <text x="10" y="20" style={{ font: 'bold 22px sans-serif' }} fill="#024B97">
          DREAM OPERATION
        </text>
        <text x="22" y="45" style={{ font: 'bold 18px sans-serif' }} fill="#024B97">
          SOLUTION <tspan fill="#F47A20">PVT. LTD.</tspan>
        </text>
      </g>

      <defs>
        <linearGradient id="dropGradient" x1="110" y1="40" x2="190" y2="140" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0ea5e9" />
          <stop offset="1" stopColor="#024B97" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<Section>(Section.HOME);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [isResourcesHovered, setIsResourcesHovered] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const navigateTo = (page: Section) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    setIsServicesHovered(false);
    setIsProductsHovered(false);
    setIsResourcesHovered(false);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage: ChatMessage = { role: 'user', content: chatInput };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setIsTyping(true);

    const advice = await getTechnicalAdvice(chatInput);
    setChatMessages(prev => [...prev, { role: 'assistant', content: advice }]);
    setIsTyping(false);
  };

  const HomeView = () => (
    <div className="animate-in fade-in duration-500">
      <section className="relative overflow-hidden py-24 md:py-32 bg-slate-900 text-white min-h-[80vh] flex items-center">
        <div className="absolute inset-0 opacity-20 bg-grid pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse-slow">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                End-to-End Operational Solutions
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] font-heading">
                Mepdream operation <br />
                <span className="mep-gradient-text">
                  solutions Pvt Ltd.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto md:mx-0">
                A full-service 24/7 provider specializing in emergency electrical support, preventive maintenance, and complete technical installations.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => navigateTo(Section.SERVICES)}
                  className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-50 transition-all group"
                >
                  Explore Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => navigateTo(Section.CONTACT)}
                  className="border border-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all"
                >
                  Get Support Now
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 md:gap-12 pt-10 border-t border-slate-800">
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
                  <div className="text-[10px] md:text-xs text-slate-500 uppercase font-bold tracking-widest">Always Online</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-orange-500">Zero</div>
                  <div className="text-[10px] md:text-xs text-slate-500 uppercase font-bold tracking-widest">Downtime</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-green-500">Expert</div>
                  <div className="text-[10px] md:text-xs text-slate-500 uppercase font-bold tracking-widest">Certified Team</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 relative hidden md:block">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                <img src="https://images.unsplash.com/photo-1558389186-438424b00a32?q=80&w=1000&auto=format&fit=crop" alt="MEP Engineering Work" className="w-full object-cover aspect-[4/5]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Integrated Operational Excellence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all cursor-pointer" onClick={() => navigateTo(Section.ABOUT)}>
              <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Who We Are</h3>
              <p className="text-slate-500 text-sm">Committed to reliability, innovation, and unwavering safety standards.</p>
              <ArrowRight className="mx-auto mt-4 text-blue-600" />
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all cursor-pointer" onClick={() => navigateTo(Section.SERVICES)}>
              <Settings className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Solutions</h3>
              <p className="text-slate-500 text-sm">Comprehensive electrical and technical services for all industries.</p>
              <ArrowRight className="mx-auto mt-4 text-orange-500" />
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all cursor-pointer" onClick={() => navigateTo(Section.AI_ADVISOR)}>
              <Zap className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Advisor</h3>
              <p className="text-slate-500 text-sm">Get real-time technical diagnostics from our AI support agent.</p>
              <ArrowRight className="mx-auto mt-4 text-green-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutView = () => (
    <div className="animate-in slide-in-from-right duration-500 pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigateTo(Section.HOME)} className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs">Who We Are</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 font-heading">Safety, Integrity, & Reliability</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 shadow-sm">
              <h4 className="text-2xl font-bold mb-6 text-slate-900">Company Overview</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                Mepdream operation solutions Pvt Ltd is a professional, full-service 24/7 electrical and technical maintenance provider. We ensure safe, reliable, and uninterrupted operations using modern tools and strict quality standards.
              </p>
              <div className="grid grid-cols-1 gap-6">
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <h5 className="text-blue-600 font-bold text-sm uppercase mb-2">Vision Statement</h5>
                  <p className="text-sm text-slate-500">To be a leading and trusted provider of electrical and technical maintenance services, known for reliability and customer satisfaction.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <h5 className="text-orange-500 font-bold text-sm uppercase mb-2">Mission Statement</h5>
                  <ul className="text-sm text-slate-500 space-y-2">
                    <li>• Deliver fast and dependable 24/7 technical services.</li>
                    <li>• Maintain the highest standards of safety and compliance.</li>
                    <li>• Build transparent, long-term relationships with clients.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CORE_VALUES.map((val, idx) => (
              <div key={idx} className="p-6 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 p-3 bg-slate-50 rounded-xl inline-block text-blue-600">
                  {val.icon}
                </div>
                <h5 className="font-bold text-sm text-slate-900">{val.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ServicesView = () => (
    <div className="animate-in slide-in-from-right duration-500 bg-white min-h-screen">
      <section className="pt-12 pb-20 px-4 max-w-7xl mx-auto border-b border-slate-100">
        <button onClick={() => navigateTo(Section.HOME)} className="flex items-center gap-2 text-blue-600 font-bold mb-12 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        <div className="max-w-4xl">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-4">Professional Services</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-slate-900 font-heading mb-6 tracking-tight">Our Core Technical Expertise</h3>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl">
            From industrial setups to emergency home repairs, our team provides end-to-end electrical and technical solutions with a focus on quality and safety.
          </p>
        </div>
      </section>

      <div className="space-y-0">
        {SERVICES_DATA.map((service, index) => (
          <section key={service.id} id={service.id} className={`py-32 relative overflow-hidden ${index % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Impactful Visual */}
                <div className={`relative ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                  <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white bg-slate-200">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110 opacity-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className={`absolute -top-6 -left-6 w-24 h-24 rounded-full blur-3xl opacity-20 ${index % 2 === 0 ? 'bg-blue-600' : 'bg-orange-500'}`}></div>
                  <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-3xl opacity-20 ${index % 2 === 0 ? 'bg-green-500' : 'bg-blue-600'}`}></div>
                </div>

                {/* Service Details */}
                <div className="space-y-10">
                  <div className="space-y-4">
                    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest border ${index % 2 === 0 ? 'bg-blue-50 border-blue-100 text-blue-600' : 'bg-orange-50 border-orange-100 text-orange-600'}`}>
                      {service.id === 'maint' && <Zap className="w-4 h-4" />}
                      {service.id === 'install' && <Settings className="w-4 h-4" />}
                      {service.id === 'support' && <Globe className="w-4 h-4" />}
                      {service.id === 'safety' && <ShieldCheck className="w-4 h-4" />}
                      Service Category
                    </div>
                    <h4 className="text-4xl md:text-5xl font-bold text-slate-900 font-heading leading-tight">{service.title}</h4>
                  </div>
                  
                  <p className="text-slate-600 text-xl leading-relaxed">{service.description}</p>
                  
                  <div className="grid sm:grid-cols-1 gap-5">
                    {service.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex gap-4 items-start p-5 bg-white border border-slate-100 rounded-2xl hover:shadow-lg transition-all transform hover:-translate-y-1">
                        <div className="mt-1 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-900 font-bold text-base leading-tight">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button 
                      onClick={() => navigateTo(Section.CONTACT)}
                      className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl group"
                    >
                      Inquire About {service.id === 'maint' ? 'Maintenance' : 'Solutions'} <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );

  const IndustriesView = () => (
    <div className="animate-in slide-in-from-right duration-500 pt-12 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigateTo(Section.HOME)} className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <h2 className="text-green-600 font-bold tracking-widest uppercase text-xs">Industries We Serve</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 font-heading">Versatile Technical Support Across All Sectors</h3>
          <p className="text-slate-500">Mepdream Operation Solutions delivers tailored technical project solutions to a diverse range of industries, maintaining critical operations everywhere.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_DATA.map((ind, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col border border-slate-100">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={ind.image} 
                  alt={ind.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6 flex items-center gap-2 text-white">
                  <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                    {ind.icon === 'Home' && <HomeIcon className="w-5 h-5" />}
                    {ind.icon === 'Building2' && <Building2 className="w-5 h-5" />}
                    {ind.icon === 'ShoppingBag' && <ShoppingBag className="w-5 h-5" />}
                    {ind.icon === 'Utensils' && <Utensils className="w-5 h-5" />}
                    {ind.icon === 'Warehouse' && <Warehouse className="w-5 h-5" />}
                    {ind.icon === 'Hospital' && <Hospital className="w-5 h-5" />}
                  </div>
                  <h5 className="font-bold text-lg">{ind.name}</h5>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{ind.description}</p>
                <button 
                  onClick={() => navigateTo(Section.CONTACT)}
                  className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View Case Study <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProductsView = () => (
    <div className="animate-in slide-in-from-right duration-500 pt-12 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigateTo(Section.HOME)} className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs">Our Brands</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 font-heading">Integrated Technology Solutions</h3>
        </div>

        <div className="space-y-24">
          {PRODUCTS_DATA.map((product, idx) => (
            <div key={product.id} id={product.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="w-full lg:w-1/2">
                <div className="rounded-[40px] overflow-hidden shadow-2xl border border-slate-100">
                  <img src={product.image} alt={product.name} className="w-full aspect-video object-cover" />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <h4 className="text-3xl md:text-4xl font-bold text-slate-900">{product.name}</h4>
                <p className="text-slate-600 text-lg leading-relaxed">{product.description}</p>
                <button 
                  onClick={() => navigateTo(Section.CONTACT)}
                  className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-600 transition-all group"
                >
                  Request Information <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ResourcesView = () => (
    <div className="animate-in slide-in-from-right duration-500 pt-12 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigateTo(Section.HOME)} className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-xs">Knowledge Hub</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 font-heading">Corporate Resources</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {RESOURCES_DATA.map((res) => (
            <div key={res.id} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-600">
                {res.id === 'video' && <Play className="w-8 h-8" />}
                {res.id === 'brochures' && <FileText className="w-8 h-8" />}
                {res.id === 'gallery' && <ImageIcon className="w-8 h-8" />}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">{res.name}</h4>
              <p className="text-slate-500 mb-8 leading-relaxed">{res.description}</p>
              <button className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                Access Now <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AdvisorView = () => (
    <div className="animate-in zoom-in duration-500 pt-12 pb-24 min-h-[90vh] bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        <button onClick={() => navigateTo(Section.HOME)} className="flex items-center gap-2 text-blue-400 font-bold mb-8 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> Exit Advisor
        </button>
        
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col h-[70vh] border border-slate-200">
          <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-sm"></div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">MEPDREAM Virtual Technical Advisor</span>
            </div>
            <button onClick={() => setChatMessages([])} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-red-500 transition-colors">Clear Chat</button>
          </div>
          
          <div className="flex-grow p-8 overflow-y-auto space-y-6 bg-slate-50/30">
            {chatMessages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-40 px-8">
                <Zap className="w-16 h-16 text-blue-600" />
                <h3 className="text-xl font-bold text-slate-800">Ready for Technical Assessment</h3>
                <p className="text-sm font-medium text-slate-600">Tell us about an issue (e.g. 'Electrical panel is making noise') to receive immediate safety guidance and service direction.</p>
              </div>
            )}
            {chatMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-[24px] px-6 py-4 text-sm font-medium leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-slate-900 text-white rounded-br-none' 
                  : 'bg-white text-slate-700 shadow-lg border border-slate-100 rounded-bl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 rounded-[24px] px-6 py-4 flex items-center gap-3">
                  <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Analyzing Problem...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-6 bg-white border-t border-slate-100 flex gap-3">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Describe your technical issue or requirement..."
              className="flex-grow bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              disabled={isTyping || !chatInput.trim()}
              className="bg-blue-600 text-white p-3.5 rounded-2xl hover:bg-blue-700 disabled:opacity-50 transition-all flex-shrink-0 shadow-lg shadow-blue-200"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const ContactView = () => (
    <div className="animate-in slide-in-from-right duration-500 pt-12 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigateTo(Section.HOME)} className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">Connect With Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 font-heading">Contact Details</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex gap-6 items-start p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">24/7 Support Hotline</p>
                  <a href="tel:9337225129" className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors tracking-tight">9337225129</a>
                </div>
              </div>

              <div className="flex gap-6 items-start p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="p-4 bg-orange-50 text-orange-500 rounded-2xl group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:mepdreamoperations.25@gmail.com" className="text-xl font-bold text-slate-900 hover:text-orange-500 transition-colors break-all">mepdreamoperations.25@gmail.com</a>
                </div>
              </div>

              <div className="flex gap-6 items-start p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="p-4 bg-green-50 text-green-600 rounded-2xl group-hover:bg-green-600 group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Our Location</p>
                  <address className="not-italic text-slate-900 text-lg font-bold leading-relaxed mb-4">
                    Plot no: 97/P, Suffah colony,<br />
                    Opp Wipro, Gopanpally Village,<br />
                    Serilingampally Mandal, Rangareddy dist,<br />
                    Cyberabad - 500045
                  </address>
                  <a 
                    href="https://maps.app.goo.gl/RH4Fu3LrWqxPJ7uz6?g_st=aw" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-md group"
                  >
                    View on Google Maps <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-10 text-slate-900 border border-slate-100 shadow-2xl flex flex-col">
            <h4 className="text-2xl font-bold mb-8">Send a Quick Message</h4>
            <form className="space-y-6 flex-grow">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Your Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Message Detail</label>
                <textarea className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 h-48 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we help with your electrical or technical needs?"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">Submit Consultation</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            <div className="flex items-center cursor-pointer" onClick={() => navigateTo(Section.HOME)}>
              <Logo />
            </div>

            <div className="hidden lg:flex items-center space-x-8 h-full">
              {Object.values(Section).map((s) => {
                // Special handling for dropdown items
                if (s === Section.SERVICES || s === Section.PRODUCTS || s === Section.RESOURCES) {
                  const isHovered = s === Section.SERVICES ? isServicesHovered : s === Section.PRODUCTS ? isProductsHovered : isResourcesHovered;
                  const setHovered = s === Section.SERVICES ? setIsServicesHovered : s === Section.PRODUCTS ? setIsProductsHovered : setIsResourcesHovered;
                  const data = s === Section.SERVICES ? SERVICES_DATA : s === Section.PRODUCTS ? PRODUCTS_DATA : RESOURCES_DATA;

                  return (
                    <div 
                      key={s} 
                      className="relative h-full flex items-center"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                    >
                      <button
                        onClick={() => navigateTo(s)}
                        className={`text-xs font-bold transition-colors uppercase tracking-wider flex items-center gap-1.5 h-full ${
                          currentPage === s ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                        }`}
                      >
                        {s.replace('_', ' ')}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div className={`absolute top-full left-0 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 transition-all duration-300 origin-top z-[60] ${
                        isHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}>
                        {data.map((item: any) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              navigateTo(s);
                              if (s !== Section.RESOURCES) {
                                setTimeout(() => {
                                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }, 100);
                              }
                            }}
                            className="w-full text-left px-5 py-3.5 hover:bg-blue-50 transition-colors flex items-center justify-between group"
                          >
                            <span className="text-[11px] font-bold text-slate-700 group-hover:text-blue-600 uppercase tracking-widest">
                              {item.title || item.name}
                            </span>
                            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-400 transition-colors" />
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={s}
                    onClick={() => navigateTo(s)}
                    className={`text-xs font-bold transition-colors uppercase tracking-wider ${
                      currentPage === s ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    {s.replace('_', ' ')}
                  </button>
                );
              })}
              <button 
                onClick={() => navigateTo(Section.CONTACT)}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
              >
                Inquire Now
              </button>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 p-4 space-y-4 shadow-xl">
            {Object.values(Section).map((s) => (
              <button
                key={s}
                onClick={() => navigateTo(s)}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-blue-50 rounded-lg capitalize font-bold"
              >
                {s.replace('_', ' ')}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow pt-24">
        {currentPage === Section.HOME && <HomeView />}
        {currentPage === Section.ABOUT && <AboutView />}
        {currentPage === Section.SERVICES && <ServicesView />}
        {currentPage === Section.INDUSTRIES && <IndustriesView />}
        {currentPage === Section.PRODUCTS && <ProductsView />}
        {currentPage === Section.RESOURCES && <ResourcesView />}
        {currentPage === Section.AI_ADVISOR && <AdvisorView />}
        {currentPage === Section.CONTACT && <ContactView />}
      </main>

      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center cursor-pointer" onClick={() => navigateTo(Section.HOME)}>
              <Logo inverted />
            </div>
            
            <div className="flex flex-wrap justify-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              <button onClick={() => navigateTo(Section.ABOUT)} className="hover:text-white transition-colors">About Us</button>
              <button onClick={() => navigateTo(Section.SERVICES)} className="hover:text-white transition-colors">Services</button>
              <button onClick={() => navigateTo(Section.INDUSTRIES)} className="hover:text-white transition-colors">Industries</button>
              <button onClick={() => navigateTo(Section.PRODUCTS)} className="hover:text-white transition-colors">Products</button>
              <button onClick={() => navigateTo(Section.CONTACT)} className="hover:text-white transition-colors">Contact</button>
            </div>

            <div className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} Mepdream operation solutions Pvt Ltd.
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
         <button 
          onClick={() => navigateTo(Section.AI_ADVISOR)}
          className="bg-white text-slate-900 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group relative border border-slate-100"
        >
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-white rounded-full animate-ping"></div>
          </div>
          <Zap className="w-8 h-8 text-blue-600" />
        </button>
        <button 
          onClick={() => window.location.href = 'tel:9337225129'}
          className="bg-slate-900 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-slate-400"
        >
          <Phone className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
