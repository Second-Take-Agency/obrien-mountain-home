import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Flame, Home, CheckCircle2, Wind, AlertTriangle, Layers } from 'lucide-react';
import FAQ from '@/components/FAQ';
import { serviceFaqs } from '@/data/faqs';
import PortfolioGallery from '@/components/PortfolioGallery';
import GoogleReviews from '@/components/GoogleReviews';
import PromotionsSection from '@/components/PromotionsSection';
import PartnersSection from '@/components/PartnersSection';
import ContactForm from '@/components/ContactForm';
import { AnimatedSection, StaggeredGrid } from '@/components/AnimatedSection';
import ParallaxHero from '@/components/ParallaxHero';

const ventAreas = [
  {
    icon: Wind,
    title: "Attic Vents",
    risk: "Highest Risk",
    riskColor: "bg-red-100 text-red-700",
    description: "Attic vents are the most common entry point for wind-blown embers. Standard louvered vents have large gaps that embers can sail through and ignite insulation or framing above your living space.",
    solution: "We install ember-resistant vents or Vulcan vents that replace standard louvered attic vents with a 1/16\" mesh or intumescent honeycomb matrix — blocking embers while maintaining proper ventilation."
  },
  {
    icon: Home,
    title: "Under-Eave Vents",
    risk: "High Risk",
    riskColor: "bg-orange-100 text-orange-700",
    description: "Eave vents sit right under your roofline — a natural ember trap. Hot rising air from a nearby fire can drive embers directly into these openings.",
    solution: "Ember-resistant eave vent covers or solid blocking in combination with proper ridge ventilation to maintain airflow without the ember entry point."
  },
  {
    icon: Layers,
    title: "Crawlspace & Foundation Vents",
    risk: "High Risk",
    riskColor: "bg-orange-100 text-orange-700",
    description: "Crawlspace vents at or near grade level are often overlooked. Embers accumulate at ground level and can enter crawlspaces, where they find dry wood framing and insulation.",
    solution: "Replacing standard foundation vents with ember-resistant or automatic-closing vents that seal under high-heat conditions."
  },
  {
    icon: AlertTriangle,
    title: "Deck Underfloor",
    risk: "Significant Risk",
    riskColor: "bg-yellow-100 text-yellow-700",
    description: "The space beneath a deck is a well-known fire trap. Debris, dry leaves, and combustible framing materials accumulate there. An ember landing under a deck can ignite and travel to the house.",
    solution: "Deck skirting with ember-blocking mesh, non-combustible framing upgrades, and Class A-rated deck surface options to reduce the deck's overall fire load."
  },
  {
    icon: Flame,
    title: "Gutters",
    risk: "Moderate Risk",
    riskColor: "bg-yellow-100 text-yellow-700",
    description: "Gutters filled with dry leaves and debris become trays of tinder during a fire event. Embers landing in full gutters can start a sustained burn at your roofline.",
    solution: "Gutter protection systems that prevent debris accumulation, combined with ember-resistant screening to reduce ignition potential."
  },
  {
    icon: ShieldCheck,
    title: "Combustible Siding",
    risk: "Structural Risk",
    riskColor: "bg-blue-100 text-blue-700",
    description: "Wood, vinyl, and older fiber board siding can ignite from ember contact or radiant heat. Large surface-area combustible siding dramatically increases fire risk.",
    solution: "Fiber cement (James Hardie) or other non-combustible siding options that resist ignition from ember contact and reduce overall radiant heat vulnerability."
  }
];

const vulcanVentFacts = [
  "Intumescent honeycomb matrix expands under high heat to block flame and embers from entering the structure",
  "Maintains normal airflow and ventilation function under everyday conditions",
  "Code-compliant ember-resistant vent for WUI (Wildland-Urban Interface) construction requirements",
  "Used by builders and contractors in post-Camp Fire Paradise and Magalia rebuilds",
  "Rated to CAL FIRE and IBHS ember and flame exposure standards",
  "Available for attic, eave, and foundation vent applications",
];

const FireHardening = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Fire Hardening Contractor in Redding CA | O'Brien Mountain Home"
        description="Protect your Northern California home with fire hardening, ember-resistant vents, Vulcan vents, gutter protection, and exterior hardening upgrades."
        canonical="/services/fire-hardening"
      />
      
      <Header />

      <main>
        {/* Hero */}
        <ParallaxHero
          src="https://vibe.filesafe.space/1777345871363473576/assets/4506b997-edbb-4bf8-981c-11dbe97372dc.png"
          alt="Fire hardening vents installed on a Northern California home"
          overlayClass="bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/50"
        >
          <div className="container mx-auto px-4 py-32">
            <AnimatedSection className="max-w-3xl text-white">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 text-primary text-sm font-semibold mb-6">
                <Flame className="w-4 h-4" />
                Fire Hardening Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Fire Hardening Contractor in Redding, CA
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed">
                Practical wildfire-defense upgrades for Northern California homes — including ember-resistant vents, Vulcan vents, deck and underfloor protection, and targeted exterior hardening.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button asChild size="lg" className="rounded-full px-10 py-7 text-lg font-bold bg-primary text-foreground hover:bg-primary/90">
                  <Link to="/contact">Request an Assessment</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-10 py-7 text-lg font-bold border-white/40 bg-white/10 hover:bg-white/20 text-white">
                  <Link to="/portfolio">See Our Work</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </ParallaxHero>

        {/* Vulnerability Areas */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Where Your Home Is Most Vulnerable</h2>
              <p className="text-slate-500">A fire hardening assessment looks at each of these areas. Here's what we look for and how we address it.</p>
            </AnimatedSection>
            <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" staggerMs={100}>
              {ventAreas.map((area, i) => (
                <div key={i} className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <area.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${area.riskColor}`}>
                      {area.risk}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{area.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{area.description}</p>
                  <div className="border-t border-slate-200 pt-4 mt-auto">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Our Approach</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{area.solution}</p>
                  </div>
                </div>
              ))}
            </StaggeredGrid>
          </div>
        </section>

        <PromotionsSection />

        {/* Vulcan Vents */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">What Are Vulcan Vents?</h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
                Vulcan vents are engineered specifically to protect homes from ember intrusion. They use a patented intumescent honeycomb matrix that expands under high heat to seal off vent openings.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vulcanVentFacts.map((fact, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <PortfolioGallery limit={3} />

        {/* Partners */}
        <PartnersSection />

        {/* Reviews */}
        <GoogleReviews />

        {/* FAQ */}
        <FAQ items={serviceFaqs["fire-hardening"]} title="Fire Hardening FAQ" className="bg-slate-50" />

        {/* CTA Form with background image */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://vibe.filesafe.space/1777345871363473576/assets/cdba6534-38c2-4e0c-9026-0799d0e05c65.jpg"
              alt="Northern California mountain home exterior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-950/85" />
          </div>
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Request a Fire Hardening Assessment</h2>
              <p className="text-slate-300 text-lg">Tell us about your home and we'll help identify the best protection options.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <ContactForm />
            </div>
          </div>
        </section>

        <CTASection 
          title="Ready to Protect Your Northern California Home?"
          description="Tell us about your home and we'll help you figure out the best next step."
        />
      </main>

      <Footer />
    </div>
  );
};

export default FireHardening;
