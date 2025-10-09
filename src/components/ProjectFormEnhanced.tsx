import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FileUpload from './FileUpload';

interface ProjectFormEnhancedProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialData?: any;
  mode: 'create' | 'edit';
}

const ProjectFormEnhanced = ({ open, onClose, onSubmit, initialData, mode }: ProjectFormEnhancedProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    subcategory: '',
    tags: '',
    imageUrl: '',
    imagePath: '',
    videoUrl: '',
    videoPath: '',
    projectUrl: '',
    githubUrl: '',
    featured: false,
    order: 0,
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        tags: initialData.tags?.join(', ') || '',
      });
    } else {
      setFormData({
        title: '',
        description: '',
        category: '',
        subcategory: '',
        tags: '',
        imageUrl: '',
        imagePath: '',
        videoUrl: '',
        videoPath: '',
        projectUrl: '',
        githubUrl: '',
        featured: false,
        order: 0,
      });
    }
  }, [initialData, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tags = formData.tags ? formData.tags.split(',').map((t: string) => t.trim()) : [];
    onSubmit({ ...formData, tags });
    onClose();
  };

  const handleChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleImageUpload = (url: string, path: string) => {
    setFormData({ ...formData, imageUrl: url, imagePath: path });
  };

  const handleVideoUpload = (url: string, path: string) => {
    setFormData({ ...formData, videoUrl: url, videoPath: path });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{mode === 'create' ? 'Add New Project' : 'Edit Project'}</DialogTitle>
          <DialogDescription>
            Fill in the project details below. Upload files directly to Firebase Storage.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="links">Links</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4 mt-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                  <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                  <SelectItem value="Video Editing">Video Editing</SelectItem>
                  <SelectItem value="Web Development">Web Development</SelectItem>
                  <SelectItem value="Electronics">Electronics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="subcategory">Subcategory</Label>
                  <Select value={formData.subcategory} onValueChange={(value) => handleChange('subcategory', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                      {formData.category === 'Graphic Design' && (
                        <>
                          <SelectItem value="Logos">Logos</SelectItem>
                          <SelectItem value="Social Media">Social Media</SelectItem>
                          <SelectItem value="Banners">Banners</SelectItem>
                          <SelectItem value="Illustrations">Illustrations</SelectItem>
                        </>
                      )}
                      {formData.category === 'Video Editing' && (
                        <>
                          <SelectItem value="Advertisements">Advertisements</SelectItem>
                          <SelectItem value="Educational">Educational</SelectItem>
                          <SelectItem value="Promotional">Promotional</SelectItem>
                          <SelectItem value="Reels">Reels</SelectItem>
                        </>
                      )}
                      {formData.category === 'Web Development' && (
                        <>
                          <SelectItem value="Websites">Websites</SelectItem>
                          <SelectItem value="Web Apps">Web Apps</SelectItem>
                          <SelectItem value="E-commerce">E-commerce</SelectItem>
                          <SelectItem value="Figma Designs">Figma Designs</SelectItem>
                        </>
                      )}
                      {formData.category === 'Electronics' && (
                        <>
                          <SelectItem value="IoT Projects">IoT Projects</SelectItem>
                          <SelectItem value="Circuit Design">Circuit Design</SelectItem>
                          <SelectItem value="Automation">Automation</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => handleChange('tags', e.target.value)}
                  placeholder="React, TypeScript, UI/UX"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => handleChange('featured', e.target.checked)}
                    className="w-4 h-4"
                  />
                  <Label htmlFor="featured">Featured Project</Label>
                </div>

                <div>
                  <Label htmlFor="order">Display Order</Label>
                  <Input
                    id="order"
                    type="number"
                    value={formData.order}
                    onChange={(e) => handleChange('order', parseInt(e.target.value) || 0)}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="media" className="space-y-4 mt-4">
              <FileUpload
                label="Project Image"
                accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                category={formData.category || 'Uncategorized'}
                currentUrl={formData.imageUrl}
                currentPath={formData.imagePath}
                onUploadComplete={handleImageUpload}
                type="image"
              />

              <FileUpload
                label="Project Video"
                accept="video/mp4,video/mov,video/avi,video/mkv"
                category={formData.category || 'Uncategorized'}
                currentUrl={formData.videoUrl}
                currentPath={formData.videoPath}
                onUploadComplete={handleVideoUpload}
                type="video"
              />
            </TabsContent>

            <TabsContent value="links" className="space-y-4 mt-4">
              <div>
                <Label htmlFor="projectUrl">Live Project URL</Label>
                <Input
                  id="projectUrl"
                  type="url"
                  value={formData.projectUrl}
                  onChange={(e) => handleChange('projectUrl', e.target.value)}
                  placeholder="https://myproject.com"
                />
              </div>

              <div>
                <Label htmlFor="githubUrl">GitHub Repository URL</Label>
                <Input
                  id="githubUrl"
                  type="url"
                  value={formData.githubUrl}
                  onChange={(e) => handleChange('githubUrl', e.target.value)}
                  placeholder="https://github.com/username/repo"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex gap-2 justify-end pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {mode === 'create' ? 'Create Project' : 'Update Project'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectFormEnhanced;
