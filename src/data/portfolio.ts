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
    challenge: 'Vulnerable attic and foundation vents in a high-risk WUI zone.',
    solution: 'Installed Vulcan ember-resistant vents and added under-deck shielding.',
    image: 'https://vibe.filesafe.space/1777345871363473576/assets/ddb097e8-c5ce-4970-8cf3-32fbe3eb0f04.png',
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
    challenge: 'Aging wood siding showing signs of sun damage and moisture intrusion.',
    solution: 'Full replacement with James Hardie fiber cement siding for long-term protection.',
    image: 'https://vibe.filesafe.space/1777345871363473576/assets/daf9d360-1208-4c29-a6bc-588321a2860d.png',
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
