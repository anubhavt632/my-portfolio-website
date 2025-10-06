import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  tags?: string[];
}

const ProjectCard = ({ title, description, category, imageUrl, tags }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-border">
      <CardHeader className="p-0">
        <div className="w-full h-48 bg-muted overflow-hidden">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              {category}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      {tags && tags.length > 0 && (
        <CardFooter className="gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
