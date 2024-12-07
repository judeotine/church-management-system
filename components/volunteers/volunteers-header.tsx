'use client';

import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function VolunteersHeader() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">Volunteers</h1>
        <p className="text-muted-foreground">Manage volunteer teams and schedules</p>
      </div>
      <Button onClick={() => router.push('/volunteers/new')}>
        <UserPlus className="mr-2 h-4 w-4" />
        Add Volunteer
      </Button>
    </div>
  );
}