import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-foreground hover:text-accent transition-colors">
            Portfolio
          </Link>
          
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
            <Link to="/dashboard">
              <Button variant="outline" size="sm">Dashboard</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
