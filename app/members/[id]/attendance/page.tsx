import { Metadata } from 'next';
import MemberAttendance from '@/components/members/attendance/member-attendance';
import { MembersProvider } from '@/components/members/members-context';
import { members } from '@/lib/members/data';

export const metadata: Metadata = {
  title: 'Member Attendance - Project Joe',
  description: 'View member attendance history',
};

export function generateStaticParams() {
  return members.map((member) => ({
    id: member.id.toString(),
  }));
}

export default function MemberAttendancePage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-6">
      <MembersProvider>
        <MemberAttendance memberId={parseInt(params.id)} />
      </MembersProvider>
    </div>
  );
}