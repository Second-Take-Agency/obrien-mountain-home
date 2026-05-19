import React from 'react';

/**
 * All logos are white-on-dark versions downloaded directly from each brand.
 * Every card uses the same dark slate-800 background so logos render uniformly.
 */

// TimberTech — official white logo
const TIMBERTECH_LOGO = "https://centralvalley-6006204.content2.toolbxapp.com/wp-content/uploads/2025/04/Logo-Timbertech-White.png";
// Fortress Building Products — official white PNG
const FORTRESS_LOGO = "https://vibe.filesafe.space/1777345871363473576/assets/bc77b4fe-63d4-4843-bab9-3b8774f86051.png";
// Redding Chamber of Commerce — transparent PNG (invert to white)
const REDDING_CHAMBER_LOGO = "https://vibe.filesafe.space/1777345871363473576/assets/2d08d04a-6657-4661-a339-3cb695ca8fbf.png";
// Vulcan Vents — official white outlined SVG
const VULCAN_LOGO = "https://www.vulcanvents.com/wp-content/uploads/2021/10/vulcan-vents-white-outlined-logo.svg";
// FireStorm Building Products — official white color SVG
const FIRESTORM_LOGO = "https://firestormbuildingproducts.com/wp-content/uploads/2025/04/FireStorm-social-share.jpg";
// James Hardie — official white PNG
const HARDIE_LOGO = "https://vibe.filesafe.space/1777345871363473576/assets/0253decf-f8a3-4a99-b04f-4507040a0f3a.png";

interface Partner {
  name: string;
  logo: string;
  url: string;
  description: string;
  /** Extra img classes — use brightness-0 invert if source is dark/color */
  imgClass?: string;
}

const partnersRow1: Partner[] = [
  {
    name: "TimberTech",
    logo: TIMBERTECH_LOGO,
    url: "https://www.timbertech.com/",
    description: "Premium composite decking",
    imgClass: "h-10 object-contain",
  },
  {
    name: "Fortress Building Products",
    logo: FORTRESS_LOGO,
    url: "https://fortressbp.com/",
    description: "Steel deck framing & fencing",
    imgClass: "h-10 object-contain",
  },
  {
    name: "Redding Chamber of Commerce",
    logo: REDDING_CHAMBER_LOGO,
    url: "https://reddingchamber.com/",
    description: "Greater Redding member",
    imgClass: "h-14 brightness-0 invert object-contain",
  },
];

const partnersRow2: Partner[] = [
  {
    name: "Vulcan Vents",
    logo: VULCAN_LOGO,
    url: "https://www.vulcanvents.com/",
    description: "Ember-resistant fire vents",
    imgClass: "h-12 object-contain",
  },
  {
    name: "FireStorm Building Products",
    logo: FIRESTORM_LOGO,
    url: "https://firestormbuildingproducts.com/",
    description: "Wildfire defense solutions",
    imgClass: "h-10 object-contain",
  },
  {
    name: "James Hardie",
    logo: HARDIE_LOGO,
    url: "https://www.jameshardie.com/",
    description: "World's #1 fiber cement siding",
    imgClass: "h-10 object-contain",
  },
];

const PartnerCard = ({ partner }: { partner: Partner }) => (
  <a
    href={partner.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit ${partner.name}`}
    className="group flex flex-col items-center gap-4 p-6 rounded-2xl border border-slate-700 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-slate-800"
  >
    {/* Logo area — fixed height so all cards align */}
    <div className="w-full flex items-center justify-center min-h-[80px]">
      <img
        src={partner.logo}
        alt={`${partner.name} logo`}
        className={`w-auto max-w-full ${partner.imgClass ?? 'h-10 object-contain'}`}
        loading="lazy"
        onError={(e) => {
          // Fallback: show partner name as text if image fails
          (e.currentTarget as HTMLImageElement).style.display = 'none';
        }}
      />
    </div>
    {/* Text */}
    <div className="text-center">
      <p className="text-sm font-semibold text-slate-200 leading-tight group-hover:text-primary transition-colors">
        {partner.name}
      </p>
      <p className="text-xs text-slate-400 mt-0.5">{partner.description}</p>
    </div>
  </a>
);

const PartnersSection = () => (
  <section className="py-16 bg-slate-900 border-t border-slate-800">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-2">
          Trusted Partners & Affiliations
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Products & Organizations We Stand Behind
        </h2>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnersRow1.map(p => <PartnerCard key={p.name} partner={p} />)}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnersRow2.map(p => <PartnerCard key={p.name} partner={p} />)}
        </div>
      </div>
    </div>
  </section>
);

export default PartnersSection;
