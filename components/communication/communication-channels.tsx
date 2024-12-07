import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, MessageCircle, Bell, Mail } from 'lucide-react';

const channels = [
  {
    id: 1,
    name: 'General Announcements',
    type: 'Broadcast',
    members: 245,
    status: 'active',
    icon: Bell,
  },
  {
    id: 2,
    name: 'Youth Ministry',
    type: 'Group',
    members: 68,
    status: 'active',
    icon: Users,
  },
  {
    id: 3,
    name: 'Prayer Requests',
    type: 'Private',
    members: 124,
    status: 'active',
    icon: MessageCircle,
  },
  {
    id: 4,
    name: 'Newsletter',
    type: 'Email',
    members: 892,
    status: 'scheduled',
    icon: Mail,
  },
];

export default function CommunicationChannels() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Communication Channels</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {channels.map((channel) => (
            <div key={channel.id} className="border-b last:border-0 pb-4 last:pb-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <channel.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{channel.name}</h4>
                    <p className="text-sm text-muted-foreground">{channel.type}</p>
                  </div>
                </div>
                <Badge
                  variant={channel.status === 'active' ? 'default' : 'secondary'}
                >
                  {channel.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {channel.members} members
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}