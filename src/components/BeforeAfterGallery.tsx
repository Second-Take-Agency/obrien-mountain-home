import React from 'react';
import PhotoLightbox from '@/components/PhotoLightbox';
import { Expand } from 'lucide-react';

interface BeforeAfterGalleryProps {
  before: string[];
  after: string[];
  alt: string;
}

/**
 * Paired before/after grid: before[i] sits beside after[i]. Uneven arrays are fine —
 * a row with no counterpart just shows the one photo. Every photo opens full size.
 */
const BeforeAfterGallery = ({ before, after, alt }: BeforeAfterGalleryProps) => {
  const [openAt, setOpenAt] = React.useState<number | null>(null);

  // Flatten into display order so the lightbox pages through the grid as it reads.
  const tiles = React.useMemo(() => {
    const out: { src: string; label: 'Before' | 'After' }[] = [];
    for (let i = 0; i < Math.max(before.length, after.length); i++) {
      if (before[i]) out.push({ src: before[i], label: 'Before' });
      if (after[i]) out.push({ src: after[i], label: 'After' });
    }
    return out;
  }, [before, after]);

  if (!tiles.length) return null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tiles.map((tile, i) => (
          <button
            key={`${tile.src}-${tile.label}`}
            type="button"
            onClick={() => setOpenAt(i)}
            aria-label={`View ${tile.label.toLowerCase()} photo ${i + 1} of ${tiles.length} full size`}
            className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <img
              src={tile.src}
              alt={`${tile.label} — ${alt}`}
              className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <span
              className={`absolute top-4 left-4 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider shadow ${
                tile.label === 'Before' ? 'bg-slate-900/80 text-white' : 'bg-primary text-slate-900'
              }`}
            >
              {tile.label}
            </span>
            <span className="pointer-events-none absolute inset-0 bg-slate-950/0 transition-colors group-hover:bg-slate-950/20" />
            <span className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-slate-950/70 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white opacity-0 transition-opacity group-hover:opacity-100">
              <Expand className="h-3.5 w-3.5" />
              View
            </span>
          </button>
        ))}
      </div>

      <PhotoLightbox
        images={tiles.map(t => t.src)}
        labels={tiles.map(t => t.label)}
        index={openAt}
        onChange={setOpenAt}
        alt={alt}
      />
    </>
  );
};

export default BeforeAfterGallery;
