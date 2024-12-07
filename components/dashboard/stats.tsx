import { Card } from '@/components/ui/card';
import { Users, Calendar, DollarSign, Heart } from 'lucide-react';

const stats = [
  {
    label: 'Total Members',
    value: '1,234',
    icon: Users,
    trend: '+5.2%',
    trendUp: true,
  },
  {
    label: 'Weekly Attendance',
    value: '856',
    icon: Calendar,
    trend: '+2.1%',
    trendUp: true,
  },
  {
    label: 'Monthly Donations',
    value: '$12,345',
    icon: DollarSign,
    trend: '+8.4%',
    trendUp: true,
  },
  {
    label: 'Active Volunteers',
    value: '89',
    icon: Heart,
    trend: '-1.2%',
    trendUp: false,
  },
];

export default function DashboardStats() {
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
            <span className="text-sm text-muted-foreground ml-1">vs last month</span>
          </div>
        </Card>
      ))}
    </div>
  );
}