import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { blogs } from '@/data/blogs';
import { AnimatedSection, StaggeredGrid } from '@/components/AnimatedSection';
import ParallaxHero from '@/components/ParallaxHero';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const categories = ['All', 'Fire Hardening', 'Decking', 'Siding', 'Local'] as const;

const categoryColors: Record<string, string> = {
  'Fire Hardening': 'bg-red-100 text-red-700',
  'Decking': 'bg-amber-100 text-amber-700',
  'Siding': 'bg-blue-100 text-blue-700',
  'Local': 'bg-green-100 text-green-700',
};

const BlogHub = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered = activeCategory === 'All'
    ? blogs
    : blogs.filter(b => b.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="North State Homeowner's Guide | O'Brien Mountain Home Blog"
        description="Expert articles on fire hardening, Vulcan vents, decking, and siding for Northern California homeowners from O'Brien Mountain Home."
        canonical="/blog"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "The North State Homeowner's Guide",
            "url": "https://obrienmountainhome.com/blog",
            "description": "Expert advice on fire hardening, durable siding, and custom decking built for Northern California.",
            "publisher": {
              "@type": "Organization",
              "name": "O'Brien Mountain Home",
              "url": "https://obrienmountainhome.com"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://obrienmountainhome.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://obrienmountainhome.com/blog" }
            ]
          }
        ]}
      />

      <Header />

      <main>
        {/* Hero */}
        <ParallaxHero
          src="https://vibe.filesafe.space/1777345871363473576/assets/4506b997-edbb-4bf8-981c-11dbe97372dc.png"
          alt="Northern California homeowner resources and blog"
          overlayClass="bg-slate-900/80"
          className="min-h-[60vh]"
        >
          <div className="container mx-auto px-4 text-center py-28">
            <AnimatedSection>
              <span className="inline-block bg-primary/20 text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
                Expert Resources
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                The North State<br />Homeowner's Guide
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Practical advice on fire hardening, durable siding, and custom decking — written for Northern California conditions.
              </p>
            </AnimatedSection>
          </div>
        </ParallaxHero>

        {/* Filter tabs */}
        <section className="bg-slate-50 border-b border-slate-100 sticky top-[72px] z-30">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto py-3 scrollbar-none">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-primary text-slate-900'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-primary hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-7xl">

            {/* Featured post */}
            {/* Featured post */}
            {featured && (
              <AnimatedSection className="mb-16">
                <Link to={`/blog/${featured.slug}`} className="group grid md:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100">
                  <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-5 left-5">
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${categoryColors[featured.category] ?? 'bg-primary/10 text-primary'}`}>
                        {featured.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-slate-400 text-xs mb-5 font-medium uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 group-hover:text-primary transition-colors mb-5 leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-slate-500 leading-relaxed mb-8">{featured.excerpt}</p>
                    <span className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all">
                      Read Full Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            )}

            {/* Rest of posts */}
            {rest.length > 0 && (
              <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerMs={110}>
                {rest.map(post => (
                  <article key={post.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                    <Link to={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${categoryColors[post.category] ?? 'bg-primary/10 text-primary'}`}>
                          {post.category}
                        </span>
                      </div>
                    </Link>
                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-slate-400 text-xs mb-4 font-medium uppercase tracking-widest">
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                      </div>
                      <h2 className="text-lg font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors line-clamp-2 flex-1">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all mt-auto"
                      >
                        Read Article <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </StaggeredGrid>
            )}

            {filtered.length === 0 && (
              <div className="text-center py-20 text-slate-400">
                <p className="text-xl">No articles in this category yet.</p>
              </div>
            )}
          </div>
        </section>

        <div className="h-1 bg-gradient-to-r from-slate-100 via-primary/30 to-slate-100" />
      </main>

      <Footer />
    </div>
  );
};

export default BlogHub;
