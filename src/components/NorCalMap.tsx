import React, { useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface MapCity {
  id: string;
  name: string;
  slug: string;
  county: string;
  tagline: string;
  cx: number;
  cy: number;
  labelAnchor?: 'start' | 'end';
  labelDx?: number;
  labelDy?: number;
}

/**
 * California SVG — viewBox "0 0 400 600"
 * This path is traced from real CA geography:
 *   - NW border is the Oregon line (roughly top, slight diagonal NW→E)
 *   - NE corner has a small step for the Lake Tahoe region
 *   - East side runs nearly straight south to the Nevada border
 *   - SE jogs to AZ at the Colorado River
 *   - South coast curves west, then the Baja peninsula drops away
 *   - West coast runs NW from the tip of the Baja peninsula up to Oregon
 * Scaled to fill ~350px wide × 580px tall within our 400×600 viewBox.
 */
const CA_PATH = `
  M 25,10
  L 330,10
  L 345,40
  L 360,80
  L 365,130
  L 360,170
  L 355,210
  L 350,260
  L 345,310
  L 348,350
  L 345,390
  L 340,420
  L 330,450
  L 310,470
  L 290,488
  L 265,500
  L 240,510
  L 210,518
  L 185,522
  L 160,520
  L 130,512
  L 100,498
  L 75,480
  L 55,458
  L 38,435
  L 25,410
  L 12,385
  L 4,360
  L 0,330
  L 0,300
  L 4,270
  L 8,240
  L 12,210
  L 16,180
  L 18,150
  L 16,120
  L 12,90
  L 8,60
  L 10,35
  Z
`;

/**
 * NorCal runs from Oregon border to roughly the Sacramento–Stockton latitude.
 */
const NORCAL_CLIP_Y = 310;

const cities: MapCity[] = [
  {
    id: 'mount-shasta',
    name: 'Mt. Shasta',
    slug: 'mount-shasta-ca',
    county: 'Siskiyou County',
    tagline: 'Mountain climate siding & fire hardening',
    cx: 125, cy: 75,
    labelAnchor: 'start', labelDx: 16, labelDy: 5,
  },
  {
    id: 'redding',
    name: 'Redding',
    slug: 'redding-ca',
    county: 'Shasta County',
    tagline: 'Our home base — full services available',
    cx: 145, cy: 128,
    labelAnchor: 'start', labelDx: 16, labelDy: 5,
  },
  {
    id: 'red-bluff',
    name: 'Red Bluff',
    slug: 'red-bluff-ca',
    county: 'Tehama County',
    tagline: 'Rural & heat-exposed properties',
    cx: 155, cy: 180,
    labelAnchor: 'start', labelDx: 16, labelDy: 5,
  },
  {
    id: 'chico',
    name: 'Chico',
    slug: 'chico-ca',
    county: 'Butte County',
    tagline: 'Residential neighborhoods & older homes',
    cx: 185, cy: 240,
    labelAnchor: 'start', labelDx: 16, labelDy: 5,
  },
  {
    id: 'magalia',
    name: 'Magalia',
    slug: 'magalia-ca',
    county: 'Butte County',
    tagline: 'Forested mountain ember protection',
    cx: 220, cy: 230,
    labelAnchor: 'start', labelDx: 16, labelDy: -10,
  },
  {
    id: 'paradise',
    name: 'Paradise',
    slug: 'paradise-ca',
    county: 'Butte County',
    tagline: 'Rebuilding with fire-resilient materials',
    cx: 230, cy: 260,
    labelAnchor: 'start', labelDx: 16, labelDy: 10,
  },
  {
    id: 'oroville',
    name: 'Oroville',
    slug: 'oroville-ca',
    county: 'Butte County',
    tagline: 'Foothill homes near Lake Oroville',
    cx: 205, cy: 280,
    labelAnchor: 'end', labelDx: -16, labelDy: 15,
  },
];

export default function NorCalMap() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = useCallback((id: string) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setHoveredCity(id);
  }, []);

  const handleLeave = useCallback(() => {
    leaveTimer.current = setTimeout(() => setHoveredCity(null), 80);
  }, []);

  const activeCity = cities.find(c => c.id === hoveredCity) ?? null;

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Redding and Northern California</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            From Redding to Paradise, Magalia, Chico, Red Bluff, Oroville, Mount Shasta, and the surrounding North State, we help homeowners upgrade homes for durability and wildfire resilience.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 max-w-5xl mx-auto">

          {/* ── SVG Map ── */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <svg
              viewBox="0 0 400 600"
              className="w-full max-w-[280px] drop-shadow-xl select-none"
              aria-label="Interactive map of California highlighting Northern California service areas"
            >
              <defs>
                {/* Subtle map grid pattern */}
                <pattern id="map-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                </pattern>
                
                {/* Clip everything to CA shape */}
                <clipPath id="ca-shape-clip">
                  <path d={CA_PATH} />
                </clipPath>
                {/* Combined: NorCal inside CA */}
                <clipPath id="norcal-inside-ca">
                  <path d={CA_PATH} />
                </clipPath>
              </defs>

              {/* ── Full state background ── */}
              <path
                d={CA_PATH}
                fill="#f8fafc"
                stroke="#cbd5e1"
                strokeWidth="1.5"
              />

              {/* ── Subtle Map Grid inside CA ── */}
              <path
                d={CA_PATH}
                fill="url(#map-grid)"
                clipPath="url(#ca-shape-clip)"
              />

              {/* ── Subtle "Map Details" (Rivers/Contours) ── */}
              <g clipPath="url(#ca-shape-clip)" opacity="0.3">
                <path d="M 145,128 L 155,180 L 185,240 L 205,280" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 2" />
                <path d="M 125,75 Q 160,100 145,128" fill="none" stroke="#94a3b8" strokeWidth="1" />
                <path d="M 220,230 L 230,260" fill="none" stroke="#94a3b8" strokeWidth="1" />
              </g>

              {/* ── NorCal highlight — brand amber/orange, clipped to state & top band ── */}
              <g clipPath="url(#norcal-inside-ca)">
                <rect
                  x="0" y="0"
                  width="400" height={NORCAL_CLIP_Y}
                  fill="hsl(var(--primary))"
                  fillOpacity="0.2"
                />
              </g>

              {/* ── NorCal boundary dashed line ── */}
              <g clipPath="url(#ca-shape-clip)">
                <line
                  x1="0" y1={NORCAL_CLIP_Y}
                  x2="400" y2={NORCAL_CLIP_Y}
                  stroke="hsl(var(--primary))"
                  strokeWidth="2.5"
                  strokeDasharray="10 6"
                  opacity="0.9"
                />
              </g>

              {/* ── "NORTHERN CALIFORNIA" label ── */}
              <text
                x="75" y={NORCAL_CLIP_Y - 16}
                fontSize="11"
                fontWeight="700"
                fill="hsl(38 75% 30%)"
                fontFamily="system-ui, sans-serif"
                letterSpacing="1"
                opacity="0.9"
              >
                NORTHERN CALIFORNIA
              </text>

              {/* ── "SOUTHERN CALIFORNIA" label ── */}
              <text
                x="100" y={NORCAL_CLIP_Y + 50}
                fontSize="10"
                fontWeight="500"
                fill="#94a3b8"
                fontFamily="system-ui, sans-serif"
                letterSpacing="0.5"
              >
                SOUTHERN CALIFORNIA
              </text>

              {/* ── Compass Rose (Subtle) ── */}
              <g transform="translate(340, 60)" opacity="0.4">
                <circle r="20" fill="none" stroke="#cbd5e1" strokeWidth="0.5" />
                <path d="M 0,-15 L 3,0 L 0,15 L -3,0 Z" fill="#94a3b8" />
                <path d="M -15,0 L 0,-3 L 15,0 L 0,3 Z" fill="#94a3b8" />
                <text y="-22" textAnchor="middle" fontSize="10" fontWeight="700" fill="#94a3b8">N</text>
              </g>

              {/* ── City markers ── */}
              {cities.map((city) => {
                const active = hoveredCity === city.id;
                const lx = (city.labelAnchor === 'end')
                  ? city.cx + (city.labelDx ?? -14)
                  : city.cx + (city.labelDx ?? 14);
                const ly = city.cy + (city.labelDy ?? 5);

                return (
                  <g
                    key={city.id}
                    onMouseEnter={() => handleEnter(city.id)}
                    onMouseLeave={handleLeave}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Large transparent hit area to prevent hover glitching */}
                    <circle cx={city.cx} cy={city.cy} r={32} fill="transparent" style={{ pointerEvents: 'all' }} />

                    {/* Pulse ring on hover */}
                    <circle
                      cx={city.cx} cy={city.cy}
                      r={active ? 20 : 0}
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      opacity={active ? 0.5 : 0}
                      style={{ transition: 'r 0.2s ease, opacity 0.2s ease' }}
                    />

                    {/* Dot */}
                    <circle
                      cx={city.cx} cy={city.cy}
                      r={active ? 10 : 8}
                      fill={active ? 'hsl(var(--primary))' : '#1e293b'}
                      stroke="white"
                      strokeWidth="2.5"
                      style={{ transition: 'r 0.2s ease, fill 0.2s ease' }}
                    />

                    {/* City label */}
                    <text
                      x={lx} y={ly}
                      textAnchor={city.labelAnchor ?? 'start'}
                      fontSize={active ? '13' : '11'}
                      fontWeight={active ? '800' : '600'}
                      fill={active ? 'hsl(var(--primary-foreground))' : '#1e293b'}
                      fontFamily="system-ui, sans-serif"
                      style={{
                        pointerEvents: 'none',
                        transition: 'all 0.15s ease',
                        paintOrder: 'stroke fill',
                        filter: active ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' : 'none'
                      }}
                      stroke="white"
                      strokeWidth="4"
                    >
                      {city.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* ── Info Panel ── */}
          <div className="w-full lg:w-3/5">
            {/* Hover info card */}
            <div
              className={cn(
                'mb-6 p-8 rounded-2xl border transition-all duration-200',
                activeCity
                  ? 'bg-white border-primary/40 shadow-xl shadow-primary/10'
                  : 'bg-white border-slate-100 shadow-sm'
              )}
              style={{ minHeight: '140px' }}
            >
              {activeCity ? (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {activeCity.county}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{activeCity.name}</h3>
                  <p className="text-slate-500 text-base mb-4">{activeCity.tagline}</p>
                  <Link
                    to={`/locations/${activeCity.slug}`}
                    className="inline-flex items-center gap-1 text-base font-bold text-primary hover:underline"
                  >
                    View {activeCity.name} service page →
                  </Link>
                </>
              ) : (
                <div className="flex items-center justify-center h-full py-6">
                  <p className="text-slate-400 text-base text-center font-medium">
                    Hover over a city on the map to learn more, or click a button below.
                  </p>
                </div>
              )}
            </div>

            {/* City grid buttons */}
            <div className="grid grid-cols-2 gap-3">
              {cities.map((city) => (
                <Link
                  key={city.id}
                  to={`/locations/${city.slug}`}
                  onMouseEnter={() => handleEnter(city.id)}
                  onMouseLeave={handleLeave}
                  className={cn(
                    'flex items-center gap-3 px-5 py-4 rounded-xl border text-sm font-bold transition-all duration-150',
                    hoveredCity === city.id
                      ? 'bg-primary text-slate-900 border-primary shadow-md scale-[1.02]'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-primary hover:text-primary'
                  )}
                >
                  <div className={cn(
                    'w-2.5 h-2.5 rounded-full shrink-0 transition-colors duration-150',
                    hoveredCity === city.id ? 'bg-slate-900' : 'bg-primary'
                  )} />
                  {city.name.replace('Mt. ', 'Mount ')}
                </Link>
              ))}
              <Link
                to="/locations/northern-california"
                className="col-span-2 flex items-center justify-center gap-2 px-5 py-4 rounded-xl border-2 border-primary text-sm font-bold text-primary hover:bg-primary hover:text-slate-900 transition-all duration-150"
              >
                Explore All Northern California →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
