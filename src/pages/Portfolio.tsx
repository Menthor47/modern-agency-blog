
import { ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const handleStartProject = () => {
    navigate('/contact');
  };

  const handleViewProject = (projectTitle: string) => {
    // For demo purposes, show an alert with project info
    alert(`${projectTitle} - This would normally open the live project or case study details.`);
  };

  const projects = [
    {
      title: "TechStart Solutions",
      category: "SaaS Platform",
      description: "Complete brand redesign and web development for a growing tech startup, resulting in 400% increase in conversions.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      results: "+400% Conversions",
      tags: ["Web Design", "Branding", "Development"]
    },
    {
      title: "EcoLife Marketplace",
      category: "E-commerce",
      description: "Full-scale e-commerce platform with advanced filtering, payment integration, and inventory management.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      results: "+250% Sales",
      tags: ["E-commerce", "UX/UI", "SEO"]
    },
    {
      title: "MedCare Professionals",
      category: "Healthcare",
      description: "Modern healthcare platform with patient portal, appointment booking, and telehealth capabilities.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      results: "+180% Patients",
      tags: ["Healthcare", "Portal Development", "Security"]
    },
    {
      title: "FinanceForward",
      category: "Financial Services",
      description: "Comprehensive financial planning platform with real-time analytics and investment tracking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      results: "+320% Users",
      tags: ["Fintech", "Analytics", "Security"]
    },
    {
      title: "FoodieConnect",
      category: "Food & Beverage",
      description: "Social dining platform connecting food enthusiasts with local restaurants and experiences.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      results: "+500% Engagement",
      tags: ["Social Platform", "Mobile App", "Marketing"]
    },
    {
      title: "EduTech Academy",
      category: "Education",
      description: "Online learning platform with interactive courses, progress tracking, and certification system.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      results: "+290% Enrollments",
      tags: ["EdTech", "LMS", "Interactive Design"]
    }
  ];

  const testimonials = [
    {
      quote: "Next.Level.Design transformed our online presence completely. Our conversion rate increased by 400% within just 3 months.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Solutions",
      company: "TechStart"
    },
    {
      quote: "The team's attention to detail and strategic approach helped us achieve results we never thought possible.",
      author: "Michael Chen",
      position: "Founder, EcoLife Marketplace",
      company: "EcoLife"
    },
    {
      quote: "Professional, creative, and results-driven. They delivered exactly what we needed to scale our business.",
      author: "Dr. Emily Rodriguez",
      position: "Director, MedCare Professionals",
      company: "MedCare"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover how we've helped businesses across various industries achieve 
            remarkable growth through innovative digital solutions.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between">
                      <div className="bg-accent-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {project.results}
                      </div>
                      <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={() => handleViewProject(project.title)}>
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-2 py-1 rounded text-xs">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Proven Results That Matter
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our portfolio speaks for itself. Here's what we've achieved for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "500+", label: "Projects Completed", icon: Award },
              { metric: "98%", label: "Client Satisfaction", icon: Award },
              { metric: "300%", label: "Average Growth", icon: Award }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex text-primary mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Your project could be our next featured case study.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-accent-red hover:bg-white/90" onClick={handleStartProject}>
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
