import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Flame, Shield, Download, Phone, Star, ArrowRight, FileText, Home, Lock, Eye, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleReviews from '@/components/GoogleReviews';
import { useParallax } from '@/hooks/useParallax';

const HERO_BG = "https://vibe.filesafe.space/1777345871363473576/assets/c61746e8-5d99-4de6-b01e-617ccd3a6acb.png";
const CHECKLIST_IMG = "https://vibe.filesafe.space/1777345871363473576/assets/ac2f203b-87bd-4609-aefe-ae6e1ea4fbcf.png";

const checklistItems = [
  {
    category: "Vents & Openings",
    icon: <Home className="w-5 h-5" />,
    color: "bg-red-50 border-red-200",
    iconColor: "text-red-500",
    items: [
      "Replace standard vents with ember-resistant or Vulcan vents",
      "Screen all soffit, eave, and foundation vents with 1/16\" wire mesh",
      "Seal attic and crawl space openings against ember intrusion",
      "Inspect garage door seals for gaps",
    ],
  },
  {
    category: "Deck & Underfloor",
    icon: <Shield className="w-5 h-5" />,
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-500",
    items: [
      "Clear combustible material stored under deck",
      "Install skirting or ember mesh around deck perimeter",
      "Replace wood decking with composite or PVC where possible",
      "Check deck board gaps for debris accumulation",
    ],
  },
  {
    category: "Exterior Siding & Walls",
    icon: <Flame className="w-5 h-5" />,
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-500",
    items: [
      "Identify combustible siding sections (wood, vinyl) for replacement",
      "Check exterior wall cladding for gaps or unsealed penetrations",
      "Consider Class A-rated fiber cement siding options",
      "Inspect trim and fascia boards for weathering or damage",
    ],
  },
  {
    category: "Roof & Gutters",
    icon: <AlertTriangle className="w-5 h-5" />,
    color: "bg-yellow-50 border-yellow-200",
    iconColor: "text-yellow-600",
    items: [
      "Clean gutters and downspouts of all debris",
      "Install metal gutter covers to prevent debris accumulation",
      "Ensure roof material is Class A rated (tile, metal, composition)",
      "Seal all roof penetrations and valley areas",
    ],
  },
  {
    category: "Windows & Doors",
    icon: <Eye className="w-5 h-5" />,
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-500",
    items: [
      "Upgrade single-pane windows to tempered or multi-pane glass",
      "Check weatherstripping around all exterior doors",
      "Evaluate wood window frames for replacement with metal or vinyl",
      "Install spark arrestors on all chimneys",
    ],
  },
  {
    category: "Defensible Space",
    icon: <CheckCircle2 className="w-5 h-5" />,
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
    items: [
      "Zone 1 (0–30 ft): Clear dead plants, dry leaves, debris",
      "Zone 2 (30–100 ft): Reduce fuel — thin trees and shrubs",
      "Remove dead branches within 10 ft of the ground",
      "Store firewood at least 30 ft from the home",
    ],
  },
];

const FireHardeningChecklist = () => {
  const useParallaxRef = useParallax<HTMLImageElement>(0.35);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    hearAboutUs: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Valid email is required';
    if (!formData.phone.trim()) e.phone = 'Phone number is required';
    if (!formData.consent) e.consent = 'Please agree to be contacted';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    try {
      // TODO: CRM tracking integration — wire up with trackingId and locationId
      // Custom fields to include:
      //   { id: "HzrIDXhe8qHebRN3Qm9T", key: "contact.how_did_you_hear_about_us", field_value: formData.hearAboutUs }
      //   { id: "CZY1S2u96d4QLy93QZdU", key: "contact.checklist_download_source", field_value: "Fire Hardening Checklist Page" }
      await new Promise(r => setTimeout(r, 900));
      setSubmitted(true);
      // TODO: Trigger PDF download after successful submission
      // window.open('/assets/fire-hardening-checklist.pdf', '_blank');
    } finally {
      setLoading(false);
    }
  };

  const checklistSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Free Fire Hardening Checklist | O'Brien Mountain Home",
      "description": "Download the free Northern California Fire Hardening Checklist. Identify ember entry points, vent vulnerabilities, and exterior risks on your home.",
      "url": "https://obrienmountainhome.com/fire-hardening-checklist",
      "isPartOf": {
        "@type": "WebSite",
        "name": "O'Brien Mountain Home",
        "url": "https://obrienmountainhome.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Northern California Home Fire Hardening Checklist",
      "description": "A category-by-category checklist to identify and reduce wildfire vulnerability in your Northern California home.",
      "numberOfItems": checklistItems.length,
      "itemListElement": checklistItems.map((cat, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": cat.category,
        "description": cat.items.join(". ")
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://obrienmountainhome.com" },
        { "@type": "ListItem", "position": 2, "name": "Fire Hardening Checklist", "item": "https://obrienmountainhome.com/fire-hardening-checklist" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free Fire Checklist Download | O'Brien Mountain Home"
        description="Download the free Northern California Fire Hardening Checklist. Identify ember entry points, vent vulnerabilities, and exterior risks on your home."
        canonical="https://obrienmountainhome.com/fire-hardening-checklist"
        schema={checklistSchemas}
      />
      <Header />

      <main>
        {/* ─── Hero ─── */}
        <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={HERO_BG}
              alt="Northern California mountain home at golden hour — fire hardening checklist"
              className="w-full h-full object-cover scale-110 origin-center will-change-transform"
              ref={useParallaxRef}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-900/80 to-slate-900/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10 py-24">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 text-primary text-sm font-semibold mb-6">
                <Download className="w-4 h-4" />
                Free Download — No Spam, Ever
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white [text-shadow:_0_2px_8px_rgba(0,0,0,0.5)]">
                Free Fire Checklist Download for Northern California Homeowners
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed [text-shadow:_0_1px_4px_rgba(0,0,0,0.3)]">
                Most homes don't burn from walls of flame — they ignite from ember entry through vents, gaps, and combustible materials. This checklist walks you through every vulnerable area so you know exactly where to focus first.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "6 critical areas of ember vulnerability",
                  "Simple language — no contractor jargon",
                  "Built for Redding, Paradise, Chico, and surrounding North State communities",
                  "Paired with a free, no-pressure vulnerability assessment offer",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-base font-medium text-slate-100 [text-shadow:_0_1px_3px_rgba(0,0,0,0.4)]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3">
                <a href="#get-checklist" className="inline-flex items-center gap-2 bg-primary text-slate-900 font-bold px-8 py-4 rounded-full text-lg hover:bg-primary/90 transition-colors">
                  <Download className="w-5 h-5" />
                  Get the Free Checklist
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Social Proof Strip ─── */}
        <div className="bg-slate-800 py-5 border-y border-slate-700">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-8 text-slate-300 text-sm font-medium">
              {[
                { icon: <Star className="w-4 h-4 text-primary" />, text: "5-Star Google Rated" },
                { icon: <Shield className="w-4 h-4 text-primary" />, text: "Licensed CA Contractor — Lic# 1135995" },
                { icon: <Flame className="w-4 h-4 text-primary" />, text: "Fire Hardening Specialists" },
                { icon: <CheckCircle2 className="w-4 h-4 text-primary" />, text: "Serving Northern California Since 2025" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">{item.icon}<span>{item.text}</span></div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Checklist Preview + Form ─── */}
        <section id="get-checklist" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Inside the Checklist?</h2>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                  A practical, room-by-room look at the six areas where most Northern California homes are most vulnerable to ember intrusion.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Checklist Preview */}
                <div className="space-y-4">
                  {checklistItems.map((section) => (
                    <div key={section.category} className={`border rounded-2xl p-6 ${section.color}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className={section.iconColor}>{section.icon}</span>
                        <h3 className="font-bold text-slate-900 text-lg">{section.category}</h3>
                        <span className="ml-auto text-xs font-bold text-slate-500 bg-white/70 rounded-full px-3 py-1">
                          {section.items.length} items
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                            <div className="w-5 h-5 border-2 border-slate-300 rounded mt-0.5 shrink-0 bg-white" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Blurred teaser */}
                  <div className="relative border rounded-2xl p-6 bg-slate-100 border-slate-200 overflow-hidden">
                    <div className="absolute inset-0 backdrop-blur-sm bg-slate-100/60 flex flex-col items-center justify-center z-10">
                      <Lock className="w-8 h-8 text-slate-400 mb-2" />
                      <p className="text-sm font-semibold text-slate-600">Unlock 2 more sections — free</p>
                    </div>
                    <div className="opacity-20 pointer-events-none">
                      <h3 className="font-bold text-slate-900 text-lg mb-3">Bonus Section</h3>
                      <ul className="space-y-2">
                        {["Hidden item 1", "Hidden item 2", "Hidden item 3"].map((i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <div className="w-5 h-5 border-2 border-slate-300 rounded mt-0.5 shrink-0" />
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Opt-In Form */}
                <div className="lg:sticky lg:top-28">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={CHECKLIST_IMG}
                      alt="O'Brien Mountain Home Fire Hardening Checklist document preview"
                      className="w-20 h-28 object-cover rounded-xl shadow-lg"
                      loading="lazy"
                    />
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-primary text-primary" />)}
                      </div>
                      <p className="text-sm font-semibold text-slate-700">Free — Instant Access</p>
                      <p className="text-xs text-slate-500">PDF checklist for Northern CA homeowners</p>
                    </div>
                  </div>

                  {submitted ? (
                    <div className="bg-white rounded-3xl p-10 text-center shadow-xl border border-green-100">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">You're all set!</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Your Fire Hardening Checklist is on its way to your inbox. Check your email — and check your spam folder if you don't see it within a few minutes.
                      </p>
                      <div className="bg-primary/10 border border-primary/20 rounded-2xl p-5 text-left mb-6">
                        <div className="flex items-start gap-3">
                          <Flame className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <div>
                            <p className="font-bold text-slate-800 text-sm mb-1">Want a free walk-through?</p>
                            <p className="text-slate-600 text-sm">We offer free vulnerability assessments for Northern California homeowners. No pressure — just an honest look at your home's risk areas.</p>
                          </div>
                        </div>
                      </div>
                      <Button asChild className="w-full rounded-full bg-primary text-slate-900 font-bold hover:bg-primary/90 hover:text-slate-900">
                        <Link to="/contact">Book a Free Assessment</Link>
                      </Button>
                      <p className="mt-4 text-xs text-slate-400">Or call us: <a href="tel:5309997495" className="font-semibold hover:text-primary transition-colors">(530) 999-7495</a></p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 space-y-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <FileText className="w-5 h-5 text-primary" />
                          <h3 className="text-xl font-bold text-slate-900">Get the Free Checklist</h3>
                        </div>
                        <p className="text-slate-500 text-sm">Enter your info below and we'll send it right over.</p>
                      </div>

                      {/* Name */}
                      <div>
                        <label htmlFor="cl-name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="cl-name"
                          type="text"
                          placeholder="Jane Smith"
                          required
                          value={formData.name}
                          onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                          className={`w-full border rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm transition-colors ${errors.name ? 'border-red-400' : 'border-slate-200'}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="cl-email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="cl-email"
                          type="email"
                          placeholder="jane@example.com"
                          required
                          value={formData.email}
                          onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                          className={`w-full border rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm transition-colors ${errors.email ? 'border-red-400' : 'border-slate-200'}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="cl-phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="cl-phone"
                          type="tel"
                          placeholder="(530) 000-0000"
                          required
                          value={formData.phone}
                          onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                          className={`w-full border rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm transition-colors ${errors.phone ? 'border-red-400' : 'border-slate-200'}`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>

                      {/* City */}
                      <div>
                        <label htmlFor="cl-city" className="block text-sm font-semibold text-slate-700 mb-1.5">City / Location</label>
                        <input
                          id="cl-city"
                          type="text"
                          placeholder="Redding, Paradise, Chico…"
                          value={formData.city}
                          onChange={e => setFormData(p => ({ ...p, city: e.target.value }))}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
                        />
                      </div>

                      {/* How did you hear */}
                      <div>
                        <label htmlFor="cl-hear" className="block text-sm font-semibold text-slate-700 mb-1.5">How did you hear about us?</label>
                        <select
                          id="cl-hear"
                          value={formData.hearAboutUs}
                          onChange={e => setFormData(p => ({ ...p, hearAboutUs: e.target.value }))}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm bg-white"
                          data-custom-field="HzrIDXhe8qHebRN3Qm9T"
                        >
                          <option value="">Select one</option>
                          <option value="Google">Google</option>
                          <option value="Facebook">Facebook</option>
                          <option value="Friend or Referral">Friend or Referral</option>
                          <option value="Event">Event</option>
                          <option value="Fire Voucher Program">Fire Voucher Program</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Consent */}
                      <div>
                        <label className={`flex items-start gap-3 cursor-pointer ${errors.consent ? 'text-red-500' : 'text-slate-600'}`}>
                          <input
                            type="checkbox"
                            checked={formData.consent}
                            onChange={e => setFormData(p => ({ ...p, consent: e.target.checked }))}
                            className="mt-0.5 w-4 h-4 accent-primary shrink-0"
                          />
                          <span className="text-xs leading-relaxed">
                            By submitting this form, you agree to be contacted by O'Brien Mountain Home about your project and to receive the Fire Hardening Checklist. Message and data rates may apply. Reply STOP to opt out.
                          </span>
                        </label>
                        {errors.consent && <p className="text-red-500 text-xs mt-1 ml-7">{errors.consent}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-slate-900 font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors text-base disabled:opacity-70 flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2"><span className="animate-spin inline-block w-4 h-4 border-2 border-slate-900/30 border-t-slate-900 rounded-full" />Sending…</span>
                        ) : (
                          <><Download className="w-5 h-5" /> Send Me the Checklist</>
                        )}
                      </button>

                      <div className="flex items-center gap-2 text-xs text-slate-400 justify-center">
                        <Lock className="w-3 h-3" />
                        Your info stays private. No spam, ever.
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Why Fire Hardening Matters ─── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Northern California Homes Need This</h2>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                  The Carr Fire, Camp Fire, and dozens of smaller wildfires have shown us the same pattern over and over.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    stat: "90%",
                    label: "of homes lost to wildfire",
                    detail: "ignite from embers — not direct flame contact. The fire doesn't have to reach your door to destroy your home.",
                    color: "text-red-500",
                  },
                  {
                    stat: "6",
                    label: "primary vulnerability zones",
                    detail: "every home has — vents, eaves, deck areas, windows, gutters, and exterior cladding — all of which can be addressed with the right materials.",
                    color: "text-primary",
                  },
                  {
                    stat: "100%",
                    label: "free — no obligation",
                    detail: "This checklist is a starting point. We want you to understand your home's risk before we ever talk about a project.",
                    color: "text-green-600",
                  },
                ].map((item) => (
                  <div key={item.stat} className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className={`text-5xl font-extrabold mb-2 ${item.color}`}>{item.stat}</div>
                    <div className="font-bold text-slate-800 text-lg mb-3">{item.label}</div>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              {/* Context block */}
              <div className="bg-slate-800 rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                  <div className="md:w-2/3">
                    <div className="flex items-center gap-2 mb-4">
                      <Flame className="w-5 h-5 text-primary" />
                      <span className="text-primary font-bold text-sm uppercase tracking-wider">A Note from Marcus</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-lg mb-4">
                      "After the Carr Fire, I started researching what actually causes homes to ignite — and the science was clear: ember intrusion through small vulnerable openings is the leading cause. Most of it is preventable with the right upgrades."
                    </p>
                    <p className="text-slate-400 text-sm">— Marcus Crans, Founder, O'Brien Mountain Home</p>
                  </div>
                  <div className="md:w-1/3 text-center">
                    <Button asChild className="rounded-full bg-primary text-slate-900 font-bold hover:bg-primary/90 hover:text-slate-900 px-8">
                      <Link to="/about">Meet Marcus</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── What Happens After You Download ─── */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Happens After You Download</h2>
              <p className="text-slate-600 text-lg">No surprises. Here's exactly what to expect.</p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "You get the checklist",
                  body: "It goes to your inbox within a few minutes. It's a PDF you can print and use on your own walk-through — no login required.",
                },
                {
                  step: "02",
                  title: "We may follow up once",
                  body: "We'll send a single, friendly follow-up to ask if you'd like a free in-person vulnerability assessment. No pressure, no sales pitch.",
                },
                {
                  step: "03",
                  title: "You're in control",
                  body: "If you want a professional assessment or estimate, we're here. If you just needed the checklist, that's totally fine too.",
                },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm text-center">
                  <div className="text-4xl font-extrabold text-primary/30 mb-4">{item.step}</div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Related Services CTA ─── */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,#f6ad56_0px,#f6ad56_1px,transparent_1px,transparent_60px)]" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 text-primary text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Ready to Take Action?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              We Can Walk Through Your Home With You
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              The checklist is a great start. If you want a professional set of eyes on your home's specific vulnerabilities, we offer free assessments across Northern California.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8 bg-primary text-slate-900 font-bold hover:bg-primary/90 hover:text-slate-900">
                <Link to="/contact" className="flex items-center gap-2">
                  Book a Free Assessment <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-slate-600 text-slate-200 hover:bg-primary hover:text-slate-900 hover:border-primary font-bold">
                <Link to="/services/fire-hardening">Explore Fire Hardening</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 text-sm">
              <Phone className="w-4 h-4" />
              Or call: <a href="tel:5309997495" className="text-slate-300 font-semibold hover:text-primary transition-colors">(530) 999-7495</a>
            </div>
          </div>
        </section>
        <GoogleReviews />
      </main>

      <Footer />
    </div>
  );
};

export default FireHardeningChecklist;
