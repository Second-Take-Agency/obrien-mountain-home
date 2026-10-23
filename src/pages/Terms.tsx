import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * NOT LEGAL ADVICE — HAVE AN ATTORNEY REVIEW BEFORE RELYING ON THIS.
 *
 * This replaces a ~154-word page. Section 4 is the most important addition: the
 * site publishes detailed articles about building codes, defensible space rules
 * and insurance discount programmes, several of which state specific figures and
 * deadlines. Section 4 disclaims that content as general information.
 *
 * FOUR THINGS AN ATTORNEY SHOULD DECIDE
 *  1. DISPUTE RESOLUTION. Section 13 sets venue in Shasta County and contains
 *     NO arbitration clause and NO class-action waiver. That is deliberate —
 *     both carry consumer-protection considerations in California that need
 *     real legal judgement. An attorney may want to add one.
 *  2. LIMITATION OF LIABILITY. Section 12 is drafted conservatively. California
 *     limits how far a business may disclaim liability, particularly to
 *     consumers, and unenforceable over-reach can invalidate a clause entirely.
 *  3. Whether the CSLB complaint disclosure in Section 3 is worded correctly
 *     for this business.
 *  4. HOME IMPROVEMENT CONTRACT RULES. California imposes specific requirements
 *     on residential home improvement contracts — written terms, down-payment
 *     limits, cancellation rights, mechanics lien disclosures. Those belong in
 *     the actual construction contract, NOT on this page. An attorney should
 *     confirm nothing here conflicts with them.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// Update whenever the text below changes.
const LAST_UPDATED = '8 September 2026';
/** Same date, machine-readable, for the WebPage schema's dateModified. */
const LAST_UPDATED_ISO = '2026-09-08';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Terms and Conditions"
        description="Terms and conditions for using the O’Brien Mountain Home website, including how our published guidance should and should not be relied on."
        canonical="/terms"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms and Conditions",
            "url": "https://obrienmountainhome.com/terms",
            "description": "Terms and conditions for using the O'Brien Mountain Home website, including how our published guidance should and should not be relied on.",
            "dateModified": LAST_UPDATED_ISO,
            "isPartOf": {
              "@type": "WebSite",
              "name": "O'Brien Mountain Home",
              "url": "https://obrienmountainhome.com"
            },
            "publisher": {
              "@type": "LocalBusiness",
              "name": "O'Brien Mountain Home",
              "url": "https://obrienmountainhome.com"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://obrienmountainhome.com" },
              { "@type": "ListItem", "position": 2, "name": "Terms and Conditions", "item": "https://obrienmountainhome.com/terms" }
            ]
          }
        ]}
        robots="noindex,follow"
      />

      <Header />

      <main>
        <section className="relative pt-32 pb-16 bg-slate-900">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms and Conditions</h1>
            <p className="text-slate-300 text-sm">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-slate max-w-none space-y-10">

              <section>
                <h2 className="text-2xl font-bold mb-4">1. Agreement to These Terms</h2>
                <p>
                  These Terms and Conditions govern your use of obrienmountainhome.com, operated by
                  O’Brien Mountain Home (“we”, “us”, “our”). By accessing or using this website, you
                  agree to them. If you do not agree, please do not use the site.
                </p>
                <p className="mt-4">
                  <strong>These terms govern website use. They are not a construction contract.</strong>{' '}
                  Any work we perform for you will be governed by a separate written agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Who We Are</h2>
                <p>
                  <strong>O’Brien Mountain Home</strong><br />
                  1308 Court St, Redding, CA 96001<br />
                  <a href="mailto:admin@obrienmountainhome.com" className="text-primary font-semibold">admin@obrienmountainhome.com</a> ·{' '}
                  <a href="tel:+15309997495" className="text-primary font-semibold">(530) 999-7495</a>
                </p>
                <p className="mt-4">
                  <strong>California Contractors State License Board (CSLB) License No. 1135995.</strong>{' '}
                  You can verify our licence at{' '}
                  <a href="https://www.cslb.ca.gov" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold">www.cslb.ca.gov</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Contractor Licensing and Consumer Information</h2>
                <p>
                  We are licensed by the Contractors State License Board of the State of California.
                  Consumers may check the status of a contractor’s licence, and may file complaints
                  regarding licensed contractors, with the CSLB:
                </p>
                <p className="mt-4">
                  Contractors State License Board<br />
                  P.O. Box 26000, Sacramento, CA 95826<br />
                  1-800-321-CSLB (2752) ·{' '}
                  <a href="https://www.cslb.ca.gov" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold">www.cslb.ca.gov</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Website Content Is General Information Only</h2>
                <p>
                  The content on this website — including blog articles, guides, checklists and
                  service descriptions — is provided for <strong>general informational purposes only</strong>.
                </p>

                <h3 className="text-lg font-bold mt-6 mb-2">Building codes, defensible space and wildfire regulations</h3>
                <p>
                  We write about California building codes, wildland-urban interface (WUI)
                  requirements, defensible space rules and related regulations.{' '}
                  <strong>These change, and how they apply depends on your specific property, county and circumstances.</strong>{' '}
                  Nothing on this website is a determination that your property does or does not
                  comply with any law, code or standard. Always confirm current requirements with
                  your local building department, fire authority or CAL FIRE before making decisions.
                </p>

                <h3 className="text-lg font-bold mt-6 mb-2">Insurance information</h3>
                <p>
                  We write about insurance-related topics, including hardening measures that may
                  affect coverage or premiums.{' '}
                  <strong>We are contractors, not insurance advisers, brokers or agents.</strong>{' '}
                  We do not guarantee that any work will result in a discount, in coverage being
                  offered, or in coverage being retained. Insurance programmes, eligibility criteria
                  and discount amounts are set by insurers and regulators, change over time, and vary
                  by policy. Confirm anything insurance-related directly with your insurer or a
                  licensed broker before relying on it.
                </p>

                <h3 className="text-lg font-bold mt-6 mb-2">Wildfire risk</h3>
                <p>
                  No construction method, product or material eliminates wildfire risk. Fire
                  hardening measures are intended to <strong>reduce</strong> vulnerability. We
                  describe them honestly and we do not promise that a hardened structure will
                  survive a fire.
                </p>

                <h3 className="text-lg font-bold mt-6 mb-2">No professional advice</h3>
                <p>
                  Nothing on this website constitutes legal, insurance, financial, engineering or
                  architectural advice. Consult an appropriately qualified professional for your
                  situation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Estimates and Quotations</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Requesting an estimate through this website creates <strong>no obligation</strong> on either side.</li>
                  <li>Any figures discussed before a site visit are preliminary and <strong>not a binding offer</strong>.</li>
                  <li>Binding pricing is provided only in a <strong>written estimate or contract signed by both parties</strong>, subject to the conditions stated in that document.</li>
                  <li>Estimates may be revised where site conditions differ from what was visible at the time of assessment — for example, damage discovered once existing material is removed.</li>
                  <li>Estimates are valid for the period stated on them. Where no period is stated, material and labour costs may change.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Promotional Offers</h2>
                <p>
                  Any promotional offer shown on this website is subject to availability, eligibility
                  and the specific terms stated with it. Offers may be changed or withdrawn at any
                  time, may not be combined unless we say so, and apply only to qualifying projects.
                  Please ask us to confirm the current terms of an offer before relying on it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Communications and Consent</h2>
                <p>
                  By submitting a form on this website, you agree that we may contact you about your
                  enquiry by phone, SMS text message and email.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Message frequency varies. Message and data rates may apply.</li>
                  <li><strong>Reply STOP</strong> to opt out of SMS. <strong>Reply HELP</strong> for assistance.</li>
                  <li>Consent to marketing messages is not a condition of purchase.</li>
                </ul>
                <p className="mt-4">
                  How we handle your information is described in our{' '}
                  <Link to="/privacy-policy" className="text-primary font-semibold">Privacy Policy</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Acceptable Use</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Use the website unlawfully or in breach of these terms</li>
                  <li>Submit false, misleading or fraudulent information</li>
                  <li>Submit another person’s information without their permission</li>
                  <li>Attempt to gain unauthorised access to the site or its systems</li>
                  <li>Introduce malware or otherwise interfere with the site’s operation</li>
                  <li>Scrape, harvest or systematically extract content or contact details</li>
                  <li>Use automated systems to submit forms</li>
                  <li>Reproduce our content commercially without permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Intellectual Property</h2>
                <p>
                  All content on this website — text, photographs, project galleries, graphics, logos
                  and layout — is owned by O’Brien Mountain Home or used with permission, and is
                  protected by intellectual property law.{' '}
                  <strong>Our project photographs show our own completed work</strong> and may not be
                  reproduced without written permission.
                </p>
                <p className="mt-4">
                  Third-party trademarks and product names, including manufacturer names, belong to
                  their respective owners. Reference to them does not imply their endorsement of us,
                  except where a partnership is expressly stated.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Third-Party Links</h2>
                <p>
                  This website links to third-party websites, including manufacturers, industry
                  organisations and our Google Business Profile. We provide these for convenience.
                  We do not control them and are not responsible for their content, products or
                  practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Website Availability and Accuracy</h2>
                <p>We aim to keep this website accurate and available, but:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>We do not warrant that it will be uninterrupted or error-free</li>
                  <li>Content may become out of date, particularly where it describes regulations or programmes that change</li>
                  <li>We may modify, suspend or discontinue any part of the site at any time</li>
                </ul>
                <p className="mt-4">
                  <strong>The website is provided “as is” and “as available”</strong> without
                  warranties of any kind, express or implied, to the fullest extent permitted by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by California law, O’Brien Mountain Home will not
                  be liable for indirect, incidental, special, consequential or punitive damages
                  arising from your use of this website or reliance on its content.
                </p>
                <p className="mt-4">
                  Nothing in these terms limits or excludes liability that cannot lawfully be limited
                  or excluded, including liability for death or personal injury caused by negligence,
                  or for fraud.
                </p>
                <p className="mt-4">
                  <strong>
                    This section concerns website use. Liability relating to construction work we
                    perform is governed by our written contract with you and by applicable California law.
                  </strong>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">13. Governing Law and Venue</h2>
                <p>
                  These terms are governed by the laws of the State of California, without regard to
                  conflict-of-law principles. Any dispute arising out of your use of this website
                  will be brought in the state or federal courts located in{' '}
                  <strong>Shasta County, California</strong>, and you consent to the jurisdiction of
                  those courts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">14. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless O’Brien Mountain Home from claims arising
                  out of your misuse of this website, your breach of these terms, or your violation
                  of the rights of another.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">15. Severability</h2>
                <p>
                  If any provision of these terms is found unenforceable, that provision will be
                  limited or removed to the minimum extent necessary, and the remaining provisions
                  will remain in full force.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">16. Changes to These Terms</h2>
                <p>
                  We may update these terms. The “Last updated” date will change, and continued use
                  of the website after an update means you accept the revised terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">17. Contact</h2>
                <p>
                  <strong>O’Brien Mountain Home</strong><br />
                  1308 Court St, Redding, CA 96001<br />
                  <a href="mailto:admin@obrienmountainhome.com" className="text-primary font-semibold">admin@obrienmountainhome.com</a> ·{' '}
                  <a href="tel:+15309997495" className="text-primary font-semibold">(530) 999-7495</a><br />
                  CSLB License No. 1135995
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
