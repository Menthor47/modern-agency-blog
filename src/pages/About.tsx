import { Users, Target, Lightbulb, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure success by your success. Every strategy is designed to deliver measurable results that drive your business forward."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions that set you apart from the competition."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your goals become our goals. We work as an extension of your team to ensure your vision becomes reality."
    },
    {
      icon: Award,
      title: "Excellence Always",
      description: "We never settle for good enough. Our commitment to excellence ensures every project exceeds expectations."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      position: "Founder & CEO",
      bio: "10+ years of experience in digital marketing and business strategy. Led campaigns for Fortune 500 companies.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      position: "Head of Development",
      bio: "Full-stack developer with expertise in modern web technologies. Built scalable solutions for startups and enterprises.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      position: "Creative Director",
      bio: "Award-winning designer with a passion for creating memorable brand experiences that drive engagement.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      position: "Marketing Strategist",
      bio: "Data-driven marketer specializing in ROI optimization and performance marketing across all digital channels.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const milestones = [
    { year: "2019", event: "Company Founded", description: "Started with a vision to transform digital experiences" },
    { year: "2020", event: "100+ Projects", description: "Reached our first major milestone of completed projects" },
    { year: "2021", event: "Award Recognition", description: "Won 'Best Digital Agency' at Tech Innovation Awards" },
    { year: "2022", event: "500+ Clients", description: "Expanded our client base across multiple industries" },
    { year: "2023", event: "Global Expansion", description: "Opened offices in 3 new countries" },
    { year: "2024", event: "Industry Leaders", description: "Recognized as top 1% of digital agencies worldwide" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-6">
                About Next.Level.Design
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                We're not just another digital agency. We're your strategic partners in growth, 
                dedicated to transforming ambitious businesses into industry leaders through 
                innovative design and data-driven marketing strategies.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary-glow mb-2">500+</div>
                  <div className="text-white/80">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-glow mb-2">5+</div>
                  <div className="text-white/80">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Our team working together"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To empower businesses of all sizes with cutting-edge digital solutions that drive 
                measurable growth. We believe every company deserves a competitive edge in the 
                digital landscape, regardless of their starting point.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through innovative design, strategic marketing, and robust development, we help 
                our clients not just keep up with the digital revolution, but lead it.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To be the world's most trusted digital transformation partner, known for delivering 
                exceptional results that exceed expectations and drive sustainable business growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision a future where every business, from startups to enterprises, has access 
                to world-class digital solutions that help them thrive in an increasingly connected world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Behind every great project is an even greater team. Meet the experts who make it all happen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a small startup to an industry leader, here's how we've grown over the years.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.event}</h3>
                  <p className="text-muted-foreground text-sm">{milestone.description}</p>
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
            Ready to Work Together?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Join hundreds of satisfied clients who trust us with their digital success.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-accent-red hover:bg-white/90">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;