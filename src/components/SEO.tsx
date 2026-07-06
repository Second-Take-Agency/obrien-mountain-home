import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  /** Pass a single schema object or an array of schema objects for multiple JSON-LD blocks */
  schema?: object | object[];
  /** Set to 'article' for blog posts to add article-specific Open Graph tags */
  ogType?: 'website' | 'article';
  /** ISO date string for blog posts (e.g. "2026-04-20") */
  publishedTime?: string;
  /** ISO date string for last modification — used in BlogPosting schema and article OG */
  modifiedTime?: string;
  /** Override robots meta tag — use "noindex,follow" for legal/utility pages */
  robots?: string;
  /** Comma-separated target keywords — rendered as a hidden SEO meta tag, not visible on the page */
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical = "/",
  image = "https://vibe.filesafe.space/1777345871363473576/assets/99cdc4bc-0ac2-4dd1-b0b7-0cc82cf49e32.png",
  schema,
  ogType = 'website',
  publishedTime,
  modifiedTime,
  robots,
  keywords,
}) => {
  const siteName = "O'Brien Mountain Home";
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = "https://obrienmountainhome.com";
  const fullUrl = canonical.startsWith("http") ? canonical : `${baseUrl}${canonical}`;
  const fullImage = image.startsWith("http") ? image : `${baseUrl}${image}`;

  // Normalise schema to an array so we can render multiple JSON-LD blocks
  const schemas: object[] = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      {robots && <meta name="robots" content={robots} />}

      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />

      {/* Article-specific OG tags (blog posts) */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && (
        <meta property="article:author" content="Marcus Crans" />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* JSON-LD Structured Data — one block per schema object */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
