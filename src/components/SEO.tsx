import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, any> | Record<string, any>[];
}

const SEO = ({ title, description, canonicalUrl, noIndex, jsonLd }: SEOProps) => {
  useEffect(() => {
    // Title
    if (title) document.title = title;

    // Description
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }

    // Canonical
    const href = canonicalUrl || window.location.href;
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', href);

    // Robots
    if (noIndex) {
      let robots = document.querySelector('meta[name="robots"]');
      if (!robots) {
        robots = document.createElement('meta');
        robots.setAttribute('name', 'robots');
        document.head.appendChild(robots);
      }
      robots.setAttribute('content', 'noindex, nofollow');
    }

    // JSON-LD structured data
    const existing = document.getElementById('page-jsonld');
    if (existing) existing.remove();
    if (jsonLd) {
      const scriptEl = document.createElement('script');
      (scriptEl as HTMLScriptElement).type = 'application/ld+json';
      scriptEl.id = 'page-jsonld';
      (scriptEl as HTMLScriptElement).text = JSON.stringify(jsonLd);
      document.head.appendChild(scriptEl);
    }
  }, [title, description, canonicalUrl, noIndex, jsonLd]);

  return null;
};

export default SEO;
