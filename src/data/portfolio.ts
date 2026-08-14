export interface PortfolioProject {
  id: string;
  title: string;
  category: 'fire-hardening' | 'decking' | 'residential-siding' | 'commercial-siding';
  location: string;
  challenge: string;
  solution: string;
  image: string;
  /** Optional additional images. When present, the card renders a carousel. */
  images?: string[];
  /** Optional destination for the card's "View Project Details" button. Defaults to /portfolio. */
  link?: string;
  tags: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '2',
    title: 'Custom Deck Build in Northern California',
    category: 'decking',
    location: 'Shasta Lake, CA',
    challenge: 'Replacing a worn, aging wood deck and ramp with something safer, more durable, and fire-aware.',
    solution: 'Rebuilt with TimberTech composite decking and new wood railings, keeping the accessible ramp for easy, year-round entry.',
    image: '/images/deck-1.jpg',
    images: ['/images/deck-1.jpg', '/images/deck-2.jpg', '/images/deck-3.jpg'],
    tags: ['TimberTech', 'Low Maintenance', 'Custom Design']
  },
  {
    id: '4',
    title: 'Commercial Siding Project',
    category: 'commercial-siding',
    location: 'Redding, CA',
    challenge: 'Large commercial property that required durable processional exterior siding completed in time for their re-opening',
    solution: 'Installed Commercial-Grade and fiber cement siding within a month for the business owner to open in time.',
    image: 'https://vibe.filesafe.space/1777345871363473576/attachments/4d997205-bb64-4659-8f37-b04a710a915b.webp',
    link: '/commercial',
    tags: ['Commercial Grade', 'Fiber Cement', 'Property Management']
  },
  {
    id: '5',
    title: 'Mountain Lodge Fire Hardening in Paradise',
    category: 'fire-hardening',
    location: 'Paradise, CA',
    challenge: 'A large cedar-sided mountain lodge tucked among the pines needed protection from embers and radiant heat without losing its rustic character.',
    solution: 'Hardened the exterior with a Class-A composite-shingle roof, enclosed eaves, metal gutters and fascia, and a noncombustible stone veneer base.',
    image: '/images/paradise-2.jpg',
    images: ['/images/paradise-2.jpg', '/images/paradise-3.jpg'],
    tags: ['Ember-Resistant', 'Non-Combustible', 'WUI Compliant']
  },
  {
    id: '8',
    title: 'Composite Deck & Aluminum Railing Build in Redding',
    category: 'decking',
    location: 'Redding, CA',
    challenge: 'Creating durable, low-maintenance outdoor space — from an elevated hillside view deck to a compact patio deck — that could stand up to North State sun and weather.',
    solution: 'Built composite decks finished with sleek black aluminum railings for a clean, modern look that resists rot, fading, and fire without the upkeep of wood.',
    image: '/images/compdeck-1.jpg',
    images: ['/images/compdeck-1.jpg', '/images/compdeck-2.jpg', '/images/compdeck-3.jpg'],
    tags: ['Composite', 'Aluminum Railing', 'Low Maintenance']
  },
  {
    id: '9',
    title: 'Exterior Siding & Trim Refresh in Northern California',
    category: 'residential-siding',
    location: 'Northern California',
    challenge: 'Older North State homes with tired, weather-worn siding needed a durable refresh and a cleaner, more modern look.',
    solution: 'Refreshed the exteriors with new siding, bold trim, and fresh paint — a low-maintenance, fire-aware upgrade that transforms each home’s curb appeal.',
    image: '/images/farmhouse-1.jpg',
    images: ['/images/farmhouse-1.jpg', '/images/farmhouse-2.jpg'],
    tags: ['Siding & Trim', 'Fresh Paint', 'Curb Appeal']
  },
  {
    id: '10',
    title: 'Elevated Steel-Frame Deck Rebuild in Redding',
    category: 'decking',
    location: 'Redding, CA',
    challenge: 'An aging deck had worn past the point of being safe to use — and the homeowner wanted a rebuild solid enough to sit out with his morning coffee without a second thought.',
    solution: 'Rebuilt on a Fortress steel frame with TimberTech PVC decking and Fortress vertical cable railing — a rot-proof, low-maintenance structure with open sightlines from every seat.',
    image: '/images/waterdeck-1.jpg',
    images: ['/images/waterdeck-1.jpg', '/images/waterdeck-2.jpg', '/images/waterdeck-3.jpg'],
    tags: ['Fortress Steel Frame', 'TimberTech PVC', 'Cable Railing']
  },
  {
    id: '11',
    title: 'Wildfire Standards Upgrade in Redding',
    category: 'fire-hardening',
    location: 'Redding, CA',
    challenge: 'The homeowners faced losing their insurance unless the property met California’s new IBHS wildfire-prepared standards — and they needed a contractor who could guide them through what actually qualified.',
    solution: 'Upgraded every exterior vent to Vulcan Vents, screened the deck underside with wildfire defense mesh, and added 6" noncombustible cladding where needed — coverage retained, with a clean, detailed finish and real peace of mind.',
    image: '/images/ibhs-1.jpg',
    images: ['/images/ibhs-1.jpg', '/images/ibhs-2.jpg'],
    tags: ['Vulcan Vents', 'IBHS Standards', 'Ember Defense']
  }
];
