import React from 'react';
// Trigger rebuild
import { Link } from 'react-router-dom';
import { Facebook, Phone, Mail, MapPin, Star, MapIcon } from 'lucide-react';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

const LOGO_URL = "https://vibe.filesafe.space/1777345871363473576/assets/4e7f7a7c-4717-499f-a454-2b64f9ad4ab5.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="h-1 bg-gradient-to-r from-slate-100 via-primary/30 to-slate-100" />
      <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={LOGO_URL}
                alt="O'Brien Mountain Home Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Serving Northern California with decking, siding, and fire hardening solutions. We help homeowners build safer, stronger, and more resilient properties.
            </p>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-slate-300 tracking-wide uppercase">License</span>
              <span className="text-slate-400 text-sm">Lic# 1135995</span>
            </div>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/obrienmountainhome" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-colors"
                aria-label="O'Brien Mountain Home on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.google.com/search?q=obrien+mountain+home"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-colors"
                aria-label="O'Brien Mountain Home on Google"
              >
                <MapIcon className="w-5 h-5" />
              </a>
            </div>
            <a
              href="https://g.page/r/CdvSfOZj6Q6zEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-primary hover:text-slate-900 transition-colors rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-300"
            >
              <Star className="w-4 h-4 text-primary" />
              Leave a Google Review
            </a>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="flex flex-col gap-4">
              {services.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.slug}`} 
                    className="text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-primary font-semibold text-sm hover:underline">
                  All Services
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <Link to="/contact" className="text-primary font-semibold text-sm hover:underline flex items-center gap-1">
                  Request an Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Service Areas</h3>
            <ul className="grid grid-cols-1 gap-4">
              {locations.slice(0, 8).map((loc) => (
                <li key={loc.id}>
                  <Link 
                    to={`/locations/${loc.slug}`} 
                    className="text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-400 text-sm">1304 East St, Redding, CA 96001</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:5309997495" className="text-slate-400 hover:text-primary transition-colors text-sm">
                  (530) 999-7495
                </a>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:mcrans@obrienmountainhome.com" className="text-slate-400 hover:text-primary transition-colors text-sm break-all">
                  mcrans@obrienmountainhome.com
                </a>
              </li>
              <li className="pt-2">
                <p className="text-xs text-slate-500 italic">
                  We reply within 24 business hours.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} O'Brien Mountain Home. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
          <p>Website by Rework Consulting LLC</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
