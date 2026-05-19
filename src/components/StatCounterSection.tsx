import React, { useEffect, useState, useRef } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Home, ShieldCheck, Award } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

interface Stat {
  id: number;
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { id: 1, icon: Home, value: 150, suffix: '+', label: 'Homes Protected & Upgraded' },
  { id: 2, icon: ShieldCheck, value: 10, suffix: '+', label: 'Years of Local Experience' },
  { id: 3, icon: Award, value: 5, suffix: ' Stars', label: 'Consistently Rated' },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5 });
  
  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white mb-2">
      {count}{suffix}
    </span>
  );
};

const StatCounterSection = () => {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-slate-400 font-medium text-lg mt-2">{stat.label}</p>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default StatCounterSection;
