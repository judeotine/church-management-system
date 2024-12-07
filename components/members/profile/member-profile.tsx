'use client';

import { useMembers } from '@/components/members/members-context';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar, Mail, Phone, Edit, Clock } from 'lucide-react';

interface MemberProfileProps {
  memberId: number;
}

export default function MemberProfile({ memberId }: MemberProfileProps) {
  const router = useRouter();
  const { members } = useMembers();
  const member = members.find((m) => m.id === memberId);

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold">Member Profile</h1>
          <p className="text-muted-foreground">View member details and information</p>
        </div>
        <Button onClick={() => router.push(`/members/${memberId}/edit`)}>
          <Edit className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <Avatar className="h-24 w-24">
                <AvatarFallback className="text-2xl">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-semibold">{member.name}</h2>
                <div className="flex items-center mt-2">
                  <Badge variant={member.status === 'active' ? 'default' : 'secondary'}>
                    {member.status}
                  </Badge>
                  <span className="mx-2">•</span>
                  <span className="text-muted-foreground">{member.role}</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 mt-6">
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{member.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{member.phone}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Joined on {new Date(member.joinDate).toLocaleDateString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => router.push(`/members/${memberId}/attendance`)}
              >
                <Clock className="mr-2 h-4 w-4" />
                View Attendance History
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}