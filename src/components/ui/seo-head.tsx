import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
}

const SEOHead = ({
  title = "Next.Level.Design - Digital Marketing Agency",
  description = "Transform your business with Next.Level.Design - a leading digital marketing agency specializing in web design, SEO, and growth strategies.",
  keywords = "digital marketing, web design, SEO, digital agency, marketing strategy, website development, online marketing",
  canonical,
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  noindex = false
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:url', window.location.href, 'property');
    
    // Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    
    // Canonical URL
    if (canonical) {
      updateCanonicalLink(canonical);
    }
    
    // Robots meta tag
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');
    
    // Structured data
    if (structuredData) {
      updateStructuredData(structuredData);
    }
    
  }, [title, description, keywords, canonical, ogImage, ogType, twitterCard, structuredData, noindex]);

  const updateMetaTag = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
    let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    
    element.setAttribute('content', content);
  };
  
  const updateCanonicalLink = (href: string) => {
    let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', 'canonical');
      document.head.appendChild(element);
    }
    
    element.setAttribute('href', href);
  };
  
  const updateStructuredData = (data: object) => {
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };

  return null;
};

export default SEOHead;