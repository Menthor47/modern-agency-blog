import { useEffect } from 'react';
import CoreWebVitals from './core-web-vitals';

// Performance budget thresholds
const PERFORMANCE_BUDGETS = {
  LCP: 2500, // ms
  INP: 200,  // ms
  CLS: 0.1,  // score
  FCP: 1800, // ms
  TTFB: 800  // ms
};

const PerformanceMonitor = () => {
  useEffect(() => {
    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.googletagmanager.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Monitor and alert on performance budget violations
    const checkPerformanceBudgets = (metric: any) => {
      const threshold = PERFORMANCE_BUDGETS[metric.name as keyof typeof PERFORMANCE_BUDGETS];
      if (threshold && metric.value > threshold) {
        console.warn(`Performance budget exceeded for ${metric.name}: ${metric.value} > ${threshold}`);
        
        // Send to analytics if available
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'performance_budget_exceeded', {
            metric_name: metric.name,
            metric_value: metric.value,
            threshold: threshold,
            event_category: 'Performance'
          });
        }
      }
    };

    // Lazy load non-critical resources
    const lazyLoadResources = () => {
      // Add intersection observer for below-the-fold images
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      }, { rootMargin: '50px' });

      // Observe all images with data-src
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    };

    // Initialize lazy loading
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', lazyLoadResources);
    } else {
      lazyLoadResources();
    }

    // Set up performance monitoring
    if (typeof window !== 'undefined') {
      // Monitor long tasks
      if ('PerformanceObserver' in window) {
        try {
          const longTaskObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              if (entry.duration > 50) {
                console.warn('Long task detected:', entry.duration + 'ms');
              }
            });
          });
          longTaskObserver.observe({ entryTypes: ['longtask'] });
        } catch (e) {
          // Silently fail if longtask is not supported
        }
      }
    }

  }, []);

  return <CoreWebVitals />;
};

export default PerformanceMonitor;