import { Card } from '@/components/ui/card';
import { Users, Clock, CalendarCheck, Award } from 'lucide-react';

const stats = [
  {
    label: 'Active Volunteers',
    value: '89',
    icon: Users,
    description: 'Currently serving',
  },
  {
    label: 'Hours Served',
    value: '1,234',
    icon: Clock,
    description: 'This month',
  },
  {
    label: 'Upcoming Shifts',
    value: '45',
    icon: CalendarCheck,
    description: 'Next 7 days',
  },
  {
    label: 'Recognition Points',
    value: '2,567',
    icon: Award,
    description: 'Total awarded',
  },
];

export default function VolunteersStats() {
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
          <p className="text-sm text-muted-foreground mt-2">{stat.description}</p>
        </Card>
      ))}
    </div>
  );
}