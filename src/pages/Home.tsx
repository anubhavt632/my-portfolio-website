import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

const Home = () => {
  const featuredProjects = [
    {
      title: "Brand Identity Design",
      description: "Complete branding package including logo, business cards, and brand guidelines.",
      category: "Graphic Design",
      tags: ["Logo", "Branding", "Print"]
    },
    {
      title: "Product Advertisement",
      description: "High-impact video advertisement for consumer electronics product launch.",
      category: "Video Editing",
      tags: ["Advertisement", "Motion Graphics"]
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with payment integration and admin dashboard.",
      category: "Web Development",
      tags: ["React", "Node.js", "MongoDB"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Electronics Engineer,
            <br />
            <span className="text-muted-foreground">Creative Designer & Developer</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Combining technical expertise with creative vision to deliver exceptional graphic design, 
            video content, and web development solutions.
          </p>
          <div className="flex gap-4 justify-center animate-scale-in">
            <Link to="/graphic-design">
              <Button size="lg">View My Work</Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline">Dashboard</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
              <p className="text-muted-foreground">
                Logos, social media posts, web banners, and comprehensive brand identity solutions.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-semibold mb-2">Video Editing</h3>
              <p className="text-muted-foreground">
                Advertisements, educational content, promotional videos, and social media reels.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-muted-foreground">
                Full-stack MERN applications, responsive websites, and custom web solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
