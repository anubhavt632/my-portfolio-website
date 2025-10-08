import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Upload, X, Loader2, Image as ImageIcon, Video } from 'lucide-react';
import { api } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

interface FileUploadProps {
  label: string;
  accept: string;
  category: string;
  currentUrl?: string;
  currentPath?: string;
  onUploadComplete: (url: string, path: string) => void;
  type: 'image' | 'video';
}

const FileUpload = ({ label, accept, category, currentUrl, currentPath, onUploadComplete, type }: FileUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentUrl || null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (50MB max)
    if (file.size > 50 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Maximum file size is 50MB",
        variant: "destructive",
      });
      return;
    }

    try {
      setUploading(true);

      // Create preview for images
      if (type === 'image') {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }

      // Upload to Firebase via backend
      const response = await api.uploadFile(file, category);
      onUploadComplete(response.url, response.path);

      toast({
        title: "Upload successful",
        description: `${type === 'image' ? 'Image' : 'Video'} uploaded successfully`,
      });
    } catch (error: any) {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive",
      });
      setPreview(null);
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = async () => {
    if (currentPath) {
      try {
        await api.deleteFile(currentPath);
        toast({
          title: "File removed",
          description: "File has been deleted from storage",
        });
      } catch (error) {
        console.error('Delete error:', error);
      }
    }
    setPreview(null);
    onUploadComplete('', '');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      
      <div className="border-2 border-dashed rounded-lg p-4">
        {preview && type === 'image' ? (
          <div className="relative">
            <img src={preview} alt="Preview" className="w-full h-48 object-cover rounded" />
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2"
              onClick={handleRemove}
              disabled={uploading}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : preview && type === 'video' ? (
          <div className="relative">
            <div className="flex items-center gap-2 p-4 bg-muted rounded">
              <Video className="h-6 w-6" />
              <span className="text-sm truncate flex-1">Video uploaded</span>
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={handleRemove}
                disabled={uploading}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8">
            {type === 'image' ? (
              <ImageIcon className="h-12 w-12 text-muted-foreground mb-2" />
            ) : (
              <Video className="h-12 w-12 text-muted-foreground mb-2" />
            )}
            <p className="text-sm text-muted-foreground mb-4">
              {type === 'image' ? 'Click to upload an image' : 'Click to upload a video'}
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
            >
              {uploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Choose File
                </>
              )}
            </Button>
          </div>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileSelect}
        className="hidden"
      />
      
      <p className="text-xs text-muted-foreground">
        Max size: 50MB. {type === 'image' ? 'Supported: JPG, PNG, GIF, WebP' : 'Supported: MP4, MOV, AVI, MKV'}
      </p>
    </div>
  );
};

export default FileUpload;
