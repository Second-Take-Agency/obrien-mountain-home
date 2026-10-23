import { FAQItem } from './faqs';

/**
 * Build a FAQPage schema block from a page's own FAQ set.
 *
 * Each page passes its own items, so no two pages emit identical FAQ markup —
 * duplicating one FAQPage block across many URLs is a common reason Google
 * ignores it. Google also requires the marked-up Q&As to be visible on the page,
 * which they are: the accordion is force-mounted so answers stay in the DOM.
 */
export const buildFaqSchema = (items: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": items.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  })),
});

/**
 * Page-specific FAQs.
 *
 * The general set in `faqs.ts` answers "what does this company do" and suits the
 * homepage and service pages. These sets answer the question a visitor actually
 * has *on that particular page* — someone on /contact wants to know what happens
 * after they hit submit, not what fiber cement is.
 *
 * Each page emits its own FAQPage schema built from its own set, so no two pages
 * carry identical FAQ markup.
 *
 * WRITING RULES FOR THIS FILE
 *  - Only claims the site already makes elsewhere. No new promises.
 *  - No prices, cost ranges or discount figures.
 *  - No regulatory specifics (code sections, deadlines, programme terms) unless
 *    they are verified — those belong in the blog posts where they can be cited.
 *  - Answer honestly, including when the answer is "you don't need us for that".
 */

/** / — a first-time visitor sizing up the company: what we do, where, and how to start. */
export const homeFaqs: FAQItem[] = [
  {
    question: "What services does O'Brien Mountain Home offer?",
    answer:
      "Four: fire hardening, custom decking, residential siding and commercial siding. Most of our work is on existing homes in the North State — replacing ember-prone vents, building or resurfacing decks, and upgrading to durable siding such as fiber cement — along with siding work for property managers, general contractors and commercial owners. Each service has its own page with the detail.",
  },
  {
    question: "Where are you based, and which areas do you cover?",
    answer:
      "We are based in Redding, at 1308 Court St, and most of our work is in Redding, Red Bluff, Chico, Oroville, Paradise, Magalia and Mount Shasta, along with the smaller communities in between. That is where we work most, not a hard boundary — if you are elsewhere in Northern California, ask and we will tell you straight whether we can take the job.",
  },
  {
    question: "Why do material choices matter so much for homes in Northern California?",
    answer:
      "Homes here deal with sustained summer heat, strong sun, smoke seasons, wildfire risk and seasonal rain, and a material that suits a milder climate can fail early or add to a home's fire exposure. We help you choose practical materials for these conditions and use Class A-rated options where possible, so the work holds up and you are not paying to do it twice.",
  },
  {
    question: "What current offers do you have?",
    answer:
      "Three at the moment: a first-time customer discount on qualifying projects, project bundling when you combine siding and decking work, which often reduces the total cost, and a free fire hardening inspection. Mention the offer when you request your estimate and we will confirm whether your project qualifies before you commit to anything.",
  },
  {
    question: "How does a project work, from first call to finished job?",
    answer:
      "Four steps. We assess the home and listen to the problem, then give you an honest, clear estimate based on the scope and material options. If you go ahead, we install with regular communication and attention to detail, and finish by walking through the work with you to make sure you are happy before the job is closed out.",
  },
  {
    question: "Are you licensed?",
    answer:
      "Yes. O'Brien Mountain Home is a licensed California contractor, licence number 1135995. You can verify it through the Contractors State License Board at www.cslb.ca.gov.",
  },
];

/** /about — who we are, and whether we can be trusted with the work. */
export const aboutFaqs: FAQItem[] = [
  {
    question: "Who runs O'Brien Mountain Home?",
    answer:
      "Marcus Crans founded the company. He is a North State native and a graduate of Simpson University in Redding, and the son of a forester who worked in Shingletown, so he grew up around the natural fire cycle and the risks that come with it. After witnessing the Carr Fire and then planning his own home in the O'Brien Mountain Estates above Shasta Lake, he built the business around helping local homeowners make their properties more resilient.",
  },
  {
    question: "Are you a licensed California contractor?",
    answer:
      "Yes. O'Brien Mountain Home holds California contractor licence number 1135995. You can verify it, and check the status of any California contractor, through the Contractors State License Board at www.cslb.ca.gov. We would encourage you to check ours and anyone else's you are considering.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We work throughout Northern California from our base in Redding, concentrated in Shasta, Tehama, Butte and Siskiyou counties — Redding, Red Bluff, Chico, Oroville, Paradise, Magalia and Mount Shasta, along with the smaller communities in between. That is where most of our work is, not a boundary: we take on projects elsewhere in the North State where the scope justifies the trip. If you are not sure, call us and we will tell you straight rather than leave you waiting on a quote that was never coming.",
  },
  {
    question: "What makes you different from other exterior contractors?",
    answer:
      "We are built specifically around fire hardening rather than treating it as an add-on. That shapes what we recommend: we think about how a material choice affects your home's resilience, not only how it looks. We also live in the region we serve, so the conditions we design for — the heat, the smoke seasons, the wildfire exposure — are the ones we live with ourselves.",
  },
  {
    question: "Do you work on both homes and commercial buildings?",
    answer:
      "Yes. Alongside residential siding, decking and fire hardening, we work with general contractors, property managers and commercial property owners on larger exteriors, including retail, offices, multi-unit residential and other facilities. We provide itemised bids with defined scope so a GC or PM can plan against them.",
  },
];

/** /contact — what happens after you press submit. */
export const contactFaqs: FAQItem[] = [
  {
    question: "How quickly will you get back to me?",
    answer:
      "We reply within 24 business hours. If your enquiry comes in over a weekend or a holiday, that means the next working day. If you would rather not wait, call us on (530) 999-7495 and you will usually reach someone directly.",
  },
  {
    question: "Do you charge for an estimate?",
    answer:
      "No. Estimates are free and there is no obligation attached to requesting one. We would rather walk a property and tell you honestly that it does not need the work than sell you something you did not need.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "We get in touch to understand the project, then arrange a time to look at the property. After that walk-through you get a clear, itemised estimate covering scope and material options. Nothing is binding until you have a written estimate and you have signed it.",
  },
  {
    question: "What should I have ready before we talk?",
    answer:
      "Nothing formal. It helps if you know roughly when you would like the work done and whether you are solving a specific problem — a failing deck, damaged siding, an insurance requirement — or planning a wider upgrade. Photos are useful but not necessary; we will look at the property ourselves.",
  },
  {
    question: "Can I get a free fire hardening assessment?",
    answer:
      "Yes. We offer a free vulnerability assessment for Northern California homeowners. We walk the property, look at the areas embers actually exploit — vents, decks, gutters, cladding — and give you an honest picture of the risk areas and what it would take to address them. There is no pressure to book work off the back of it.",
  },
];

/** /portfolio — questions prompted by looking at completed work. */
export const portfolioFaqs: FAQItem[] = [
  {
    question: "Are these your own projects?",
    answer:
      "Yes. Every project shown here is work our own crews completed, photographed on site. We do not use stock imagery or manufacturer photography to represent our work.",
  },
  {
    question: "Can you match the style of an existing home?",
    answer:
      "Usually, yes. Siding profiles, trim details and deck detailing can be specified to sit with what is already there, which matters most when we are replacing part of an exterior rather than all of it. Where an exact match is not available — because a product has been discontinued, for example — we will tell you before the work starts rather than after.",
  },
  {
    question: "Do you take on both small repairs and full replacements?",
    answer:
      "Both. Some of the work here is a whole-home re-clad or a full deck rebuild; other projects are targeted — replacing vents, screening under a deck, repairing damaged siding sections. Starting small is often the sensible route, particularly with fire hardening, where a few contained upgrades address most of the risk.",
  },
  {
    question: "Can I speak to a previous customer?",
    answer:
      "Ask us and we will do our best to arrange it. We would rather you spoke to someone who has had the work done than take our word for it. You can also read our reviews on our Google Business Profile.",
  },
  {
    question: "How long does a project like these take?",
    answer:
      "It depends on scope, access and what we find once existing material comes off — water damage behind old siding is common and has to be dealt with before anything new goes on. We give you a realistic timeline with the estimate rather than an optimistic one, and we tell you if it changes.",
  },
];

/** /fire-hardening-checklist — questions about the checklist and the offer. */
export const checklistFaqs: FAQItem[] = [
  {
    question: "Is the checklist really free?",
    answer:
      "Yes. The full checklist is on this page and you are welcome to work through it without giving us anything. If you would like a copy to keep, fill in the form and we will send one over.",
  },
  {
    question: "Do I need a contractor for everything on the list?",
    answer:
      "No, and we would rather be straight about that. A good part of it is yard work and maintenance you can do yourself — clearing debris, cleaning gutters, moving firewood away from the house. What genuinely needs a contractor is the construction side: replacing vents, changing cladding, screening or enclosing a deck underside. We will tell you which is which when we walk the property.",
  },
  {
    question: "Where should I start if I can only do one thing?",
    answer:
      "For most homes, the vents. Standard louvered vents let wind-blown embers straight into an attic or crawlspace, and replacing them with ember-resistant units is a relatively contained project with a large effect on risk. After that, the space beneath a deck is usually the next priority.",
  },
  {
    question: "Can I harden an older home, or is this only for new builds?",
    answer:
      "Most of the fire hardening we do is on existing homes. Older properties often have exactly the vulnerabilities this checklist covers — standard vents, wood decks, combustible siding — and they can be upgraded in phases rather than all at once. You do not have to do everything in one go.",
  },
  {
    question: "What happens if I fill in the form?",
    answer:
      "We send you the checklist, and we may follow up once to ask whether you would like a free vulnerability assessment. That is it. No pressure and no sales sequence. If you just wanted the checklist, that is completely fine.",
  },
];

/** /locations — questions about where we work and whether that includes you. */
export const locationsFaqs: FAQItem[] = [
  {
    question: "What areas do you cover?",
    answer:
      "We work throughout Northern California from our base in Redding. Most of our work is in Shasta, Tehama, Butte and Siskiyou counties, and the pages here cover Redding, Red Bluff, Chico, Oroville, Paradise, Magalia and Mount Shasta plus the smaller communities in between. Those pages are where our work is concentrated rather than a line on a map — we have completed projects further out, including fire hardening at Lake Almanor. If your town is not listed, call us and we will tell you straight rather than leave you waiting on a quote that was never coming.",
  },
  {
    question: "Do you charge more for work further from Redding?",
    answer:
      "Distance is one of the things we account for when we put an estimate together, along with access, scope and what we find on site. You will see the whole thing itemised before you commit to anything, and we will tell you up front if a location makes a project impractical rather than pricing it so high that it amounts to the same thing.",
  },
  {
    question: "Why do you have a page for each town?",
    answer:
      "Because the answer genuinely differs by town. Paradise and Magalia sit under defensible space rules that Redding homeowners are not dealing with in the same way. Redding's sustained summer heat punishes materials that hold up fine in Mount Shasta. The county you are in determines which building department and fire authority you deal with. A single page covering all of it would be vaguer than any of them.",
  },
  {
    question: "Do you work outside these counties?",
    answer:
      "Yes, where the project justifies the trip. Our fire hardening work at Lake Almanor in Plumas County is one example, and it is no further from Redding than Oroville, which we cover as a matter of course. Ask us about your property and we will give you an honest answer rather than a maybe.",
  },
  {
    question: "Which service areas have the highest wildfire risk?",
    answer:
      "Risk is set by your specific property — its slope, vegetation, construction and access — more than by which town it sits in, and every community we serve has parcels in elevated hazard areas. Rather than rank towns, we would rather walk your property. We offer a free vulnerability assessment across Northern California and will give you an honest picture of where your risk actually sits.",
  },
];

/** /blog — questions about the guidance itself. */
export const blogFaqs: FAQItem[] = [
  {
    question: "Who writes these articles?",
    answer:
      "Marcus Crans, founder of O'Brien Mountain Home and a licensed California contractor (Lic# 1135995). They are written from work we actually do in this region rather than assembled from general industry copy.",
  },
  {
    question: "Is this advice specific to Northern California?",
    answer:
      "Deliberately, yes. Materials and methods that work elsewhere do not always suit the North State — the sustained summer heat, the UV exposure, the smoke seasons and the wildfire risk all change what holds up. Where an article is about a particular town or county, that is because the answer genuinely differs there.",
  },
  {
    question: "Building codes and rules change. How current is this?",
    answer:
      "We update articles covering regulations when the rules move, and each post carries its publication date so you can see how recent it is. Even so, treat what you read here as general information: requirements vary by property and county, and you should confirm anything that affects a permit or an insurance decision with your building department, fire authority or insurer.",
  },
  {
    question: "Can you write about something I am trying to figure out?",
    answer:
      "Please ask. A lot of what is here started as a question a homeowner put to us on a job. Call (530) 999-7495 or send us a message and we will either answer it directly or write it up properly.",
  },
];
