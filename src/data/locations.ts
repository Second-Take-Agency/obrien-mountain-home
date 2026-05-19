export interface Location {
  id: string;
  name: string;
  slug: string;
  county: string;
  description: string;
  localFocus: string[];
}

export const locations: Location[] = [
  {
    id: "redding",
    name: "Redding, CA",
    slug: "redding-ca",
    county: "Shasta County",
    description: "Redding homes deal with heat, sun exposure, smoke seasons, wildfire risk, seasonal rain, and long-term exterior wear. O’Brien Mountain Home helps Redding homeowners protect and upgrade their properties with fire hardening, siding, and decking solutions built for the North State.",
    localFocus: ["Shasta County", "Sacramento River", "Shasta Lake area", "Carr Fire awareness", "North State heat and wildfire exposure"]
  },
  {
    id: "red-bluff",
    name: "Red Bluff, CA",
    slug: "red-bluff-ca",
    county: "Tehama County",
    description: "In Red Bluff, hot summers and rural property conditions require durable exterior solutions. We provide fire hardening and siding upgrades designed to handle the intense heat and wildfire risks of Tehama County.",
    localFocus: ["Tehama County", "Hot summers", "Rural properties", "Wildfire-aware exterior upgrades", "Deck and siding durability"]
  },
  {
    id: "chico",
    name: "Chico, CA",
    slug: "chico-ca",
    county: "Butte County",
    description: "Serving residential neighborhoods in Chico with expert siding and decking. We help homeowners improve their property's resilience against regional fire risks and smoke exposure.",
    localFocus: ["Butte County", "Older homes and residential neighborhoods", "Wildfire smoke and regional fire risk", "Exterior upgrades and siding protection"]
  },
  {
    id: "oroville",
    name: "Oroville, CA",
    slug: "oroville-ca",
    county: "Butte County",
    description: "For homes in the Oroville foothills, exterior durability is key. We offer fire-aware upgrades and custom decking built to withstand the unique climate near Lake Oroville.",
    localFocus: ["Lake Oroville", "Butte County foothill conditions", "Fire risk", "Siding and deck durability"]
  },
  {
    id: "paradise",
    name: "Paradise, CA",
    slug: "paradise-ca",
    county: "Butte County",
    description: "Supporting the Paradise Ridge community with essential fire-hardening and rebuilding services. We focus on ember-resistant vents and Class A-rated materials for maximum resilience.",
    localFocus: ["Camp Fire rebuilding context", "Ridge communities", "Fire hardening importance", "Ember-resistant vents", "Exterior material choices"]
  },
  {
    id: "magalia",
    name: "Magalia, CA",
    slug: "magalia-ca",
    county: "Butte County",
    description: "Protecting mountain homes in Magalia from ember exposure. Our specialized fire-hardening services are designed for forested properties at high risk.",
    localFocus: ["Mountain community", "Forested properties", "Ember exposure", "Fire hardening, decking, siding"]
  },
  {
    id: "mount-shasta",
    name: "Mount Shasta, CA",
    slug: "mount-shasta-ca",
    county: "Siskiyou County",
    description: "Built for the mountain climate of Mount Shasta. We provide siding and decking that can handle snow, sun, and seasonal weather while improving fire safety.",
    localFocus: ["Mountain climate", "Snow, sun, and seasonal weather", "Durable siding and decking", "Fire-aware exterior upgrades"]
  },
  {
    id: "northern-california",
    name: "Northern California",
    slug: "northern-california",
    county: "Various",
    description: "Serving the broader North State with a focus on wildfire-prone communities. We bring durable, fire-aware construction to rural and mountain homes across the region.",
    localFocus: ["North State", "Wildfire-prone communities", "Mountain homes", "Rural homes", "Exterior durability", "Long-term resilience"]
  }
];
