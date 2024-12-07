import { Metadata } from 'next';
import SermonUploadForm from '@/components/sermons/upload/sermon-upload-form';

export const metadata: Metadata = {
  title: 'Upload Sermon - Project Joe',
  description: 'Upload and manage church sermons',
};

export default function SermonUploadPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Upload Sermon</h1>
          <p className="text-muted-foreground">Add a new sermon to the library</p>
        </div>
        <SermonUploadForm />
      </div>
    </div>
  );
}