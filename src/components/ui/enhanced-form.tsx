import React from 'react';
import { cn } from '@/lib/utils';

interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  error?: string;
  className?: string;
  children?: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  type = "text",
  required = false,
  error,
  className,
  children
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      <label 
        htmlFor={id}
        className="text-sm font-medium text-text-primary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
        {required && <span className="text-destructive ml-1" aria-label="required">*</span>}
      </label>
      {children || (
        <input
          type={type}
          id={id}
          name={id}
          required={required}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-text-primary ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-destructive focus-visible:ring-destructive"
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      {error && (
        <p 
          id={`${id}-error`}
          className="text-sm text-destructive"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  level?: 1 | 2 | 3 | 4;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  level = 2,
  className
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <div className={cn("text-center mb-12", className)}>
      <HeadingTag className="font-heading font-bold text-text-high-contrast mb-4">
        {title}
      </HeadingTag>
      {subtitle && (
        <p className="text-lg text-text-secondary max-w-3xl mx-auto prose">
          {subtitle}
        </p>
      )}
    </div>
  );
};

interface TextContentProps {
  children: React.ReactNode;
  variant?: 'body' | 'body-large' | 'caption';
  className?: string;
}

export const TextContent: React.FC<TextContentProps> = ({
  children,
  variant = 'body',
  className
}) => {
  const baseClasses = {
    'body': 'text-body',
    'body-large': 'text-body-large',
    'caption': 'text-caption'
  };

  return (
    <div className={cn(baseClasses[variant], className)}>
      {children}
    </div>
  );
};