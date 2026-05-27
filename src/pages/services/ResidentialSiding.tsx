import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import GoogleReviews from '@/components/GoogleReviews';
import { Home, ShieldCheck, Flame, Wind, Layers, AlertTriangle } from 'lucide-react';
import FAQ from '@/components/FAQ';
import { serviceFaqs } from '@/data/faqs';
import PortfolioGallery from '@/components/PortfolioGallery';
import PromotionsSection from '@/components/PromotionsSection';
import PartnersSection from '@/components/PartnersSection';
import ContactForm from '@/components/ContactForm';
import { AnimatedSection, StaggeredGrid } from '@/components/AnimatedSection';
import ParallaxHero from '@/components/ParallaxHero';
import { blogs } from '@/data/blogs';
import { locations } from '@/data/locations';

const sidingRelatedPosts = blogs.filter(b => b.category === 'Siding').slice(0, 2);
const sidingServiceAreaLocations = locations.filter(l => l.slug !== 'northern-california').slice(0, 6);

const sidingFeatures = [
  {
    icon: Home,
    title: "Full Siding Installation",
    badge: "Complete Exterior",
    badgeColor: "bg-blue-100 text-blue-700",
    description: "New siding installation from substrate to finish. We replace all exterior cladding and handle trim, corners, and penetration details.",
    detail: "Includes weather barrier, flashing coordination, and a finished exterior that protects your home for years."
  },
  {
    icon: ShieldCheck,
    title: "James Hardie Fiber Cement",
    badge: "Most Durable",
    badgeColor: "bg-green-100 text-green-700",
    description: "Fiber cement siding is one of the best options for Northern California — it resists fire, insects, rot, and UV damage far better than wood or vinyl.",
    detail: "James Hardie products are Class A fire-rated and backed by long manufacturer warranties. We install them correctly so they perform."
  },
  {
    icon: Flame,
    title: "Fire-Resistant Siding Options",
    badge: "NorCal Critical",
    badgeColor: "bg-red-100 text-red-700",
    description: "In wildfire-prone areas, combustible siding is a serious liability. We help homeowners replace vulnerable wood and vinyl siding with fire-resistant alternatives.",
    detail: "Fiber cement and other Class A materials won't eliminate all fire risk, but they meaningfully reduce ignition potential from ember contact and radiant heat."
  },
  {
    icon: AlertTriangle,
    title: "Siding Repair",
    badge: "Targeted Fix",
    badgeColor: "bg-orange-100 text-orange-700",
    description: "Damaged, warped, cracked, or missing siding sections repaired and matched to your existing exterior as closely as possible.",
    detail: "We assess the full scope of damage, address any moisture intrusion behind failed panels, and replace with matching or upgraded materials."
  },
  {
    icon: Wind,
    title: "Exterior Trim & Details",
    badge: "Finish Quality",
    badgeColor: "bg-purple-100 text-purple-700",
    description: "Corners, window trim, fascia, soffit, and other finish details done right — because the quality of the detail work determines how the whole exterior looks.",
    detail: "We treat trim and finish details as part of the project, not an afterthought."
  },
  {
    icon: Layers,
    title: "Weather Barrier Coordination",
    badge: "Moisture Protection",
    badgeColor: "bg-yellow-100 text-yellow-700",
    description: "Proper weather barrier installation behind siding is critical in NorCal's climate — we make sure it's installed correctly so water doesn't find its way behind your walls.",
    detail: "A siding job done without attention to the weather barrier can lead to costly moisture damage in the years that follow."
  },
];

const residentialSidingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Residential Siding Installation",
  "name": "Residential Siding in Redding, CA",
  "description": "Siding installation and repair that improves curb appeal, protects your home, and gives you a stronger exterior built for Northern California.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "O'Brien Mountain Home",
    "telephone": "+15309997495",
    "url": "https://obrienmountainhome.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1304 East St",
      "addressLocality": "Redding",
      "addressRegion": "CA",
      "postalCode": "96001",
      "addressCountry": "US"
    }
  },
  "areaServed": {
    "@type": "State",
    "name": "Northern California"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Residential Siding Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Siding Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "James Hardie Fiber Cement Siding" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fire-Resistant Siding Upgrade" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Siding Repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Trim & Fascia" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vinyl & Composite Siding" } }
    ]
  }
};

const residentialSidingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": serviceFaqs["residential-siding"].map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const residentialSidingBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://obrienmountainhome.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://obrienmountainhome.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Residential Siding", "item": "https://obrienmountainhome.com/services/residential-siding" }
  ]
};

const ResidentialSiding = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Residential Siding Contractor in Redding CA | O'Brien Mountain Home"
        description="Upgrade your home with residential siding installation and repair from O'Brien Mountain Home in Redding and Northern California."
        canonical="/services/residential-siding"
        schema={[residentialSidingServiceSchema, residentialSidingFaqSchema, residentialSidingBreadcrumbSchema]}
      />
      
      <Header />

      <main>
        {/* Hero */}
        <ParallaxHero
          src="https://vibe.filesafe.space/1777345871363473576/assets/141e4d69-d98b-414a-9745-1bbc6aa66693.png"
          alt="Residential siding installed on a Northern California home"
          overlayClass="bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/50"
        >
          <div className="container mx-auto px-4 py-32">
            <AnimatedSection className="max-w-3xl text-white">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 text-primary text-sm font-semibold mb-6">
                <Home className="w-4 h-4" />
                Residential Siding Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Residential Siding Contractor in Redding, CA</h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed">
                Siding installation and repair that improves curb appeal, protects your home, and gives you a stronger exterior built for Northern California.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button asChild size="lg" className="rounded-full px-10 py-7 text-lg font-bold bg-primary text-slate-900 hover:bg-primary/90">
                  <Link to="/contact">Request a Siding Estimate</Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Residential Siding Services</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">From full replacements to targeted repairs — here is what we cover.</p>
            </AnimatedSection>
            <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" staggerMs={100}>
              {sidingFeatures.map((feature, i) => (
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

        <FAQ items={serviceFaqs["residential-siding"]} title="Residential Siding FAQ" className="bg-slate-50" />

        {/* CTA Form with background image */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://vibe.filesafe.space/1777345871363473576/assets/677655c1-f6fc-41ce-9626-ca4a7608425b.jpg"
              alt="Beautiful Northern California home exterior with new siding"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-950/85" />
          </div>
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Request Your Siding Estimate</h2>
              <p className="text-slate-300 text-lg">Tell us about your home and we'll help you figure out the best next step.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* ─── Service Areas ─── */}
        <section className="py-12 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-lg font-semibold text-slate-700 mb-6">Residential Siding Service Areas</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {sidingServiceAreaLocations.map(loc => (
                <Link
                  key={loc.slug}
                  to={`/locations/${loc.slug}`}
                  className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── From Our Blog ─── */}
        {sidingRelatedPosts.length > 0 && (
          <section className="py-16 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">From Our Blog</h2>
                <p className="text-slate-500 text-sm">Resources for Northern California homeowners</p>
              </AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {sidingRelatedPosts.map(post => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <img src={post.image} alt={post.title} className="w-full h-40 object-cover" loading="lazy" />
                    <div className="p-5">
                      <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors mb-2 leading-snug">{post.title}</h3>
                      <p className="text-sm text-slate-500 line-clamp-2">{post.excerpt}</p>
                      <span className="inline-block mt-3 text-xs font-semibold text-primary">Read Article →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection
          title="Ready to Upgrade Your Home's Exterior?"
          description="Get a professional estimate for your residential siding project."
        />
      </main>

      <Footer />
    </div>
  );
};

export default ResidentialSiding;
