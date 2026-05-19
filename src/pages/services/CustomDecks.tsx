import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import GoogleReviews from '@/components/GoogleReviews';
import { Hammer, Sun, Shield, Layers, AlertTriangle, Wind } from 'lucide-react';
import FAQ from '@/components/FAQ';
import { serviceFaqs } from '@/data/faqs';
import PortfolioGallery from '@/components/PortfolioGallery';
import PromotionsSection from '@/components/PromotionsSection';
import PartnersSection from '@/components/PartnersSection';
import ContactForm from '@/components/ContactForm';
import { AnimatedSection, StaggeredGrid } from '@/components/AnimatedSection';
import ParallaxHero from '@/components/ParallaxHero';

const deckFeatures = [
  {
    icon: Hammer,
    title: "New Deck Construction",
    badge: "Most Popular",
    badgeColor: "bg-blue-100 text-blue-700",
    description: "Full custom deck builds from framing to finish. We design around your lot, view, and lifestyle.",
    detail: "We handle structural review, framing, decking material, railings, and stairs — all in one project."
  },
  {
    icon: Layers,
    title: "Deck Resurfacing",
    badge: "High Value",
    badgeColor: "bg-green-100 text-green-700",
    description: "Replace only the deck boards while keeping existing framing — a cost-effective upgrade for decks in good structural shape.",
    detail: "Upgrade to composite or PVC boards for a low-maintenance surface that handles NorCal sun and heat better than wood."
  },
  {
    icon: AlertTriangle,
    title: "Deck Repair",
    badge: "Safety First",
    badgeColor: "bg-orange-100 text-orange-700",
    description: "Loose boards, failing railings, rot, and structural soft spots — we diagnose and repair what's wrong before it becomes dangerous.",
    detail: "We assess the full deck, not just the visible damage, and give you an honest picture of what needs attention."
  },
  {
    icon: Shield,
    title: "Fire-Aware Deck Materials",
    badge: "NorCal Smart",
    badgeColor: "bg-red-100 text-red-700",
    description: "Composite and PVC decking options that reduce the fire load on and under your deck — important in wildfire-prone areas.",
    detail: "Combined with ember-blocking skirting and proper underfloor clearance, the right deck material is part of a smarter exterior."
  },
  {
    icon: Wind,
    title: "Railing & Stair Details",
    badge: "Code Compliant",
    badgeColor: "bg-purple-100 text-purple-700",
    description: "Safe, code-compliant railing and stair installation to match your deck design and meet California building standards.",
    detail: "We handle permits and ensure railing heights, baluster spacing, and stair rise/run meet local code requirements."
  },
  {
    icon: Sun,
    title: "NorCal Climate Design",
    badge: "Built Local",
    badgeColor: "bg-yellow-100 text-yellow-700",
    description: "Decks built for the North State — designed to handle UV, summer heat, seasonal rain, and the temperature swings Redding sees every year.",
    detail: "Material and finish choices that hold up in our climate without requiring constant sealing, staining, or replacement."
  },
];

const CustomDecks = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Custom Deck Builders in Redding CA | O'Brien Mountain Home"
        description="Build or upgrade your deck with O'Brien Mountain Home, a custom deck contractor serving Redding and Northern California."
        canonical="/services/decking"
      />
      
      <Header />

      <main>
        {/* Hero */}
        <ParallaxHero
          src="https://vibe.filesafe.space/1777345871363473576/assets/27902a8d-1ff2-4ab0-9572-cceb3bc46f72.png"
          alt="Custom deck built in Northern California"
          overlayClass="bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/50"
        >
          <div className="container mx-auto px-4 py-32">
            <AnimatedSection className="max-w-3xl text-white">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 text-primary text-sm font-semibold mb-6">
                <Hammer className="w-4 h-4" />
                Custom Deck Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Custom Deck Builders in Redding, CA</h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed">
                Beautiful, durable decks built for Northern California weather, mountain views, and long-term outdoor living.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button asChild size="lg" className="rounded-full px-10 py-7 text-lg font-bold bg-primary text-slate-900 hover:bg-primary/90">
                  <Link to="/contact">Request a Deck Estimate</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-10 py-7 text-lg font-bold border-white/40 bg-white/10 hover:bg-white/20 text-white">
                  <Link to="/portfolio">See Our Work</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </ParallaxHero>

        {/* Service Feature Boxes */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Custom Deck Services</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">From new builds to repairs to fire-aware material upgrades — here is what we handle.</p>
            </AnimatedSection>
            <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" staggerMs={100}>
              {deckFeatures.map((feature, i) => (
                <div key={i} className="group bg-white border border-slate-200 shadow-sm rounded-2xl p-8 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-default h-full flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${feature.badgeColor}`}>
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-200">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{feature.description}</p>
                  <div className="border-t border-slate-200 pt-4 mt-auto">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Detail</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{feature.detail}</p>
                  </div>
                </div>
              ))}
            </StaggeredGrid>
          </div>
        </section>

        <PromotionsSection />
        <PortfolioGallery limit={3} />
        <PartnersSection />
        <GoogleReviews />

        <FAQ items={serviceFaqs["decking"]} title="Decking FAQ" className="bg-slate-50" />

        {/* CTA Form with background image */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://vibe.filesafe.space/1777345871363473576/assets/477298a7-0d7b-4fac-bf07-cae2ba58f2cf.jpg"
              alt="Beautiful outdoor deck on a Northern California home"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-950/85" />
          </div>
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Request Your Deck Estimate</h2>
              <p className="text-slate-300 text-lg">Tell us about your project and we'll help you figure out the best next step.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <ContactForm />
            </div>
          </div>
        </section>

        <CTASection 
          title="Ready to Build Your Dream Deck?"
          description="Get an honest estimate for your custom decking project today."
        />
      </main>

      <Footer />
    </div>
  );
};

export default CustomDecks;
