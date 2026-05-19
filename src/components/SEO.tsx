import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical = "/", 
  image = "https://vibe.filesafe.space/1777345871363473576/assets/99cdc4bc-0ac2-4dd1-b0b7-0cc82cf49e32.png",
  schema 
}) => {
  const siteName = "O’Brien Mountain Home";
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = "https://obrienmountainhome.com";
  const fullUrl = canonical.startsWith("http") ? canonical : `${baseUrl}${canonical}`;
  const fullImage = image.startsWith("http") ? image : `${baseUrl}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
