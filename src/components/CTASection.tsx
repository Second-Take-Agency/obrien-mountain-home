import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryText?: string;
  primaryLink?: string;
  secondaryText?: string;
  secondaryLink?: string;
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to Protect or Upgrade Your Home?",
  description = "Tell us what you are working on, and we will help you figure out the best next step.",
  primaryText = "Request an Estimate",
  primaryLink = "/contact",
  secondaryText = "Call (530) 999-7495",
  secondaryLink = "tel:5309997495",
  className = ""
}) => {
  return (
    <section className={`py-20 bg-slate-900 text-white ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 py-6 text-lg font-bold min-w-[240px] bg-primary text-slate-900 hover:bg-primary/90 hover:text-slate-900"
          >
            <Link to={primaryLink}>{primaryText}</Link>
          </Button>
          <a
            href={secondaryLink}
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-[18px] text-lg font-bold min-w-[240px] border-2 border-slate-600 text-slate-200 hover:border-primary hover:text-primary transition-all duration-200"
          >
            <Phone className="w-5 h-5" />
            {secondaryText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
