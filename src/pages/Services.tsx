import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import SEOHead from "@/components/ui/seo-head";
import JsonLd from "@/components/ui/json-ld";
import { 
  Code, 
  Smartphone, 
  TrendingUp, 
  Search, 
  Shield,
  Clock,
  Users,
  Zap
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-secondary" />,
      title: "Web Design & Development",
      description: "Modern, responsive websites built with React or WordPress. Includes analytics, forms, and fast hosting.",
      features: ["Design + Copywriting", "SEO Site Structure", "Mobile-First (<2s load)", "Google Analytics Setup", "3 Months Free Support"],
    },
    {
      icon: <Search className="h-12 w-12 text-secondary" />,
      title: "Local SEO",
      description: "Get found by Romanian and international clients searching for your services.",
      features: ["Google Business Profile", "Local Keywords", "Citation Building", "Review Strategy"],
    },
    {
      icon: <Smartphone className="h-12 w-12 text-secondary" />,
      title: "Multilingual Websites",
      description: "Reach international audiences with properly translated, SEO-optimized multilingual sites.",
      features: ["RO/EN Language Support", "Proper hreflang Setup", "Cultural Localization", "SEO for Each Language"],
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-secondary" />,
      title: "Performance Optimization",
      description: "Speed up your existing website for better user experience and search rankings.",
      features: ["Core Web Vitals", "Image Optimization", "Code Minification", "CDN Setup"],
    }
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Fast Delivery",
      description: "We deliver projects on time without compromising quality. 2-4 week delivery for most projects."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Expert Team",
      description: "Our team consists of experienced developers and designers with proven track records."
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Quality Guarantee",
      description: "We stand behind our work with comprehensive quality assurance and 3 months free support."
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Cutting Edge",
      description: "We use the latest technologies and industry best practices."
    },
    {
      icon: <Search className="h-8 w-8 text-accent" />,
      title: "SEO Optimized",
      description: "All our solutions are built with search engine optimization in mind."
    }
  ];

  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Design and Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Next.Level.Design",
      "url": "https://live.nextleveldesign.art"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Romania"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        },
        "position": index + 1
      }))
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Our Services - Digital Marketing & Web Design | Next.Level.Design"
        description="Comprehensive digital solutions including web design, development, UX/UI design, and digital marketing. Transform your business with our expert team."
        keywords="web design services, web development, digital marketing, UX UI design, branding, SEO services"
        structuredData={servicesStructuredData}
      />
      <JsonLd data={servicesStructuredData} />
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/src/assets/cyber-services-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-primary/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)]" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rotate-45 animate-slow-spin" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-secondary/30 animate-pulse" />
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/10 rounded-full animate-bounce" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="font-heading text-4xl md:text-7xl font-bold mb-6 cyber-glitch neon-glow" data-text="Our Services">
              Our <span className="text-primary animate-neon-pulse">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive digital solutions to elevate your brand and drive unprecedented growth in the digital realm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cyber" size="xl" asChild>
                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Get Started</Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/portfolio" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to launch, we provide end-to-end digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-hover transition-smooth border-0 gradient-card">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="font-heading text-2xl text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-heading font-semibold mb-3">What's Included:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline">{feature}</Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="secondary" className="w-full" asChild>
                    <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose NextLevelDesign?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine creativity, technology, and strategy to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg bg-background shadow-elegant hover:shadow-hover transition-smooth">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Dark background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        
        {/* Animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rotate-45 animate-slow-spin" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-secondary/30 animate-pulse" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground neon-glow mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cyber" size="xl" asChild>
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Get a Quote</Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;