import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import GoogleReviews from '@/components/GoogleReviews';
import {
  Building2, ShieldCheck, Layers, AlertTriangle, Wind, Settings,
  Users, Key, Briefcase, Home, ShoppingCart, Package, Landmark,
  MessageCircle, Clock, CheckCircle2, ArrowRight, Phone, MapPin,
  FileText, Building
} from 'lucide-react';
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

const commercialRelatedPosts = blogs.filter(b => b.category === 'Siding').slice(0, 2);
const commercialServiceAreaLocations = locations.filter(l => l.slug !== 'northern-california').slice(0, 6);

const HERO_IMG = "https://vibe.filesafe.space/1777345871363473576/assets/459e268e-bc09-44a5-baf2-77ea643e1b61.png";
const CTA_BG   = "https://vibe.filesafe.space/1777345871363473576/assets/3fb0f103-61a5-459d-9831-808feaf236e3.jpg";

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "name": "O'Brien Mountain Home",
  "description": "Licensed commercial siding contractor in Redding, CA serving general contractors, property managers, and commercial property owners across Northern California.",
  "url": "https://obrienmountainhome.com/services/commercial-siding",
  "telephone": "+15309997495",
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
  "areaServed": { "@type": "State", "name": "Northern California" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Commercial Siding Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Siding Installation",
          "description": "Professional fiber cement, metal, and vinyl siding installation for commercial properties in Northern California"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Siding Repair",
          "description": "Commercial exterior siding repair and replacement for damaged or failing building envelopes"
        }
      }
    ]
  },
  "priceRange": "$$",
  "openingHours": "Mo-Fr 07:00-18:00",
  "sameAs": ["https://www.facebook.com/obrienmountainhome"],
  "license": "CA Contractor License #1135995"
};

const commercialBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://obrienmountainhome.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://obrienmountainhome.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Commercial Siding", "item": "https://obrienmountainhome.com/services/commercial-siding" }
  ]
};

const trustStats = [
  { label: "Licensed CA Contractor", detail: "Lic# 1135995 — Verified", icon: ShieldCheck },
  { label: "Commercial & Residential", detail: "Full-service exterior work", icon: Building2 },
  { label: "NorCal Service Area", detail: "Shasta, Butte, Tehama & beyond", icon: MapPin },
  { label: "Free Commercial Bid", detail: "Accurate quotes, fast turnaround", icon: FileText },
];

const audiences = [
  {
    icon: Users,
    title: "General Contractors",
    description: "Clear sub bids, accurate timelines, and job sites that don't create problems for your schedule.",
    detail: "We provide itemized bids with defined scope, predictable timelines, and communication you can count on from start to finish.",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600 bg-blue-100",
  },
  {
    icon: Key,
    title: "Property Managers",
    description: "Protect your portfolio's value with exterior upgrades that minimize tenant disruption.",
    detail: "We structure commercial projects around occupancy schedules. Clear invoicing and documented scope — what every PM needs.",
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-700 bg-amber-100",
  },
  {
    icon: Building2,
    title: "Property Owners",
    description: "Protect your investment with durable siding that reduces maintenance costs and extends building life.",
    detail: "Whether it's one property or a portfolio, we help you make the right material and scope decisions for the long term.",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-700 bg-green-100",
  },
  {
    icon: Briefcase,
    title: "Business Owners",
    description: "Your building's exterior is the first impression customers see. Make it count.",
    detail: "We understand that a commercial exterior project needs to be done right, on schedule, and with minimal disruption to daily operations.",
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-700 bg-purple-100",
  },
];

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
    description: "Damaged, failing, or outdated commercial siding repaired professionally to protect the building envelope and maintain appearance.",
    detail: "We assess the full extent of damage before quoting — so there are no surprise costs once work begins."
  },
  {
    icon: ShieldCheck,
    title: "Fiber Cement Siding",
    badge: "Top Choice",
    badgeColor: "bg-green-100 text-green-700",
    description: "James Hardie and fiber cement options are the standard for commercial projects that need fire resistance, durability, and low maintenance.",
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
    description: "We coordinate with general contractors, architects, and project managers to integrate siding work into the broader schedule.",
    detail: "Clear bids, accurate timelines, and reliable communication — the basics that matter most to GCs and PMs."
  },
  {
    icon: Wind,
    title: "Vinyl & Composite Options",
    badge: "Budget Conscious",
    badgeColor: "bg-yellow-100 text-yellow-700",
    description: "Where cost constraints require it, we install vinyl and composite siding correctly and professionally — without cutting corners.",
    detail: "Even with budget-friendly materials, proper installation and moisture management are what determine long-term performance."
  },
];

const propertyTypes = [
  { icon: ShoppingCart, label: "Retail & Strip Centers",     desc: "High-visibility exteriors that create strong first impressions for customers" },
  { icon: Building,     label: "Office Buildings",           desc: "Professional finishes that hold up over decades of daily use" },
  { icon: Home,         label: "Multi-Family & Apartments",  desc: "Durable solutions that reduce recurring maintenance costs for landlords" },
  { icon: Package,      label: "Industrial & Warehouse",     desc: "Practical, weather-resistant cladding for working commercial buildings" },
  { icon: Users,        label: "HOA & Common Areas",         desc: "Consistent, community-wide exterior upgrades completed on schedule" },
  { icon: Landmark,     label: "Government & Municipal",     desc: "Compliant installation with proper documentation for public sector projects" },
];

const whyOBrien = [
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "From first bid to final walkthrough, you'll always know where your project stands. No surprises, no chasing us down for updates.",
  },
  {
    icon: ShieldCheck,
    title: "OSHA-Compliant Worksites",
    description: "Professional job sites with documented safety practices — meeting the compliance expectations of commercial property managers and GCs.",
  },
  {
    icon: Clock,
    title: "Timeline Accountability",
    description: "We coordinate around your occupancy, your tenants, and your GC's schedule. Delays cost everyone money — we don't cause them.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Site Assessment & Bid",
    description: "We visit the site, assess the full scope of work, and deliver a detailed itemized bid — not a vague estimate. Most commercial bids delivered within 3–5 business days.",
  },
  {
    step: "02",
    title: "Material Selection & Scheduling",
    description: "We walk through material options — fiber cement, metal, vinyl, composite — with honest tradeoff guidance, then lock in a schedule around your occupancy.",
  },
  {
    step: "03",
    title: "Job Site Setup & Safety Protocol",
    description: "Crews arrive on time, set up a clean OSHA-compliant worksite, and coordinate access with your building management team before work begins.",
  },
  {
    step: "04",
    title: "Installation & Quality Checks",
    description: "Professional installation with on-site supervision at every stage. Moisture barriers, fastener schedules, and seam integrity checked throughout.",
  },
  {
    step: "05",
    title: "Final Walkthrough & Sign-Off",
    description: "We walk the completed project with you or your PM, address any punch-list items on the spot, and provide documentation for your records.",
  },
];

const materials = [
  {
    name: "Fiber Cement",
    subtitle: "Recommended for most commercial applications",
    badge: "Most Popular",
    badgeColor: "bg-green-100 text-green-700",
    icon: ShieldCheck,
    features: [
      "James Hardie & comparable brands",
      "Class A fire-rated options available",
      "Resistant to rot, insects, and moisture",
      "Holds paint finishes 15–20+ years",
      "Ideal for NorCal wildfire risk zones",
    ],
    highlight: true,
  },
  {
    name: "Metal Cladding",
    subtitle: "Commercial-grade for industrial & modern exteriors",
    badge: "Commercial Grade",
    badgeColor: "bg-slate-100 text-slate-700",
    icon: Layers,
    features: [
      "Steel and aluminum panel systems",
      "Exceptional longevity (50+ years)",
      "Reflective finishes for energy efficiency",
      "Low lifetime maintenance cost",
      "Strong visual impact for modern buildings",
    ],
    highlight: false,
  },
  {
    name: "Vinyl & Composite",
    subtitle: "Budget-friendly with professional installation",
    badge: "Cost-Effective",
    badgeColor: "bg-amber-100 text-amber-700",
    icon: Wind,
    features: [
      "Lower upfront material cost",
      "Color-through — won't need repainting",
      "Moisture-resistant construction",
      "Wide profile and color selection",
      "Properly installed for long-term performance",
    ],
    highlight: false,
  },
];

const CommercialSiding = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Commercial Siding Contractor in Redding, CA | O'Brien Mountain Home"
        description="Licensed commercial siding installation and repair for property managers, general contractors, and business owners across Northern California. Fiber cement, metal, and vinyl. Call (530) 999-7495."
        canonical="/services/commercial-siding"
        schema={[schema, commercialBreadcrumbSchema]}
      />

      <Header />

      <main>
        {/* ─── Hero ─── */}
        <ParallaxHero
          src={HERO_IMG}
          alt="Commercial building with professional siding installation in Northern California"
          overlayClass="bg-slate-950/80"
        >
          <div className="container mx-auto px-4 py-32">
            <AnimatedSection className="max-w-3xl text-white">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 text-primary text-sm font-semibold mb-6">
                <Building2 className="w-4 h-4" />
                Commercial Siding Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Commercial Siding Contractor in Redding, CA
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-6 leading-relaxed">
                Trusted by general contractors, property managers, and commercial property owners across Northern California for reliable installation, accurate bids, and professional job sites.
              </p>
              <ul className="space-y-2 mb-10">
                {[
                  "Licensed CA Contractor — Lic# 1135995",
                  "Fiber cement, metal, vinyl & composite",
                  "GC-ready bids delivered in 3–5 business days",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
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

        {/* ─── Trust Bar ─── */}
        <section className="py-5 bg-slate-900 border-b border-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustStats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3 py-2">
                  <div className="w-9 h-9 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-tight">{stat.label}</div>
                    <div className="text-xs text-slate-400">{stat.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Who We Work With ─── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 text-primary text-sm font-semibold mb-4">
                <Users className="w-4 h-4" />
                Who We Work With
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Commercial Decision-Makers</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                Whether you're a GC looking for a reliable siding sub, a PM protecting a portfolio, or an owner upgrading a building — we know what matters to you.
              </p>
            </AnimatedSection>
            <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" staggerMs={100}>
              {audiences.map((a, i) => (
                <div key={i} className={`rounded-2xl border p-8 flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${a.color}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${a.iconColor}`}>
                    <a.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{a.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{a.description}</p>
                  <p className="text-xs text-slate-500 leading-relaxed border-t border-black/10 pt-4 mt-auto">{a.detail}</p>
                </div>
              ))}
            </StaggeredGrid>
          </div>
        </section>

        {/* ─── Services Grid ─── */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commercial Siding Services</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Full-service commercial exterior siding for Northern California — from single-building repairs to large-scale multi-property installations.
              </p>
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

        {/* ─── Property Types ─── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Property Types We Serve</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                From single-tenant retail to large multi-family complexes, we bring the same professional approach to every commercial exterior project in Northern California.
              </p>
            </AnimatedSection>
            <StaggeredGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto" staggerMs={80}>
              {propertyTypes.map((type, i) => (
                <div key={i} className="group flex items-start gap-5 p-6 rounded-2xl border border-slate-200 bg-white hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <type.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors duration-200">{type.label}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{type.desc}</p>
                  </div>
                </div>
              ))}
            </StaggeredGrid>
          </div>
        </section>

        {/* ─── Why O'Brien (dark strip) ─── */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Commercial Clients Choose O'Brien</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                The commercial siding contractor that shows up, communicates clearly, and delivers on what was agreed — every time.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {whyOBrien.map((item, i) => (
                <AnimatedSection key={i} className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-300">
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </AnimatedSection>
              ))}
            </div>

            <div className="text-center mt-14">
              <p className="text-slate-400 mb-6 text-lg">Ready to discuss your project?</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full px-10 py-7 text-lg font-bold bg-primary text-slate-900 hover:bg-primary/90">
                  <Link to="/contact">Request a Commercial Bid</Link>
                </Button>
                <a href="tel:5309997495" className="inline-flex items-center gap-2 text-white font-semibold hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" /> (530) 999-7495
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Commercial Process ─── */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The O'Brien Commercial Process</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                A straightforward, professional approach from first contact to final sign-off. No surprises, no chasing — just work done right.
              </p>
            </AnimatedSection>
            <div className="max-w-4xl mx-auto space-y-5">
              {processSteps.map((step, i) => (
                <AnimatedSection key={i} className="flex gap-6 items-start p-7 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <div className="shrink-0 w-14 h-14 bg-primary rounded-2xl flex items-center justify-center">
                    <span className="text-slate-900 font-black text-lg">{step.step}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1.5">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  <div className="shrink-0 hidden md:flex items-center pt-4">
                    <ArrowRight className="w-5 h-5 text-slate-300" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Materials ─── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Commercial Siding Materials</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                We install all major commercial siding types and give you honest guidance on which fits your building, budget, and long-term goals.
              </p>
            </AnimatedSection>
            <StaggeredGrid className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" staggerMs={100}>
              {materials.map((mat, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-8 border flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    mat.highlight
                      ? 'bg-primary border-primary shadow-lg shadow-primary/20'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${mat.highlight ? 'bg-slate-900/20' : 'bg-primary/10'}`}>
                      <mat.icon className={`w-6 h-6 ${mat.highlight ? 'text-slate-900' : 'text-primary'}`} />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${mat.highlight ? 'bg-slate-900/20 text-slate-900' : mat.badgeColor}`}>
                      {mat.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{mat.name}</h3>
                  <p className={`text-sm mb-5 ${mat.highlight ? 'text-slate-800' : 'text-slate-500'}`}>{mat.subtitle}</p>
                  <ul className="space-y-2.5 flex-1">
                    {mat.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${mat.highlight ? 'text-slate-900' : 'text-primary'}`} />
                        <span className={mat.highlight ? 'text-slate-900' : 'text-slate-700'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-6 pt-5 border-t ${mat.highlight ? 'border-slate-900/20' : 'border-slate-200'}`}>
                    <Link
                      to="/contact"
                      className={`inline-flex items-center gap-1 text-sm font-bold hover:underline ${mat.highlight ? 'text-slate-900' : 'text-primary'}`}
                    >
                      Ask about {mat.name} →
                    </Link>
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

        <FAQ
          items={serviceFaqs["commercial-siding"]}
          title="Commercial Siding FAQ"
          className="bg-slate-50"
        />

        {/* ─── CTA with Background ─── */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={CTA_BG}
              alt="Commercial building exterior with professional siding installation in Northern California"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-950/95" />
          </div>
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Request a Commercial Siding Bid</h2>
              <p className="text-slate-300 text-lg max-w-xl mx-auto">
                Share your project details — property type, building size, material preference — and we'll get back to you within one business day.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* ─── Service Areas ─── */}
        <section className="py-12 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-lg font-semibold text-slate-700 mb-6">Commercial Siding Service Areas</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {commercialServiceAreaLocations.map(loc => (
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
        {commercialRelatedPosts.length > 0 && (
          <section className="py-16 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">From Our Blog</h2>
                <p className="text-slate-500 text-sm">Resources for Northern California property owners</p>
              </AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {commercialRelatedPosts.map(post => (
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
          title="Ready to Talk About Your Commercial Project?"
          description="Call us directly or request a bid online. Most commercial estimates delivered within 3–5 business days."
        />
      </main>

      <Footer />
    </div>
  );
};

export default CommercialSiding;
