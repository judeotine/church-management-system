import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Download, Clock, Calendar } from 'lucide-react';

const sermons = [
  {
    id: 1,
    title: 'Walking in Faith',
    speaker: 'Pastor John Smith',
    series: 'Faith Foundations',
    date: '2024-04-07',
    duration: '45:30',
    thumbnail: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'The Power of Prayer',
    speaker: 'Pastor Sarah Johnson',
    series: 'Hope in Action',
    date: '2024-03-31',
    duration: '38:15',
    thumbnail: 'https://images.unsplash.com/photo-1445445290350-18a3b86e0b5a?w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Living with Purpose',
    speaker: 'Pastor John Smith',
    series: 'Love Unlimited',
    date: '2024-03-24',
    duration: '42:20',
    thumbnail: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Grace for Today',
    speaker: 'Guest Speaker Dr. Michael Chen',
    series: 'Hope in Action',
    date: '2024-03-17',
    duration: '40:45',
    thumbnail: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&auto=format&fit=crop',
  },
];

export default function SermonsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {sermons.map((sermon) => (
        <Card key={sermon.id} className="overflow-hidden">
          <div className="relative aspect-video">
            <img
              src={sermon.thumbnail}
              alt={sermon.title}
              className="object-cover w-full h-full"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4"
            >
              <Play className="h-4 w-4" />
            </Button>
          </div>
          <CardContent className="p-4">
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold">{sermon.title}</h3>
                <p className="text-sm text-muted-foreground">{sermon.speaker}</p>
              </div>
              <Badge variant="secondary">{sermon.series}</Badge>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  {new Date(sermon.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  {sermon.duration}
                </div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <Button variant="outline" size="sm" className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Play
                </Button>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}