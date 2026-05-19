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
 * Accurate California outline for viewBox "0 0 400 600"
 *
 * Coordinate mapping (derived from real lat/lon):
 *   x = (124.4 - lon) / 9.8 * 360 + 20
 *   y = (42   - lat) / 9.5 * 560 + 20
 *
 * Key features preserved:
 *   - Oregon border: straight horizontal line at y≈20
 *   - NV border: vertical at x=182 from OR to Lake Tahoe (y=200),
 *     then diagonal SE to AZ corner (375, 452)
 *   - AZ border: short vertical down to Mexico
 *   - Pacific coast: Point Conception hook (34.45°N, 120.47°W),
 *     SF Bay / Golden Gate jog, Point Reyes, Cape Mendocino bulge
 */
const CA_PATH = `
  M 27,20
  L 182,20
  L 182,200
  L 375,452
  L 378,565
  L 292,578
  L 277,538
  L 248,506
  L 226,492
  L 208,474
  L 164,465
  L 193,467
  L 150,409
  L 116,362
  L 112,338
  L 108,315
  L 90,286
  L 90,266
  L 71,256
  L 68,238
  L 47,202
  L 20,114
  L 27,91
  L 29,73
  L 27,35
  L 27,20
  Z
`;

// y value corresponding to ~37°N (Sacramento / Bay Area latitude)
const NORCAL_CLIP_Y = 310;

// All cities mapped using the same lat/lon formula above
const cities: MapCity[] = [
  {
    id: 'mount-shasta',
    name: 'Mt. Shasta',
    slug: 'mount-shasta-ca',
    county: 'Siskiyou County',
    tagline: 'Mountain climate siding & fire hardening',
    cx: 97, cy: 61,
    labelAnchor: 'start', labelDx: 14, labelDy: 4,
  },
  {
    id: 'redding',
    name: 'Redding',
    slug: 'redding-ca',
    county: 'Shasta County',
    tagline: 'Our home base — full services available',
    cx: 94, cy: 103,
    labelAnchor: 'start', labelDx: 14, labelDy: 4,
  },
  {
    id: 'red-bluff',
    name: 'Red Bluff',
    slug: 'red-bluff-ca',
    county: 'Tehama County',
    tagline: 'Rural & heat-exposed properties',
    cx: 99, cy: 127,
    labelAnchor: 'start', labelDx: 14, labelDy: 4,
  },
  {
    id: 'chico',
    name: 'Chico',
    slug: 'chico-ca',
    county: 'Butte County',
    tagline: 'Residential neighborhoods & older homes',
    cx: 114, cy: 154,
    labelAnchor: 'end', labelDx: -14, labelDy: -4,
  },
  {
    id: 'magalia',
    name: 'Magalia',
    slug: 'magalia-ca',
    county: 'Butte County',
    tagline: 'Forested mountain ember protection',
    cx: 130, cy: 146,
    labelAnchor: 'start', labelDx: 14, labelDy: -6,
  },
  {
    id: 'paradise',
    name: 'Paradise',
    slug: 'paradise-ca',
    county: 'Butte County',
    tagline: 'Rebuilding with fire-resilient materials',
    cx: 126, cy: 158,
    labelAnchor: 'start', labelDx: 14, labelDy: 10,
  },
  {
    id: 'oroville',
    name: 'Oroville',
    slug: 'oroville-ca',
    county: 'Butte County',
    tagline: 'Foothill homes near Lake Oroville',
    cx: 120, cy: 172,
    labelAnchor: 'end', labelDx: -14, labelDy: 12,
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
                {/* Subtle map grid */}
                <pattern id="map-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                </pattern>

                {/* Clip to CA outline */}
                <clipPath id="ca-clip">
                  <path d={CA_PATH} />
                </clipPath>

                {/* Clip to NorCal band */}
                <clipPath id="norcal-clip">
                  <rect x="0" y="0" width="400" height={NORCAL_CLIP_Y} />
                </clipPath>

                {/* Clip to SoCal band */}
                <clipPath id="socal-clip">
                  <rect x="0" y={NORCAL_CLIP_Y} width="400" height={600 - NORCAL_CLIP_Y} />
                </clipPath>
              </defs>

              {/* ── Base state fill ── */}
              <path d={CA_PATH} fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />

              {/* ── Grid overlay (entire state) ── */}
              <g clipPath="url(#ca-clip)">
                <rect x="0" y="0" width="400" height="600" fill="url(#map-grid)" />
              </g>

              {/* ── SoCal muted overlay (below divider) ── */}
              <g clipPath="url(#ca-clip)">
                <g clipPath="url(#socal-clip)">
                  <rect x="0" y={NORCAL_CLIP_Y} width="400" height={600 - NORCAL_CLIP_Y}
                    fill="#94a3b8" fillOpacity="0.18" />
                </g>
              </g>

              {/* ── NorCal service-area highlight (above divider) ── */}
              <g clipPath="url(#ca-clip)">
                <g clipPath="url(#norcal-clip)">
                  <rect x="0" y="0" width="400" height={NORCAL_CLIP_Y}
                    fill="hsl(var(--primary))" fillOpacity="0.38" />
                </g>
              </g>

              {/* ── Sacramento River trace (subtle) ── */}
              <g clipPath="url(#ca-clip)" opacity="0.25">
                <path
                  d="M 97,61 Q 96,85 94,103 Q 97,115 99,127 Q 106,140 114,154 Q 118,163 120,172"
                  fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3"
                />
              </g>

              {/* ── NorCal / SoCal boundary dashed line ── */}
              <g clipPath="url(#ca-clip)">
                <line
                  x1="0" y1={NORCAL_CLIP_Y}
                  x2="400" y2={NORCAL_CLIP_Y}
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeDasharray="8 5"
                  opacity="0.85"
                />
              </g>

              {/* ── Region labels ── */}
              <text
                x="55" y={NORCAL_CLIP_Y - 14}
                fontSize="9.5" fontWeight="800"
                fill="hsl(38 75% 28%)"
                fontFamily="system-ui, sans-serif"
                letterSpacing="1.2"
                clipPath="url(#ca-clip)"
              >
                SERVICE AREA
              </text>

              <text
                x="130" y={NORCAL_CLIP_Y + 44}
                fontSize="9" fontWeight="500"
                fill="#94a3b8"
                fontFamily="system-ui, sans-serif"
                letterSpacing="0.8"
                textAnchor="middle"
              >
                SOUTHERN CA
              </text>

              {/* ── Compass rose (inside SoCal portion) ── */}
              <g transform="translate(320, 410)" opacity="0.35">
                <circle r="16" fill="none" stroke="#94a3b8" strokeWidth="0.8" />
                <path d="M 0,-12 L 2.5,0 L 0,12 L -2.5,0 Z" fill="#94a3b8" />
                <path d="M -12,0 L 0,-2.5 L 12,0 L 0,2.5 Z" fill="#94a3b8" />
                <text y="-18" textAnchor="middle" fontSize="9" fontWeight="700" fill="#94a3b8">N</text>
              </g>

              {/* ── City markers ── */}
              {cities.map((city) => {
                const active = hoveredCity === city.id;
                const lx = city.cx + (city.labelDx ?? 14);
                const ly = city.cy + (city.labelDy ?? 5);

                return (
                  <g
                    key={city.id}
                    onMouseEnter={() => handleEnter(city.id)}
                    onMouseLeave={handleLeave}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Large transparent hit area prevents hover glitching */}
                    <circle
                      cx={city.cx} cy={city.cy} r={32}
                      fill="transparent"
                      style={{ pointerEvents: 'all' }}
                    />

                    {/* Outer pulse ring */}
                    <circle
                      cx={city.cx} cy={city.cy}
                      r={active ? 18 : 0}
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      opacity={active ? 0.45 : 0}
                      style={{ transition: 'r 0.22s ease, opacity 0.22s ease' }}
                    />

                    {/* City dot */}
                    <circle
                      cx={city.cx} cy={city.cy}
                      r={active ? 9 : 7}
                      fill={active ? 'hsl(var(--primary))' : '#1e293b'}
                      stroke="white"
                      strokeWidth="2"
                      style={{ transition: 'r 0.2s ease, fill 0.2s ease' }}
                    />

                    {/* City name label */}
                    <text
                      x={lx} y={ly}
                      textAnchor={city.labelAnchor ?? 'start'}
                      fontSize={active ? '12' : '10.5'}
                      fontWeight={active ? '800' : '700'}
                      fill={active ? 'hsl(38 75% 18%)' : '#0f172a'}
                      fontFamily="system-ui, sans-serif"
                      stroke="white"
                      strokeWidth="3.5"
                      style={{
                        pointerEvents: 'none',
                        transition: 'font-size 0.15s ease, fill 0.15s ease',
                        paintOrder: 'stroke fill',
                      }}
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
