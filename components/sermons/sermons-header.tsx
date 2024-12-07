'use client';

import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SermonsHeader() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold">Sermons</h1>
        <p className="text-muted-foreground">Browse and manage sermon recordings</p>
      </div>
      <Button onClick={() => router.push('/sermons/upload')}>
        <Upload className="mr-2 h-4 w-4" />
        Upload Sermon
      </Button>
    </div>
  );
}