import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GraphicDesign = () => {
  const logos = [
    { title: "Tech Startup Logo", description: "Modern minimalist logo design", tags: ["Logo", "Branding"] },
    { title: "Restaurant Brand", description: "Elegant food industry branding", tags: ["Logo", "Print"] }
  ];

  const socialMedia = [
    { title: "Instagram Post Series", description: "Product launch campaign posts", tags: ["Instagram", "Social Media"] },
    { title: "Story Templates", description: "Engaging story templates for brand", tags: ["Stories", "Templates"] }
  ];

  const banners = [
    { title: "E-commerce Banners", description: "Seasonal sale web banners", tags: ["Web Banner", "Marketing"] },
    { title: "Event Promotion", description: "Conference promotional materials", tags: ["Banner", "Event"] }
  ];

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
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="logos">Logos</TabsTrigger>
              <TabsTrigger value="social">Social Media</TabsTrigger>
              <TabsTrigger value="banners">Banners</TabsTrigger>
            </TabsList>
            
            <TabsContent value="logos" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {logos.map((project, index) => (
                  <ProjectCard key={index} category="Logo Design" {...project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="social" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {socialMedia.map((project, index) => (
                  <ProjectCard key={index} category="Social Media" {...project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="banners" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                {banners.map((project, index) => (
                  <ProjectCard key={index} category="Web Banner" {...project} />
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

export default GraphicDesign;
