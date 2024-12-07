'use client';

import { useRouter } from 'next/navigation';
import { useMembers } from '@/components/members/members-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

// Mock attendance data
const attendanceHistory = [
  {
    id: 1,
    event: 'Sunday Service',
    date: '2024-04-14',
    time: '10:00 AM',
    status: 'present',
  },
  {
    id: 2,
    event: 'Bible Study',
    date: '2024-04-10',
    time: '7:00 PM',
    status: 'absent',
  },
  {
    id: 3,
    event: 'Prayer Meeting',
    date: '2024-04-07',
    time: '6:30 PM',
    status: 'present',
  },
  {
    id: 4,
    event: 'Sunday Service',
    date: '2024-04-07',
    time: '10:00 AM',
    status: 'present',
  },
];

interface MemberAttendanceProps {
  memberId: number;
}

export default function MemberAttendance({ memberId }: MemberAttendanceProps) {
  const router = useRouter();
  const { members } = useMembers();
  const member = members.find((m) => m.id === memberId);

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" onClick={() => router.push(`/members/${memberId}`)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Profile
        </Button>
      </div>

      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold">Attendance History</h1>
          <p className="text-muted-foreground">{member.name}</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {attendanceHistory.map((record) => (
              <div
                key={record.id}
                className="flex items-center justify-between border-b last:border-0 pb-4 last:pb-0"
              >
                <div className="space-y-1">
                  <h4 className="font-medium">{record.event}</h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {new Date(record.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {record.time}
                    </div>
                  </div>
                </div>
                <Badge
                  variant={record.status === 'present' ? 'default' : 'secondary'}
                >
                  {record.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}