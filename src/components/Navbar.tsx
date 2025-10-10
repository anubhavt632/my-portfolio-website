import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-foreground hover:text-accent transition-colors">
            Portfolio
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-foreground hover:text-accent transition-colors relative ${
                isActive('/') ? 'after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-primary' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/graphic-design" 
              className={`text-foreground hover:text-accent transition-colors relative ${
                isActive('/graphic-design') ? 'after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-primary' : ''
              }`}
            >
              Graphic Design
            </Link>
            <Link 
              to="/video-editing" 
              className={`text-foreground hover:text-accent transition-colors relative ${
                isActive('/video-editing') ? 'after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-primary' : ''
              }`}
            >
              Video Editing
            </Link>
            <Link 
              to="/web-development" 
              className={`text-foreground hover:text-accent transition-colors relative ${
                isActive('/web-development') ? 'after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-primary' : ''
              }`}
            >
              Web Development
            </Link>
            <Link 
              to="/electronics" 
              className={`text-foreground hover:text-accent transition-colors relative ${
                isActive('/electronics') ? 'after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-primary' : ''
              }`}
            >
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
                className={`text-foreground hover:text-accent transition-colors ${isActive('/') ? 'text-primary font-semibold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/graphic-design" 
                className={`text-foreground hover:text-accent transition-colors ${isActive('/graphic-design') ? 'text-primary font-semibold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Graphic Design
              </Link>
              <Link 
                to="/video-editing" 
                className={`text-foreground hover:text-accent transition-colors ${isActive('/video-editing') ? 'text-primary font-semibold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Video Editing
              </Link>
              <Link 
                to="/web-development" 
                className={`text-foreground hover:text-accent transition-colors ${isActive('/web-development') ? 'text-primary font-semibold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Web Development
              </Link>
              <Link 
                to="/electronics" 
                className={`text-foreground hover:text-accent transition-colors ${isActive('/electronics') ? 'text-primary font-semibold' : ''}`}
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
