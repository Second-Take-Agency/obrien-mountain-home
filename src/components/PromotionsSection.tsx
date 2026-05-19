import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tag, Flame, Calendar, Shield, Phone } from 'lucide-react';

const PromotionsSection = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,#f6ad56_0px,#f6ad56_1px,transparent_1px,transparent_60px)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 text-primary text-sm font-semibold mb-4">
            <Tag className="w-4 h-4" />
            Current Promotions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offers for North State Homeowners</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We believe protecting your home should be accessible. Here are ways we're making it easier to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Promo 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 flex flex-col">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-5 shrink-0">
              <Flame className="w-6 h-6 text-primary" />
            </div>
            <div className="inline-block bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">Fire Hardening</div>
            <h3 className="text-xl font-bold mb-3">First Time Customer Offer</h3>
            <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">
              New to O'Brien Mountain Home? Get up to $1,000 off your first complete siding, decking, or fire hardening project. Contact us for details.
            </p>
            <Button asChild className="rounded-full bg-primary text-slate-900 font-bold hover:bg-primary/90 hover:text-slate-900 w-full mt-auto">
              <Link to="/contact">Book Your Assessment</Link>
            </Button>
          </div>

          {/* Promo 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 flex flex-col">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-5 shrink-0">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div className="inline-block bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">Bundle & Save</div>
            <h3 className="text-xl font-bold mb-3">Combine Siding + Decking</h3>
            <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">
              Planning more than one exterior upgrade? Ask about project bundling when you request your estimate — combining work often reduces total project cost.
            </p>
            <Button asChild className="rounded-full bg-primary text-slate-900 font-bold hover:bg-primary/90 hover:text-slate-900 w-full mt-auto">
              <Link to="/contact">Request a Bundle Estimate</Link>
            </Button>
          </div>

          {/* Promo 3 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 flex flex-col">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-5 shrink-0">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div className="inline-block bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">Fire Voucher</div>
            <h3 className="text-xl font-bold mb-3">Free Fire Hardening Inspection</h3>
            <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">
              <span className="line-through text-red-500 mr-2">$297 value</span>
              We'll walk through the key risk areas with you — at no charge — and give you an honest picture before any commitment.
            </p>
            <Button asChild className="rounded-full bg-primary text-slate-900 font-bold hover:bg-primary/90 hover:text-slate-900 w-full mt-auto">
              <Link to="/contact">Ask About Vouchers</Link>
            </Button>
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="tel:5309997495" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm font-medium">
            <Phone className="w-4 h-4" />
            Have questions? Call us directly: (530) 999-7495
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
