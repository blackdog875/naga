
import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  CreditCard, 
  MapPin, 
  Gift, 
  Percent, 
  ShieldCheck, 
  ChevronRight, 
  ShoppingBag, 
  X, 
  Menu,
  CheckCircle2,
  Beer,
  Plane,
  Car,
  Hotel,
  Clock,
  Send,
  Loader2,
  UserPlus,
  Star,
  Flag,
  Waves,
  Lock,
  Truck,
  Shirt,
  Heart,
  Tag,
  TrendingUp,
  Target,
  BarChart3,
  DollarSign,
  Briefcase,
  Megaphone,
  Zap,
  ArrowUpRight,
  MousePointer2,
  FileText,
  RefreshCcw,
  Globe
} from 'lucide-react';
import { AgeGroup, CartItem } from './types';
import { getReasonsToJoin } from './services/geminiService';

// --- UI Components ---

const Navbar = ({ cartCount, onOpenCart }: { cartCount: number, onOpenCart: () => void }) => (
  <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center">
            <Trophy className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black text-gray-900 tracking-tighter">NAGA<span className="text-emerald-700">.org</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#benefits" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">Benefits</a>
          <a href="#projections" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">Projections</a>
          <a href="#remittance" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">Course Partners</a>
          <button 
            onClick={onOpenCart}
            className="relative p-2 text-gray-600 hover:text-emerald-700 transition-colors"
          >
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
          <a href="#join" className="bg-emerald-800 text-white px-6 py-2.5 rounded-full font-bold hover:bg-emerald-900 transition-all shadow-lg hover:shadow-emerald-900/20 active:scale-95">
            Join Now
          </a>
        </div>

        <div className="md:hidden flex items-center gap-4">
           <button onClick={onOpenCart} className="relative p-2">
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <Menu className="w-6 h-6 text-gray-600" />
        </div>
      </div>
    </div>
  </nav>
);

const Hero = ({ onJoin }: { onJoin: () => void }) => (
  <section className="relative overflow-hidden bg-sky-50 pt-16 pb-24 lg:pt-32 lg:pb-40">
    <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-sky-50 z-10" />
      <img 
        src="https://images.unsplash.com/photo-1595180608757-3665a32ec421?auto=format&fit=crop&q=80&w=2000" 
        alt="Ocean View Golf Course" 
        className="w-full h-full object-cover"
      />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-600 text-white text-sm font-bold mb-8 shadow-lg shadow-emerald-200">
          <Globe className="w-4 h-4" />
          <span>New Home: PlayNAGA.org</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-8 font-serif">
          National <span className="text-emerald-700">Amateur</span> Golf Association.
        </h1>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
          NAGA: A dual-track growth model where pro shop acquisition meets digital renewal. Experience the amateur game at its peak at **PlayNAGA.org**.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onJoin}
            className="bg-emerald-800 text-white text-lg font-bold px-10 py-5 rounded-xl hover:bg-emerald-900 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-emerald-900/20 active:scale-95"
          >
            Claim $49 Card <ChevronRight className="w-5 h-5" />
          </button>
          <div className="flex flex-col justify-center">
            <span className="text-sm font-bold text-gray-500 uppercase tracking-tighter">Course Lift:</span>
            <span className="text-emerald-700 font-bold">+$120M Annual Efficiency Gain</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const RemittanceWorkflow = () => (
  <section id="remittance" className="py-24 bg-sky-950 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <RefreshCcw className="w-3 h-3" /> Automatic Remittance Engine
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-8 font-serif leading-tight">Zero-Friction <span className="text-emerald-400">Remittance.</span></h2>
          <p className="text-xl text-sky-200/70 mb-10 leading-relaxed">
            Register staff shouldn't worry about paperwork. Our system shifts the tracking burden from the pro shop to the user's mobile activation.
          </p>
          
          <div className="space-y-6">
            {[
              { title: "Register Sale ($49)", desc: "The shop collects the full $49 and hands over the kit. No extra logging required by your staff." },
              { title: "User Activation Trigger", desc: "User scratch-activates on PlayNAGA.org. Our system attributes the $20 remit to your course automatically." },
              { title: "14-Day Consolidated AP", desc: "NAGA sends one single invoice every two weeks for all activations. Pay via one click." }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 font-black text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-sm text-sky-200/50">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full" />
          <div className="relative bg-white rounded-[3rem] p-8 lg:p-12 text-gray-900 shadow-2xl">
             <div className="flex justify-between items-start mb-8">
               <div>
                 <div className="text-[10px] font-black text-emerald-700 uppercase tracking-widest mb-1">NAGA Partner Portal</div>
                 <h3 className="text-2xl font-black">Monthly Settlement</h3>
               </div>
               <div className="text-right">
                 <div className="text-3xl font-black text-emerald-800">$2,900.00</div>
                 <div className="text-[10px] font-bold text-gray-400 uppercase">Shop Retention (100 Sales)</div>
               </div>
             </div>

             <div className="space-y-4 mb-8">
               <div className="p-4 bg-gray-50 rounded-2xl flex justify-between items-center border border-gray-100">
                 <div className="flex items-center gap-3">
                    <UserPlus className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-sm font-bold">User Activation: ID-8822</div>
                      <div className="text-[10px] text-gray-400 font-medium tracking-tight">Activated via PlayNAGA.org</div>
                    </div>
                 </div>
                 <div className="text-emerald-700 font-bold">+$29.00</div>
               </div>
               <div className="p-4 bg-gray-50 rounded-2xl flex justify-between items-center border border-gray-100">
                 <div className="flex items-center gap-3">
                    <UserPlus className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-sm font-bold">User Activation: ID-8821</div>
                      <div className="text-[10px] text-gray-400 font-medium tracking-tight">Activated via PlayNAGA.org</div>
                    </div>
                 </div>
                 <div className="text-emerald-700 font-bold">+$29.00</div>
               </div>
               <div className="p-4 bg-emerald-50 rounded-2xl flex justify-between items-center border border-emerald-100">
                 <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-emerald-700" />
                    <div>
                      <div className="text-sm font-bold">NAGA Remittance Batch</div>
                      <div className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">Pending AP Invoice</div>
                    </div>
                 </div>
                 <div className="text-emerald-800 font-black">-$2,000.00</div>
               </div>
             </div>

             <button className="w-full bg-emerald-800 text-white font-black py-4 rounded-2xl hover:bg-emerald-900 transition-all flex items-center justify-center gap-2">
               Download Tax Reminders (Dec) <ChevronRight className="w-4 h-4" />
             </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const StrategicProjections = () => {
  const [activeYear, setActiveYear] = useState(1);

  const stats = {
    1: {
      shops: "1,000",
      shopVelocity: "100/mo",
      newMembers: "1,200,000",
      renewals: "0",
      totalMembers: "1,200,000",
      rev: "$58.8M",
      sponsorship: "$4.5M",
      efficiencyLift: "$120M",
      focus: "Charter Market Entry",
      desc: "Initial 1,000 shops achieve peak acquisition. Every shop captures the 'low-hanging fruit' regulars. Efficiency lift begins through early APEX app adoption."
    },
    2: {
      shops: "5,000",
      shopVelocity: "75/mo",
      newMembers: "4,500,000",
      renewals: "1,200,000",
      totalMembers: "5,700,000",
      rev: "$279.3M",
      sponsorship: "$35.0M",
      efficiencyLift: "$600M",
      focus: "The Digital Pivot",
      desc: "Saturation among regulars leads to lower velocity (75/mo), but the first 1.2M members renew via PlayNAGA.org. Digital sponsorship value explodes."
    },
    3: {
      shops: "10,000",
      shopVelocity: "50/mo",
      newMembers: "6,000,000",
      renewals: "5,700,000",
      totalMembers: "11,700,000",
      rev: "$573.3M",
      sponsorship: "$95.0M",
      efficiencyLift: "$1.2B",
      focus: "Ecosystem Maturation",
      desc: "Physical sales reach steady-state (50/mo). Renewal volume matches acquisition. $1.2B in annual efficiency lift for 10,000 participating courses."
    }
  };

  const curr = stats[activeYear as keyof typeof stats];

  return (
    <section id="projections" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-emerald-700 font-black uppercase tracking-[0.3em] text-xs mb-6">
            <BarChart3 className="w-4 h-4" /> Scaling NAGA Roadmap
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 font-serif leading-tight">Hyper-Scale <span className="text-emerald-700">Business Plan.</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Our model accounts for physical shop saturation while leveraging high-margin digital renewals via PlayNAGA.org.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {[1, 2, 3].map(yr => (
            <button 
              key={yr}
              onClick={() => setActiveYear(yr)}
              className={`px-8 py-4 rounded-2xl font-black transition-all border-2 ${activeYear === yr ? 'bg-emerald-800 text-white border-emerald-800 shadow-xl shadow-emerald-800/20' : 'bg-white text-gray-400 border-gray-100 hover:border-emerald-200'}`}
            >
              Year {yr}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-sky-50 rounded-[3rem] p-8 lg:p-12 shadow-inner border border-sky-100 animate-in fade-in slide-in-from-left-4 duration-500">
             <div className="flex items-center gap-4 mb-8">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-800 shadow-sm">
                 <MousePointer2 className="w-8 h-8 fill-emerald-800" />
               </div>
               <div>
                 <h3 className="text-3xl font-black text-gray-900">Year {activeYear} Dynamics</h3>
                 <p className="text-emerald-700 font-bold uppercase tracking-widest text-xs">Velocity: {curr.shopVelocity}</p>
               </div>
             </div>
             
             <p className="text-gray-600 text-lg mb-10 leading-relaxed italic">
               "{curr.desc}"
             </p>

             <div className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white rounded-2xl border border-sky-200">
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Acquisition (Shops)</div>
                    <div className="text-2xl font-black text-gray-900">{curr.newMembers}</div>
                  </div>
                  <div className="p-5 bg-white rounded-2xl border border-sky-200">
                    <div className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Renewals (Web)</div>
                    <div className="text-2xl font-black text-emerald-800">+{curr.renewals}</div>
                  </div>
               </div>
               
               <div className="p-8 bg-emerald-900 text-white rounded-3xl shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Briefcase className="w-24 h-24" />
                 </div>
                 <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Indirect Course Revenue Lift</div>
                 <div className="text-4xl font-black text-emerald-400">${curr.efficiencyLift}</div>
                 <div className="text-[10px] uppercase font-bold opacity-40 mt-1">Extra tee times via APEX Efficiency</div>
               </div>

               <div className="p-6 bg-white rounded-3xl border border-sky-200 flex justify-between items-center group hover:border-emerald-400 transition-colors">
                 <div>
                   <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Direct NAGA Revenue</div>
                   <div className="text-3xl font-black text-gray-900">${curr.rev}</div>
                 </div>
                 <div className="text-right">
                   <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Sponsorship</div>
                   <div className="text-3xl font-black text-emerald-700">+${curr.sponsorship}</div>
                 </div>
               </div>
             </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-2xl font-black text-gray-900 font-serif mb-8">B2B & Sponsorship Roadmap</h4>
            <div className="grid gap-6">
              {[
                { icon: <Megaphone className="w-5 h-5" />, title: "APEX Ad Platform", amount: "$45M+", desc: "Monetizing the 11M+ users during their 4-hour rounds through in-app ads." },
                { icon: <Beer className="w-5 h-5" />, title: "Festival Pouring Rights", amount: "$12M+", desc: "Exclusive beer/wine rights across the national event network." },
                { icon: <TrendingUp className="w-5 h-5" />, title: "OEM Data Licensing", amount: "$18M+", desc: "Providing aggregated golfer habit data to major equipment manufacturers." },
                { icon: <ArrowUpRight className="w-5 h-5" />, title: "Pro Shop Upsell Credits", amount: "$20M+", desc: "Licensing the membership model to shops after 50 charter signups at $1/card." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-3xl border border-transparent hover:border-emerald-100 hover:bg-emerald-50/30 transition-all">
                  <div className="w-12 h-12 bg-white text-emerald-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h5 className="font-bold text-gray-900">{item.title}</h5>
                      <span className="text-xs font-black text-emerald-700">{item.amount}</span>
                    </div>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MarketImpactShort = () => (
  <section className="py-24 bg-gray-950 text-white overflow-hidden relative">
    <div className="absolute inset-0 opacity-10 pointer-events-none">
       <BarChart3 className="w-full h-full scale-150 rotate-6" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div className="grid lg:grid-cols-4 gap-8">
        {[
          { icon: <Target className="w-8 h-8" />, label: "US Golfer Market", value: "28M", sub: "Primary Target" },
          { icon: <MapPin className="w-8 h-8" />, label: "Shop Network", value: "15K", sub: "Course Distribution" },
          { icon: <DollarSign className="w-8 h-8" />, label: "Shop Retention", value: "$29", sub: "Per Member Activation" },
          { icon: <Zap className="w-8 h-8" />, label: "Shop Lift", value: "$10K", sub: "Monthly Extra Revenue" }
        ].map((item, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-colors text-center">
            <div className="text-emerald-400 mb-4 mx-auto">{item.icon}</div>
            <div className="text-4xl font-black mb-1">{item.value}</div>
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-200/50">{item.label}</div>
            <div className="text-sm text-white/40 mt-1">{item.sub}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MerchandiseSection = ({ onAddToCart }: { onAddToCart: (item: any) => void }) => {
  const products = [
    { id: 'hat-classic', name: 'NAGA Classic Hat', price: 29, img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=600', type: 'merch' },
    { id: 'shirt-polo', name: 'Elite Performance Polo', price: 59, img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=600', type: 'merch' },
    { id: 'shirt-founding', name: 'Founding Member Polo', price: 69, img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=600', type: 'merch' },
    { id: 'hat-open', name: 'USA OPEN NAGA Hat', price: 35, img: 'https://images.unsplash.com/photo-1596455607563-ad61d3f729ec?auto=format&fit=crop&q=80&w=600', type: 'merch' }
  ];

  return (
    <section id="merch" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-4 font-serif">Official Member Gear</h2>
            <p className="text-gray-600 max-w-xl text-lg">
              High-performance apparel for the serious amateur golfer. Wear the NAGA crest with pride.
            </p>
          </div>
          <button className="hidden sm:flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800 group">
            View All Merch <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-gray-100 rounded-[2.5rem] overflow-hidden mb-6 relative">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <button 
                  onClick={() => onAddToCart({ ...p, isGift: false, description: 'Official Merchandise' })}
                  className="absolute bottom-6 left-6 right-6 bg-white text-gray-900 font-bold py-4 rounded-2xl shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </button>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{p.name}</h3>
              <p className="text-emerald-700 font-black">${p.price}.00</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PremiumUpsell = ({ onAdd }: { onAdd: () => void }) => (
  <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
       <Star className="w-full h-full scale-125" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[4rem] p-10 lg:p-20 flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-400 text-emerald-950 text-xs font-black uppercase tracking-widest mb-6">
            <Star className="w-3 h-3 fill-current" /> Revenue Stream Boost
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6 font-serif leading-tight">Become a <span className="text-emerald-400">Founding Member.</span></h2>
          <p className="text-xl text-emerald-100 mb-10 leading-relaxed max-w-xl">
            Upgrade your membership to the <strong>Founding Tier ($149)</strong>. Includes a complimentary "Founding Member" polo, one free entry to a state event, and permanent VIP tournament status.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-10">
             <div className="flex gap-3">
               <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
               <span className="font-medium">Free Tournament Entry</span>
             </div>
             <div className="flex gap-3">
               <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
               <span className="font-medium">Founding Member Polo</span>
             </div>
             <div className="flex gap-3">
               <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
               <span className="font-medium">VIP Event Access</span>
             </div>
             <div className="flex gap-3">
               <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
               <span className="font-medium">Enhanced Store Credits</span>
             </div>
          </div>
          <button 
            onClick={onAdd}
            className="bg-emerald-400 text-emerald-950 font-black px-12 py-6 rounded-3xl text-xl hover:bg-white transition-all shadow-2xl shadow-emerald-400/20 active:scale-95"
          >
            Upgrade Now for $149
          </button>
        </div>
        <div className="w-full lg:w-1/3">
           <div className="aspect-square bg-white rounded-[3rem] p-12 relative flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white" />
             <div className="relative text-center">
                <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border border-emerald-200">
                  <Trophy className="w-16 h-16 text-emerald-700" />
                </div>
                <div className="text-emerald-900 font-black text-2xl tracking-tighter italic">GOLD TIER</div>
                <div className="text-emerald-600 font-bold uppercase tracking-widest text-[10px] mt-1">Founding Member</div>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const CartModal = ({ 
  isOpen, 
  onClose, 
  cart, 
  updateQuantity, 
  removeFromCart, 
  onPaymentComplete,
  onAddDonation
}: { 
  isOpen: boolean, 
  onClose: () => void,
  cart: CartItem[],
  updateQuantity: (id: string, q: number) => void,
  removeFromCart: (id: string) => void,
  onPaymentComplete: () => void,
  onAddDonation: (amount: number) => void
}) => {
  const [step, setStep] = useState<'cart' | 'shipping' | 'payment'>('cart');
  const [isProcessing, setIsProcessing] = useState(false);
  const [donationAdded, setDonationAdded] = useState(false);

  if (!isOpen) return null;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleNextStep = () => {
    if (step === 'cart') setStep('shipping');
    else if (step === 'shipping') setStep('payment');
  };

  const simulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentComplete();
      setStep('cart');
      setDonationAdded(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
        
        <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-black text-gray-900">
              {step === 'cart' && 'Your Order'}
              {step === 'shipping' && 'Details'}
              {step === 'payment' && 'Payment'}
            </h2>
            <div className="flex gap-1 mt-1">
              <div className={`h-1 w-8 rounded-full transition-colors ${step === 'cart' ? 'bg-emerald-600' : 'bg-emerald-100'}`} />
              <div className={`h-1 w-8 rounded-full transition-colors ${step === 'shipping' ? 'bg-emerald-600' : 'bg-emerald-100'}`} />
              <div className={`h-1 w-8 rounded-full transition-colors ${step === 'payment' ? 'bg-emerald-600' : 'bg-emerald-100'}`} />
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {step === 'cart' && (
            <>
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Your cart is empty.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center gap-4 group">
                      <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                        {item.type === 'merch' ? <Shirt className="w-8 h-8 text-emerald-700" /> : item.type === 'donation' ? <Heart className="w-8 h-8 text-rose-500" /> : <UserPlus className="w-8 h-8 text-emerald-700" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 leading-tight">{item.name}</h3>
                        <p className="text-xs text-gray-500">${item.price} ea</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center bg-gray-50 rounded-xl px-2 border border-gray-100">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:text-emerald-700 font-bold">-</button>
                          <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:text-emerald-700 font-bold">+</button>
                        </div>
                        {/* Fix: Referenced item.id correctly instead of the undefined id variable */}
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {!donationAdded && (
                    <div className="mt-8 p-6 bg-emerald-50 rounded-3xl border border-emerald-100 flex items-center justify-between">
                      <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-rose-500 shadow-sm">
                          <Heart className="w-5 h-5 fill-current" />
                        </div>
                        <div>
                          <p className="text-xs font-black text-emerald-800 uppercase tracking-widest">Support Amateur Golf</p>
                          <p className="text-sm text-emerald-900/70">Add a $10 donation?</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => { onAddDonation(10); setDonationAdded(true); }}
                        className="bg-white text-emerald-800 font-bold px-4 py-2 rounded-xl text-xs hover:bg-emerald-100 transition-colors"
                      >
                        Add $10
                      </button>
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {step === 'shipping' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center gap-3 mb-4 text-emerald-800 bg-emerald-50 p-4 rounded-2xl">
                <Truck className="w-5 h-5" />
                <p className="text-sm font-bold uppercase tracking-widest">Delivery & Registration</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 ml-1">First Name</label>
                  <input type="text" placeholder="John" className="w-full bg-gray-50 border border-gray-100 p-3 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/20" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 ml-1">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full bg-gray-50 border border-gray-100 p-3 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/20" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 ml-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-100 p-3 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/20" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 ml-1">Shipping Address</label>
                <input type="text" placeholder="Street Address" className="w-full bg-gray-50 border border-gray-100 p-3 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/20" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 ml-1">City</label>
                  <input type="text" placeholder="City" className="w-full bg-gray-50 border border-gray-100 p-3 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/20" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 ml-1">ZIP / State</label>
                  <input type="text" placeholder="ZIP, State" className="w-full bg-gray-50 border border-gray-100 p-3 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/20" />
                </div>
              </div>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center gap-3 mb-4 text-sky-800 bg-sky-50 p-4 rounded-2xl border border-sky-100">
                <Lock className="w-5 h-5" />
                <p className="text-sm font-bold uppercase tracking-widest">256-bit Secure Checkout</p>
              </div>
              <div className="bg-emerald-950 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden mb-6">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Waves className="w-24 h-24" />
                </div>
                <div className="mb-8 relative z-10">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mb-1">Total Order Value</div>
                  <div className="text-4xl font-black">${total}.00</div>
                </div>
                <div className="flex justify-between items-end relative z-10">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mb-1">Order Ref</div>
                    <div className="font-mono text-xs tracking-widest opacity-80">NAGA-TX-{Math.random().toString(36).substring(7).toUpperCase()}</div>
                  </div>
                  <CreditCard className="w-10 h-10 opacity-30" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 ml-1">Card Details</label>
                <div className="relative">
                  <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500/20 font-mono tracking-widest" />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
                    <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center text-[6px] font-bold text-white italic">VISA</div>
                    <div className="w-8 h-5 bg-emerald-500 rounded flex items-center justify-center text-[6px] font-bold text-white">NAGA</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 ml-1">Expiry</label>
                  <input type="text" placeholder="MM / YY" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500/20 font-mono" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 ml-1">CVV</label>
                  <input type="text" placeholder="123" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500/20 font-mono" />
                </div>
              </div>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-8 bg-emerald-50 border-t border-emerald-100">
            {step === 'cart' ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-emerald-800/60 font-black uppercase tracking-widest text-xs">Subtotal</span>
                  <span className="text-4xl font-black text-gray-900">${total}</span>
                </div>
                <button 
                  onClick={handleNextStep}
                  className="w-full bg-emerald-800 text-white font-black py-5 rounded-2xl hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-900/10 flex items-center justify-center gap-2"
                >
                  Checkout Now <ChevronRight className="w-5 h-5" />
                </button>
              </>
            ) : step === 'shipping' ? (
              <button 
                onClick={handleNextStep}
                className="w-full bg-emerald-800 text-white font-black py-5 rounded-2xl hover:bg-emerald-900 transition-all flex items-center justify-center gap-2"
              >
                Continue to Payment <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button 
                onClick={simulatePayment}
                disabled={isProcessing}
                className="w-full bg-emerald-800 text-white font-black py-5 rounded-2xl hover:bg-emerald-900 transition-all flex items-center justify-center gap-2 disabled:bg-emerald-700"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing Order...
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    Confirm Payment
                  </>
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// --- Support Components ---

const EventHighlight = () => (
  <section id="events" className="py-24 bg-sky-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-black text-gray-900 mb-4 font-serif">State Tournament Circuit</h2>
          <p className="text-gray-600 max-w-xl text-lg">
            Compete in sanctioned NAGA amateur events near you. Every tournament follows USGA rules with certified marshals.
          </p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-sky-100 flex items-center gap-3">
          <MapPin className="text-emerald-600 w-5 h-5" />
          <span className="font-bold text-gray-700">Find Local Events</span>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { date: 'OCT 12-14', location: 'Pebble Beach, CA', title: 'West Coast Amateur Open', spots: '12 Left' },
          { date: 'NOV 05-07', location: 'Orlando, FL', title: 'Sunshine State Invitational', spots: 'Sold Out' },
          { date: 'DEC 15-17', location: 'Scottsdale, AZ', title: 'Desert Classic Series', spots: '45 Left' }
        ].map((event, i) => (
          <div key={i} className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-sky-900/5 border border-white hover:-translate-y-2 transition-transform">
            <div className="text-emerald-700 font-black text-xs uppercase tracking-[0.2em] mb-4">{event.date}</div>
            <h3 className="text-xl font-black text-gray-900 mb-2">{event.title}</h3>
            <div className="flex items-center gap-2 text-gray-500 mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{event.location}</span>
            </div>
            <div className="flex justify-between items-center pt-6 border-t border-gray-50">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${event.spots === 'Sold Out' ? 'bg-gray-100 text-gray-400' : 'bg-emerald-50 text-emerald-700'}`}>
                {event.spots}
              </span>
              <button className="text-gray-900 font-black flex items-center gap-1 group">
                Register <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GiftForDad = ({ onAdd }: { onAdd: () => void }) => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-sky-900 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
        <div className="lg:w-1/2 relative h-64 lg:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=1000" 
            alt="Gift Golf" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sky-900/20" />
        </div>
        <div className="lg:w-1/2 p-12 lg:p-20 text-white">
          <Gift className="w-12 h-12 text-emerald-400 mb-8" />
          <h2 className="text-4xl lg:text-5xl font-black mb-6 font-serif">The Perfect Gift for Any Occasion.</h2>
          <p className="text-xl text-sky-100 mb-10 leading-relaxed">
            Gift a Charter Membership to the golfer in your life. We'll send them a premium physical gift box and a welcome card in your name.
          </p>
          <button 
            onClick={onAdd}
            className="bg-emerald-500 text-white font-black px-10 py-5 rounded-2xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            Gift Membership $49 <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

const PhysicalKit = () => (
  <section className="py-24 bg-sky-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-gray-900 mb-4 font-serif">What's in the Box?</h2>
        <p className="text-gray-600 text-lg">Every Charter Member receives our signature Physical Welcome Kit.</p>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { name: 'Membership Card', icon: <CreditCard className="w-6 h-6" />, desc: 'Embossed heavy-duty steel card.' },
          { name: 'Official Bag Tag', icon: <Tag className="w-6 h-6" />, desc: 'Genuine leather with your name.' },
          { name: 'Rule Book', icon: <Lock className="w-6 h-6" />, desc: 'Abridged 2024 NAGA Tournament Rules.' },
          { name: 'Partner Coupons', icon: <Percent className="w-6 h-6" />, desc: 'Over $200 in partner savings.' }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-white">
            <div className="w-12 h-12 bg-sky-50 text-sky-700 rounded-2xl flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProShopAffiliate = () => (
  <section className="py-16 bg-white border-y border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        <div className="font-black text-2xl tracking-tighter">TITLEIST</div>
        <div className="font-black text-2xl tracking-tighter">CALLAWAY</div>
        <div className="font-black text-2xl tracking-tighter">TAYLORMADE</div>
        <div className="font-black text-2xl tracking-tighter">PING</div>
        <div className="font-black text-2xl tracking-tighter">PXG</div>
      </div>
      <p className="text-center mt-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Official Partner Brands & Pro Shop Affiliates</p>
    </div>
  </section>
);

const EmailFunnel = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="py-24 bg-emerald-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-400 rounded-full blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-white">
        <h2 className="text-4xl lg:text-5xl font-black mb-6 font-serif">Never Miss a Tee Time.</h2>
        <p className="text-xl text-emerald-100 mb-10 opacity-80">
          Get weekly tournament alerts, pro tips from NAGA coaches, and exclusive early access to member-only drops.
        </p>
        
        {status === 'success' ? (
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl animate-in fade-in zoom-in duration-500">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold">You're on the list!</h3>
            <p className="text-emerald-100">Check your inbox for your first member update.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="flex-1 bg-white/10 border border-white/20 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-400 text-white placeholder:text-emerald-200/50"
            />
            <button 
              disabled={status === 'loading'}
              className="bg-white text-emerald-900 font-black px-8 py-4 rounded-2xl hover:bg-emerald-400 hover:text-white transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Join List <Send className="w-4 h-4" /></>}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const [selectedAge, setSelectedAge] = useState<string>(AgeGroup.GROUP_1);
  const [reasons, setReasons] = useState<{title: string, description: string}[]>([]);
  const [isLoadingReasons, setIsLoadingReasons] = useState(false);

  useEffect(() => {
    const fetchReasons = async () => {
      setIsLoadingReasons(true);
      const data = await getReasonsToJoin(selectedAge);
      setReasons(data.reasons || []);
      setIsLoadingReasons(false);
    };
    fetchReasons();
  }, [selectedAge]);

  const addToCart = (item: { id: string, name: string, price: number, isGift: boolean, type?: any }) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, description: item.name, quantity: 1, type: item.type || 'membership' }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, q: number) => {
    if (q < 1) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: q } : item));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleAddDonation = (amount: number) => {
    addToCart({ id: 'donation-upsell', name: 'Charity Gift for Amateur Golf', price: amount, isGift: false, type: 'donation' });
  };

  const handlePaymentSuccess = () => {
    setIsPaymentSuccess(true);
    setCart([]);
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        <Hero onJoin={() => addToCart({ id: 'member', name: 'Charter Membership Card', price: 49, isGift: false, type: 'membership' })} />
        
        <section id="benefits" className="py-24 bg-white border-b border-gray-100">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <div className="inline-flex items-center gap-2 text-emerald-700 font-black uppercase tracking-[0.3em] text-xs mb-6">
               <ShieldCheck className="w-4 h-4" /> Personalized Perks
             </div>
             <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 font-serif">Tailored for Your Game.</h2>
             
             <div className="mb-16">
               <div className="flex justify-center gap-2 mb-8 flex-wrap">
                 {Object.values(AgeGroup).map((age) => (
                   <button 
                     key={age}
                     onClick={() => setSelectedAge(age)}
                     className={`px-4 py-2 rounded-full text-xs font-black transition-all ${selectedAge === age ? 'bg-emerald-800 text-white' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
                   >
                     Age {age}
                   </button>
                 ))}
               </div>
               
               <div className={`grid md:grid-cols-5 gap-6 transition-opacity duration-300 ${isLoadingReasons ? 'opacity-50' : 'opacity-100'}`}>
                 {reasons.length > 0 ? reasons.map((r, i) => (
                   <div key={i} className="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100 text-left">
                     <div className="text-emerald-700 font-black text-xs mb-2 uppercase tracking-wider">{r.title}</div>
                     <p className="text-xs text-emerald-900/70 leading-relaxed">{r.description}</p>
                   </div>
                 )) : (
                   <div className="col-span-5 py-12 text-gray-400 flex flex-col items-center gap-4">
                     <Loader2 className="w-8 h-8 animate-spin" />
                     <span className="text-sm font-bold uppercase">Personalizing Benefits...</span>
                   </div>
                 )}
               </div>
             </div>

             <div className="grid md:grid-cols-3 gap-12">
                {[
                  { icon: <Percent className="w-8 h-8" />, title: "10% Global Discount", desc: "Permanent 10% reduction on green fees at participating clubs worldwide." },
                  { icon: <Flag className="w-8 h-8" />, desc: "Fair competition for every skill level, grouped by your specific age bracket.", title: "Age-Group Tourneys" },
                  { icon: <Plane className="w-8 h-8" />, title: "Win Golf Trips", desc: "Monthly membership draws for luxury golf vacations and partner travel perks." }
                ].map((b, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-3xl flex items-center justify-center mb-6 shadow-sm">
                      {b.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                    <p className="text-gray-500 leading-relaxed max-w-xs">{b.desc}</p>
                  </div>
                ))}
             </div>
           </div>
        </section>

        <MarketImpactShort />
        
        <StrategicProjections />

        <RemittanceWorkflow />

        <EventHighlight />
        
        <PremiumUpsell onAdd={() => addToCart({ id: 'premium-founding', name: 'Founding Member Upgrade (Tier 1)', price: 149, isGift: false, type: 'membership' })} />

        <MerchandiseSection onAddToCart={addToCart} />

        <GiftForDad onAdd={() => addToCart({ id: 'gift-dad', name: 'Gift Card for Dad', price: 49, isGift: true, type: 'membership' })} />

        <PhysicalKit />
        <ProShopAffiliate />
        <EmailFunnel />

        <section id="pace" className="py-24 bg-white border-t border-gray-100">
           <div className="max-w-4xl mx-auto px-4 text-center">
             <h2 className="text-4xl font-black text-gray-900 mb-8 font-serif">The Pace of Play Pledge</h2>
             <div className="p-10 bg-gray-900 text-white rounded-[3rem] relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 p-10 opacity-5">
                 <Clock className="w-64 h-64" />
               </div>
               <p className="text-xl mb-12 leading-relaxed italic max-w-2xl mx-auto">
                 "As a NAGA member, I agree to respect the traditions of the game and maintain the PACE of Play. My commitment ensures a world-class experience for every golfer on the course."
               </p>
               <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                 <div className="flex items-center gap-3 px-8 py-4 bg-white/10 rounded-full border border-white/20">
                   <ShieldCheck className="w-6 h-6 text-emerald-400" />
                   <span className="font-black italic">APEX Technology Integrated</span>
                 </div>
               </div>
             </div>
           </div>
        </section>
      </main>

      <footer className="bg-sky-50 py-20 border-t border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-4 gap-12 mb-16">
             <div className="col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-emerald-800 rounded-full flex items-center justify-center">
                    <Trophy className="text-white w-4 h-4" />
                  </div>
                  <span className="text-2xl font-black text-gray-900 tracking-tighter">NAGA<span className="text-emerald-700">.org</span></span>
                </div>
                <p className="text-gray-500 max-sm mb-6">
                  The National Amateur Golf Association. Join our community at **PlayNAGA.org** and drive the amateur game forward.
                </p>
                <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest">
                  © 2024 NAGA. Licensed non-profit organization.
                </div>
             </div>
             <div>
               <h4 className="font-black text-gray-900 mb-6 uppercase tracking-widest text-xs">Explore</h4>
               <ul className="space-y-4 text-gray-500 font-medium">
                 <li><a href="#" className="hover:text-emerald-700">State Events</a></li>
                 <li><a href="#merch" className="hover:text-emerald-700">Official Merch</a></li>
                 <li><a href="#" className="hover:text-emerald-700">Tournament Rules</a></li>
                 <li><a href="#" className="hover:text-emerald-700">Partner Shops</a></li>
               </ul>
             </div>
             <div>
               <h4 className="font-black text-gray-900 mb-6 uppercase tracking-widest text-xs">Resources</h4>
               <ul className="space-y-4 text-gray-500 font-medium">
                 <li><a href="#" className="hover:text-emerald-700">Tax Receipts</a></li>
                 <li><a href="#" className="hover:text-emerald-700">Bulk Cards</a></li>
                 <li><a href="#" className="hover:text-emerald-700">APEX App Help</a></li>
                 <li><a href="#" className="hover:text-emerald-700">Privacy Policy</a></li>
               </ul>
             </div>
           </div>
           <div className="pt-8 border-t border-sky-100 text-center">
              <p className="text-xs text-emerald-800/60 font-medium max-w-2xl mx-auto">
                $20 of every NAGA Charter Card sale supports organizational growth and charitable initiatives. Activation is managed exclusively at **PlayNAGA.org**.
              </p>
           </div>
        </div>
      </footer>

      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        onPaymentComplete={handlePaymentSuccess}
        onAddDonation={handleAddDonation}
      />

      {isPaymentSuccess && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
          <div className="bg-white w-full max-w-md p-12 rounded-[4rem] text-center relative animate-in zoom-in duration-300">
            <div className="w-24 h-24 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4 font-serif">Order Received!</h2>
            <p className="text-gray-600 mb-10 text-lg">
              Welcome to the NAGA family. Your receipt has been sent to your email. See you at **PlayNAGA.org**.
            </p>
            <button 
              onClick={() => setIsPaymentSuccess(false)}
              className="w-full bg-emerald-800 text-white font-black py-5 rounded-3xl hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-900/10"
            >
              Back to Store
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
