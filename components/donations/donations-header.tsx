'use client';

import { Button } from '@/components/ui/button';
import { PlusCircle, Download } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DonationsHeader() {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className="text-3xl font-bold">Donations</h1>
        <p className="text-muted-foreground">Manage donations and generate reports</p>
      </div>
      <div className="flex gap-3">
        <Button variant="outline" size="default">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
        <Button onClick={() => router.push('/donations/new')}>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Donation
        </Button>
      </div>
    </div>
  );
}