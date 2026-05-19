import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { AnimatedSection } from '@/components/AnimatedSection';
import ParallaxHero from '@/components/ParallaxHero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, FileText, Settings, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import FAQ from '@/components/FAQ';
import GoogleReviews from '@/components/GoogleReviews';
const steps = [
  {
    title: "Assessment",
    description: "We meet to assess your problem, look at the home, and find the best solution.",
    icon: Search,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Estimate",
    description: "You get an honest and accurate quote using durable, high-quality material options.",
    icon: FileText,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Installation",
    description: "We do not guess. We solve problems, communicate clearly, and install your project with care.",
    icon: Settings,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Completion of Work",
    description: "We are not done until you are happy. You review the work before we consider the job complete.",
    icon: CheckCircle,
    color: "bg-green-50 text-green-600",
  },
];

const processFaqs = [
  {
    question: "How long does it take to get an estimate?",
    answer: "Typically, we can provide a detailed estimate within 2-3 business days after our initial on-site assessment."
  },
  {
    question: "Do you help choose materials?",
    answer: "Yes, we guide you through the pros and cons of different materials, focusing on durability, cost, and fire-aware properties."
  },
  {
    question: "Do I need to know exactly what I want before calling?",
    answer: "Not at all. Part of our assessment process is helping you identify the best solutions for your specific home and goals."
  },
  {
    question: "Do you handle fire hardening and siding together?",
    answer: "Yes, many homeowners choose to combine these services for a comprehensive exterior upgrade."
  },
  {
    question: "What happens after I submit the form?",
    answer: "A member of our team will contact you within 24 business hours to discuss your project and schedule an assessment."
  }
];

const ProcessPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Our Process | O’Brien Mountain Home Redding CA"
        description="See how O’Brien Mountain Home handles assessments, estimates, installation, and final walkthroughs for decking, siding, and fire hardening."
        canonical="/process"
      />
      
      <Header />

      <main>
        <ParallaxHero
          src="https://vibe.filesafe.space/1777345871363473576/assets/c1315190-a555-4031-ac6a-4a9b551f2b09.png"
          alt="O'Brien Mountain Home process — from assessment to completion"
          overlayClass="bg-slate-900/80"
          className="min-h-[55vh]"
        >
          <div className="container mx-auto px-4 text-center py-28">
            <AnimatedSection>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">The O'Brien Mountain Home Process</h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                No confusion. No guessing. Just a clear path from first assessment to finished work.
              </p>
            </AnimatedSection>
          </div>
        </ParallaxHero>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-24">
              {steps.map((step, index) => (
                <AnimatedSection key={index} variant={index % 2 === 0 ? 'left' : 'right'}>
                  <div className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2">
                      <div className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center mb-8 shadow-lg`}>
                        <step.icon className="w-10 h-10" />
                      </div>
                      <div className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Step 0{index + 1}</div>
                      <h2 className="text-3xl font-bold mb-6">{step.title}</h2>
                      <p className="text-xl text-slate-600 leading-relaxed mb-8">
                        {step.description}
                      </p>
                      
                      {index === 1 && (
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                          <p className="text-slate-500 font-medium">Have questions before starting?</p>
                          <Button asChild variant="outline" className="rounded-full">
                            <a href="tel:5309997495" className="flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              Call Now
                            </a>
                          </Button>
                        </div>
                      )}
                      
                      {index === 3 && (
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                          <p className="text-slate-500 font-medium">Want to see finished work?</p>
                          <Button asChild className="rounded-full">
                            <Link to="/portfolio" className="flex items-center gap-2">
                              View Portfolio
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>
                    <div className="md:w-1/2">
                      <div className="bg-slate-100 aspect-video rounded-3xl overflow-hidden shadow-2xl">
                        <img 
                          src={`/assets/process-step-${index + 1}.webp`} 
                          alt={step.title} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <GoogleReviews />
        <FAQ items={processFaqs} title="Process FAQs" className="bg-slate-50" />

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default ProcessPage;
