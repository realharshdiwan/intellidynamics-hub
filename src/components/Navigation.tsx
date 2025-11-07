import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/careers", label: "Careers" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Mastersolis
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.to) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="default" size="sm" className="bg-gradient-primary">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive(link.to) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="default" size="sm" className="w-full bg-gradient-primary">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
