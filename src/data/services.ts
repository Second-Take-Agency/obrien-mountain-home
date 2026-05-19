export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "fire-hardening",
    title: "Fire Hardening",
    slug: "fire-hardening",
    description: "Protect vulnerable parts of your home from embers, vents, decks, and underfloor exposure with practical fire-hardening upgrades.",
    longDescription: "Practical wildfire-defense upgrades for Northern California homes, including ember-resistant vents, Vulcan vents, deck and underfloor protection, and other vulnerable exterior areas.",
    icon: "ShieldCheck",
    image: "https://vibe.filesafe.space/1777345871363473576/assets/7110ee51-5a64-47f5-bd0c-253e37766ae8.png"
  },
  {
    id: "decking",
    title: "Custom Decks",
    slug: "decking",
    description: "Build or replace a deck with durable, beautiful materials designed for Northern California weather, sun, and long-term use.",
    longDescription: "Beautiful, durable decks built for Northern California weather, mountain views, family gatherings, and long-term outdoor living.",
    icon: "Hammer",
    image: "https://vibe.filesafe.space/1777345871363473576/assets/b0779543-7b3d-41c3-a095-1e0570bcece6.png"
  },
  {
    id: "residential-siding",
    title: "Residential Siding",
    slug: "residential-siding",
    description: "Upgrade your exterior with siding that improves curb appeal, protection, and durability without constant maintenance.",
    longDescription: "Siding installation and repair that improves curb appeal, protects your home, and gives you a stronger exterior built for Northern California.",
    icon: "Home",
    image: "https://vibe.filesafe.space/1777345871363473576/assets/317434ae-1d2e-46bd-9dd1-37acd5e6a934.png"
  },
  {
    id: "commercial-siding",
    title: "Commercial Siding",
    slug: "commercial-siding",
    description: "Reliable siding installation and repair for commercial buildings, property managers, general contractors, and facilities.",
    longDescription: "Reliable commercial siding installation and repair for general contractors, property managers, facility managers, and commercial property owners.",
    icon: "Building2",
    image: "https://vibe.filesafe.space/1777345871363473576/assets/b113ac2c-19ac-48ea-952c-7e4cbef29728.png"
  }
];
