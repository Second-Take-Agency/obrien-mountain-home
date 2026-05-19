import React from 'react';
import { useInView } from '@/hooks/useInView';

type AnimVariant = 'up' | 'left' | 'right' | 'scale';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimVariant;
  delay?: 0 | 100 | 150 | 200 | 300 | 400 | 500 | 600 | 700;
  as?: keyof JSX.IntrinsicElements;
  threshold?: number;
}

const variantClass: Record<AnimVariant, string> = {
  up: 'reveal',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
};

const delayClass: Record<number, string> = {
  0: '',
  100: 'delay-100',
  150: 'delay-150',
  200: 'delay-200',
  300: 'delay-300',
  400: 'delay-400',
  500: 'delay-500',
  600: 'delay-600',
  700: 'delay-700',
};

/**
 * AnimatedSection — wraps any content and fades/slides it in when it enters the viewport.
 *
 * Usage:
 *   <AnimatedSection variant="up" delay={200} className="my-custom-class">
 *     <h2>...</h2>
 *   </AnimatedSection>
 */
export const AnimatedSection = ({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  as: Tag = 'div',
  threshold,
}: AnimatedSectionProps) => {
  const { ref, inView } = useInView<HTMLElement>({ threshold });

  const classes = [
    variantClass[variant],
    delay ? delayClass[delay] : '',
    inView ? 'in-view' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    // @ts-expect-error: dynamic tag
    <Tag ref={ref} className={classes}>
      {children}
    </Tag>
  );
};

/**
 * StaggeredGrid — wraps a list of items and staggers each child's entrance animation.
 *
 * Usage:
 *   <StaggeredGrid className="grid grid-cols-3 gap-8">
 *     {items.map(item => <Card key={item.id} {...item} />)}
 *   </StaggeredGrid>
 */
interface StaggeredGridProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimVariant;
  staggerMs?: number; // ms between each item
  threshold?: number;
}

export const StaggeredGrid = ({
  children,
  className = '',
  variant = 'up',
  staggerMs = 100,
  threshold,
}: StaggeredGridProps) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold });

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, i) => (
        <div
          className={[
            variantClass[variant],
            inView ? 'in-view' : '',
          ].join(' ')}
          style={{ animationDelay: inView ? `${i * staggerMs}ms` : '0ms' }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default AnimatedSection;
