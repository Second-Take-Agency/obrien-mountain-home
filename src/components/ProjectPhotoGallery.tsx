import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';

interface ProjectPhotoGalleryProps {
  images: string[];
  alt: string;
}

/**
 * ProjectPhotoGallery
 *
 * Looping carousel of a project's photos. Clicking a photo opens it full size
 * in a lightbox, which can then be paged with the arrows or the keyboard.
 */
const ProjectPhotoGallery = ({ images, alt }: ProjectPhotoGalleryProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [lightboxAt, setLightboxAt] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  const count = images.length;
  const step = React.useCallback(
    (delta: number) => setLightboxAt(i => (i === null ? null : (i + delta + count) % count)),
    [count]
  );

  // Arrow keys page the lightbox. Escape is already handled by the dialog.
  React.useEffect(() => {
    if (lightboxAt === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxAt, step]);

  if (!images.length) return null;

  return (
    <>
      <Carousel opts={{ loop: true, align: 'start' }} setApi={setApi} className="w-full">
        <CarouselContent className="-ml-4">
          {images.map((src, i) => (
            <CarouselItem
              key={src}
              className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <button
                type="button"
                onClick={() => setLightboxAt(i)}
                aria-label={`View photo ${i + 1} of ${count} full size`}
                className="group relative block w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <img
                  src={src}
                  alt={alt}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={i < 4 ? 'eager' : 'lazy'}
                />
                <span className="pointer-events-none absolute inset-0 bg-slate-950/0 transition-colors group-hover:bg-slate-950/20" />
                <span className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-slate-950/70 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <Expand className="h-3.5 w-3.5" />
                  View
                </span>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Inset over the photo — the carousel now runs the full container width,
            so arrows hung outside it would sit off-screen. */}
        <CarouselPrevious className="left-4 h-11 w-11 border-none bg-slate-950/60 text-white hover:bg-slate-950/80 hover:text-white" />
        <CarouselNext className="right-4 h-11 w-11 border-none bg-slate-950/60 text-white hover:bg-slate-950/80 hover:text-white" />
      </Carousel>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === current ? 'w-6 bg-primary' : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>

      <Dialog open={lightboxAt !== null} onOpenChange={open => !open && setLightboxAt(null)}>
        <DialogContent
          className="max-w-[95vw] border-none bg-transparent p-0 shadow-none sm:max-w-5xl"
          aria-describedby={undefined}
        >
          {lightboxAt !== null && (
            <div className="relative">
              {/* Announced to screen readers when the lightbox opens; Radix requires a title. */}
              <DialogTitle className="sr-only">
                {alt} — photo {lightboxAt + 1} of {count}
              </DialogTitle>
              <img
                src={images[lightboxAt]}
                alt={`${alt} — photo ${lightboxAt + 1} of ${count}`}
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
                    {lightboxAt + 1} / {count}
                  </span>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectPhotoGallery;
