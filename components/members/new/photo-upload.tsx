'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Upload, X } from 'lucide-react';

interface PhotoUploadProps {
  photoPreview: string | null;
  initials: string;
  onPhotoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPhotoClear: () => void;
  hasPhoto: boolean;
}

export default function PhotoUpload({
  photoPreview,
  initials,
  onPhotoChange,
  onPhotoClear,
  hasPhoto,
}: PhotoUploadProps) {
  return (
    <div className="flex items-center gap-8 mb-8">
      <div>
        <Avatar className="h-24 w-24">
          {photoPreview ? (
            <AvatarImage src={photoPreview} alt="Preview" />
          ) : (
            <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
          )}
        </Avatar>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold mb-2">Profile Photo</h3>
        <div className="flex items-center gap-4">
          <Input
            type="file"
            accept="image/*"
            onChange={onPhotoChange}
            className="hidden"
            id="photo-upload"
          />
          <Button type="button" variant="outline" asChild>
            <label htmlFor="photo-upload" className="cursor-pointer">
              <Upload className="mr-2 h-4 w-4" />
              Upload Photo
            </label>
          </Button>
          {hasPhoto && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={onPhotoClear}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}