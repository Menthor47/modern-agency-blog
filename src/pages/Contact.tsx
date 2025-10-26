import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/ui/seo-head";
import JsonLd from "@/components/ui/json-ld";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  Loader2
} from "lucide-react";

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  company: z.string().max(100).optional(),
  email: z.string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  budget: z.string().optional(),
  project: z.string().optional(),
  message: z.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
  website: z.string().max(0).optional(), // Honeypot field
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    budget: "",
    project: "",
    message: "",
    website: "", // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(formData);

      // Check honeypot field (should be empty)
      if (validatedData.website && validatedData.website.length > 0) {
        console.warn("Honeypot field filled - potential spam");
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Store submission in database
      const { data: submission, error: dbError } = await supabase
        .from('contact_submissions')
        .insert([{
          name: validatedData.name,
          company: validatedData.company || null,
          email: validatedData.email,
          budget: validatedData.budget || null,
          project_type: validatedData.project || null,
          message: validatedData.message,
        }])
        .select()
        .single();

      if (dbError) {
        console.error("Database error:", dbError);
        throw new Error("Failed to store submission");
      }

      console.log("Submission stored:", submission);

      // Send email notifications
      const { error: emailError } = await supabase.functions.invoke(
        'send-contact-email',
        {
          body: {
            name: validatedData.name,
            email: validatedData.email,
            company: validatedData.company,
            budget: validatedData.budget,
            projectType: validatedData.project,
            message: validatedData.message,
          }
        }
      );

      if (emailError) {
        console.error('Email send failed:', emailError);
        // Don't fail the whole submission if email fails
        toast({
          title: "Message Saved",
          description: "Your message was saved but email notification failed. We'll still review it!",
        });
      } else {
        toast({
          title: "Message Sent Successfully!",
          description: "We've received your inquiry and will respond within 24 hours.",
        });
      }

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        budget: "",
        project: "",
        message: "",
        website: "",
      });

    } catch (error) {
      console.error("Submission error:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      
      if (error instanceof z.ZodError) {
        // Show first validation error
        console.error("Validation errors:", error.errors);
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        // Show more detailed error information
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
        console.error("Non-validation error:", errorMessage);
        toast({
          title: "Submission Failed",
          description: `Please try again or contact us directly via email. Error: ${errorMessage}`,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-secondary" />,
      title: "Our Office",
      details: ["123 Design Street", "Creative District", "San Francisco, CA 94102"]
    },
    {
      icon: <Phone className="h-6 w-6 text-secondary" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: <Mail className="h-6 w-6 text-secondary" />,
      title: "Email",
      details: ["hello@nextleveldesign.com", "support@nextleveldesign.com"]
    },
    {
      icon: <Clock className="h-6 w-6 text-secondary" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"]
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, name: "Twitter", url: "#" },
    { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn", url: "#" },
    { icon: <Instagram className="h-5 w-5" />, name: "Instagram", url: "#" }
  ];

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Next.Level.Design",
      "url": "https://preview--modern-agency-blog.lovable.app",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "Customer Service",
        "areaServed": "Global",
        "availableLanguage": "English",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Design Street",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94102",
        "addressCountry": "US"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact Us - Get Your Free Audit | Next.Level.Design"
        description="Ready to transform your digital presence? Contact Next.Level.Design for a free consultation and website audit. Let's discuss your project today."
        keywords="contact us, free website audit, digital marketing consultation, get a quote, contact digital agency"
        structuredData={contactStructuredData}
      />
      <JsonLd data={contactStructuredData} />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white neon-glow mb-6 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-in-left">
            Ready to transform your digital presence? Let's discuss your project and bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-primary">
                  Start Your Project
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Project Budget</Label>
                      <Select onValueChange={(value) => handleChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="over-50k">Over $50,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project">Project Type</Label>
                      <Select onValueChange={(value) => handleChange("project", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="branding">Branding & Identity</SelectItem>
                          <SelectItem value="web-dev">Web Development</SelectItem>
                          <SelectItem value="ux-ui">UX/UI Design</SelectItem>
                          <SelectItem value="marketing">Digital Marketing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      placeholder="Tell us about your project, goals, and timeline..."
                      rows={5}
                      aria-describedby="message-hint"
                    />
                    <p id="message-hint" className="text-sm text-muted-foreground">
                      Minimum 10 characters, maximum 2000 characters
                    </p>
                  </div>

                  {/* Honeypot field - hidden from users, catches bots */}
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={(e) => handleChange("website", e.target.value)}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                  Let's Connect
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're always excited to hear about new projects and challenges. 
                  Reach out through any of the channels below.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-elegant">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">{info.icon}</div>
                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-heading text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 bg-secondary text-secondary-foreground rounded-lg flex items-center justify-center hover:bg-secondary/80 transition-smooth"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of San Francisco's creative district.
            </p>
          </div>
          
          {/* Placeholder for map - in a real project, you'd integrate with Google Maps */}
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center shadow-elegant">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
              <p className="text-lg font-heading font-semibold">Interactive Map</p>
              <p className="text-muted-foreground">
                123 Design Street, Creative District, San Francisco, CA 94102
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;