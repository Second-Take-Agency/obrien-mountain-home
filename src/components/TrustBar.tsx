import React from 'react';
import { ShieldCheck, Flame, Hammer, Building2 } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { label: "Licensed Contractor", sub: "Lic# 1135995", icon: ShieldCheck },
    { label: "Fire-Aware Materials", sub: "Class A-Rated Options", icon: Flame },
    { label: "Decking & Siding Specialists", sub: "Built for NorCal", icon: Hammer },
    { label: "Serving Northern California", sub: "Redding & Beyond", icon: Building2 },
  ];

  return (
    <div className="bg-white border-y border-slate-100 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-tight">{item.label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
