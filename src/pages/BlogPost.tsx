import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data - in a real app, this would be fetched based on the ID
  const post = {
    id: 1,
    title: "10 Web Design Trends That Will Dominate 2024",
    excerpt: "Discover the latest design trends that are shaping the digital landscape and how to implement them in your projects.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
    readTime: "5 min read",
    content: `
      <p>The digital landscape is constantly evolving, and 2024 promises to bring exciting new design trends that will reshape how we create and interact with websites. As technology advances and user expectations grow, designers must stay ahead of the curve to create compelling digital experiences.</p>

      <h2>1. AI-Powered Personalization</h2>
      <p>Artificial intelligence is revolutionizing web design by enabling unprecedented levels of personalization. Websites now adapt in real-time based on user behavior, preferences, and demographics. This trend goes beyond simple recommendation engines to include dynamic layouts, personalized color schemes, and content that adjusts to individual users.</p>

      <h2>2. Immersive 3D Elements</h2>
      <p>Three-dimensional design elements are becoming more accessible and performant. From subtle depth effects to fully interactive 3D models, these elements add a layer of engagement that traditional flat design cannot match. WebGL and CSS 3D transforms make it possible to implement these effects without sacrificing performance.</p>

      <h2>3. Micro-Interactions and Animations</h2>
      <p>Subtle animations and micro-interactions continue to play a crucial role in user experience. These small details provide feedback, guide user attention, and create a sense of polish that users appreciate. However, the trend is moving toward more purposeful animations that serve specific functions rather than decorative flourishes.</p>

      <h2>4. Dark Mode as Standard</h2>
      <p>Dark mode is no longer a nice-to-have feature—it's become an expectation. Users appreciate the reduced eye strain and improved battery life on mobile devices. Designing for both light and dark modes from the start ensures consistency and accessibility across different user preferences.</p>

      <h2>5. Sustainable Web Design</h2>
      <p>Environmental consciousness is influencing web design decisions. Designers are focusing on creating more efficient websites that consume less energy, load faster, and have smaller carbon footprints. This includes optimizing images, reducing unnecessary features, and choosing sustainable hosting solutions.</p>

      <h2>Conclusion</h2>
      <p>These trends represent more than just aesthetic choices—they reflect changing user needs, technological capabilities, and societal values. By understanding and implementing these trends thoughtfully, designers can create websites that not only look great but also provide meaningful value to users and businesses alike.</p>
    `
  };

  const relatedPosts = [
    {
      id: 2,
      title: "The Complete Guide to SEO in 2024",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "How to Increase Conversion Rates by 300%",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            <span>{post.readTime}</span>
          </div>
          
          <div className="flex justify-center mb-8">
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    url: window.location.href
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Article link copied to clipboard!');
                }
              }}
            >
              <Share2 className="h-4 w-4" />
              Share Article
            </Button>
          </div>
          
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              fontSize: '18px',
              lineHeight: '1.8'
            }}
          />
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=80&h=80&fit=crop&crop=face"
                  alt={post.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{post.author}</h3>
                  <p className="text-muted-foreground text-sm">
                    Senior Content Strategist at Next.Level.Design with over 8 years of experience 
                    in digital marketing and web design trends.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <img
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  className="w-full h-32 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <Link to={`/blog/${relatedPost.id}`}>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                      Read More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-hero-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Enjoyed This Article?
          </h2>
          <p className="text-white/90 mb-6">
            Subscribe to our newsletter for more insights and tips delivered to your inbox.
          </p>
          <Button 
            variant="secondary" 
            className="bg-white text-accent-red hover:bg-white/90"
            onClick={() => alert('Thank you for your interest! Please visit our newsletter section to subscribe.')}
          >
            Subscribe Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;