import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "10 Web Design Trends That Will Dominate 2024",
      excerpt: "Discover the latest design trends that are shaping the digital landscape and how to implement them in your projects.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Design",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Complete Guide to SEO in 2024",
      excerpt: "Everything you need to know about search engine optimization to boost your website's visibility and drive organic traffic.",
      author: "Mike Chen",
      date: "March 12, 2024",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "How to Increase Conversion Rates by 300%",
      excerpt: "Proven strategies and techniques that can dramatically improve your website's conversion rates and drive more sales.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Future of Digital Marketing: AI and Automation",
      excerpt: "Explore how artificial intelligence and automation are revolutionizing digital marketing strategies.",
      author: "David Kim",
      date: "March 8, 2024",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Building a Strong Brand Identity in the Digital Age",
      excerpt: "Learn how to create a memorable brand that resonates with your audience across all digital touchpoints.",
      author: "Lisa Park",
      date: "March 5, 2024",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Mobile-First Design: Why It Matters More Than Ever",
      excerpt: "Understanding the importance of mobile-first design and how to implement it effectively for better user experience.",
      author: "Alex Turner",
      date: "March 3, 2024",
      category: "Design",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
      readTime: "4 min read"
    }
  ];

  const categories = ["All", "Design", "SEO", "Marketing", "Technology", "Branding"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights in digital marketing, 
            web design, and business growth strategies.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Article</h2>
          <Card className="overflow-hidden shadow-xl border-0">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="bg-primary text-white px-2 py-1 rounded text-xs">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                  <Link to={`/blog/${featuredPost.id}`}>
                    <Button className="group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
            <span className="text-muted-foreground">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="group p-0 h-auto">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-hero-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
            />
            <Button variant="secondary" className="bg-white text-accent-red hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;