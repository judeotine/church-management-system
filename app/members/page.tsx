import { Metadata } from 'next';
import MembersHeader from '@/components/members/members-header';
import MembersTable from '@/components/members/members-table';
import MembersFilters from '@/components/members/members-filters';
import { MembersProvider } from '@/components/members/members-context';

export const metadata: Metadata = {
  title: 'Members - Project Joe',
  description: 'Church member management',
};

export default function MembersPage() {
  return (
    <div className="container mx-auto p-6">
      <MembersProvider>
        <MembersHeader />
        <div className="mt-8">
          <MembersFilters />
          <div className="mt-4">
            <MembersTable />
          </div>
        </div>
      </MembersProvider>
    </div>
  );
}