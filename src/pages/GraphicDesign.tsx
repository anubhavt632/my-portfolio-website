import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useProjects } from "@/hooks/useProjects";
import { Loader2 } from "lucide-react";

const GraphicDesign = () => {
  const { data: projectsData, isLoading } = useProjects({ category: 'Graphic Design' });
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const projects = projectsData?.projects || [];
  const logos = projects.filter((p: any) => p.subcategory === 'Logos');
  const socialMedia = projects.filter((p: any) => p.subcategory === 'Social Media');
  const banners = projects.filter((p: any) => p.subcategory === 'Banners');
  const illustrations = projects.filter((p: any) => p.subcategory === 'Illustrations');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Graphic Design</h1>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Creative visual solutions across logos, social media content, and digital marketing materials.
          </p>

          <Tabs defaultValue="logos" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="logos">Logos</TabsTrigger>
              <TabsTrigger value="social">Social Media</TabsTrigger>
              <TabsTrigger value="banners">Banners</TabsTrigger>
              <TabsTrigger value="illustrations">Illustrations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="logos" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {logos.length > 0 ? (
                  logos.map((project: any) => (
                    <ProjectCard key={project._id} {...project} />
                  ))
                ) : (
                  <p className="col-span-3 text-center text-muted-foreground py-8">No logo projects yet.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="social" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {socialMedia.length > 0 ? (
                  socialMedia.map((project: any) => (
                    <ProjectCard key={project._id} {...project} />
                  ))
                ) : (
                  <p className="col-span-3 text-center text-muted-foreground py-8">No social media projects yet.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="banners" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {banners.length > 0 ? (
                  banners.map((project: any) => (
                    <ProjectCard key={project._id} {...project} />
                  ))
                ) : (
                  <p className="col-span-3 text-center text-muted-foreground py-8">No banner projects yet.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="illustrations" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {illustrations.length > 0 ? (
                  illustrations.map((project: any) => (
                    <ProjectCard key={project._id} {...project} />
                  ))
                ) : (
                  <p className="col-span-3 text-center text-muted-foreground py-8">No illustration projects yet.</p>
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

export default GraphicDesign;
