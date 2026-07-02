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
  tags: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    title: 'Fire Hardening Upgrade in Redding',
    category: 'fire-hardening',
    location: 'Redding, CA',
    challenge: 'An older North State home needed protection against embers and radiant heat at its most vulnerable points — the roofline, eaves, and base of the walls.',
    solution: 'Added fire-hardening upgrades including noncombustible stone veneer at the wall base, a Class-A tile roof, and sealed eaves to resist ember intrusion.',
    image: '/images/fire-1.jpg',
    images: ['/images/fire-1.jpg', '/images/fire-2.jpg'],
    tags: ['Vulcan Vents', 'WUI Compliant', 'Assessment']
  },
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
    id: '3',
    title: 'Residential Siding Replacement',
    category: 'residential-siding',
    location: 'Chico, CA',
    challenge: 'Old, faded siding that had weathered badly and left the home looking tired and under-protected.',
    solution: 'Installed new fiber cement siding and fresh trim for a durable, low-maintenance exterior with major curb-appeal.',
    image: '/images/siding-1.jpg',
    images: ['/images/siding-1.jpg', '/images/siding-2.jpg', '/images/siding-3.jpg'],
    tags: ['James Hardie', 'Fiber Cement', 'Curb Appeal']
  },
  {
    id: '4',
    title: 'Commercial Siding Project',
    category: 'commercial-siding',
    location: 'Redding, CA',
    challenge: 'Large commercial property that required durable processional exterior siding completed in time for their re-opening',
    solution: 'Installed Commercial-Grade and fiber cement siding within a month for the business owner to open in time.',
    image: 'https://vibe.filesafe.space/1777345871363473576/attachments/4d997205-bb64-4659-8f37-b04a710a915b.webp',
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
    id: '6',
    title: 'Elevated Deck Rebuild in Red Bluff',
    category: 'decking',
    location: 'Red Bluff, CA',
    challenge: 'A weathered, aging wood deck that had become unsafe and could not handle Tehama County’s intense summer heat.',
    solution: 'Rebuilt with low-maintenance composite decking and new railings, engineered to last through hot North State summers.',
    // Placeholder image — real project photos to be added.
    image: '/placeholder.svg',
    tags: ['Composite', 'Low Maintenance', 'Heat-Resistant']
  },
  {
    id: '7',
    title: 'Exterior Siding Refresh in Oroville',
    category: 'residential-siding',
    location: 'Oroville, CA',
    challenge: 'Faded, sun-damaged siding on a foothill home that left it exposed to heat, moisture, and fire risk.',
    solution: 'Replaced it with durable fiber cement siding and fresh trim for a low-maintenance, fire-aware exterior.',
    // Placeholder image — real project photos to be added.
    image: '/placeholder.svg',
    tags: ['Fiber Cement', 'Curb Appeal', 'Fire-Aware']
  }
];
