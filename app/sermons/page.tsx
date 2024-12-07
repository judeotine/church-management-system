import { Metadata } from 'next';
import SermonsHeader from '@/components/sermons/sermons-header';
import SermonsGrid from '@/components/sermons/sermons-grid';
import SermonsFilters from '@/components/sermons/sermons-filters';

export const metadata: Metadata = {
  title: 'Sermons - Project Joe',
  description: 'Church sermon library and management',
};

export default function SermonsPage() {
  return (
    <div className="container mx-auto p-6">
      <SermonsHeader />
      <div className="mt-8">
        <SermonsFilters />
        <div className="mt-6">
          <SermonsGrid />
        </div>
      </div>
    </div>
  );
}