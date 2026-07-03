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
    image: '/images/fire-2.jpg',
    tags: ['Class-A Roof', 'Sealed Eaves', 'Stone Veneer']
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
    title: 'Elevated Hillside Deck Rebuild in Red Bluff',
    category: 'decking',
    location: 'Red Bluff, CA',
    challenge: 'A tall, elevated deck on a sloped lot had aged and needed a safe, sturdy rebuild that could handle the height and constant sun exposure.',
    solution: 'Rebuilt the raised deck on reinforced posts with new framing and railings — engineered for safety and built to last through hot North State summers.',
    image: '/images/reddeck-1.jpg',
    images: ['/images/reddeck-1.jpg', '/images/reddeck-2.jpg'],
    tags: ['Elevated Build', 'Reinforced', 'Custom Railings']
  },
  {
    id: '7',
    title: 'Victorian Home Siding Refresh in Oroville',
    category: 'residential-siding',
    location: 'Oroville, CA',
    challenge: 'A classic Victorian home with weathered lap siding needed a refresh that would protect it without erasing its historic character.',
    solution: 'Refreshed the lap siding and crisp white trim for a durable, low-maintenance exterior that keeps the home’s Victorian charm intact.',
    image: '/images/oroville-1.jpg',
    images: ['/images/oroville-1.jpg', '/images/oroville-2.jpg'],
    tags: ['Lap Siding', 'Curb Appeal', 'Historic Character']
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
  }
];
