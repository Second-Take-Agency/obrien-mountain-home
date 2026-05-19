export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What does O'Brien Mountain Home do?",
    answer: "O'Brien Mountain Home is a licensed Northern California contractor (Lic# 1135995) specializing in four core services: fire hardening, custom decking, residential siding, and commercial siding. We help homeowners and property owners across Redding, Red Bluff, Chico, Oroville, Paradise, Magalia, and Mount Shasta protect and upgrade their homes with durable, fire-aware materials designed for North State conditions. Whether you need ember-resistant vents, a new deck, fiber cement siding, or help with a commercial property, we start with an honest assessment and a clear estimate before any work begins."
  },
  {
    question: "Do you install fire protection vents and Vulcan vents?",
    answer: "Yes. We install ember-resistant vents including Vulcan vents, which are specifically engineered to defend against wildfire ember intrusion — one of the most common ways homes ignite during a wildfire event. Vulcan vents use an intumescent honeycomb matrix that expands when exposed to high heat, blocking embers and hot gases from entering your attic, crawlspace, or under-floor areas. Standard louvered vents allow wind-blown embers to enter freely; ember-resistant vents dramatically reduce that risk. We assess your home's existing vent inventory, recommend the right product for your conditions, and install with attention to a proper seal and finish."
  },
  {
    question: "Do you build custom decks in Redding and Northern California?",
    answer: "Yes. We design and build custom decks for homeowners across Redding and Northern California, including decks suited for mountain views, elevated terrain, backyard entertaining, and fire-aware construction. We use durable decking materials including premium PVC, composite, and Fortress steel framing systems that are designed to reduce combustibility and withstand the heat, UV exposure, and seasonal temperature swings common in the North State. We also handle deck repairs, resurfacing, railing upgrades, and structural reinforcement for existing decks that need attention before they become a safety concern."
  },
  {
    question: "Do you install residential siding?",
    answer: "Yes. We provide full residential siding installation and repair for homeowners across Northern California. Our most commonly recommended product for this region is James Hardie fiber cement siding, which is non-combustible, highly durable, and handles heat, smoke, moisture, and sun exposure better than wood or vinyl over the long term. Fiber cement is also a key component of fire hardening your home's exterior, since replacing combustible wood siding with a non-combustible alternative reduces your home's overall fire vulnerability. We also install engineered wood and other durable options depending on the project and budget."
  },
  {
    question: "Do you work on commercial siding projects?",
    answer: "Yes. We provide commercial siding installation and repair for property managers, general contractors, developers, facility managers, and commercial property owners across Northern California. We work on a range of project types including retail buildings, multi-unit residential properties, commercial offices, and larger facility exteriors. We use fiber cement, metal, engineered wood, and composite systems rated for commercial applications, and we provide clear, itemized bids with realistic timelines so GCs and PMs can plan accordingly."
  },
  {
    question: "Are you a licensed California contractor?",
    answer: "Yes. O'Brien Mountain Home is a fully licensed California contractor, Lic# 1135995. You can verify our license through the California Contractors State License Board (CSLB) at www.cslb.ca.gov. We maintain our license in good standing and operate with the proper documentation, insurance, and professional standards required for both residential and commercial work in California."
  },
  {
    question: "What areas of Northern California do you serve?",
    answer: "We serve homeowners and property owners throughout Northern California, with our primary focus in the following communities: Redding (Shasta County), Red Bluff (Tehama County), Chico (Butte County), Oroville (Butte County), Paradise (Butte County), Magalia (Butte County), Mount Shasta (Siskiyou County), and the broader North State region. We are deeply committed to serving the Ridge communities of Paradise and Magalia given the ongoing recovery and rebuilding work following the Camp Fire. If you're located outside these areas but in Northern California, reach out — we may still be able to help."
  },
  {
    question: "How do I get an estimate?",
    answer: "Getting an estimate is simple. You can fill out our contact form on this website, or call us directly at (530) 999-7495. We'll ask you a few questions about your project, schedule a time to look at the home or property, and provide you with an honest, clear estimate based on your specific scope and material options. We don't give vague ballpark numbers over the phone without seeing the work first — we believe accurate estimates require an accurate look. We typically respond to form submissions within 24 business hours."
  },
  {
    question: "What is fire hardening and how does it protect my home?",
    answer: "Fire hardening is the process of making strategic, targeted improvements to a home's exterior to reduce its vulnerability to wildfire — particularly from wind-blown embers. Research from the Insurance Institute for Business & Home Safety (IBHS) and Cal Fire shows that most homes ignite during wildfires not from direct flame contact, but from embers landing on combustible surfaces or entering through small openings like vents, gaps, and gutters. Fire hardening addresses these weak points through steps like installing ember-resistant or Vulcan vents, protecting under-deck areas, replacing combustible siding with fiber cement, clearing combustible debris from gutters, and sealing gaps around windows and doors. It does not make a home 'fireproof,' but it significantly reduces the risk of ignition."
  },
  {
    question: "Do you serve Paradise and Magalia?",
    answer: "Yes, and these communities are personally important to us. O'Brien Mountain Home was founded with a deep awareness of what Northern California homeowners face after events like the Camp Fire. We work with homeowners in Paradise and Magalia who are rebuilding or making fire-hardening improvements to existing structures. We understand the local rebuilding requirements, the material choices that matter most in these high-risk forested communities, and the emotional weight of protecting a home after experiencing devastating loss in the area. If you're in Paradise or Magalia and want to talk through your options, we're here."
  },
  {
    question: "Can I fire harden an older or existing home?",
    answer: "Absolutely. The majority of fire hardening work we do is on existing homes, not new construction. Older homes often have standard louvered vents that allow ember entry, wood-framed open decks, and wood or vinyl siding — all of which can be upgraded. Fire hardening does not require gutting or rebuilding a home. It is typically done in targeted phases: start with the highest-risk items (vents, under-deck exposure, gutters) and work through additional upgrades over time as your budget allows. We'll walk through the home with you, identify the areas of greatest concern, and help you prioritize improvements that deliver the most protection."
  },
  {
    question: "How much does fire hardening cost in Northern California?",
    answer: "The cost of fire hardening depends heavily on the scope of work and the size of your home. Simple vent replacement projects — swapping standard vents for ember-resistant or Vulcan vents — are often one of the most affordable and impactful upgrades you can make. Full exterior hardening that includes siding replacement, under-deck protection, and gutter systems is a larger investment. We provide clear, itemized estimates after seeing the home so you know exactly what you're getting and why. We also discuss fire hardening voucher programs, which may be available through Cal Fire or local assistance programs depending on your area."
  }
];

export const serviceFaqs: Record<string, FAQItem[]> = {
  "fire-hardening": [
    {
      question: "What is fire hardening?",
      answer: "Fire hardening involves making strategic improvements to a home's exterior to reduce its vulnerability to wildfire and ember intrusion. Research consistently shows that most homes ignite during wildfires from wind-blown embers entering vulnerable openings — not from direct flame contact. Fire hardening addresses this by upgrading vents, sealing gaps, protecting under-deck areas, choosing non-combustible siding, and clearing combustible material from gutters. It does not make a home fireproof, but it significantly reduces ignition risk."
    },
    {
      question: "Do ember-resistant vents actually work?",
      answer: "Yes. Ember-resistant vents are one of the most well-documented and cost-effective fire hardening upgrades available. Standard louvered vents have large openings that allow wind-blown embers to enter your attic or crawlspace and start an interior fire. Ember-resistant vents use fine mesh or intumescent materials to block embers. Vulcan vents go further with a honeycomb matrix that physically expands in high heat to seal out embers and hot gases. Studies from IBHS and Cal Fire's building guidance both identify vent protection as a critical first step in home hardening."
    },
    {
      question: "What are Vulcan vents?",
      answer: "Vulcan vents are a patented fire-safe vent system that uses a proprietary intumescent matrix — a material that expands rapidly when exposed to high temperatures. During a wildfire, as radiant heat and ember-carrying winds approach the structure, the intumescent matrix swells to physically block the vent opening, preventing ember and hot gas entry into the attic or underfloor space. Unlike standard mesh screens that can melt or clog with debris, Vulcan vents are designed specifically for wildfire conditions and are recognized by building codes in high fire hazard severity zones (HFHSZ) in California."
    },
    {
      question: "Can you fire harden an older home?",
      answer: "Absolutely. Most fire hardening projects are retrofits on existing homes. Older homes typically have standard louvered vents, open wood deck framing, and combustible siding — all of which can be upgraded without a full remodel. We recommend starting with the highest-risk items: attic and crawlspace vents, open under-deck exposure, and combustible debris in gutters. From there, siding upgrades and other improvements can be phased in over time. We'll help you prioritize based on your home's specific exposure and your budget."
    },
    {
      question: "How much does fire hardening cost in Redding or Northern California?",
      answer: "Fire hardening costs vary based on the scope of work and the size of your home. Replacing vents with ember-resistant or Vulcan vents is often one of the most affordable first steps — the cost depends on the number of vents and accessibility. Under-deck protection and gutter guard systems vary by project. Full exterior siding replacement with fiber cement is a larger investment but also one of the most comprehensive ways to reduce combustibility. We provide clear, itemized estimates after a site visit so you know what you're paying for and why. We also help homeowners understand whether fire hardening vouchers or assistance programs may apply."
    },
    {
      question: "Do I need to do everything at once?",
      answer: "No. Fire hardening can be done in phases based on your priorities and budget. We typically recommend starting with the areas of greatest vulnerability: attic vents (where embers most commonly enter), under-deck gaps and open framing, and gutter protection. Once those are addressed, additional improvements like siding upgrades can follow. Doing something is always better than doing nothing — even replacing a few vents is a meaningful step toward reducing your home's ignition risk."
    },
    {
      question: "What parts of my home are most vulnerable to embers?",
      answer: "The most commonly vulnerable areas are: (1) Attic and crawlspace vents — standard louvered vents allow direct ember entry; (2) Open deck and underfloor framing — embers accumulate in the space under elevated decks and ignite wood framing; (3) Gutters — debris-filled gutters catch embers and burn; (4) Gaps around windows, doors, and roof-to-wall junctions — small gaps allow ember entry into wall cavities; (5) Combustible siding and trim — wood and some vinyl products can ignite from sustained ember exposure or radiant heat. Addressing these in order of risk severity is the core of a smart fire hardening strategy."
    },
    {
      question: "Do you serve Paradise and Magalia?",
      answer: "Yes, and we take that work seriously. O'Brien Mountain Home was founded in part because of what happened in communities like Paradise and Magalia. We understand the rebuilding requirements for high fire hazard severity zones (HFHSZ) in Butte County, the material specifications that matter most for forested ridge communities, and the importance of getting this right. Whether you're rebuilding after a loss or hardening an existing home, we're here to help."
    }
  ],
  "decking": [
    {
      question: "How much does a custom deck cost in Redding?",
      answer: "Deck costs in Redding and Northern California vary based on size, elevation, framing material, and decking surface. A basic ground-level pressure-treated deck runs less than an elevated deck with steel framing and PVC decking. We provide detailed, itemized estimates that break down the options so you can make an informed decision. We don't give guesswork quotes — we look at the space, discuss your goals, and give you an accurate number before work begins."
    },
    {
      question: "Do you repair existing decks?",
      answer: "Yes. We handle structural repairs including joist and beam replacements, ledger board issues, rotten post bases, and broken boards. If your deck has safety concerns — soft spots, sagging, wobbly railings, or unstable stairs — we'll assess the structure and give you an honest picture of what it needs. Not every old deck needs to be fully replaced; sometimes targeted repairs extend the life of a solid frame significantly."
    },
    {
      question: "Do you resurface decks?",
      answer: "If your deck's framing and structural members are still in good shape, resurfacing is often the most cost-effective path. We remove the existing deck boards, inspect the joists and ledger, make any needed repairs, and install new premium decking material — often PVC or composite for low maintenance and long-term performance in Northern California sun."
    },
    {
      question: "What decking material lasts longest in Northern California?",
      answer: "In the North State, premium PVC decking consistently outperforms wood and lower-end composites. It does not rot, splinter, crack, fade as quickly, or absorb moisture. It handles the high UV index and summer heat of the Sacramento Valley and Shasta region better than most alternatives. Composite decking (a blend of wood and plastic) is also a popular mid-range option. For framing, Fortress steel framing systems eliminate the risk of wood rot at the most structural level of the deck and reduce overall combustibility."
    },
    {
      question: "Can you build decks with fire-aware materials?",
      answer: "Yes. We specifically offer deck building with fire-aware materials in mind — including Class A-rated decking options, Fortress steel framing instead of wood joists, and ember-resistant design details that reduce the open deck cavity where embers accumulate. For homes in wildfire-prone areas or High Fire Hazard Severity Zones (HFHSZ), these choices meaningfully reduce the risk of deck ignition during a fire event."
    },
    {
      question: "How long does a deck project take?",
      answer: "Most custom deck projects take between one and three weeks from start of installation, depending on the size, complexity, elevation, and material availability. We'll give you a realistic timeline during the estimate phase so you can plan accordingly. We don't rush — we'd rather take the time to do it right than cut corners to close out quickly."
    }
  ],
  "residential-siding": [
    {
      question: "What siding material is best for Northern California?",
      answer: "For most Northern California homes, fiber cement siding — particularly James Hardie products — is our top recommendation. It is non-combustible (Class A fire rating), highly resistant to heat, moisture, pests, and UV exposure, and is specifically engineered for high-sun, fire-prone climates. It also carries a long manufacturer warranty and a proven track record in our region. Unlike wood, it does not rot. Unlike vinyl, it does not melt or warp in extreme heat. For homeowners in wildfire-prone areas, it is one of the most practical and protective siding choices available."
    },
    {
      question: "Do you install James Hardie siding?",
      answer: "Yes. We install the full James Hardie product line, including HardiePlank lap siding, HardieShingle siding, HardiePanel vertical siding, and HardieTrim. James Hardie fiber cement is a non-combustible material with a Class A fire rating and is approved for use in California's High Fire Hazard Severity Zones. It handles Northern California's combination of heat, UV exposure, smoke seasons, and occasional rain better than most alternative products."
    },
    {
      question: "Can new siding improve my home's value?",
      answer: "Yes. Siding replacement is consistently ranked among the best home improvements for return on investment at resale. In Northern California, where fire risk is a real concern for buyers and insurers, upgrading to non-combustible fiber cement siding can also make a home more insurable and potentially more attractive to buyers who understand the wildfire environment. Beyond financial value, the improved curb appeal and exterior protection make the home look and perform better year-round."
    },
    {
      question: "Do you repair damaged siding?",
      answer: "Yes. We handle partial repairs for siding that has been damaged by moisture, woodpeckers, dry rot, or impact. In many cases, targeted repair is significantly more cost-effective than full replacement. We'll assess the damage honestly and give you a clear picture of whether repair or replacement makes more sense for your situation."
    },
    {
      question: "How much does siding replacement cost in Northern California?",
      answer: "Siding replacement costs vary based on your home's square footage, the number of stories, the material chosen, and the condition of the substrate beneath the current siding. We provide clear estimates after a physical site assessment — not ballpark guesses over the phone. We'll walk through the home, identify any substrate concerns, and give you a line-item estimate you can actually plan around."
    },
    {
      question: "Can siding help with fire resilience?",
      answer: "Yes. Siding choice is one of the most impactful fire hardening decisions a homeowner can make. Combustible wood or lap siding can ignite from sustained ember contact or radiant heat. Non-combustible fiber cement siding does not ignite from embers and has a Class A fire rating. For homes in wildfire-prone areas, replacing combustible siding is often one of the highest-impact upgrades alongside vent replacement and under-deck protection. This is especially relevant for homes in communities like Redding, Paradise, Magalia, and Chico."
    }
  ],
  "commercial-siding": [
    {
      question: "Do you handle commercial siding projects of all sizes?",
      answer: "Yes. We work on commercial siding projects ranging from single-suite retail buildings to large multi-unit residential complexes and commercial facilities. The right approach depends on the building type, occupancy, local code requirements, and material spec. We provide detailed bids that address these factors so GCs, PMs, and property owners can plan accurately."
    },
    {
      question: "What materials do you install for commercial siding?",
      answer: "For commercial projects we install fiber cement (James Hardie and comparable brands), metal panel systems, engineered wood, composite panels, and vinyl where appropriate for the application. Material selection depends on the building type, local fire code requirements, budget, and long-term maintenance expectations. We'll discuss the tradeoffs of each during the bid process."
    },
    {
      question: "Are you licensed and insured for commercial work?",
      answer: "Yes. O'Brien Mountain Home holds a valid California contractor's license (Lic# 1135995) and carries the appropriate insurance for commercial construction work. You can verify our license at www.cslb.ca.gov. We meet the documentation and compliance requirements expected by general contractors, property managers, and commercial clients."
    },
    {
      question: "Do you provide bids for general contractors?",
      answer: "Yes. We work directly with general contractors as a siding subcontractor on commercial projects across Northern California. We provide detailed, itemized bids with clear scope definitions and realistic timelines. We understand that GCs need reliable subs who communicate clearly and show up on schedule — that's how we approach every commercial relationship."
    },
    {
      question: "Do you work with property managers?",
      answer: "Yes. Property managers are one of our key commercial clients. We help PMs maintain and upgrade their portfolios with siding repairs, full replacements, and exterior condition assessments. We understand that property managers need reliable timelines, clear invoicing, and minimal disruption to tenants — we structure our commercial projects accordingly."
    },
    {
      question: "How quickly can you provide a commercial estimate?",
      answer: "For most commercial projects, we can provide an initial bid within 3 to 5 business days of receiving project specs, drawings, or access to the site. Larger or more complex projects may take a bit longer to scope accurately. We'd rather take the time to give you an accurate number than rush and miss something important."
    }
  ]
};
