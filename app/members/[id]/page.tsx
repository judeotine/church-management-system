import { Metadata } from 'next';
import MemberProfile from '@/components/members/profile/member-profile';
import { MembersProvider } from '@/components/members/members-context';
import { members } from '@/lib/members/data';

export const metadata: Metadata = {
  title: 'Member Profile - Project Joe',
  description: 'View member details and history',
};

export function generateStaticParams() {
  return members.map((member) => ({
    id: member.id.toString(),
  }));
}

export default function MemberProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-6">
      <MembersProvider>
        <MemberProfile memberId={parseInt(params.id)} />
      </MembersProvider>
    </div>
  );
}