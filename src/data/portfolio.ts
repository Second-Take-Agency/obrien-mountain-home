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
    title: 'Off-Grid Cabin Siding & Deck Rebuild in Red Bluff',
    category: 'residential-siding',
    location: 'Red Bluff, CA',
    challenge: 'An off-grid family cabin in the mountains outside Red Bluff — the spot this family gathers at — needed its siding and decking replaced with materials that could stand up to fire risk and years of hard use.',
    solution: 'Re-clad the cabin in James Hardie lap siding and Hardie trim, rebuilt the front deck in TimberTech PRIME composite, and upgraded the vents to fire-rated Vulcan Vents — a finished cabin that is both beautiful and fire-safe for years of family get-togethers.',
    image: '/images/deck-1.jpg',
    images: ['/images/deck-1.jpg', '/images/deck-2.jpg', '/images/deck-3.jpg'],
    tags: ['James Hardie', 'TimberTech PRIME', 'Vulcan Vents']
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
    title: 'Vacation Home Fire Hardening at Lake Almanor',
    category: 'fire-hardening',
    location: 'Lake Almanor, CA',
    challenge: 'A vacation home sitting in a wildfire risk zone was exposed at two of the most overlooked points on any house — gutters that clog with debris, and foundation vents that let embers straight underneath.',
    solution: 'Installed heavy-duty gutter protection to keep debris and embers out, and retrofitted every foundation vent from the inside with fire-rated Vulcan Vents — real protection in a high-risk zone, and peace of mind while the house sits empty.',
    image: '/images/paradise-2.jpg',
    images: ['/images/paradise-2.jpg', '/images/paradise-3.jpg'],
    tags: ['Vulcan Vents', 'Gutter Protection', 'Ember Defense']
  },
  {
    id: '8',
    title: 'Composite Deck & Steel Railing Build in Redding',
    category: 'decking',
    location: 'Redding, CA',
    challenge: 'An old deck had reached the end of its life. The homeowner was confident he could rebuild it himself, but wanted a professional to handle it and know it was done right the first time.',
    solution: 'Rebuilt with Trex Enhance composite deck boards and Fortress steel railing — a low-maintenance deck at a price he was happy with, handled once and handled properly.',
    image: '/images/compdeck-1.jpg',
    images: ['/images/compdeck-1.jpg', '/images/compdeck-2.jpg', '/images/compdeck-3.jpg'],
    tags: ['Trex Enhance', 'Fortress Railing', 'Low Maintenance']
  },
  {
    id: '9',
    title: 'Whole-Home Wildfire Protection in Redding',
    category: 'fire-hardening',
    location: 'Redding, CA',
    challenge: 'The homeowners wanted one thing — their house protected from wildfire, with the openings embers exploit sealed off before the next fire season.',
    solution: 'Upgraded every exterior vent to fire-rated units and screened the front porch with wildfire defense mesh — the ember entry points closed, and peace of mind through fire season.',
    image: '/images/farmhouse-1.jpg',
    images: ['/images/farmhouse-1.jpg', '/images/farmhouse-2.jpg'],
    tags: ['Vent Upgrades', 'Wildfire Mesh', 'Ember Defense']
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
