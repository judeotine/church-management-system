'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

export default function EventsCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Example event dates for highlighting
  const eventDates = [
    new Date(2024, 3, 14),
    new Date(2024, 3, 17),
    new Date(2024, 3, 19),
    new Date(2024, 3, 21),
    new Date(2024, 3, 28),
  ];

  const isDayWithEvent = (day: Date) => {
    return eventDates.some(eventDate => 
      eventDate.getDate() === day.getDate() &&
      eventDate.getMonth() === day.getMonth() &&
      eventDate.getFullYear() === day.getFullYear()
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Event Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          modifiers={{ hasEvent: isDayWithEvent }}
          modifiersStyles={{
            hasEvent: {
              fontWeight: 'bold',
              backgroundColor: 'hsl(var(--primary))',
              color: 'hsl(var(--primary-foreground))',
            },
          }}
        />
      </CardContent>
    </Card>
  );
}