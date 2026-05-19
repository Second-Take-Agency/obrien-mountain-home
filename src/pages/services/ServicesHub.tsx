import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ServiceCard from '@/components/ServiceCard';
import GoogleReviews from '@/components/GoogleReviews';
import { services } from '@/data/services';
import ProcessSteps from '@/components/ProcessSteps';
import FAQ from '@/components/FAQ';
import { faqs } from '@/data/faqs';
import { AnimatedSection, StaggeredGrid } from '@/components/AnimatedSection';
import ParallaxHero from '@/components/ParallaxHero';
const ServicesHub = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Decking, Siding & Fire Hardening Services | O’Brien Mountain Home"
        description="Explore fire hardening, custom decking, residential siding, and commercial siding services from O’Brien Mountain Home in Northern California."
        canonical="/services"
      />
      
      <Header />

      <main>
        <ParallaxHero
          src="https://vibe.filesafe.space/1777345871363473576/assets/c1315190-a555-4031-ac6a-4a9b551f2b09.png"
          alt="O'Brien Mountain Home Services — Northern California"
          overlayClass="bg-slate-900/80"
        >
          <div className="container mx-auto px-4 text-center py-32">
            <AnimatedSection>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Services</h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive exterior solutions designed for the unique challenges of Northern California living.
              </p>
            </AnimatedSection>
          </div>
        </ParallaxHero>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" staggerMs={120}>
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </StaggeredGrid>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Not sure what you need?</h2>
            <p className="text-lg text-slate-600 mb-12">
              Every home is different. We help you prioritize the upgrades that will have the biggest impact on your home's safety, value, and appearance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              <div className="bg-white p-8 rounded-2xl shadow-sm h-full flex flex-col">
                <h3 className="font-bold mb-4">Focus: Safety</h3>
                <p className="text-sm text-slate-500 flex-1">Start with Fire Hardening to protect against embers and wildfire risk.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm h-full flex flex-col">
                <h3 className="font-bold mb-4">Focus: Lifestyle</h3>
                <p className="text-sm text-slate-500 flex-1">A Custom Deck expands your living space and enhances outdoor enjoyment.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm h-full flex flex-col">
                <h3 className="font-bold mb-4">Focus: Value</h3>
                <p className="text-sm text-slate-500 flex-1">New Siding instantly improves curb appeal and long-term exterior protection.</p>
              </div>
            </div>
          </div>
        </section>

        <ProcessSteps />

        <GoogleReviews />
        <FAQ items={faqs} title="General Service FAQs" />

        <div className="h-1 bg-gradient-to-r from-slate-100 via-primary/30 to-slate-100" />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default ServicesHub;
