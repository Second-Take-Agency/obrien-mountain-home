import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import GoogleReviews from '@/components/GoogleReviews';
import { Building2, ShieldCheck, Layers, AlertTriangle, Wind, Settings } from 'lucide-react';
import FAQ from '@/components/FAQ';
import { serviceFaqs } from '@/data/faqs';
import PortfolioGallery from '@/components/PortfolioGallery';
import PromotionsSection from '@/components/PromotionsSection';
import PartnersSection from '@/components/PartnersSection';
import ContactForm from '@/components/ContactForm';
import { AnimatedSection, StaggeredGrid } from '@/components/AnimatedSection';
import ParallaxHero from '@/components/ParallaxHero';

const commercialFeatures = [
  {
    icon: Building2,
    title: "Commercial Siding Installation",
    badge: "Full Service",
    badgeColor: "bg-blue-100 text-blue-700",
    description: "Complete exterior siding installation for commercial buildings of all sizes — retail, office, multi-unit residential, and specialty properties.",
    detail: "We coordinate with GCs and property managers from bid to completion, keeping timelines and communication clean throughout."
  },
  {
    icon: AlertTriangle,
    title: "Commercial Siding Repair",
    badge: "Fast Response",
    badgeColor: "bg-orange-100 text-orange-700",
    description: "Damaged, failing, or outdated commercial siding repaired professionally to protect the building envelope and maintain the property's appearance.",
    detail: "We assess the full extent of damage before quoting — so there are no surprise costs once work begins."
  },
  {
    icon: ShieldCheck,
    title: "Fiber Cement Siding",
    badge: "Top Choice",
    badgeColor: "bg-green-100 text-green-700",
    description: "James Hardie and other fiber cement options are the go-to for commercial projects that need fire resistance, durability, and low maintenance.",
    detail: "Fiber cement holds up to Northern California's heat, sun, and smoke season without warping, rotting, or requiring frequent repainting."
  },
  {
    icon: Layers,
    title: "Metal & Engineered Siding",
    badge: "Commercial Grade",
    badgeColor: "bg-slate-100 text-slate-700",
    description: "Metal, engineered wood, and composite siding options for commercial applications where appearance, performance, and budget all matter.",
    detail: "We help you evaluate material options honestly — not just upsell you on the most expensive choice."
  },
  {
    icon: Settings,
    title: "Exterior Wall Coordination",
    badge: "GC Friendly",
    badgeColor: "bg-purple-100 text-purple-700",
    description: "We coordinate with general contractors, architects, and project managers to integrate siding work into the broader construction or renovation schedule.",
    detail: "Clear bids, accurate timelines, and reliable communication — the basics that matter most to GCs and PMs."
  },
  {
    icon: Wind,
    title: "Vinyl & Composite Options",
    badge: "Budget Conscious",
    badgeColor: "bg-yellow-100 text-yellow-700",
    description: "Where cost constraints require it, we install vinyl and composite siding correctly and professionally — without cutting corners on installation.",
    detail: "Even with budget-friendly materials, proper installation and moisture management are what determine long-term performance."
  },
];

const CommercialSiding = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Commercial Siding Contractor in Redding CA | O'Brien Mountain Home"
        description="Commercial siding installation and repair for property owners, general contractors, and managers across Northern California."
        canonical="/services/commercial-siding"
      />
      
      <Header />

      <main>
        {/* Hero */}
        <ParallaxHero
          src="https://vibe.filesafe.space/1777345871363473576/assets/459e268e-bc09-44a5-baf2-77ea643e1b61.png"
          alt="Commercial siding installation in Northern California"
          overlayClass="bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/50"
        >
          <div className="container mx-auto px-4 py-32">
            <AnimatedSection className="max-w-3xl text-white">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 text-primary text-sm font-semibold mb-6">
                <Building2 className="w-4 h-4" />
                Commercial Siding Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Commercial Siding Contractor in Redding, CA</h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed">
                Reliable commercial siding installation and repair for general contractors, property managers, and commercial property owners.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button asChild size="lg" className="rounded-full px-10 py-7 text-lg font-bold bg-primary text-slate-900 hover:bg-primary/90">
                  <Link to="/contact">Request a Commercial Bid</Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commercial Siding Services</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Full-service commercial siding for contractors, property managers, and owners across Northern California.</p>
            </AnimatedSection>
            <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" staggerMs={100}>
              {commercialFeatures.map((feature, i) => (
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

        <FAQ items={serviceFaqs["commercial-siding"]} title="Commercial Siding FAQ" className="bg-slate-50" />

        {/* CTA Form with background image */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://vibe.filesafe.space/1777345871363473576/assets/3fb0f103-61a5-459d-9831-808feaf236e3.jpg"
              alt="Commercial building with professional siding installation"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-950/85" />
          </div>
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Request a Commercial Siding Bid</h2>
              <p className="text-slate-300 text-lg">Let's discuss your upcoming project requirements.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <ContactForm />
            </div>
          </div>
        </section>

        <CTASection 
          title="Request a Commercial Siding Bid"
          description="Let's discuss your upcoming commercial project."
        />
      </main>

      <Footer />
    </div>
  );
};

export default CommercialSiding;
