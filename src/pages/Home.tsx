import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { useProjects } from "@/hooks/useProjects";

const Home = () => {
  const { data: projectsData, isLoading } = useProjects({ featured: true });

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
          <div className="grid md:grid-cols-4 gap-8">
            <Link to="/graphic-design" className="group">
              <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎨</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Graphic Design</h3>
                <p className="text-muted-foreground">
                  Logos, social media posts, web banners, and brand identity solutions.
                </p>
              </div>
            </Link>
            <Link to="/video-editing" className="group">
              <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎬</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Video Editing</h3>
                <p className="text-muted-foreground">
                  Advertisements, educational content, promotional videos, and social media reels.
                </p>
              </div>
            </Link>
            <Link to="/web-development" className="group">
              <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💻</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Web Development</h3>
                <p className="text-muted-foreground">
                  Full-stack MERN applications, responsive websites, and custom web solutions.
                </p>
              </div>
            </Link>
            <Link to="/electronics" className="group">
              <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Electronics</h3>
                <p className="text-muted-foreground">
                  IoT projects, circuit design, and innovative electronics solutions.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          {isLoading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {projectsData?.projects && projectsData.projects.length > 0 ? (
                projectsData.projects.slice(0, 3).map((project: any) => (
                  <ProjectCard key={project._id} {...project} />
                ))
              ) : (
                <p className="col-span-3 text-center text-muted-foreground">No featured projects yet.</p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I'm an Electronics Engineer with a passion for design and development. Over the years, I've combined my technical foundation with creative vision to deliver impactful work across graphic design, video editing, and web development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy bringing ideas to life that balance functionality with visual appeal.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg h-96 flex items-center justify-center">
              {/* Placeholder for image - add your photo here */}
              <p className="text-muted-foreground">Your photo here</p>
            </div>
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
