import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { cn } from '@/lib/utils';

const LOGO_URL = "https://vibe.filesafe.space/1777345871363473576/assets/4e7f7a7c-4717-499f-a454-2b64f9ad4ab5.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isTransparent = !scrolled;

  const navTextClass = isTransparent ? 'text-white' : 'text-slate-700';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src={LOGO_URL}
              alt="O'Brien Mountain Home Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link to="/" className={cn('text-sm font-medium transition-colors hover:text-primary', navTextClass)}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className={cn('flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary', navTextClass)}>
                Services <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.slug}`}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
                <div className="border-t border-slate-100 mt-2 pt-2">
                  <Link to="/services" className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-slate-50 transition-colors">
                    All Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Locations Dropdown */}
            <div className="relative group">
              <button className={cn('flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary', navTextClass)}>
                Locations <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 max-h-[70vh] overflow-y-auto">
                {locations.map((loc) => (
                  <Link
                    key={loc.id}
                    to={`/locations/${loc.slug}`}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/commercial" className={cn('text-sm font-medium transition-colors hover:text-primary', navTextClass)}>Commercial</Link>
            <Link to="/portfolio" className={cn('text-sm font-medium transition-colors hover:text-primary', navTextClass)}>Portfolio</Link>
            <Link to="/about" className={cn('text-sm font-medium transition-colors hover:text-primary', navTextClass)}>About</Link>
            <Link to="/blog" className={cn('text-sm font-medium transition-colors hover:text-primary', navTextClass)}>Blog</Link>
            <Link to="/contact" className={cn('text-sm font-medium transition-colors hover:text-primary', navTextClass)}>Contact</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:5309997495"
              className={cn('flex items-center gap-2 text-sm font-semibold transition-colors hover:text-primary', isTransparent ? 'text-white' : 'text-slate-900')}
            >
              <Phone className="w-4 h-4" /> (530) 999-7495
            </a>
            <Button asChild className="rounded-full px-6 bg-primary text-slate-900 font-bold hover:bg-primary/90">
              <Link to="/contact">Request an Estimate</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={cn('lg:hidden p-2 rounded-lg', isTransparent ? 'text-white' : 'text-slate-900')}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white transform transition-transform duration-300 lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6 overflow-y-auto">
          <div className="absolute top-4 left-6">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img src={LOGO_URL} alt="O'Brien Mountain Home Logo" className="h-10 w-auto object-contain" />
            </Link>
          </div>
          <button className="absolute top-4 right-6 p-2 text-slate-900" onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>

          <nav className="flex flex-col gap-6 mb-12">
            <Link to="/" className="text-xl font-bold text-slate-900">Home</Link>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center justify-between text-xl font-bold text-slate-900"
              >
                Services <ChevronDown className={cn('w-5 h-5 transition-transform', activeDropdown === 'services' && 'rotate-180')} />
              </button>
              {activeDropdown === 'services' && (
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-slate-100">
                  {services.map((service) => (
                    <Link key={service.id} to={`/services/${service.slug}`} className="text-lg text-slate-600">
                      {service.title}
                    </Link>
                  ))}
                  <Link to="/services" className="text-lg font-bold text-primary">All Services</Link>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => toggleDropdown('locations')}
                className="flex items-center justify-between text-xl font-bold text-slate-900"
              >
                Locations <ChevronDown className={cn('w-5 h-5 transition-transform', activeDropdown === 'locations' && 'rotate-180')} />
              </button>
              {activeDropdown === 'locations' && (
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-slate-100 max-h-[40vh] overflow-y-auto">
                  {locations.map((loc) => (
                    <Link key={loc.id} to={`/locations/${loc.slug}`} className="text-lg text-slate-600">
                      {loc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/commercial" className="text-xl font-bold text-slate-900">Commercial</Link>
            <Link to="/portfolio" className="text-xl font-bold text-slate-900">Portfolio</Link>
            <Link to="/about" className="text-xl font-bold text-slate-900">About</Link>
            <Link to="/blog" className="text-xl font-bold text-slate-900">Blog</Link>
            <Link to="/contact" className="text-xl font-bold text-slate-900">Contact</Link>
          </nav>

          <div className="mt-auto flex flex-col gap-4">
            <Button asChild size="lg" className="rounded-full w-full bg-primary text-slate-900 font-bold">
              <Link to="/contact">Request an Estimate</Link>
            </Button>
            <a
              href="tel:5309997495"
              className="flex items-center justify-center gap-2 py-3 border-2 border-slate-200 rounded-full text-lg font-bold text-slate-900"
            >
              <Phone className="w-5 h-5" /> Call (530) 999-7495
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
