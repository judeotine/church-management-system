import { Card } from '@/components/ui/card';
import { Calendar, Users, Clock, Star } from 'lucide-react';

const stats = [
  {
    label: 'Total Events',
    value: '24',
    trend: '+3',
    trendUp: true,
    description: 'this month',
    icon: Calendar,
  },
  {
    label: 'Total Attendees',
    value: '1,234',
    trend: '+12%',
    trendUp: true,
    description: 'vs last month',
    icon: Users,
  },
  {
    label: 'Upcoming Events',
    value: '8',
    trend: '3 this week',
    trendUp: true,
    description: 'next 7 days',
    icon: Clock,
  },
  {
    label: 'Featured Events',
    value: '3',
    trend: 'Active now',
    trendUp: true,
    description: 'special events',
    icon: Star,
  },
];

export default function EventsStats() {
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