import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/data/blogData";
import { useEffect } from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));
  const [newsletterEmail, setNewsletterEmail] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <Link to="/blog" className="text-primary underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Find current post index
  const currentIndex = blogPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Build related posts, including prev/next if available and not duplicated
  const relatedSet = new Set<number>();
  const relatedPosts: { post: typeof blogPosts[0]; label?: string }[] = [];

  if (prevPost) {
    relatedSet.add(prevPost.id);
    relatedPosts.push({ post: prevPost, label: "Previous Article" });
  }
  if (nextPost) {
    relatedSet.add(nextPost.id);
    relatedPosts.push({ post: nextPost, label: "Next Article" });
  }

  // Add up to 2 more related posts (excluding current, prev, next)
  for (const p of blogPosts) {
    if (p.id !== post.id && !relatedSet.has(p.id) && relatedPosts.length < 4) {
      relatedPosts.push({ post: p });
      relatedSet.add(p.id);
    }
  }

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
            {relatedPosts.map(({ post: relatedPost, label }) => (
              <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <img
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  className="w-full h-32 object-cover"
                />
                <CardContent className="p-4">
                  {label && (
                    <span className="block text-xs text-accent-red font-semibold mb-1 uppercase tracking-wider">
                      {label}
                    </span>
                  )}
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

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-hero-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights delivered directly to your inbox.
          </p>
          <form
            action="https://nocodeform.io/f/687f637fdb51988aadff2a74"
            method="POST"
            target="_blank"
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="bg-white/10 border-white/30 text-white placeholder:text-white/70 rounded px-4 py-2 flex-1"
            />
            <button
              type="submit"
              className="bg-white text-accent-red hover:bg-white/90 rounded px-6 py-2 font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;