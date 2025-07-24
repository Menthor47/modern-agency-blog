
import { Monitor, Search, Megaphone, Palette, Code, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/ui/seo-head";
import ScrollReveal from "@/components/ui/scroll-reveal";

const Services = () => {
  const navigate = useNavigate();

  const handleGetStarted = (service: string) => {
    navigate('/contact', { state: { selectedService: service } });
  };

  const handleScheduleConsultation = () => {
    navigate('/contact');
  };

  const services = [
    {
      icon: Monitor,
      title: "Web Design & Development",
      description: "Custom websites that convert visitors into customers with stunning design and seamless functionality.",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Integration", "Performance Optimization"],
      price: "Starting at $2,999"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Dominate search results with our proven SEO techniques that increase organic traffic by 300%.",
      features: ["Keyword Research", "Technical SEO", "Content Optimization", "Link Building"],
      price: "Starting at $1,499/month"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Data-driven strategies that boost your online presence and drive measurable business growth.",
      features: ["PPC Campaigns", "Social Media Marketing", "Email Marketing", "Marketing Automation"],
      price: "Starting at $2,499/month"
    },
    {
      icon: Palette,
      title: "Brand Strategy",
      description: "Build a powerful brand identity that resonates with your target audience and drives loyalty.",
      features: ["Brand Identity", "Logo Design", "Brand Guidelines", "Brand Messaging"],
      price: "Starting at $3,999"
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions that solve your unique business challenges and streamline operations.",
      features: ["Web Applications", "API Development", "Database Design", "System Integration"],
      price: "Starting at $5,999"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive tracking and analysis to measure success and optimize your digital strategies.",
      features: ["Google Analytics Setup", "Custom Dashboards", "Performance Reports", "Data Analysis"],
      price: "Starting at $999/month"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services",
    "description": "Comprehensive digital marketing solutions including web design, SEO, and growth strategies",
    "provider": {
      "@type": "Organization",
      "name": "Next.Level.Design"
    },
    "serviceType": [
      "Web Design & Development",
      "SEO Optimization", 
      "Digital Marketing",
      "Brand Strategy",
      "Custom Development",
      "Analytics & Reporting"
    ]
  };

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Digital Marketing Services - Next.Level.Design"
        description="Comprehensive digital marketing solutions including web design, SEO optimization, and growth strategies. Starting from $999/month with proven results."
        keywords="digital marketing services, web design, SEO optimization, PPC campaigns, brand strategy, custom development"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth 
            and establish your dominance in the digital marketplace.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="text-lg font-bold text-primary mb-4">{service.price}</div>
                    <Button className="w-full" onClick={() => handleGetStarted(service.title)}>
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic approach to ensure every project delivers exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We dive deep into your business goals and target audience." },
              { step: "02", title: "Strategy", description: "We create a customized plan tailored to your specific needs." },
              { step: "03", title: "Execution", description: "Our expert team brings your vision to life with precision." },
              { step: "04", title: "Optimization", description: "We continuously monitor and improve for maximum results." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-white text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives real results for your business.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-accent-red hover:bg-white/90" onClick={handleScheduleConsultation}>
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
