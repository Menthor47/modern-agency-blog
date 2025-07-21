
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from './button';
import { useScrollProgress } from '@/hooks/useScrollAnimation';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      {/* Progress ring */}
      <div className="relative">
        <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="text-border"
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            d="M18 3.5 a 14.5 14.5 0 0 1 0 29 a 14.5 14.5 0 0 1 0 -29"
          />
          <path
            className="text-primary"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray={`${scrollProgress * 91.11}, 91.11`}
            fill="transparent"
            d="M18 3.5 a 14.5 14.5 0 0 1 0 29 a 14.5 14.5 0 0 1 0 -29"
          />
        </svg>
        <Button
          onClick={scrollToTop}
          size="icon"
          className="absolute inset-1 rounded-full bg-white shadow-floating hover:shadow-glow hover:scale-110 transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default BackToTop;
