import { ArrowRight, Star, Users, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-analytics.jpg";

const Home = () => {
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
    },
    {
      title: "Digital Marketing",
      description: "Data-driven strategies that boost your online presence and drive measurable business growth.",
    },
    {
      title: "SEO Optimization",
      description: "Dominate search results with our proven SEO techniques that increase organic traffic by 300%.",
    },
    {
      title: "Brand Strategy",
      description: "Build a powerful brand identity that resonates with your target audience and drives loyalty.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
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
                <Button variant="hero" size="lg" className="group">
                  Get Your Free Audit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  View Our Work
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Digital marketing analytics dashboard"
                className="rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -top-4 -left-4 w-72 h-48 bg-gradient-card backdrop-blur-sm rounded-lg border border-white/20 p-6">
                <h3 className="text-white font-semibold mb-2">Performance Boost</h3>
                <div className="text-2xl font-bold text-primary-glow mb-1">+347%</div>
                <p className="text-white/80 text-sm">Average traffic increase</p>
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
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
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
          <div className="text-center mb-16">
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
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="group">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have accelerated their growth with our proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-accent-red hover:bg-white/90">
              Get Free Audit
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;