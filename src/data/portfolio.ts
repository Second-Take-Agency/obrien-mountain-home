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
  /** URL segment for the detail page: /portfolio/{slug}. Omit to keep the card linking elsewhere. */
  slug?: string;
  /** Long-form copy for the detail page. The short challenge/solution above stay on the card. */
  story?: {
    challenge: string;
    solution: string;
    result: string;
  };
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
    tags: ['James Hardie', 'TimberTech PRIME', 'Vulcan Vents'],
    slug: 'off-grid-cabin-siding-deck-rebuild-red-bluff',
    story: {
      challenge: 'This family cabin sits off-grid in the mountains outside Red Bluff, and it has been the spot the family gathers at for years. The siding and the front deck had both reached the end of their service life. Being off-grid and surrounded by timber, the owners were not looking for a quick cosmetic fix — they wanted materials that would hold up to real fire risk and to decades of family use, on a property where help is a long way off if a fire ever comes through.',
      solution: 'We replaced the exterior with James Hardie lap siding and James Hardie trim, giving the cabin a noncombustible shell that will not feed a fire the way old wood siding does. The front deck was rebuilt in TimberTech PRIME composite decking — no rot, no annual staining, and far better behaviour under ember exposure than bare wood. While we were on site we also upgraded the vents to fire-rated Vulcan Vents, closing off the openings embers use to get inside a structure. Together those three pieces cover the cabin\'s most vulnerable surfaces: the walls, the deck, and the openings.',
      result: 'The family now has a finished cabin that is both beautiful and genuinely fire-safe — a place they can keep using for get-togethers for years, without the maintenance cycle the old siding and decking demanded and without the worry that came with it.'
    }
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
    tags: ['Vulcan Vents', 'Gutter Protection', 'Ember Defense'],
    slug: 'vacation-home-fire-hardening-lake-almanor',
    story: {
      challenge: 'This was a straight fire-protection job on a vacation home at Lake Almanor, in a recognised wildfire risk zone. A house that sits empty for stretches of the year is exposed in a particular way — nobody is there to clear debris or notice a problem building. Two of the most commonly overlooked weak points on any home were doing exactly that here: gutters filling with needles and leaves, and foundation vents standing open to whatever the wind carries.',
      solution: 'We installed heavy-duty gutter protection so the gutters stop collecting the debris that clogs them and causes water problems down the line — and, more importantly in this location, so windblown embers cannot settle into a gutter full of dry fuel against the roofline. We then retrofitted all of the foundation vents to be fire-safe, installing Vulcan Vents from within. Vulcan Vents seal under heat, which shuts off the path embers use to get underneath a house and start a fire where no one would see it.',
      result: 'The home is now protected at the two points that most often let a wildfire in, in an area where that protection genuinely matters. The owners were very happy with the work, and they have real peace of mind about a property they cannot watch year-round.'
    }
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
    tags: ['Trex Enhance', 'Fortress Railing', 'Low Maintenance'],
    slug: 'composite-deck-steel-railing-redding',
    story: {
      challenge: 'This customer had an old deck that had run out of life. He was confident he could take the rebuild on himself — plenty of homeowners in the North State are — but he decided he would rather have a professional handle it and know it had been done correctly the first time, instead of spending his weekends on it and second-guessing the result.',
      solution: 'We rebuilt the deck with Trex Enhance composite deck boards and Fortress steel railing. Trex Enhance gives him a surface that will not rot, splinter, or need staining every season, and the Fortress steel railing is a clean, strong finish that stands up to North State sun far better than wood. It is a straightforward build done properly — the right materials, correctly installed, with the details handled.',
      result: 'He was very happy with the price and, more than that, with the peace of mind of having it done once and for all by a professional he could trust. No annual upkeep, no unfinished project sitting in the backyard, and a deck that will still look right in ten years.'
    }
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
    tags: ['Vent Upgrades', 'Wildfire Mesh', 'Ember Defense'],
    slug: 'whole-home-wildfire-protection-redding',
    story: {
      challenge: 'These homeowners came to us wanting one thing: their house protected from wildfire. No remodel, no cosmetic upgrade — just the openings an ember can exploit closed off before the next fire season. Most homes lost to wildfire are not lost to a wall of flame arriving at the door; they are lost to embers landing hours ahead of the fire and finding a way inside through a vent or an unscreened opening.',
      solution: 'We upgraded all of their exterior vents to fire-rated units, and screened the front porch with wildfire defense mesh. That combination addresses the two ways embers were getting in on this house: through the vents into the structure itself, and into the porch, where they could settle among anything combustible and burn undisturbed against the house.',
      result: 'Their home is now protected against wildfire at the points that actually decide the outcome, and the owners have peace of mind going into fire season — a focused job, done for exactly the reason they asked for it.'
    }
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
    tags: ['Fortress Steel Frame', 'TimberTech PVC', 'Cable Railing'],
    slug: 'elevated-steel-frame-deck-redding',
    story: {
      challenge: 'The old deck had worn out and was no longer safe to use. This homeowner lives right next to the water, and what he wanted was simple and specific: a deck he could sit out on with a cup of coffee in the morning, looking out over the water, without thinking about whether the structure under him was sound. Safety came first, and after that he wanted something genuinely high quality — not another deck he would be replacing in a decade.',
      solution: 'We rebuilt it on a steel frame structure from Fortress. Steel framing does not rot, warp, twist, or sag the way wood framing does, which matters on an elevated deck where the structure is doing real work. On top of that we installed new TimberTech PVC decking, and finished it with Fortress vertical cable railing. The cable railing was the right call for this house: it holds the line safely without putting a wall of pickets between him and the view he built the deck for.',
      result: 'He got exactly what he asked for — a deck that is solid underfoot, effectively maintenance-free, and open to the water from every seat. Somewhere he can sit out and enjoy his mornings, built to last far longer than the deck it replaced.'
    }
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
    tags: ['Vulcan Vents', 'IBHS Standards', 'Ember Defense'],
    slug: 'wildfire-standards-upgrade-redding',
    story: {
      challenge: 'These customers were told their insurance was going to be dropped unless the property met California\'s new wildfire protection IBHS standards for a wildfire-prepared home. Losing coverage was a real and immediate concern, and the standards themselves are not obvious to work through on your own — it is not always clear which upgrades actually qualify and which do not. They called us to guide them through it.',
      solution: 'We walked the property with them and worked out what the standards required here. To meet them, we upgraded all of the exterior vents with Vulcan Vents, screened the underside of the deck with wildfire defense mesh so embers cannot collect and ignite beneath it, and added six inches of noncombustible cladding where it was needed at the base of the walls. Every piece of that targets the zone right around the structure, which is where a wildfire-prepared home is won or lost.',
      result: 'The customers successfully retained their insurance. Beyond that, they were genuinely pleased with how the work looked — the upgrades were done with real attention to detail rather than bolted on — and they came away with peace of mind about their wildfire risk on top of the coverage they were at risk of losing.'
    }
  }
];
