import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import GoogleReviews from '@/components/GoogleReviews';
import { locations } from '@/data/locations';
import { services } from '@/data/services';
import { blogs } from '@/data/blogs';
import { postCoversCity } from '@/data/postCities';
import ServiceCard from '@/components/ServiceCard';
import PromotionsSection from '@/components/PromotionsSection';
import FAQ from '@/components/FAQ';
import { faqs } from '@/data/faqs';
import { MapPin, ShieldCheck, Hammer, Home } from 'lucide-react';
import NotFound from '@/pages/NotFound';
import { AnimatedSection, StaggeredGrid } from '@/components/AnimatedSection';
import ParallaxHero from '@/components/ParallaxHero';

const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = locations.find(l => l.slug === slug);

  if (!location) {
    return <NotFound />;
  }

  /* Related posts, in order of how related they actually are: posts written about
     this city first, then region-wide posts. Previously only Paradise and Magalia
     got anything targeted and the other six pages fell through to blogs.slice(0, 2),
     which put the same two newest posts on every location page under a heading that
     claimed they were relevant to that town. The `cities` tags in blogs.ts drive
     this now, and every location has at least one genuinely local post. */
  const relatedBlogPosts = [
    ...blogs.filter(b => postCoversCity(b, location.slug)),
    ...blogs.filter(
      b => postCoversCity(b, "northern-california") && !postCoversCity(b, location.slug)
    ),
  ].slice(0, 3);

  // Merge location-specific FAQs with general FAQs (location-specific shown first)
  const locationFaqItems = location.faqs
    ? [...location.faqs.map(f => ({ question: f.q, answer: f.a })), ...faqs.slice(0, 3)]
    : faqs;

  // FAQPage schema using location-specific FAQs when available
  const locationFaqSchema = location.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": location.faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }
    : null;

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`Siding, Decking & Fire Hardening in ${location.name}`}
        /* Each location has hand-written, differentiated copy — use it instead of a
           templated sentence, so the 8 location pages stop sharing one description. */
        description={location.description}
        canonical={`/locations/${location.slug}`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "O'Brien Mountain Home",
            "telephone": "+15309997495",
            "url": "https://obrienmountainhome.com",
            "hasMap": "https://maps.google.com/?cid=12902506597741023963",
            "sameAs": [
              "https://www.facebook.com/obrienmountainhome",
              "https://maps.google.com/?cid=12902506597741023963"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1308 Court St",
              "addressLocality": "Redding",
              "addressRegion": "CA",
              "postalCode": "96001",
              "addressCountry": "US"
            },
            /* The business sits in Redding regardless of which location page this is —
               previously each page claimed the *city's* coordinates as the business's,
               which contradicted the address and the GBP pin. The city belongs in
               areaServed below, not in geo. */
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.5848753,
              "longitude": -122.3966021
            },
            // The Northern California page covers a region, not a city, so it is
            // typed as an AdministrativeArea. The city pages keep City + the
            // county as containedInPlace.
            "areaServed": location.slug === "northern-california"
              ? {
                  "@type": "AdministrativeArea",
                  "name": "Northern California"
                }
              : {
                  "@type": "City",
                  "name": location.name,
                  "containedInPlace": {
                    "@type": "AdministrativeArea",
                    "name": location.county
                  }
                }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://obrienmountainhome.com" },
              { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://obrienmountainhome.com/locations" },
              { "@type": "ListItem", "position": 3, "name": location.name, "item": `https://obrienmountainhome.com/locations/${location.slug}` }
            ]
          },
          ...(locationFaqSchema ? [locationFaqSchema] : [])
        ]}
      />
      
      <Header />

      <main>
        {/* Hero Section */}
        <ParallaxHero
          src="https://vibe.filesafe.space/1777345871363473576/assets/c1315190-a555-4031-ac6a-4a9b551f2b09.png"
          alt={`${location.name} Northern California home exterior`}
          overlayClass="bg-slate-900/75"
        >
          <div className="container mx-auto px-4 text-center py-32 relative z-10">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-bold text-sm mb-6">
                <MapPin className="w-4 h-4" />
                {location.county}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Siding, Decking &amp; Fire Hardening in {location.name}</h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                {location.description}
              </p>

              {/* Every city carries an accurate, distinct localFocus array in
                  locations.ts, and until now nothing rendered it. These are the
                  few genuinely local terms on an otherwise templated page. */}
              {location.localFocus?.length > 0 && (
                <ul className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto">
                  {location.localFocus.map((focus) => (
                    <li
                      key={focus}
                      className="px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-slate-200 text-sm font-medium"
                    >
                      {focus}
                    </li>
                  ))}
                </ul>
              )}

              <Button asChild size="lg" className="rounded-full px-10 py-7 text-lg font-bold bg-primary text-slate-900 hover:bg-primary/90">
                <Link to="/contact">Request an Estimate</Link>
              </Button>
            </AnimatedSection>
          </div>
        </ParallaxHero>

        {/* Services Hub */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services in {location.name}</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Comprehensive exterior solutions designed for the unique challenges of Northern California living.
              </p>
            </AnimatedSection>
            <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerMs={110}>
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </StaggeredGrid>
          </div>
        </section>

        <PromotionsSection />

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Why Homeowners in {location.name.split(',')[0]} Need Durable, Fire-Aware Exterior Upgrades</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                  <ShieldCheck className="w-10 h-10 text-primary mb-6" />
                  <h3 className="font-bold mb-4">Wildfire Resilience</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    With increasing fire risks in {location.county}, ember-resistant vents and fire-hardened exteriors are no longer optional—they are essential protection.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                  <Hammer className="w-10 h-10 text-primary mb-6" />
                  <h3 className="font-bold mb-4">Climate Durability</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    From the intense North State sun to seasonal rains, our material choices are selected to withstand local weather conditions year-round.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                  <Home className="w-10 h-10 text-primary mb-6" />
                  <h3 className="font-bold mb-4">Property Value</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Modern siding and custom decks not only protect your home but significantly increase its curb appeal and market value in the {location.name} area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area List */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-2">Our Northern California Service Areas</h2>
              <p className="text-slate-400 text-sm">We provide expert decking, siding, and fire hardening across the North State.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {locations.map((loc) => (
                <Link 
                  key={loc.id} 
                  to={`/locations/${loc.slug}`}
                  className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <GoogleReviews />

        {/* ─── Related Articles ─── */}
        {relatedBlogPosts.length > 0 && (
          <section className="py-16 bg-slate-50 border-t border-slate-100">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Related Articles</h2>
                <p className="text-slate-500 text-sm">Resources for {location.name.split(',')[0]} homeowners</p>
              </AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {relatedBlogPosts.map(post => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all"
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

        <FAQ items={locationFaqItems} title={`Local FAQ for ${location.name.split(',')[0]}`} />

        <CTASection 
          title={`Ready to Protect or Upgrade Your ${location.name.split(',')[0]} Home?`}
          description="Tell us what you are working on, and we will help you figure out the best next step."
        />
      </main>

      <Footer />
    </div>
  );
};

export default LocationPage;
