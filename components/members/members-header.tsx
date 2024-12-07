'use client';

import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function MembersHeader() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold">Members</h1>
        <p className="text-muted-foreground">Manage church members and their information</p>
      </div>
      <Button onClick={() => router.push('/members/new')}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Member
      </Button>
    </div>
  );
}