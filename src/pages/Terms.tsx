import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Terms and Conditions | O’Brien Mountain Home"
        description="Terms and conditions for using the O’Brien Mountain Home website and services."
        canonical="/terms"
      />
      
      <Header />

      <main>
        <section className="relative pt-32 pb-16 bg-slate-900">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms and Conditions</h1>
          </div>
        </section>

        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Website Use</h2>
                <p>
                  By accessing this website, you agree to be bound by these Terms and Conditions. The content on this website is for general informational purposes only.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Estimates</h2>
                <p>
                  Any estimates provided through this website or via initial communication are preliminary and not final until confirmed in writing after a full on-site assessment by O’Brien Mountain Home.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">No Guarantee</h2>
                <p>
                  While we strive to provide accurate information, we do not guarantee that the website content is free from errors. Our services are provided based on individual project assessments and contracts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Consent</h2>
                <p>
                  By submitting your information, you consent to being contacted by O’Brien Mountain Home regarding your inquiry.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p>
                  O’Brien Mountain Home shall not be liable for any damages arising out of the use or inability to use the materials on this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">License Info</h2>
                <p>
                  O’Brien Mountain Home is a licensed contractor in the State of California. License number: Lic# 1135995.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
