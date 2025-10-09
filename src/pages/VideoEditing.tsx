import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useProjects } from "@/hooks/useProjects";
import { Loader2 } from "lucide-react";

const VideoEditing = () => {
  const { data: projectsData, isLoading } = useProjects({ category: 'Video Editing' });
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const projects = projectsData?.projects || [];
  const advertisements = projects.filter((p: any) => p.subcategory === 'Advertisements');
  const educational = projects.filter((p: any) => p.subcategory === 'Educational');
  const promotional = projects.filter((p: any) => p.subcategory === 'Promotional');
  const reels = projects.filter((p: any) => p.subcategory === 'Reels');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Video Editing</h1>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Professional video content from advertisements to social media, crafted with precision and creativity.
          </p>

          <Tabs defaultValue="ads" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="ads">Advertisements</TabsTrigger>
              <TabsTrigger value="education">Educational</TabsTrigger>
              <TabsTrigger value="promotional">Promotional</TabsTrigger>
              <TabsTrigger value="reels">Reels</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ads" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {advertisements.length > 0 ? (
                  advertisements.map((project: any) => (
                    <ProjectCard key={project._id} {...project} />
                  ))
                ) : (
                  <p className="col-span-3 text-center text-muted-foreground py-8">No advertisement projects yet.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="education" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {educational.length > 0 ? (
                  educational.map((project: any) => (
                    <ProjectCard key={project._id} {...project} />
                  ))
                ) : (
                  <p className="col-span-3 text-center text-muted-foreground py-8">No educational projects yet.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="promotional" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {promotional.length > 0 ? (
                  promotional.map((project: any) => (
                    <ProjectCard key={project._id} {...project} />
                  ))
                ) : (
                  <p className="col-span-3 text-center text-muted-foreground py-8">No promotional projects yet.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="reels" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {reels.length > 0 ? (
                  reels.map((project: any) => (
                    <ProjectCard key={project._id} {...project} />
                  ))
                ) : (
                  <p className="col-span-3 text-center text-muted-foreground py-8">No reels projects yet.</p>
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

export default VideoEditing;
