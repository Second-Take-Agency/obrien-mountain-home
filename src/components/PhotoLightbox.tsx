import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PhotoLightboxProps {
  images: string[];
  /** Index of the open photo, or null when closed. */
  index: number | null;
  onChange: (index: number | null) => void;
  /** Used for the alt text and the screen-reader title. */
  alt: string;
  /** Optional per-photo label (e.g. "Before" / "After"), shown next to the counter. */
  labels?: string[];
}

/**
 * PhotoLightbox — full-size photo viewer shared by the project galleries.
 * Wraps at both ends, pages with the arrow keys, and closes on Escape.
 */
const PhotoLightbox = ({ images, index, onChange, alt, labels }: PhotoLightboxProps) => {
  const count = images.length;

  const step = React.useCallback(
    (delta: number) => onChange(index === null ? null : (index + delta + count) % count),
    [index, count, onChange]
  );

  React.useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, step]);

  const label = index !== null ? labels?.[index] : undefined;

  return (
    <Dialog open={index !== null} onOpenChange={open => !open && onChange(null)}>
      <DialogContent
        className="max-w-[95vw] border-none bg-transparent p-0 shadow-none sm:max-w-5xl"
        aria-describedby={undefined}
      >
        {index !== null && (
          <div className="relative">
            {/* Radix requires a title; hidden visually, announced to screen readers. */}
            <DialogTitle className="sr-only">
              {alt} — {label ? `${label}, ` : ''}photo {index + 1} of {count}
            </DialogTitle>
            <img
              src={images[index]}
              alt={`${alt} — photo ${index + 1} of ${count}`}
              className="max-h-[85vh] w-full rounded-xl object-contain"
            />
            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/60 p-3 text-white transition-colors hover:bg-slate-950/80"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/60 p-3 text-white transition-colors hover:bg-slate-950/80"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-950/70 px-3 py-1.5 text-xs font-bold tracking-wider text-white">
                  {label ? `${label} — ` : ''}
                  {index + 1} / {count}
                </span>
              </>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PhotoLightbox;
