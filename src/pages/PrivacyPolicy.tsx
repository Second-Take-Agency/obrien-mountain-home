import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * NOT LEGAL ADVICE — HAVE AN ATTORNEY REVIEW BEFORE RELYING ON THIS.
 *
 * This replaces a ~180-word policy that did not describe what the site actually
 * does. The most important addition: form submissions are transmitted to
 * GoHighLevel, a third-party platform. The previous policy never disclosed that
 * personal information leaves the business at all.
 *
 * FOUR THINGS AN ATTORNEY SHOULD DECIDE
 *  1. Whether CCPA/CPRA thresholds apply. They attach above statutory limits
 *     (revenue, volume of consumers' personal information, or share of revenue
 *     from selling/sharing it). A contractor this size may fall below all of
 *     them. Section 8 is written to offer the rights without asserting that the
 *     business is a "business" as the statute defines it — safe either way, but
 *     an attorney may want it tightened or removed.
 *  2. RETENTION PERIODS. Section 6 deliberately does not state how long enquiry
 *     records or project records are kept — the business reviewed the draft and
 *     chose to omit both rather than publish periods it might not follow. The
 *     section still covers marketing contacts and server logs. If a reviewer
 *     wants the gap closed without committing to a number, the usual wording is
 *     that information is kept no longer than necessary for the purposes
 *     described and as required by law.
 *  3. Whether to name GoHighLevel explicitly, as done here, or describe it by
 *     category only. Both are defensible; naming is more transparent.
 *  4. Whether anything here conflicts with California home improvement contract
 *     requirements, which live in the construction contract rather than here.
 *
 * KEEP IN STEP WITH THE SITE
 *  - Section 7 states there is no advertising/analytics tracking. That is true
 *    as of the date below. IF ANALYTICS OR AD PIXELS ARE EVER ADDED, THIS PAGE
 *    MUST BE UPDATED BEFORE THEY GO LIVE.
 *  - Section 4 lists GoHighLevel because that is where the forms post. If the
 *    webhook target changes, change this too.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// Update whenever the text below changes.
const LAST_UPDATED = '8 September 2026';
/** Same date, machine-readable, for the WebPage schema's dateModified. */
const LAST_UPDATED_ISO = '2026-09-08';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Privacy Policy"
        description="How O’Brien Mountain Home collects, uses, shares and protects your personal information, and the choices you have."
        canonical="/privacy-policy"
        /* These two pages were the only ones on the site emitting no structured
           data at all. dateModified matters here specifically: it is how a
           policy page signals that its terms are current. */
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "url": "https://obrienmountainhome.com/privacy-policy",
            "description": "How O'Brien Mountain Home collects, uses, shares and protects your personal information, and the choices you have.",
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
              { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://obrienmountainhome.com/privacy-policy" }
            ]
          }
        ]}
        robots="noindex,follow"
      />

      <Header />

      <main>
        <section className="relative pt-32 pb-16 bg-slate-900">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-slate-300 text-sm">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-slate max-w-none space-y-10">

              <section>
                <p className="text-lg text-slate-700 leading-relaxed">
                  This policy explains what personal information O’Brien Mountain Home collects
                  through obrienmountainhome.com, how we use it, who we share it with, and the
                  choices you have. We have tried to write it plainly rather than defensively.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">1. Who We Are</h2>
                <p>
                  O’Brien Mountain Home (“we”, “us”, “our”) is a licensed California contractor,
                  CSLB License No. 1135995, providing fire hardening, siding, decking and related
                  exterior services across Northern California.
                </p>
                <p className="mt-4">
                  1308 Court St, Redding, CA 96001<br />
                  <a href="mailto:admin@obrienmountainhome.com" className="text-primary font-semibold">admin@obrienmountainhome.com</a><br />
                  <a href="tel:+15309997495" className="text-primary font-semibold">(530) 999-7495</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>

                <h3 className="text-lg font-bold mt-6 mb-2">Information you give us</h3>
                <p>When you request an estimate, request our fire hardening checklist, or contact us, we collect:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><strong>Identifiers</strong> — your name, email address and phone number</li>
                  <li><strong>Location information</strong> — the city or property location you provide</li>
                  <li><strong>Commercial information</strong> — the service you are interested in, and how you heard about us</li>
                  <li><strong>Anything you write</strong> in a message field</li>
                </ul>
                <p className="mt-3">You choose what to provide. If you leave a field blank, we do not collect it.</p>

                <h3 className="text-lg font-bold mt-6 mb-2">Information collected automatically</h3>
                <p>
                  Our website is hosted by a third-party provider whose servers record standard
                  technical information — IP address, browser and device type, referring page and
                  pages visited — for security, reliability and troubleshooting.
                </p>

                <h3 className="text-lg font-bold mt-6 mb-2">What we do not collect</h3>
                <p>
                  We do not knowingly collect Social Security numbers, driver’s licence numbers,
                  financial account or payment card details, precise geolocation, biometric
                  information or health information through this website.{' '}
                  <strong>Please do not send sensitive information through the website forms.</strong>{' '}
                  If a project requires it, we will arrange a secure method.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To respond to your enquiry and prepare an estimate</li>
                  <li>To contact you about your project by phone, SMS or email</li>
                  <li>To schedule and carry out work you have engaged us for</li>
                  <li>To send material you specifically requested, such as our fire hardening checklist</li>
                  <li>To send occasional marketing communications, where you have opted in</li>
                  <li>To keep records required for our business, insurance and licensing obligations</li>
                  <li>To improve our website and services</li>
                  <li>To detect and prevent fraud, abuse and security issues</li>
                  <li>To comply with applicable law</li>
                </ul>
                <p className="mt-4">
                  We do not use your information for automated decision-making that produces legal
                  or similarly significant effects.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. How We Share Your Information</h2>
                <p className="font-semibold text-slate-900">
                  We do not sell your personal information, and we do not share it for
                  cross-context behavioural advertising.
                </p>

                <h3 className="text-lg font-bold mt-6 mb-2">Service providers</h3>
                <p>
                  When you submit a form on this website, your details are transmitted to and
                  stored by our customer relationship platform, <strong>GoHighLevel</strong>, which
                  is operated by a third party outside our own systems. We use it to receive and
                  manage enquiries and to send you material you asked for.
                </p>
                <p className="mt-3">We also rely on providers for:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><strong>Website hosting and content delivery</strong> — technical data such as IP address and request logs</li>
                  <li><strong>Email and SMS delivery</strong> — your name, email address and phone number</li>
                </ul>
                <p className="mt-3">
                  These providers are permitted to use your information only to perform services
                  for us.
                </p>

                <h3 className="text-lg font-bold mt-6 mb-2">Others</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Subcontractors and suppliers</strong> — where a project requires it, and
                    limited to what is relevant
                  </li>
                  <li>
                    <strong>Professional advisers</strong> — our insurers, legal and accounting advisers
                  </li>
                  <li>
                    <strong>Legal and safety</strong> — where we believe in good faith that disclosure
                    is required by law or necessary to protect the rights, property or safety of any person
                  </li>
                  <li>
                    <strong>Business transfer</strong> — if our business is sold or reorganised,
                    information may transfer as part of that transaction
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. SMS and Telephone Communications</h2>
                <p>
                  By providing your phone number and submitting a form, you consent to be contacted
                  by O’Brien Mountain Home about your project by phone call and SMS text message,
                  including through automated means where applicable.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Message frequency varies. Message and data rates may apply.</li>
                  <li><strong>Reply STOP</strong> to any SMS to opt out of further messages.</li>
                  <li><strong>Reply HELP</strong> for assistance, or contact us using the details above.</li>
                  <li>
                    Opting out of marketing messages does not stop messages that are necessary for a
                    project you have engaged us for.
                  </li>
                  <li>Consent to receive marketing messages is <strong>not a condition of purchase</strong>.</li>
                </ul>
                <p className="mt-4">
                  We do not sell or share your phone number with third parties for their own
                  marketing purposes. Mobile opt-in data and consent are not shared with third
                  parties except the service providers who deliver messages on our behalf.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. How Long We Keep Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Marketing contacts</strong> — until you opt out, after which we keep a suppression record so we do not contact you again</li>
                  <li><strong>Website server logs</strong> — as retained by our hosting provider, typically a short period</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Cookies and Similar Technologies</h2>
                <p>
                  We use cookies and similar technologies that are necessary for the website to
                  function correctly and to remain secure. Most browsers let you refuse or delete
                  cookies through their settings; disabling them may affect how parts of the site work.
                </p>
                <p className="mt-4">
                  We do not currently use this website to serve targeted advertising, and we do not
                  track visitors across other websites. If that changes, we will update this policy
                  before doing so. Because we do not track across sites for advertising, we do not
                  respond to browser “Do Not Track” signals in a distinct way.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Your Choices and Rights</h2>
                <p>Wherever you live, you may:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><strong>Ask what we hold</strong> about you</li>
                  <li><strong>Ask us to correct</strong> inaccurate information</li>
                  <li><strong>Ask us to delete</strong> information, subject to records we are required to keep</li>
                  <li><strong>Opt out of marketing</strong> at any time — reply STOP to an SMS, use the unsubscribe link in an email, or contact us</li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-2">California residents</h3>
                <p>
                  California law gives residents rights in relation to personal information, which
                  may include the right to know what is collected and how it is used, to request
                  deletion, to request correction, to opt out of the sale or sharing of personal
                  information, to limit the use of sensitive personal information, and not to
                  receive discriminatory treatment for exercising those rights.
                </p>
                <p className="mt-4">
                  <strong>
                    We do not sell or share personal information as those terms are used in
                    California privacy law
                  </strong>
                  , and we do not collect the categories of sensitive personal information to which
                  use-limitation rights would apply.
                </p>
                <p className="mt-4">
                  To make a request, contact us using the details in Section 1. We will verify your
                  identity before responding, usually by confirming information we already hold. You
                  may use an authorised agent, in which case we may require proof of their authority.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Security</h2>
                <p>
                  We take reasonable measures to protect the information we hold, including serving
                  this website over HTTPS and using reputable service providers. No method of
                  transmission or storage is completely secure, and we cannot guarantee absolute
                  security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Children’s Privacy</h2>
                <p>
                  This website is intended for adults. We do not knowingly collect personal
                  information from children under 13. If you believe a child has provided us with
                  personal information, contact us and we will delete it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Third-Party Websites</h2>
                <p>
                  Our website links to third-party sites, including manufacturer and industry
                  organisation websites and our Google Business Profile. We are not responsible for
                  their content or privacy practices. Please review their policies separately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Changes to This Policy</h2>
                <p>
                  We may update this policy. The “Last updated” date at the top will change, and
                  material changes will be made prominent on this page. Continued use of the website
                  after an update means you accept the revised policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
                <p>
                  Questions, requests or complaints about this policy:
                </p>
                <p className="mt-4">
                  <strong>O’Brien Mountain Home</strong><br />
                  1308 Court St, Redding, CA 96001<br />
                  <a href="mailto:admin@obrienmountainhome.com" className="text-primary font-semibold">admin@obrienmountainhome.com</a><br />
                  <a href="tel:+15309997495" className="text-primary font-semibold">(530) 999-7495</a>
                </p>
                <p className="mt-6 text-sm text-slate-500">
                  See also our <Link to="/terms" className="text-primary font-semibold">Terms and Conditions</Link>.
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
