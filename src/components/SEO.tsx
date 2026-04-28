import { useEffect } from "react";
import { siteConfig } from "@/config/site";

interface SEOProps {
  title: string;
  description?: string;
  path?: string;
  jsonLd?: Record<string, unknown>;
}

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [, key, val] = selector.match(/\[(.+?)="(.+?)"\]/) || [];
    if (key && val) el.setAttribute(key, val);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

export const SEO = ({ title, description, path = "/", jsonLd }: SEOProps) => {
  const fullTitle = title.length > 60 ? title.slice(0, 57) + "..." : title;
  const desc = (description || siteConfig.description).slice(0, 158);
  const url = `${siteConfig.url}${path}`;

  useEffect(() => {
    document.title = fullTitle;
    setMeta('meta[name="description"]', "content", desc);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", desc);
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", desc);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    const existing = document.head.querySelector('script[data-seo-jsonld="true"]');
    if (existing) existing.remove();
    if (jsonLd) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.seoJsonld = "true";
      s.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(s);
    }
  }, [fullTitle, desc, url, jsonLd]);

  return null;
};
