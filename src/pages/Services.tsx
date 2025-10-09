import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Video, Code, Cpu } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Professional visual solutions including logos, brand identity, social media content, web banners, and illustrations that capture your brand's essence.",
      features: ["Logo Design", "Brand Identity", "Social Media Graphics", "Web Banners", "Illustrations"],
      link: "/graphic-design"
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Engaging video content for advertisements, educational materials, promotional videos, and social media reels that tell your story effectively.",
      features: ["Advertisements", "Educational Videos", "Promotional Content", "Social Media Reels", "Motion Graphics"],
      link: "/video-editing"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack web applications, responsive websites, e-commerce platforms, and Figma to code conversion that bring your digital vision to life.",
      features: ["Custom Websites", "Web Applications", "E-commerce Solutions", "Figma Designs", "MERN Stack"],
      link: "/web-development"
    },
    {
      icon: Cpu,
      title: "Electronics Projects",
      description: "Innovative electronics solutions including IoT projects, circuit design, and automation systems combining hardware and software expertise.",
      features: ["IoT Solutions", "Circuit Design", "Automation Systems", "Embedded Systems", "Hardware Integration"],
      link: "/electronics"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive creative and technical solutions tailored to bring your ideas to life with excellence and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to={service.link}>
                    <Button className="w-full group">
                      View Portfolio
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's collaborate to create something amazing. Get in touch to discuss your project requirements.
          </p>
          <Link to="/#contact">
            <Button size="lg">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
