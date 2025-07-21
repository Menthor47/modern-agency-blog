
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  className,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold, once });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out';
    const visibleClasses = 'opacity-100 translate-x-0 translate-y-0 scale-100';
    
    if (isVisible) {
      return cn(baseClasses, visibleClasses);
    }

    switch (direction) {
      case 'up':
        return cn(baseClasses, 'opacity-0 translate-y-8');
      case 'down':
        return cn(baseClasses, 'opacity-0 -translate-y-8');
      case 'left':
        return cn(baseClasses, 'opacity-0 translate-x-8');
      case 'right':
        return cn(baseClasses, 'opacity-0 -translate-x-8');
      case 'scale':
        return cn(baseClasses, 'opacity-0 scale-95');
      default:
        return cn(baseClasses, 'opacity-0 translate-y-8');
    }
  };

  return (
    <div
      ref={elementRef}
      className={cn(getAnimationClasses(), className)}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
