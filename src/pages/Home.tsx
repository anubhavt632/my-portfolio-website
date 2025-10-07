import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
            ANUBHAV KUMAR
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
            Electronics Engineer, Creative Designer & Developer
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Combining technical expertise with creative vision to deliver exceptional graphic design, 
            video content, and web development solutions.
          </p>
          <div className="flex gap-4 justify-center animate-scale-in">
            <a href="#contact">
              <Button size="lg">Contact Me</Button>
            </a>
            <a href="/cv.pdf" download>
              <Button size="lg" variant="outline">Download CV</Button>
            </a>
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

      {/* Hire Me Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Bring Your Ideas to Life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you need stunning graphics, engaging videos, or powerful web applications, 
            I'm here to help turn your vision into reality.
          </p>
          <a href="#contact">
            <Button size="lg" variant="secondary" className="group">
              Let's Work Together
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Have a project in mind? Let's discuss how I can help you achieve your goals.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
