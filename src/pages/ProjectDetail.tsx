import { useParams, useNavigate, Link } from "react-router-dom";
import { useProject } from "@/hooks/useProjects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, ArrowLeft, ExternalLink, Github } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, isLoading } = useProject(id || '');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!data?.project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Button onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const project = data.project;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary">{project.category}</Badge>
                {project.subcategory && <Badge variant="outline">{project.subcategory}</Badge>}
                {project.featured && <Badge>Featured</Badge>}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground">{project.description}</p>
            </div>

            {/* Media */}
            {(project.imageUrl || project.videoUrl) && (
              <div className="rounded-lg overflow-hidden border border-border bg-card">
                {project.videoUrl ? (
                  <video 
                    src={project.videoUrl} 
                    controls 
                    className="w-full"
                    poster={project.imageUrl}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : project.imageUrl && (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-auto"
                  />
                )}
              </div>
            )}

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string, idx: number) => (
                    <Badge key={idx} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            {(project.projectUrl || project.githubUrl) && (
              <div className="flex flex-wrap gap-4">
                {project.projectUrl && (
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    <Button>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Demo
                    </Button>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Button>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
