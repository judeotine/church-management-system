'use client';

import { Button } from '@/components/ui/button';
import { PlusCircle, Calendar as CalendarIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function EventsHeader() {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className="text-3xl font-bold">Events</h1>
        <p className="text-muted-foreground">Manage church events and activities</p>
      </div>
      <div className="flex gap-3">
        <Button variant="outline" size="default">
          <CalendarIcon className="mr-2 h-4 w-4" />
          Sync Calendar
        </Button>
        <Button onClick={() => router.push('/events/new')}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Event
        </Button>
      </div>
    </div>
  );
}