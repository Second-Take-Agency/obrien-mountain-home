import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Privacy Policy | O’Brien Mountain Home"
        description="Privacy policy for O’Brien Mountain Home. Learn how we collect and use your information."
        canonical="/privacy-policy"
      />
      
      <Header />

      <main>
        <section className="relative pt-32 pb-16 bg-slate-900">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          </div>
        </section>

        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Information Collected</h2>
                <p>
                  We collect information that you provide directly to us when you fill out our contact form or request an estimate. This may include your name, email address, phone number, project location, and any other information you choose to provide.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">How Information is Used</h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to your inquiries and provide estimates.</li>
                  <li>Communicate with you about your project.</li>
                  <li>Improve our services and website performance.</li>
                  <li>Send you marketing communications (if you have opted in).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">SMS/Call Consent</h2>
                <p>
                  By providing your phone number and submitting our contact form, you agree to be contacted by O’Brien Mountain Home about your project via phone call or SMS. Message and data rates may apply. You can reply STOP to any SMS message to opt out of future communications.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Cookies/Analytics</h2>
                <p>
                  We may use cookies and similar tracking technologies to track activity on our website and hold certain information. This helps us analyze website traffic and improve user experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  Email: mcrans@obrienmountainhome.com
                  <br />
                  Phone: (530) 999-7495
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

export default PrivacyPolicy;
