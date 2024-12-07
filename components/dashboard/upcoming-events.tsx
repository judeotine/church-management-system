import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Sunday Service',
    date: 'Sunday, April 14',
    time: '10:00 AM',
    location: 'Main Sanctuary',
  },
  {
    id: 2,
    title: 'Bible Study',
    date: 'Wednesday, April 17',
    time: '7:00 PM',
    location: 'Fellowship Hall',
  },
  {
    id: 3,
    title: 'Youth Group Meeting',
    date: 'Friday, April 19',
    time: '6:30 PM',
    location: 'Youth Center',
  },
  {
    id: 4,
    title: 'Choir Practice',
    date: 'Saturday, April 20',
    time: '4:00 PM',
    location: 'Choir Room',
  },
];

export default function UpcomingEvents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="border-b last:border-0 pb-4 last:pb-0">
              <h4 className="font-semibold">{event.title}</h4>
              <div className="mt-2 space-y-1">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  {event.date}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" />
                  {event.time}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  {event.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}