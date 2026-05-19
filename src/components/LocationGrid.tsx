import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight } from 'lucide-react';
import { locations } from '@/data/locations';

const LocationGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Serving Redding and Northern California</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            From Redding to Paradise, Magalia, Chico, Red Bluff, Oroville, Mount Shasta, and the surrounding North State, we help homeowners and property owners upgrade homes for durability, appearance, and wildfire resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.map((loc) => (
            <Link 
              key={loc.id} 
              to={`/locations/${loc.slug}`}
              className="group flex items-center justify-between p-6 rounded-xl border border-slate-100 bg-slate-50 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 opacity-60 group-hover:opacity-100" />
                <span className="font-bold">{loc.name}</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationGrid;
