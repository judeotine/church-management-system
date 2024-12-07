import { Card } from '@/components/ui/card';
import { MessageSquare, Users, Send, Bell } from 'lucide-react';

const stats = [
  {
    label: 'Total Messages',
    value: '1,234',
    trend: '+82',
    trendUp: true,
    description: 'this month',
    icon: MessageSquare,
  },
  {
    label: 'Active Channels',
    value: '8',
    trend: '+2',
    trendUp: true,
    description: 'vs last month',
    icon: Users,
  },
  {
    label: 'Messages Sent',
    value: '456',
    trend: '+12%',
    trendUp: true,
    description: 'this week',
    icon: Send,
  },
  {
    label: 'Notifications',
    value: '89',
    trend: 'Active',
    trendUp: true,
    description: 'pending',
    icon: Bell,
  },
];

export default function CommunicationStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
            </div>
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <stat.icon className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div className="mt-4">
            <span
              className={`text-sm font-medium ${
                stat.trendUp ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {stat.trend}
            </span>
            <span className="text-sm text-muted-foreground ml-1">
              {stat.description}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}