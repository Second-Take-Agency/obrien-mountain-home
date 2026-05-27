import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import PortfolioGallery from '@/components/PortfolioGallery';
import GoogleReviews from '@/components/GoogleReviews';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { AnimatedSection } from '@/components/AnimatedSection';
import ParallaxHero from '@/components/ParallaxHero';
import { Button } from '@/components/ui/button';
import { FileText, Phone, X } from 'lucide-react';

const PortfolioPage = () => {
  const [showSticky, setShowSticky] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px past the hero
      if (window.scrollY > 500 && !dismissed) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    setShowSticky(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Decking, Siding & Fire Hardening Projects | O'Brien Mountain Home"
        description="View recent decking, siding, commercial siding, and fire hardening projects from O'Brien Mountain Home in Northern California."
        canonical="/portfolio"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "O'Brien Mountain Home Portfolio",
            "url": "https://obrienmountainhome.com/portfolio",
            "description": "A look at fire hardening, siding, decking, and exterior upgrades completed for homes and properties across Northern California."
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://obrienmountainhome.com" },
              { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://obrienmountainhome.com/portfolio" }
            ]
          }
        ]}
      />
      
      <Header />

      {/* Sticky Request a Quote Button */}
      <div
        className={`
          fixed bottom-8 right-6 z-50 flex flex-col items-end gap-2
          transition-all duration-500 ease-out
          ${showSticky ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-16 opacity-0 pointer-events-none'}
        `}
        role="complementary"
        aria-label="Request a quote shortcut"
      >
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          aria-label="Dismiss quote button"
          className="w-6 h-6 rounded-full bg-slate-700 text-slate-200 flex items-center justify-center hover:bg-slate-600 transition-colors duration-150 shadow-md self-end"
        >
          <X size={12} />
        </button>

        {/* Main sticky card */}
        <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700 w-64">
          {/* Gold accent bar */}
          <div className="h-1 w-full bg-primary" />

          <div className="p-4">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">Free Estimate</p>
            <p className="text-white font-bold text-sm leading-snug mb-4">
              Ready to protect or upgrade your home?
            </p>

            <div className="flex flex-col gap-2">
              <Button
                asChild
                size="sm"
                className="w-full rounded-lg bg-primary text-slate-900 font-bold hover:bg-primary/90 transition-all duration-200 flex items-center gap-2 justify-center"
              >
                <Link to="/contact">
                  <FileText size={14} />
                  Request a Quote
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full rounded-lg border border-slate-500 bg-transparent text-slate-200 font-semibold hover:bg-primary hover:border-primary hover:text-slate-900 transition-all duration-200 flex items-center gap-2 justify-center"
              >
                <a href="tel:5309997495">
                  <Phone size={14} />
                  (530) 999-7495
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Pulsing dot to draw attention on first appearance */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3 pointer-events-none">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
        </span>
      </div>

      <main>
        {/* Hero */}
        <ParallaxHero
          src="https://vibe.filesafe.space/1777345871363473576/assets/27902a8d-1ff2-4ab0-9572-cceb3bc46f72.png"
          alt="O'Brien Mountain Home recent projects — decking, siding, fire hardening"
          overlayClass="bg-slate-900/80"
          className="min-h-[65vh]"
        >
          <div className="container mx-auto px-4 text-center py-32">
            <AnimatedSection>
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Our Work</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Recent Projects</h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                A look at fire hardening, siding, decking, and exterior upgrades completed for homes and properties across Northern California.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                <Button asChild size="lg" className="rounded-full px-10 bg-primary text-slate-900 font-bold hover:bg-primary/90">
                  <Link to="/contact">Request an Estimate</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-10 border-2 border-slate-400 bg-transparent text-slate-200 hover:bg-primary hover:border-primary hover:text-slate-900 font-bold transition-all duration-200"
                >
                  <a href="tel:5309997495">(530) 999-7495</a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </ParallaxHero>

        <PortfolioGallery />

        {/* Before / After Sliders — shown after the gallery so visitors see real projects first */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">See the Difference</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Transformations</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Drag the handle left or right to compare the before and after on real Northern California homes and properties.
              </p>
            </AnimatedSection>

            <BeforeAfterSlider 
              beforeImage="https://vibe.filesafe.space/1777345871363473576/attachments/70d3b0e5-f3b0-414e-b9a4-97003e2337bc.webp"
              afterImage="https://vibe.filesafe.space/1777345871363473576/attachments/70d3b0e5-f3b0-414e-b9a4-97003e2337bc.webp"
              beforeLabel="Before — Old Wood Siding"
              afterLabel="After — Fiber Cement"
              title="Exterior Siding Transformation"
              description="This Redding home went from aging, fire-vulnerable wood siding to new James Hardie fiber cement — durable, low-maintenance, and fire-resistant."
              isSplit={true}
            />

            <BeforeAfterSlider 
              beforeImage="https://vibe.filesafe.space/1777345871363473576/attachments/788b8912-c7c7-4f9b-bd7b-e5061a16f3c5.jpg"
              afterImage="https://vibe.filesafe.space/1777345871363473576/attachments/788b8912-c7c7-4f9b-bd7b-e5061a16f3c5.jpg"
              beforeLabel="Before — Old Deck Framing"
              afterLabel="After — New Composite Deck"
              title="Custom Deck Rebuild"
              description="We replaced a rotted, unsafe wood deck with a beautiful, fire-aware TimberTech composite system built to last in the North State climate."
              isSplit={true}
            />
          </div>
        </section>

        <GoogleReviews />

        {/* Bottom CTA with background image */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://vibe.filesafe.space/1777345871363473576/assets/ae7de53d-c036-4874-96ab-b5aa446004c4.png" 
              alt="Beautiful home exterior upgraded with fire-resistant siding in Northern California" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/80" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Start Your Project</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Have a project like this?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              We'd love to help you protect and upgrade your home. Get a clear, honest estimate with no pressure.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-10 bg-primary text-slate-900 font-bold hover:bg-primary/90">
                <Link to="/contact">Request an Estimate</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-10 border-2 border-slate-400 bg-transparent text-slate-200 hover:bg-primary hover:border-primary hover:text-slate-900 font-bold transition-all duration-200"
              >
                <a href="tel:5309997495">(530) 999-7495</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <Footer />
    </div>
  );
};

export default PortfolioPage;
