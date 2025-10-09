import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useProjects } from "@/hooks/useProjects";
import { Loader2 } from "lucide-react";

const WebDevelopment = () => {
  const { data: projectsData, isLoading } = useProjects({ category: 'Web Development' });
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const projects = projectsData?.projects || [];
  const websites = projects.filter((p: any) => p.subcategory === 'Websites');
  const webApps = projects.filter((p: any) => p.subcategory === 'Web Apps');
  const ecommerce = projects.filter((p: any) => p.subcategory === 'E-commerce');
  const figmaDesigns = projects.filter((p: any) => p.subcategory === 'Figma Designs');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Web Development</h1>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Full-stack applications and responsive websites built with modern technologies and best practices.
          </p>

          <Tabs defaultValue="websites" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="websites">Websites</TabsTrigger>
              <TabsTrigger value="webapps">Web Apps</TabsTrigger>
              <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
              <TabsTrigger value="figma">Figma Designs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="websites" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {websites.length > 0 ? (
                  websites.map((project: any) => (
                    <ProjectCard key={project._id} {...project} />
                  ))
                ) : (
                  <p className="col-span-3 text-center text-muted-foreground py-8">No website projects yet.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="webapps" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {webApps.length > 0 ? (
                  webApps.map((project: any) => (
                    <ProjectCard key={project._id} {...project} />
                  ))
                ) : (
                  <p className="col-span-3 text-center text-muted-foreground py-8">No web app projects yet.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="ecommerce" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {ecommerce.length > 0 ? (
                  ecommerce.map((project: any) => (
                    <ProjectCard key={project._id} {...project} />
                  ))
                ) : (
                  <p className="col-span-3 text-center text-muted-foreground py-8">No e-commerce projects yet.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="figma" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {figmaDesigns.length > 0 ? (
                  figmaDesigns.map((project: any) => (
                    <ProjectCard key={project._id} {...project} />
                  ))
                ) : (
                  <p className="col-span-3 text-center text-muted-foreground py-8">No Figma design projects yet.</p>
                )}
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
