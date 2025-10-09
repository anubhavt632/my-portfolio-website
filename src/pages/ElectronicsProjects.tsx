import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useProjects } from "@/hooks/useProjects";
import { Loader2 } from "lucide-react";

const ElectronicsProjects = () => {
  const { data: projectsData, isLoading } = useProjects({ category: 'Electronics' });
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const projects = projectsData?.projects || [];
  const iotProjects = projects.filter((p: any) => p.subcategory === 'IoT Projects');
  const circuitDesigns = projects.filter((p: any) => p.subcategory === 'Circuit Design');
  const automation = projects.filter((p: any) => p.subcategory === 'Automation');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Electronics Projects</h1>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Innovative electronics and embedded systems projects showcasing hardware design, 
            IoT integration, and microcontroller programming.
          </p>

          <Tabs defaultValue="iot" className="w-full">
            <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="iot">IoT Projects</TabsTrigger>
              <TabsTrigger value="circuit">Circuit Design</TabsTrigger>
              <TabsTrigger value="automation">Automation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="iot" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {iotProjects.length > 0 ? (
                  iotProjects.map((project: any) => (
                    <ProjectCard key={project._id} {...project} />
                  ))
                ) : (
                  <p className="col-span-3 text-center text-muted-foreground py-8">No IoT projects yet.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="circuit" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {circuitDesigns.length > 0 ? (
                  circuitDesigns.map((project: any) => (
                    <ProjectCard key={project._id} {...project} />
                  ))
                ) : (
                  <p className="col-span-3 text-center text-muted-foreground py-8">No circuit design projects yet.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="automation" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {automation.length > 0 ? (
                  automation.map((project: any) => (
                    <ProjectCard key={project._id} {...project} />
                  ))
                ) : (
                  <p className="col-span-3 text-center text-muted-foreground py-8">No automation projects yet.</p>
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

export default ElectronicsProjects;
