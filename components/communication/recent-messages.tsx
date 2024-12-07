import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const messages = [
  {
    id: 1,
    sender: 'Pastor John',
    subject: 'Weekly Update',
    preview: 'Here are the updates for this week\'s activities...',
    time: '2 hours ago',
    type: 'announcement',
    avatar: 'PJ',
  },
  {
    id: 2,
    sender: 'Youth Ministry',
    subject: 'Youth Camp Registration',
    preview: 'Registration for the summer youth camp is now open...',
    time: '4 hours ago',
    type: 'event',
    avatar: 'YM',
  },
  {
    id: 3,
    sender: 'Worship Team',
    subject: 'Sunday Service Schedule',
    preview: 'Here\'s the worship schedule for this Sunday...',
    time: '1 day ago',
    type: 'schedule',
    avatar: 'WT',
  },
  {
    id: 4,
    sender: 'Admin Team',
    subject: 'Building Maintenance',
    preview: 'Important updates regarding the building maintenance...',
    time: '2 days ago',
    type: 'maintenance',
    avatar: 'AT',
  },
];

export default function RecentMessages() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Messages</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex items-start space-x-4 border-b last:border-0 pb-4 last:pb-0"
            >
              <Avatar>
                <AvatarFallback>{message.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{message.sender}</p>
                  <Badge variant="secondary">{message.type}</Badge>
                </div>
                <p className="text-sm font-medium">{message.subject}</p>
                <p className="text-sm text-muted-foreground">{message.preview}</p>
                <p className="text-xs text-muted-foreground">{message.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}