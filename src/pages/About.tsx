import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Award } from "lucide-react";
import cyberTeamOffice from "@/assets/cyber-team-office.jpg";
import SEOHead from "@/components/ui/seo-head";
import JsonLd from "@/components/ui/json-ld";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-secondary" />,
      title: "Mission-Driven",
      description: "We turn innovative ideas into digital experiences that drive real business results."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Client-Centric",
      description: "Your success is our priority. We build long-lasting partnerships with every client."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-secondary" />,
      title: "Innovation First",
      description: "We stay ahead of trends to deliver cutting-edge solutions for tomorrow's challenges."
    },
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: "Quality Assured",
      description: "Every project meets our rigorous standards for excellence and performance."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Creative Director",
      bio: "With 8+ years in digital design, Sarah leads our creative vision and ensures every project tells a compelling story.",
      skills: ["Brand Strategy", "UX Design", "Creative Leadership"]
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Developer",
      bio: "Marcus transforms designs into powerful web experiences using the latest technologies and best practices.",
      skills: ["React", "Node.js", "Cloud Architecture"]
    },
    {
      name: "Elena Kowalski",
      role: "Marketing Strategist",
      bio: "Elena drives digital growth through data-driven marketing strategies that connect brands with their audiences.",
      skills: ["SEO", "Analytics", "Content Strategy"]
    }
  ];

  const milestones = [
    { year: "2019", event: "Founded NextLevelDesign with a vision to transform digital experiences" },
    { year: "2020", event: "Launched our first major e-commerce platform, reaching 10M+ users" },
    { year: "2021", event: "Expanded to serve Fortune 500 companies and international clients" },
    { year: "2022", event: "Won 'Digital Agency of the Year' award for innovative design solutions" },
    { year: "2023", event: "Achieved 98% client satisfaction rate and 150+ successful projects" },
    { year: "2024", event: "Pioneering AI-powered design tools and sustainable web practices" }
  ];

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Next.Level.Design",
      "description": "A team of passionate designers, developers, and strategists dedicated to creating digital experiences that drive growth and innovation",
      "foundingDate": "2019",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "10-50"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="About Us - Meet the Team | Next.Level.Design"
        description="Learn about Next.Level.Design's mission, values, and team. We're passionate designers, developers, and strategists creating digital experiences that drive growth."
        keywords="about us, digital agency team, web design agency, our mission, company values"
        structuredData={aboutStructuredData}
      />
      <JsonLd data={aboutStructuredData} />
      {/* Hero Section */}
      <section className="relative py-20 gradient-cyber overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in neon-glow">
            About NextLevelDesign
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto animate-slide-in-left">
            We're a team of passionate designers, developers, and strategists dedicated to creating digital experiences that drive growth and innovation.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 neon-glow">
              Our Mission & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building the future of digital experiences through innovation, collaboration, and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-neon transition-cyber glass-card">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;