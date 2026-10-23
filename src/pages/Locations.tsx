import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import GoogleReviews from '@/components/GoogleReviews';
import FAQ from '@/components/FAQ';
import { locationsFaqs, buildFaqSchema } from '@/data/pageFaqs';
import { locations } from '@/data/locations';
import { services } from '@/data/services';
import { AnimatedSection } from '@/components/AnimatedSection';
import ParallaxHero from '@/components/ParallaxHero';
import { MapPin, ChevronRight } from 'lucide-react';

/**
 * The service-area hub.
 *
 * The eight city pages previously had no parent. Their only route in was the
 * footer, and every one of them emitted a breadcrumb whose second rung pointed
 * at /locations — a URL that did not exist and rendered the 404 page. This is
 * that page, so the rung is now true.
 *
 * It is built from the per-city copy already in locations.ts rather than from a
 * template: each entry carries its own description and localFocus terms, so the
 * hub says something specific about each town instead of listing eight names.
 */

/** The four counties, in the order the site states them everywhere else. */
const COUNTY_ORDER = ['Shasta County', 'Tehama County', 'Butte County', 'Siskiyou County'];

const LocationsHub = () => {
  // The region-wide entry is the fallback for anyone whose town is not listed,
  // so it belongs on its own rather than filed under a county.
  const regionEntry = locations.find(l => l.slug === 'northern-california');
  const cities = locations.filter(l => l.slug !== 'northern-california');

  const byCounty = COUNTY_ORDER
    .map(county => ({ county, entries: cities.filter(c => c.county === county) }))
    .filter(group => group.entries.length > 0);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Service Areas Across Northern California"
        description="Where O’Brien Mountain Home works — fire hardening, siding and decking throughout Northern California, concentrated in Shasta, Tehama, Butte and Siskiyou counties."
        canonical="/locations"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Service Areas Across Northern California",
            "url": "https://obrienmountainhome.com/locations",
            "description": "Where O'Brien Mountain Home works — fire hardening, siding and decking throughout Northern California, concentrated in Shasta, Tehama, Butte and Siskiyou counties.",
            "about": {
              "@type": "LocalBusiness",
              "name": "O'Brien Mountain Home",
              "url": "https://obrienmountainhome.com",
              "telephone": "+15309997495",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1308 Court St",
                "addressLocality": "Redding",
                "addressRegion": "CA",
                "postalCode": "96001",
                "addressCountry": "US"
              },
              "areaServed": locations.map(loc =>
                loc.slug === 'northern-california'
                  ? { "@type": "AdministrativeArea", "name": "Northern California" }
                  : {
                      "@type": "City",
                      "name": loc.name,
                      "containedInPlace": { "@type": "AdministrativeArea", "name": loc.county }
                    }
              )
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "O'Brien Mountain Home service areas",
            "itemListElement": locations.map((loc, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "name": loc.name,
              "url": `https://obrienmountainhome.com/locations/${loc.slug}`
            }))
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://obrienmountainhome.com" },
              { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://obrienmountainhome.com/locations" }
            ]
          },
          buildFaqSchema(locationsFaqs)
        ]}
      />

      <Header />

      <main>
        <ParallaxHero
          src="https://vibe.filesafe.space/1777345871363473576/assets/c1315190-a555-4031-ac6a-4a9b551f2b09.png"
          alt="Northern California mountain communities served by O'Brien Mountain Home"
          overlayClass="bg-slate-900/78"
        >
          <div className="container mx-auto px-4 text-center py-32 relative z-10">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-bold text-sm mb-6">
                <MapPin className="w-4 h-4" />
                Northern California &middot; based in Redding
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Where We Work in Northern California
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                We work throughout Northern California from our base in Redding, with most of our
                projects in the communities below. Each has its own conditions to build for — pick
                yours to see what that means in practice.
              </p>
            </AnimatedSection>
          </div>
        </ParallaxHero>

        {/* Cities grouped by county. The grouping is not decoration: the county
            determines which building department and fire authority a homeowner
            deals with, which is the first thing that differs between them. */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-16">
              {byCounty.map(({ county, entries }) => (
                <AnimatedSection key={county}>
                  <div className="flex items-baseline gap-4 mb-8 pb-3 border-b border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900">{county}</h2>
                    <span className="text-sm text-slate-400 font-medium">
                      {entries.length} {entries.length === 1 ? 'community' : 'communities'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {entries.map(loc => (
                      <Link
                        key={loc.id}
                        to={`/locations/${loc.slug}`}
                        className="group flex flex-col p-7 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                            {loc.name}
                          </h3>
                          <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors shrink-0" />
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                          {loc.description}
                        </p>

                        {loc.localFocus?.length > 0 && (
                          <ul className="flex flex-wrap gap-1.5 mt-auto">
                            {loc.localFocus.slice(0, 3).map(focus => (
                              <li
                                key={focus}
                                className="px-2.5 py-1 rounded-full bg-white group-hover:bg-slate-50 border border-slate-200 text-slate-500 text-xs font-medium"
                              >
                                {focus}
                              </li>
                            ))}
                          </ul>
                        )}
                      </Link>
                    ))}
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Anyone whose town is not one of the seven above. */}
            {regionEntry && (
              <AnimatedSection className="mt-16">
                <Link
                  to={`/locations/${regionEntry.slug}`}
                  className="group block p-8 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xl font-bold">Not on the list?</h2>
                    <ChevronRight className="w-5 h-5 text-primary shrink-0" />
                  </div>
                  <p className="text-slate-300 leading-relaxed max-w-3xl">
                    We cover the smaller communities in between as well. If you are not sure
                    whether your property falls inside our area, call us on{' '}
                    <span className="text-primary font-semibold">(530) 999-7495</span> and we
                    will tell you straight rather than leave you waiting on a quote that was
                    never coming.
                  </p>
                  <span className="inline-block mt-4 text-sm font-bold text-primary">
                    See our Northern California coverage &rarr;
                  </span>
                </Link>
              </AnimatedSection>
            )}
          </div>
        </section>

        {/* What we actually do once we get there — the other half of the
            location/service pairing these pages sit between. */}
        <section className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What We Do Across All of It</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                The same four services in every community we serve, specified for the
                conditions of the one you are in.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map(service => (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="group flex items-center justify-between p-5 rounded-xl border border-slate-200 bg-white hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <span className="font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <GoogleReviews />

        <FAQ items={locationsFaqs} title="Questions About Our Service Areas" />

        <CTASection
          title="Not Sure If We Cover Your Property?"
          description="Tell us where you are and what you are planning, and we will give you a straight answer."
        />
      </main>

      <Footer />
    </div>
  );
};

export default LocationsHub;
