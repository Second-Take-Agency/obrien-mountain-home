import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioCarouselProps {
  images: string[];
  alt: string;
}

/**
 * Lightweight image carousel used inside a portfolio card.
 * Renders prev/next controls and dot indicators. Self-contained, no deps.
 */
const PortfolioCarousel = ({ images, alt }: PortfolioCarouselProps) => {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const go = (next: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((prev) => (next + count) % count);
  };

  return (
    <div className="relative h-full w-full">
      {/* Slides */}
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} — photo ${i + 1} of ${count}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      ))}

      {/* Prev / Next arrows */}
      <button
        type="button"
        onClick={go(index - 1)}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/45 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={go(index + 1)}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/45 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={go(i)}
            aria-label={`Go to photo ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-5 bg-white' : 'w-2 bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioCarousel;
