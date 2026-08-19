import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import PortfolioCarousel from '@/components/PortfolioCarousel';
import ProjectPhotoGallery from '@/components/ProjectPhotoGallery';
import { AnimatedSection } from '@/components/AnimatedSection';
import { portfolioProjects } from '@/data/portfolio';
import NotFound from '@/pages/NotFound';
import { MapPin, ArrowLeft } from 'lucide-react';

const categoryLabels: Record<string, string> = {
  'fire-hardening': 'Fire Hardening',
  'decking': 'Decking',
  'residential-siding': 'Residential Siding',
  'commercial-siding': 'Commercial Siding',
};

const categoryColors: Record<string, string> = {
  'fire-hardening': 'bg-red-500/20 text-red-200',
  'decking': 'bg-amber-500/20 text-amber-200',
  'residential-siding': 'bg-blue-500/20 text-blue-200',
  'commercial-siding': 'bg-green-500/20 text-green-200',
};

const PortfolioProject = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = portfolioProjects.find(p => p.slug === slug);

  if (!project) return <NotFound />;

  const label = categoryLabels[project.category] ?? project.category.replace('-', ' ');
  // Projects without a story block fall back to the short card copy, so the page is
  // never empty if one is added to the data before its long-form copy is written.
  const story = project.story ?? {
    challenge: project.challenge,
    solution: project.solution,
    result: '',
  };

  // Projects with a before/after pair lay their photos out there; the rest need a
  // plain gallery, or their extra photos only ever appear in the hero carousel.
  const showPhotoGallery = !project.beforeAfter && (project.images?.length ?? 0) > 1;
  const hasGallery = Boolean(project.beforeAfter) || showPhotoGallery;

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${project.title} | ${project.location}`}
        description={project.solution}
        canonical={`/portfolio/${project.slug}`}
        image={project.image}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://obrienmountainhome.com" },
              { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://obrienmountainhome.com/portfolio" },
              { "@type": "ListItem", "position": 3, "name": project.title, "item": `https://obrienmountainhome.com/portfolio/${project.slug}` }
            ]
          }
        ]}
      />

      <Header />

      <main>
        {/* ─── Hero ─── */}
        <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
          {project.images && project.images.length > 1 ? (
            <PortfolioCarousel images={project.images} alt={project.title} />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
          {/* pointer-events-none so the carousel arrows underneath stay clickable */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/30" />
          <div className="absolute inset-x-0 top-0 h-28 pointer-events-none bg-gradient-to-b from-slate-950/80 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end pb-14 px-4 pointer-events-none">
            <div className="container mx-auto max-w-4xl">
              <span className={`inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest ${categoryColors[project.category] ?? 'bg-primary/20 text-primary'}`}>
                {label}
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl mb-4">
                {project.title}
              </h1>
              <div className="flex items-center gap-1.5 text-slate-300 text-sm font-medium">
                <MapPin className="w-4 h-4" />
                {project.location}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Breadcrumb ─── */}
        <div className="bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-3xl py-3">
            <nav className="flex items-center gap-2 text-sm text-slate-500">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
              <span>/</span>
              <span className="text-slate-800 font-medium truncate">{project.title}</span>
            </nav>
          </div>
        </div>

        {/* ─── The Story ─── */}
        <section className="container mx-auto px-4 max-w-3xl py-16">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Challenge</h2>
            <p className="text-slate-600 leading-relaxed text-lg">{story.challenge}</p>
          </AnimatedSection>

          <AnimatedSection className="mt-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Did</h2>
            <p className="text-slate-600 leading-relaxed text-lg">{story.solution}</p>
          </AnimatedSection>

          {story.result && (
            <AnimatedSection className="mt-14">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">The Result</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{story.result}</p>
            </AnimatedSection>
          )}
        </section>

        {/* ─── Before & After gallery (only when the project has photos) ─── */}
        {project.beforeAfter && (
          <section className="py-16 bg-slate-50 border-y border-slate-100">
            <div className="container mx-auto px-4 max-w-5xl">
              <AnimatedSection className="text-center mb-10">
                <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">See the Difference</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Before &amp; After</h2>
                {project.beforeAfter.caption && (
                  <p className="text-slate-600 max-w-2xl mx-auto">{project.beforeAfter.caption}</p>
                )}
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array.from({
                  length: Math.max(project.beforeAfter.before.length, project.beforeAfter.after.length),
                }).flatMap((_, i) =>
                  [
                    { src: project.beforeAfter!.before[i], label: 'Before', tone: 'bg-slate-900/80 text-white' },
                    { src: project.beforeAfter!.after[i], label: 'After', tone: 'bg-primary text-slate-900' },
                  ]
                    // a row may be uneven — skip the missing half rather than render an empty box
                    .filter(item => Boolean(item.src))
                    .map(item => (
                      <figure
                        key={item.src}
                        className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white"
                      >
                        <img
                          src={item.src}
                          alt={`${item.label} — ${project.title}`}
                          className="w-full h-full aspect-[4/3] object-cover"
                          loading="lazy"
                        />
                        <figcaption
                          className={`absolute top-4 left-4 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow ${item.tone}`}
                        >
                          {item.label}
                        </figcaption>
                      </figure>
                    ))
                )}
              </div>
            </div>
          </section>
        )}

        {/* ─── Project photo gallery ───
            Only for projects with no before/after pair. The hero carousel shows one
            photo at a time behind an overlay, so without this the extra photos are
            effectively invisible. Projects that DO have a before/after gallery already
            lay their photos out above, so this would just repeat them. */}
        {showPhotoGallery && (
          <section className="py-16 bg-slate-50 border-y border-slate-100">
            <div className="container mx-auto px-4 max-w-5xl">
              <AnimatedSection className="text-center mb-10">
                <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">The Finished Work</p>
                <h2 className="text-2xl md:text-3xl font-bold">Project Photos</h2>
              </AnimatedSection>
              <ProjectPhotoGallery images={project.images} alt={project.title} />
            </div>
          </section>
        )}

        {/* Without a gallery section above, this keeps the original rule-and-spacing
            that used to separate the story from the tags. */}
        <section className={`container mx-auto px-4 max-w-3xl pb-16 ${hasGallery ? 'pt-16' : 'pt-0'}`}>
          {/* Materials & methods — the tags carry the brand names and are shown nowhere else */}
          <AnimatedSection className={hasGallery ? '' : 'pt-10 border-t border-slate-100'}>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">
              Materials &amp; Methods
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <div className="mt-14">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Projects
            </Link>
          </div>
        </section>

        <CTASection
          title="Have a Project Like This?"
          description="Tell us what you're planning and we'll walk the property with you. Free estimates across Redding and Northern California."
        />
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioProject;
