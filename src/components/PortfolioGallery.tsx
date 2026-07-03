import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioProjects as projects } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin } from 'lucide-react';
import PortfolioCarousel from '@/components/PortfolioCarousel';

const categories = ["All", "Fire Hardening", "Decking", "Residential Siding", "Commercial Siding"];

const PortfolioGallery = ({ limit }: { limit?: number }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => {
        const categoryMap: Record<string, string> = {
          "Fire Hardening": "fire-hardening",
          "Decking": "decking",
          "Residential Siding": "residential-siding",
          "Commercial Siding": "commercial-siding"
        };
        return p.category === categoryMap[activeCategory];
      });

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Work Across Northern California</h2>
            <p className="text-slate-600 max-w-2xl">
              Explore how we've helped local homeowners protect and upgrade their properties with fire-aware materials and expert craftsmanship.
            </p>
          </div>
          {!limit && (
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={activeCategory === cat 
                    ? "px-4 py-2 rounded-full text-sm font-semibold transition-all bg-primary text-white shadow-md" 
                    : "px-4 py-2 rounded-full text-sm font-semibold transition-all bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                {project.images && project.images.length > 1 ? (
                  <PortfolioCarousel images={project.images} alt={project.title} />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                )}
                <div className="absolute top-4 right-4 z-20">
                  <Badge className="bg-white/90 text-slate-900 hover:bg-white backdrop-blur-sm border-none font-bold capitalize">
                    {project.category.replace('-', ' ')}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                  <MapPin className="w-3 h-3" />
                  {project.location}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-tight block mb-1">Challenge</span>
                    <p className="text-slate-600 text-sm italic">"{project.challenge}"</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-tight block mb-1">Solution</span>
                    <p className="text-slate-600 text-sm">{project.solution}</p>
                  </div>
                </div>
                <Button asChild variant="ghost" className="group/btn w-full justify-between hover:bg-primary hover:text-white border border-slate-100">
                  <Link to={project.link || "/portfolio"}>
                    View Project Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-full px-10 py-6 text-lg font-bold">
              <Link to="/portfolio">View All Recent Projects</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGallery;
