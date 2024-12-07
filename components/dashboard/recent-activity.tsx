import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const activities = [
  {
    id: 1,
    user: 'Sarah Johnson',
    action: 'registered for',
    target: 'Youth Bible Study',
    time: '2 hours ago',
    avatar: 'SJ',
  },
  {
    id: 2,
    user: 'Michael Chen',
    action: 'made a donation of',
    target: '$50',
    time: '3 hours ago',
    avatar: 'MC',
  },
  {
    id: 3,
    user: 'Emma Wilson',
    action: 'volunteered for',
    target: 'Sunday Service',
    time: '5 hours ago',
    avatar: 'EW',
  },
  {
    id: 4,
    user: 'James Brown',
    action: 'attended',
    target: 'Prayer Meeting',
    time: '1 day ago',
    avatar: 'JB',
  },
];

export default function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4">
              <Avatar>
                <AvatarFallback>{activity.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.user}{' '}
                  <span className="text-muted-foreground">{activity.action}</span>{' '}
                  {activity.target}
                </p>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}