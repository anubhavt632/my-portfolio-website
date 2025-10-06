import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WebDevelopment = () => {
  const mernProjects = [
    { title: "E-Commerce Platform", description: "Full-stack shopping platform with payment integration", tags: ["React", "Node.js", "MongoDB", "Express"] },
    { title: "Blog CMS", description: "Content management system with authentication", tags: ["MERN", "JWT", "Admin Panel"] }
  ];

  const staticSites = [
    { title: "Portfolio Website", description: "Responsive portfolio with modern design", tags: ["HTML", "CSS", "JavaScript"] },
    { title: "Landing Page", description: "High-converting product landing page", tags: ["HTML", "CSS", "Responsive"] }
  ];

  const dynamicSites = [
    { title: "Real-time Dashboard", description: "Analytics dashboard with live data", tags: ["React", "API", "Charts"] },
    { title: "Booking System", description: "Appointment booking web application", tags: ["React", "Database", "CRUD"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Web Development</h1>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Full-stack applications and responsive websites built with modern technologies and best practices.
          </p>

          <Tabs defaultValue="mern" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="mern">MERN Stack</TabsTrigger>
              <TabsTrigger value="static">Static Sites</TabsTrigger>
              <TabsTrigger value="dynamic">Dynamic Sites</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mern" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {mernProjects.map((project, index) => (
                  <ProjectCard key={index} category="MERN Stack" {...project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="static" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {staticSites.map((project, index) => (
                  <ProjectCard key={index} category="Static Website" {...project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="dynamic" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {dynamicSites.map((project, index) => (
                  <ProjectCard key={index} category="Dynamic Website" {...project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WebDevelopment;
