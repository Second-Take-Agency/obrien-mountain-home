import React, { useRef, useState, useEffect } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  /**
   * How far outside the viewport the sentinel element must be before
   * the section starts rendering. 400px means "start rendering 400px
   * before the user would see it" — gives plenty of time to mount smoothly.
   */
  rootMargin?: string;
  /**
   * Min-height of the placeholder div shown before the section mounts.
   * Set this to roughly the expected height of the section to prevent
   * layout shift when content appears.
   */
  minHeight?: string;
  className?: string;
}

/**
 * LazySection
 *
 * Defers rendering its children until the section is within `rootMargin`
 * of the viewport. Unlike IntersectionObserver-based *animation* wrappers
 * (e.g. AnimatedSection), this component prevents the children from being
 * added to the DOM at all until needed — reducing initial DOM size, paint
 * work, and JavaScript execution during page load.
 *
 * Usage:
 *   <LazySection minHeight="400px">
 *     <HeavyComponent />
 *   </LazySection>
 *
 * Once rendered, the children stay rendered (no unmounting on scroll out).
 */
const LazySection = ({
  children,
  rootMargin = '400px',
  minHeight = '200px',
  className,
}: LazySectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If IntersectionObserver isn't available (very old browsers), render immediately
    if (typeof IntersectionObserver === 'undefined') {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect(); // Once rendered, we're done observing
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={className}
      style={shouldRender ? undefined : { minHeight }}
    >
      {shouldRender ? children : null}
    </div>
  );
};

export default LazySection;
