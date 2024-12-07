'use client';

import { Button } from '@/components/ui/button';
import { MessageSquarePlus, Send } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CommunicationHeader() {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className="text-3xl font-bold">Communication</h1>
        <p className="text-muted-foreground">Manage church communications and messages</p>
      </div>
      <div className="flex gap-3">
        <Button variant="outline" size="default">
          <Send className="mr-2 h-4 w-4" />
          Send Broadcast
        </Button>
        <Button onClick={() => router.push('/communication/new')}>
          <MessageSquarePlus className="mr-2 h-4 w-4" />
          New Message
        </Button>
      </div>
    </div>
  );
}