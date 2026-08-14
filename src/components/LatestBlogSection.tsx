import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '@/data/blogs';
import { AnimatedSection, StaggeredGrid } from '@/components/AnimatedSection';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const categoryColors: Record<string, string> = {
  'Fire Hardening': 'bg-red-100 text-red-700',
  'Decking': 'bg-amber-100 text-amber-700',
  'Siding': 'bg-blue-100 text-blue-700',
  'Local': 'bg-green-100 text-green-700',
};

/**
 * Latest posts, straight off the blogs array. The publish robot prepends each
 * new post, so this stays current on its own — no edit needed here when a post
 * goes live.
 */
const LatestBlogSection = ({ limit = 3 }: { limit?: number }) => {
  const posts = blogs.slice(0, limit);
  if (!posts.length) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From the North State Homeowner's Guide</h2>
            <p className="text-slate-600 max-w-2xl">
              Practical advice on siding, decking, and fire hardening for Redding and Northern California — updated as we publish.
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all whitespace-nowrap"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>

        <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerMs={110}>
          {posts.map(post => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
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
                <h3 className="text-lg font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors line-clamp-2 flex-1">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
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
      </div>
    </section>
  );
};

export default LatestBlogSection;
