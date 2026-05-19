import { useEffect, useRef } from 'react';

/**
 * useParallax — attaches a scroll-driven parallax translateY effect to an element.
 *
 * @param speed  0 = no movement, 0.4 = moderate parallax (default), 1 = full scroll speed
 * @returns ref  attach to the element you want to move (typically an <img> or bg div)
 */
export function useParallax<T extends HTMLElement = HTMLElement>(speed = 0.4) {
  const ref = useRef<T>(null);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const parent = el.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      // Only animate when the section is at least partially visible
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      const scrolled = -rect.top; // px scrolled past section top
      const offset = scrolled * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(update);
    };

    // Initial position
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [speed]);

  return ref;
}
