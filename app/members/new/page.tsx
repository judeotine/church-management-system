import { Metadata } from 'next';
import NewMemberForm from '@/components/members/new/new-member-form';
import { MembersProvider } from '@/components/members/members-context';

export const metadata: Metadata = {
  title: 'Add New Member - Project Joe',
  description: 'Add a new member to the church database',
};

export default function NewMemberPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Add New Member</h1>
          <p className="text-muted-foreground">Enter the details of the new member</p>
        </div>
        <MembersProvider>
          <NewMemberForm />
        </MembersProvider>
      </div>
    </div>
  );
}