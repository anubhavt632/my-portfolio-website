import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-foreground hover:text-accent transition-colors">
            Portfolio
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/graphic-design" className="text-foreground hover:text-accent transition-colors">
              Graphic Design
            </Link>
            <Link to="/video-editing" className="text-foreground hover:text-accent transition-colors">
              Video Editing
            </Link>
            <Link to="/web-development" className="text-foreground hover:text-accent transition-colors">
              Web Development
            </Link>
            <Link to="/electronics" className="text-foreground hover:text-accent transition-colors">
              Electronics
            </Link>
            <Link to="/auth">
              <Button variant="outline" size="sm">Admin Login</Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/graphic-design" 
                className="text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Graphic Design
              </Link>
              <Link 
                to="/video-editing" 
                className="text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Video Editing
              </Link>
              <Link 
                to="/web-development" 
                className="text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Web Development
              </Link>
              <Link 
                to="/electronics" 
                className="text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Electronics
              </Link>
              <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" size="sm" className="w-full">Admin Login</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
