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
  }
];
