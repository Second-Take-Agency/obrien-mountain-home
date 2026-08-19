import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '@/data/blogs';
import { AnimatedSection } from '@/components/AnimatedSection';

interface RelatedPostsProps {
  /** Blog category to pull from, e.g. "Decking". */
  category: string;
  limit?: number;
}

/**
 * "From Our Blog" strip for the service pages.
 *
 * This lives in its own component so the pages can import it lazily. Importing
 * `@/data/blogs` at module scope pulled the 233 KB blog chunk — the full body text of
 * every post — into each service page's critical bundle just to render two card titles.
 */
const RelatedPosts = ({ category, limit = 2 }: RelatedPostsProps) => {
  const posts = blogs.filter(b => b.category === category).slice(0, limit);
  if (!posts.length) return null;

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">From Our Blog</h2>
          <p className="text-slate-500 text-sm">Resources for Northern California homeowners</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {posts.map(post => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-2">{post.excerpt}</p>
                <span className="inline-block mt-3 text-xs font-semibold text-primary">Read Article →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
