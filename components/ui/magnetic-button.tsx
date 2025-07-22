
import React, { useRef, useEffect } from 'react';
import { Button, ButtonProps } from './button';
import { cn } from '@/lib/utils';

interface MagneticButtonProps extends ButtonProps {
  magneticStrength?: number;
  children: React.ReactNode;
}

const MagneticButton = ({ 
  magneticStrength = 20, 
  children, 
  className, 
  ...props 
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;
      
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      if (distance < 1) {
        const moveX = deltaX * magneticStrength;
        const moveY = deltaY * magneticStrength;
        
        button.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
      }
    };

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0px, 0px) scale(1)';
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [magneticStrength]);

  return (
    <Button
      ref={buttonRef}
      className={cn('transition-all duration-300 ease-out', className)}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MagneticButton;
