import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectFormEnhanced from "@/components/ProjectFormEnhanced";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/hooks/useAuth";
import { useProjects, useCreateProject, useUpdateProject, useDeleteProject } from "@/hooks/useProjects";
import { Loader2, Plus, Pencil, Trash2, Search, Filter, Image as ImageIcon, Video } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { data: projectsData, isLoading: projectsLoading } = useProjects();
  const createProject = useCreateProject();
  const updateProject = useUpdateProject();
  const deleteProject = useDeleteProject();

  const [formOpen, setFormOpen] = useState(false);
  const [formMode, setFormMode] = useState<'create' | 'edit'>('create');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  useEffect(() => {
    if (!authLoading && (!user || !user.isAdmin)) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  if (authLoading || projectsLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const projects = projectsData?.projects || [];
  
  // Filter and search projects
  const filteredProjects = projects.filter((p: any) => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || p.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const graphicDesignCount = projects.filter((p: any) => p.category === 'Graphic Design').length;
  const videoEditingCount = projects.filter((p: any) => p.category === 'Video Editing').length;
  const webDevCount = projects.filter((p: any) => p.category === 'Web Development').length;
  const electronicsCount = projects.filter((p: any) => p.category === 'Electronics').length;

  const handleCreateProject = () => {
    setFormMode('create');
    setSelectedProject(null);
    setFormOpen(true);
  };

  const handleEditProject = (project: any) => {
    setFormMode('edit');
    setSelectedProject(project);
    setFormOpen(true);
  };

  const handleDeleteClick = (id: string) => {
    setProjectToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (projectToDelete) {
      deleteProject.mutate(projectToDelete);
      setDeleteDialogOpen(false);
      setProjectToDelete(null);
    }
  };

  const handleFormSubmit = (data: any) => {
    if (formMode === 'create') {
      createProject.mutate(data);
    } else if (selectedProject) {
      updateProject.mutate({ id: selectedProject._id, data });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <Button onClick={handleCreateProject}>
            <Plus className="mr-2 h-4 w-4" />
            Add New Project
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Graphic Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{graphicDesignCount}</p>
              <p className="text-sm text-muted-foreground">Total projects</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Video Editing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{videoEditingCount}</p>
              <p className="text-sm text-muted-foreground">Total projects</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Web Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{webDevCount}</p>
              <p className="text-sm text-muted-foreground">Total projects</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Electronics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{electronicsCount}</p>
              <p className="text-sm text-muted-foreground">Total projects</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>All Projects</CardTitle>
                <CardDescription>Manage your portfolio projects</CardDescription>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 w-64"
                  />
                </div>
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger className="w-48">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                    <SelectItem value="Video Editing">Video Editing</SelectItem>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Electronics">Electronics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredProjects.map((project: any) => (
                <div key={project._id} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  {project.imageUrl && (
                    <div className="flex-shrink-0">
                      <img src={project.imageUrl} alt={project.title} className="w-24 h-24 object-cover rounded" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold truncate">{project.title}</h3>
                      <Badge variant="secondary">{project.category}</Badge>
                      {project.featured && <Badge>Featured</Badge>}
                      {project.imageUrl && <ImageIcon className="h-4 w-4 text-muted-foreground" />}
                      {project.videoUrl && <Video className="h-4 w-4 text-muted-foreground" />}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex gap-2 mt-2 flex-wrap">
                        {project.tags.map((tag: string, idx: number) => (
                          <Badge key={idx} variant="outline" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={() => handleEditProject(project)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="icon" onClick={() => handleDeleteClick(project._id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              {filteredProjects.length === 0 && projects.length > 0 && (
                <p className="text-center text-muted-foreground py-8">No projects match your search criteria.</p>
              )}
              {projects.length === 0 && (
                <p className="text-center text-muted-foreground py-8">No projects yet. Create your first project!</p>
              )}
            </div>
          </CardContent>
        </Card>
      </main>

      <ProjectFormEnhanced
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={selectedProject}
        mode={formMode}
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the project.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
