
import { useState, useEffect } from 'react';
import { X, Download, Mail } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { Card, CardContent, CardHeader, CardTitle } from './card';

interface ExitIntentPopupProps {
  onClose: () => void;
  onSubmit: (email: string) => void;
}

const ExitIntentPopup = ({ onClose, onSubmit }: ExitIntentPopupProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    await onSubmit(email);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in">
      <Card className="max-w-md w-full relative animate-scale-in shadow-floating">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
            <Download className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl">Wait! Don't Miss Out</CardTitle>
          <p className="text-muted-foreground text-sm">
            Get our free "Digital Growth Blueprint" guide before you go!
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
            
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                No Thanks
              </Button>
              <Button
                type="submit"
                disabled={!email || isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? 'Sending...' : 'Get Free Guide'}
              </Button>
            </div>
          </form>
          
          <p className="text-xs text-muted-foreground text-center mt-4">
            No spam. Unsubscribe at any time.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export const useExitIntent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    // Show after 30 seconds as fallback
    const timer = setTimeout(() => {
      if (!hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    }, 30000);

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShown]);

  return { showPopup, setShowPopup, hasShown };
};

export default ExitIntentPopup;
