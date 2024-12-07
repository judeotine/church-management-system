import { Metadata } from 'next';
import EditMemberForm from '@/components/members/edit/edit-member-form';
import { MembersProvider } from '@/components/members/members-context';
import { members } from '@/lib/members/data';

export const metadata: Metadata = {
  title: 'Edit Member - Project Joe',
  description: 'Edit member information',
};

export function generateStaticParams() {
  return members.map((member) => ({
    id: member.id.toString(),
  }));
}

export default function EditMemberPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-6">
      <MembersProvider>
        <EditMemberForm memberId={parseInt(params.id)} />
      </MembersProvider>
    </div>
  );
}