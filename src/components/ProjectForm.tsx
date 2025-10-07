import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface ProjectFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialData?: any;
  mode: 'create' | 'edit';
}

const ProjectForm = ({ open, onClose, onSubmit, initialData, mode }: ProjectFormProps) => {
  const [formData, setFormData] = useState(initialData || {
    title: '',
    description: '',
    category: '',
    subcategory: '',
    tags: '',
    imageUrl: '',
    videoUrl: '',
    projectUrl: '',
    githubUrl: '',
    featured: false,
    order: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tags = formData.tags ? formData.tags.split(',').map((t: string) => t.trim()) : [];
    onSubmit({ ...formData, tags });
    onClose();
  };

  const handleChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{mode === 'create' ? 'Add New Project' : 'Edit Project'}</DialogTitle>
          <DialogDescription>
            Fill in the project details below. Fields marked with * are required.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              required
            />
          </div>

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
            <Input
              id="subcategory"
              value={formData.subcategory}
              onChange={(e) => handleChange('subcategory', e.target.value)}
            />
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

          <div>
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              id="imageUrl"
              value={formData.imageUrl}
              onChange={(e) => handleChange('imageUrl', e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <Label htmlFor="videoUrl">Video URL</Label>
            <Input
              id="videoUrl"
              value={formData.videoUrl}
              onChange={(e) => handleChange('videoUrl', e.target.value)}
              placeholder="https://youtube.com/..."
            />
          </div>

          <div>
            <Label htmlFor="projectUrl">Project URL</Label>
            <Input
              id="projectUrl"
              value={formData.projectUrl}
              onChange={(e) => handleChange('projectUrl', e.target.value)}
              placeholder="https://myproject.com"
            />
          </div>

          <div>
            <Label htmlFor="githubUrl">GitHub URL</Label>
            <Input
              id="githubUrl"
              value={formData.githubUrl}
              onChange={(e) => handleChange('githubUrl', e.target.value)}
              placeholder="https://github.com/..."
            />
          </div>

          <div className="flex items-center gap-4">
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

            <div className="flex-1">
              <Label htmlFor="order">Display Order</Label>
              <Input
                id="order"
                type="number"
                value={formData.order}
                onChange={(e) => handleChange('order', parseInt(e.target.value))}
              />
            </div>
          </div>

          <div className="flex gap-2 justify-end pt-4">
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

export default ProjectForm;
