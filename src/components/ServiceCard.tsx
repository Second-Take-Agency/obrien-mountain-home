import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Hammer, Home, Building2 } from 'lucide-react';
import { Service } from '@/data/services';
import { Button } from '@/components/ui/button';

const iconMap: Record<string, any> = {
  ShieldCheck,
  Hammer,
  Home,
  Building2,
};

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = iconMap[service.icon] || Home;

  return (
    <div className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
        <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
          {service.description}
        </p>
        <Button asChild variant="ghost" className="group/btn w-fit p-0 hover:bg-transparent text-primary font-bold">
          <Link to={`/services/${service.slug}`} className="flex items-center gap-2">
            Explore {service.title}
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
