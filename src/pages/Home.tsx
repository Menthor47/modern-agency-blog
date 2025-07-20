import { ArrowRight, Star, Users, Award, TrendingUp, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-analytics.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleGetAudit = () => {
    navigate('/contact');
  };

  const handleViewWork = () => {
    navigate('/portfolio');
  };

  const handleViewServices = () => {
    navigate('/services');
  };

  const handleScheduleConsultation = () => {
    navigate('/contact');
  };

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "98%", label: "Success Rate" },
    { icon: TrendingUp, value: "300%", label: "Avg. Growth" },
    { icon: Star, value: "4.9/5", label: "Client Rating" },
  ];

  const services = [
    {
      title: "Web Design & Development",
      description: "Custom websites that convert visitors into customers with stunning design and seamless functionality.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    },
    {
      title: "Digital Marketing",
      description: "Data-driven strategies that boost your online presence and drive measurable business growth.",
      features: ["Social Media", "PPC Campaigns", "Content Strategy"],
    },
    {
      title: "SEO Optimization",
      description: "Dominate search results with our proven SEO techniques that increase organic traffic by 300%.",
      features: ["Keyword Research", "Technical SEO", "Link Building"],
    },
    {
      title: "Brand Strategy",
      description: "Build a powerful brand identity that resonates with your target audience and drives loyalty.",
      features: ["Brand Identity", "Logo Design", "Guidelines"],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      content: "Next Level Design transformed our online presence completely. Our conversion rate increased by 250% in just 3 months!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "GrowthCorp",
      content: "The team's expertise in digital marketing is unmatched. They delivered results beyond our expectations.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "InnovateLab",
      content: "Professional, creative, and results-driven. Our brand has never looked better!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-red/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in-up">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary-glow" />
                <span className="text-primary-glow font-medium">Digital Excellence Redefined</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your Business
                <span className="block text-transparent bg-gradient-to-r from-primary-glow to-white bg-clip-text">
                  with Next-Level Design
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                We create stunning, high-converting websites that drive results for 
                ambitious businesses. Join 500+ companies that trust us to elevate their digital presence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group" onClick={handleGetAudit}>
                  Get Your Free Audit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="hero-outline" size="lg" onClick={handleViewWork}>
                  View Our Work
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-white/80">Free Strategy Call</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-white/80">No Long-term Contracts</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <img 
                src={heroImage} 
                alt="Digital marketing analytics dashboard"
                className="rounded-lg shadow-floating transform rotate-2 hover:rotate-0 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute -top-4 -left-4 w-72 h-48 bg-gradient-card backdrop-blur-sm rounded-lg border border-white/20 p-6 animate-float">
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary-glow" />
                  Performance Boost
                </h3>
                <div className="text-2xl font-bold text-primary-glow mb-1">+347%</div>
                <p className="text-white/80 text-sm">Average traffic increase</p>
                <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary-glow to-accent-red-glow rounded-full w-3/4 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From stunning websites to powerful marketing campaigns, we provide everything 
              your business needs to thrive in the digital landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 border-0 shadow-md group animate-scale-in hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in-up">
            <Button size="lg" className="group" onClick={handleViewServices}>
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what business leaders say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-floating transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero-alt relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have accelerated their growth with our proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-secondary" size="lg" onClick={handleGetAudit}>
              Get Free Audit
            </Button>
            <Button variant="hero-outline" size="lg" onClick={handleScheduleConsultation}>
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
