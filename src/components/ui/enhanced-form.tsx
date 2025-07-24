import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine((val) => val === true, 'You must agree to the privacy policy'),
});

type FormData = z.infer<typeof formSchema>;

interface EnhancedFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  services?: string[];
  className?: string;
}

const EnhancedForm = ({ onSubmit, services = [], className }: EnhancedFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const watchedFields = watch();

  const getFieldStatus = (fieldName: keyof FormData) => {
    const isTouched = touchedFields[fieldName];
    const hasError = errors[fieldName];
    const hasValue = watchedFields[fieldName];
    
    if (!isTouched) return 'default';
    if (hasError) return 'error';
    if (hasValue) return 'success';
    return 'default';
  };

  const onFormSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      await onSubmit(data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const FieldIcon = ({ status }: { status: string }) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className={cn("space-y-6", className)}>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <div className="relative">
            <Input
              id="name"
              {...register('name')}
              placeholder="John Doe"
              className={cn(
                "h-12 pr-10 transition-all duration-200",
                getFieldStatus('name') === 'error' && "border-destructive",
                getFieldStatus('name') === 'success' && "border-green-500"
              )}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <FieldIcon status={getFieldStatus('name')} />
            </div>
          </div>
          {errors.name && (
            <p id="name-error" className="text-sm text-destructive flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.name.message}
            </p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="john@example.com"
              className={cn(
                "h-12 pr-10 transition-all duration-200",
                getFieldStatus('email') === 'error' && "border-destructive",
                getFieldStatus('email') === 'success' && "border-green-500"
              )}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <FieldIcon status={getFieldStatus('email')} />
            </div>
          </div>
          {errors.email && (
            <p id="email-error" className="text-sm text-destructive flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            {...register('company')}
            placeholder="Your Company"
            className="h-12"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="service">Service Interested In</Label>
          <select
            id="service"
            {...register('service')}
            className="w-full h-12 px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <div className="relative">
          <Textarea
            id="message"
            {...register('message')}
            rows={6}
            placeholder="Tell us about your project, goals, timeline, and budget..."
            className={cn(
              "resize-none transition-all duration-200",
              getFieldStatus('message') === 'error' && "border-destructive",
              getFieldStatus('message') === 'success' && "border-green-500"
            )}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
        </div>
        {errors.message && (
          <p id="message-error" className="text-sm text-destructive flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.message.message}
          </p>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="consent"
            {...register('consent')}
            className="mt-1 h-4 w-4 text-primary focus:ring-primary border-input rounded"
            aria-describedby={errors.consent ? 'consent-error' : undefined}
          />
          <Label htmlFor="consent" className="text-sm leading-5">
            I agree to the{' '}
            <a href="/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{' '}
            and consent to being contacted about this inquiry. *
          </Label>
        </div>
        {errors.consent && (
          <p id="consent-error" className="text-sm text-destructive flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.consent.message}
          </p>
        )}
      </div>
      
      <Button
        type="submit"
        className="w-full h-12 group transition-all duration-200"
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
      
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <p className="text-green-800">Message sent successfully! We'll get back to you within 24 hours.</p>
          </div>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
            <p className="text-red-800">There was an error sending your message. Please try again.</p>
          </div>
        </div>
      )}
    </form>
  );
};

export default EnhancedForm;