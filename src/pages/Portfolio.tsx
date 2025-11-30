import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { ExternalLink, Eye } from "lucide-react";
import SEOHead from "@/components/ui/seo-head";
import JsonLd from "@/components/ui/json-ld";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web Development", "SEO", "Multilingual"];

  const projects = [
    {
      id: 1,
      title: "SZ Trading International",
      category: "Web Development",
      client: "Romanian Freight Company",
      description: "Complete redesign for Romanian freight company. Bilingual (RO/EN), SEO-optimized, conversion-focused.",
      fullDescription: "SZ Trading International needed a modern, professional website to appeal to both Romanian and international clients. We delivered a bilingual site with optimized contact forms, SEO structure, and fast loading times under 2 seconds.",
      tags: ["Web Design", "SEO", "Multilingual", "Lead Generation"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      liveUrl: "https://szitrans.com",
      results: ["+150% Contact Form Submissions", "Bilingual RO/EN Support", "Mobile-Optimized Design", "<2s Load Time"]
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Our Portfolio",
    "description": "Explore our latest projects in web design, branding, UX/UI design, and e-commerce development",
    "url": "https://preview--modern-agency-blog.lovable.app/portfolio",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((project, index) => ({
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "position": index + 1
      }))
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Portfolio - Our Work & Case Studies | Next.Level.Design"
        description="Explore our portfolio of successful web design, branding, and digital marketing projects. See how we've helped businesses transform their digital presence."
        keywords="portfolio, web design portfolio, case studies, project examples, our work"
        structuredData={portfolioStructuredData}
      />
      <JsonLd data={portfolioStructuredData} />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white neon-glow mb-6 animate-fade-in">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-in-left">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "secondary" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="transition-smooth"
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border-0 shadow-elegant hover:shadow-hover transition-smooth">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="secondary" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="font-heading text-2xl">{project.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="font-heading text-lg font-semibold mb-2">Project Overview</h3>
                              <p className="text-muted-foreground mb-4">{project.fullDescription}</p>
                              
                              <div className="mb-4">
                                <h4 className="font-heading font-semibold mb-2">Client:</h4>
                                <p className="text-muted-foreground">{project.client}</p>
                              </div>
                              
                              <div>
                                <h4 className="font-heading font-semibold mb-2">Services:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {project.tags.map((tag, index) => (
                                    <Badge key={index} variant="secondary">{tag}</Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="font-heading text-lg font-semibold mb-2">Results</h3>
                              <ul className="space-y-2">
                                {project.results.map((result, index) => (
                                  <li key={index} className="flex items-center text-muted-foreground">
                                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                                    {result}
                                  </li>
                                ))}
                              </ul>
                              
                    <Button 
                      variant="accent" 
                      className="mt-6 w-full"
                      onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Live Site
                    </Button>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{project.client}</p>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch to discuss your next project.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;