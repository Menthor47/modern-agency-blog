import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="glass backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-heading font-bold text-xl text-primary cyber-glitch" data-text="NextLevelDesign" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            NextLevel<span className="text-secondary animate-neon-pulse">Design</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`font-heading font-medium transition-cyber relative ${
                  isActive(item.path)
                    ? "text-primary neon-glow"
                    : "text-foreground hover:text-primary hover:neon-glow"
                } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:shadow-neon after:origin-bottom-right after:transition-all after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                  isActive(item.path) ? "after:scale-x-100" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cyber" size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 glass-card rounded-lg hover:shadow-neon transition-cyber"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in glass-card mt-2 rounded-lg">
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-heading font-medium py-2 transition-cyber ${
                    isActive(item.path)
                      ? "text-primary neon-glow"
                      : "text-foreground hover:text-primary hover:neon-glow"
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="cyber" size="lg" className="mt-4" asChild>
                <Link to="/contact" onClick={() => {
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;