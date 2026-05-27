import React from 'react';
import { useParallax } from '@/hooks/useParallax';

interface ParallaxHeroProps {
  /** Image URL for the hero background */
  src: string;
  /** Descriptive alt text for the image */
  alt: string;
  /** 0–1: how much the image moves relative to scroll. Default 0.35 */
  speed?: number;
  /** Overlay gradient class(es). Defaults to a strong dark-left gradient */
  overlayClass?: string;
  /** Extra classes on the outer wrapper */
  className?: string;
  children: React.ReactNode;
}

/**
 * ParallaxHero
 *
 * Wraps a hero section with a parallax background image.
 * The image is scaled up slightly (scale-110) so the parallax shift
 * never reveals empty space at the edges.
 *
 * Usage:
 *   <ParallaxHero src="/assets/my-hero.webp" alt="…">
 *     <div className="container …">…</div>
 *   </ParallaxHero>
 */
const ParallaxHero = ({
  src,
  alt,
  speed = 0.35,
  overlayClass = 'bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/40',
  className = '',
  children,
}: ParallaxHeroProps) => {
  const imgRef = useParallax<HTMLImageElement>(speed);

  return (
    <section
      className={`relative min-h-screen flex items-center pt-20 overflow-hidden ${className}`}
    >
      {/* ── Parallax image layer ── */}
      <div className="absolute inset-0 z-0">
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          /**
           * scale-110 gives ~10% overflow on each axis so the parallax offset
           * never reveals a gap at the top or bottom.
           * will-change-transform tells the browser to promote to its own layer.
           */
          className="w-full h-full object-cover scale-110 origin-center will-change-transform"
          loading="eager"
          fetchPriority="high"
        />
        {/* Primary directional overlay */}
        <div className={`absolute inset-0 ${overlayClass}`} />
        {/* Bottom fade for text anchored to the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};

export default ParallaxHero;
