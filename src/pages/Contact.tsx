import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import ContactForm from '@/components/ContactForm';
import GoogleReviews from '@/components/GoogleReviews';
import { AnimatedSection } from '@/components/AnimatedSection';
import ParallaxHero from '@/components/ParallaxHero';
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Contact O’Brien Mountain Home | Redding CA"
        description="Contact O’Brien Mountain Home for fire hardening, siding, decking, and commercial siding estimates in Redding and Northern California."
        canonical="/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "O’Brien Mountain Home",
            "telePhone": "(530) 999-7495",
            "email": "mcrans@obrienmountainhome.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1304 East St",
              "addressLocality": "Redding",
              "addressRegion": "CA",
              "postalCode": "96001"
            }
          }
        }}
      />
      
      <Header />

      <main>
        <ParallaxHero
          src="https://vibe.filesafe.space/1777345871363473576/assets/ae7de53d-c036-4874-96ab-b5aa446004c4.png"
          alt="Contact O'Brien Mountain Home for a free estimate"
          overlayClass="bg-slate-900/80"
          className="min-h-[50vh]"
        >
          <div className="container mx-auto px-4 text-center py-24">
            <AnimatedSection>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Request an Estimate</h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Tell us what you are working on and we will help you figure out the best next step.
              </p>
            </AnimatedSection>
          </div>
        </ParallaxHero>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
              {/* Form Side */}
              <div className="lg:w-3/5">
                <ContactForm />
              </div>

              {/* Info Side */}
              <div className="lg:w-2/5 space-y-12">
                <div>
                  <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                  <div className="space-y-6">
                    <a href="tel:5309997495" className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Phone</div>
                        <div className="text-slate-600">(530) 999-7495</div>
                      </div>
                    </a>
                    
                    <a href="mailto:mcrans@obrienmountainhome.com" className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Email</div>
                        <div className="text-slate-600 break-all">mcrans@obrienmountainhome.com</div>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Address</div>
                        <div className="text-slate-600">1304 East St, Redding, CA 96001</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Response Time</div>
                        <div className="text-slate-600 italic">"We reply within 24 business hours."</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <h3 className="font-bold mb-4">Business Details</h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p><span className="font-bold text-slate-900">License:</span> Lic# 1135995</p>
                    <p><span className="font-bold text-slate-900">Service Area:</span> Northern California</p>
                  </div>
                  <div className="mt-6">
                    <a 
                      href="https://www.facebook.com/obrienmountainhome" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary font-bold hover:underline"
                    >
                      <Facebook className="w-5 h-5" />
                      Follow us on Facebook
                    </a>
                  </div>
                </div>

                <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49184.81437651047!2d-122.42848443306877!3d40.58431940176865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d29227ad1963b7%3A0x7000e318858a740!2sRedding%2C%20CA!5e0!3m2!1sen!2sus!4v1714334567890!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <GoogleReviews />
        <div className="h-1 bg-gradient-to-r from-slate-100 via-primary/30 to-slate-100" />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
