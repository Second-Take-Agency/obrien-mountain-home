import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { faqs } from '@/data/faqs';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import ProcessSteps from '@/components/ProcessSteps';
import PortfolioGallery from '@/components/PortfolioGallery';
import NorCalMap from '@/components/NorCalMap';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import GoogleReviews from '@/components/GoogleReviews';
import PartnersSection from '@/components/PartnersSection';
import StatCounterSection from '@/components/StatCounterSection';
import LazySection from '@/components/LazySection';
import { AnimatedSection, StaggeredGrid } from '@/components/AnimatedSection';
import { useParallax } from '@/hooks/useParallax';
import { ArrowRight, CheckCircle2, Flame, Hammer, Shield, Phone, Calendar, Tag, Star, DollarSign, ClipboardCheck } from 'lucide-react';
const HERO_BG = "https://vibe.filesafe.space/1777345871363473576/assets/c1315190-a555-4031-ac6a-4a9b551f2b09.png";
const FOUNDER_IMG = "https://vibe.filesafe.space/1777345871363473576/assets/af37ff4b-7817-4b91-adfe-ee6cd1e695f0.png";
const OPTIN_BG = "https://vibe.filesafe.space/1777345871363473576/assets/ae7de53d-c036-4874-96ab-b5aa446004c4.png";

// ── Homepage Structured Data ──────────────────────────────────────────────────
// Four JSON-LD blocks: LocalBusiness entity, FAQPage (for AI Overviews),
// Organization (with sameAs for entity disambiguation), WebSite (SearchAction).
const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "O'Brien Mountain Home",
  "image": HERO_BG,
  "telephone": "+15309997495",
  "email": "mcrans@obrienmountainhome.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1304 East St",
    "addressLocality": "Redding",
    "addressRegion": "CA",
    "postalCode": "96001",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.5865,
    "longitude": -122.3917
  },
  "url": "https://obrienmountainhome.com",
  "priceRange": "$$",
  "areaServed": ["Redding", "Red Bluff", "Chico", "Oroville", "Paradise", "Magalia", "Mount Shasta", "Northern California"]
};

const FAQ_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.slice(0, 6).map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "O'Brien Mountain Home",
  "url": "https://obrienmountainhome.com",
  "telephone": "+15309997495",
  "email": "mcrans@obrienmountainhome.com",
  "logo": "https://vibe.filesafe.space/1777345871363473576/assets/99cdc4bc-0ac2-4dd1-b0b7-0cc82cf49e32.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1304 East St",
    "addressLocality": "Redding",
    "addressRegion": "CA",
    "postalCode": "96001",
    "addressCountry": "US"
  },
  "sameAs": ["https://www.facebook.com/obrienmountainhome"]
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "O'Brien Mountain Home",
  "url": "https://obrienmountainhome.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://obrienmountainhome.com/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const homepageSchemas = [LOCAL_BUSINESS_SCHEMA, FAQ_PAGE_SCHEMA, ORGANIZATION_SCHEMA, WEBSITE_SCHEMA];

const Index = () => {
  const heroImgRef = useParallax<HTMLImageElement>(0.35);
  const [optInData, setOptInData] = useState({ name: '', email: '', phone: '', service: '' });
  const [optInSubmitted, setOptInSubmitted] = useState(false);
  const [optInLoading, setOptInLoading] = useState(false);

  const handleOptIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setOptInLoading(true);
    try {
      await fetch('https://services.leadconnectorhq.com/hooks/tAAVtCweX31WX2nkzQkE/webhook-trigger/02eca7e8-3fc4-4f4e-85d8-f5b1f5d4fe33', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...optInData, formType: 'homepage_optin' }),
      });
      setOptInSubmitted(true);
    } catch (error) {
      console.error('Webhook error:', error);
      setOptInSubmitted(true); // Still show success to user
    } finally {
      setOptInLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Fire Hardening, Decking & Siding in Redding CA"
        description="Protect and upgrade your Northern California home with fire hardening, siding, and decking from O'Brien Mountain Home in Redding, CA."
        schema={homepageSchemas}
      />
      
      <Header />

      <main>
        {/* ─── Hero Section ─── */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              ref={heroImgRef}
              src={HERO_BG}
              alt="Beautiful mountain home with custom siding and decking in Northern California"
              className="w-full h-full object-cover scale-110 origin-center will-change-transform"
              loading="eager"
              fetchPriority="high"
              width="1920"
              height="1080"
            />
            {/* Strong layered overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-24">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white [text-shadow:_0_2px_8px_rgba(0,0,0,0.4)]">
                Siding, Decking & Fire Hardening in Redding, CA
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed [text-shadow:_0_1px_4px_rgba(0,0,0,0.3)]">
                We help Northern California homeowners protect, repair, and upgrade their homes with fire-aware materials, durable siding, custom decks, and practical hardening solutions built for the North State.
              </p>
              
              <ul className="space-y-3 mb-10">
                {[
                  "Licensed California contractor, Lic# 1135995",
                  "Serving Redding and Northern California",
                  "Built with durable, Class A-rated material options where possible"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-base font-medium text-slate-100 [text-shadow:_0_1px_3px_rgba(0,0,0,0.4)]">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button asChild size="lg" className="rounded-full px-8 py-7 text-lg font-bold w-full sm:w-auto bg-primary text-slate-900 hover:bg-primary/90 hover:text-slate-900 border-2 border-primary">
                  <Link to="/contact">Request an Estimate</Link>
                </Button>
                <Button asChild size="lg" className="rounded-full px-8 py-7 text-lg font-bold w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-primary hover:border-primary hover:text-slate-900 transition-all duration-200">
                  <Link to="/portfolio" className="flex items-center gap-2">
                    See Our Work
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Services Section ─── */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">What Can We Help You Protect or Build?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Explore our core services designed to enhance your home's appearance and resilience.
              </p>
            </AnimatedSection>
            
            <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerMs={120}>
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </StaggeredGrid>
          </div>
        </section>

        {/* ─── Why It Matters (PAS) ─── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Homeowners in the North State Choose O'Brien Mountain Home</h2>
                <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                  The most expensive home improvement is doing it twice
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Problem */}
                <AnimatedSection delay={100} className="relative p-8 rounded-2xl bg-slate-800 text-white overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/5 rounded-full" />
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                    <Shield className="w-6 h-6 text-slate-300" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-100">The Reality</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Contractor projects feel stressful when communication is poor, estimates are vague, or the crew doesn't understand your environment.
                  </p>
                </AnimatedSection>

                {/* Agitation */}
                <AnimatedSection delay={200} className="relative p-8 rounded-2xl bg-orange-950 text-white overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/5 rounded-full" />
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-5">
                    <Flame className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">The Risk</h3>
                  <p className="text-orange-200 text-sm leading-relaxed">
                    In Northern California, homes face heat, smoke, wildfire risk, sun exposure, and seasonal rain. The wrong material choice can create real problems down the road.
                  </p>
                </AnimatedSection>

                {/* Solution */}
                <AnimatedSection delay={300} className="relative p-8 rounded-2xl bg-primary overflow-hidden border-2 border-primary">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/20 rounded-full" />
                  <div className="w-12 h-12 bg-slate-900/20 rounded-xl flex items-center justify-center mb-5">
                    <Hammer className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900">Our Approach</h3>
                  <p className="text-slate-800 text-sm leading-relaxed">
                    O'Brien Mountain Home helps you choose practical materials, gives honest estimates, and installs with the goal of making your home safer, stronger, and easier to maintain.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-1 mt-4 text-sm font-bold text-slate-900 hover:underline">
                    Get a Free Estimate →
                  </Link>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Promotions / Incentives ─── */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,#f6ad56_0px,#f6ad56_1px,transparent_1px,transparent_60px)]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 text-primary text-sm font-semibold mb-4">
                <Tag className="w-4 h-4" />
                Current Promotions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offers for North State Homeowners</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We believe protecting your home should be accessible. Here are ways we're making it easier to get started.
              </p>
            </AnimatedSection>

            {/* Equal-height grid using flex column cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
              {/* Promo 1 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-5 shrink-0">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <div className="inline-block bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">First-Time Offer</div>
                <h3 className="text-xl font-bold mb-3">Up to $1,000 Off Your First Project</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">
                  New customers on qualifying projects. Ask about our first-time customer discount when you request your estimate — we'll apply it before you commit.
                </p>
                <Button asChild className="rounded-full bg-primary text-slate-900 font-bold hover:bg-primary/90 hover:text-slate-900 w-full mt-auto">
                  <Link to="/contact">Claim Your Discount</Link>
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
                  <ClipboardCheck className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <div className="inline-block bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full w-fit">Free Inspection</div>
                  <span className="line-through text-red-400 text-xs font-semibold">$297 value</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Free Fire Hardening Inspection</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">
                  We'll assess your home's fire vulnerability at no charge. Walk away with a clear picture of risk areas and what it would take to address them.
                </p>
                <Button asChild className="rounded-full bg-primary text-slate-900 font-bold hover:bg-primary/90 hover:text-slate-900 w-full mt-auto">
                  <Link to="/contact">Book Your Free Inspection</Link>
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


        {/* ─── Process Preview ─── */}
        <ProcessSteps />

        {/* ─── Founder Section ─── */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <AnimatedSection variant="left" className="lg:w-1/2 relative">
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                <img 
                  src={FOUNDER_IMG}
                  alt="O'Brien Mountain Home — Northern California mountain home with custom decking and siding" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full max-w-md mx-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </AnimatedSection>
              <AnimatedSection variant="right" className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 text-primary text-sm font-bold mb-6">
                  <Shield className="w-4 h-4" />
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for the North State by People Who Live Here</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  O'Brien Mountain Home was founded by Marcus Crans, a North State native and Simpson University graduate. After witnessing the impact of the Carr Fire and planning his own home near Shasta Lake, Marcus built this company around one mission: help local homeowners create safer, stronger, more resilient homes.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  As the son of a forester who worked in Shingletown, Marcus grew up understanding the natural fire cycle and the real risks that Northern California homeowners face every year.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="rounded-full px-8 bg-primary text-slate-900 font-bold hover:bg-primary/90 hover:text-slate-900">
                    <Link to="/about">Meet Marcus</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full px-8 border-slate-300 text-slate-700 font-bold hover:border-primary hover:text-primary">
                    <Link to="/contact">Request an Estimate</Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ─── Partners Section ─── */}
        <LazySection minHeight="160px">
          <PartnersSection />
        </LazySection>

        {/* ─── Portfolio Preview ─── */}
        <LazySection minHeight="400px">
          <PortfolioGallery limit={3} />
        </LazySection>

        {/* ─── Stat Counter ─── */}
        <LazySection minHeight="200px">
          <StatCounterSection />
        </LazySection>

        {/* ─── Interactive NorCal Map ─── */}
        <LazySection minHeight="600px">
          <NorCalMap />
        </LazySection>

        {/* ─── Google Reviews ─── */}
        <LazySection minHeight="400px">
          <GoogleReviews />
        </LazySection>

        {/* ─── FAQ ─── */}
        <LazySection minHeight="300px">
          <FAQ items={faqs} />
        </LazySection>

        {/* ─── Opt-In / Lead Capture Section ─── */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={OPTIN_BG}
              alt="Northern California mountain landscape at dusk"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-900/85 to-slate-900/80" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
              {/* Left: Copy */}
              <div className="lg:w-1/2 text-white">
                <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 text-primary text-sm font-semibold mb-6">
                  <Star className="w-4 h-4" />
                  Free Estimate — No Pressure
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight [text-shadow:_0_2px_6px_rgba(0,0,0,0.4)]">
                  Ready to Protect or Upgrade Your Home?
                </h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Tell us what you're working on and we'll help you figure out the best next step. No hard sell. Just an honest conversation about your project.
                </p>
                <ul className="space-y-3">
                  {[
                    "Free vulnerability assessment",
                    "Honest, clear estimates",
                    "Reply within 24 business hours",
                    "Locally owned and operated"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <a href="tel:5309997495" className="inline-flex items-center gap-3 text-white hover:text-primary transition-colors">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">Call us directly</div>
                      <div className="font-bold text-lg">(530) 999-7495</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right: Opt-in Form */}
              <div className="lg:w-1/2 w-full">
                {optInSubmitted ? (
                  <div className="bg-white rounded-3xl p-10 text-center shadow-2xl">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">We got your request!</h3>
                    <p className="text-slate-600">We'll reach out within 24 business hours to discuss your project.</p>
                  </div>
                ) : (
                  <form onSubmit={handleOptIn} className="bg-white rounded-3xl p-8 shadow-2xl space-y-5">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">Request a Free Estimate</h3>
                      <p className="text-slate-500 text-sm">Fill out the form and we'll be in touch shortly.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="optin-name" className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                        <input
                          id="optin-name"
                          type="text"
                          placeholder="John Doe"
                          required
                          value={optInData.name}
                          onChange={e => setOptInData(p => ({ ...p, name: e.target.value }))}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="optin-phone" className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
                        <input
                          id="optin-phone"
                          type="tel"
                          placeholder="(530) 000-0000"
                          required
                          value={optInData.phone}
                          onChange={e => setOptInData(p => ({ ...p, phone: e.target.value }))}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="optin-email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                      <input
                        id="optin-email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={optInData.email}
                        onChange={e => setOptInData(p => ({ ...p, email: e.target.value }))}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="optin-service" className="block text-sm font-semibold text-slate-700 mb-1.5">I'm interested in…</label>
                      <select
                        id="optin-service"
                        required
                        value={optInData.service}
                        onChange={e => setOptInData(p => ({ ...p, service: e.target.value }))}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="fire-hardening">Fire Hardening</option>
                        <option value="decking">Custom Decking</option>
                        <option value="residential-siding">Residential Siding</option>
                        <option value="commercial-siding">Commercial Siding</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      disabled={optInLoading}
                      className="w-full bg-primary text-slate-900 font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors text-base disabled:opacity-70"
                    >
                      {optInLoading ? "Sending…" : "Request My Free Estimate →"}
                    </button>
                    <p className="text-xs text-slate-400 text-center leading-relaxed">
                      By submitting, you agree to be contacted by O'Brien Mountain Home. Message and data rates may apply. Reply STOP to opt out.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <CTASection />


      </main>

      <Footer />
    </div>
  );
};

export default Index;
