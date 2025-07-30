import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Monitor Core Web Vitals
      if ('PerformanceObserver' in window) {
        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime, 'ms');
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID) / Interaction to Next Paint (INP)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const inputEntry = entry as PerformanceEventTiming;
            console.log('FID/INP:', inputEntry.processingStart - inputEntry.startTime, 'ms');
          });
        });
        fidObserver.observe({ entryTypes: ['first-input', 'interaction'] });

        // Cumulative Layout Shift (CLS)
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const layoutEntry = entry as any;
            if (!layoutEntry.hadRecentInput) {
              clsValue += layoutEntry.value;
            }
          });
          console.log('CLS:', clsValue);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor; 