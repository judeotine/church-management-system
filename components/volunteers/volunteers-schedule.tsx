import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users } from 'lucide-react';

const schedules = [
  {
    id: 1,
    role: 'Usher',
    event: 'Sunday Service',
    date: 'Sunday, April 14',
    time: '9:30 AM - 11:30 AM',
    volunteers: 4,
    needed: 6,
  },
  {
    id: 2,
    role: 'Children\'s Ministry',
    event: 'Sunday School',
    date: 'Sunday, April 14',
    time: '10:00 AM - 12:00 PM',
    volunteers: 3,
    needed: 4,
  },
  {
    id: 3,
    role: 'Tech Team',
    event: 'Youth Service',
    date: 'Friday, April 19',
    time: '6:00 PM - 8:00 PM',
    volunteers: 2,
    needed: 2,
  },
];

export default function VolunteersSchedule() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {schedules.map((schedule) => (
            <div key={schedule.id} className="border-b last:border-0 pb-4 last:pb-0">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">{schedule.role}</h4>
                <Badge variant={schedule.volunteers >= schedule.needed ? 'default' : 'secondary'}>
                  {schedule.volunteers}/{schedule.needed} Volunteers
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{schedule.event}</p>
              <div className="grid gap-2">
                <div className="flex items-center text-sm">
                  <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                  {schedule.date}
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  {schedule.time}
                </div>
                <div className="flex items-center text-sm">
                  <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                  {schedule.volunteers} volunteers confirmed
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}