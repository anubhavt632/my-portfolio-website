import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VideoEditing = () => {
  const advertisements = [
    { title: "Product Launch Ad", description: "30-second commercial for tech product", tags: ["Advertisement", "Commercial"] },
    { title: "Brand Story", description: "Emotional brand storytelling video", tags: ["Advertisement", "Branding"] }
  ];

  const educational = [
    { title: "Tutorial Series", description: "Educational electronics engineering tutorials", tags: ["Education", "Tutorial"] },
    { title: "Course Promo", description: "Online course promotional video", tags: ["Education", "Promotion"] }
  ];

  const social = [
    { title: "Instagram Reels", description: "Trending format social media content", tags: ["Reels", "Instagram"] },
    { title: "YouTube Shorts", description: "Quick-form video content", tags: ["Shorts", "YouTube"] }
  ];

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
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="ads">Advertisements</TabsTrigger>
              <TabsTrigger value="education">Educational</TabsTrigger>
              <TabsTrigger value="social">Social Media</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ads" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {advertisements.map((project, index) => (
                  <ProjectCard key={index} category="Advertisement" {...project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="education" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {educational.map((project, index) => (
                  <ProjectCard key={index} category="Educational" {...project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="social" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {social.map((project, index) => (
                  <ProjectCard key={index} category="Social Media" {...project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default VideoEditing;
