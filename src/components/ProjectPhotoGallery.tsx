import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel';
import PhotoLightbox from '@/components/PhotoLightbox';
import { Expand } from 'lucide-react';

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

      <PhotoLightbox images={images} index={lightboxAt} onChange={setLightboxAt} alt={alt} />
    </>
  );
};

export default ProjectPhotoGallery;
