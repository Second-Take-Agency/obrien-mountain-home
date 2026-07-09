import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { blogs } from '@/data/blogs';
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import NotFound from './NotFound';
import GoogleReviews from '@/components/GoogleReviews';

const categoryColors: Record<string, string> = {
  'Fire Hardening': 'bg-red-100 text-red-700',
  'Decking': 'bg-amber-100 text-amber-700',
  'Siding': 'bg-blue-100 text-blue-700',
  'Local': 'bg-green-100 text-green-700',
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogs.find(b => b.slug === slug);
  const relatedPosts = blogs.filter(b => b.id !== post?.id && b.category === post?.category).slice(0, 2);

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${post.title} | O'Brien Mountain Home`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        image={post.image}
        ogType="article"
        publishedTime={post.date}
        modifiedTime={post.dateModified ?? post.date}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image,
            "author": {
              "@type": "Person",
              "name": post.author,
              "url": "https://obrienmountainhome.com/about"
            },
            "publisher": {
              "@type": "Organization",
              "name": "O'Brien Mountain Home",
              "logo": {
                "@type": "ImageObject",
                "url": "https://vibe.filesafe.space/1777345871363473576/assets/4e7f7a7c-4717-499f-a454-2b64f9ad4ab5.png"
              }
            },
            "datePublished": post.date,
            "dateModified": post.dateModified ?? post.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://obrienmountainhome.com/blog/${post.slug}`
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://obrienmountainhome.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://obrienmountainhome.com/blog" },
              { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://obrienmountainhome.com/blog/${post.slug}` }
            ]
          }
        ]}
      />

      <Header />

      <main>

        {/* Hero */}
        <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/30" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/80 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end pb-14 px-4">
            <div className="container mx-auto max-w-4xl">
              <span className={`inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest ${categoryColors[post.category] ?? 'bg-primary/20 text-primary'}`}>
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-5 text-slate-300 text-sm">
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{post.author}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{post.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl py-3">
            <nav className="flex items-center gap-2 text-sm text-slate-500">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-slate-800 font-medium truncate">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article Body */}
        <article className="container mx-auto px-4 max-w-4xl py-16">
          <div
            className="
              prose prose-slate prose-lg max-w-none
              prose-h2:text-2xl prose-h2:font-bold prose-h2:text-slate-900 prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:font-semibold prose-h3:text-slate-800 prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-slate-600 prose-p:leading-relaxed prose-p:my-4
              prose-ul:my-4 prose-li:text-slate-600
              prose-ol:my-4
              prose-strong:text-slate-900
              prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10 prose-img:w-full
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Company details */}
          <div style={{marginTop:'3.5rem',padding:'2rem 1.75rem',border:'1px solid #e5e7eb',borderRadius:'16px',background:'#f8fafc'}}>
            <h2 style={{margin:'0 0 0.75rem',fontSize:'24px',fontWeight:700}}>Serving Redding &amp; Northern California</h2>
            <p style={{margin:'0 0 1rem',lineHeight:1.7}}>O'Brien Mountain Home provides professional fire hardening, custom decks, residential siding, and commercial siding throughout Redding and Northern California — including Paradise, Magalia, Chico, Red Bluff, Oroville, and Mount Shasta. Licensed California contractor (Lic# 1135995).</p>
            <p style={{margin:'0 0 1.5rem',lineHeight:1.7}}><strong>Website:</strong> <a href="https://obrienmountainhome.com" className="text-primary">obrienmountainhome.com</a><br /><strong>Phone:</strong> <a href="tel:+15309997495" className="text-primary">(530) 999-7495</a></p>
            <p style={{margin:0}}><Link to="/contact" style={{display:'inline-block',background:'#f6ad56',color:'#0f172a',fontWeight:700,padding:'15px 32px',borderRadius:'999px',textDecoration:'none'}}>Request an Estimate →</Link></p>
          </div>

          {/* Back to Blog */}
          <div className="mt-16 pt-8 border-t border-slate-100">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Articles
            </Link>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-slate-50 py-16 border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {relatedPosts.map(related => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[related.category] ?? 'bg-primary/10 text-primary'}`}>
                        {related.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <span className="text-sm text-primary font-semibold inline-flex items-center gap-1">
                        Read Article <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Google Reviews */}
        <GoogleReviews />

        {/* CTA Form at the bottom */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
                Free Estimate
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Ready to Protect or Upgrade Your Home?
              </h2>
              <p className="text-slate-500 text-lg">
                Tell us what you're working on and we'll help you figure out the best next step. We reply within 24 business hours.
              </p>
            </div>
            <div className="text-center">
              <Link to="/contact" className="inline-block bg-primary text-slate-900 font-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
                Get in Touch →
              </Link>
            </div>
          </div>
        </section>

        {/* Footer divider */}
        <div className="h-1 bg-gradient-to-r from-slate-100 via-primary/30 to-slate-100" />
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
