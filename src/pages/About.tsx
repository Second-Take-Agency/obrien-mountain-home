import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import GoogleReviews from '@/components/GoogleReviews';
import { AnimatedSection, StaggeredGrid } from '@/components/AnimatedSection';
import ParallaxHero from '@/components/ParallaxHero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Quote, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="About O’Brien Mountain Home | Redding CA Contractor"
        description="Meet Marcus Crans and learn how O’Brien Mountain Home helps Northern California homeowners build safer, stronger homes."
        canonical="/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "O’Brien Mountain Home",
            "description": "A North State company built around craftsmanship, resilience, and helping local homeowners protect what matters most."
          }
        }}
      />
      
      <Header />

      <main>
        {/* Hero Section */}
        <ParallaxHero
          src="https://vibe.filesafe.space/1777345871363473576/assets/ae7de53d-c036-4874-96ab-b5aa446004c4.png"
          alt="Beautiful Northern California mountain scenery"
          overlayClass="bg-slate-900/70"
        >
          <div className="container mx-auto px-4 text-center py-32">
            <AnimatedSection>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">About O'Brien Mountain Home</h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                A North State company built around craftsmanship, resilience, and helping local homeowners protect what matters most.
              </p>
            </AnimatedSection>
          </div>
        </ParallaxHero>

        {/* Founder Story Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
              <AnimatedSection variant="left" className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 text-primary text-sm font-bold mb-6">
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">Built for the North State by People Who Live Here</h2>
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                  <p>
                    O'Brien Mountain Home was founded by Marcus Crans, a North State native, local business graduate of Simpson University in Redding, and someone deeply committed to the long-term growth and resilience of Northern California communities.
                  </p>
                  <p>
                    In early 2021, Marcus purchased property in the O'Brien Mountain Estates, a mountain community overlooking Shasta Lake just north of Redding. Like many residents of the region, he was fully aware of the wildfire threat, having personally witnessed the destruction caused by the Carr Fire in 2018.
                  </p>
                  <p>
                    As he began designing his own home, it became clear that protection from wildfire could not be an afterthought. Through extensive research into modern materials, construction methods, and fire science, Marcus discovered that advances over the last decade had made fire-resilient homes and neighborhoods far more achievable than most people realize.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection variant="right" className="lg:w-1/2 relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                <img 
                  src="https://vibe.filesafe.space/1777345871363473576/assets/af37ff4b-7817-4b91-adfe-ee6cd1e695f0.png" 
                  alt="Marcus Crans, Founder of O'Brien Mountain Home" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-[4/5]"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -mr-48 -mt-48" />
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="bg-white/5 border border-white/10 p-12 md:p-16 rounded-[40px] relative">
              <Quote className="w-20 h-20 text-primary/20 absolute -top-4 -left-4" />
              <blockquote className="border-none p-0 m-0">
                <p className="text-2xl md:text-4xl font-semibold text-white leading-tight mb-10 italic">
                  “Some might call it idealistic, but I believe we can build homes and neighborhoods designed to coexist with fire. Places that can withstand it, allow natural fire to do its work, and still protect the people who live there. That’s the future I’m working toward.”
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-primary" />
                  <footer className="text-xl font-bold text-primary tracking-wide">Marcus Crans</footer>
                </div>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Core Mission</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                O'Brien Mountain Home is built specifically around fire hardening and wildfire-resilient home improvements. Help homeowners in Northern California protect what matters most in an increasingly wildfire-prone environment.
              </p>
            </AnimatedSection>

            <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerMs={110}>
              {[
                { title: "Fire-Aware Craftsmanship", description: "We think beyond looks and consider how exterior material choices affect long-term home resilience.", icon: "🔥" },
                { title: "Local Responsibility", description: "We live in the same region we serve, so we build with the North State's real risks in mind.", icon: "📍" },
                { title: "Practical Solutions", description: "We focus on improvements homeowners can actually understand, afford, and maintain.", icon: "🛠️" },
                { title: "Clear Communication", description: "You deserve honest estimates, clear next steps, and no guessing about your project.", icon: "💬" }
              ].map((value, i) => (
                <div key={i} className="p-10 rounded-3xl bg-white border border-slate-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">{value.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </StaggeredGrid>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Journey</h2>
              <p className="text-slate-500 text-lg">A timeline of growth and commitment to the North State.</p>
            </div>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
              {[
                { year: "2018", text: "Carr Fire reinforces the need for stronger home protection in the North State" },
                { year: "2021", text: "Marcus begins planning his own home near Shasta Lake" },
                { year: "2025", text: "O’Brien Mountain Home is formed around fire hardening, siding, and decking" },
                { year: "Today", text: "Serving homeowners across Redding and Northern California" }
              ].map((item, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-slate-100 group-hover:bg-primary text-slate-400 group-hover:text-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300">
                    <div className="w-2.5 h-2.5 bg-current rounded-full" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-[32px] bg-slate-50 hover:bg-white border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                    <div className="font-black text-2xl text-primary mb-2">{item.year}</div>
                    <div className="text-slate-600 text-lg">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        <GoogleReviews />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default About;
