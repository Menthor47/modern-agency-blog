
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

const FloatingElements = ({ count = 5, className }: FloatingElementsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.children;
    
    Array.from(elements).forEach((element, index) => {
      const delay = Math.random() * 5;
      const duration = 10 + Math.random() * 10;
      
      (element as HTMLElement).style.animationDelay = `${delay}s`;
      (element as HTMLElement).style.animationDuration = `${duration}s`;
    });
  }, []);

  return (
    <div ref={containerRef} className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'absolute w-2 h-2 bg-primary/20 rounded-full animate-float',
            i % 2 === 0 ? 'animate-pulse-slow' : ''
          )}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `scale(${0.5 + Math.random() * 0.5})`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
