export interface LocationFAQ {
  q: string;
  a: string;
}

export interface Location {
  id: string;
  name: string;
  slug: string;
  county: string;
  description: string;
  localFocus: string[];
  /** Geographic coordinates for LocalBusiness schema and geo sitemaps */
  latitude: number;
  longitude: number;
  /** Location-specific FAQs for AI retrieval and FAQPage schema — general faqs used as fallback */
  faqs?: LocationFAQ[];
}

export const locations: Location[] = [
  {
    id: "redding",
    name: "Redding, CA",
    slug: "redding-ca",
    county: "Shasta County",
    description: "Redding homes deal with heat, sun exposure, smoke seasons, wildfire risk, seasonal rain, and long-term exterior wear. O'Brien Mountain Home helps Redding homeowners protect and upgrade their properties with fire hardening, siding, and decking solutions built for the North State.",
    localFocus: ["Shasta County", "Sacramento River", "Shasta Lake area", "Carr Fire awareness", "North State heat and wildfire exposure"],
    latitude: 40.5865,
    longitude: -122.3917,
    faqs: [
      {
        q: "Do you offer fire hardening services in Redding, CA?",
        a: "Yes. Redding is our primary service area and home base. We provide fire hardening, custom decking, residential siding, and commercial siding to homeowners and property owners throughout Redding and Shasta County."
      },
      {
        q: "How does Redding's climate affect exterior building materials?",
        a: "Redding regularly exceeds 110°F in summer, which accelerates wear on wood decks, vinyl siding, and paint. We recommend fiber cement siding and composite or PVC decking for North State heat resistance and long-term durability."
      },
      {
        q: "Is Redding considered a high wildfire risk area?",
        a: "Parts of Shasta County — including WUI zones near Redding — are considered high fire risk. The 2018 Carr Fire burned within city limits. We provide fire hardening assessments and ember-resistant upgrades specifically designed for the North State environment."
      }
    ]
  },
  {
    id: "red-bluff",
    name: "Red Bluff, CA",
    slug: "red-bluff-ca",
    county: "Tehama County",
    description: "In Red Bluff, hot summers and rural property conditions require durable exterior solutions. We provide fire hardening and siding upgrades designed to handle the intense heat and wildfire risks of Tehama County.",
    localFocus: ["Tehama County", "Hot summers", "Rural properties", "Wildfire-aware exterior upgrades", "Deck and siding durability"],
    latitude: 40.1785,
    longitude: -122.2358
  },
  {
    id: "chico",
    name: "Chico, CA",
    slug: "chico-ca",
    county: "Butte County",
    description: "Serving residential neighborhoods in Chico with expert siding and decking. We help homeowners improve their property's resilience against regional fire risks and smoke exposure.",
    localFocus: ["Butte County", "Older homes and residential neighborhoods", "Wildfire smoke and regional fire risk", "Exterior upgrades and siding protection"],
    latitude: 39.7285,
    longitude: -121.8375,
    faqs: [
      {
        q: "Do you offer siding and decking services in Chico, CA?",
        a: "Yes. We serve Chico homeowners with residential siding installation, custom decking, and fire hardening. Chico is in Butte County, which includes WUI zones, and we help residents upgrade their exteriors for both aesthetics and fire resilience."
      },
      {
        q: "What siding materials do you recommend for Chico homes?",
        a: "For Chico and the broader Butte County area, we typically recommend James Hardie fiber cement siding for its non-combustible properties, durability in the North State climate, and long-term performance compared to wood or vinyl alternatives."
      },
      {
        q: "How close is Chico to high wildfire risk areas?",
        a: "Chico is approximately 15 miles west of Paradise and is surrounded by WUI zones in Butte County. The Camp Fire dramatically increased local awareness of fire risk. Many Chico homeowners are now investing in fire hardening as a proactive measure."
      }
    ]
  },
  {
    id: "oroville",
    name: "Oroville, CA",
    slug: "oroville-ca",
    county: "Butte County",
    description: "For homes in the Oroville foothills, exterior durability is key. We offer fire-aware upgrades and custom decking built to withstand the unique climate near Lake Oroville.",
    localFocus: ["Lake Oroville", "Butte County foothill conditions", "Fire risk", "Siding and deck durability"],
    latitude: 39.5138,
    longitude: -121.5561
  },
  {
    id: "paradise",
    name: "Paradise, CA",
    slug: "paradise-ca",
    county: "Butte County",
    description: "Supporting the Paradise Ridge community with essential fire-hardening and rebuilding services. We focus on ember-resistant vents and Class A-rated materials for maximum resilience.",
    localFocus: ["Camp Fire rebuilding context", "Ridge communities", "Fire hardening importance", "Ember-resistant vents", "Exterior material choices"],
    latitude: 39.7596,
    longitude: -121.6219,
    faqs: [
      {
        q: "Do you serve Paradise, CA for fire hardening and rebuilding?",
        a: "Yes. Paradise and the ridge communities are a primary focus for O'Brien Mountain Home. We provide fire hardening, ember-resistant vent installation (including Vulcan vents), non-combustible siding, and exterior upgrades tailored to the unique risks of ridge communities rebuilding after the 2018 Camp Fire."
      },
      {
        q: "What fire hardening improvements are most important for homes in Paradise?",
        a: "Ember-resistant vents, Class A-rated or non-combustible siding, under-deck ember protection, and metal gutter covers are the highest-priority improvements for Paradise homes. These address the primary ways homes ignite during WUI fire events like the Camp Fire."
      },
      {
        q: "Are there fire hardening assistance programs available in Paradise?",
        a: "Fire hardening voucher and grant programs have been available in Butte County. Programs change based on funding and eligibility. We can help you understand current options for your Paradise or Magalia property during an assessment."
      }
    ]
  },
  {
    id: "magalia",
    name: "Magalia, CA",
    slug: "magalia-ca",
    county: "Butte County",
    description: "Protecting mountain homes in Magalia from ember exposure. Our specialized fire-hardening services are designed for forested properties at high risk.",
    localFocus: ["Mountain community", "Forested properties", "Ember exposure", "Fire hardening, decking, siding"],
    latitude: 39.8146,
    longitude: -121.5783,
    faqs: [
      {
        q: "Do you offer fire hardening services in Magalia?",
        a: "Yes. Magalia is one of our most active service areas. As a forested mountain community adjacent to Paradise, Magalia homes face significant ember and radiant heat exposure. We specialize in ember-resistant vent installation, fire-resistant siding, and under-deck protection for Magalia properties."
      },
      {
        q: "What makes fire hardening different for forested mountain properties like Magalia?",
        a: "Forested areas like Magalia have dense tree cover that can carry fire close to homes, with steep terrain that accelerates fire spread. Ember intrusion protection, combustible material removal around the home, and non-combustible exterior surfaces are especially critical in these conditions."
      },
      {
        q: "Can you work on older homes in Magalia for fire hardening?",
        a: "Yes. Most of the fire hardening we do is on existing homes. Many older Magalia properties have standard louvered vents, wood decks, and combustible siding — all upgradeable in phases. We walk through the home with you, identify the highest-risk areas, and help you prioritize improvements."
      }
    ]
  },
  {
    id: "mount-shasta",
    name: "Mount Shasta, CA",
    slug: "mount-shasta-ca",
    county: "Siskiyou County",
    description: "Built for the mountain climate of Mount Shasta. We provide siding and decking that can handle snow, sun, and seasonal weather while improving fire safety.",
    localFocus: ["Mountain climate", "Snow, sun, and seasonal weather", "Durable siding and decking", "Fire-aware exterior upgrades"],
    latitude: 41.3099,
    longitude: -122.3108
  },
  {
    id: "northern-california",
    name: "Northern California",
    slug: "northern-california",
    county: "Various",
    description: "Serving the broader North State with a focus on wildfire-prone communities. We bring durable, fire-aware construction to rural and mountain homes across the region.",
    localFocus: ["North State", "Wildfire-prone communities", "Mountain homes", "Rural homes", "Exterior durability", "Long-term resilience"],
    latitude: 40.5865,
    longitude: -122.3917
  }
];
